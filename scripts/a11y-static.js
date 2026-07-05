#!/usr/bin/env node
// =============================================================================
// A11Y STATIC LINT — invariantes mecánicas, sin navegador ni dependencias
// (node scripts/a11y-static.js)
//
// Complementa a a11y-contrast.js: lo que NO es contraste pero sí es chequeable
// estáticamente. Lo que requiere runtime (orden de foco, Escape, focus trap)
// sigue en el checklist manual de docs/a11y.md.
//
// CHEQUEOS:
//   1. Tokens: todo var(--x) sin fallback usado en styles/*.css o en las
//      páginas públicas debe estar definido (un token inexistente invalida
//      la declaración entera EN SILENCIO — ver CLAUDE.md).
//   2. --ink-4 como color de texto: solo en los selectores del allowlist
//      (decorativos o auditados en el manifest de a11y-contrast.js).
//   3. Invariantes por página pública: skip-link, <main tabindex="-1">,
//      <html lang>, <img> siempre con alt, nada de onclick inline.
//   4. data/content.js: todo item type:"image" con alt no vacío; todo
//      images.screens[] con label (app.js lo usa como alt).
//
// Páginas internas (styleguide, dashboard, og-*, go) y case-v2 quedan fuera
// (mismo alcance que la auditoría — case-v2 se cubre con la migración v2→v3).
// =============================================================================

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

const CSS_FILES = fs.readdirSync(path.join(ROOT, 'styles'))
  .filter((f) => f.endsWith('.css'))
  .map((f) => path.join('styles', f));
const PAGES = ['index.html', 'cases/case-v3.html', '404.html'];
const JS_FILES = ['js/app.js', 'hero.js'];

// color: var(--ink-4) legítimo — decorativo o ya auditado en a11y-contrast.js
const INK4_ALLOW = [
  '.case-hero__image-wrap',    // placeholder de media del hero
  '.metric-card__note',        // auditado (par "metric note" del manifest)
  '.process-step__number',     // numeral decorativo aria-hidden
  '.image-block__placeholder', // placeholder de media
  '.bio-block__portrait',      // placeholder del retrato
  '.field:disabled',           // controles disabled: exentos (WCAG 1.4.3)
  '.case-card__image',         // placeholder de media en cards
];

let failures = 0;
const ok = (msg) => console.log(` ✓  ${msg}`);
const bad = (msg) => { failures++; console.log(` ✗  ${msg}`); };

const stripCssComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '');

// --- 1. Tokens definidos ------------------------------------------------------

console.log('━━━ Tokens CSS (var(--x) sin fallback debe existir) ━━━━━━━━━━━━━━━');

const cssTexts = CSS_FILES.map((f) => [f, stripCssComments(read(f))]);
// comentarios HTML fuera: un <img> de ejemplo en un comentario no es un hallazgo
const pageTexts = PAGES.map((f) => [f, read(f).replace(/<!--[\s\S]*?-->/g, '')]);

const defined = new Set();
for (const [, text] of [...cssTexts, ...pageTexts]) {
  for (const m of text.matchAll(/(--[\w-]+)\s*:/g)) defined.add(m[1]);
}

let tokenFails = 0;
for (const [file, text] of [...cssTexts, ...pageTexts]) {
  for (const m of text.matchAll(/var\(\s*(--[\w-]+)\s*([,)])/g)) {
    const hasFallback = m[2] === ',';
    if (!hasFallback && !defined.has(m[1])) {
      bad(`${file}: var(${m[1]}) no está definido en ningún CSS (declaración inválida en silencio)`);
      tokenFails++;
    }
  }
}
if (!tokenFails) ok(`todos los var(--x) sin fallback resuelven a un token definido (${defined.size} tokens)`);

// --- 2. --ink-4 como texto ------------------------------------------------------

console.log('\n━━━ --ink-4 solo decorativo (color: permitido solo en allowlist) ━━');

function ink4Selectors(css) {
  // walker mínimo: trackea el selector del bloque actual (stack por si hay @media)
  const found = [];
  const stack = [];
  let buf = '';
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (ch === '{') { stack.push(buf.trim()); buf = ''; }
    else if (ch === '}') { stack.pop(); buf = ''; }
    else if (ch === ';') {
      if (/(?:^|[^-\w])color\s*:\s*var\(\s*--ink-4\s*\)/.test(buf)) {
        found.push(stack[stack.length - 1] || '(top-level)');
      }
      buf = '';
    } else buf += ch;
  }
  return found;
}

let ink4Fails = 0;
for (const [file, text] of cssTexts) {
  for (const sel of ink4Selectors(text)) {
    if (!INK4_ALLOW.some((allow) => sel.includes(allow))) {
      bad(`${file}: "${sel}" usa color: var(--ink-4) fuera del allowlist (texto legible usa --ink-3 como mínimo)`);
      ink4Fails++;
    }
  }
}
if (!ink4Fails) ok(`color: var(--ink-4) solo aparece en los ${INK4_ALLOW.length} selectores decorativos/auditados`);

// --- 3. Invariantes por página --------------------------------------------------

console.log('\n━━━ Invariantes por página pública ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

for (const [file, html] of pageTexts) {
  const checks = [
    [/class="[^"]*\bskip-link\b/.test(html), 'skip-link presente'],
    [/<main\b[^>]*tabindex="-1"/.test(html), '<main tabindex="-1">'],
    [/<html\b[^>]*\blang=/.test(html), '<html lang>'],
  ];
  for (const [pass, label] of checks) {
    pass ? ok(`${file}: ${label}`) : bad(`${file}: falta ${label}`);
  }
}

for (const [file, text] of [...pageTexts, ...JS_FILES.map((f) => [f, read(f)])]) {
  const imgsSinAlt = (text.match(/<img\b[^>]*>/g) || []).filter((tag) => !/\balt=/.test(tag));
  imgsSinAlt.length
    ? bad(`${file}: ${imgsSinAlt.length} <img> sin alt → ${imgsSinAlt[0].slice(0, 80)}…`)
    : ok(`${file}: todo <img> lleva alt`);
  const onclicks = (text.match(/\sonclick=/g) || []).length;
  if (onclicks) bad(`${file}: ${onclicks} onclick inline (usar addEventListener sobre <a>/<button> reales)`);
}

// --- 4. content.js: alt en imágenes ---------------------------------------------

console.log('\n━━━ data/content.js: alt/label en media ━━━━━━━━━━━━━━━━━━━━━━━━━━');

const data = new Function(read('data/content.js') + '; return PORTFOLIO_DATA;')();
let mediaFails = 0, mediaChecked = 0;

function walk(node, trail) {
  if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${trail}[${i}]`));
  if (!node || typeof node !== 'object') return;
  if (node.type === 'image') {
    mediaChecked++;
    if (!node.alt || !String(node.alt).trim()) { bad(`${trail}: image "${node.src}" sin alt`); mediaFails++; }
  }
  if (Array.isArray(node.screens)) {
    for (const [i, s] of node.screens.entries()) {
      mediaChecked++;
      if (!s.label || !String(s.label).trim()) { bad(`${trail}.screens[${i}]: "${s.src}" sin label (app.js lo usa como alt)`); mediaFails++; }
    }
  }
  for (const [k, v] of Object.entries(node)) walk(v, `${trail}.${k}`);
}
walk(data.en, 'en');
walk(data.es, 'es');
if (!mediaFails) ok(`${mediaChecked} imágenes/screens con alt/label presentes (EN+ES)`);

// --- Resultado -------------------------------------------------------------------

console.log(`\n${failures} fallas.`);
if (failures) {
  console.log('Reglas y allowlist: header de este archivo + docs/a11y.md.');
  process.exit(1);
}
