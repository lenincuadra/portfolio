# Case Study — Feature de IA end-to-end en cbuilder

> **Formato**: case study de portafolio. Las secciones marcadas con `🔲 COMPLETAR`
> requieren datos que solo vos tenés (métricas, capturas, fechas). Todo lo demás
> está aterrizado en el producto real.

---

## TL;DR

Diseñé y construí, de punta a punta, un feature de IA dentro de **cbuilder** —una
app en producción que uso para postularme a trabajos—. El feature genera
**borradores de cover letters y respuestas de pre-screening** con la API de Claude,
personalizados a cada búsqueda. No fue "llamar a una API": diseñé el *grounding*
(para que no alucine), la **economía del feature** (control de costo por llamada),
el **human-in-the-loop** (la IA nunca entrega algo final) y los **guardrails de
output**, con una arquitectura que separa la lógica de IA de la UI y decisiones de
producto documentadas.

- **Rol**: 🔲 COMPLETAR (ej. "Product designer + builder solo — diseño, arquitectura y código")
- **Timeframe**: 🔲 COMPLETAR (ej. "Fase 2, 2025 · ~N semanas")
- **Stack**: Next.js · TypeScript · Tailwind · shadcn/ui · Supabase · Vercel · Anthropic API (Claude)
- **Estado**: en producción (uso real, no demo)

---

## El problema

Postularse bien a un trabajo es lento y repetitivo: cada aplicación pide una carta
distinta y respuestas de pre-screening a medida. Hacerlas a mano bien lleva tiempo;
hacerlas rápido con un LLM genérico produce texto plano, con "voz de IA", y con
riesgo de **sobre-declarar** cosas que no son ciertas (lo que en un ATS o entrevista
sale caro).

**El reto de producto**: personalización a velocidad, **sin** perder la voz propia y
**sin** alucinar sobre la experiencia real.

---

## Restricciones (lo que hizo el diseño interesante)

- **Costo real por llamada**: cada generación es dinero. El feature tenía que ser
  barato por defecto y a prueba de misclicks.
- **Verdad**: no podía inventar experiencia. El output tenía que estar anclado a
  hechos reales.
- **Un solo usuario, pero criterios de producción**: es una herramienta personal,
  así que la disciplina (costo, guardrails, grounding) fue una decisión, no una
  imposición externa.
- **Repo público**: la data de a quién aplico es privada → separación estricta de
  datos sensibles.

---

## Qué construí

Dos capacidades de IA, sobre la misma base de prompt:

1. **Cover letter drafting** — genera el borrador de una carta por idioma.
2. **Pre-screening answer suggestions** — sugiere respuestas a preguntas de
   pre-screening, guardadas en un banco reutilizable.

Ambas viven detrás de dos rutas server (`/api/ai/cover-letter`,
`/api/ai/screening-answer`) que llaman a la API de Anthropic y devuelven un
**borrador** — nunca un entregable final.

### 1. Grounding / anti-alucinación

El prompt (`core/ai/prompt.ts`) no dice "escribí una carta". Arma un **context pack**
con:
- Bio, experiencia, skills y un **perfil de "foco"** (el ángulo real que quiero
  proyectar en esa aplicación).
- Contexto opcional del puesto (link + texto libre).

Además hay un **modo verbatim/ATS** con un **gate de verificación humana**: para
maximizar el match con el ATS, la app propone cada frase sacada de la búsqueda y yo
la **confirmo** manualmente — máximo match, cero sobre-declaración.

> Modos de tailoring del CV: `base` · `assisted (IA, grounded)` · `verbatim (gate de
> verificación)`, registrados por aplicación (`cvMode`).

### 2. Ingesta de contexto del puesto

El botón "Detectar" parsea el `JobPosting` del **JSON-LD** del HTML de la oferta (sin
headless browser — la mayoría de los ATS grandes lo emiten sin JS). Si no encuentra
nada, **no bloquea ni gasta una llamada paga**.

### 3. Economía del feature (la parte que casi nadie diseña)

- **Modelo elegible por acción**, con allow-list validado (`core/ai/models.ts`) y
  **default al más barato** (Haiku) — subir de modelo es una elección explícita.
- **Input capado (~4000 chars)** para que un pegado gigante no infle el costo.
- **Una sola llamada paga**: sin one-click ni "regenerar sobre lo existente", para
  que un misclick no pise texto ni queme una llamada.
- **Borrador siempre persistido apenas se genera**: una llamada paga nunca se pierde
  por cerrar una ventana.

### 4. Human-in-the-loop + guardrails de output

- La IA produce un **borrador editable**, nunca el entregable final. Yo edito antes
  de enviar.
- Control de estilo con **doble mecanismo** (instrucción en el prompt +
  post-procesado) para eliminar los tics típicos de IA (ej. em-dashes) y sostener una
  voz consistente.

### 5. Arquitectura

- Separación estricta **`core/` (lógica pura, testeable) vs `ui/` (React)**.
- Lógica de prompt y modelos **centralizada y reutilizable** (`core/ai/prompt.ts`,
  `core/ai/models.ts`).
- Storage detrás de una interfaz (`RegistryStore`): file store local en dev, Supabase
  en prod — sin tocar `core/` ni `ui/`.
- **Réplica sin costo**: repliqué el mismo prompt como Project en claude.ai para
  experimentar sin gastar llamadas de la app.

```
[UI: AiContextPanel] → comparte contexto (opcional: JD detect + texto libre + modelo)
        │
        ▼
[/api/ai/cover-letter | /api/ai/screening-answer]
        │  core/ai/prompt.ts  → arma context pack (grounding + guardrails)
        │  core/ai/models.ts  → valida modelo contra allow-list
        ▼
[Anthropic API (Claude)] → BORRADOR
        │
        ▼
[Persistencia inmediata] → usuario edita → entrega
```

---

## Decisiones de producto y trade-offs

| Decisión | Alternativa descartada | Por qué |
|---|---|---|
| Borrador siempre, human-in-the-loop | Generar el entregable final | Verdad + voz propia; la IA asiste, no reemplaza |
| Default al modelo más barato | Default al más potente | El costo del error acá es bajo; subir es elección explícita |
| Una sola llamada paga, sin regenerar | One-click / auto-regenerar | Evita quemar dinero y pisar texto por misclick |
| Persistir el borrador al instante | Persistir al guardar | Nunca perder una llamada pagada |
| Gate de verificación en modo verbatim | Copiar la JD automáticamente | Máximo match ATS **sin** sobre-declarar |
| JSON-LD sin headless | Scraping con browser | Más simple, más barato, no bloquea |

---

## Resultados / Impacto

> 🔲 COMPLETAR con datos reales. Ideas de métricas honestas para un caso personal:
> - Tiempo de armado de una aplicación: **antes X min → después Y min**.
> - Nº de aplicaciones enviadas / entrevistas conseguidas usando la herramienta.
> - Costo promedio por aplicación (llamadas de IA) — demuestra la disciplina de costo.
> - % de aplicaciones donde usaste el modo verbatim/ATS.
>
> Si no tenés números duros, un impacto cualitativo también sirve:
> *"Bajé el tiempo por aplicación de ~X a minutos manteniendo cartas específicas por
> puesto, sin perder mi voz."*

---

## Qué haría después

- ATS-lint del `.docx` de salida (validar reglas ATS automáticamente).
- Score de keywords JD ↔ CV.
- Prompt de reescritura grounded para el modo asistido, con review editable.
- 🔲 COMPLETAR con lo tuyo.

---

## Skills demostradas

- Diseño de features de IA **end-to-end** (no solo prompting): grounding, HITL,
  guardrails, economía de llamadas.
- Criterio de producto: trade-offs explícitos y documentados.
- Arquitectura limpia (separación core/ui, storage detrás de interfaz).
- Full-stack: Next.js, TypeScript, integración de LLM en producción, deploy en Vercel.
- Sensibilidad al costo y a la verdad — no "IA por la IA".

---

## Assets del case study (para armar la página del portafolio)

> 🔲 COMPLETAR — lo que hace falta para publicarlo:
> - **Hero / cover**: 1 imagen o screenshot del feature en acción (el `AiContextPanel`
>   generando una carta).
> - **1–2 screenshots** del flujo: (a) compartir contexto + detectar JD, (b) borrador
>   generado y editable.
> - **Diagrama** del pipeline (podés usar el ASCII de arriba como base y hacerlo lindo).
> - **Un antes/después**: carta genérica vs. carta personalizada (anonimizá la empresa).
> - **Una frase de apertura** (hook) de 1 línea para el listado del portafolio.
> - **CTA / cierre**: link al repo (es público) o a un video corto de demo.
> - Nota de honestidad si el rol es de escala: *"producto de un solo usuario, diseñado
>   con criterios de producción — costo, grounding, guardrails"*.
