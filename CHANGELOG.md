# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

---

## [0.9.0] — 2026-04-11

### Added
- **Toast component in styleguide** — nueva sección `#toast` con demo interactiva (trigger button + timer 2.5 s), estados default/visible como referencia estática, y token labels. El elemento `#sg-toast` se inyecta en el DOM global del styleguide igual que en producción
- Entradas de nav (sidebar desktop + mobile pills) para la sección Toast

### Changed
- **`styles/tokens.css`** — tokens actualizados
- **`cases/case.html`** — ajustes de contenido y markup
- **`data/content.js`** — actualización de datos de casos

### Removed
- `content/01_fintech_case_refinamiento.md`, `content/02_ecommerce_case_221_percent_growth.md`, `content/03_telecom_case_legacy_refactor.md` — archivos de contenido en markdown eliminados; el contenido vive en `data/content.js`

---

## [0.8.0] — 2026-04-11

### Added
- **i18n en labels de About y Contact** — secciones del homepage ahora cambian de idioma al instante sin recargar la página

### Changed
- **Language switch — re-render instantáneo** — reemplaza el `window.location.reload()` anterior; el cambio de idioma ahora re-renderiza el contenido en memoria vía `renderIndex()` / `renderCase()`
- **About section** — eliminado texto placeholder restante en `index.html`

---

## [0.7.0] — 2026-04-11

### Added
- **`styleguide.html`** — design system interactivo con secciones: Colores, Tipografía, Espaciado, Layout, Botones, Inputs, Cards, Badges, Utilidades. Muestra tokens reales del proyecto, estados de componentes y token labels
- **CSS componentizado** — `styles/main.css` dividido en archivos por dominio: `tokens.css`, `base.css`, `header.css`, `hero.css`, `featured.css`, `cards.css`, `about.css`, `footer.css`, `buttons.css`, `layout.css`, `case.css`
- **`.claude/commands/design-system.md`** — instrucciones para Claude sobre cómo mantener el styleguide en sync con el CSS real
- **`CLAUDE.md`** — reglas del proyecto: el styleguide debe reflejar siempre el CSS real, nunca duplicar estilos inline

### Changed
- **`styles/main.css`** — reducido a archivo de entrada que importa los archivos de componente
- **`app.js`** — ajustes menores de soporte al design system
- **Styleguide sincronizado** — clases, tokens y componentes corregidos para coincidir exactamente con el CSS real

---

## [0.6.0] — 2026-03-26

### Added
- **Section label i18n** — all 8 section labels in `case.html` now carry `data-label-es` and `data-toc-label-es` attributes; `renderCase()` swaps them on load and `buildTOC()` picks the correct label per language (ES: Descripción general, Problema, Limitantes, Mi Rol, El proceso, Decisiones claves, Impacto, Aprendizajes)

### Changed
- **Case section headings (fintech, EN + ES)** — shortened to remove trailing clauses and periods: Overview, Problem, Constraints, Process, Key Decisions, Impact, Learnings headings all trimmed to their core statement
- **Quick Scan grid** — Timeline cell hidden (`hidden` attribute); grid changed from `repeat(4, 1fr)` to `repeat(3, 1fr)` so My Role, Team, and Tools fill the full width
- **Case content padding** — removed `padding-inline: var(--sp-8)` from `.case-content .container`; side padding is now `0`
- **`section--alt` removed** — background alternation between sections eliminated; all sections now use only `class="section"`

---

## [0.5.0] — 2026-03-24

### Added
- **"Open to new opportunities" badge** — glassmorphism pill overlay positioned at the bottom of the hero portrait image; transparent white background with blur, green dot indicator, small-caps uppercase mono text, `4px 8px` padding
- **Button icons** — inline SVG icons added to the left of each action button: arrow-down on "View Work", envelope on the email CTA, LinkedIn mark on the LinkedIn button
- **Venn diagram** — replaces the About section portrait photo with an SVG three-circle diagram (User / Business / Tech) using transparent fills from the design token palette (`--accent`, `--accent-2`, teal)

### Changed
- **Hero eyebrow removed** — "Open to new opportunities" text above the name eliminated; availability is now communicated only via the portrait badge
- **Button padding** — standardized to `0 8px` (sides only, no vertical padding)
- **About skills** — "Conversion optimization" tag removed
- **`contact-email` injection** — `app.js` now targets `#contact-email-label` span instead of the `<a>` element directly, preserving the envelope icon when `textContent` is set
- **`hero-cta` injection** — `id="hero-cta"` moved to an inner `<span>` so JS text injection no longer destroys the arrow icon

### Removed
- About section portrait photo (`profile-pic.jpeg` reference in bio block)

---

## [0.4.0] — 2026-03-24

### Added
- **Featured Case section** — new dominant section between hero and work grid, showcasing the fintech case with title, excerpt, 3 product screen thumbnails (Checkout / Payment Link / Dashboard), and a "Read Case Study →" CTA. Rendered from `content.js` via `featured: true` flag on the case object
- `images.screens` array on the fintech case in `content.js` with paths and labels for each product surface
- `home.capabilities` array in `content.js` with 5 capabilities entries
- `home.about.homeExcerpt` field in `content.js` — short 2-sentence version used on the homepage About section
- **Capabilities section** — new `<section class="capabilities">` between work and about, populated dynamically from `home.capabilities`
- `renderIndex()` now renders featured case into `#featured-case`, capabilities into `#capabilities-list`, and uses `homeExcerpt` for the About summary
- **Sticky Key Facts Bar** on case pages — `.quick-scan` is now `position: sticky; top: 64px`; collapses to a compact one-liner (`Role | Case title`) once the user scrolls past the case hero, driven by `IntersectionObserver` in `initFactsBar()`
- Compact bar fields (`qs-compact-role`, `qs-compact-title`) populated in `renderCase()`

### Changed
- **Hero → 2-column layout** — text column (7fr) left, portrait column (5fr) right; stacks vertically on mobile with portrait above text. Portrait moved from About section to hero
- **Work grid** — now shows only non-featured cases (ecommerce + telecom) in an explicit 2-column layout (`.case-grid--secondary`); fintech is excluded from the grid and shown in the featured section instead
- **About section** on homepage condensed to a single short paragraph (`about-excerpt`) + skills tags + "Get in touch →" CTA; removed the 3-paragraph layout
- `renderIndex()` skips the featured case when building the secondary case grid

---

## [0.3.0] — 2026-03-24

### Added
- SVG logo mark in header of both `index.html` and `cases/case.html`, replacing placeholder text
- Favicon `<link>` tag in both pages pointing to `assets/logo/logo-lc.svg`
- `updateFavicon()` in `app.js`: dynamically swaps favicon color on theme toggle (light/dark aware)
- `images` object in fintech case data (`content.js`) with paths for cover, hero, process1, process2, and decisions screens
- Case cards in homepage grid now render the cover image from `c.images.cover` instead of an empty `src`
- Case hero, process, and decisions sections in `case.html` now render actual images from `caseData.images`

### Changed
- Logo anchor `aria-label` updated to "Lenin Cuadra — home" (both pages)
- Footer copyright hardcoded to "Lenin Cuadra" in both pages — removed reliance on dynamic `site-footer__brand` injection
- `renderSiteWide()` no longer sets logo text or footer brand/role (SVG logo handles identity)
- `setAll()` helper removed from `app.js` (no longer needed)
- Process and decisions image blocks in `case.html` changed from `<div>` placeholders to `<img>` elements with IDs

### Removed
- `site-footer__brand` and `site-footer__role` paragraph elements from footer in both pages
- Placeholder spans inside case card images and case hero image block

---

## [0.2.0] — 2026-03-24

### Fixed
- `app.js` was not loaded in `index.html` — content was never rendered
- Removed duplicate inline script that replicated `app.js` functionality
- `content.js` script tag had been accidentally deleted; restored

### Added
- All required element IDs in hero, about, contact, and footer for `app.js` to inject content
- `data-lang` attributes to language switch buttons so JS-based switching works
- `buildMetricCard()` shared helper function, eliminating duplication between constraints and impact grids
- TOC entries now show the section `h2` as a subtitle below the label
- TOC title is now language-aware: "Table of Contents" (EN) / "Tabla de Contenido" (ES)
- `padding-top` and `padding-bottom` to `.case-layout` so content clears the fixed nav

### Changed
- Static case cards in `index.html` replaced with dynamic `#case-grid` populated by `app.js`
- Language switch `<a>` tags replaced with `<button data-lang>` elements
- Metric card redesigned: dark background, bold sans-serif value, larger border radius
- Metric card has distinct light mode (`--ink` bg) and dark mode (`--surface` bg) styles
- Metric card font sizes reduced ~80% using existing scale tokens
- `about.skills` trimmed to 6 focused skills (EN + ES)
- `impact-grid` and `constraints-grid` gap reduced to `1rem` to prevent overflow
- TOC title hierarchy improved: body font, weight 600, with bottom border separator
- TOC is now sticky at top with no internal scroll

---

## [0.1.0] — 2026-03-24

### Added
- Initial commit: full portfolio codebase pushed to GitHub
- `index.html`, `styles/main.css`, `js/app.js`, `data/content.js`
- Case study pages: fintech, e-commerce, telecom
- Asset files: profile picture, CV (EN + ES)
