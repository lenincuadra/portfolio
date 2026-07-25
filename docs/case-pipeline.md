# Pipeline de case studies (el funnel)

El portfolio se opera como producto: **subir un case nuevo = dar contexto y assets, y el resto es pipeline**. Todo lo mecánico es script determinístico (sin IA); el único paso donde la IA es opcional es la redacción de la prosa, y está acotado por guías y validadores. Este doc es el mapa; cada etapa tiene su doc de detalle.

## Etapas

```
1. INPUT        contexto crudo + assets
2. AUTORÍA      objeto del case en data/content.js (EN+ES)
3. VALIDACIÓN   node scripts/case-check.js <slug> --strict
4. INTEGRACIÓN  node scripts/seo-build.js  (sitemap + llms.txt)
5. GATE         git commit → .githooks/pre-commit corre TODO
6. DEPLOY       git push → GitHub Pages
```

### 1. Input (humano)

- **Contexto**: notas crudas del caso en `content/new/<nn>_<slug>_case.md` (formato libre: qué pasó, rol, decisiones, números, quotes). Es la materia prima de la redacción.
- **Assets**: `assets/images/<slug>/` — imágenes `.webp`, video `.webm` + `.mp4` (mismo nombre), posters. Convenciones de media theme-aware: `docs/design.md`. Fuentes crudas con datos sensibles (NDA) quedan fuera de git (`.gitignore`).

### 2. Autoría (humano o IA, indistinto para el pipeline)

Escribir el objeto v3 en `data/content.js` (en `en.cases` **y** `es.cases`, alineados por índice):

- **Estructura** (campos, types, bilingüe, assets): `docs/case-v3-guide.md`.
- **Calidad del copy** (h3 declarativos, prosa sobre bullets, beats): `docs/case-v3-content-guide.md`. Referencias: `no-handoff`, `figma-webp-export`.
- Si redacta la IA: darle el `.md` de contexto + esas dos guías; el resultado pasa por el mismo paso 3 que un texto humano. La IA nunca es necesaria para publicar, solo para redactar.

### 3. Validación (script, sin IA)

```bash
node scripts/case-check.js <slug> --strict
```

Falla lo estructural (meta/card, secciones, alineación EN/ES, assets, nav, cases.json) y en `--strict` también lo editorial (em-dashes, meta.description genérica, h3 no declarativo). Iterar hasta 0/0.

### 4. Integración (script, sin IA)

```bash
node scripts/seo-build.js
```

Regenera `sitemap.xml` y `llms.txt` con el case nuevo (los `h3` alimentan el arco narrativo GEO). Si el case va al pool del hero: agregar su entrada a `cases.json` (`proof` con número, `featured: true`) — `case-check` la valida.

### 5. Gate (automático)

`git commit` dispara `.githooks/pre-commit`: contraste WCAG AA + lint estático de a11y + sync SEO/GEO + `case-check` (no-strict: lo estructural bloquea, lo editorial avisa). Nada roto llega a `main`.

### 6. Deploy (automático)

`git push` publica en GitHub Pages. No hay build server: lo que pasa el gate es lo que se sirve.

## Qué mirar cuando algo falla

| Síntoma | Dónde |
|---|---|
| Case sin validar por `case-check` | falta `template: "v3"` en el objeto: el guard de `case-check.js` lo saltea (el routing igual lo manda a `case-v3`). Es obligatorio en cada case |
| TOC vacía o desalineada | secciones sin `id`/`h3` → `case-check` lo marca |
| Toggle ES muestra inglés | desalineación por índice EN/ES → `case-check` lo marca |
| Media en negro / sin fallback | falta `.mp4` hermano o variante `-light`/`-dark` → `case-check` |
| Case invisible para IA/ChatGPT | correr `seo-build` (llms.txt); verificar `meta.description` |
| Commit bloqueado | leer la línea del hook: dice qué script y qué doc |
