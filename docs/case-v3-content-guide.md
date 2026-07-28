# Case-v3 — Guía de contenido

Cómo escribir el contenido de un case (`template: "v3"` en `data/content.js`) para que **se lea bien**, no solo para que tenga la info correcta.

**Referencias que funcionan:** `no-handoff` y `figma-webp-export` ("77 minutes").
**Anti-ejemplo:** `ecommerce-conversion` antes del refactor de contenido (paredes de bullets).

---

## El problema a evitar: "wall of bullets"

`ecommerce` tenía la info correcta pero leía mal porque casi cada sección era `subheading` + `steps` (listas de bullets tersos):

> "Required excessive cognitive effort." · "Forced users through a rigid multi-step structure." · "Relied exclusively on traditional web form submission."

Eso se lee como las notas de un slide, no como un caso. **Fragmenta la narrativa** y suena **abstracto** ("Improved information hierarchy and clarity", "Optimized form completion flow") — frases que no dicen qué pasó realmente.

## Cómo lee bien `no-handoff`

Cada sección es un **beat**: un `h3` que afirma algo + 1-2 oraciones de **prosa** (`body`) concretas y en primera persona. Donde hay evidencia, el patrón **claim → cómo → prueba**:

```
heading  "2. Build the library first"
body     "Component by component via Figma MCP: 'Replicate this with all its states.'
          No guessing from memory."
image    (la component library en el editor)
```

La prosa es corta pero fluye, con detalle real: el prompt textual, el "no guessing from memory". No hay bullets sueltos — hay afirmación, explicación y prueba.

---

## Altitud/audiencia — traducir implementación a decisión de diseño

El lector del case es **designer, alguien de producto/PM, o hiring manager** — no un ingeniero. Cada uno entra con una pregunta distinta:

- **Designer:** ¿cómo tomó las decisiones de craft? ¿qué tradeoffs vio?
- **Producto/PM:** ¿entendió el problema de negocio? ¿tomó decisiones con contexto de constraints reales?
- **Hiring/recruiter:** rara vez lee el body en detalle — para ellos es más relevante el card y el hero. Pero si entran, tienen que poder seguir la historia sin entender nada técnico.

Los tres necesitan lo mismo: qué decidiste y por qué importa, sin contexto técnico previo.

**La regla:** si una oración nombra una variable, un método, un framework, un flag o una estructura de datos, reescribila en términos de lo que decidiste y lo que se vio.

**El molde (tres pasos):**
1. `h3` = afirmación del problema o descubrimiento, en lenguaje visible: "El modo aleatorio no se sentía aleatorio" (no "El algoritmo de `sessionSeed` producía colisiones").
2. `body` = primera persona, qué hice + qué vi. Concreto pero sin jerga. "Probé diez combinaciones distintas. Todas se veían iguales. La randomness estaba ahí en el código, pero no en la pantalla."
3. `image`/`video` = la prueba visible (captura, animación, before/after).

**Qué eliminar:** nombres de variables (`sessionSeed`, `restAngle`), siglas técnicas no-visuales (WAAPI, BFF, API), menciones a librerías si no son parte de la historia de diseño.

**Qué queda:** la decisión (qué elegiste), el motivo (qué restricción o insight lo motivó), el resultado (qué vio el usuario).

Ejemplo completo de de-tecnificación:

> **Antes (técnico):** "Implemented a `restAngle` parameter clamped to ±30° from the ring center to prevent arrow overlap in dense `SessionRecord` arrays."
>
> **Después (diseño):** h3: "Las flechas se leían raras hasta que miré una diana real." body: "Probé con física — velocidad de entrada, arrastre, rebote. Las flechas se amontonaban. La vuelta vino de una foto: las flechas reales no quedan todas juntas. Les di reposo dentro de su anillo. Con eso alcanzó." + imagen del before/after.

---

## Reglas

1. **La prosa lleva la narrativa.** Usá `body` (párrafos de 1-2 oraciones) para contar qué pasó, en primera persona y concreto. No trocees la historia en bullets.
2. **`steps`/bullets solo para enumeraciones reales** — una lista genuina (los 4 use cases, las métricas, un par before/after). Nunca para partir un párrafo en fragmentos.
3. **Patrón claim → evidencia.** Una idea por beat: `heading`/`h3` (la afirmación) + `body` (por qué/cómo) + `image`/`video` (la prueba). **El gráfico tiene que probar la afirmación de su sección.**
4. **Los `h3` avanzan la historia** (ver "La TOC es el resumen del caso" en `CLAUDE.md`). Leídos en orden, los `h3` = el resumen del caso.
5. **Concreto > abstracto.** Números reales, nombres, citas textuales, la restricción puntual. Cambiá "mejoró la jerarquía de información" por *qué* cambió exactamente.
6. **Voz: primera persona, activa, simple.** "I built", "I told her" — no "The objective was to improve conversion."
7. **Brevedad.** Los `body` de no-handoff son 1-2 oraciones. Si un párrafo crece, partilo en beats con su propio gráfico.
8. **Sin em-dashes (`—`) en el copy.** En `body`, `quote`, `heading`, `h3` y captions de prosa usá coma, punto, dos puntos o paréntesis en su lugar, nunca el guion largo. **Excepción (es sintaxis, no copy):** el `" — "` de `steps` variante bullet (`"label — desc"` → `<h4>` + `<p>`) y el que une `label` + `caption` en `video` son delimitadores que lee el renderer; esos no se tocan.

## Arco típico

Contexto / hook → el problema concreto → el approach (las decisiones, cada una con su evidencia) → el resultado (con la métrica) → qué demuestra. Cada paso es un `h3` que lo afirma.

## Checklist antes de dar por listo un case-v3

- [ ] **Altitud:** ninguna oración nombra variables, métodos ni siglas técnicas no-visuales. Todo está en términos de decisión + resultado visible.
- [ ] Leés **solo los `h3`** (la TOC) y entendés el caso entero.
- [ ] Cada sección tiene **prosa**, no solo bullets.
- [ ] Los bullets que quedan son **listas reales** (enumeraciones), no narrativa troceada.
- [ ] Cada **gráfico prueba** lo que dice su sección (sin duplicados, sin "comparación coja").
- [ ] **Sin frases abstractas/genéricas**; hay detalle concreto (número, nombre, cita).
- [ ] **Primera persona, activa.**
- [ ] **Sin em-dashes (`—`)** en la prosa (el `" — "` de `steps`/captions es sintaxis del componente, no copy).
- [ ] **EN y ES** alineados por índice (mismo objeto, mismos `type`).
