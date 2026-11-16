# Design decisions — portfolio

Decisiones de diseño transversales que **no** se ven solo leyendo el CSS: el *por qué* detrás de un token o un espaciado, para que se apliquen consistentes y escalen al resto de los cases. La referencia viva de los componentes es `styleguide.html`; este archivo es el razonamiento.

> Regla de oro: si una decisión de presentación tiene que valer para **todos** los case-v3 (no es un one-off de un case puntual), va acá y se implementa como regla de template (CSS por clase / `#case-v3-content`), nunca como estilo inline en `data/content.js`.

---

## Media containers (`.image-block`)

**Fondo: `--bg-card`, no `--surface`.**

Casi todos los gráficos de los cases (screenshots, mockups, wireframes, demos en video) traen **su propio fondo claro/blanco**. Sobre `--surface` (el color de divisor, beige medio en light · `#2c2a26` en dark) ese blanco quedaba como un recorte con costura visible alrededor. `--bg-card` (blanco en light · `#211f1c` en dark) es el **canvas** del sistema: enmarca el contenido sin pelearse con él, y las barras de *letterbox* (cuando el video va en ratio fijo con `object-fit: contain`) quedan del mismo tono.

- Aplica a `.image-block`, a `.image-block--video video` (las barras) y a `.carousel__track`.
- El borde (`--border-subtle`) define el límite — no dependemos del relleno para separar del fondo de página (`--bg`).
- Funciona **en ambos temas**: la imagen white-background lee como card claro en light y como card oscuro con borde en dark. No se intenta "fundir" un PNG blanco en dark (imposible sin tocar el asset); se busca que el **contenedor** sea coherente con el tema vía token.
- El placeholder `--empty` mantiene su propio fill (`--img-ph-fill`, derivado del accent) — no se toca.

**Nunca hornear un fondo de tema dentro de un asset.** El fondo de media es theme-aware vía `--bg-card` (incluido `.carousel__track`). Por eso **no se hornea** un escenario/fondo específico de un tema (ej. un stage oscuro) dentro de un video o imagen: eso lo deja fijo y se rompe en el otro tema. Si una imagen blanca tiene que destacar en dark, ya lo hace sobre `--bg-card` dark; si querés forzar un escenario oscuro en **ambos** temas, eso es `canvas:"dark"` (decisión explícita), no horneado. **Para un crossfade/slideshow entre 2+ imágenes que siga el tema** hay dos caminos:
- (a) el componente **`carousel`** (CSS: rota con fade, fondo `--bg-card`) — lo más liviano;
- (b) un **video `themed`** (`"themed": true`): 2 variantes horneadas (`<base>-light` / `<base>-dark`, con el stage = `--bg-card` de cada tema) que un JS (`applyThemedVideos` en `case-v3.html`) intercambia según el tema, sin alpha. El `src` apunta al `-dark.webm`; van los 4 archivos (`-light`/`-dark` × `.webm`/`.mp4`) en la carpeta del caso. El JS re-inyecta el `<source>` correcto al cargar y en cada toggle de tema.

Elegí el **video themed** cuando querés el control fino del video (timing exacto, ease del fade, que sea "un video"); el **carousel** para lo simple. Lo único que **nunca** va: un solo video con el stage de **un** tema horneado (se rompe en el otro). Excepción aparte: `canvas:"dark"` (escenario oscuro forzado en ambos temas, decisión explícita).

**Canvas oscuro para media mobile / de bajo contraste (`"canvas": "dark"`).**
Un screenshot mobile con fondo blanco (ej. un wireframe digital) se *pierde* sobre `--bg-card` blanco en light: no se lee como pantalla de teléfono, parece fullscreen. El flag `"canvas": "dark"` del componente (`image` y `video`) apoya el bloque y el letterbox sobre **`--media-canvas-dark`** — un warm near-black del palette, oscuro en **ambos** temas (`#211f1c` light · `#2c2a26` dark) — para que el mockup lea como pantalla sobre un escenario oscuro. Se combina con **`"ratio": "portrait"`** (que ya capea el ancho a 380px y da el encuadre de teléfono). Es **opt-in**: solo donde el contenido lo necesita (un mockup con UI de color, ej. WhatsApp, va bien sobre el canvas default y no lleva el flag). Implementación: `.image-block--canvas-dark` en `case.css`, token en `tokens.css`, render del flag en el `case-v3.html`. Demo en el styleguide (sección `case-components`).

**Mockup mobile en bezel (`"device": "phone"`).**
Para un screenshot que **es** una pantalla de teléfono, el patrón correcto es el bezel de dispositivo, no el canvas oscuro. La imagen (a su aspecto mobile real, ej. 360×640, sin fondo agregado) va dentro de un cuerpo de teléfono (`.device-phone`, near-black fijo) centrado en un escenario full-width que **sigue el theme** (`.device-stage` = `--bg-card`). El bezel le da un borde a la pantalla, así un mockup claro/blanco igual lee como teléfono sobre fondo claro: por eso el escenario puede seguir el theme y no hace falta forzarlo oscuro. Opt-in (`"device": "phone"` en el componente `image`); abre en el lightbox como screenshot pelado. **Diferencia con `canvas:"dark"`:** ese es para media de bajo contraste en general (escenario oscuro detrás de cualquier gráfico); `device:"phone"` es específico para mockups de teléfono (bezel + escenario al theme). Implementación: `.device-figure / .device-stage / .device-phone` en `case.css`, rama `device` en el `image` del `case-v3.html`. Demo en el styleguide.

## Espaciado de sub-secciones dentro de un case-v3

La jerarquía vertical es mínima visualmente pero clave para la lectura. Tres reglas de template (escalan a cualquier case, no son ajustes por-case):

1. **`.case-subhead` (componente `heading` nivel 4) = apertura de sub-tema.** Lleva `margin-top: var(--sp-10)` (2.5rem): separación clara respecto del media o la prosa de arriba. Es la **distancia "después de media"**.
   - *Bug histórico:* usaba `var(--sp-7)`, que **no existe** en la escala (`tokens.css` salta de `--sp-6` a `--sp-8`). Una `var()` indefinida sin fallback invalida **toda** la declaración `margin` → quedaba en 0 y el subhead se pegaba a la imagen de arriba. Por eso "Add a high-intent channel" no tenía aire.
2. **Subhead pegado al `h3` de sección** (`#case-v3-content .case-section__head + .case-subhead`): `margin-top: var(--sp-6)`. El `h3` ya abrió la sección; el primer subhead va más cerca (no necesita la distancia completa de "después de media").
3. **Sección sin `label`**: el `margin-top: 3rem` vive en `.case-section__head` (wrapper de label + h3), así que el ritmo entre secciones se mantiene aunque una omita su eyebrow. *Escalable:* cualquier sección futura sin label queda bien sin tocar nada.

**Cómo modelar "dos sub-secciones dentro de una sección"** (ej. Result → *Quantitative* / *Qualitative*): cada grupo se abre con un `heading` (nivel 4 → `.case-subhead`), no con `subheading`. `subheading` está pensado para agrupar con el `body` siguiente (`subheading`+`body` → `<li><h4>+<p>`); usarlo para rotular una lista `steps` lo envuelve en un `<ul><li>` apretado y "amontona". `heading` da el bloque de sub-sección con su `margin-top: var(--sp-10)` y la lista respira debajo.

## Layout responsive y encabezado sticky de sección

**Desktop y tablet son el mismo layout mientras haya espacio.** Contenido + TOC a la derecha desde 769px hacia arriba: entre 769 y 1100px la columna de contenido se achica (`minmax(0, 1fr)`) y la TOC (200px) se mantiene. Solo en **mobile (≤768px)** pasa a una columna y la TOC desaparece. No introducir un layout "tablet" distinto: si algo no entra, se ajusta la columna, no se esconde la TOC. (768px es el breakpoint mobile que ya usa el resto del sitio, ej. `header.css`.)

**Encabezado de sección sticky** (`.case-section__head` en `styles/case.css`): el renderer envuelve `label` + `h3` de cada sección en ese bloque, que queda pegado bajo la navbar (`top: 64px`) mientras se lee la sección; la siguiente lo empuja (sticky se limita a su `<section>`). Vale en **todos los tamaños**, mobile incluido. Mientras está en el flujo se ve como texto normal; **solo cuando flota** (`.is-stuck`) toma el vidrio y la línea divisoria de la navbar. El vidrio son los tokens `--glass-bg` / `--glass-filter` de `tokens.css`, compartidos con `.site-header`: una sola definición, así nunca se ve un tono distinto entre los dos. Consecuencias:

- El margen superior de la sección vive en el wrapper (`#case-v3-content .case-section__head { margin-top: 3rem }`), así una sección con o sin `label` mantiene el ritmo sin reglas extra.
- Los selectores de adyacencia apuntan al wrapper (`.case-section__head + .case-subhead`), no al `h3`.
- **Resaltador:** cuando el bloque queda pegado, el renderer le pone `.is-stuck` y el h3 se subraya con un trazo de marcador que se dibuja de izquierda a derecha (token `--mark` de `tokens.css`; en dark sube de 24% a 40% de acento para no perderse sobre el fondo casi negro). `--mark`, `--mark-strong` y `--mark-3` son **la única definición**: blog-notes carga `tokens.css` de producción y los usa directo. Cambiarlos o renombrarlos afecta al blog.
- Es una razón más para h3 cortos: el h3 queda visible todo el tiempo y en mobile cada línea extra quita alto de lectura.

## Modo de lectura (selector en la TOC)

Cada case-v3 tiene un selector para elegir entre el **case completo** y la **lectura esencial** (`.reading-mode` en `styles/case.css`, lo crea `readingMode()` del renderer). Es la TOC-como-resumen llevada al cuerpo: si los h3 cuentan el arco (ver CLAUDE.md, referencia `no-handoff`), leer solo los encabezados alcanza.

- **Qué queda en la lectura esencial:** `label` + `h3`, los sub-temas (`heading` nivel 4, `.case-subhead`: son el contexto de los gráficos que vienen debajo), las listas en su versión corta, los gráficos (imagen, video, slider, carousel, compare, row, tabla) y las alertas (`.alert-callout`). Se oculta el resto: `body`, `quote`, `link` y los CTA de nivel 5 (`.case-subcta`, ej. "Expande y arrastra para comparar"). El renderer marca lo ocultable con `.is-detail` y `body.is-essentials` lo esconde. Por eso el copy dice "oculta los párrafos" y nunca "solo títulos" (sería falso: quedan los gráficos).
- **Listas:** con rótulo (`"label — desc"` de `steps`, o `subheading`) se queda el h4 y se oculta la descripción; bullets sin rótulo se quedan enteros (ya son la versión corta, ej. las métricas de ecommerce); numeradas sin rótulo se ocultan (se leen como prosa). Consecuencia al escribir: si una métrica tiene que verse en la lectura esencial, va en el rótulo o en un bullet sin rótulo, nunca solo en la descripción.
- **Tiempos:** completo = el `readMins` del case; esencial = palabras del texto que queda visible (encabezados, sub-temas, listas cortas) a 200 por minuto, redondeado a 5 s (mínimo 10 s). Etiqueta visible = solo el tiempo: `2 min | 30 sec` (ES `30 seg`). "sec" y no "s": la "s" sola se pierde al leer rápido. Sin la palabra "read" (no mezclar inglés en el copy ES).
- **Dónde vive:** en la TOC, bajo "Table of Contents", en el lugar del viejo "2 min read" (que ya no existe: el selector lo dice). Nunca hay card: una card flotante competía con el case justo cuando se empieza a leer. Mobile (≤768px, sin TOC): el mismo control, flotante abajo a la derecha (`.is-floating`).
- **Selector:** small (26px de alto, ≥ 24px de WCAG 2.2 target size), ajustado al contenido; las dos opciones miden lo que la más ancha (`1fr` en `inline-grid`). **No se estira al ancho de la TOC**: el espacio libre a la derecha es intencional (si algún día se suma la voz leyendo el case, va ahí como botón ▶ aparte: es ortogonal a completo/esencial, no un tercer segmento). Riel `--surface`; la opción activa es **neutra y elevada** (`--surface-raised` + sombra), no acento: dentro de la TOC el violeta significa solo "dónde estás" (sección activa). `--surface-raised` existe porque en dark `--bg-card` es más oscuro que `--surface` y se leería como un hueco. Es un `radiogroup` (un tab stop, flechas para cambiar); el nombre de cada opción ("Full case" / "Essentials") queda para lectores de pantalla.
- **Explicación (ⓘ):** tooltip con eyebrow "Modo de lectura" + descripción con el incentivo. Hover o foco con teclado lo muestran; click/tap lo fija; se cierra con Escape (devuelve el foco), click afuera o al hacer scroll. **Crece desde la ⓘ** (scale 0.96 → 1 + fundido, 180ms; sale en 120ms, más corto: cerrar tiene que sentirse inmediato). En la TOC abre hacia abajo; flotante, hacia arriba. Sin animación con `prefers-reduced-motion`.
- **Spacing del encabezado de la TOC:** título → selector 8px; selector → divisor 12px, igual que divisor → primer item, así el divisor separa los dos grupos (el divisor lo pone `.reading-mode`, no el título).
- Al cambiar de modo, el lector queda en la sección en la que estaba.

---

## Componentes compartidos con blog-notes (una sola fuente)

notes.lenincuadra.com (repo `blog-notes`) usa este design system cargando archivos de **producción**: `styles/tokens.css`, `styles/header.css` y `styles/badge.css`. Regla: lo que se ve igual en los dos sitios se define **una vez acá** y el blog lo consume; el blog nunca copia un estilo ni redefine un token del portfolio.

- **Un componente compartido = un archivo propio en `styles/`** (no dentro de un archivo grande): así el blog carga solo lo que usa, sin arrastrar `.btn` ni el resto. `main.css` lo importa igual que a los demás. Para compartir uno nuevo: extraerlo a su archivo, importarlo en `main.css` y agregar el `<link>` en `blog-notes/src/components/BaseHead.astro`.
- **Tokens compartidos**: `--mark*` (resaltador), `--tint-*` (fondos de badges con tinte) y `--accent-3-ink` (verde para texto, como `--accent-ink` para el violeta). Los que dependen de `--bg` se redeclaran en el bloque dark (por `.preview-dark` del styleguide).
- **Badges** (`badge.css`): `.badge--ghost` (tags del hero, tiempo de lectura de los cases) y `.badge--violet` / `.badge--green` (los tags personal / practice del blog). El tiempo de lectura de los cases usa `.badge--ghost`; el viejo `.case-hero__tag` se eliminó.
- **Orden de deploy**: primero el portfolio, después el blog (el blog lee producción; si sale antes, referencia clases o tokens que todavía no existen). Renombrar o borrar algo compartido rompe el blog: buscar el uso en `blog-notes` antes.

---

### Checklist al agregar/migrar presentación a un case-v3

- [ ] ¿La decisión vale para todos los cases? → regla de template (clase / `#case-v3-content`), documentada acá. Si es un one-off, reconsiderar.
- [ ] Espaciados con **tokens existentes** de `tokens.css` (`--sp-1..6, 8, 10, 12, 16, 20, 24`). Nunca un `--sp-N` inventado: invalida la declaración entera en silencio.
- [ ] Media siempre sobre `--bg-card`, probado en **light y dark**.
- [ ] Sub-secciones con `heading` nivel 4, no `subheading`.
- [ ] El styleguide (`styleguide.html`) refleja el componente real (no duplicar estilos inline).
