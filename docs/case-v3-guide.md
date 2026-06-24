# Cómo agregar un case study (template v3)

**Empezá acá.** Este es el proceso completo y autoritativo para crear (o migrar) un case con el template **v3**. Está derivado del renderer `cases/case-v3.html`, que es **la fuente de verdad** de qué se puede pintar: si un campo o `type` no está acá, no lo inventes — chequealo en el renderer.

Docs hermanos (este los referencia, no los repite):
- **Cómo escribir el contenido para que lea bien** (prosa, no "pared de bullets", sin em-dashes): `docs/case-v3-content-guide.md`.
- **Decisiones visuales / tokens / espaciado del template**: `docs/design.md`.
- **El principio de la TOC como resumen**: `CLAUDE.md` (sección Case studies).

> ⚠️ `CASE-STUDY-GUIDE.md` (raíz) y `content/case-schema.yml` son del flujo **v2** (obsoleto): un HTML por caso + YAML aplicado a mano. **No los sigas para v3.**

---

## El modelo (importante)

- Un case v3 **no es un archivo HTML**. Es **un objeto JS** que se agrega a `data/content.js`. El renderer único `cases/case-v3.html` lo pinta. El routing está en `js/app.js`: `"template": "v3"` → `case-v3`, si no → `case-v2`.
- El contenido es **bilingüe por duplicación**: el **mismo objeto** existe dos veces, en `PORTFOLIO_DATA.en.cases` y en `PORTFOLIO_DATA.es.cases`, **alineado por índice**. El renderer combina ambos con `t(en, es)`.
- Deep link a un caso: `cases/case-v3.html?slug=<slug>`.

---

## 1. Estructura del objeto del caso

Va en los arrays `cases` de **`en` y `es`** (mismo `slug` en ambos):

```jsonc
{
  "slug": "mi-caso",            // requerido. Matchea ?slug= y los links de nav.
  "template": "v3",             // requerido para rutear a case-v3.
  "featured": false,            // lo usan el index/cards y hero.js, NO la página del caso.
  "images": {
    "cover": "assets/images/mi-caso/cover.webp"  // card del index + OG. La página v3 NO usa imagen de hero.
  },
  "card": { "tags": ["..."], "title": "...", "excerpt": "..." },  // grid del index.
  "meta": { "title": "... · Lenin Cuadra", "description": "..." }, // <title> + OG + meta description.
  "hero": { "title": "...", "subtitle": "..." },                  // H1 + H2 de la página (SOLO texto).
  "sections": [ /* ver §2 */ ],
  "nav": {
    "prev": { "slug": "caso-anterior", "title": "..." },
    "next": { "slug": "caso-siguiente", "title": "..." }
  }
}
```

Notas fieles al renderer:
- **`quickScan` no se usa en v3.** El renderer no lo pinta (es vestigial de v2). Podés omitirlo.
- El **hero de la página es solo texto** (`hero.title` → `<h1>`, `hero.subtitle` → `<h2>`). No hay imagen de portada en la página; `images.cover` es para el grid y el OG.
- El **reading time** se calcula solo (a partir del texto de `sections`).

---

## 2. Secciones (`sections[]`)

```jsonc
{
  "id": "section-problem",                 // requerido. Anchor único (sin espacios).
  "tocLabel": "Problem",                   // título corto en la TOC.
  "label": "Problem",                      // eyebrow (.section__label) arriba del h3.
  "h3": "Friction was hiding revenue.",    // la AFIRMACIÓN narrativa; subtítulo en la TOC.
  "content": [ /* bloques tipados, ver §3 */ ]
}
```

El renderer lee **solo** `id`, `tocLabel`, `label`, `h3`, `content`. (No usa `layout` ni un `heading` a nivel sección — eso era v2.)

**La TOC es el resumen del caso.** Muestra, por sección, `label` (título) + `h3` (subtítulo). Regla: leer solo los `h3` en orden tiene que alcanzar para entender el caso entero. Cada `h3` es una **afirmación declarativa que hace avanzar la historia**, no un rótulo que repita el `label`. Referencia: `no-handoff`. (Detalle en `CLAUDE.md`.)

- Toda sección debería tener **`tocLabel` + `h3`**. La única que puede omitirlos es la sección **lead/overview**.
- Si una sección omite `label`, su `h3` igual recibe el espaciado correcto (regla de template; ver `docs/design.md`).

---

## 3. Tipos de bloque (`content[]`) — referencia

Cada item es `{ "type": "...", ...campos }`. Lista exacta de lo que el renderer sabe pintar:

| `type` | Campos | Render |
|---|---|---|
| `body` | `text` | `<p>` de prosa (lleva la narrativa). |
| `heading` | `text`, `level?` (4 def · 5) | Sub-sección dentro de una sección. **4 → `.case-subhead`** (usalo para abrir sub-temas, ej. "Quantitative"). **5 → `.case-subcta`** (instrucción chica). |
| `subheading` | `text` | Se **agrupa con el `body` siguiente** en una lista `<h4>+<p>`. Para rotular una lista/`steps`, usá **`heading` nivel 4**, no `subheading` (queda apretado; ver `design.md`). |
| `steps` | `variant`: `bullet`\|`numbered`, `items[]` | Lista. `bullet` con `"label — desc"` → `<h4>`+`<p>`; sin `" — "` → línea simple. `numbered` → lista ordenada. Solo para **listas reales** (enumeraciones), no para trocear prosa. |
| `quote` | `text`, `attr?` | `<blockquote>` + `<cite>`. |
| `image` | `src`, `alt`, `ratio?`, `loading?`, `canvas?`, `device?`, `caption?` | Ver detalle abajo. |
| `video` | `src` (.webm), `alt`, `controls?`, `ratio?`, `size?`, `poster?`, `label?`, `caption?`, `canvas?`, `themed?` | autoplay/loop/muted. Abre en lightbox. El `.mp4` hermano se deriva del `.webm`. |
| `table` | `headers[]`, `rows[][]`, `caption?`, `variant?`: `metrics` | Divisores verticales entre columnas + rule horizontal en los labels. `metrics` alinea la última columna a la derecha (mono). |
| `compare` | `left{src,label,alt}`, `right{src,label,alt}`, `caption?` | 2 paneles etiquetados lado a lado. |
| `slider` | `before{src,label,alt}`, `after{src,label,alt}`, `caption?` | Drag-to-compare (wipe). |
| `carousel` | `images[]{src,alt}`, `interval?` (4000), `caption?` | Auto-rotación con dots/flechas. |
| `callout` | `text`, `title?`, `variant?` (note) | Bloque de alerta/nota. |
| `row` | `items[]` (bloques cualquiera) | 2 columnas en desktop, apilado en mobile. |
| `gallery` | `images[]{src,alt}` | Grid simple de imágenes. |
| `link` | `href`, `text` | Enlace inline (`.case-link`). |

### `image` — detalle
- `ratio`: `wide` (16:9, default) · `square` · `portrait` (3:4) · `auto` (abraza la imagen, sin letterbox).
- `loading`: `lazy` (default) · `eager`.
- `canvas: "dark"`: escenario oscuro (para media de bajo contraste); el contenedor matchea en ambos temas.
- `device: "phone"`: **mockup mobile en bezel de teléfono**, centrado en escenario full-width que sigue el theme (el bezel le da el borde, así un mockup blanco lee como pantalla). Admite `caption`.
- Sin `src` → placeholder on-brand (mantiene el slot, sin layout shift).

### `video` — detalle
- `controls: false` oculta los controles (queda autoplay/loop/muted limpio).
- `ratio` igual que image; `size: "half"` lo muestra a 50% centrado; `poster` = imagen de carga.
- `label` + `caption` se unen con `" — "` (eso es sintaxis del renderer, no copy).
- Subí **`.webm` y `.mp4`** con el mismo nombre; en el `src` poné el `.webm`.
- `themed: true` → fondo **theme-aware**: 2 variantes horneadas (`<base>-light` / `<base>-dark`, stage = `--bg-card` de cada tema); el `src` apunta al `-dark.webm` y el JS las intercambia por tema. Para un crossfade de imágenes que siga light/dark (alternativa simple: `carousel`). Detalle: `docs/design.md`.

Todos los gráficos (image/video/compare/slider/carousel/`device:"phone"`) abren en el **lightbox-galería** (label + h3 de su sección, navegable con flechas).

---

## 4. Bilingüe (EN/ES) — alineación por índice

- El objeto va **dos veces**: en `en.cases` y `es.cases`, **mismo `slug`**.
- **Misma forma en ambos**: mismo nº de `sections`, mismo nº de items por sección, **mismos `type` en el mismo orden**. Solo cambian los textos.
- En ES traducís **solo texto**: `hero.title/subtitle`, `card.*`, `meta.*`, y por bloque `text`/`h3`/`label`/`tocLabel`/`caption`/`alt`/`items`/`headers`/`rows`. Los campos no-texto (`src`, `ratio`, `variant`, `device`, `canvas`, `level`...) se toman del EN.

Romper la alineación por índice es el error más común y el renderer no lo avisa: **validalo** (§6).

---

## 5. Assets

- Carpeta `assets/images/<slug>/`. Rutas en `content.js` **relativas a la raíz** (`assets/...`), sin `../` (el renderer agrega el prefijo).
- Video: **`.webm` + `.mp4`** (mismo nombre). El renderer referencia el `.webm` y deriva el `.mp4` como fallback.
- Mobile: `device: "phone"` (bezel) para un mockup.
- **Nunca hornear un fondo de un solo tema** dentro de un video/imagen: el fondo de media es theme-aware (`--bg-card`). **Para un crossfade theme-aware entre imágenes** usá el `carousel` (simple) o un **video `themed`** (`"themed": true`: 2 variantes `-light`/`-dark` que el JS intercambia por tema). Convención de nombres y excepción (`canvas:"dark"`): `docs/design.md`.
- Convenciones de tamaño/formato e ideas de naming: `CASE-STUDY-GUIDE.md` §Imágenes sigue valiendo (es lo único de ese doc que no es v2-específico).

---

## 6. Validación sin navegador

Antes de dar por listo, corré este chequeo (tipos soportados, alineación EN/ES, assets existentes):

```bash
node -e '
const fs=require("fs");
eval(fs.readFileSync("data/content.js","utf8")+"\n;globalThis.__D=PORTFOLIO_DATA;");
const D=globalThis.__D, KNOWN=new Set(["body","quote","steps","subheading","image","video","compare","callout","carousel","slider","heading","row","gallery","link","table"]);
const ex=p=>/^https?:/.test(p)||fs.existsSync(p.split("?")[0]);
const srcs=(it,a)=>{if(!it||typeof it!=="object")return;["src","poster"].forEach(k=>it[k]&&a.push(it[k]));["left","right","before","after"].forEach(k=>it[k]?.src&&a.push(it[k].src));(it.images||[]).forEach(m=>m?.src&&a.push(m.src));(it.items||[]).forEach(s=>typeof s==="object"&&srcs(s,a));};
const en=D.en.cases, es=D.es.cases; let bad=0;
for(const c of en.filter(c=>c.template==="v3")){
  const e=es.find(x=>x.slug===c.slug), T="["+c.slug+"] ";
  if(!e){console.log(T+"falta en ES");bad++;continue;}
  if((c.sections||[]).length!==(e.sections||[]).length){console.log(T+"#secciones EN!=ES");bad++;}
  (c.sections||[]).forEach((s,i)=>{const se=(e.sections||[])[i]||{},cc=s.content||[],ce=se.content||[];
    if(cc.length!==ce.length){console.log(T+"sec["+i+"] #items EN!=ES");bad++;}
    cc.forEach((it,j)=>{if(!KNOWN.has(it.type)){console.log(T+"sec["+i+"]["+j+"] type? "+it.type);bad++;}
      if(ce[j]&&ce[j].type!==it.type){console.log(T+"sec["+i+"]["+j+"] type EN!=ES");bad++;}});});
  const a=[];(c.sections||[]).forEach(s=>(s.content||[]).forEach(it=>srcs(it,a)));c.images?.cover&&a.push(c.images.cover);
  for(const s of a){if(!ex(s)){console.log(T+"asset falta: "+s);bad++;}if(/\.webm$/.test(s)&&!ex(s.replace(/\.webm$/,".mp4")))console.log(T+"⚠ falta mp4: "+s.replace(/\.webm$/,".mp4"));}
}
console.log("PROBLEMAS:",bad);
'
```

Debe imprimir `PROBLEMAS: 0`.

### Checklist final
- [ ] Objeto en `en.cases` **y** `es.cases`, mismo `slug`, `template:"v3"`.
- [ ] EN/ES alineados por índice (nº secciones, nº items, tipos en orden).
- [ ] Cada sección: `id` único + `tocLabel` + `h3` declarativo. **Leés solo los h3 y entendés el caso.**
- [ ] Todos los `type` existen en el renderer; campos correctos.
- [ ] Assets existen (img/video + `.mp4` hermano, poster, cover).
- [ ] `nav.prev/next` apuntan a slugs reales.
- [ ] Prosa lleva la narrativa; bullets solo para listas reales (`docs/case-v3-content-guide.md`).
- [ ] **Sin em-dashes** en copy (excepto el `" — "` de `steps`/captions, que es sintaxis).
- [ ] Componente nuevo → documentado en el styleguide (`case-components`).
- [ ] Validación estática → `PROBLEMAS: 0`.
- [ ] Probado claro/oscuro, EN/ES, mobile (< 600px).

---

## 7. Migrar un caso v2 → v3

1. Tomar el contenido del HTML/YAML viejo y armarlo como **objeto en `data/content.js`** (en `en` y `es`), con `template:"v3"`.
2. Reescribir los headings de sección como **`h3` declarativos** (para que la TOC se lea como resumen) y la prosa por **beats** (claim → cómo → prueba), siguiendo `docs/case-v3-content-guide.md`.
3. Mapear los bloques viejos a los `type` de §3 (ej. `process-steps` → `steps`/`heading`; imágenes sueltas → `image`/`compare`/`carousel`).
4. El HTML viejo del caso (`cases/case-<slug>.html`) queda sin usar (se puede borrar/archivar).
5. Correr la validación de §6.
