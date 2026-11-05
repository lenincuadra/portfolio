# Assets: funnel-target

> Checklist de assets del case (plantilla: `content/new/_ASSETS_TEMPLATE.md`). Fuente única de la lista.
> Estados: `[ ]` pendiente · `[~]` temporal · `[x]` final.
> Gate: `case-publish.js` no publica mientras quede algún `[ ]` o `[~]`.
>
> Ojo: los 3 videos del playground (A, B, C) están en la rama `case-v3-sticky-section` (commit 78947b8)
> y llegan a `main` con su merge. En `main` el draft todavía apunta a las imágenes provisorias.

## Cómo exportar

- Fuente: playground `/dev/animations` de cbuilder (localhost).
- Video: `.webm` + `.mp4` (mismo nombre) + poster si hace falta. Imagen: PNG → WebP (`cwebp` o `sips`).
- Destino: `assets/images/funnel-target/`.

## Assets

- [~] `cover.webp` · CARD del index + OG (1200x630)
  - Muestra: la diana con las flechas ya pintadas por color de etapa (el artefacto en su estado más acabado).
  - Fuente: captura dedicada del playground, **sin el chrome del toolbar**.
  - Hoy: `cover.png` temporal (con chrome). Convertir a .webp y actualizar `images.cover` en EN y ES.

- [x] `diana-empty.webm` · INSIGHT · la diana es el embudo: cada anillo, una etapa
  - Fuente: video A, playground con `count=0`. Crop mitad izquierda (sin sliders), 2-3s, loop.

- [x] `paint-loop.webm` · COLOR · las flechas aterrizan en gris y se pintan a la vez por etapa
  - Fuente: video B. Crop solo la diana, ~1-2s loopeable.

- [x] `funnel-reveal.webm` + `funnel-reveal-poster.png` · RESULT · el reveal completo hasta la tabla real

- [x] `playground-controls.webm` · THE SYSTEM · la animación corriendo con el panel de sliders
  - Fuente: video C, sin crop, 5-8s.

- [x] (sin media) · SCALABILITY · no necesita asset.

## Limpieza antes de publicar

- [ ] Borradas las imágenes provisorias que reemplazaron los videos (`funnel-legend.png`, `color-rings.png`) y `cover.png` cuando esté el `.webp`.
- [ ] `src`/`alt` actualizados en EN y ES del draft.
