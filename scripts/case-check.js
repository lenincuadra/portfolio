#!/usr/bin/env node
// =============================================================================
// CASE CHECK — validador del funnel de case studies, sin navegador ni deps
//
//   node scripts/case-check.js            → valida todos los cases (lo corre el hook)
//   node scripts/case-check.js <slug>     → valida un case (loop de autoría)
//   node scripts/case-check.js --strict   → los warnings también fallan
//                                           (usarlo al dar por listo un case NUEVO)
//
// Es la versión formal del snippet de docs/case-v3-guide.md §6, ampliada.
// FALLA (✗) lo estructural — un case que rompe esto se renderiza mal o
// desaparece de SEO/GEO. ADVIERTE (⚠) lo editorial — reglas de copy de
// CLAUDE.md/docs/case-v3-content-guide.md que el copy legacy todavía viola.
//
// ✗ Estructural:
//   · slug único; meta.title + meta.description (alimentan title/OG/llms.txt);
//     card completa (title/tags/excerpt)
//   · v3: sections con id + h3; h3 ≠ label (la TOC es el resumen del caso);
//     content[].type conocido; image con src+alt
//   · EN/ES alineados por índice (mismos slugs, misma cantidad de secciones,
//     mismos types en el mismo orden) — el error más común y el renderer no avisa
//   · assets referenciados existen; video .webm con hermano .mp4; themed con
//     variantes -light/-dark; rutas root-relative (sin ../)
//   · cases.json: ids reales, proofs con número (regla de hero.js), ≥2 featured
//
// ⚠ Editorial (falla solo con --strict):
//   · em-dash (—) en copy de secciones (excepto items de steps y captions de
//     video, que son sintaxis del renderer)
//   · meta.description corta (<70) o genérica ("A case study by")
//   · h3 que no parece afirmación declarativa (<20 chars)
// =============================================================================

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

const KNOWN_TYPES = new Set(['body', 'quote', 'steps', 'subheading', 'image', 'video',
  'compare', 'callout', 'carousel', 'slider', 'heading', 'row', 'gallery', 'link', 'table']);

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const onlySlug = args.find((a) => !a.startsWith('--')) || null;

const data = new Function(read('data/content.js') + '; return PORTFOLIO_DATA;')();

// --- Draft loading (content/drafts/*.js, merged before all validations) --------
// Draft files call PORTFOLIO_DATA.en.cases.push({...}) / es.cases.push({...}).
// We provide a fake PORTFOLIO_DATA that captures the pushes into the real data.

const DRAFTS_DIR = path.join(ROOT, 'content', 'drafts');
const loadedDrafts = [];
if (fs.existsSync(DRAFTS_DIR)) {
  const draftFiles = fs.readdirSync(DRAFTS_DIR).filter((f) => f.endsWith('.js'));
  for (const file of draftFiles) {
    const draftSlug = path.basename(file, '.js');
    if (onlySlug && draftSlug !== onlySlug) continue;
    const code = fs.readFileSync(path.join(DRAFTS_DIR, file), 'utf8');
    const fakePD = {
      en: { cases: { push: (c) => data.en.cases.push(c) } },
      es: { cases: { push: (c) => data.es.cases.push(c) } },
    };
    try {
      new Function('PORTFOLIO_DATA', code)(fakePD);
      loadedDrafts.push(draftSlug);
    } catch (e) {
      console.log(` ✗  draft ${draftSlug}: error al cargar: ${e.message}`);
    }
  }
}
if (loadedDrafts.length) console.log(`  [draft] cargados: ${loadedDrafts.join(', ')}\n`);

let failures = 0, warnings = 0;
const bad = (msg) => { failures++; console.log(` ✗  ${msg}`); };
const warn = (msg) => { warnings++; console.log(` ⚠  ${msg}`); };
const ok = (msg) => console.log(` ✓  ${msg}`);

const assetExists = (p) => /^https?:/.test(p) || fs.existsSync(path.join(ROOT, p.split('?')[0]));

// --- Identidad, meta y card ---------------------------------------------------

console.log('━━━ Identidad, meta y card ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const slugs = { en: data.en.cases.map((c) => c.slug), es: data.es.cases.map((c) => c.slug) };
const dupes = slugs.en.filter((s, i) => slugs.en.indexOf(s) !== i);
dupes.length ? bad(`slugs duplicados: ${dupes.join(', ')}`) : ok(`${slugs.en.length} slugs únicos`);

const scope = (lang) => data[lang].cases.filter((c) => !onlySlug || c.slug === onlySlug);
if (onlySlug && !slugs.en.includes(onlySlug)) bad(`slug "${onlySlug}" no existe en content.js ni en content/drafts/`);

for (const c of scope('en')) {
  const id = c.slug;
  if (!c.meta?.title?.trim()) bad(`${id}: falta meta.title (alimenta <title> y OG)`);
  if (!c.meta?.description?.trim()) bad(`${id}: falta meta.description (alimenta OG y llms.txt)`);
  else {
    if (c.meta.description.length < 70) warn(`${id}: meta.description corta (${c.meta.description.length} chars)`);
    if (/a case study by/i.test(c.meta.description)) warn(`${id}: meta.description genérica ("A case study by…") — no vende el resultado`);
  }
  if (!c.card?.title?.trim()) bad(`${id}: falta card.title`);
  if (!c.card?.excerpt?.trim()) bad(`${id}: falta card.excerpt`);
  if (!c.card?.tags?.length) bad(`${id}: card.tags vacío`);
}
if (!failures) ok('meta/card/nav completos en los cases evaluados');

// --- Estructura v3 + alineación EN/ES -----------------------------------------

console.log('\n━━━ Estructura v3 y alineación EN/ES por índice ━━━━━━━━━━━━━━━━━━');

if (JSON.stringify(slugs.en) !== JSON.stringify(slugs.es)) {
  bad(`EN y ES no tienen los mismos slugs en el mismo orden:\n    EN ${slugs.en}\n    ES ${slugs.es}`);
}

let structFails = 0;
for (const [i, cEn] of data.en.cases.entries()) {
  if (onlySlug && cEn.slug !== onlySlug) continue;
  const cEs = data.es.cases[i];
  const id = cEn.slug;
  if (cEn.template !== 'v3') continue; // guard: solo cases con marcador v3 tienen sections

  const sEn = cEn.sections || [], sEs = cEs?.sections || [];
  if (sEn.length !== sEs.length) { bad(`${id}: ${sEn.length} secciones EN vs ${sEs.length} ES`); structFails++; continue; }

  for (const [j, sec] of sEn.entries()) {
    const where = `${id}.sections[${j}]`;
    if (!sec.id) { bad(`${where}: falta id (ancla de la TOC)`); structFails++; }
    // Sin label ni h3 = sección fuera de la TOC (patrón media-lead, ver docs/design.md).
    // Con label pero sin h3 = par de la TOC roto → falla.
    if (!sec.h3?.trim()) {
      if (sec.label) { bad(`${where}: label "${sec.label}" sin h3 (la TOC muestra label + h3)`); structFails++; }
    }
    else {
      if (sec.label && sec.h3.trim().replace(/\.$/, '').toLowerCase() === sec.label.trim().toLowerCase()) {
        bad(`${where}: h3 repite el label ("${sec.label}") — debe ser una afirmación que avance la historia`); structFails++;
      }
      if (sec.h3.trim().length < 20) warn(`${where}: h3 muy corto ("${sec.h3}") — ¿es una afirmación declarativa?`);
    }
    const cnEn = sec.content || [], cnEs = sEs[j]?.content || [];
    if (cnEn.length !== cnEs.length) { bad(`${where}: ${cnEn.length} bloques EN vs ${cnEs.length} ES`); structFails++; }
    for (const [k, item] of cnEn.entries()) {
      const at = `${where}.content[${k}]`;
      if (!KNOWN_TYPES.has(item.type)) { bad(`${at}: type desconocido "${item.type}"`); structFails++; }
      if (cnEs[k] && cnEs[k].type !== item.type) { bad(`${at}: type EN "${item.type}" vs ES "${cnEs[k].type}" (desalineado)`); structFails++; }
      if (item.type === 'image' && (!item.src || !item.alt?.trim())) { bad(`${at}: image sin src o sin alt`); structFails++; }
    }
  }
}
if (!structFails) ok('estructura v3 y alineación EN/ES en orden');

// --- Assets ---------------------------------------------------------------------

console.log('\n━━━ Assets referenciados ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

let assetFails = 0, assetCount = 0;
function collectAssets(node, out) {
  if (Array.isArray(node)) return node.forEach((n) => collectAssets(n, out));
  if (!node || typeof node !== 'object') return;
  for (const k of ['src', 'poster', 'cover', 'video']) {
    if (typeof node[k] === 'string' && /\.(webp|png|jpe?g|gif|svg|webm|mp4)$/i.test(node[k])) {
      out.push({ path: node[k], themed: !!node.themed });
    }
  }
  for (const k of ['left', 'right', 'before', 'after']) if (node[k]?.src) out.push({ path: node[k].src, themed: false });
  Object.values(node).forEach((v) => collectAssets(v, out));
}

for (const c of scope('en')) {
  const assets = [];
  collectAssets(c, assets);
  for (const { path: p, themed } of assets) {
    assetCount++;
    if (p.startsWith('../')) { bad(`${c.slug}: ruta con ../ ("${p}") — deben ser root-relative (assets/…)`); assetFails++; continue; }
    if (!assetExists(p)) { bad(`${c.slug}: asset inexistente ${p}`); assetFails++; continue; }
    if (p.endsWith('.webm') && !assetExists(p.replace(/\.webm$/, '.mp4'))) {
      bad(`${c.slug}: ${p} sin hermano .mp4 (fallback del renderer)`); assetFails++;
    }
    if (themed) {
      const other = p.includes('-dark') ? p.replace(/-dark(?=\.)/, '-light')
        : p.includes('-light') ? p.replace(/-light(?=\.)/, '-dark') : null;
      if (!other) { bad(`${c.slug}: themed pero el src no tiene sufijo -light/-dark: ${p}`); assetFails++; }
      else if (!assetExists(other)) { bad(`${c.slug}: themed sin la variante ${other}`); assetFails++; }
    }
  }
}
if (!assetFails) ok(`${assetCount} assets existen (con pares .mp4 y variantes themed)`);

// --- Copy (reglas editoriales, ⚠) --------------------------------------------

console.log('\n━━━ Copy (reglas de docs/case-v3-content-guide.md) ━━━━━━━━━━━━━━━');

let dashCount = 0;
// Solo campos de copy: src/poster/alt/id quedan fuera (los paths de assets
// pueden contener — en el nombre de carpeta y no son texto visible).
const COPY_KEYS = new Set(['text', 'h3', 'title', 'subtitle', 'excerpt', 'attr']);
function lintCopy(node, where, inSteps) {
  if (Array.isArray(node)) return node.forEach((n, i) => lintCopy(n, `${where}[${i}]`, inSteps));
  if (!node || typeof node !== 'object') return;
  const steps = inSteps || node.type === 'steps';
  for (const [k, v] of Object.entries(node)) {
    if (typeof v === 'string' && v.includes('—') && !steps && COPY_KEYS.has(k)) dashCount++;
    else if (typeof v === 'object') lintCopy(v, `${where}.${k}`, steps);
  }
}
for (const lang of ['en', 'es']) for (const c of scope(lang)) lintCopy(c.sections || [], `${lang}.${c.slug}`, false);
dashCount
  ? warn(`${dashCount} em-dashes (—) en copy de secciones (regla: coma/punto/dos puntos/paréntesis; steps y captions no cuentan, son sintaxis)`)
  : ok('sin em-dashes en el copy de secciones');

// --- cases.json (pruebas del hero) ---------------------------------------------

console.log('\n━━━ cases.json (pruebas del hero) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

try {
  const proofs = JSON.parse(read('cases.json'));
  let pFails = 0;
  for (const p of proofs) {
    if (!slugs.en.includes(p.id)) { bad(`cases.json: id "${p.id}" no existe en content.js`); pFails++; }
    for (const k of ['proof', 'proof_es']) {
      if (!/\d/.test(p[k] || '')) { bad(`cases.json ${p.id}: ${k} sin número ni delta temporal (regla de hero.js)`); pFails++; }
    }
    if (typeof p.metric_value !== 'number') { bad(`cases.json ${p.id}: metric_value no numérico`); pFails++; }
  }
  const featured = proofs.filter((p) => p.featured === true).length;
  if (featured < 2) { bad(`cases.json: ${featured} featured (< 2, el hero necesita 2 pruebas por carga)`); pFails++; }
  if (!pFails) ok(`${proofs.length} pruebas válidas, ${featured} featured`);
} catch (e) {
  bad(`cases.json ilegible: ${e.message}`);
}

// --- data/profiles.js (personalización por link) ---------------------------------

console.log('\n━━━ data/profiles.js (perfiles por link) ━━━━━━━━━━━━━━━━━━━━━━━━━');

if (!fs.existsSync(path.join(ROOT, 'data', 'profiles.js'))) {
  ok('sin data/profiles.js (personalización no configurada)');
} else {
  try {
    const P = new Function(read('data/profiles.js') + '; return PORTFOLIO_PROFILES;')();
    const proofPool = JSON.parse(read('cases.json'));
    const proofIds = proofPool.map((p) => p.id);
    // Mismo criterio que hero.js: el par elegido debe caber en 2 líneas.
    const proofLen = (id) => {
      const p = proofPool.find((x) => x.id === id) || {};
      return Math.max((p.proof || '').length, (p.proof_es || p.proof || '').length);
    };
    let pFails = 0;
    for (const [id, prof] of Object.entries(P.profiles || {})) {
      if (!prof.label?.en?.trim() || !prof.label?.es?.trim()) { bad(`profiles.${id}: label.en/es incompleto`); pFails++; }
      if (!slugs.en.includes(prof.featured)) { bad(`profiles.${id}: featured "${prof.featured}" no es un slug real`); pFails++; }
      for (const s of prof.order || []) if (!slugs.en.includes(s)) { bad(`profiles.${id}: order contiene slug inexistente "${s}"`); pFails++; }
      for (const s of prof.proofs || []) if (!proofIds.includes(s)) { bad(`profiles.${id}: proof "${s}" no existe en cases.json (o no es featured)`); pFails++; }
      const [a, b] = prof.proofs || [];
      if (a && b && proofLen(a) + proofLen(b) > 150) {
        warn(`profiles.${id}: el par de proofs supera el presupuesto de 2 líneas del hero (avoidOverflow va a reemplazar la segunda)`);
      }
    }
    const initials = Object.keys(P.profiles || {}).map((k) => k[0]);
    if (new Set(initials).size !== initials.length) {
      bad('profiles: las iniciales de los ids deben ser únicas (son la letra de perfil de los links cortos /r/)'); pFails++;
    }
    for (const [ref, prof] of Object.entries(P.refToProfile || {})) {
      if (!P.profiles?.[prof]) { bad(`refToProfile.${ref} → perfil inexistente "${prof}"`); pFails++; }
      if (ref !== ref.toLowerCase()) { bad(`refToProfile."${ref}": las keys van en minúsculas (el resolver baja el ref a minúsculas)`); pFails++; }
    }
    if (!pFails) ok(`${Object.keys(P.profiles || {}).length} perfiles y ${Object.keys(P.refToProfile || {}).length} refs mapeados, consistentes`);
  } catch (e) {
    bad(`data/profiles.js ilegible: ${e.message}`);
  }
}

// --- Resultado -------------------------------------------------------------------

console.log(`\n${failures} fallas, ${warnings} warnings${strict ? ' (strict: los warnings fallan)' : ''}.`);
if (failures || (strict && warnings)) {
  console.log('Guías: docs/case-v3-guide.md (estructura) · docs/case-v3-content-guide.md (copy) · docs/case-pipeline.md (funnel).');
  process.exit(1);
}
