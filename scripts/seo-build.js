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
//     (todos los cases → case-v3.html).
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
const BASE = 'https://lenincuadra.com/';
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

const data = new Function(read('data/content.js') + '; return PORTFOLIO_DATA;')();
const en = data.en;
const cases = en.cases;

const siteDescription = (read('index.html').match(
  /<meta\s+name="description"\s+content="([^"]+)"/s
) || [, ''])[1].replace(/\s+/g, ' ').trim();

// Mismo routing que caseUrl() en js/app.js
const caseUrl = (c) => `${BASE}cases/case-v3.html?slug=${c.slug}`;
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

// --- link-spec.json (contrato para cbuilder) ------------------------------------
// cbuilder (la app externa que genera los CVs) arma los links trackeados
// leyendo este spec: base URL, formato del código opaco, templates y perfiles
// de personalización. Cambio de dominio o perfil nuevo → regenerar → cbuilder
// se actualiza solo. NO poner acá nada que delate empresas target.

const profilesData = new Function(read('data/profiles.js') + '; return PORTFOLIO_PROFILES;')();
const proofPool = JSON.parse(read('cases.json'));

// Índice bilingüe de cases (para que cbuilder muestre previews y ordene el CV
// igual que el portfolio, sin duplicar textos ni lógica).
const esCases = data.es.cases;
const caseIndex = Object.fromEntries(cases.map((c, i) => [c.slug, {
  title: { en: c.card?.title || '', es: esCases[i]?.card?.title || c.card?.title || '' },
  description: { en: c.meta?.description || '', es: esCases[i]?.meta?.description || '' },
  url: caseUrl(c)
}]));

const linkSpec = JSON.stringify({
  version: 1,
  base: BASE,
  tracking: {
    codeFormat: '^\\d{4}[a-z][2-9]$',
    codeHint: 'MMDD + letra a-z + dígito 2-9; único por empresa, nunca reusar',
    refSuffix: {
      P: 'link al portfolio (en el CV)',
      L: 'link a LinkedIn (en el CV)',
      G: 'link a GitHub (en el CV)'
    },
    reservedRefs: ['me', 'organic', 'li-profile', 'li-cv', 'web-cv'],
    links: {
      portfolio: '{base}go.html?ref={code}P',
      portfolioFocused: '{base}go.html?ref={code}P&focus={focus}',
      linkedin: '{base}go.html?ref={code}L&dest=linkedin',
      github: '{base}go.html?ref={code}G&dest=github',
      shortPortfolio: '{base}r/{code}P',
      shortPortfolioFocused: '{base}r/{code}P{focusLetter}',
      shortLinkedin: '{base}r/{code}L',
      shortGithub: '{base}r/{code}G'
    }
  },
  // focusLetter de los links cortos = inicial del id del perfil (única, la
  // valida case-check); la expande el resolver del sitio.
  focusLetters: Object.fromEntries(
    Object.keys(profilesData.profiles).map((id) => [id, id[0]])
  ),
  // Qué hace cada perfil en el portfolio (datos, no lógica): el case que queda
  // como Featured, el orden completo de lectura (featured primero, luego la
  // grilla) y las 2 pruebas que fija el hero. cbuilder los usa para (a) preview
  // al elegir perfil y (b) ordenar/destacar los mismos cases en el CV.
  profiles: Object.fromEntries(
    Object.entries(profilesData.profiles).map(([id, p]) => [id, {
      label: p.label,
      featured: p.featured,
      order: [p.featured, ...p.order],
      proofs: p.proofs.map((pid) => {
        const entry = proofPool.find((x) => x.id === pid) || {};
        return { id: pid, en: entry.proof || '', es: entry.proof_es || entry.proof || '' };
      })
    }])
  ),
  // Sin perfil: no hay Featured y la grilla muestra todos en este orden.
  defaultOrder: cases.map((c) => c.slug),
  cases: caseIndex
}, null, 2) + '\n';

// --- write / check --------------------------------------------------------------

const OUT = { 'sitemap.xml': sitemap, 'robots.txt': robots, 'llms.txt': llms, 'link-spec.json': linkSpec };
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
