// =============================================================================
// PORTFOLIO CONTENT
// Edit this file to update all text across the site.
// For personal info marked [PENDIENTE], fill in before publishing.
// ES section mirrors EN structure — add translations when ready.
// =============================================================================

const PORTFOLIO_DATA = {

  // ---------------------------------------------------------------------------
  // ENGLISH
  // ---------------------------------------------------------------------------
  en: {

    site: {
      designerName:  "Lenin Cuadra",
      role:          "Product Designer",
      email:         "leninxperience@gmail.com",
      linkedinUrl:   "https://www.linkedin.com/in/lenincuadra/",
      resumeUrl:     {
        en: "assets/cv/Lenin_Cuadra__Product_UX_UI_Designer_CV.pdf",
        es: "assets/cv/Lenin_Cuadra__Product_UX_UI_Designer_CV_ES.pdf",
      },
      lang:          "en",
    },

    ui: {
      nav:    { work: "Work",     about: "About",   contact: "Contact" },
      footer: { work: "Work",     about: "About",   linkedin: "LinkedIn", resume: "Resume", builtWith: "Designed & built with care." },
      hero:   { cta: "View Work", scroll: "Scroll" },
      case:   { readMore: "Read Case Study", featuredLabel: "Featured Work", gridLabel: "Selected Work" },
    },

    home: {
      hero: {
        eyebrow:   "Open to new opportunities",
        firstName: "Lenin.",
        lastName:  "Cuadra",
        role:      "Product Designer & Systems Thinker",
        // PROPUESTA — editar si prefieres otra versión:
        summary:   "I design product systems that work at the intersection of business strategy, technical constraints and user behavior. From zero-to-one fintech ecosystems to 221% conversion growth — my work turns operational complexity into coherent, measurable outcomes.",
      },
      work: {
        heading: "Selected work focused on systems, clarity, and measurable outcomes.",
      },
      about: {
        heading:    "I design systems where user needs, technical constraints, and business goals align.",
        homeExcerpt: "Product designer focused on complex systems, platforms, and flows. I work closely with engineering and product teams — turning technical constraints into coherent, scalable experiences.",
        paragraphs: [
          "I'm a product designer focused on complex systems, platforms, and flows where clarity and structure matter most. My work typically involves redesigning fragmented experiences into coherent, scalable solutions.",
          "I approach design through constraints. Instead of treating limitations as blockers, I use them to shape decisions early, ensuring what gets designed can actually be built and maintained over time.",
          "I work closely with engineering and product teams to define systems, not just screens. This includes interaction patterns, state models, and the logic behind the UI, aiming for consistency across surfaces and long-term scalability.",
        ],
        skills: [
          "Zero-to-one product design",
          "Legacy system refactoring",
          "Design systems",
          "UX research & validation",
          "Product thinking",
        ],
        vennCenter: "Me",
      },
      contact: {
        heading: "Let's build something meaningful.",
        body:    "I'm open to product design roles, collaborations, and conversations around complex systems, platform design, and scalable experiences.",
      },
      capabilities: [
        "Zero-to-one product creation",
        "Legacy system refactoring",
        "Conversion and growth optimization",
        "Design systems integration",
        "UX research and usability validation",
      ],
    },

    cases: [

      // -----------------------------------------------------------------------
      // CASE 1 — FINTECH / NARANJA X
      // -----------------------------------------------------------------------
      {
        slug:     "fintech-ecosystem",
        featured: true,

        images: {
          cover:     "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
          hero:      "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
          process1:  "assets/images/fintech/1-3—web checkout/1-nx-wireframes.png",
          process2:  "assets/images/fintech/2-3—Payment link/3-nx-proto-wireframes.gif",
          decisions: "assets/images/fintech/3-3—Nshop/3-screens01.png",
          screens: [
            { src: "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.mp4",       poster: "assets/images/fintech/1-3—web checkout/0-nx-portada.png",    label: "Web Checkout" },
            { src: "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.mp4", poster: "assets/images/fintech/2-3—Payment link/0-nx-description.png", label: "Payment Link" },
            { src: "assets/images/fintech/3-3—Nshop/9-financial-dashboard.mp4",         poster: "assets/images/fintech/3-3—Nshop/3-screens01.png",             label: "Financial Dashboard" },
          ],
        },

        card: {
          tags:    ["Fintech", "Product Architecture", "Payments"],
          title:   "Zero-to-one: Connected Payment Ecosystem",
          excerpt: "Designed the first cohesive version of a three-product fintech ecosystem for Naranja X, enabling merchants to collect payments through embedded checkout, payment links and financial dashboards.",
        },

        meta: {
          title:       "Naranja X — Fintech Ecosystem · Lenin Cuadra",
          description: "Zero-to-one creation of a connected payment ecosystem. A case study by Lenin Cuadra.",
        },

        hero: {
          tags:    ["Fintech", "Payments — Product Architecture", "Naranja X"],
          title:   "Zero-to-one creation of a connected payment ecosystem under technical and business constraints.",
          summary: "Fintech platform enabling merchants to collect payments through embedded checkout, payment links and financial dashboards.",
        },

        quickScan: {
          role:     "Sole Product Designer across three product surfaces",
          team:     "Product Owner · Frontend Engineers · Backend Engineers",
          timeline: "6 months",
          tools:    "Adobe XD · Scrum + Lean UX",
        },

        overview: {
          subheading: "A payment ecosystem built from scratch, balancing three competing forces.",
          tags:       ["Fintech", "Online Payments", "Zero-to-one"],
          body1:      "The project consisted of three connected product surfaces working together in a payment ecosystem: Web Checkout (buyer-facing payment interface), Payment Link (merchant tool for collecting payments), and NShops (financial dashboard for visibility and operations).",
          body2:      "As the sole design owner across the three products, I translated business requirements and technical constraints into a coherent product system — defining interaction models, aligning flows with backend realities, and ensuring operational logic, user clarity and business visibility coexisted.",
        },

        problem: {
          heading:   "Three products, three sets of friction — all compounding each other.",
          body:      "Web Checkout faced slow backend response times and severe UI customization limits imposed by Payment Gateway Lyra. Payment Link had single-attempt MVP logic: once a link expired after a failed payment, it was gone permanently. NShops had no centralized financial visibility and weak status communication — leaving merchants unable to understand the state of their operations.",
          quote:     "The challenge was not just UI. It was balancing Buyer Experience, Merchant Operations, and Business Visibility — simultaneously.",
          quoteAttr: "Design framing, project kickoff",
        },

        constraints: {
          heading: "Real technical constraints, real design decisions.",
          items: [
            { value: "CSS-only",      label: "Payment Gateway (Lyra) UI limits",   note: "No JavaScript access to the checkout interface — all customization through CSS alone." },
            { value: "Single-attempt", label: "Payment Link expiry logic",           note: "Links expired permanently after a failed payment — no recovery path for merchants." },
            { value: "No visibility", label: "NShops financial data",               note: "No centralized status communication across surfaces — merchants couldn't track operations." },
          ],
        },

        role: {
          subheading: "Sole Product Designer across three product surfaces",
          body1:      "I owned the end-to-end UX, UI, UX Writing and Research across Web Checkout, Payment Link and NShops. Responsibilities included defining interaction models and information architecture across surfaces, aligning flows with backend realities (API and BFF structures), and ensuring operational logic, user clarity and business visibility coexisted.",
          body2:      "I collaborated directly with backend engineers on API constraints and feasibility, operated across multiple Scrum squads while maintaining ecosystem coherence, and designed within Payment Gateway limitations without compromising system clarity.",
        },

        process: {
          heading: "From paper to production in structure, not speed.",
          steps: [
            {
              phase: "Move Fast with Structure",
              title: "Paper → Mid-Fi → Hi-Fi in under 3 days",
              body:  "For the initial Checkout, I defined the Happy Path early to align engineering and prioritized functional clarity over surface polish. Speed came from structure, not from skipping steps.",
            },
            {
              phase: "Design Within Constraints",
              title: "Rebuilding within a CSS-only gateway",
              body:  "The Payment Gateway (Lyra) allowed only CSS customization. I rebuilt the non-branded card flow entirely within those limits, preserving usability despite severe technical restrictions.",
            },
            {
              phase: "Ecosystem Thinking",
              title: "Detecting cascading friction",
              body:  "I identified that Payment Link expiration was creating cascading operational friction. The solution — Duplicate Payment Link — eliminated full manual recreation, enabling faster recovery after failed payments and improving operational scalability.",
            },
            {
              phase: "Research Validation",
              title: "7-user usability test with interactive prototypes",
              body:  "5 out of 7 users completed Payment Link creation via the Happy Path. 3 out of 7 completed payment confirmation successfully. The core insight: status communication across surfaces was unclear, directly informing Sprint priorities.",
            },
          ],
        },

        decisions: {
          heading: "Decisions that shaped the system.",
          items: [
            {
              title: "Prioritize Happy Path definition before visual refinement",
              body:  "Engineering alignment needed a clear functional flow first. Defining the Happy Path early allowed frontend and backend to move in parallel while visual polish came later — reducing costly rework.",
            },
            {
              title: "Design within CSS-only gateway constraints instead of requesting exceptions",
              body:  "Rather than escalating to push back on the Lyra integration, I mapped what was possible within CSS-only limits and rebuilt the non-branded card flow accordingly. This maintained momentum and delivered a working checkout without delay.",
            },
            {
              title: "Introduce Duplicate Payment Link as a structural fix, not just a feature",
              body:  "After detecting that link expiration was creating cascading operational friction, I framed Duplicate Payment Link as a systemic recovery mechanism. This positioned it as infrastructure, not convenience — which accelerated stakeholder buy-in.",
            },
          ],
        },

        impact: {
          heading: "A payment ecosystem where none previously existed.",
          metrics: [
            { value: "3",          label: "Connected product surfaces launched", note: "Checkout · Payment Link · NShops" },
            { value: "5/7",        label: "Users completed Payment Link creation", note: "7-user usability study, Happy Path" },
            { value: "3/7",        label: "Users completed payment confirmation", note: "Identified status ambiguity as key friction" },
            { value: "Zero→One",   label: "Product creation milestone", note: "First connected payment ecosystem at Naranja X" },
          ],
          statement: "After launch, structural optimization followed: Duplicate Payment Link eliminated full manual recreation after payment failure, and a clearer cross-surface status hierarchy reduced systemic friction and increased operational coherence.",
        },

        learnings: {
          heading: "What this case signals.",
          items: [
            "Lead Designer: Strong execution under constraints with structured thinking — able to move fast without losing coherence across a complex system.",
            "Head of Product: Understands ecosystem impact and trade-offs — design decisions are evaluated based on how they balance multiple dimensions simultaneously.",
            "Founder: Capable of owning complex product surfaces with business awareness — from zero-to-one creation to post-launch structural optimization.",
          ],
        },

        nav: {
          prev: { slug: "telecom-legacy-refactor", title: "Telecom Legacy Platform Refactor" },
          next: { slug: "ecommerce-conversion",    title: "221% Q1 Revenue: E-commerce Conversion" },
        },
      },

      // -----------------------------------------------------------------------
      // CASE 2 — ECOMMERCE / MONTIRONI AUTOMOTIVE
      // -----------------------------------------------------------------------
      {
        slug: "ecommerce-conversion",

        card: {
          tags:    ["E-commerce", "Conversion", "UX Strategy"],
          title:   "221% Q1 Revenue Increase Driven Purely by UX Intervention",
          excerpt: "Redesigned the tire inquiry flow and introduced WhatsApp as a high-intent channel for Montironi Automotive. Result: 221% Q1 revenue growth with no pricing changes, no campaigns, no external drivers.",
        },

        meta: {
          title:       "Montironi Automotive — 221% Revenue · Lenin Cuadra",
          description: "221% Q1 revenue increase driven purely by UX intervention. A case study by Lenin Cuadra.",
        },

        hero: {
          tags:    ["E-commerce", "Conversion Optimization", "Montironi Automotive"],
          title:   "221% Q1 Revenue Increase Driven Purely by UX Intervention.",
          summary: "Automotive tire e-commerce redesign focused on cognitive friction reduction and channel strategy — with no pricing changes, no campaign changes, no external growth drivers.",
        },

        quickScan: {
          role:     "Product Designer — UX Redesign & Channel Strategy",
          team:     "Business stakeholders · Development team",
          timeline: "Q1 project cycle",
          tools:    "UX redesign · Conversion analysis · Channel strategy",
        },

        overview: {
          subheading: "A conversion problem disguised as a sales problem.",
          tags:       ["E-commerce", "Conversion Optimization", "Channel Strategy"],
          body1:      "Montironi Automotive's tire sales were underperforming due to a complex inquiry flow and high cognitive friction across the website. The objective was to improve conversion without altering pricing, campaigns or inventory strategy.",
          body2:      "The scope was a full website UX redesign plus conversion channel strategy — treating the conversion problem as a UX problem, not a pricing or marketing one.",
        },

        problem: {
          heading:   "Friction was hiding revenue.",
          body:      "The original inquiry flow required excessive cognitive effort, forced users through a rigid multi-step structure, and relied exclusively on traditional web form submission. The result: high drop-off during form completion, slow communication between buyers and the business, and low conversion efficiency.",
          quote:     "The problem wasn't the product. It was the path to buying it.",
          quoteAttr: "Design framing, project kickoff",
        },

        constraints: {
          heading: "Change only what creates friction.",
          items: [
            { value: "No pricing changes", label: "Business constraint",  note: "UX must deliver growth without touching pricing strategy." },
            { value: "No new campaigns",   label: "Marketing constraint", note: "Conversion improvement must come purely from UX." },
            { value: "Existing inventory", label: "Product constraint",   note: "No changes to product offering or catalog structure." },
          ],
        },

        role: {
          subheading: "Product Designer — full UX redesign and channel strategy",
          body1:      "I led the full website UX redesign, responsible for identifying friction points in the inquiry flow, simplifying the information hierarchy, and reducing cognitive load across the purchase path.",
          body2:      "Beyond interface design, I proposed and integrated WhatsApp as a high-intent communication channel — a strategic decision that redefined how buyers and the business interacted during early market adoption.",
        },

        process: {
          heading: "Diagnose, simplify, redirect.",
          steps: [
            {
              phase: "Diagnosis",
              title: "Mapping cognitive friction in the inquiry flow",
              body:  "I analyzed the existing inquiry path to identify where users were dropping off. The rigid multi-step form was asking for information at the wrong moments, creating unnecessary friction before users had decided to buy.",
            },
            {
              phase: "Redesign",
              title: "Simplifying structure and reducing cognitive load",
              body:  "I simplified the inquiry structure, reduced unnecessary inputs, improved information hierarchy and clarity, and optimized the form completion flow — removing every step that wasn't directly necessary for the buyer.",
            },
            {
              phase: "Channel Strategy",
              title: "Introducing WhatsApp as a high-intent entry point",
              body:  "I proposed integrating WhatsApp during early market adoption to enable faster buyer-business interaction, reduce abandonment after initial interest, and allow real-time clarification for complex tire specifications.",
            },
            {
              phase: "Validation",
              title: "Q1 vs Q1 year-over-year measurement",
              body:  "Impact was measured as Q1 vs Q1 year-over-year, with no pricing changes, no campaign changes, and no external growth drivers — isolating the UX intervention as the sole variable.",
            },
          ],
        },

        decisions: {
          heading: "The decisions that drove the 221%.",
          items: [
            {
              title: "Treat conversion as a UX problem, not a pricing problem",
              body:  "The business assumption was that sales were underperforming due to pricing or competition. I reframed the diagnosis: the path to purchase was the problem, not the product. This positioned UX redesign as the primary lever — before any pricing or campaign changes were considered.",
            },
            {
              title: "Reduce inputs, not just improve aesthetics",
              body:  "Rather than redesigning the form visually, I removed steps that were creating friction without adding value for the buyer. Each removed input was a decision: what does the business actually need at this stage of the journey?",
            },
            {
              title: "Introduce WhatsApp as a strategic channel, not an add-on",
              body:  "WhatsApp wasn't added as a convenience feature. It was positioned as the primary high-intent channel during a market phase where real-time communication reduced drop-off more effectively than any form optimization could.",
            },
          ],
        },

        impact: {
          heading: "221% revenue growth. Zero external drivers.",
          metrics: [
            { value: "221%", label: "Q1 revenue increase",    note: "Q1 vs Q1 year-over-year" },
            { value: "0",    label: "Pricing changes",        note: "Growth driven purely by UX" },
            { value: "0",    label: "Campaign changes",       note: "No external growth drivers" },
            { value: "↓",    label: "Drop-off during inquiry", note: "Reduced by friction simplification and channel strategy" },
          ],
          statement: "Impact was driven exclusively by UX simplification and channel redesign. The 221% Q1 revenue increase was measured year-over-year with no pricing changes, no campaign changes, and no external growth drivers.",
        },

        learnings: {
          heading: "What this case demonstrates.",
          items: [
            "Ability to identify revenue bottlenecks by diagnosing user journey friction — not just interface problems.",
            "Strategic thinking beyond interface design: channel strategy, conversion dynamics, and behavioral friction are design decisions.",
            "Execution focused on measurable business impact: when the only variable is UX, results are attribution-clear.",
          ],
        },

        nav: {
          prev: { slug: "fintech-ecosystem",      title: "Zero-to-one: Connected Payment Ecosystem" },
          next: { slug: "telecom-legacy-refactor", title: "Telecom Legacy Platform Refactor" },
        },
      },

      // -----------------------------------------------------------------------
      // CASE 3 — TELECOM / LEGACY REFACTOR
      // -----------------------------------------------------------------------
      {
        slug: "telecom-legacy-refactor",

        card: {
          tags:    ["Telecom", "Systems Design", "Design Systems"],
          title:   "Refactoring a Legacy Telecom Platform for Structural Clarity",
          excerpt: "Led the structural refactor of a live telecom platform — from fragmented IA and inconsistent navigation to a coherent v2 architecture aligned with the new corporate Design System.",
        },

        meta: {
          title:       "Telecom Legacy Refactor · Lenin Cuadra",
          description: "Refactoring a legacy telecom platform for structural clarity and system consistency. A case study by Lenin Cuadra.",
        },

        hero: {
          tags:    ["Telecom", "Systems Design", "Platform Refactor"],
          title:   "Refactoring a Legacy Telecom Platform for Structural Clarity and System Consistency.",
          summary: "A live telecom application in production. The objective was not cosmetic redesign — it was structural refactoring of information architecture, navigation, and Design System alignment.",
        },

        quickScan: {
          role:     "Lead Designer — Structural Refactor",
          team:     "UX Lead · Engineering team",
          timeline: "Full v1 → v2 transition",
          tools:    "Design System · IA restructuring · Usability testing",
        },

        overview: {
          subheading: "A platform that had outgrown its original architecture.",
          tags:       ["Telecom", "Legacy Refactor", "Design System Integration"],
          body1:      "A live telecom application in production with real users had accumulated structural debt over time: fragmented information architecture, inconsistent navigation patterns, and misalignment with the company's new Design System.",
          body2:      "The objective was not cosmetic redesign. It was structural refactoring — a full transition from version 1 to version 2, without incremental public releases.",
        },

        problem: {
          heading:   "The system required users to guess, not recognize.",
          body:      "The platform suffered from poorly structured information hierarchy, navigation that required users to guess rather than recognize, iconography inconsistencies that reduced comprehension, and divergence from the newly adopted Design System used across other company products. This created cognitive friction and reduced task clarity in a product already in active use.",
          quote:     "The problem wasn't visual. It was structural. The architecture itself was creating cognitive friction.",
          quoteAttr: "Design framing, refactor kickoff",
        },

        constraints: {
          heading: "Refactoring live — without disrupting users.",
          items: [
            { value: "Live system",   label: "No staging environment",    note: "Refactor had to be planned as a full v1 → v2 transition with no intermediate public state." },
            { value: "Legacy IA",     label: "Accumulated structural debt", note: "Fragmented groupings and implicit module dependencies made partial fixes ineffective." },
            { value: "Design System", label: "New corporate standard",     note: "Adoption required alignment across iconography, components, and interaction patterns." },
          ],
        },

        role: {
          subheading: "Lead Designer on a full-version structural refactor",
          body1:      "I led the structural refactor initiative, responsible for the complete reorganization of information architecture, redefining the navigation model, and clarifying grouping logic and content prioritization across the platform.",
          body2:      "I collaborated closely with a UX Lead and coordinated design decisions with engineering constraints throughout the transition. This was a full v1 → v2 transition — not an incremental update.",
        },

        process: {
          heading: "Restructure first. Standardize second. Validate third.",
          steps: [
            {
              phase: "Architecture Restructuring",
              title: "Full IA reorganization: v1 → v2",
              body:  "I completely reorganized the information architecture: redefined the navigation model, clarified grouping logic, and established explicit module separation. The goal was to eliminate the 'guess rather than recognize' pattern that had accumulated in the legacy system.",
            },
            {
              phase: "Design System Integration",
              title: "Applying corporate Design System standards",
              body:  "I applied the new corporate Design System across the platform — standardizing components, interaction patterns, and iconography. Alignment with the broader product ecosystem reduced the learning curve for users already familiar with other company products.",
            },
            {
              phase: "Visual Comprehension",
              title: "Standardizing iconography for recognition",
              body:  "The legacy icon set had inconsistent metaphors and lower recognition accuracy. By adopting the Design System iconography, I improved recognition rates, standardized the visual language, and aligned the product with the broader company ecosystem.",
            },
            {
              phase: "Validation",
              title: "Usability testing to confirm structural improvements",
              body:  "Usability testing validated the refactor: increased task success rates, improved clarity in navigation, and better icon comprehension under the new Design System confirmed that structural simplification improved real user interaction with the live system.",
            },
          ],
        },

        decisions: {
          heading: "The structural choices behind the refactor.",
          items: [
            {
              title: "Full v1 → v2 transition instead of incremental updates",
              body:  "Incremental updates to a structurally broken system would have created a hybrid architecture that was harder to maintain and worse for users during the transition period. A full version transition was riskier but produced a coherent result — and avoided prolonged user confusion.",
            },
            {
              title: "Adopt the corporate Design System, not a local visual fix",
              body:  "The temptation was to create a local icon set or component library that fit the existing IA. Instead, I aligned with the corporate Design System — which required deeper IA restructuring but produced ecosystem consistency and reduced future maintenance overhead.",
            },
            {
              title: "Prioritize navigation clarity over feature parity",
              body:  "During the refactor, some legacy features required relocation or de-prioritization to achieve navigation clarity. I made explicit decisions about what deserved primary navigation access vs. what should be nested — based on task frequency and user mental models, not legacy placement.",
            },
          ],
        },

        impact: {
          heading: "Structural clarity in a live, complex system.",
          metrics: [
            { value: "↑", label: "Task success rates",      note: "Validated by usability testing post-launch" },
            { value: "↑", label: "Navigation clarity",      note: "Users recognized paths instead of guessing" },
            { value: "↑", label: "Icon comprehension",      note: "Design System iconography outperformed legacy set" },
            { value: "v2", label: "Full platform version",  note: "Complete IA restructure without incremental releases" },
          ],
          statement: "The refactor demonstrated that structural design interventions in live systems can deliver measurable UX improvement — without requiring a product rebuild or user-facing disruption during the transition.",
        },

        learnings: {
          heading: "What this case demonstrates.",
          items: [
            "Ability to intervene in legacy systems without disrupting live operations — structural refactoring is a design discipline, not just a development one.",
            "Structural thinking applied to complex, constraint-driven environments: the architecture itself was the problem, and the architecture had to be the solution.",
            "Strategic application of Design Systems beyond visual consistency — Design System adoption here was an architectural decision that reduced cognitive debt across the product ecosystem.",
            "Leadership in high-risk, full-version refactoring initiatives: coordinating design and engineering decisions across a complex transition without incremental releases.",
          ],
        },

        nav: {
          prev: { slug: "ecommerce-conversion", title: "221% Q1 Revenue: E-commerce Conversion" },
          next: { slug: "fintech-ecosystem",    title: "Zero-to-one: Connected Payment Ecosystem" },
        },
      },

    ], // end cases[]

  }, // end en{}

  // ---------------------------------------------------------------------------
  // ESPAÑOL — agregar traducciones cuando estén listas
  // Duplica la estructura de `en` con el contenido traducido.
  // ---------------------------------------------------------------------------
  es: {

    site: {
      designerName:  "Lenin Cuadra",
      role:          "Product Designer",
      email:         "leninxperience@gmail.com",
      linkedinUrl:   "https://www.linkedin.com/in/lenincuadra/",
      resumeUrl:     {
        en: "assets/cv/Lenin_Cuadra__Product_UX_UI_Designer_CV.pdf",
        es: "assets/cv/Lenin_Cuadra__Product_UX_UI_Designer_CV_ES.pdf",
      },
      lang:          "es",
    },

    ui: {
      nav:    { work: "Trabajos",    about: "Sobre mí", contact: "Contacto" },
      footer: { work: "Trabajos",    about: "Sobre mí", linkedin: "LinkedIn", resume: "CV", builtWith: "Diseñado y construido con cuidado." },
      hero:   { cta: "Ver trabajos", scroll: "Scroll" },
      case:   { readMore: "Ver caso", featuredLabel: "Destacado", gridLabel: "Trabajos seleccionados" },
    },

    home: {
      hero: {
        eyebrow:   "Abierto a nuevas oportunidades",
        firstName: "Lenin.",
        lastName:  "Cuadra",
        role:      "Product Designer & Pensamiento Sistémico",
        summary:   "Diseño sistemas de producto que operan en la intersección de la estrategia de negocio, las restricciones técnicas y el comportamiento del usuario. Desde ecosistemas fintech de cero a uno hasta un crecimiento de conversión del 221% — mi trabajo convierte la complejidad operacional en resultados coherentes y medibles.",
      },
      work: {
        heading: "Trabajo seleccionado enfocado en sistemas, claridad y resultados medibles.",
      },
      about: {
        heading:    "Diseño sistemas donde las necesidades del usuario, las restricciones técnicas y los objetivos de negocio se alinean.",
        paragraphs: [
          "Soy product designer especializado en sistemas complejos, plataformas y flujos donde la claridad y la estructura son lo que más importa. Mi trabajo típicamente implica rediseñar experiencias fragmentadas en soluciones coherentes y escalables.",
          "Abordo el diseño a través de las restricciones. En lugar de tratar las limitaciones como bloqueos, las uso para dar forma a las decisiones temprano, asegurando que lo que se diseña pueda construirse y mantenerse en el tiempo.",
          "Trabajo estrechamente con equipos de ingeniería y producto para definir sistemas, no solo pantallas. Esto incluye patrones de interacción, modelos de estado y la lógica detrás de la UI, apuntando a la consistencia entre superficies y la escalabilidad a largo plazo.",
        ],
        skills: [
          "Diseño de producto zero-to-one",
          "Refactorización de sistemas legacy",
          "Optimización de conversión",
          "Sistemas de diseño",
          "Investigación y validación UX",
          "Pensamiento de producto",
        ],
        vennCenter: "Yo",
      },
      contact: {
        heading: "Construyamos algo con sentido.",
        body:    "Estoy abierto a roles de product design, colaboraciones y conversaciones sobre sistemas complejos, diseño de plataformas y experiencias escalables.",
      },
    },

    cases: [

      // -----------------------------------------------------------------------
      // CASO 1 — FINTECH / NARANJA X
      // -----------------------------------------------------------------------
      {
        slug:     "fintech-ecosystem",
        featured: true,

        images: {
          cover:     "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
          hero:      "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
          process1:  "assets/images/fintech/1-3—web checkout/1-nx-wireframes.png",
          process2:  "assets/images/fintech/2-3—Payment link/3-nx-proto-wireframes.gif",
          decisions: "assets/images/fintech/3-3—Nshop/3-screens01.png",
          screens: [
            { src: "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.mp4",       poster: "assets/images/fintech/1-3—web checkout/0-nx-portada.png",    label: "Web Checkout" },
            { src: "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.mp4", poster: "assets/images/fintech/2-3—Payment link/0-nx-description.png", label: "Payment Link" },
            { src: "assets/images/fintech/3-3—Nshop/9-financial-dashboard.mp4",         poster: "assets/images/fintech/3-3—Nshop/3-screens01.png",             label: "Financial Dashboard" },
          ],
        },

        card: {
          tags:    ["Fintech", "Arquitectura de Producto", "Pagos"],
          title:   "De cero a uno: Ecosistema de Pagos Conectado",
          excerpt: "Diseñé la primera versión cohesiva de un ecosistema fintech de tres productos para Naranja X, habilitando a los comerciantes a cobrar pagos a través de checkout embebido, links de pago y dashboards financieros.",
        },

        meta: {
          title:       "Naranja X — Ecosistema Fintech · Lenin Cuadra",
          description: "Creación de cero a uno de un ecosistema de pagos conectado. Un caso de estudio de Lenin Cuadra.",
        },

        hero: {
          tags:    ["Fintech", "Pagos — Arquitectura de Producto", "Naranja X"],
          title:   "Creación de cero a uno de un ecosistema de pagos conectado bajo restricciones técnicas y de negocio.",
          summary: "Plataforma fintech que permite a los comerciantes cobrar pagos a través de checkout embebido, links de pago y dashboards financieros.",
        },

        quickScan: {
          role:     "Product Designer único en tres superficies de producto",
          team:     "Product Owner · Ingenieros Frontend · Ingenieros Backend",
          timeline: "6 meses",
          tools:    "Adobe XD · Scrum + Lean UX",
        },

        overview: {
          subheading: "Un ecosistema de pagos construido desde cero, equilibrando tres fuerzas en competencia.",
          tags:       ["Fintech", "Pagos Online", "Zero-to-one"],
          body1:      "El proyecto consistió en tres superficies de producto conectadas que funcionaban juntas en un ecosistema de pagos: Web Checkout (interfaz de pago orientada al comprador), Payment Link (herramienta para comerciantes para cobrar pagos) y NShops (dashboard financiero para visibilidad y operaciones).",
          body2:      "Como único responsable de diseño en los tres productos, traduje los requisitos de negocio y las restricciones técnicas en un sistema de producto coherente — definiendo modelos de interacción, alineando flujos con las realidades del backend, y asegurando que la lógica operacional, la claridad para el usuario y la visibilidad del negocio coexistieran.",
        },

        problem: {
          heading:   "Tres productos, tres fuentes de fricción — todas amplificándose entre sí.",
          body:      "Web Checkout enfrentaba tiempos de respuesta lentos del backend y severas limitaciones de personalización de UI impuestas por el Payment Gateway Lyra. Payment Link tenía lógica MVP de intento único: una vez que el link expiraba tras un pago fallido, desaparecía permanentemente. NShops no tenía visibilidad financiera centralizada y una comunicación de estado débil — dejando a los comerciantes sin capacidad de entender el estado de sus operaciones.",
          quote:     "El desafío no era solo la UI. Era equilibrar la Experiencia del Comprador, las Operaciones del Comerciante y la Visibilidad del Negocio — simultáneamente.",
          quoteAttr: "Encuadre de diseño, kickoff del proyecto",
        },

        constraints: {
          heading: "Restricciones técnicas reales, decisiones de diseño reales.",
          items: [
            { value: "Solo CSS",       label: "Límites de UI del Payment Gateway (Lyra)", note: "Sin acceso a JavaScript en la interfaz de checkout — toda la personalización solo a través de CSS." },
            { value: "Intento único",  label: "Lógica de expiración del Payment Link",    note: "Los links expiraban permanentemente tras un pago fallido — sin ruta de recuperación para los comerciantes." },
            { value: "Sin visibilidad", label: "Datos financieros de NShops",              note: "Sin comunicación de estado centralizada entre superficies — los comerciantes no podían rastrear sus operaciones." },
          ],
        },

        role: {
          subheading: "Product Designer único en tres superficies de producto",
          body1:      "Lideré el UX, UI, UX Writing e Investigación de extremo a extremo en Web Checkout, Payment Link y NShops. Las responsabilidades incluían definir modelos de interacción y arquitectura de información entre superficies, alinear flujos con las realidades del backend (estructuras API y BFF), y asegurar que la lógica operacional, la claridad para el usuario y la visibilidad del negocio coexistieran.",
          body2:      "Colaboré directamente con los ingenieros de backend en restricciones de API y factibilidad, operé en múltiples squads Scrum manteniendo la coherencia del ecosistema, y diseñé dentro de las limitaciones del Payment Gateway sin comprometer la claridad del sistema.",
        },

        process: {
          heading: "Del papel a producción con estructura, no con velocidad.",
          steps: [
            {
              phase: "Avanzar rápido con estructura",
              title: "Papel → Mid-Fi → Hi-Fi en menos de 3 días",
              body:  "Para el Checkout inicial, definí el Happy Path temprano para alinear con ingeniería y prioricé la claridad funcional por encima del pulido superficial. La velocidad vino de la estructura, no de saltarse pasos.",
            },
            {
              phase: "Diseñar dentro de restricciones",
              title: "Reconstruyendo dentro de un gateway solo con CSS",
              body:  "El Payment Gateway (Lyra) solo permitía personalización CSS. Reconstruí el flujo de tarjeta sin marca completamente dentro de esos límites, preservando la usabilidad a pesar de las severas restricciones técnicas.",
            },
            {
              phase: "Pensamiento de ecosistema",
              title: "Detectando fricción en cascada",
              body:  "Identifiqué que la expiración del Payment Link estaba creando fricción operacional en cascada. La solución — Duplicar Payment Link — eliminó la recreación manual completa, habilitando una recuperación más rápida tras pagos fallidos y mejorando la escalabilidad operacional.",
            },
            {
              phase: "Validación por Investigación",
              title: "Test de usabilidad con 7 usuarios con prototipos interactivos",
              body:  "5 de 7 usuarios completaron la creación del Payment Link por el Happy Path. 3 de 7 completaron la confirmación de pago exitosamente. El insight clave: la comunicación de estado entre superficies era poco clara, informando directamente las prioridades del Sprint.",
            },
          ],
        },

        decisions: {
          heading: "Decisiones que moldearon el sistema.",
          items: [
            {
              title: "Priorizar la definición del Happy Path antes del refinamiento visual",
              body:  "La alineación con ingeniería necesitaba primero un flujo funcional claro. Definir el Happy Path temprano permitió que frontend y backend avanzaran en paralelo mientras el pulido visual llegaba después — reduciendo el trabajo costoso de rehacer.",
            },
            {
              title: "Diseñar dentro de las restricciones de solo CSS en lugar de solicitar excepciones",
              body:  "En lugar de escalar para rechazar la integración con Lyra, mapeé lo que era posible dentro de los límites de solo CSS y reconstruí el flujo de tarjeta sin marca. Esto mantuvo el impulso y entregó un checkout funcional sin demoras.",
            },
            {
              title: "Introducir Duplicar Payment Link como una solución estructural, no solo una funcionalidad",
              body:  "Después de detectar que la expiración del link estaba creando fricción operacional en cascada, enmarcé Duplicar Payment Link como un mecanismo de recuperación sistémica. Esto lo posicionó como infraestructura, no como conveniencia — lo que aceleró la aprobación de los stakeholders.",
            },
          ],
        },

        impact: {
          heading: "Un ecosistema de pagos donde antes no existía ninguno.",
          metrics: [
            { value: "3",          label: "Superficies de producto conectadas lanzadas", note: "Checkout · Payment Link · NShops" },
            { value: "5/7",        label: "Usuarios completaron la creación del Payment Link", note: "Estudio de usabilidad con 7 usuarios, Happy Path" },
            { value: "3/7",        label: "Usuarios completaron la confirmación de pago", note: "Identificó la ambigüedad de estado como fricción clave" },
            { value: "Cero→Uno",   label: "Hito de creación de producto", note: "Primer ecosistema de pagos conectado en Naranja X" },
          ],
          statement: "Tras el lanzamiento, siguió la optimización estructural: Duplicar Payment Link eliminó la recreación manual completa tras un pago fallido, y una jerarquía de estado más clara entre superficies redujo la fricción sistémica y aumentó la coherencia operacional.",
        },

        learnings: {
          heading: "Lo que este caso señala.",
          items: [
            "Lead Designer: Sólida ejecución bajo restricciones con pensamiento estructurado — capacidad de avanzar rápido sin perder coherencia en un sistema complejo.",
            "Head of Product: Comprende el impacto del ecosistema y los trade-offs — las decisiones de diseño se evalúan en función de cómo equilibran múltiples dimensiones simultáneamente.",
            "Founder: Capaz de liderar superficies de producto complejas con consciencia de negocio — desde la creación zero-to-one hasta la optimización estructural post-lanzamiento.",
          ],
        },

        nav: {
          prev: { slug: "telecom-legacy-refactor", title: "Refactoring de Plataforma Telecom Legada" },
          next: { slug: "ecommerce-conversion",    title: "221% Q1 en Ingresos: Conversión E-commerce" },
        },
      },

      // -----------------------------------------------------------------------
      // CASO 2 — ECOMMERCE / MONTIRONI AUTOMOTIVE
      // -----------------------------------------------------------------------
      {
        slug: "ecommerce-conversion",

        card: {
          tags:    ["E-commerce", "Conversión", "Estrategia UX"],
          title:   "Incremento del 221% en Ingresos Q1 Impulsado Únicamente por Intervención UX",
          excerpt: "Rediseñé el flujo de consulta de neumáticos e introduje WhatsApp como canal de alta intención para Montironi Automotive. Resultado: 221% de crecimiento de ingresos en Q1 sin cambios de precios, sin campañas, sin factores externos.",
        },

        meta: {
          title:       "Montironi Automotive — 221% en Ingresos · Lenin Cuadra",
          description: "Incremento del 221% en ingresos Q1 impulsado únicamente por intervención UX. Un caso de estudio de Lenin Cuadra.",
        },

        hero: {
          tags:    ["E-commerce", "Optimización de Conversión", "Montironi Automotive"],
          title:   "Incremento del 221% en Ingresos Q1 Impulsado Únicamente por Intervención UX.",
          summary: "Rediseño de e-commerce de neumáticos automotrices enfocado en la reducción de fricción cognitiva y estrategia de canal — sin cambios de precios, sin cambios de campaña, sin factores de crecimiento externos.",
        },

        quickScan: {
          role:     "Product Designer — Rediseño UX y Estrategia de Canal",
          team:     "Stakeholders del negocio · Equipo de desarrollo",
          timeline: "Ciclo de proyecto Q1",
          tools:    "Rediseño UX · Análisis de conversión · Estrategia de canal",
        },

        overview: {
          subheading: "Un problema de conversión disfrazado de problema de ventas.",
          tags:       ["E-commerce", "Optimización de Conversión", "Estrategia de Canal"],
          body1:      "Las ventas de neumáticos de Montironi Automotive tenían bajo rendimiento debido a un flujo de consulta complejo y alta fricción cognitiva en todo el sitio web. El objetivo era mejorar la conversión sin alterar precios, campañas ni estrategia de inventario.",
          body2:      "El alcance fue un rediseño UX completo del sitio web más estrategia de canal de conversión — tratando el problema de conversión como un problema de UX, no de precios ni marketing.",
        },

        problem: {
          heading:   "La fricción estaba ocultando ingresos.",
          body:      "El flujo de consulta original requería un esfuerzo cognitivo excesivo, obligaba a los usuarios a atravesar una estructura rígida de múltiples pasos, y dependía exclusivamente del envío de formularios web tradicionales. El resultado: alto abandono durante la completación del formulario, comunicación lenta entre compradores y el negocio, y baja eficiencia de conversión.",
          quote:     "El problema no era el producto. Era el camino para comprarlo.",
          quoteAttr: "Encuadre de diseño, kickoff del proyecto",
        },

        constraints: {
          heading: "Cambiar solo lo que genera fricción.",
          items: [
            { value: "Sin cambios de precio",    label: "Restricción de negocio",    note: "El UX debe generar crecimiento sin tocar la estrategia de precios." },
            { value: "Sin nuevas campañas",      label: "Restricción de marketing",  note: "La mejora de conversión debe venir puramente del UX." },
            { value: "Inventario existente",     label: "Restricción de producto",   note: "Sin cambios en la oferta de producto ni en la estructura del catálogo." },
          ],
        },

        role: {
          subheading: "Product Designer — rediseño UX completo y estrategia de canal",
          body1:      "Lideré el rediseño UX completo del sitio web, responsable de identificar los puntos de fricción en el flujo de consulta, simplificar la jerarquía de información y reducir la carga cognitiva a lo largo del camino de compra.",
          body2:      "Más allá del diseño de interfaz, propuse e integré WhatsApp como un canal de comunicación de alta intención — una decisión estratégica que redefinió cómo los compradores y el negocio interactuaban durante la adopción temprana del mercado.",
        },

        process: {
          heading: "Diagnosticar, simplificar, redirigir.",
          steps: [
            {
              phase: "Diagnóstico",
              title: "Mapeando la fricción cognitiva en el flujo de consulta",
              body:  "Analicé el camino de consulta existente para identificar dónde los usuarios abandonaban. El formulario rígido de múltiples pasos solicitaba información en los momentos equivocados, creando fricción innecesaria antes de que los usuarios hubieran decidido comprar.",
            },
            {
              phase: "Rediseño",
              title: "Simplificando la estructura y reduciendo la carga cognitiva",
              body:  "Simplifiqué la estructura de consulta, reduje los inputs innecesarios, mejoré la jerarquía de información y la claridad, y optimicé el flujo de completación del formulario — eliminando cada paso que no era directamente necesario para el comprador.",
            },
            {
              phase: "Estrategia de Canal",
              title: "Introduciendo WhatsApp como punto de entrada de alta intención",
              body:  "Propuse integrar WhatsApp durante la adopción temprana del mercado para habilitar una interacción más rápida entre comprador y negocio, reducir el abandono tras el interés inicial, y permitir la aclaración en tiempo real de especificaciones complejas de neumáticos.",
            },
            {
              phase: "Validación",
              title: "Medición Q1 vs Q1 interanual",
              body:  "El impacto se midió como Q1 vs Q1 interanual, sin cambios de precios, sin cambios de campaña, y sin factores de crecimiento externos — aislando la intervención UX como la única variable.",
            },
          ],
        },

        decisions: {
          heading: "Las decisiones que impulsaron el 221%.",
          items: [
            {
              title: "Tratar la conversión como un problema de UX, no de precios",
              body:  "La suposición del negocio era que las ventas tenían bajo rendimiento por precios o competencia. Reencuadré el diagnóstico: el camino hacia la compra era el problema, no el producto. Esto posicionó el rediseño UX como la palanca principal — antes de que se consideraran cambios de precios o campañas.",
            },
            {
              title: "Reducir inputs, no solo mejorar la estética",
              body:  "En lugar de rediseñar el formulario visualmente, eliminé los pasos que creaban fricción sin agregar valor para el comprador. Cada input eliminado fue una decisión: ¿qué necesita realmente el negocio en esta etapa del journey?",
            },
            {
              title: "Introducir WhatsApp como canal estratégico, no como un complemento",
              body:  "WhatsApp no se agregó como una función de conveniencia. Se posicionó como el canal principal de alta intención durante una fase del mercado donde la comunicación en tiempo real reducía el abandono más efectivamente que cualquier optimización de formulario.",
            },
          ],
        },

        impact: {
          heading: "221% de crecimiento en ingresos. Cero factores externos.",
          metrics: [
            { value: "221%", label: "Incremento de ingresos Q1",     note: "Q1 vs Q1 interanual" },
            { value: "0",    label: "Cambios de precio",              note: "Crecimiento impulsado puramente por UX" },
            { value: "0",    label: "Cambios de campaña",             note: "Sin factores de crecimiento externos" },
            { value: "↓",    label: "Abandono durante la consulta",   note: "Reducido por simplificación de fricción y estrategia de canal" },
          ],
          statement: "El impacto fue impulsado exclusivamente por la simplificación UX y el rediseño del canal. El incremento del 221% en ingresos Q1 se midió interanualmente sin cambios de precios, sin cambios de campaña, y sin factores de crecimiento externos.",
        },

        learnings: {
          heading: "Lo que este caso demuestra.",
          items: [
            "Capacidad de identificar cuellos de botella de ingresos diagnosticando la fricción en el journey del usuario — no solo problemas de interfaz.",
            "Pensamiento estratégico más allá del diseño de interfaz: la estrategia de canal, las dinámicas de conversión y la fricción de comportamiento son decisiones de diseño.",
            "Ejecución enfocada en impacto de negocio medible: cuando la única variable es el UX, los resultados tienen atribución clara.",
          ],
        },

        nav: {
          prev: { slug: "fintech-ecosystem",       title: "De cero a uno: Ecosistema de Pagos Conectado" },
          next: { slug: "telecom-legacy-refactor",  title: "Refactoring de Plataforma Telecom Legada" },
        },
      },

      // -----------------------------------------------------------------------
      // CASO 3 — TELECOM / LEGACY REFACTOR
      // -----------------------------------------------------------------------
      {
        slug: "telecom-legacy-refactor",

        card: {
          tags:    ["Telecom", "Diseño de Sistemas", "Design Systems"],
          title:   "Refactoring de una Plataforma Telecom Legada para Claridad Estructural",
          excerpt: "Lideré el refactoring estructural de una plataforma telecom en producción — de una IA fragmentada y navegación inconsistente a una arquitectura v2 coherente alineada con el nuevo Design System corporativo.",
        },

        meta: {
          title:       "Refactoring Telecom Legado · Lenin Cuadra",
          description: "Refactoring de una plataforma telecom legada para claridad estructural y consistencia del sistema. Un caso de estudio de Lenin Cuadra.",
        },

        hero: {
          tags:    ["Telecom", "Diseño de Sistemas", "Refactoring de Plataforma"],
          title:   "Refactoring de una Plataforma Telecom Legada para Claridad Estructural y Consistencia del Sistema.",
          summary: "Una aplicación telecom activa en producción. El objetivo no era un rediseño cosmético — era el refactoring estructural de la arquitectura de información, la navegación y la alineación con el Design System.",
        },

        quickScan: {
          role:     "Lead Designer — Refactoring Estructural",
          team:     "UX Lead · Equipo de ingeniería",
          timeline: "Transición completa v1 → v2",
          tools:    "Design System · Reestructuración de IA · Testing de usabilidad",
        },

        overview: {
          subheading: "Una plataforma que había superado su arquitectura original.",
          tags:       ["Telecom", "Refactoring Legado", "Integración de Design System"],
          body1:      "Una aplicación telecom activa en producción con usuarios reales había acumulado deuda estructural con el tiempo: arquitectura de información fragmentada, patrones de navegación inconsistentes y desalineación con el nuevo Design System de la empresa.",
          body2:      "El objetivo no era un rediseño cosmético. Era un refactoring estructural — una transición completa de la versión 1 a la versión 2, sin lanzamientos públicos incrementales.",
        },

        problem: {
          heading:   "El sistema requería que los usuarios adivinaran, no que reconocieran.",
          body:      "La plataforma sufría de una jerarquía de información mal estructurada, navegación que requería que los usuarios adivinaran en lugar de reconocer, inconsistencias de iconografía que reducían la comprensión, y divergencia del Design System recién adoptado usado en otros productos de la empresa. Esto creaba fricción cognitiva y reducía la claridad de las tareas en un producto ya en uso activo.",
          quote:     "El problema no era visual. Era estructural. La arquitectura en sí estaba creando fricción cognitiva.",
          quoteAttr: "Encuadre de diseño, kickoff del refactoring",
        },

        constraints: {
          heading: "Refactoring en vivo — sin interrumpir a los usuarios.",
          items: [
            { value: "Sistema en vivo",  label: "Sin entorno de staging",        note: "El refactoring debía planificarse como una transición completa v1 → v2 sin estado público intermedio." },
            { value: "IA legada",        label: "Deuda estructural acumulada",   note: "Los agrupamientos fragmentados y las dependencias implícitas de módulos hacían que las correcciones parciales fueran ineficaces." },
            { value: "Design System",    label: "Nuevo estándar corporativo",    note: "La adopción requería alineación en iconografía, componentes y patrones de interacción." },
          ],
        },

        role: {
          subheading: "Lead Designer en un refactoring estructural de versión completa",
          body1:      "Lideré la iniciativa de refactoring estructural, responsable de la reorganización completa de la arquitectura de información, redefinir el modelo de navegación, y clarificar la lógica de agrupación y la priorización de contenido en toda la plataforma.",
          body2:      "Colaboré estrechamente con un UX Lead y coordiné las decisiones de diseño con las restricciones de ingeniería durante toda la transición. Esto fue una transición completa v1 → v2 — no una actualización incremental.",
        },

        process: {
          heading: "Reestructurar primero. Estandarizar segundo. Validar tercero.",
          steps: [
            {
              phase: "Reestructuración de Arquitectura",
              title: "Reorganización completa de IA: v1 → v2",
              body:  "Reorganicé completamente la arquitectura de información: redefiní el modelo de navegación, clarifiqué la lógica de agrupación y establecí la separación explícita de módulos. El objetivo era eliminar el patrón de 'adivinar en lugar de reconocer' que se había acumulado en el sistema legado.",
            },
            {
              phase: "Integración del Design System",
              title: "Aplicando los estándares del Design System corporativo",
              body:  "Apliqué el nuevo Design System corporativo en toda la plataforma — estandarizando componentes, patrones de interacción e iconografía. La alineación con el ecosistema de productos más amplio redujo la curva de aprendizaje para los usuarios ya familiarizados con otros productos de la empresa.",
            },
            {
              phase: "Comprensión Visual",
              title: "Estandarizando la iconografía para el reconocimiento",
              body:  "El conjunto de iconos legados tenía metáforas inconsistentes y menor precisión de reconocimiento. Al adoptar la iconografía del Design System, mejoré las tasas de reconocimiento, estandaricé el lenguaje visual y alineé el producto con el ecosistema más amplio de la empresa.",
            },
            {
              phase: "Validación",
              title: "Testing de usabilidad para confirmar las mejoras estructurales",
              body:  "El testing de usabilidad validó el refactoring: el aumento en las tasas de éxito de tareas, la mejora en la claridad de la navegación y la mejor comprensión de los iconos bajo el nuevo Design System confirmaron que la simplificación estructural mejoró la interacción real del usuario con el sistema en vivo.",
            },
          ],
        },

        decisions: {
          heading: "Las decisiones estructurales detrás del refactoring.",
          items: [
            {
              title: "Transición completa v1 → v2 en lugar de actualizaciones incrementales",
              body:  "Las actualizaciones incrementales a un sistema estructuralmente roto habrían creado una arquitectura híbrida más difícil de mantener y peor para los usuarios durante el período de transición. Una transición de versión completa era más arriesgada pero produjo un resultado coherente — y evitó la confusión prolongada del usuario.",
            },
            {
              title: "Adoptar el Design System corporativo, no una solución visual local",
              body:  "La tentación era crear un conjunto de iconos local o una biblioteca de componentes que se ajustara a la IA existente. En su lugar, me alineé con el Design System corporativo — lo que requirió una reestructuración de IA más profunda pero produjo consistencia en el ecosistema y redujo la sobrecarga de mantenimiento futuro.",
            },
            {
              title: "Priorizar la claridad de navegación por encima de la paridad de funcionalidades",
              body:  "Durante el refactoring, algunas funcionalidades legadas requirieron reubicación o des-priorización para lograr claridad en la navegación. Tomé decisiones explícitas sobre qué merecía acceso de navegación principal vs. qué debería estar anidado — basadas en la frecuencia de tareas y los modelos mentales del usuario, no en la ubicación legada.",
            },
          ],
        },

        impact: {
          heading: "Claridad estructural en un sistema vivo y complejo.",
          metrics: [
            { value: "↑",  label: "Tasas de éxito de tareas",    note: "Validado por testing de usabilidad post-lanzamiento" },
            { value: "↑",  label: "Claridad de navegación",       note: "Los usuarios reconocían los caminos en lugar de adivinar" },
            { value: "↑",  label: "Comprensión de iconos",        note: "La iconografía del Design System superó al conjunto legado" },
            { value: "v2", label: "Versión completa de la plataforma", note: "Reestructuración completa de IA sin lanzamientos incrementales" },
          ],
          statement: "El refactoring demostró que las intervenciones de diseño estructural en sistemas en vivo pueden generar mejoras UX medibles — sin requerir una reconstrucción del producto ni interrupciones visibles para el usuario durante la transición.",
        },

        learnings: {
          heading: "Lo que este caso demuestra.",
          items: [
            "Capacidad de intervenir en sistemas legados sin interrumpir las operaciones en vivo — el refactoring estructural es una disciplina de diseño, no solo de desarrollo.",
            "Pensamiento estructural aplicado a entornos complejos y con restricciones: la arquitectura en sí era el problema, y la arquitectura tenía que ser la solución.",
            "Aplicación estratégica de Design Systems más allá de la consistencia visual — la adopción del Design System aquí fue una decisión arquitectónica que redujo la deuda cognitiva en todo el ecosistema de producto.",
            "Liderazgo en iniciativas de refactoring de versión completa de alto riesgo: coordinando decisiones de diseño e ingeniería a lo largo de una transición compleja sin lanzamientos incrementales.",
          ],
        },

        nav: {
          prev: { slug: "ecommerce-conversion", title: "221% Q1 en Ingresos: Conversión E-commerce" },
          next: { slug: "fintech-ecosystem",    title: "De cero a uno: Ecosistema de Pagos Conectado" },
        },
      },

    ], // end cases[]

  }, // end es{}

}; // end PORTFOLIO_DATA
