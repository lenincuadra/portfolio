# Mixpanel: catálogo de eventos

Referencia de todo lo que `js/analytics.js` manda a Mixpanel (proyecto `4083276`). Setup, reglas y cómo probar: `docs/analytics.md`. Si agregás o cambiás un evento, actualizá `EVENTS` en `js/analytics.js`, esta tabla y la de `docs/analytics.md`.

## Resumen

| Evento | Descripción | Páginas |
|---|---|---|
| `Page Viewed` | El visitante cargó una página del sitio. | index, case, 404 |
| `Case Clicked` | Hizo click en un link a un case. | index, case |
| `Section Reached` | Llegó a leer una sección de un case. | case |
| `Case Finished` | Llegó al CTA final de un case (lo leyó entero). | case |
| `Contact Clicked` | Hizo click en un canal de contacto. | todas |
| `Reading Mode Changed` | Cambió el modo de lectura de un case. | case |
| `Language Changed` | Cambió el idioma EN/ES. | todas |

Además, con session replay activo, Mixpanel graba la sesión. No es un evento propio: la grabación queda asociada al visitante y se abre desde Session Replay o desde cualquiera de sus eventos.

## Super-properties

Viajan en **todos** los eventos, sin que cada evento las mande.

| Propiedad | Tipo | Descripción | Origen |
|---|---|---|---|
| `ref` | string | Código de tracking opaco de la postulación (ej. `0628r4`), sin el sufijo P/L/G del link. Vacío si la visita es orgánica. | `?ref=` de la URL o `sessionStorage.portfolio_ref` (lo deja `go.html`) |
| `first_ref` | string | El primer `ref` visto en ese navegador. No se pisa en visitas posteriores. | `register_once` |
| `focus` | string | Perfil de personalización con el que se vio el sitio. | `?focus=` o `sessionStorage.portfolio_focus` |
| `lang` | `en` \| `es` | Idioma activo. Se actualiza al cambiarlo. | `localStorage.portfolio-lang` (default `en`) |

Para saber qué empresa es un `ref`, cruzalo a mano con `tracking-registry.md`. Nunca se manda el nombre de la empresa.

## Eventos

### `Page Viewed`

Se dispara una vez al cargar la página. Es el punto de entrada de cualquier funnel.

| Propiedad | Tipo | Valores | Descripción |
|---|---|---|---|
| `page` | string | `index`, `case`, `404` | Qué tipo de página se cargó. |
| `slug` | string | slug del case | Solo cuando `page = case`: qué case se abrió. |

### `Case Clicked`

Click en cualquier link que lleve a un case (`?slug=`) distinto del actual.

| Propiedad | Tipo | Valores | Descripción |
|---|---|---|---|
| `slug` | string | slug del case | El case de destino. |
| `source` | string | `grid`, `hero_proof`, `case_nav` | Desde dónde: la grilla de cases del index, el link de prueba del hero, o la navegación anterior/siguiente dentro de un case. |
| `position` | number | 1, 2, 3… | Solo con `source = grid`: posición del case en la grilla. Sirve para ver si clickean el primero por estar primero. |

### `Section Reached`

Una sección del case entra al 40% superior de la pantalla. Se manda una sola vez por sección y por carga de página. No incluye la sección final de CTA, que tiene su propio evento.

| Propiedad | Tipo | Valores | Descripción |
|---|---|---|---|
| `slug` | string | slug del case | El case que se está leyendo. |
| `section` | string | id de la sección | Identificador técnico de la sección. |
| `section_label` | string | texto | Nombre de la sección en inglés (el de la TOC), legible en los reportes. |
| `section_index` | number | 1…N | Orden de la sección dentro del case. |
| `section_count` | number | N | Cantidad total de secciones del case. `section_index / section_count` = qué tan lejos llegó. |

### `Case Finished`

La sección de CTA del final del case (`#cta`) entra en pantalla. Equivale a "leyó el case hasta el final".

| Propiedad | Tipo | Valores | Descripción |
|---|---|---|---|
| `slug` | string | slug del case | El case terminado. |

### `Contact Clicked`

Click en un canal de contacto. Es la conversión principal del sitio.

| Propiedad | Tipo | Valores | Descripción |
|---|---|---|---|
| `channel` | string | `email`, `linkedin`, `resume` | Qué canal: botón o link de email (`mailto:` o id con "email"), LinkedIn, o el CV (PDF). |
| `location` | string | `header`, `hero`, `contact`, `footer`, `case_cta`, o el tipo de página | Dónde estaba el botón. Si no cae en ninguna zona conocida, se usa el tipo de página (`index`, `case`, `404`). |

### `Reading Mode Changed`

Cambio del modo de lectura en la TOC del case.

| Propiedad | Tipo | Valores | Descripción |
|---|---|---|---|
| `slug` | string | slug del case | El case donde cambió el modo. |
| `mode` | string | valor de `data-mode` (completo / lectura esencial) | El modo elegido. |

### `Language Changed`

Click en el toggle de idioma, solo si cambia a un idioma distinto del activo. También actualiza la super-property `lang`.

| Propiedad | Tipo | Valores | Descripción |
|---|---|---|---|
| `to` | string | `en`, `es` | El idioma nuevo. |

## Qué no se registra

- Visitas desde `localhost` o `127.0.0.1` (para probar en local, usar `lvh.me`).
- Bots, crawlers y navegadores headless.
- Tus visitas: cualquier navegador marcado con `?ref=me`. Se desmarca con `?ref=notme`.
- Visitantes con adblocker que bloquee Mixpanel (el sitio funciona igual).
- Autocapture: Mixpanel no registra clicks sueltos por su cuenta, solo lo de esta lista.

## Reportes útiles

- **Funnel principal:** `Page Viewed (page = index)` → `Case Clicked` → `Case Finished` → `Contact Clicked`, desglosado por `ref` o `focus`.
- **¿Abrieron el case destacado?** `Case Clicked` por `slug`, filtrado por `focus`, comparado con el `featured` del perfil en `data/profiles.js`.
- **Hasta dónde leen:** `Section Reached` de un `slug`, desglosado por `section_index`.
- **Postulación puntual:** filtrar todo por `ref = <código>` y abrir la grabación de esa sesión.
