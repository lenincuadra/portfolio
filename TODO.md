# TODO

## Prioridad — accionable ahora

### Assets faltantes (completar 1 por 1, por caso)

Auditoría original (contra disco): 14 assets faltaban en 2 casos v3. **Ambos resueltos** (`no-handoff` + `figma-webp-export`). Los otros 3 (`ecommerce-conversion`, `fintech-ecosystem`, `telecom-legacy-refactor`) ya tenían sus assets completos → no quedan assets faltantes.

> Desbloquea "Thumbnails de case studies" (ver abajo): los 5 casos ya tienen cover.

`**no-handoff` — ✅ completo** (se hizo como `.webp` + video; el plan original de 8 `.png` se consolidó en menos archivos):

- Imágenes `.webp`: cover, hero, screen-app, screen-library, component-mapping, process-component-structure
- Thumbnail de la card: loop `no-handoff-loop.webm/.mp4` (generado de las screens)
- Demo en "Result": `no-handoff-tests.webm/.mp4` (suite de tests, convertida del `.mov` crudo; el `.mov` queda gitignoreado)

`**figma-webp-export` — ✅ completo** (assets reales + 3 videos; el plan original de 6 `.png` se reasignó):

- Card + Overview/hero: `figma-flow.webm/.mp4` — video del plugin corriendo en Figma (poster `cover.webp`).
- Process: `plugin-code.webm/.mp4` (7s, look **Cursor**) — montaje: 1s pantalla de consumo de Claude.ai ("31% used") + 3 archivos del plugin (`manifest.json` / `code.js` / `ui.html`, 2s c/u), render real del source en `plugin-export-imgs/Export-2-webp/`. La imagen suelta de tokens se quitó (queda dentro del video).
- Result: `plugin-demo.webm/.mp4` — demo completo (export por lotes + archivos en Finder con sus pesos, 52s, con controles).
- Status: `figma-community.webp` — página del plugin en la Figma Community, **recortada** hasta el final del "About" (sin "More like this" ni footer), ratio `auto` (el contenedor calza la imagen, sin letterbox). **Email de soporte con dominio del cliente (`@follett.com`) blureado por NDA.**
- `before-after`: eliminado de EN/ES (sin fuente; se saltó por decisión del usuario).
- Fuentes crudas en `assets/images/plugin-export-imgs/` (untracked — **NO commitear**: contiene el PNG original sin blurear con el dominio del cliente).

### Migración de template v2 → v3

Routing en `js/app.js:13`: cualquier caso sin `template: 'v3'` cae a `case-v2`.

- `no-handoff` (ya en v3)
- `figma-webp-export` (ya en v3)
- `ecommerce-conversion` — migrar v2 → v3
- `fintech-ecosystem` — migrar v2 → v3
- `telecom-legacy-refactor` — migrar v2 → v3

## Menor / continuo

- **Accesibilidad de captions de media** (`.image-block__caption` y `.demo-figure__caption` en `styles/case.css`) — revisar contraste: el color `var(--ink-4)` en texto chico (`--text-xs`) puede no pasar WCAG AA (4.5:1). Centrado ya aplicado en ambos; falta validar/ajustar el contraste.
- **Thumbnails de video** — Cambiar el `poster` de un video editando el campo `poster` en `data/content.js`. (Las líneas viejas ~92-94 quedaron desactualizadas: hoy los `poster` viven en `images.screens[].poster` — ej. no-handoff `:107-117`, fintech `:475-485`.) Apunta a otro frame del video o a una imagen estática preferida.
- **Case: No Handoff: Closing the Design-Dev Gap —** El video del thumbnail (el mismo que el Overview) si bien está bien el orden, debería mostrarse que el prompt fué lo que generó el códigoo, es decir, en el espacio asignado de "Total Access Demo" debería colocarse encima el video de app andando para dar la total sensación de como funciona y que es código)

## Bloqueado / al final

- **Thumbnails de case studies** — Agregar thumbnails a los 2 case studies faltantes. *Bloqueado: se define cuando estén todos los assets (ver sección de assets faltantes arriba).*
- **Revisión UX con criterio Joe Natoli** — Repasar todo el index aplicando principios de UX (jerarquía visual, claridad de mensajes, flujo de atención, fricción innecesaria, etc.). *Al final.*
- Optional: micro-hover en los círculos del Venn mostrando evidencia (User → "research, testing" · Business → "+300% subs" · Tech → "ships code").
- **Nice-to-have — lightbox galería / "TOC visual"** (case-v3): que cualquier elemento gráfico (imagen, video, slider) se abra en el lightbox mostrando su **título** (el heading de su sección en el case, NO el caption/subtítulo) y sea **navegable con flechas** por todos los gráficos del mismo case. Intención: igual que el TOC (recorriéndolo captás de qué va el case entero), pero visual — título + gráfico + navegación.
- **PRIORITARIO — ejecutar al final, cuando el hero esté terminado:** auditoría de accesibilidad WCAG AA del hero (contraste, semántica, teclado), en ambos temas y ambos idiomas.

