# Handoff — estado del trabajo (2026-07-27)

> Nota de contexto para retomar en una sesión/IA nueva. Carpeta **commiteada**
> al repo (el `.mov` crudo lo excluye `.gitignore`). Material del case + plan del pipeline.

## Dónde quedó todo

**HECHO y pusheado** (git, `main`): eliminación completa de las plantillas legacy
v1/v2 de cases (commits `7a567b3` + `e18b1cd`). Hoy TODO case es v3; el routing
manda todo a `case-v3`; `template:"v3"` quedó como marcador que lee `case-check`.

**EN CURSO, sin construir todavía** (solo diseñado y acordado): dos features nuevas
al pipeline de cases + el primer case que las usa (animaciones de cv-builder).

## Feature A — Formato de input + regla anti-técnica
- Input = doc de contexto **rico estilo "bitácora"** (`animations-bitacora.md` es el
  ejemplo). El usuario escribe crudo; la IA/humano **destila** al objeto v3.
- Crear plantilla `content/new/_TEMPLATE.md`: *Qué es y para quién · Cronología
  (decisiones/pivotes con citas) · Tabla de assets (captura ↔ qué prueba)*.
- Agregar regla **"altitud/audiencia"** a `docs/case-v3-content-guide.md`: traducir
  implementación → decisión de diseño + resultado visible. Lector = design/hiring,
  no ingeniero. Nada de nombres de variables ni jerga de código en el copy.

## Feature B — Draft workflow (Opción B, elegida)
- Draft vive en el repo pero **NO se renderiza en producción**.
- `content/drafts/<slug>.js` = objeto v3 draft, bilingüe (en+es).
- **Carga solo-local**: en `cases/case-v3.html`, bootstrap que solo si
  `hostname` ∈ {localhost,127.0.0.1} inyecta (vía `document.write`, antes del
  renderer inline de la línea ~196) el script de drafts y lo mergea en
  `PORTFOLIO_DATA`. En prod el tag ni se emite → cero exposición. Preview por deep
  link `case-v3.html?slug=<slug>` en localhost.
- Grilla / sitemap / llms / prev-next leen `data/content.js`, nunca `content/drafts/`.
- **Publish** = `node scripts/case-publish.js <slug>`: corre `case-check --strict`;
  si pasa, inserta el objeto en `data/content.js` (en+es) **antes de un sentinel
  `/* @cases-end */`** (agregar una vez a cada array), borra el draft, corre
  `seo-build`. Es un acto deliberado, no un efecto de editar content.js.
- `case-check` se hace draft-aware (valida también `content/drafts/`).
- Defaults: publish → append al final (reordenar luego) · preview → solo deep-link
  (sin drafts en grilla local salvo pedido).

Datos de carga (verificar): `data/content.js` = `PORTFOLIO_DATA`; `en.cases` ~L85,
`es.cases` ~L1470, cierre ~L2775. No hay lógica de localhost aún.

## El case (primer consumidor)
- **Tesis:** "la diana es tu embudo" (data-viz). CV enviado = flecha; anillo =
  etapa del embudo; el color comunica el proceso de un vistazo.
- **Copy:** NADA técnico, foco diseño.
- **Slug propuesto:** `funnel-target` (sin confirmar).
- **Material:** `animations-bitacora.md` (destilar, no copiar) + PNGs `00`–`13` +
  el video final.
- **Video final:** `Screen Recording 2026-07-26 at 11.48.03 PM.mov` (2.75s,
  2010×1428). El nombre tiene un espacio angosto **U+202F** antes de "PM" →
  referenciar con wildcard `Screen\ Recording*.mov`. Muestra: diana carga →
  flechas vuelan y el contador sube (8→14…) → cada una se pinta del color del
  anillo → se reemplaza por la tabla real. Demo central + prueba de que shipeó.
- **Video ya convertido** (en esta carpeta): `funnel-reveal.webm` (169K) +
  `funnel-reveal.mp4` (103K) + `funnel-reveal-poster.png`. Comando:
  `ffmpeg -i <mov> -vf scale=1200:-2 -an` (webm VP9 crf34 / mp4 h264 crf24
  +faststart). Destino en el case: `assets/images/funnel-target/`, bloque `video`
  `ratio:"wide"`, autoplay/loop/muted, theme-aware.

**TOC candidata (h3 = resumen):**
1. Cada CV enviado es una flecha; cada anillo, una etapa del embudo.
2. Elegí posición antes que color para no inventar un canal visual nuevo.
3. Después sí sumé color: cada flecha se pinta del anillo que tocó.
4. De un vistazo a la diana se lee la distribución de tu proceso.
5. Corre con datos reales de mi registro, no de prueba.

## Próximo paso
Construir A+B (con los defaults) → destilar la bitácora al draft
`content/drafts/funnel-target.js` → preview local → publicar cuando el usuario diga.
Faltaba solo el "dale" para empezar a construir.

## Guías del repo relevantes
`docs/case-pipeline.md` (funnel) · `docs/case-v3-guide.md` (estructura v3) ·
`docs/case-v3-content-guide.md` (reglas de copy) · `docs/design.md` (tokens/espaciado).
