# Analytics (Mixpanel)

`js/analytics.js` mide el comportamiento **después** de aterrizar: qué case abre el visitante, hasta dónde lee y si contacta. Complementa a `tracker.js`/`go.html` (EmailJS = aviso de la visita en el momento), no los reemplaza. Contexto y motivación: v4 de `private/spec-targeted-links.md`.

Cargado con `defer` en `index.html`, `cases/case-v3.html` y `404.html`.

- **Cuenta**: `leninxperience@gmail.com` (login con Google), org "Lenin Cuadra", plan gratis (1M eventos/mes).
- **Proyecto**: id `4083276`, data center **US** (no se puede cambiar después). Panel: https://mixpanel.com/project/4083276
- **Token**: `TOKEN` en `js/analytics.js`. Es público por diseño (viaja al navegador, igual que la key de EmailJS).
- **Librería**: `mixpanel-browser@2.65.0/dist/mixpanel.min.js` por jsDelivr (~77 KB, sin grabador de sesiones). Ese build espera el stub del snippet oficial (`__SV` + `_i`), que arma el script; la UMD pesa ~310 KB porque trae el grabador.

## Reglas

- **Solo el ref opaco**, nunca el nombre de una empresa (mismo principio que `link-spec.json`). El cruce código → empresa se hace a mano con `tracking-registry.md`.
- **Mismas guardas que `tracker.js`**: sin localhost, sin bots/headless (`navigator.webdriver` + UA).
- **Visitas propias**: `?ref=me` (en el index o vía `go.html`) marca el navegador como propio en `localStorage.portfolio_self`, para siempre. `?ref=notme` lo desmarca.
- **No toca el DOM ni los handlers existentes**: delegación de clicks en captura + `IntersectionObserver`. Si un adblocker bloquea Mixpanel, el sitio funciona igual.
- Sin autocapture ni session replay (Hotjar ya graba sesiones).

## Super-properties (viajan en todos los eventos)

| Propiedad | Origen |
|---|---|
| `ref` | `?ref=` de la URL (sin el sufijo P/L/G) o `sessionStorage.portfolio_ref` que deja `go.html` |
| `first_ref` | el primer `ref` visto en ese navegador (`register_once`) |
| `focus` | perfil de personalización (`?focus=` o `sessionStorage.portfolio_focus`) |
| `lang` | idioma activo (se actualiza con el toggle) |

## Plan de eventos

| Evento | Propiedades | Cuándo |
|---|---|---|
| `Page Viewed` | `page` (index/case/404), `slug` | al cargar |
| `Case Clicked` | `slug`, `source` (grid/hero_proof/case_nav), `position` (en la grilla) | click a un case |
| `Section Reached` | `slug`, `section`, `section_label`, `section_index`, `section_count` | la sección entra al 40% superior del viewport (una vez por carga) |
| `Case Finished` | `slug` | llega al CTA final del case |
| `Contact Clicked` | `channel` (email/linkedin/resume), `location` (header/hero/contact/footer/case_cta) | click en un canal de contacto |
| `Reading Mode Changed` | `slug`, `mode` | cambio de modo de lectura en case-v3 |
| `Language Changed` | `to` | toggle EN/ES |

Agregar un evento = sumarlo a `EVENTS` en `js/analytics.js` y a esta tabla.

## Reportes útiles

- **Funnel** `Page Viewed (index)` → `Case Clicked` → `Case Finished` → `Contact Clicked`, desglosado por `focus` o `ref`.
- **¿El destacado fue el que abrieron?** `Case Clicked` por `slug`, filtrado por `focus`, comparado con el `featured` del perfil en `data/profiles.js`.
- **Profundidad de lectura**: `Section Reached` por `section_index` para un `slug`.

## Probarlo en local

Las guardas bloquean `localhost`; usar `lvh.me` (resuelve a 127.0.0.1): `python3 -m http.server 8765` y abrir `http://lvh.me:8765/?ref=qa-test`. Ojo: los eventos llegan al proyecto real, así que usar siempre `ref=qa-test` y filtrarlo en los reportes. El `IntersectionObserver` no corre con la pestaña oculta (en un test automatizado, usar un navegador headless con viewport real).

## Pendientes conocidos

- Adblockers bloquean el envío a `api-js.mixpanel.com` (y a veces la librería): se pierde una parte del tráfico (mitigable con un proxy en Cloudflare si hace falta).
- Consentimiento UE: Mixpanel guarda un id en `localStorage`; hoy no hay banner.
