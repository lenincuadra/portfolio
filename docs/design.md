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
2. **Subhead pegado al `h3` de sección** (`#case-v3-content h3 + .case-subhead`): `margin-top: var(--sp-6)`. El `h3` ya abrió la sección; el primer subhead va más cerca (no necesita la distancia completa de "después de media").
3. **Sección sin `label`** (`#case-v3-content section > h3:first-child`): `margin-top: 3rem`, el mismo aire que habría dado `.section__label`. Mantiene el ritmo entre secciones aunque una omita su eyebrow. *Escalable:* cualquier sección futura sin label queda bien sin tocar nada.

**Cómo modelar "dos sub-secciones dentro de una sección"** (ej. Result → *Quantitative* / *Qualitative*): cada grupo se abre con un `heading` (nivel 4 → `.case-subhead`), no con `subheading`. `subheading` está pensado para agrupar con el `body` siguiente (`subheading`+`body` → `<li><h4>+<p>`); usarlo para rotular una lista `steps` lo envuelve en un `<ul><li>` apretado y "amontona". `heading` da el bloque de sub-sección con su `margin-top: var(--sp-10)` y la lista respira debajo.

---

### Checklist al agregar/migrar presentación a un case-v3

- [ ] ¿La decisión vale para todos los cases? → regla de template (clase / `#case-v3-content`), documentada acá. Si es un one-off, reconsiderar.
- [ ] Espaciados con **tokens existentes** de `tokens.css` (`--sp-1..6, 8, 10, 12, 16, 20, 24`). Nunca un `--sp-N` inventado: invalida la declaración entera en silencio.
- [ ] Media siempre sobre `--bg-card`, probado en **light y dark**.
- [ ] Sub-secciones con `heading` nivel 4, no `subheading`.
- [ ] El styleguide (`styleguide.html`) refleja el componente real (no duplicar estilos inline).
