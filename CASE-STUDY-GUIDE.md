# Cómo agregar un nuevo case study

Guía completa para crear un caso desde cero usando el template `case-v2.html`.

---

## Archivos involucrados

```
cases/
  case-v2.html          ← template base (no editar directamente)
  case-nuevo.html       ← tu nuevo caso (copia del template)

content/
  case-schema.yml       ← schema de referencia (caso ecommerce como ejemplo)

assets/images/
  nombre-del-caso/      ← carpeta con todas las imágenes del caso
```

---

## Paso 1 — Duplicar el template

```bash
cp cases/case-v2.html cases/case-nombre.html
```

---

## Paso 2 — Crear el schema YAML del caso

Copia `content/case-schema.yml` como `content/case-nombre.yml` y rellena todos los campos. El schema tiene tres bloques principales:

### `meta`
```yaml
meta:
  page_title: "Case — Fintech | Lenin Cuadra"
  images_folder: "fintech"        # nombre de carpeta en assets/images/
```

### `tags` + `hero_title`
```yaml
tags:
  - en: "Fintech"
    es: "Fintech"
  - en: "Checkout Redesign"
    es: "Rediseño de checkout"
  - "Nombre del cliente"          # string simple = igual en ambos idiomas

hero_title:
  en: "Heading del caso en inglés."
  es: "Heading del caso en español."
```

### `quick_scan`
Siempre 3 filas: Role, Team, Tools. Los valores con múltiples líneas usan `|` como separador:
```yaml
quick_scan:
  - label: { en: "My Role", es: "Mi rol" }
    value:
      en: "Product Designer — ..."
      es: "Diseñador de producto — ..."
  - label: { en: "Team", es: "Equipo" }
    value:
      multiline: true
      en: "Line 1|Line 2"
      es: "Línea 1|Línea 2"
  - label: { en: "Tools", es: "Herramientas" }
    value:
      multiline: true
      en: "Tool 1|Tool 2|Tool 3"
      es: "Herramienta 1|Herramienta 2|Herramienta 3"
```

### `nav`
Links al caso anterior y siguiente:
```yaml
nav:
  prev:
    href: "./case-anterior.html"
    title: { en: "...", es: "..." }
    meta:  { en: "Product Design", es: "Diseño de producto" }
  next:
    href: "./case-siguiente.html"
    title: { en: "...", es: "..." }
    meta:  { en: "...", es: "..." }
```

### `sections`
Las secciones son flexibles — agrega o quita según el caso. Cada sección tiene:
- `id` — anchor único (sin espacios, ej: `section-problem`)
- `toc_label` — label en el sidebar de navegación (EN + ES)
- `label` — etiqueta pequeña sobre el heading (EN + ES)
- `heading` — título principal `<h2>` (EN + ES)
- `layout` *(opcional)* — `overview` para layout de 2 columnas (steps + imagen)
- `style` *(opcional)* — CSS inline para la sección (ej: `"padding-bottom: 0"`)
- `content[]` — array de bloques

---

## Paso 3 — Tipos de bloque en `content[]`

### `subheading` → `<h3>`
```yaml
- type: subheading
  text:
    en: "The original flow:"
    es: "El flujo original:"
```

### `body` → `<p>`
```yaml
- type: body
  text:
    en: "Paragraph text in English."
    es: "Texto del párrafo en español."
```

### `steps` → lista de items
```yaml
- type: steps
  variant: bullet      # bullet = asterisco (*) | numbered = 01, 02, 03...
  columns: 1           # 1 (default) | 2 (grid de dos columnas)
  items:
    - en: "Step text in English."
      es: "Texto del paso en español."
    - en: "Another step."
      es: "Otro paso."
```

**Regla general:**
- `numbered` para pasos secuenciales o puntos de alto peso (Overview, What This Demonstrates)
- `bullet` para listas de características o consecuencias
- `columns: 2` cuando hay 4+ items cortos (se ve mejor en grid)

### `image` → imagen individual
```yaml
- type: image
  src: "nombre-archivo.png"     # relativo a assets/images/{images_folder}/
  alt: "Descripción de la imagen"
  loading: lazy                 # lazy (default para imágenes below-fold) | eager
```

### `gallery` → 2 imágenes en grid
```yaml
- type: gallery
  images:
    - src: "imagen-izquierda.png"
      alt: "Descripción"
    - src: "imagen-derecha.png"
      alt: "Descripción"
```

---

## Paso 4 — Aplicar el schema al HTML

Con el YAML completo, edita `cases/case-nombre.html` aplicando los valores campo por campo. Sigue este orden:

1. **`<title>`** → `meta.page_title`
2. **Tags del hero** → `tags[]` (cada `<span class="case-hero__tag">`)
3. **`<h1>`** → `hero_title` (atributos `data-en` y `data-es`)
4. **Quick scan** → `quick_scan[]` (labels y valores, `data-html-en/es` si `multiline: true`)
5. **Secciones** → por cada entrada en `sections[]`:
   - Atributo `id` en el `<section>`
   - Atributos `data-toc-label` y `data-toc-label-es` en el `<section>`
   - Clase `layout: overview` → usa `class="overview-layout"` en el div interno
   - Atributo `style` si existe
   - `label` → `<p class="section__label" data-en="..." data-es="...">`
   - `heading` → `<h2 data-en="..." data-es="...">`
   - Bloques de `content[]` → ver patrones abajo
6. **Case nav** → `nav.prev` y `nav.next`
7. **Imágenes** → rutas `../assets/images/{images_folder}/{src}`

---

## Paso 5 — Patrones HTML por tipo de bloque

### subheading
```html
<h3 class="section__subheading" style="margin-top: 1.5rem"
    data-en="EN text" data-es="ES text">EN text</h3>
```

### body
```html
<p class="section__body" style="margin-top: 0.75rem"
   data-en="EN text" data-es="ES text">EN text</p>
```

### steps (bullet, 1 columna)
```html
<div class="process-steps" style="margin-top: 0.5rem">
  <div class="process-step">
    <span class="process-step__number" aria-hidden="true">*</span>
    <div class="process-step__content">
      <p class="process-step__body" data-en="EN" data-es="ES">EN</p>
    </div>
  </div>
  <!-- repetir por cada item -->
</div>
```

### steps (numbered, 1 columna)
```html
<div class="process-steps" style="margin-top: 1rem">
  <div class="process-step">
    <span class="process-step__number" aria-hidden="true">01</span>
    <div class="process-step__content">
      <p class="process-step__body" data-en="EN" data-es="ES">EN</p>
    </div>
  </div>
  <!-- incrementar: 01, 02, 03... -->
</div>
```

### steps (2 columnas)
Agrega la clase `process-steps--2col`:
```html
<div class="process-steps process-steps--2col" style="margin-top: 0.5rem">
  <!-- items igual que arriba -->
</div>
```

### image
```html
<div class="img-container" style="margin-top: 0.75rem">
  <div class="img-clip">
    <img src="../assets/images/{folder}/{src}" alt="..." loading="lazy" />
  </div>
</div>
```

### gallery (2 imágenes)
```html
<div class="gallery-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 1.5rem; align-items: start">
  <div class="img-container">
    <div class="img-clip">
      <img src="../assets/images/{folder}/img1.png" alt="..." />
    </div>
  </div>
  <div class="img-container">
    <div class="img-clip">
      <img src="../assets/images/{folder}/img2.png" alt="..." />
    </div>
  </div>
</div>
```

### layout: overview (steps + imagen lado a lado)
```html
<div class="overview-layout" style="margin-top: 1rem">
  <div class="process-steps">
    <!-- steps aquí -->
  </div>
  <div class="img-container">
    <div class="img-clip">
      <img src="..." alt="..." loading="lazy" />
    </div>
  </div>
</div>
```

---

## Paso 6 — Checklist antes de publicar

- [ ] `<title>` actualizado
- [ ] Todos los tags del hero tienen `data-en` y `data-es`
- [ ] `<h1>` tiene `data-en` y `data-es`
- [ ] Quick scan: labels y valores bilingües. Valores multiline usan `data-html-en/es`
- [ ] Cada `<section>` tiene `id`, `data-toc-label`, `data-toc-label-es`
- [ ] Cada `data-en` tiene su `data-es` correspondiente
- [ ] Todas las imágenes tienen `alt` text descriptivo
- [ ] Imágenes below-fold tienen `loading="lazy"`
- [ ] Case nav: `href`, `data-en`, `data-es` actualizados en prev y next
- [ ] Probado en modo claro y oscuro
- [ ] Probado con EN y ES activados (toggle de idioma)
- [ ] Probado en mobile (< 600px)

---

## Español latino neutro — reglas

- Usar **tú** (no vos): "buscas" no "buscás"
- Usar formas impersonales cuando aplica: "Se redujeron campos" no "Redujimos campos"
- Evitar modismos regionales
- Género del rol: **masculino** ("Diseñador de producto", no "Diseñadora")
- "Escríbeme" no "Escribime"

---

## Imágenes — convenciones

```
assets/images/
  nombre-del-caso/
    hero.png              ← imagen principal si aplica
    wireframes.png
    wireframe-MidFi.png
    mockup.png
    impact-chart.gif      ← animaciones en GIF
```

- Formato: PNG para UI, GIF para animaciones, WebP si hay versión optimizada
- Tamaño máximo visible en el template: **680px ancho × 432px alto** (con `object-fit: contain`)
- Exportar a 2x para pantallas retina cuando sea posible
