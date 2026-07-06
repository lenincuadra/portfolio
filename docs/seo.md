# SEO / GEO

Sistema para que buscadores (SEO) y modelos de IA (GEO) encuentren y entiendan el sitio, y para que **no se desincronice** cuando el contenido cambia. Base URL: `https://lenincuadra.com/` (dominio propio desde 2026-07-06; `lenincuadra.github.io/portfolio/` redirige con 301).

## El problema de fondo

Los cases se renderizan **client-side** (`case-v3.html?slug=X` lee `data/content.js` con JS). Eso divide a los lectores en dos:

- **Google** ejecuta JS: ve el contenido, el `document.title`, la meta description y el JSON-LD que `case-v3.html` inyecta en runtime. SEO clásico funciona.
- **Crawlers de IA** (GPTBot, ClaudeBot, PerplexityBot, etc.) **no ejecutan JS**: para ellos los cases son una página vacía. GEO se resuelve con `llms.txt`.

## Herramienta: `scripts/seo-build.js`

```bash
node scripts/seo-build.js          # regenera sitemap.xml, robots.txt y llms.txt
node scripts/seo-build.js --check  # falla si están desincronizados (lo corre el pre-commit hook)
```

Sin dependencias. Lee `data/content.js` (la misma fuente que renderiza el sitio) y la meta description de `index.html`, y genera en la raíz:

- **`sitemap.xml`** — URLs absolutas; replica el routing real de `js/app.js` (`template: "v3"` → `case-v3.html`, si no `case-v2.html`). Agregar/renombrar/migrar un case actualiza la sitemap con solo re-correr el script.
- **`robots.txt`** — allow general + puntero absoluto a la sitemap y a `llms.txt`.
- **`llms.txt`** — el resumen del sitio para modelos de IA: posicionamiento, contacto, y por case: título, link, `meta.description` y el **arco narrativo** (los `h3` de sus secciones unidos con `→`). Esto reaprovecha el principio del template ("la TOC es el resumen del caso", ver `CLAUDE.md`): si los `h3` están bien escritos, `llms.txt` cuenta cada caso completo sin JS. Escribir buenos `h3` ahora también es GEO.
- **`link-spec.json`** — el contrato para **cbuilder** (la app externa que genera los CVs con links trackeados): base URL, formato del código opaco, templates de links (`{base}go.html?ref={code}P&focus={focus}`) y perfiles de personalización disponibles (desde `data/profiles.js`). cbuilder lo fetchea al generar un CV → dominio nuevo o perfil nuevo no requieren tocar cbuilder. No lleva empresas (privacidad).

La salida es **determinística** (sin fechas): si el contenido no cambió, no hay diff. El pre-commit hook corre `--check` y bloquea el commit si hay drift; el fix es correr el script y commitear los archivos regenerados.

## Qué es estático y qué es runtime

| Pieza | Dónde | Quién la ve |
|---|---|---|
| Meta/OG/Twitter/JSON-LD del index | estático en `index.html` | todos |
| Canonical del index | estático en `index.html` | buscadores |
| Title/description/OG por case | runtime (`case-v3.html` desde `meta` en `content.js`) | Google (ejecuta JS) |
| JSON-LD `Article` por case | runtime (`case-v3.html`) | Google |
| `sitemap.xml` / `robots.txt` / `llms.txt` | generados por `seo-build.js` | buscadores + IA |

## Reglas al tocar contenido

1. **Todo case necesita `meta.title` y `meta.description`** en `content.js` (alimentan title, OG, JSON-LD y `llms.txt`).
2. Al **agregar, renombrar o migrar** un case: `node scripts/seo-build.js` y commitear lo regenerado (el hook avisa si te olvidás).
3. Si cambia el **dominio** (ej. dominio propio en vez de github.io): actualizar `BASE` en `seo-build.js`, el canonical/OG/JSON-LD de `index.html`, la URL del autor en `case-v3.html` y los `DESTINATIONS` de `go.html`; regenerar (la sitemap, `llms.txt` y `link-spec.json` salen solos, y cbuilder toma el dominio nuevo del spec sin cambios).
4. La descripción del sitio vive en el `<meta name="description">` de `index.html`; `llms.txt` la lee de ahí (no duplicarla en el script).

## Limitaciones conocidas

- **Previews de link por case** (Slack/WhatsApp/Twitter no ejecutan JS): muestran el OG genérico del template, no el del case. Resolverlo requiere prerender/páginas estáticas por case; pendiente si algún día duele.
- **`llms.txt` sale del contenido EN** (terminología de industria); el sitio bilingüe se menciona en el propio archivo.
- La adopción de `llms.txt` por los proveedores de IA es dispareja; el costo de mantenerlo acá es cero porque se genera solo.
