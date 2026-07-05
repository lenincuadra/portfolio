#!/usr/bin/env node
// =============================================================================
// SEO/GEO BUILD — genera sitemap.xml, robots.txt y llms.txt desde
// data/content.js (la misma fuente que renderiza el sitio). Sin dependencias.
//
//   node scripts/seo-build.js          → escribe los 3 archivos en la raíz
//   node scripts/seo-build.js --check  → falla (exit 1) si lo que hay en disco
//                                        no coincide con lo generado (drift);
//                                        es lo que corre el pre-commit hook
//
// POR QUÉ ASÍ (ver docs/seo.md):
//   · sitemap.xml: URLs absolutas, replica el routing real de js/app.js
//     (template v3 → case-v3.html, si no case-v2.html).
//   · llms.txt (GEO): los crawlers de IA no ejecutan JS, así que el contenido
//     de los cases (client-side) les es invisible. Este archivo les da la
//     narrativa: por case, título + meta.description + el arco de h3 de sus
//     secciones (el principio "la TOC es el resumen del caso" de CLAUDE.md).
//   · Salida determinística (sin fechas): si no cambió el contenido, no hay diff.
//
// La descripción del sitio se lee del <meta name="description"> de index.html
// (única fuente); nombre/rol/contacto salen de content.js.
// =============================================================================

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BASE = 'https://lenincuadra.github.io/portfolio/';
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

const data = new Function(read('data/content.js') + '; return PORTFOLIO_DATA;')();
const en = data.en;
const cases = en.cases;

const siteDescription = (read('index.html').match(
  /<meta\s+name="description"\s+content="([^"]+)"/s
) || [, ''])[1].replace(/\s+/g, ' ').trim();

// Mismo routing que caseUrl() en js/app.js
const caseUrl = (c) => `${BASE}cases/case-${c.template === 'v3' ? 'v3' : 'v2'}.html?slug=${c.slug}`;
const xmlEscape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// --- sitemap.xml --------------------------------------------------------------

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE}</loc>
    <priority>1.0</priority>
  </url>
${cases.map((c) => `  <url>
    <loc>${xmlEscape(caseUrl(c))}</loc>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>
`;

// --- robots.txt ---------------------------------------------------------------

const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}sitemap.xml

# GEO: resumen del sitio para modelos de IA (no ejecutan JS) → ${BASE}llms.txt
`;

// --- llms.txt (GEO) -----------------------------------------------------------

function caseEntry(c) {
  const title = c.card?.title || c.hero?.title || c.slug;
  const desc = (c.meta?.description || c.card?.excerpt || '').trim();
  const arc = (c.sections || [])
    .map((s) => (s.h3 || '').trim())
    .filter(Boolean)
    .join(' → ');
  const lines = [`### [${title}](${caseUrl(c)})`, '', desc];
  if (arc) lines.push('', `Story arc: ${arc}`);
  return lines.join('\n');
}

const llms = `# ${en.site.designerName} — ${en.home.hero.role}

> ${siteDescription}

Portfolio: ${BASE} (English and Spanish; this file summarizes the English version).
The case study pages render their content with client-side JavaScript; the
summaries below carry each case's full narrative arc for non-JS readers.

Contact: ${en.site.email} · ${en.site.linkedinUrl}

## Case studies

${cases.map(caseEntry).join('\n\n')}
`;

// --- write / check --------------------------------------------------------------

const OUT = { 'sitemap.xml': sitemap, 'robots.txt': robots, 'llms.txt': llms };
const checkMode = process.argv.includes('--check');
let drift = 0;

for (const [file, content] of Object.entries(OUT)) {
  const abs = path.join(ROOT, file);
  const current = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
  if (current === content) { console.log(` ✓  ${file} en sync`); continue; }
  if (checkMode) {
    console.log(` ✗  ${file} desincronizado con data/content.js`);
    drift++;
  } else {
    fs.writeFileSync(abs, content);
    console.log(` ✓  ${file} regenerado`);
  }
}

if (drift) {
  console.log('\nCorrer: node scripts/seo-build.js  (y commitear los archivos regenerados)');
  process.exit(1);
}
