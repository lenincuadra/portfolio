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

- **Contexto**: notas crudas del caso en `content/new/<slug>.md` (formato: `content/new/_TEMPLATE.md`). Es la materia prima de la redacción — decisiones, pivotes, citas, números.
- **Assets** (ver paso 1b abajo antes de escribir el draft).

### 1b. Assets — preparar antes de escribir

Este paso ocurre **entre el input y la autoría**. Si los assets no están listos al empezar el draft, las secciones quedan sin prueba visual y el case no puede publicarse.

**Checklist:**

1. **Cover** — imagen dedicada (no el poster del video, no un loading state). Muestra el artefacto principal en su estado más acabado. Una captura de pantalla de la app real o un frame editado del video. Destino: `assets/images/<slug>/cover.webp`.

2. **Inventario por sección** — completar la tabla de assets en el `_TEMPLATE.md` antes de empezar a escribir. Si una sección necesita imagen y no existe, capturarla ahora.

3. **Renombrar**: nombres semánticos, sin hashes de commit ni números de paso internos.
   - ✅ `funnel-legend.webp`, `color-rings.webp`
   - ❌ `08-funnel-legend-real-app-use-01a29b9-playground.png`

4. **Convertir**:
   - PNG → WebP: `sips -s format webp archivo.png --out nombre.webp`
   - Video: `ffmpeg -i input.mov -vf scale=1200:-2 -an output.webm` (VP9 crf34) + `.mp4` (h264 crf24 +faststart). Poster del frame más representativo (no el último frame si la escena final no es el artefacto principal).

5. **Mover** a `assets/images/<slug>/`. Las fuentes crudas con datos sensibles (NDA) quedan fuera de git (`.gitignore`). Las fuentes sin NDA pueden vivir en `assets/images/<slug>/raw/` si las querés tener disponibles.

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
