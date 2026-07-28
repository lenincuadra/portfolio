#!/usr/bin/env node
// =============================================================================
// CASE PUBLISH — promueve un draft a data/content.js y corre seo-build.
//
//   node scripts/case-publish.js <slug>
//
// Flujo:
//   1. Lee content/drafts/<slug>.js y extrae los objetos EN y ES.
//   2. Corre `node scripts/case-check.js <slug> --strict` sobre el draft.
//      Si falla, aborta sin tocar content.js.
//   3. Inserta el objeto EN antes de `/* @cases-end */` en data.en.cases
//      y el objeto ES en data.es.cases (misma anchura de inserción).
//   4. Borra content/drafts/<slug>.js.
//   5. Corre `node scripts/seo-build.js` para regenerar sitemap/llms.txt.
//   6. Imprime un resumen de lo que queda por hacer (commit, reordenar, etc.).
// =============================================================================

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');

function die(msg) { console.error(`\n✗  ${msg}\n`); process.exit(1); }
function run(cmd) { execSync(cmd, { cwd: ROOT, stdio: 'inherit' }); }

// --- Arg parsing ----------------------------------------------------------------

const slug = process.argv[2];
if (!slug || slug.startsWith('--')) die('Uso: node scripts/case-publish.js <slug>');

const draftPath = path.join(ROOT, 'content', 'drafts', `${slug}.js`);
if (!fs.existsSync(draftPath)) die(`Draft no encontrado: content/drafts/${slug}.js`);

// --- Extraer objetos EN y ES del draft ------------------------------------------
// Draft format: PORTFOLIO_DATA.en.cases.push({...}); PORTFOLIO_DATA.es.cases.push({...});

const draftCode = fs.readFileSync(draftPath, 'utf8');
let enObj = null, esObj = null;
const fakePD = {
  en: { cases: { push: (c) => { enObj = c; } } },
  es: { cases: { push: (c) => { esObj = c; } } },
};
try {
  new Function('PORTFOLIO_DATA', draftCode)(fakePD);
} catch (e) {
  die(`Error al parsear el draft: ${e.message}`);
}
if (!enObj) die(`El draft no empuja ningún objeto a PORTFOLIO_DATA.en.cases`);
if (!esObj) die(`El draft no empuja ningún objeto a PORTFOLIO_DATA.es.cases`);

console.log(`\n── Publicando draft: ${slug}\n`);

// --- Validación strict ----------------------------------------------------------

console.log('── Corriendo case-check --strict…\n');
try {
  run(`node scripts/case-check.js ${slug} --strict`);
} catch {
  die('case-check falló — corregí los errores antes de publicar.');
}

// --- Inserción en content.js ----------------------------------------------------

const contentPath = path.join(ROOT, 'data', 'content.js');
let src = fs.readFileSync(contentPath, 'utf8');

const SENTINEL = '/* @cases-end */';

// Serialize with 8-space indent (matching the existing style in content.js).
function serialize(obj) {
  return JSON.stringify(obj, null, 2)
    .split('\n')
    .map((line, i) => i === 0 ? '        ' + line : '        ' + line)
    .join('\n');
}

// Find and replace both sentinels (EN first, then ES).
// Each sentinel appears once in the EN block and once in the ES block.
const sentinelCount = (src.match(new RegExp(SENTINEL.replace(/\*/g, '\\*'), 'g')) || []).length;
if (sentinelCount !== 2) {
  die(`Se esperaban 2 sentinels /* @cases-end */ en content.js, se encontraron ${sentinelCount}. El archivo puede estar corrupto.`);
}

// We insert before each sentinel. Because we replace the FIRST occurrence first,
// then the second, and both produce different text (they now include the new case),
// we do them sequentially to avoid double-match issues.
const insertBefore = (text, needle, insertion) => {
  const idx = text.indexOf(needle);
  if (idx === -1) die(`Sentinel no encontrado: ${needle}`);
  return text.slice(0, idx) + insertion + ',\n        ' + text.slice(idx);
};

src = insertBefore(src, SENTINEL, serialize(enObj));
// After first insert the sentinel appears twice; the second indexOf finds ES one.
// But now there are still 2 sentinels; the second insertBefore finds the next one.
src = insertBefore(src, SENTINEL, serialize(esObj));

fs.writeFileSync(contentPath, src, 'utf8');
console.log(`\n✓  Insertado en data/content.js (EN y ES)`);

// --- Borrar draft ---------------------------------------------------------------

fs.unlinkSync(draftPath);
console.log(`✓  Borrado content/drafts/${slug}.js`);

// --- Regenerar SEO --------------------------------------------------------------

console.log('\n── Corriendo seo-build…\n');
run('node scripts/seo-build.js');
console.log('✓  sitemap.xml + llms.txt regenerados');

// --- Resumen --------------------------------------------------------------------

console.log(`
── Listo. Quedan por hacer manualmente:

  1. Reordenar el case dentro de data/content.js si no va al final
     (fue insertado justo antes de /* @cases-end */ en ambos arrays).
  2. Agregar a cases.json si el case va al hero (campos: id, proof, proof_es,
     metric_value, featured).
  3. git add data/content.js cases.json sitemap.xml llms.txt
  4. git commit

  Preview local: cases/case-v3.html?slug=${slug}
`);
