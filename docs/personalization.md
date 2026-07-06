# Personalización por link (descripción del feature)

Descripción técnica completa: qué hace, cómo se activa, dónde vive la lógica, y **el contrato para consumidores externos** (cbuilder). Es el documento de referencia para implementar integraciones: no hace falta leer el código del portfolio.

## 1. Qué ve el visitante

El index del portfolio se adapta a quién mira, **sin ocultar nada**:

| | Sin perfil (link pelado) | Con perfil activo |
|---|---|---|
| Sección **Featured Work** | **No existe** (oculta) | Aparece, con el case del perfil + sus screens |
| Label del Featured | — | `Featured Work · <label del perfil>` (ej. "For payment platforms") — señal visible de personalización |
| Grilla *Selected Work* | Los 6 cases en el orden default | Reordenada según el perfil (el resto baja, nunca desaparece) |
| Highlights del hero | 2 pruebas al azar (ponderadas) | Las 2 pruebas fijas del perfil |

Perfiles actuales: `payments`, `ai`, `conversion` (uno por industria objetivo, no por empresa).

## 2. Cómo se activa un perfil (precedencia)

1. `?focus=<id>` en la URL del index (ej. `lenincuadra.com/?focus=payments`).
2. `sessionStorage.portfolio_focus`: lo deja `go.html` cuando el link trackeado trae `&focus=` — así el index queda con URL limpia.
3. `?ref=` mapeado por `refToProfile` (hoy vacío a propósito: mapear empresas ahí las publicaría).
4. **Letra de perfil en links cortos**: `/r/<código>P<letra>` (ej. `/r/0705q4Pp`) — la letra es la **inicial del id del perfil** (`p`/`a`/`c`), el router del 404 la pasa como `focus=p` y el resolver la expande por prefijo único.

Sin match → `null` → el sitio se comporta exactamente como sin feature.

## 3. Dónde vive la lógica (para mantenimiento del portfolio)

- **`data/profiles.js`** — los datos de cada perfil (featured, order, proofs, label) + `resolveActiveProfile()` (el resolver compartido con la precedencia de arriba).
- **`js/app.js` (renderIndex)** — aplica featured/orden/label.
- **`hero.js`** — aplica las proofs preferidas.
- **`go.html`** — persiste `focus` y `ref` en sessionStorage antes de redirigir.
- **`404.html`** — router de links cortos `/r/`.
- **`scripts/case-check.js`** — valida perfiles (slugs/proofs reales, labels EN+ES, iniciales únicas).

## 4. El contrato para cbuilder (`link-spec.json`)

`https://lenincuadra.com/link-spec.json` — generado, nunca editado a mano. Los campos relevantes al feature:

```jsonc
{
  "profiles": {
    "payments": {
      "label": { "en": "For payment platforms", "es": "…" },
      "featured": "fintech-ecosystem",          // slug del case que queda destacado
      "order": ["fintech-ecosystem", "…"],       // orden COMPLETO de lectura (featured primero)
      "proofs": [                                 // las 2 métricas que fija el hero, con texto
        { "id": "fintech-ecosystem", "en": "launched Naranja X's…", "es": "…" }
      ]
    }
  },
  "focusLetters": { "payments": "p", "ai": "a", "conversion": "c" },
  "defaultOrder": ["no-handoff", "…"],            // orden sin perfil (y sin Featured)
  "cases": {                                       // índice bilingüe por slug
    "fintech-ecosystem": { "title": {en,es}, "description": {en,es}, "url": "…" }
  }
}
```

**Uso A — preview al elegir perfil**: al seleccionar el perfil en cbuilder, mostrar `label`, el case destacado (`cases[featured].title` + `description`) y las `proofs`. Eso ES lo que verá quien abra el link; no hay que simular nada más.

**Uso B — CV coherente con el link**: ordenar/destacar los cases del CV con `order` (el primero es el que el portfolio destaca; los textos salen de `cases[slug]` en el idioma del CV). Para un CV sin perfil: `defaultOrder` y sin destacado. Así CV y portfolio cuentan la misma historia en el mismo orden.

**Regla de oro**: cbuilder consume **datos, no lógica**. No replica el resolver ni decide qué destacar: lee el resultado ya decidido.

## 5. Cómo se mantiene todo unido (la sincronía)

El spec lo genera `scripts/seo-build.js` desde las mismas fuentes que renderizan el sitio (`data/profiles.js`, `data/content.js`, `cases.json`), y el pre-commit hook **bloquea cualquier commit** donde el spec no refleje esas fuentes. Es decir: es imposible publicar el sitio con un spec desactualizado.

Del lado de cbuilder, la única obligación es **fetchear el spec al momento de generar cada CV** (con cache de fallback). Con eso:

- Cambia el featured de un perfil acá → el próximo CV generado ya ordena distinto y muestra el preview nuevo.
- Aparece un perfil nuevo acá → aparece solo en el selector de cbuilder.
- Cambia un título de case o el dominio → cbuilder usa el nuevo.

Ningún cambio del portfolio requiere tocar código de cbuilder; ningún cambio de cbuilder afecta al portfolio.
