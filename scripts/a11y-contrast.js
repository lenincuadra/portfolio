#!/usr/bin/env node
// =============================================================================
// A11Y CONTRAST CHECK — WCAG AA, sin dependencias (node scripts/a11y-contrast.js)
//
// Lee styles/tokens.css (light = :root, dark = html.theme-dark) y valida el
// manifest de PAIRS: cada par fondo/texto REAL del sitio, en ambos temas.
//
// REGLAS DEL SISTEMA (ver docs/a11y.md):
//   · Texto usa --ink / --ink-2 / --ink-3. --ink-4 es SOLO decorativo
//     (numerales aria-hidden, placeholders, bordes) — nunca texto legible.
//   · Acento como TEXTO sobre fondos de página usa --accent-ink (theme-aware).
//     El focus ring también usa --accent-ink. --accent queda para superficies
//     (botones), y texto sobre --accent-pale.
//   · Umbrales: 4.5:1 texto normal · 3:1 texto grande (>=24px o >=18.66px bold)
//     y componentes UI / gráficos con significado.
//
// CÓMO AGREGAR UN PAR (al crear un componente nuevo con texto):
//   { name: 'qué es', fg: '--token|#hex|mix(A p%, B)', bg: idem,
//     need: 4.5|3, themes: ['light','dark'] (opcional, default ambos) }
//   'mix(A p%, B)' replica color-mix(in srgb, ...) para fondos translúcidos
//   compuestos (p% de A sobre B).
// =============================================================================

'use strict';

const fs = require('fs');
const path = require('path');

const TOKENS_FILE = path.join(__dirname, '..', 'styles', 'tokens.css');

// --- Manifest: pares reales fondo/texto del sitio --------------------------

const PAIRS = [
  // Texto base sobre los 4 fondos del sistema
  { name: 'texto principal (body)            --ink   / --bg',       fg: '--ink',   bg: '--bg',      need: 4.5 },
  { name: 'texto secundario                  --ink-2 / --bg',       fg: '--ink-2', bg: '--bg',      need: 4.5 },
  { name: 'texto terciario (rol, badges)     --ink-3 / --bg',       fg: '--ink-3', bg: '--bg',      need: 4.5 },
  { name: 'texto terciario                   --ink-3 / --bg-alt',   fg: '--ink-3', bg: '--bg-alt',  need: 4.5 },
  { name: 'texto terciario                   --ink-3 / --bg-card',  fg: '--ink-3', bg: '--bg-card', need: 4.5 },
  { name: 'texto terciario (sublabels, fc)   --ink-3 / --surface',  fg: '--ink-3', bg: '--surface', need: 4.5 },
  { name: 'texto secundario                  --ink-2 / --surface',  fg: '--ink-2', bg: '--surface', need: 4.5 },
  { name: 'texto principal                   --ink   / --surface',  fg: '--ink',   bg: '--surface', need: 4.5 },
  { name: 'texto principal                   --ink   / --bg-alt',   fg: '--ink',   bg: '--bg-alt',  need: 4.5 },
  { name: 'texto principal                   --ink   / --bg-card',  fg: '--ink',   bg: '--bg-card', need: 4.5 },
  { name: 'dropdown Get in touch (opción)    --ink-2 / --bg-card',  fg: '--ink-2', bg: '--bg-card', need: 4.5 },

  // Acento como texto → --accent-ink (CTAs de cards, phase, media-label, hovers)
  { name: 'acento texto (CTAs, phase)   --accent-ink / --bg',       fg: '--accent-ink', bg: '--bg',      need: 4.5 },
  { name: 'acento texto                 --accent-ink / --bg-alt',   fg: '--accent-ink', bg: '--bg-alt',  need: 4.5 },
  { name: 'acento texto                 --accent-ink / --bg-card',  fg: '--accent-ink', bg: '--bg-card', need: 4.5 },
  { name: 'acento texto (featured CTA)  --accent-ink / --surface',  fg: '--accent-ink', bg: '--surface', need: 4.5 },

  // Acento clásico donde sigue siendo válido
  { name: 'TOC activo / tag accent          --accent / --accent-pale', fg: '--accent', bg: '--accent-pale', need: 4.5 },
  { name: 'btn primary / skip link              #fff / --accent',      fg: '#fff',     bg: '--accent',      need: 4.5 },
  { name: 'chip Copy en btn primary            #fff / chip',           fg: '#fff',     bg: 'mix(#000 22%, --accent)', need: 4.5 },
  { name: '404 em (texto grande)           --accent / --bg',           fg: '--accent', bg: '--bg',          need: 3 },

  // Focus ring (componente UI, 3:1 contra el fondo adyacente; usa --accent-ink
  // porque --accent puro no llega a 3:1 sobre los fondos dark)
  { name: 'focus ring                  --accent-ink / --bg',       fg: '--accent-ink', bg: '--bg',      need: 3 },
  { name: 'focus ring                  --accent-ink / --bg-alt',   fg: '--accent-ink', bg: '--bg-alt',  need: 3 },
  { name: 'focus ring                  --accent-ink / --bg-card',  fg: '--accent-ink', bg: '--bg-card', need: 3 },
  { name: 'focus ring                  --accent-ink / --surface',  fg: '--accent-ink', bg: '--surface', need: 3 },

  // Hero
  { name: 'badge disponibilidad    --ink / vidrio s/--bg',  fg: '--ink', bg: 'mix(--bg-card 55%, --bg)', need: 4.5 },
  { name: 'venn label User        --venn-user / --bg',      fg: '--venn-user', bg: '--bg', need: 3 },
  { name: 'venn label Business    --venn-biz  / --bg',      fg: '--venn-biz',  bg: '--bg', need: 3 },
  { name: 'venn label Tech        --venn-tech / --bg',      fg: '--venn-tech', bg: '--bg', need: 3 },

  // Metric card (fondo distinto por tema: --ink en light, --surface en dark)
  { name: 'metric value (grande)  --accent-dim / card',  fg: '--accent-dim', bg: '--ink',     need: 3,   themes: ['light'] },
  { name: 'metric value (grande)  --accent-dim / card',  fg: '--accent-dim', bg: '--surface', need: 3,   themes: ['dark'] },
  { name: 'metric label            --bg-card / card',    fg: '--bg-card',    bg: '--ink',     need: 4.5, themes: ['light'] },
  { name: 'metric label            --ink     / card',    fg: '--ink',        bg: '--surface', need: 4.5, themes: ['dark'] },
  { name: 'metric note             --ink-4   / card',    fg: '--ink-4',      bg: '--ink',     need: 4.5, themes: ['light'] },
  { name: 'metric note             --ink-3   / card',    fg: '--ink-3',      bg: '--surface', need: 4.5, themes: ['dark'] },

  // Componentes de case
  { name: 'compare tag Figma           #fff / #2563eb',   fg: '#fff', bg: '#2563eb', need: 4.5 },
  { name: 'compare tag App             #fff / #047857',   fg: '#fff', bg: '#047857', need: 4.5 },
  { name: 'carousel dot activo  --accent-ink / --bg-card', fg: '--accent-ink', bg: '--bg-card', need: 3 },
  { name: 'carousel dot inactivo    --ink-3 / --bg-card',  fg: '--ink-3',      bg: '--bg-card', need: 3 },
  { name: 'caption imagen           --ink-3 / --bg-card',  fg: '--ink-3',      bg: '--bg-card', need: 4.5 },
  { name: 'caption video (demo)     --ink-3 / --bg',       fg: '--ink-3',      bg: '--bg',      need: 4.5 },
  { name: 'toast                       --bg / --ink',     fg: '--bg', bg: '--ink', need: 4.5 },

  // Lightbox (overlay negro fijo, igual en ambos temas)
  { name: 'lightbox label   blanco 55% / negro',  fg: 'mix(#fff 55%, #000)', bg: '#000', need: 4.5, themes: ['light'] },
  { name: 'lightbox counter blanco 50% / negro',  fg: 'mix(#fff 50%, #000)', bg: '#000', need: 4.5, themes: ['light'] },
];

// --- Parseo de tokens.css ---------------------------------------------------

function extractBlock(css, selectorRe) {
  const m = css.match(selectorRe);
  if (!m) return '';
  let i = css.indexOf('{', m.index);
  let depth = 0, out = '';
  for (; i < css.length; i++) {
    const ch = css[i];
    if (ch === '{') { depth++; if (depth === 1) continue; }
    if (ch === '}') { depth--; if (depth === 0) break; }
    out += ch;
  }
  return out;
}

function parseVars(block) {
  const vars = {};
  const re = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(block))) vars[m[1]] = m[2].trim();
  return vars;
}

// --- Color math (WCAG) --------------------------------------------------------

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  return [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16));
}

function mixRgb(a, b, pctA) {
  // color-mix(in srgb, ...) interpola en sRGB gamma (canal a canal 0-255)
  const w = pctA / 100;
  return a.map((c, i) => Math.round(c * w + b[i] * (1 - w)));
}

function resolveColor(spec, vars, depth = 0) {
  if (depth > 8) throw new Error('ciclo resolviendo ' + spec);
  spec = String(spec).trim();
  if (spec.startsWith('--')) {
    if (!(spec in vars)) throw new Error('token inexistente: ' + spec);
    return resolveColor(vars[spec], vars, depth + 1);
  }
  let m = spec.match(/^var\(\s*(--[\w-]+)\s*\)$/);
  if (m) return resolveColor(m[1], vars, depth + 1);
  m = spec.match(/^(?:color-)?mix\(\s*(?:in srgb\s*,\s*)?(.+?)\s+([\d.]+)%\s*,\s*(.+)\)$/);
  if (m) return mixRgb(resolveColor(m[1], vars, depth + 1), resolveColor(m[3], vars, depth + 1), parseFloat(m[2]));
  if (spec.startsWith('#')) return hexToRgb(spec);
  m = spec.match(/^rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/);
  if (m) return [+m[1], +m[2], +m[3]];
  throw new Error('color no soportado: ' + spec);
}

function luminance(rgb) {
  const [r, g, b] = rgb.map(c => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const l1 = luminance(a), l2 = luminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

// --- Runner -------------------------------------------------------------------

const css = fs.readFileSync(TOKENS_FILE, 'utf8');
const themes = {
  light: parseVars(extractBlock(css, /:root/)),
  dark: parseVars(extractBlock(css, /html\.theme-dark/)),
};
// dark hereda de light lo que no redefine
themes.dark = { ...themes.light, ...themes.dark };

let failures = 0, checks = 0;

for (const theme of ['light', 'dark']) {
  console.log(`\n━━━ Tema: ${theme} ${'━'.repeat(60 - theme.length)}`);
  for (const pair of PAIRS) {
    if (pair.themes && !pair.themes.includes(theme)) continue;
    checks++;
    let line;
    try {
      const fg = resolveColor(pair.fg, themes[theme]);
      const bg = resolveColor(pair.bg, themes[theme]);
      const ratio = contrast(fg, bg);
      const ok = ratio >= pair.need;
      if (!ok) failures++;
      line = `${ok ? ' ✓ ' : ' ✗ '} ${ratio.toFixed(2).padStart(5)}:1  (min ${pair.need})  ${pair.name}`;
    } catch (e) {
      failures++;
      line = ` ✗  ERROR: ${e.message}  ${pair.name}`;
    }
    console.log(line);
  }
}

console.log(`\n${checks} chequeos, ${failures} fallas.`);
if (failures) {
  console.log('Regla: corregir el token en styles/tokens.css (o el par en el manifest si el uso cambió). Ver docs/a11y.md.');
  process.exit(1);
}
