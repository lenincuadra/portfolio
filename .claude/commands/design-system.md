---
model: claude-sonnet-4-6
---

# Design System Generator

Generás un design system completo con documentación interactiva tipo styleguide usando Tailwind CSS.
El resultado es un único archivo `styleguide.html` listo para abrir en el browser.

## Detectar el flujo automáticamente

Mirá si el usuario pasó un archivo o mencionó uno en el comando:

- **Con archivo** (`/design-system index.html`) → Flujo B: extraer estilos del archivo existente
- **Sin archivo** (`/design-system`) → Flujo A: generar design system desde cero

---

## Flujo A — Desde cero

Preguntá UNA sola cosa antes de generar:

> "¿Tenés alguna preferencia de colores o estilo? (ej: oscuro, minimalista, vibrante) — o escribí 'genérico' para que elija yo."

Con esa respuesta, definí los tokens y generá el styleguide.

---

## Flujo B — Desde archivo existente

Leé el archivo que te pasaron. Extraé:

**Colores:**
- Variables CSS (`--color-*`, `--primary`, etc.)
- Valores hex/rgb en `color`, `background`, `border-color`
- Clases Tailwind con color (`bg-indigo-600`, `text-gray-800`, etc.)
- Los más frecuentes = tokens principales

**Tipografía:**
- `font-family` declarados o Google Fonts importadas
- Tamaños y pesos más usados

**Componentes presentes:**
- Botones, inputs, cards, nav — lo que encuentres

Si los colores no tienen nombres claros, mostrá un resumen rápido y pedí confirmación:
> "Encontré estos colores: #4f46e5 (12 veces), #c026d3 (4 veces). ¿Los uso como primary y secondary?"

Luego continuá con los tokens extraídos.

---

## Tokens del design system

Definí siempre estos tokens (ya sea inventados o extraídos del archivo):

- `primary` — color de marca (base + light + dark)
- `secondary` — color de apoyo
- `success` / `warning` / `danger` — semánticos
- `font-sans` — cuerpo (Google Font)
- `font-display` — títulos (Google Font)

---

## Generar styleguide.html

Creá el archivo en la raíz del proyecto como `styleguide.html`.

**Estructura:**
```
Header (nombre + descripción)
Sidebar sticky con navegación por anclas
Secciones:
  - Colores (swatches: preview + nombre + hex + clase Tailwind)
  - Tipografía (escala completa xs — 3xl)
  - Espaciado (visual ruler)
  - Botones (primary / secondary / outline / ghost × sm / md / lg)
  - Inputs (normal / focus / error / disabled / select / textarea)
  - Cards (básica / con imagen / con acciones)
  - Badges (variantes semánticas)
Footer con fecha
```

**Reglas técnicas:**
- Tailwind via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Tema custom en `tailwind.config` inline
- CSS variables en `:root` para los tokens
- Google Fonts via `<link>`
- Un solo archivo, sin dependencias externas salvo CDN
- Sidebar sticky en desktop, toggle en mobile con JS vanilla
- **Comentarios en el código** explicando por qué se usa cada clase — el usuario está aprendiendo

**Reglas de diseño:**
- El styleguide se estiliza con su propio design system (dogfooding)
- Cada componente muestra su nombre y la clase Tailwind principal
- Verse profesional — es la carta de presentación del sistema

---

## Al terminar

Decile al usuario:
- Que abra `styleguide.html` en el browser para verlo
- Los colores principales usados (hex)
- La tipografía elegida
- Un tip rápido: "Podés copiar el bloque `tailwind.config` de este archivo a cualquier página de tu proyecto para tener los mismos tokens disponibles."
