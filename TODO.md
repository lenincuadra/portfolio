# TODO

## Prioridad — accionable ahora

### Assets faltantes (completar 1 por 1, por caso)
Auditoría hecha contra disco: 14 assets referenciados en `data/content.js` no existen.
Todos están en 2 casos; los otros 3 (`ecommerce-conversion`, `fintech-ecosystem`, `telecom-legacy-refactor`) tienen sus assets completos.
> Bloqueante para "Thumbnails de case studies" (ver abajo).

**`no-handoff` — ✅ completo** (se hizo como `.webp` + video; el plan original de 8 `.png` se consolidó en menos archivos):
- [x] Imágenes `.webp`: cover, hero, screen-app, screen-library, component-mapping, process-component-structure
- [x] Thumbnail de la card: loop `no-handoff-loop.webm/.mp4` (generado de las screens)
- [x] Demo en "Result": `no-handoff-tests.webm/.mp4` (suite de tests, convertida del `.mov` crudo; el `.mov` queda gitignoreado)

**`figma-webp-export` — 6 faltantes:**
- [ ] `assets/images/figma-webp-export/cover.png` — thumbnail del case (card del home)
- [ ] `assets/images/figma-webp-export/hero.png` — plugin corriendo en Figma, UI con varias imágenes seleccionadas
- [ ] `assets/images/figma-webp-export/before-after.png` — flujo manual paso a paso vs. el plugin en un paso
- [ ] `assets/images/figma-webp-export/claude-process.png` — Claude.ai: pantalla del build, uso de tokens visible
- [ ] `assets/images/figma-webp-export/plugin-in-use.png` — plugin en uso: export en progreso o comparación side-by-side
- [ ] `assets/images/figma-webp-export/figma-community.png` — página del plugin en Figma Community (cover, descripción, botón install)

### Migración de template v2 → v3
Routing en `js/app.js:13`: cualquier caso sin `template: 'v3'` cae a `case-v2`.
- [x] `no-handoff` (ya en v3)
- [x] `figma-webp-export` (ya en v3)
- [ ] `ecommerce-conversion` — migrar v2 → v3
- [ ] `fintech-ecosystem` — migrar v2 → v3
- [ ] `telecom-legacy-refactor` — migrar v2 → v3

## Menor / continuo

- [ ] **Accesibilidad de captions de media** (`.image-block__caption` en `styles/case.css`) — revisar contraste: el color `var(--ink-4)` en texto chico (`--text-xs`) puede no pasar WCAG AA (4.5:1). Centrado ya aplicado; falta validar/ajustar el contraste.
- [ ] **Thumbnails de video** — Cambiar el `poster` de un video editando el campo `poster` en `data/content.js`. (Las líneas viejas ~92-94 quedaron desactualizadas: hoy los `poster` viven en `images.screens[].poster` — ej. no-handoff `:107-117`, fintech `:475-485`.) Apunta a otro frame del video o a una imagen estática preferida.

## Bloqueado / al final

- [ ] **Thumbnails de case studies** — Agregar thumbnails a los 2 case studies faltantes. _Bloqueado: se define cuando estén todos los assets (ver sección de assets faltantes arriba)._
- [ ] **Revisión UX con criterio Joe Natoli** — Repasar todo el index aplicando principios de UX (jerarquía visual, claridad de mensajes, flujo de atención, fricción innecesaria, etc.). _Al final._
- [ ] Optional: micro-hover en los círculos del Venn mostrando evidencia (User → "research, testing" · Business → "+300% subs" · Tech → "ships code").
- [ ] **Nice-to-have — lightbox galería / "TOC visual"** (case-v3): que cualquier elemento gráfico (imagen, video, slider) se abra en el lightbox mostrando su **título** (el heading de su sección en el case, NO el caption/subtítulo) y sea **navegable con flechas** por todos los gráficos del mismo case. Intención: igual que el TOC (recorriéndolo captás de qué va el case entero), pero visual — título + gráfico + navegación.
- [ ] **PRIORITARIO — ejecutar al final, cuando el hero esté terminado:** auditoría de accesibilidad WCAG AA del hero (contraste, semántica, teclado), en ambos temas y ambos idiomas.
