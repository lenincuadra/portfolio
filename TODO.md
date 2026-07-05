# TODO

## Prioridad — accionable ahora

### Percepción — auditoría con ojos de reclutador (2026-07-05)

**✅ Aplicado (2026-07-05):** `fintech-ecosystem` migrado a v3 (h3s declarativos, prosa, 2 videos + wireframes + research que el v2 no mostraba; pasa `case-check --strict`); las 3 `meta.description` genéricas reescritas vendiendo resultado (EN+ES); **Featured Work resucitado** (fix del bug de `hidden` en `app.js` + `ecommerce-conversion` destacado con 3 video-screens); em-dashes del copy en 0 (los "70" eran en su mayoría paths de assets, el linter ahora solo mira copy); **performance**: media referenciada 19.7→10.2 MB (mockup de telecom 4.3 MB→112 KB webp; 3 videos de fintech re-encodeados a webm, el thumbnail de la card de fintech en el index pasó de 2.25 MB a 0.32 MB).

**Queda decidir** (no urgente): sección About visible — el objeto `home.about` de `content.js` no se renderiza en ningún lado (`#about` apunta al hero, que ya cubre la promesa AI); o se agrega una sección About real (los párrafos son buenos y un hiring manager los buscaría), o se borra el objeto muerto + `about.css`.

### 🧑 Acciones tuyas (checklist de búsqueda — nadie más puede hacerlas)

1. **Comprar dominio propio** (~USD 10/año, ej. `lenincuadra.com` o `lenin.design`): señal de seniority para el nivel al que apuntás. Configurar en GitHub Pages (Settings → Pages → Custom domain, crea el CNAME) y avisarme: los pasos técnicos del sitio (BASE de `seo-build`, canonical/OG/JSON-LD, autor en case-v3) están en `docs/seo.md` §Reglas 3 y los hago yo. **Tracking al migrar**: los links viejos a `github.io` no se rompen (GitHub redirige con 301 al dominio nuevo preservando path y query, así que `go.html?ref=` sigue funcionando), pero conviene (a) actualizar los destinos de los **bit.ly del CV** al dominio nuevo para evitar el doble salto, y (b) re-testear el tracking end-to-end después del cambio (visitar `go.html?ref=test` → verificar EmailJS 200 y el dashboard, como en el registro privado).
2. **Grabar el Loom (2-3 min, en inglés)** — la prueba de inglés hablado es el filtro invisible de remoto LATAM→US y casi nadie la resuelve. Guion sugerido: 20s quién sos + posicionamiento (el copy del hero ya lo tiene), 90s recorriendo `no-handoff` (el arco de la TOC es el guion: problema → 3 constraints → resultado indistinguible → 4 capacidades nuevas), 30s cierre con el +221% de ecommerce. Subirlo a Loom/YouTube unlisted; después decidimos dónde linkearlo (hero o cases).
3. **Figma Community como canal**: agregar el link del portfolio en la descripción del plugin de webp export y en tu perfil de Community. Cada instalación es distribución gratis frente a diseñadores y sus managers.
4. **LinkedIn alineado**: titular = el del hero ("Senior Product Designer · AI Adoption Lead"); About de LinkedIn con el +221% y los 77 minutos; y pedirle a la lead del endorsement de Slack una **recomendación formal en LinkedIn** (mismo contenido, mucha más credibilidad).
5. **Un ref por empresa al aplicar**: usar `go.html?ref=<empresa>` en cada aplicación (el tracking ya existe); saber quién visitó define a quién hacerle follow-up.
6. **Dónde y cómo aplicar**: playbook completo y explícito en **`private/job-search.md`** (fuera de git a propósito: el repo es público y ahí están la estrategia, los targets y los números). Cubre las **dos vías en paralelo**: remoto internacional (boards + outreach directo) y local AR con compensación equivalente (con objetivo #1 definido y plan de referrals). Sistema semanal: 10-15 aplicaciones dirigidas + 5 outreach, cada link con su `go.html?ref=<empresa>`, follow-up al día 4 guiado por el tracker.

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
- Status: `status-scroll.webm/.mp4` (4s) — video con **marco de navegador** que hace scroll por la página de la Figma Community (top → "About y un poco más" → top), `controls:false`. Más compacto que la imagen → el link "View on Figma Community" queda más visible. Generado de `figma-community.webp` (recortada hasta "About", **email del cliente `@follett.com` blureado por NDA**), que queda como fuente.
- `before-after`: eliminado de EN/ES (sin fuente; se saltó por decisión del usuario).
- Fuentes crudas en `assets/images/plugin-export-imgs/` (untracked — **NO commitear**: contiene el PNG original sin blurear con el dominio del cliente).

### Migración de template v2 → v3

Routing en `js/app.js:13`: cualquier caso sin `template: 'v3'` cae a `case-v2`.

**✅ Completa (2026-07-05)** — los 6 cases están en v3 (`fintech-ecosystem` fue el último; sitemap regenerada). `cases/case-v2.html` y su CSS quedan sin uso: candidatos a archivar/borrar en una limpieza futura (verificar antes que nada más los referencie).

## Menor / continuo

- **Legibilidad del contenido (`figma-webp-export`, y revisar en todos los v3)** — las secciones **Overview, Problem y Process** tienen bloques de texto largos (párrafos densos) que probablemente no se lean. Hacerlo más navegable/escaneable: acortar, partir en bullets/sub-bloques, o destacar la idea clave. Objetivo: que se capte rápido sin leer todo el párrafo.

- **Thumbnails de video** — Cambiar el `poster` de un video editando el campo `poster` en `data/content.js`. (Las líneas viejas ~92-94 quedaron desactualizadas: hoy los `poster` viven en `images.screens[].poster` — ej. no-handoff `:107-117`, fintech `:475-485`.) Apunta a otro frame del video o a una imagen estática preferida.
- **Case: No Handoff: Closing the Design-Dev Gap —** El video del thumbnail (el mismo que el Overview) si bien está bien el orden, debería mostrarse que el prompt fué lo que generó el códigoo, es decir, en el espacio asignado de "Total Access Demo" debería colocarse encima el video de app andando para dar la total sensación de como funciona y que es código)

## Bloqueado / al final

- **Portfolio personalizado por link** (estrategia definida 2026-07-05, diseño en el roadmap privado): la primera pantalla (featured + orden de la grilla + proofs del hero) se adapta según un perfil derivado del `ref`/`focus` del link compartido; **ordenar, no ocultar; sin filtros manuales**. Data-driven estilo `hero.js`, con fallback al orden actual. Implementar cuando la búsqueda activa lo pida.

- **Thumbnails de case studies** — Agregar thumbnails a los 2 case studies faltantes. *Bloqueado: se define cuando estén todos los assets (ver sección de assets faltantes arriba).*
- **Revisión UX con criterio Joe Natoli** — Repasar todo el index aplicando principios de UX (jerarquía visual, claridad de mensajes, flujo de atención, fricción innecesaria, etc.). *Al final.*
- Optional: micro-hover en los círculos del Venn mostrando evidencia (User → "research, testing" · Business → "+300% subs" · Tech → "ships code").
- **✅ Implementado — lightbox galería / "TOC visual"** (case-v3): cualquier gráfico (imagen, video, slider) abre en el lightbox con su **label + título de sección** (mismos estilos que el contenido: DM Mono label + h3 Instrument Sans, alineado a la izquierda) y **navegación con flechas** (‹ › SVG, teclado ←/→, wrap-around) + contador "N / total". Los gráficos sin heading (video lead) muestran **"Case Study" (label) + título + subtítulo del case** (parte del template). Videos en `controls:false` abren al click; el resto vía botón ⤢. (Compare/carousel soportados por código, sin instancias hoy.)
- **✅ Hecho (2026-07-05) — funnel de cases formalizado** (`docs/case-pipeline.md`): input (`content/new/` + assets) → autoría (guías; IA opcional solo para prosa) → `scripts/case-check.js` (`--strict` para cases nuevos) → `scripts/seo-build.js` → pre-commit hook corre todo. El validador que vivía como snippet en `docs/case-v3-guide.md` §6 ahora es script y corre en cada commit.
- **✅ Hecho (2026-07-04) — auditoría de accesibilidad WCAG AA** (alcance ampliado: hero + index completo + case-v3 + 404, ambos temas y ambos idiomas). Contraste resuelto a nivel tokens (`--accent-ink` nuevo, `--ink-3` recalibrado, `--ink-4` pasa a ser solo decorativo), semántica y teclado (skip links, lightbox con manejo de foco y botón ⤢ en todos los gráficos, Escape en menús, `aria-pressed`/`aria-controls`, `prefers-reduced-motion`). Sistema escalable: **`node scripts/a11y-contrast.js`** (manifest de pares fondo/texto, sin dependencias) + checklist en **`docs/a11y.md`**. Captions de media resueltos después (`--ink-3`, 2026-07-05). Queda como item separado: case-v2 (se cubre con la migración v2→v3). Blindaje: pre-commit hook que corre el script en cada commit (`.githooks/`).

