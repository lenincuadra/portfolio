---
model: claude-haiku-4-5-20251001
---

# /changelog — Actualizar CHANGELOG.md

Cuando el usuario ejecuta `/changelog`, seguí estos pasos exactamente:

## 1. Leer el estado actual

- Leer `CHANGELOG.md` para identificar la última versión publicada y su fecha
- Extraer el hash del commit asociado a esa versión (si no hay referencia explícita, buscar el commit más cercano a esa fecha con `git log --oneline --after="YYYY-MM-DD"`)

## 2. Obtener los commits pendientes

```bash
git log <ultimo-hash>..HEAD --oneline
```

Si no hay commits pendientes, informar al usuario y terminar.

## 3. Analizar cada commit

Para cada commit sin documentar, hacer `git diff <parent>..<hash> --stat` y si es necesario `git show <hash>` para entender qué cambió realmente — no confiar solo en el mensaje del commit.

## 4. Determinar la versión siguiente

Usar semver basado en el impacto de los cambios acumulados:
- **patch (x.x.+1)**: fixes, copy, ajustes menores de estilo
- **minor (x.+1.0)**: features nuevas, componentes, refactors significativos
- **major (+1.0.0)**: cambios de arquitectura, breaking changes

## 5. Escribir la entrada

Formato estricto Keep a Changelog:

```markdown
## [X.Y.Z] — YYYY-MM-DD

### Added
- **Nombre del feature** — descripción concisa de qué se agregó y por qué importa

### Changed
- **Qué cambió** — descripción del antes/después si es relevante

### Fixed
- **Qué se reparó** — bug o comportamiento incorrecto corregido

### Removed
- **Qué se eliminó** — y por qué
```

Reglas de estilo:
- Solo incluir secciones que tengan contenido (omitir `### Fixed` si no hay fixes)
- Cada ítem empieza con `**Nombre en negrita**` seguido de em dash y descripción
- Descripción en español, técnica pero legible
- No listar cambios triviales (`.DS_Store`, bumps de versión internos, reformateo)
- Agrupar commits relacionados en un solo ítem cuando tienen el mismo propósito

## 6. Insertar la entrada

Insertar la nueva versión entre `## [Unreleased]` y la versión anterior en `CHANGELOG.md`. No tocar las versiones existentes.

## 7. Confirmar con el usuario

Mostrar la entrada generada y preguntar si hay algo que ajustar antes de guardar. Si el usuario aprueba, guardar con `Edit`.
