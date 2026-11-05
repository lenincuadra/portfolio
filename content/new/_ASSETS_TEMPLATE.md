# Assets: <slug>

> Checklist de assets del case. Copiar a `content/drafts/<slug>.assets.md` al arrancar el case
> (junto con la bitácora, antes de escribir el draft). Es la **fuente única** de la lista de assets:
> el draft `.js` no la repite.
>
> Estados: `[ ]` pendiente · `[~]` temporal (PNG 1x, placeholder SVG, export provisorio) · `[x]` final.
> Gate: `case-publish.js` no publica mientras quede algún `[ ]` o `[~]`. `case-check` avisa si el
> draft no tiene este archivo.

## Cómo exportar

- Fuente: [Figma file key / página / carpeta de capturas]
- Formato: PNG 2x → WebP (`sips -s format webp <archivo>.png --out <nombre>.webp`). Video: `.webm` + `.mp4` (mismo nombre) + poster.
- Destino: `assets/images/<slug>/`, nombre semántico (minúsculas, guiones, sin hashes ni números de paso).
- [Reglas propias del case: device phone → frames mobile, sin datos reales de personas, etc.]

## Assets

Una entrada por asset, en el orden en que aparecen en el case. La prueba de cada uno es la
afirmación del `h3` que soporta: si no prueba nada, no va.

- [ ] `cover.webp` · CARD del index + OG (1200x630)
  - Muestra: el artefacto principal en su estado más acabado (no el loading state, no el "antes").
  - Fuente: [frame / captura / lo compone Claude]

- [ ] `<nombre>.webp` · <SECCIÓN> · <qué afirmación prueba>
  - Fuente: [link al frame o ruta de la captura]
  - Debe mostrar: [qué se tiene que ver, concreto]
  - Notas: [par con otro asset (row), caption, ratio, device, dudas a confirmar]

## Limpieza antes de publicar

- [ ] Borrados los placeholders y temporales reemplazados (no quedan en `assets/images/<slug>/`).
- [ ] `src`/`alt` actualizados en EN y ES del draft.
