// Draft: cbuilder-ai
// Preview (localhost): cases/case-v3.html?slug=cbuilder-ai
// Publicar: node scripts/case-publish.js cbuilder-ai
//
// Origen del contenido: content/new/case-study-ai-feature.md
// Decisiones tomadas con el usuario (2026-09-14 / 2026-09-15):
//   - Flujo: draft-first → publicar con case-publish cuando esté listo.
//   - Impacto: cualitativo (sin métricas duras todavía).
//   - Formato: title + description bullets (steps) en la mayoría de secciones,
//     con títulos autodescriptivos. Prosa corta solo en overview/problema/impacto.
//
// ASSETS — hoy son PLACEHOLDERS SVG (se ven en preview y pasan case-check).
//   Reemplazar cada uno por su .webp real y cambiar la extensión en el src.
// cover          assets/images/cbuilder-ai/cover.svg          → cover.webp          [PLACEHOLDER — screenshot del AiContextPanel generando una carta]
// s-grounding    assets/images/cbuilder-ai/context-pack.svg   → context-pack.webp   [PLACEHOLDER — compartir contexto + botón Detectar la JD]
// s-hitl         assets/images/cbuilder-ai/draft-editable.svg → draft-editable.webp [PLACEHOLDER — borrador generado y editable]
// s-architecture assets/images/cbuilder-ai/pipeline.svg       → pipeline.webp       [PLACEHOLDER — diagrama del pipeline (base: ASCII del .md)]
//
// TODO antes de publicar:
//   - Reemplazar los 4 SVG por .webp reales, actualizar el src (.svg → .webp).
//   - Revisar si el diagrama de pipeline y/o el context-pack se ganan su lugar (ver preguntas al usuario).
//   - Completar rol/timeframe si querés dato duro (hoy el criterio va en el copy).
//   - Decidir si va a cases.json (necesita proof con número → hoy impacto cualitativo, prob. no).
//   - node scripts/case-check.js cbuilder-ai --strict  → 0/0 antes de publicar.

PORTFOLIO_DATA.en.cases.push({
  "slug": "cbuilder-ai",
  "template": "v3",
  "featured": false,
  "unlisted": true,
  "images": {
    "cover": "assets/images/cbuilder-ai/cover.svg"
  },
  "card": {
    "tags": ["AI Feature Design", "LLM Integration", "Product Architecture"],
    "title": "An AI feature designed end to end, not just a prompt",
    "excerpt": "Inside cbuilder, the tool I use to apply for jobs, I designed a Claude-powered feature that drafts cover letters and screening answers, built around grounding, cost control, and human review."
  },
  "meta": {
    "title": "cbuilder AI — An AI feature designed end to end, not just a prompt · Lenin Cuadra",
    "description": "A grounded AI feature inside a production tool: it drafts cover letters and pre-screening answers, designed around cost per call, human review, and anti-hallucination guardrails."
  },
  "hero": {
    "title": "An AI feature designed end to end: grounding, cost, and guardrails.",
    "subtitle": "AI Product Design · LLM Integration · cbuilder"
  },
  "sections": [
    {
      "id": "section-overview",
      "tocLabel": "Overview",
      "label": "Overview",
      "h3": "I built an AI feature end to end inside a tool I use in production to apply for jobs.",
      "content": [
        {
          "type": "body",
          "text": "cbuilder is an app I use for real to apply to jobs. Inside it I designed and built an AI feature that drafts cover letters and pre-screening answers with the Claude API. Not \"call an API\": I designed the grounding, the cost economics, the human review, and the output guardrails."
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/cover.svg",
          "ratio": "wide",
          "alt": "The AiContextPanel in cbuilder generating a cover letter draft"
        }
      ]
    },
    {
      "id": "section-problem",
      "tocLabel": "The problem",
      "label": "The problem",
      "h3": "Applying well is slow by hand and fake with a generic LLM.",
      "content": [
        {
          "type": "body",
          "text": "Every application wants a different letter and tailored answers. By hand that is slow; with a generic LLM it comes out flat, in an \"AI voice\", and over-claims things that aren't true, which is expensive in an ATS or an interview. The challenge: personalization at speed, without losing my voice and without hallucinating my real experience."
        }
      ]
    },
    {
      "id": "section-constraints",
      "tocLabel": "Constraints",
      "label": "Constraints",
      "h3": "Three constraints shaped every decision: cost per call, truth, and a public repo.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "Cheap by default — Each generation costs money, so it leans on the cheapest model and resists misclicks.",
            "Anchored to real facts — It can't invent experience; every output ties back to verified facts.",
            "Production discipline by choice — A personal tool, but held to real criteria: cost, guardrails, grounding.",
            "Sensitive data stays private — Who I apply to never enters the public repo."
          ]
        }
      ]
    },
    {
      "id": "section-grounding",
      "tocLabel": "Grounding",
      "label": "Grounding",
      "h3": "The prompt never says \"write a letter\"; it assembles a grounded context pack so the model can't invent experience.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "A context pack, not a blank prompt — Bio, experience, skills and a focus angle, plus optional context about the role.",
            "Verbatim mode with a human gate — The app proposes each phrase pulled from the posting and I confirm it: max ATS match, zero over-claiming.",
            "Job detection via JSON-LD — A \"Detect\" button parses the posting's structured data, no headless browser, and never wastes a paid call."
          ]
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/context-pack.svg",
          "ratio": "wide",
          "alt": "Sharing context and the Detect button parsing the job posting's JSON-LD"
        }
      ]
    },
    {
      "id": "section-economy",
      "tocLabel": "Cost economy",
      "label": "Cost economy",
      "h3": "Every generation is money, so the feature defaults to the cheapest model and a single paid call.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "Cheapest model by default — Allow-list validated (core/ai/models.ts); Haiku by default, upgrading is an explicit choice.",
            "Input capped at ~4000 chars — A giant paste can't inflate the cost.",
            "One paid call, no regenerate — No one-click or re-run over existing text, so a misclick can't burn a call.",
            "Persisted on generation — A paid call is never lost by closing a window."
          ]
        }
      ]
    },
    {
      "id": "section-hitl",
      "tocLabel": "Human in the loop",
      "label": "Human in the loop",
      "h3": "The AI returns a draft I edit, never the deliverable, with guardrails that strip the AI tells.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "A draft, never the deliverable — The AI drafts behind two server routes; I edit before sending.",
            "Voice guardrails — A prompt instruction plus post-processing remove the typical AI tics (like em-dashes) and hold a consistent voice."
          ]
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/draft-editable.svg",
          "ratio": "wide",
          "alt": "An AI-generated draft shown editable before I send it"
        }
      ]
    },
    {
      "id": "section-architecture",
      "tocLabel": "Architecture",
      "label": "Architecture",
      "h3": "core (pure logic) and ui (React) stay separate, so storage swaps from file to Supabase without touching either.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "core and ui, strictly separate — Pure, testable logic apart from React; prompt and model logic centralized and reusable.",
            "Storage behind an interface — A file store in dev, Supabase in prod, without touching core or ui.",
            "A cost-free prompt replica — The same prompt lives as a claude.ai Project, so I iterate without spending app calls."
          ]
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/pipeline.svg",
          "ratio": "wide",
          "alt": "Pipeline diagram: UI shares context, server routes call Claude, the draft is persisted, then edited"
        }
      ]
    },
    {
      "id": "section-tradeoffs",
      "tocLabel": "Trade-offs",
      "label": "Trade-offs",
      "h3": "I chose drafts over deliverables and the cheapest model by default, on purpose.",
      "content": [
        {
          "type": "table",
          "headers": ["Decision", "Discarded alternative", "Why"],
          "rows": [
            ["Draft always, human in the loop", "Generate the final deliverable", "Truth and my own voice: the AI assists, it doesn't replace"],
            ["Default to the cheapest model", "Default to the most powerful", "The cost of an error here is low; upgrading is an explicit choice"],
            ["One paid call, no regenerate", "One-click / auto-regenerate", "Avoids burning money and overwriting text on a misclick"],
            ["Verification gate in verbatim mode", "Auto-copy the posting", "Maximum ATS match without over-claiming"],
            ["JSON-LD, no headless", "Browser scraping", "Simpler, cheaper, doesn't block"]
          ]
        }
      ]
    },
    {
      "id": "section-impact",
      "tocLabel": "Impact",
      "label": "Impact",
      "h3": "It cut each application to minutes while keeping every letter specific to the role, without losing my voice.",
      "content": [
        {
          "type": "body",
          "text": "It's a single-user product, but I held it to production criteria: cost, grounding, and guardrails were decisions, not impositions. Applications now take minutes, with letters that stay specific to each role and sound like me, not like an LLM."
        }
      ]
    },
    {
      "id": "section-next",
      "tocLabel": "What's next",
      "label": "What's next",
      "h3": "Next is ATS-lint on the output, keyword scoring, and a grounded rewrite pass.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "ATS-lint of the output .docx — Validate ATS rules automatically.",
            "Keyword score — Compare the posting against the CV.",
            "Grounded rewrite for assisted mode — A rewrite pass with editable review."
          ]
        }
      ]
    }
  ]
});

PORTFOLIO_DATA.es.cases.push({
  "slug": "cbuilder-ai",
  "template": "v3",
  "featured": false,
  "unlisted": true,
  "images": {
    "cover": "assets/images/cbuilder-ai/cover.svg"
  },
  "card": {
    "tags": ["AI Feature Design", "LLM Integration", "Product Architecture"],
    "title": "Un feature de IA diseñado de punta a punta, no solo un prompt",
    "excerpt": "Dentro de cbuilder, la herramienta que uso para postularme a trabajos, diseñé un feature con la API de Claude que genera borradores de cover letters y respuestas de pre-screening, con grounding, control de costo y revisión humana."
  },
  "meta": {
    "title": "cbuilder AI — Un feature de IA diseñado de punta a punta, no solo un prompt · Lenin Cuadra",
    "description": "Un feature de IA con grounding dentro de una herramienta en producción: genera borradores de cover letters y respuestas de pre-screening, diseñado alrededor del costo por llamada, la revisión humana y guardrails anti-alucinación."
  },
  "hero": {
    "title": "Un feature de IA diseñado de punta a punta: grounding, costo y guardrails.",
    "subtitle": "AI Product Design · LLM Integration · cbuilder"
  },
  "sections": [
    {
      "id": "section-overview",
      "tocLabel": "Overview",
      "label": "Overview",
      "h3": "Construí un feature de IA de punta a punta dentro de una herramienta que uso en producción para postularme a trabajos.",
      "content": [
        {
          "type": "body",
          "text": "cbuilder es una app que uso de verdad para postularme a trabajos. Dentro de ella diseñé y construí un feature de IA que genera borradores de cover letters y respuestas de pre-screening con la API de Claude. No fue \"llamar a una API\": diseñé el grounding, la economía de costo, la revisión humana y los guardrails de output."
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/cover.svg",
          "ratio": "wide",
          "alt": "El AiContextPanel de cbuilder generando un borrador de cover letter"
        }
      ]
    },
    {
      "id": "section-problem",
      "tocLabel": "El problema",
      "label": "El problema",
      "h3": "Postularse bien es lento a mano y falso con un LLM genérico.",
      "content": [
        {
          "type": "body",
          "text": "Cada aplicación pide una carta distinta y respuestas a medida. A mano es lento; con un LLM genérico sale plano, con \"voz de IA\", y sobre-declara cosas que no son ciertas, lo que en un ATS o una entrevista sale caro. El reto: personalización a velocidad, sin perder mi voz y sin alucinar mi experiencia real."
        }
      ]
    },
    {
      "id": "section-constraints",
      "tocLabel": "Restricciones",
      "label": "Restricciones",
      "h3": "Tres restricciones marcaron cada decisión: costo por llamada, verdad y repo público.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "Barato por defecto — Cada generación cuesta dinero, así que se apoya en el modelo más barato y resiste los misclicks.",
            "Anclado a hechos reales — No puede inventar experiencia; cada output se ata a hechos verificados.",
            "Disciplina de producción por elección — Una herramienta personal, pero sostenida con criterios reales: costo, guardrails, grounding.",
            "La data sensible queda privada — A quién aplico nunca entra al repo público."
          ]
        }
      ]
    },
    {
      "id": "section-grounding",
      "tocLabel": "Grounding",
      "label": "Grounding",
      "h3": "El prompt nunca dice \"escribe una carta\"; arma un context pack con grounding para que el modelo no invente experiencia.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "Un context pack, no un prompt en blanco — Bio, experiencia, skills y un ángulo de foco, más contexto opcional del puesto.",
            "Modo verbatim con gate humano — La app propone cada frase sacada de la búsqueda y yo la confirmo: máximo match ATS, cero sobre-declaración.",
            "Detección del puesto vía JSON-LD — Un botón \"Detectar\" parsea la data estructurada de la oferta, sin headless browser, y nunca gasta una llamada paga."
          ]
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/context-pack.svg",
          "ratio": "wide",
          "alt": "Compartir contexto y el botón Detectar parseando el JSON-LD de la oferta"
        }
      ]
    },
    {
      "id": "section-economy",
      "tocLabel": "Economía del feature",
      "label": "Economía del feature",
      "h3": "Cada generación es dinero, así que el feature usa por defecto el modelo más barato y una sola llamada paga.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "Modelo más barato por defecto — Allow-list validado (core/ai/models.ts); Haiku por defecto, subir es una elección explícita.",
            "Input capado en ~4000 chars — Un pegado gigante no puede inflar el costo.",
            "Una sola llamada paga, sin regenerar — Sin one-click ni re-run sobre lo existente, para que un misclick no queme una llamada.",
            "Persistido al generarse — Una llamada paga nunca se pierde por cerrar una ventana."
          ]
        }
      ]
    },
    {
      "id": "section-hitl",
      "tocLabel": "Human in the loop",
      "label": "Human in the loop",
      "h3": "La IA devuelve un borrador que yo edito, nunca el entregable, con guardrails que eliminan los tics de IA.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "Un borrador, nunca el entregable — La IA redacta detrás de dos rutas server; yo edito antes de enviar.",
            "Guardrails de voz — Una instrucción en el prompt más post-procesado eliminan los tics típicos de IA (como los em-dashes) y sostienen una voz consistente."
          ]
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/draft-editable.svg",
          "ratio": "wide",
          "alt": "Un borrador generado por la IA, editable antes de que yo lo envíe"
        }
      ]
    },
    {
      "id": "section-architecture",
      "tocLabel": "Arquitectura",
      "label": "Arquitectura",
      "h3": "core (lógica pura) y ui (React) quedan separados, así el storage pasa de file a Supabase sin tocar ninguno.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "core y ui, estrictamente separados — Lógica pura y testeable aparte de React; la lógica de prompt y modelos centralizada y reutilizable.",
            "Storage detrás de una interfaz — File store en dev, Supabase en prod, sin tocar core ni ui.",
            "Una réplica del prompt sin costo — El mismo prompt vive como Project en claude.ai, así itero sin gastar llamadas de la app."
          ]
        },
        {
          "type": "image",
          "src": "assets/images/cbuilder-ai/pipeline.svg",
          "ratio": "wide",
          "alt": "Diagrama del pipeline: la UI comparte contexto, las rutas server llaman a Claude, el borrador se persiste y luego se edita"
        }
      ]
    },
    {
      "id": "section-tradeoffs",
      "tocLabel": "Trade-offs",
      "label": "Trade-offs",
      "h3": "Elegí borrador por sobre entregable y el modelo más barato por defecto, a propósito.",
      "content": [
        {
          "type": "table",
          "headers": ["Decisión", "Alternativa descartada", "Por qué"],
          "rows": [
            ["Borrador siempre, human in the loop", "Generar el entregable final", "Verdad y voz propia: la IA asiste, no reemplaza"],
            ["Default al modelo más barato", "Default al más potente", "El costo del error acá es bajo; subir es elección explícita"],
            ["Una sola llamada paga, sin regenerar", "One-click / auto-regenerar", "Evita quemar dinero y pisar texto por un misclick"],
            ["Gate de verificación en modo verbatim", "Copiar la búsqueda automáticamente", "Máximo match ATS sin sobre-declarar"],
            ["JSON-LD, sin headless", "Scraping con browser", "Más simple, más barato, no bloquea"]
          ]
        }
      ]
    },
    {
      "id": "section-impact",
      "tocLabel": "Impacto",
      "label": "Impacto",
      "h3": "Bajé cada aplicación a minutos manteniendo cada carta específica al puesto, sin perder mi voz.",
      "content": [
        {
          "type": "body",
          "text": "Es un producto de un solo usuario, pero lo sostuve con criterios de producción: costo, grounding y guardrails fueron decisiones, no imposiciones. Ahora las aplicaciones toman minutos, con cartas que siguen siendo específicas a cada puesto y suenan a mí, no a un LLM."
        }
      ]
    },
    {
      "id": "section-next",
      "tocLabel": "Qué sigue",
      "label": "Qué sigue",
      "h3": "Lo que sigue: ATS-lint del output, score de keywords y un pase de reescritura grounded.",
      "content": [
        {
          "type": "steps",
          "variant": "bullet",
          "items": [
            "ATS-lint del .docx de salida — Validar reglas ATS automáticamente.",
            "Score de keywords — Comparar la búsqueda contra el CV.",
            "Reescritura grounded para el modo asistido — Un pase de reescritura con review editable."
          ]
        }
      ]
    }
  ]
});
