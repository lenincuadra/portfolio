# TODO

## Prioridad — accionable ahora

### 🧑 Acciones tuyas (checklist de búsqueda — nadie más puede hacerlas)

1. **Grabar el Loom (2-3 min, en inglés)** — la prueba de inglés hablado es el filtro invisible de remoto LATAM→US y casi nadie la resuelve. Guion sugerido: 20s quién sos + posicionamiento (el copy del hero ya lo tiene), 90s recorriendo `no-handoff` (el arco de la TOC es el guion: problema → 3 constraints → resultado indistinguible → 4 capacidades nuevas), 30s cierre con el +221% de ecommerce. Subirlo a Loom/YouTube unlisted; después decidimos dónde linkearlo (hero o cases).
2. **Figma Community como canal**: agregar el link del portfolio en la descripción del plugin de webp export y en tu perfil de Community. Cada instalación es distribución gratis frente a diseñadores y sus managers.
3. **LinkedIn alineado**: titular = el del hero ("Senior Product Designer · AI Adoption Lead"); About de LinkedIn con el +221% y los 77 minutos; y pedirle a la lead del endorsement de Slack una **recomendación formal en LinkedIn** (mismo contenido, mucha más credibilidad).
4. **Integrar cbuilder con** `link-spec.json`: los links trackeados por aplicación los genera **cbuilder** (tu app de CVs) leyendo el contrato publicado en la raíz del sitio (`link-spec.json`: base URL, formato del código, templates de links, perfiles `focus` disponibles). El prompt para implementarlo en la sesión de cbuilder está en `private/cbuilder-prompt.md`. El portfolio ya soporta todo (go.html + perfiles); para DMs sueltos sin CV sigue sirviendo `?focus=payments|ai|conversion` directo. Saber quién visitó define a quién hacerle follow-up.
5. **Dónde y cómo aplicar**: playbook completo y explícito en `private/job-search.md` (fuera de git a propósito: el repo es público y ahí están la estrategia, los targets y los números). Cubre las **dos vías en paralelo**: remoto internacional (boards + outreach directo) y local AR con compensación equivalente (con objetivo #1 definido y plan de referrals). Sistema semanal: 10-15 aplicaciones dirigidas + 5 outreach, cada link con su `go.html?ref=<empresa>`, follow-up al día 4 guiado por el tracker.



### Assets faltantes (completar 1 por 1, por caso)

Auditoría original (contra disco): 14 assets faltaban en 2 casos v3. **Ambos resueltos** (`no-handoff` + `figma-webp-export`). Los otros 3 (`ecommerce-conversion`, `fintech-ecosystem`, `telecom-legacy-refactor`) ya tenían sus assets completos → no quedan assets faltantes.

> Desbloquea "Thumbnails de case studies" (ver abajo): los 5 casos ya tienen cover.

`**no-handoff` — ✅ completo** (se hizo como `.webp` + video; el plan original de 8 `.png` se consolidó en menos archivos):

- Imágenes `.webp`: cover, hero, screen-app, screen-library, component-mapping, process-component-structure
- Thumbnail de la card: loop `no-handoff-loop.webm/.mp4` (generado de las screens)
- Demo en "Result": `no-handoff-tests.webm/.mp4` (suite de tests, convertida del `.mov` crudo; el `.mov` queda gitignoreado)

`**figma-webp-export` — ✅ completo** (assets reales + 3 videos; el plan original de 6 `.png` se reasignó):

- Card + Overview/hero: `figma-flow.webm/.mp4` — video del plugin corriendo en Figma (poster `cover.webp`).
- Process: `plugin-code.webm/.mp4` (8s, look **Cursor**) — montaje: 2s pantalla de consumo de Claude.ai ("31% used") + 3 archivos del plugin (`manifest.json` / `code.js` / `ui.html`, 2s c/u), render real del source en `plugin-export-imgs/Export-2-webp/`. La imagen suelta de tokens se quitó (queda dentro del video).
- Result: `plugin-demo.webm/.mp4` (~19s, con **fade in/out**) — demo del plugin con **velocidad selectiva** (setup/proceso acelerados; beats clave —panel "Export optimized images" y Finder con los pesos— a ~1.6-2x) y **chrome del navegador recortado** (`crop` top 200px). `controls:false` → abre en el lightbox al click. Source crudo de 52s en `plugin-export-imgs/` (gitignoreado).
- Status: `status-scroll.webm/.mp4` (4s) — video con **marco de navegador** que hace scroll por la página de la Figma Community (top → "About y un poco más" → top), `controls:false`. Más compacto que la imagen → el link "View on Figma Community" queda más visible. Generado de `figma-community.webp` (recortada hasta "About", **email del cliente** `@follett.com` **blureado por NDA**), que queda como fuente.
- `before-after`: eliminado de EN/ES (sin fuente; se saltó por decisión del usuario).
- Fuentes crudas en `assets/images/plugin-export-imgs/` (untracked — **NO commitear**: contiene el PNG original sin blurear con el dominio del cliente).



### Migración de template v2 → v3

**✅ Completa (2026-07-05)** — los 6 cases están en v3 (`fintech-ecosystem` fue el último; sitemap regenerada).

**✅ Limpieza (2026-07-24)** — eliminadas por completo las plantillas legacy: `cases/case-v2.html`, `cases/case.html` (v1) y sus 3 stubs de redirect, `content/case-schema.yml`, `CASE-STUDY-GUIDE.md`, el CSS `.img-container`/`.img-clip`/`.overview-layout`/`.gallery-grid` de `styles/case.css`, y `renderCase()` + helpers v1 de `js/app.js` (936 → 582 líneas). El routing (`app.js`, `case-v3.html`, `seo-build.js`) manda todo a `case-v3`; `template: "v3"` queda solo como marcador que lee `case-check`.

## Drafts en progreso

### funnel-target — videos pendientes de grabar (playground de cv-builder, localhost)

- [ ] **Video A** → `assets/images/funnel-target/diana-empty.webm` (sección insight)
  - Playground con `count=0`. Diana con anillos, sin flechas.
  - Crop: mitad izquierda (sin sliders). Duración: 2-3s. Autoplay loop.
- [ ] **Video B** → `assets/images/funnel-target/paint-loop.webm` (sección color)
  - Flechas en gris → pintado simultáneo → todas coloreadas a la vez.
  - Crop: solo la diana (sin toolbar ni action cards). Duración: ~1-2s loopeable.
  - El playground permite re-disparar el pintado a voluntad.
- [ ] **Video C** → `assets/images/funnel-target/playground-controls.webm` (sección playground)
  - Animación corriendo CON el panel de sliders visible. Sin crop. Duración: 5-8s.
- [ ] Convertir imágenes `.png` a `.webp` (`brew install webp` → `cwebp`)
- [ ] Cover definitivo sin chrome del toolbar
- [ ] Confirmar slug `funnel-target` y decidir si va a `cases.json`
- [ ] Publicar: `node scripts/case-publish.js funnel-target` (sacar `unlisted:true` al listar en el grid)

> Cuando estén los videos, pasárselos a Claude: los cropea, actualiza el draft y corre `case-check --strict`.

## Menor / continuo

- **Legibilidad del contenido (**`figma-webp-export`**, y revisar en todos los v3)** — las secciones **Overview, Problem y Process** tienen bloques de texto largos (párrafos densos) que probablemente no se lean. Hacerlo más navegable/escaneable: acortar, partir en bullets/sub-bloques, o destacar la idea clave. Objetivo: que se capte rápido sin leer todo el párrafo.
- **Thumbnails de video** — Cambiar el `poster` de un video editando el campo `poster` en `data/content.js`. (Las líneas viejas ~92-94 quedaron desactualizadas: hoy los `poster` viven en `images.screens[].poster` — ej. no-handoff `:107-117`, fintech `:475-485`.) Apunta a otro frame del video o a una imagen estática preferida.
- **Case: No Handoff: Closing the Design-Dev Gap —** El video del thumbnail (el mismo que el Overview) si bien está bien el orden, debería mostrarse que el prompt fué lo que generó el códigoo, es decir, en el espacio asignado de "Total Access Demo" debería colocarse encima el video de app andando para dar la total sensación de como funciona y que es código)



## Bloqueado / al final

- **Thumbnails de case studies** — Agregar thumbnails a los 2 case studies faltantes. *Bloqueado: se define cuando estén todos los assets (ver sección de assets faltantes arriba).*
- **✅ Hecha (2026-07-06) — Revisión UX criterio Natoli + revisión por roles** (recruiter/HM/par/engineer/founder). Hallazgos accionables, **pendientes de aprobación** (son cambios de diseño/copy, decide el usuario):
  1. ✅ **Aplicado (2026-07-06)** — jerarquía del hero: Highlights de `--text-sm`/`--ink-3`/300 a `--text-base`/`--ink-2`/400, y el rol a `--ink-2`/400. Las métricas ya no son letra legal.
  2. ✅ **Aplicado (2026-07-06)** — sección About real después del trabajo (cero costo de scroll a las cards; el nav ancla directo). De paso: los links "Work" de case-v3 y 404 apuntaban a `#featured-case`, que quedó oculto por default — corregidos a `#work`.
  3. **Mobile: el heading de "Selected Work" ocupa una pantalla entera** (6 líneas display) antes de la primera card; acortarlo o reducir su escala mobile. Evaluar también si el venn debe ir primero en mobile (hoy es lo primero que se ve, antes del título/rol).
  4. **Copy del Contact**: "I'm open to product design roles…" con puntos suspensivos debilita la afirmación; decir directo. El excerpt de figma-webp aún tiene un em-dash (la regla de copy no se aplicó a cards).
- Optional: micro-hover en los círculos del Venn mostrando evidencia (User → "research, testing" · Business → "+300% subs" · Tech → "ships code").

