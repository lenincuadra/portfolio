# Portfolio — instrucciones para Claude

## Styleguide
El styleguide (`styleguide.html`) debe mostrar siempre los componentes reales del proyecto.
- Las clases, tokens y estilos que se demuestran en el styleguide deben coincidir exactamente con los que están definidos en los archivos CSS (`styles/`).
- Si hay discrepancia entre el styleguide y el CSS real, corregir el styleguide para que refleje lo que existe, no al revés.
- Nunca duplicar estilos en el `<style>` inline del styleguide si ya están definidos en los archivos CSS.

## Sistema de tags del hero (`index.html`)

Los tags y la descripción del hero se generan automáticamente desde los datos de los cases (`data/content.js`). No editar manualmente.

### Cómo funciona el scoring

Cada case tiene un campo opcional `heroTagWeight` (default `1`). Sus tags se suman al score global multiplicados por ese peso:

| Caso | `heroTagWeight` | Efecto |
|---|---|---|
| No Handoff (AI) | `3` | Tags de IA suben al top |
| Otros cases | `1` (default) | Contribución estándar |

Tags excluidos del hero se definen en `home.hero.tagExclude` (en `data/content.js`). Usar para tags de industria/vertical (Fintech, Telecom, E-commerce, etc.) que no deben aparecer en el hero.

### Resultado actual (top 4 por score)

| Tag | Score | Fuente |
|---|---|---|
| Claude Code | 3 | No Handoff |
| Figma MCP | 3 | No Handoff |
| Design-to-Code | 3 | No Handoff |
| Product Architecture | 1 | Naranja X |

### Sistema de outcomes (descripción hero)

La descripción se construye automáticamente extrayendo outcomes de los cases y ordenándolos por `baseImpact × heroTagWeight`. Tipos detectados con su impacto base:

| Tipo | `baseImpact` | Qué detecta |
|---|---|---|
| `metric` | 5 | Porcentajes (`221%`) en títulos o excerpts |
| `capability` | 4 | Número de capacidades (`4 capabilities`) |
| `zero_to_one` | 3 | "zero-to-one" o "first cohesive" en títulos/excerpts |
| `speed` | 2 | "code in N days" en excerpt |
| `structural` | 1 | "fragmented → coherent" o "coherent vN" |

**Score final = `baseImpact × heroTagWeight`**. Ejemplo con datos actuales:

| Outcome | baseImpact | heroTagWeight | Score |
|---|---|---|---|
| unlocking 4 new design capabilities | 4 | 3 (No Handoff) | **12** |
| shipping code in 2 days | 2 | 3 (No Handoff) | **6** |
| driving 221% revenue growth | 5 | 1 (Montironi) | **5** |
| building zero-to-one ecosystems | 3 | 1 (Naranja X) | **3** |
| refactoring platforms for clarity | 1 | 1 (Telecom) | **1** |

Los outcomes se dividen en dos grupos para que quede claro que vienen de proyectos distintos:
- **"from" group**: outcomes de cases con `heroTagWeight > 1` (AI/boosted)
- **"to" group**: outcomes de cases cliente (`heroTagWeight ≤ 1`)

Resultado → descripción: *"I use Claude Code and Figma MCP to design product systems — from unlocking 4 new design capabilities and shipping code in 2 days, to building zero-to-one ecosystems and driving 221% revenue growth."*

### Cómo actualizar

- **Agregar un case de IA**: añadir `"heroTagWeight": 3` al case en `data/content.js`. Sus outcomes y tags suben automáticamente.
- **Excluir un tag del hero**: añadirlo al array `home.hero.tagExclude`.
- **Cambiar prioridad de tags/outcomes**: ajustar el `heroTagWeight` del case correspondiente.
- **Agregar un tipo de outcome nuevo**: añadir un extractor en `buildHeroSummary` en `js/app.js` con su `type`, `baseImpact`, y función `match(text)`.
