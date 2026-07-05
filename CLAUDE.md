# Portfolio — instrucciones para Claude

## Commits

Mensajes de commit **en español** (no traducir al inglés), matching el historial: prefijo de área + acción en imperativo/presente. Ej.: `ecommerce: reescribe…`, `case-v3: documenta…`, `Styleguide: …`.

## Styleguide
El styleguide (`styleguide.html`) debe mostrar siempre los componentes reales del proyecto.
- Las clases, tokens y estilos que se demuestran en el styleguide deben coincidir exactamente con los que están definidos en los archivos CSS (`styles/`).
- Si hay discrepancia entre el styleguide y el CSS real, corregir el styleguide para que refleje lo que existe, no al revés.
- Nunca duplicar estilos en el `<style>` inline del styleguide si ya están definidos en los archivos CSS.

## Case studies (template v3)

Los cases con `"template": "v3"` en `data/content.js` se renderizan con `cases/case-v3.html`; los que no, caen a `case-v2` (routing en `js/app.js`). El contenido es bilingüe (el mismo objeto existe en `en` y `es`, alineado por índice; el renderer usa `t(en, es)`).

**Para crear o migrar un case v3 de punta a punta** (estructura del objeto, todos los `type` con sus campos derivados del renderer, validación sin navegador y checklist): **`docs/case-v3-guide.md`** — empezá por ahí. (`CASE-STUDY-GUIDE.md` en la raíz es el flujo v2 obsoleto.)

### La TOC es el resumen del caso (principio clave)

La tabla de contenidos de cada case-v3 muestra, por sección: el **`label`** (corto, ej. "Overview") como título y el **`h3`** como subtítulo (ver `buildTOC` en `case-v3.html`).

**Regla:** leer solo la TOC tiene que alcanzar para captar el caso completo — sin leer el cuerpo ni navegarlo. Por eso cada **`h3` debe ser una afirmación declarativa y completa que haga avanzar la historia**, no un rótulo que repita el `label`.

- ✅ **Referencia: `no-handoff`** — sus h3 leídos en orden cuentan el arco solos: *"Our standard delivery at PSH takes 2 weeks" → "Every time I tried to generate code from Figma designs, the AI hallucinated." → "Three constraints that eliminated the hallucinations." → "The output was indistinguishable from the real product" → "4 use cases the team didn't have before."*
- ❌ **Evitar** h3 que solo nombran la sección: *"Before / After Comparison.", "Measured as Q1 vs Q1.", "What This Demonstrates."* (no agregan nada; repiten el `label`).

Al escribir o migrar un case v3, redactar los `h3` para que la TOC se lea como un resumen narrado. **`no-handoff` es el ejemplo a seguir.**

### Componentes de contenido (`type` en `sections[].content[]`)

`body`, `quote`, `steps` (`variant`: bullet/numbered; "label — desc" → h4+p), `subheading` (agrupa con el siguiente body), `image` (`ratio`: wide/square/portrait/auto; `device:"phone"` = mockup en bezel; `canvas:"dark"`), `video` (`controls`, `ratio`, `size:"half"`, `poster`, `caption`, `canvas:"dark"`, `themed` = fondo theme-aware con 2 variantes `-light`/`-dark`), `compare`, `callout`, `carousel`, `slider`, `heading` (`level` 4/5), `row`, `gallery`, `link`, `table` (`headers`+`rows`, `variant:"metrics"`).

Cualquier componente nuevo se documenta en el styleguide (sección `case-components`). Todos los gráficos abren en el **lightbox-galería** (label + h3 de su sección, navegable con flechas).

### Cómo escribir el contenido (que lea bien)

Tener la info correcta no alcanza: el caso tiene que **leerse** bien. La regla corta: **prosa (`body`) lleva la narrativa; los bullets (`steps`) solo para listas reales**; patrón claim → cómo → prueba (`heading`/`h3` + `body` + gráfico); primera persona, concreto, breve. El anti-patrón es la "pared de bullets" abstractos. **Sin em-dashes (`—`) en el copy** (usá coma/punto/dos puntos/paréntesis); ojo: el `" — "` de `steps` (`"label — desc"`) y de los captions de `video` es sintaxis que parsea el renderer, no texto, y se mantiene. Guía completa con checklist: **`docs/case-v3-content-guide.md`** (referencias: `no-handoff` y `figma-webp-export`).

### Decisiones de diseño / jerarquía visual del template

El *por qué* de los tokens y espaciados que valen para **todos** los case-v3 (fondo de media containers, espaciado de sub-secciones, secciones sin `label`, dos sub-secciones dentro de una): **`docs/design.md`**. Regla: una decisión de presentación que aplica a todos los cases va como regla de template (clase / `#case-v3-content`), documentada ahí — nunca como estilo inline en `data/content.js`. Espaciados siempre con tokens existentes de `tokens.css` (un `--sp-N` inexistente invalida la declaración entera en silencio).

## Hero (`index.html`)

Los tags y la descripción del hero son **copy estático hardcodeado en `index.html`** (ya no se auto-generan desde los cases). El sistema previo de scoring (`heroTagWeight`, `home.hero.tagExclude`, `buildHeroSummary` en `js/app.js`) fue eliminado.

### Copy y dónde vive

| Elemento | HTML | Bilingüe |
|---|---|---|
| Subtítulo (`#hero-role`) | data-driven desde `home.hero.role` en `data/content.js` | EN/ES distintos en content.js |
| CTA (`#hero-contact-cta`) | data-driven desde `home.hero.contactCta` | EN/ES distintos en content.js |
| Tags (`#hero-tags`) | `<span class="badge badge--ghost">` estáticos | En inglés en ambos idiomas (terminología de industria) |
| Descripción (`#hero-summary`) | `.hero__summary-lead` + `.hero__summary-recent`, con `data-en`/`data-es` | EN/ES en los atributos |
| Ubicación (`.hero__location`) | bajo el badge de disponibilidad, con `data-en`/`data-es` | EN/ES en los atributos |

### i18n

El toggle EN/ES funciona por dos vías que conviven:
- **`home.hero.*` en `data/content.js`** → `setText(...)` en `renderIndex` (role, contactCta, eyebrow, firstName, lastName).
- **`data-en` / `data-es`** → el loop de `renderIndex`/`renderSiteWide` setea `textContent` según idioma (summary lead, summary recent, location, sublabels del dropdown).

Para cambiar copy del hero: editar el texto en `index.html` (tags/summary/location) o en `data/content.js` (role/contactCta), manteniendo ambos idiomas.

### Línea dinámica "Recently:" (`hero.js` + `cases.json`)

La línea `.hero__summary-recent` se genera en runtime con **`hero.js`** (vanilla, sin dependencias, mismo estilo que `tracker.js`):
- Lee `cases.json` (raíz), filtra `featured === true`, y elige **2 pruebas por carga de página** (aleatorio ponderado por `metric_value`; sin timer — nada rota mientras la página está abierta).
- Inyecta `Recently: {proof_1} · {proof_2}` (EN) / `Recientemente: ...` (ES). Cada prueba es un `<a class="hero__proof-link">` con deep link a su case (`cases/case-v3.html?slug=<id>`), y lleva su propio `data-en`/`data-es`, así el toggle EN/ES la actualiza sin recargar.
- **Fallback**: si `cases.json` falla, está vacío, o da menos de 2 pruebas, el placeholder estático en `index.html` queda intacto (el script nunca borra el contenido antes de tener el reemplazo listo). Ese placeholder es el texto de respaldo.

**Reglas del sistema** (documentadas como comentario al inicio de `hero.js`): máximo 2 pruebas; cada `proof` debe contener un número o delta temporal (se cura en `cases.json`); la oración de posicionamiento (`.hero__summary-lead`) es hardcodeada y el script **nunca la toca**.

Para cambiar las pruebas: editar `cases.json` (campos `proof`/`proof_es`, `metric_value`, `featured`, `id` = slug real del case).

## Accesibilidad (WCAG AA)

Auditoría hecha (2026-07-04) sobre index + case-v3 + 404, ambos temas e idiomas. Reglas vigentes al tocar UI (detalle y checklist completo: **`docs/a11y.md`**):

- **Texto nunca con `--ink-4`** (es decorativo-only); `--ink-3` es el tono más claro permitido para texto.
- **Acento como texto y focus ring → `--accent-ink`** (theme-aware); `--accent` queda para superficies y texto sobre `--accent-pale`.
- Al tocar `tokens.css` o agregar componentes con texto: correr **`node scripts/a11y-contrast.js`** (y agregar el par nuevo a su manifest). Debe quedar en verde. **`node scripts/a11y-static.js`** lintea lo mecánico (tokens inexistentes, `--ink-4` como texto, skip links, `alt`, `onclick` inline). El pre-commit hook (`.githooks/pre-commit`) corre ambos y bloquea el commit si algo falla; setup por clone: `git config core.hooksPath .githooks`.
- Interactivo = `<a>`/`<button>` reales; overlays cierran con Escape y devuelven el foco; media autoplay respeta `prefers-reduced-motion`.

## SEO / GEO

`sitemap.xml`, `robots.txt` y `llms.txt` (resumen del sitio para modelos de IA, que no ejecutan JS) **se generan** con `node scripts/seo-build.js` desde `data/content.js` — no editarlos a mano. El pre-commit hook bloquea si quedan desincronizados. Todo case necesita `meta.title` + `meta.description`; los `h3` de las secciones alimentan el arco narrativo de `llms.txt` (escribir buenos `h3` también es GEO). Detalle y reglas: **`docs/seo.md`**.
