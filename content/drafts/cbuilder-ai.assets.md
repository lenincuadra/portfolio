# Assets: cbuilder-ai

> Checklist de assets del case (plantilla: `content/new/_ASSETS_TEMPLATE.md`). Fuente única de la lista.
> Estados: `[ ]` pendiente · `[~]` temporal · `[x]` final.
> Gate: `case-publish.js` no publica mientras quede algún `[ ]` o `[~]`.
>
> Hoy los 4 son PLACEHOLDERS SVG (se ven en preview y pasan case-check).

## Cómo exportar

- Fuente: cbuilder corriendo en localhost (screenshots) y el ASCII del pipeline en `content/new/case-study-ai-feature.md`.
- Formato: PNG 2x → WebP. Cambiar la extensión en el `src` (.svg → .webp) en EN y ES.
- Destino: `assets/images/cbuilder-ai/`.

## Assets

- [~] `cover.webp` · CARD del index + OG (1200x630)
  - Debe mostrar: el AiContextPanel generando una carta.
  - Hoy: `cover.svg` placeholder.

- [~] `context-pack.webp` · GROUNDING (s-grounding)
  - Debe mostrar: compartir contexto + botón "Detectar la JD".
  - Notas: decidir si se gana su lugar. Hoy: placeholder SVG.

- [~] `draft-editable.webp` · HITL (s-hitl)
  - Debe mostrar: el borrador generado y editable.
  - Hoy: placeholder SVG.

- [~] `pipeline.webp` · ARCHITECTURE (s-architecture)
  - Debe mostrar: diagrama del pipeline (base: ASCII del .md).
  - Notas: decidir si se gana su lugar. Hoy: placeholder SVG.

## Limpieza antes de publicar

- [ ] Borrados los 4 SVG placeholder de `assets/images/cbuilder-ai/`.
- [ ] `src`/`alt` actualizados en EN y ES del draft.
