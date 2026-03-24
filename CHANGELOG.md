# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

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
