#!/usr/bin/env node
// =============================================================================
// STYLEGUIDE CHECK — sin dependencias (node scripts/styleguide-check.js)
//
// El styleguide (styleguide.html) debe mostrar SIEMPRE los componentes reales
// del proyecto (CLAUDE.md § Styleguide). Este script bloquea el drift:
//
//   1) Toda clase usada en los demos existe en styles/*.css (o en el <style>
//      propio del styleguide, que solo puede definir chrome de la página).
//   2) El <style> inline del styleguide NO redefine clases que ya están en
//      styles/*.css (prohibido duplicar estilos del sistema).
//   3) Todo `type` del renderer de case-v3 tiene un demo marcado con
//      data-type="<type>" en la sección #case-components.
//   4) Todo demo (.sg-item y cualquier elemento con data-toc) tiene id +
//      data-toc — la TOC de la sidebar se genera del DOM y los necesita.
//
// Corre en el pre-commit (.githooks/pre-commit). Falla → commit bloqueado.
// =============================================================================

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SG_FILE = path.join(ROOT, 'styleguide.html');
const CSS_DIR = path.join(ROOT, 'styles');
const RENDERER_FILE = path.join(ROOT, 'cases', 'case-v3.html');

// Hooks que el renderer emite pero que (todavía) no tienen CSS propio, y
// clases-marcador leídas solo por JS. Si alguna gana estilos en styles/*.css,
// sacarla de acá.
const ALLOW = new Set([
  'token-hex',              // marcador: renderTokenHex() la lee para inyectar el hex
  'alert-callout--note',    // variant del type "callout": estilo = base .alert-callout
  'alert-callout--warning', // idem
  'slider-figure',          // handle del renderer/JS de case-v3 (lightbox), sin estilos
  'carousel',               // handle de JS (__initCarousel); los estilos van en .carousel__*
]);

const errors = [];

// --- helpers -----------------------------------------------------------------

function classesFromCss(css) {
  const out = new Set();
  const clean = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/url\([^)]*\)/g, '')
    .replace(/@import[^;]*;/g, '');
  for (const m of clean.matchAll(/\.([a-zA-Z_][a-zA-Z0-9_-]*)/g)) out.add(m[1]);
  return out;
}

function classesFromHtmlAttrs(html) {
  const out = new Set();
  for (const m of html.matchAll(/class="([^"]*)"/g)) {
    m[1].split(/\s+/).filter(Boolean).forEach((c) => out.add(c));
  }
  return out;
}

// --- inputs ------------------------------------------------------------------

const sg = fs.readFileSync(SG_FILE, 'utf8');

const styleBlocks = [...sg.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
const sgOwnClasses = classesFromCss(styleBlocks);

const cssClasses = new Set();
for (const f of fs.readdirSync(CSS_DIR).filter((f) => f.endsWith('.css'))) {
  classesFromCss(fs.readFileSync(path.join(CSS_DIR, f), 'utf8')).forEach((c) => cssClasses.add(c));
}

const sgMarkup = sg
  .replace(/<style>[\s\S]*?<\/style>/g, '')
  .replace(/<script>[\s\S]*?<\/script>/g, '');

// --- 1) clases usadas ↔ definidas ---------------------------------------------

for (const cls of classesFromHtmlAttrs(sgMarkup)) {
  if (!cssClasses.has(cls) && !sgOwnClasses.has(cls) && !ALLOW.has(cls)) {
    errors.push(`clase usada en un demo pero no definida en styles/*.css: .${cls}`);
  }
}

// --- 2) el <style> del styleguide no duplica clases del sistema ---------------

for (const cls of sgOwnClasses) {
  if (cssClasses.has(cls)) {
    errors.push(`el <style> del styleguide redefine una clase de styles/*.css: .${cls}`);
  }
}

// --- 3) cobertura de types del renderer case-v3 --------------------------------

const renderer = fs.readFileSync(RENDERER_FILE, 'utf8');
const types = new Set([...renderer.matchAll(/case '([a-z]+)':/g)].map((m) => m[1]));
types.add('subheading'); // se maneja en renderContent(), no en renderItem()

const demoTypes = new Set([...sg.matchAll(/data-type="([a-z-]+)"/g)].map((m) => m[1]));
for (const t of types) {
  if (!demoTypes.has(t)) {
    errors.push(`type "${t}" del renderer case-v3 sin demo (falta data-type="${t}" en #case-components)`);
  }
}
for (const t of demoTypes) {
  if (!types.has(t)) {
    errors.push(`demo con data-type="${t}" pero el renderer case-v3 no tiene ese type`);
  }
}

// --- 4) todo demo entra en la TOC generada (id + data-toc) ---------------------

for (const m of sgMarkup.matchAll(/<div[^>]*class="[^"]*\bsg-item\b[^"]*"[^>]*>/g)) {
  const tag = m[0];
  if (!/\bdata-toc="/.test(tag)) errors.push(`.sg-item sin data-toc (no aparece en la TOC): ${tag.slice(0, 80)}…`);
  if (!/\bid="/.test(tag)) errors.push(`.sg-item sin id (no aparece en la TOC): ${tag.slice(0, 80)}…`);
}
for (const m of sgMarkup.matchAll(/<[a-z]+ [^>]*\bdata-toc="[^"]*"[^>]*>/g)) {
  if (!/\bid="/.test(m[0])) errors.push(`elemento con data-toc pero sin id (no aparece en la TOC): ${m[0].slice(0, 80)}…`);
}

// --- resultado -----------------------------------------------------------------

if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`\n${errors.length} problema(s). Reglas: CLAUDE.md § Styleguide.`);
  process.exit(1);
}

console.log(
  `✓ styleguide OK — ${types.size} types con demo, ` +
  `${[...sgMarkup.matchAll(/\bdata-toc="/g)].length} entradas de TOC, sin drift de clases.`
);
