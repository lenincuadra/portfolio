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
    "site": {
      "designerName": "Lenin Cuadra",
      "role": "Product Designer with 5 years of experience",
      "email": "hi@lenincuadra.com",
      "linkedinUrl": "https://www.linkedin.com/in/lenincuadra/",
      "resumeUrl": {
        "en": "assets/cv/Lenin_Cuadra_CV_EN.pdf",
        "es": "assets/cv/Lenin_Cuadra_CV_ES.pdf"
      },
      "lang": "en"
    },
    "ui": {
      "nav": {
        "work": "Work",
        "about": "About",
        "contact": "Contact"
      },
      "footer": {
        "work": "Work",
        "about": "About",
        "linkedin": "LinkedIn",
        "resume": "Resume",
        "email": "Email",
        "builtWith": "Designed & built with care."
      },
      "hero": {
        "cta": "View Work",
        "scroll": "Scroll to View Work"
      },
      "case": {
        "readMore": "Read Case Study",
        "featuredLabel": "Featured Work",
        "gridLabel": "Selected Work"
      }
    },
    "home": {
      "hero": {
        "eyebrow": "Open to new opportunities",
        "contactCta": "Get in touch",
        "firstName": "Lenin",
        "lastName": "Cuadra",
        "role": "Senior Product Designer · AI Adoption Lead"
      },
      "work": {
        "heading": "Selected work focused on systems, clarity, and measurable outcomes."
      },
      "about": {
        "heading": "I design products where user needs, technical constraints, and business goals align.",
        "homeExcerpt": "Product designer focused on complex systems, platforms, and flows. I work closely with engineering and product teams — turning technical constraints into coherent, scalable experiences.",
        "paragraphs": [
          "I'm a product designer focused on complex systems, platforms, and flows where clarity and structure matter most. My work typically involves redesigning fragmented experiences into coherent, scalable solutions.",
          "I approach design through constraints. Instead of treating limitations as blockers, I use them to shape decisions early, ensuring what gets designed can actually be built and maintained over time.",
          "I work closely with engineering and product teams to define systems, not just screens. This includes interaction patterns, state models, and the logic behind the UI, aiming for consistency across surfaces and long-term scalability.",
          "Lately I also lead AI adoption for my design team: prompt-driven workflows that take a design from Figma to production-ready code, with guardrails that make the output match the real product. It's the same constraint-driven thinking, applied to a new set of tools."
        ],
        "skills": [
          "Zero-to-one product design",
          "Legacy system refactoring",
          "Design systems",
          "UX research & validation",
          "AI-assisted design workflows",
          "Product thinking"
        ],
        "vennCenter": "Me"
      },
      "contact": {
        "heading": "I'm open to product design roles...",
        "body": "Collaborations, and conversations around complex systems, platform design, and scalable experiences."
      },
    }
  ,

      cases: [
        // ---------------------------------------------------------------------
        // CASE 0 — AI TOOLING / PSH
        // ---------------------------------------------------------------------
        {
          "slug": "no-handoff",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/no-handoff/cover.webp",
            "video": "assets/images/no-handoff/no-handoff-result.webm",
            "screens": [
              {
                "src": "assets/images/no-handoff/screen-app.webp",
                "poster": "assets/images/no-handoff/screen-app.webp",
                "label": "Running App"
              },
              {
                "src": "assets/images/no-handoff/screen-library.webp",
                "poster": "assets/images/no-handoff/screen-library.webp",
                "label": "Component Library"
              },
              {
                "src": "assets/images/no-handoff/component-mapping.webp",
                "poster": "assets/images/no-handoff/component-mapping.webp",
                "label": "Component Reference"
              }
            ]
          },
          "card": {
            "tags": [
              "Claude Code",
              "Figma MCP",
              "Design-to-Code"
            ],
            "title": "No Handoff: Closing the Design-Dev Gap",
            "excerpt": "I found a way to have working code in 2 days, not by replacing the process, but by fixing how I talked to the AI. The result unlocked 4 capabilities the design team didn't have before."
          },
          "meta": {
            "title": "No Handoff: Closing the Design-Dev Gap · Lenin Cuadra",
            "description": "I found a way to have working code in 2 days, not by replacing the process, but by fixing how I talked to the AI. The result unlocked 4 capabilities the design team didn't have before."
          },
          "hero": {
            "title": "No Handoff: Closing the Design-Dev Gap",
            "subtitle": "Built with Claude Code + Figma MCP"
          },
          "quickScan": {
            "role": "Product Designer",
            "team": "Solo",
            "timeline": "2 days",
            "tools": "Claude Code · Figma MCP"
          },
          "sections": [
            {
              "id": "section-overview-image",
              "content": [
                {
                  "type": "callout",
                  "variant": "warning",
                  "title": "Confidentiality note",
                  "text": "The program shown is fictional: the real brand, client, and design system are protected by NDA and don't appear in any screenshot or recording."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/no-handoff/no-handoff-result.webm",
                  "alt": "From building the components in Claude Code to the running EduCore product — design to code in motion"
                }
              ]
            },
            {
              "id": "section-overview",
              "tocLabel": "Overview",
              "label": "Overview",
              "heading": "Overview",
              "h3": "Our standard delivery at PSH takes 2 weeks",
              "layout": "overview",
              "content": [
                {
                  "type": "body",
                  "text": "Design in Figma, document redlines, hand off to developers, iterate with QA. What I built in 2 days was built on top of that process. The Figma work made it possible."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "heading": "The problem",
              "h3": "Every time I tried to generate code from Figma designs, the AI hallucinated.",
              "content": [
                {
                  "type": "body",
                  "text": "One wrong component propagates to every screen that uses it: the output looks close, but it's not trustworthy enough to show anyone."
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisions",
              "label": "Decisions",
              "heading": "Three decisions that made it work.",
              "h3": "Three constraints that eliminated the hallucinations.",
              "content": [
                {
                  "type": "heading",
                  "text": "1. Reduce scope"
                },
                {
                  "type": "body",
                  "text": "Only the components this MVP needed, not the full design system. One project, one scope, reusable later."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/kitchensink.webp",
                  "alt": "EduCore component library — the kitchen-sink catalog of every built component"
                },
                {
                  "type": "heading",
                  "text": "2. Build the library first"
                },
                {
                  "type": "body",
                  "text": "Component by component via Figma MCP: \"Replicate this with all its states.\" No guessing from memory."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/process-component-structure.webp",
                  "alt": "Component library structure in the editor — Button.tsx open showing typed props and token-based CSS classes"
                },
                {
                  "type": "heading",
                  "text": "3. Build a reference table"
                },
                {
                  "type": "body",
                  "text": "A .md file with every component and its Figma link. I instructed Claude to check the original automatically if something looked off, with no resharing links manually."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/component-mapping.webp",
                  "alt": "component-mapping.md — registry table with component name, status, Figma node ID, and notes"
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Result",
              "label": "Result",
              "heading": "The result",
              "h3": "The output was indistinguishable from the real product",
              "content": [
                {
                  "type": "heading",
                  "text": "Filters, states, and interactions all worked as designed"
                },
                {
                  "type": "video",
                  "src": "assets/images/no-handoff/no-handoff-flow.webm",
                  "caption": "Mocked data, real behavior.",
                  "alt": "EduCore Program Portal running: filters, opt-out flow, opted-out banner and success toast"
                },
                {
                  "type": "heading",
                  "text": "Layout and flows matched Figma at 100%"
                },
                {
                  "type": "heading",
                  "level": 5,
                  "text": "Expand and drag to compare: Figma vs Code"
                },
                {
                  "type": "row",
                  "items": [
                    {
                      "type": "slider",
                      "before": { "src": "assets/images/no-handoff/compare-figma-base.webp", "label": "Figma — Main Screen", "alt": "EduCore Program Portal main screen — Figma design" },
                      "after":  { "src": "assets/images/no-handoff/compare-app-base.webp", "label": "Code — Main Screen", "alt": "EduCore Program Portal main screen — coded build" }
                    },
                    {
                      "type": "slider",
                      "before": { "src": "assets/images/no-handoff/compare-figma-optout.webp", "label": "Figma — Modal Benefits", "alt": "Opt-out confirmation with benefits panel — Figma design" },
                      "after":  { "src": "assets/images/no-handoff/compare-app-optout.webp", "label": "Code — Modal Benefits", "alt": "Opt-out confirmation with benefits panel — coded build" }
                    }
                  ]
                }
              ]
            },
            {
              "id": "section-unlocks",
              "tocLabel": "Impact",
              "label": "Impact",
              "heading": "Impact",
              "h3": "4 use cases the team didn't have before.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "User testing — real component behavior, real accessibility issues surface",
                    "Stakeholder presentations — live app fidelity instead of a click-through prototype",
                    "Sales demos — production look & feel, easy to update",
                    "Potential end of handoff — design delivers components to dev directly"
                  ]
                }
              ]
            },
            {
              "id": "section-status",
              "tocLabel": "Status",
              "label": "Status",
              "heading": "Status.",
              "h3": "Scaling the new design process",
              "content": [
                {
                  "type": "body",
                  "text": "I demoed this to my Design Manager, who took it to the CPO. The response: move forward with a shared GitHub repo and Storybook. A meeting with the Product Manager is next to define how."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASE 1 — FIGMA PLUGIN / WEBP EXPORT
        // ---------------------------------------------------------------------
        {
          "slug": "figma-webp-export",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/figma-webp-export/cover.webp",
            "video": "assets/images/figma-webp-export/figma-flow.webm",
            "screens": []
          },
          "card": {
            "tags": ["Vibe Coding", "Figma Plugin", "AI-Accelerated Workflows"],
            "title": "77 Minutes to Fix a 1-Hour Recurring Problem",
            "excerpt": "A designer asked. I said I could fix it. 77 minutes later, what used to take an hour takes under a minute — and it's free for everyone."
          },
          "meta": {
            "title": "77 Minutes to Fix a 1-Hour Recurring Problem · Lenin Cuadra",
            "description": "Figma doesn't export .webp natively, and every plugin that does sits behind a paywall. I built a free batch export plugin using nothing but Claude.ai — in 77 minutes. It's now published on the Figma Community and available to any designer."
          },
          "hero": {
            "title": "77 Minutes to Fix a 1-Hour Recurring Problem",
            "subtitle": "A free, vibe-coded .webp export plugin for Figma — built with Claude.ai"
          },
          "quickScan": {
            "role": "Product Designer",
            "team": "Solo",
            "timeline": "77 minutes",
            "tools": "Claude.ai · Figma Plugin API"
          },
          "sections": [
            {
              "id": "section-overview-image",
              "content": [
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "auto",
                  "src": "assets/images/figma-webp-export/figma-flow.webm",
                  "alt": "The .webp export plugin running in Figma — UI flow with images selected"
                }
              ]
            },
            {
              "id": "section-overview",
              "tocLabel": "Overview",
              "label": "Overview",
              "h3": "A friction that costs an hour per delivery.",
              "content": [
                {
                  "type": "body",
                  "text": "Exporting images to .webp is a routine part of design-to-dev handoff. Figma doesn't support it natively, and every plugin that does hides behind a paywall. The workaround was manual: export as jpg or png, convert one by one in an external tool. A small friction that adds up fast, and it affects every designer delivering to dev, regardless of project or team."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "h3": "Every existing solution either costs money or costs time.",
              "content": [
                {
                  "type": "body",
                  "text": "With 20 or 50 credits per plan, paid plugins disappear fast. Export 10 images, make a few adjustments, re-export, and you're out. And the manual workaround isn't free either: a single export takes around 5 minutes. For 12 images across three viewports (desktop, tablet, mobile), that's a full hour. That hour belongs to the designer or it falls on the developer. Either way, someone pays for a problem that shouldn't exist."
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Process",
              "label": "Process",
              "h3": "One conversation with Claude.ai. No prior plugin development experience.",
              "content": [
                {
                  "type": "body",
                  "text": "A designer on our agency side raised the problem. I told her I could build a plugin to fix it. Using Claude.ai and nothing but vibe coding, I built and tested it locally in 77 minutes, running it in Figma's Developer Mode while iterating. I also added a Spanish/English language toggle: I work for a US client but my agency is based in Argentina, and designers on both sides needed to use it without friction."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/figma-webp-export/plugin-code.webm",
                  "caption": "One Claude.ai session (usage shown), then the generated plugin files — manifest, logic and UI — open in Cursor.",
                  "alt": "Cursor editor showing the WebP Optimizer plugin files generated with Claude.ai (manifest.json, code.js, ui.html), and the Claude.ai usage screen"
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Result",
              "label": "Result",
              "h3": "What used to take an hour now takes under a minute.",
              "content": [
                {
                  "type": "body",
                  "text": "Batch export to .webp with resolution control, published on the Figma Community. I submitted it after testing locally; it cleared review in 3 days and is now free for everyone."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/figma-webp-export/plugin-demo.webm",
                  "caption": "Full demo — batch export to .webp, then the exported files in Finder with their sizes.",
                  "alt": "Plugin demo — batch .webp export and the resulting files with their sizes in Finder"
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impact",
              "label": "Impact",
              "h3": "A fix that works across teams, projects, and delivery cadences.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Designers ship faster — No more manual conversion loops or credit counting.",
                    "Dev handoff is cleaner — Files arrive in the format the team actually needs.",
                    "It scales to any project size — 6 images or 12, the time cost is the same: under a minute.",
                    "Free, permanently — No paywall, no plan upgrades, no credits."
                  ]
                },
                {
                  "type": "quote",
                  "text": "He listened to a problem our team was running into, put his brain to it, and created a plugin that was just published on Figma. The UX team can immediately put this to use.",
                  "attr": "Product Design Lead"
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "auto",
                  "themed": true,
                  "src": "assets/images/figma-webp-export/lead-endorsement-dark.webm",
                  "caption": "The endorsement in the team's Slack: the post, the reactions, and the thread.",
                  "alt": "Slack thread and post where the Product Design lead celebrates the plugin and the team reacts; it solves the .webp handoff problem and the UX team can use it immediately"
                }
              ]
            },
            {
              "id": "section-status",
              "tocLabel": "Status",
              "label": "Status",
              "h3": "Published and available to both teams.",
              "content": [
                { "type": "subheading", "text": "Published and available to both teams: the client's and the agency's" },
                { "type": "body", "text": "and to any Figma user via the Community." },
                { "type": "subheading", "text": "The designer who raised the problem is the primary user." },
                { "type": "body", "text": "The client team and I use it as needed." },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/figma-webp-export/status-scroll.webm",
                  "caption": "The plugin's page on the Figma Community — published and installable by anyone.",
                  "alt": "Scrolling through the WebP Optimizer page on the Figma Community — cover, description and install button"
                },
                {
                  "type": "link",
                  "href": "https://www.figma.com/community/plugin/1644736186405569289",
                  "text": "View on Figma Community →"
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASE 2 — FINTECH / NARANJA X
        // ---------------------------------------------------------------------
        {
          "slug": "fintech-ecosystem",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
            "video": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.webm",
            "screens": [
              {
                "src": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.webm",
                "poster": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                "label": "Web Checkout"
              },
              {
                "src": "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.webm",
                "poster": "assets/images/fintech/2-3—Payment link/0-nx-description.png",
                "label": "Payment Link"
              },
              {
                "src": "assets/images/fintech/3-3—Nshop/9-financial-dashboard.webm",
                "poster": "assets/images/fintech/3-3—Nshop/3-screens01.png",
                "label": "Financial Dashboard"
              }
            ]
          },
          "card": {
            "tags": [
              "Fintech",
              "Payments",
              "Product Architecture"
            ],
            "title": "Zero-to-one: Connected Payment Ecosystem",
            "excerpt": "Designed the first cohesive version of a three-product fintech ecosystem for Naranja X, enabling merchants to collect payments through embedded checkout, payment links and financial dashboards."
          },
          "meta": {
            "title": "Naranja X — Fintech Ecosystem · Lenin Cuadra",
            "description": "Zero-to-one design of Naranja X's connected payment ecosystem: embedded checkout, merchant tools and payment flows shipped as one coherent system, so merchants could start collecting payments without leaving their platform."
          },
          "hero": {
            "title": "Zero-to-one Creation of a Connected Payment Ecosystem.",
            "subtitle": "Naranja X: embedded checkout, payment links and a financial dashboard, designed as one system under hard technical constraints."
          },
          "quickScan": {
            "role": "Sole Product Designer across three product surfaces",
            "team": "Product Owner · Frontend Engineers · Backend Engineers",
            "timeline": "6 months",
            "tools": "Figma · Scrum + Lean UX"
          },
          "sections": [
            {
              "id": "section-overview",
              "tocLabel": "Overview",
              "label": "Overview",
              "h3": "Three surfaces, one design owner, six months: Naranja X's first connected payment ecosystem.",
              "layout": "overview",
              "content": [
                {
                  "type": "body",
                  "text": "Naranja X needed merchants to collect payments without leaving the platform, and nothing existed yet. The answer was three product surfaces working as one ecosystem: Web Checkout for buyers, Payment Link for merchants, and NShops for financial visibility."
                },
                {
                  "type": "body",
                  "text": "I was the sole designer across the three surfaces for six months. My job was translating business requirements and backend realities into one coherent system: interaction models, information architecture, and the operational logic that let buyers, merchants and the business read the same state."
                },
                {
                  "type": "image",
                  "src": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                  "alt": "Naranja X payment ecosystem overview",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "h3": "Three products, three sets of friction, and no shared language between them.",
              "content": [
                {
                  "type": "body",
                  "text": "Web Checkout suffered slow backend response times and hard UI limits imposed by the payment gateway. Payment Link ran on single-attempt MVP logic: once a link expired after a failed payment, it was gone for good. NShops had no centralized financial visibility and weak status communication, so merchants couldn't tell what state their operations were in."
                },
                {
                  "type": "quote",
                  "text": "\"The challenge was not just UI. It was balancing buyer experience, merchant operations and business visibility, all at once.\"",
                  "attr": "Design framing, project kickoff"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Constraints",
              "label": "Constraints",
              "h3": "The gateway allowed CSS only, links died after one failed payment, and merchants flew blind.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "CSS-only — the payment gateway (Lyra) gave zero JavaScript access to the checkout interface. Every customization had to happen through CSS alone.",
                    "Single-attempt — payment links expired permanently after a failed payment. Merchants had no recovery path.",
                    "No visibility — NShops had no centralized status communication across surfaces. Merchants couldn't track the state of their operations."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Process",
              "label": "Process",
              "h3": "The Happy Path came first; the polish came later.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Phase 1: Paper to Mid-Fi to Hi-Fi in under 3 days"
                },
                {
                  "type": "body",
                  "text": "For the initial checkout I defined the Happy Path early to align engineering, and prioritized functional clarity over surface polish. The speed came from structure, not from skipping steps."
                },
                {
                  "type": "image",
                  "src": "assets/images/fintech/1-3—web checkout/1-nx-wireframes.png",
                  "alt": "Web Checkout wireframes: the flow moving from paper to mid-fi",
                  "loading": "lazy"
                },
                {
                  "type": "subheading",
                  "text": "Phase 2: Rebuilding inside a CSS-only gateway"
                },
                {
                  "type": "body",
                  "text": "Lyra allowed CSS customization and nothing else. I mapped what was possible within that limit and rebuilt the non-branded card flow inside it, preserving usability despite the restriction."
                },
                {
                  "type": "video",
                  "src": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.webm",
                  "poster": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                  "label": "Checkout Prototype",
                  "alt": "Interactive prototype of the rebuilt checkout flow running end to end"
                },
                {
                  "type": "subheading",
                  "text": "Phase 3: Turning a dead end into a recovery path"
                },
                {
                  "type": "body",
                  "text": "Payment Link expiration was creating cascading operational friction: every failed payment forced merchants to recreate the link from scratch. The fix, Duplicate Payment Link, removed the manual recreation entirely and made recovery fast."
                },
                {
                  "type": "video",
                  "src": "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.webm",
                  "poster": "assets/images/fintech/2-3—Payment link/0-nx-description.png",
                  "label": "Payment Link Demo",
                  "alt": "Payment Link creation and duplication flow in the merchant tool"
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisions",
              "label": "Decisions",
              "h3": "I designed inside the constraints instead of escalating them.",
              "content": [
                {
                  "type": "subheading",
                  "text": "The Happy Path before visual refinement"
                },
                {
                  "type": "body",
                  "text": "Engineering alignment needed a clear functional flow first. Defining the Happy Path early let frontend and backend move in parallel while the visual polish came later, cutting costly rework."
                },
                {
                  "type": "subheading",
                  "text": "CSS-only treated as the brief, not as a blocker"
                },
                {
                  "type": "body",
                  "text": "Escalating to push back on the Lyra integration would have stalled the launch. Accepting the constraint and designing inside it kept the momentum and delivered a working checkout without delay."
                },
                {
                  "type": "subheading",
                  "text": "Duplicate Payment Link framed as infrastructure, not convenience"
                },
                {
                  "type": "body",
                  "text": "I pitched the duplicate action as a systemic recovery mechanism rather than a nice-to-have feature. That framing is what accelerated stakeholder buy-in."
                }
              ]
            },
            {
              "id": "section-validation",
              "tocLabel": "Validation",
              "label": "Validation",
              "h3": "5 of 7 users created a payment link; the failures pointed at status communication.",
              "content": [
                {
                  "type": "body",
                  "text": "I tested with 7 users on interactive prototypes. Five completed Payment Link creation through the Happy Path; only three completed payment confirmation. The flows worked, but status communication across surfaces didn't, and that finding went straight into the Sprint priorities."
                },
                {
                  "type": "image",
                  "src": "assets/images/fintech/3-3—Nshop/5-nx-research.png",
                  "alt": "Usability test synthesis: completion rates and friction points across the seven sessions",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impact",
              "label": "Impact",
              "h3": "Naranja X went from zero to a working payment ecosystem across three surfaces.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "3 connected surfaces launched — Checkout, Payment Link and NShops shipped as one system",
                    "Duplicate Payment Link — recovery after failed payments without recreating anything by hand",
                    "Clearer status hierarchy — buyers, merchants and the business finally read the same state"
                  ]
                },
                {
                  "type": "video",
                  "src": "assets/images/fintech/3-3—Nshop/9-financial-dashboard.webm",
                  "poster": "assets/images/fintech/3-3—Nshop/3-screens01.png",
                  "label": "Financial Dashboard",
                  "alt": "NShops financial dashboard showing centralized operation status"
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "What This Demonstrates",
              "label": "What This Demonstrates",
              "h3": "Constraint-driven execution, ecosystem thinking and ownership, in one project.",
              "content": [
                {
                  "type": "body",
                  "text": "This case is what my execution under constraints looks like: fast without losing coherence, decisions evaluated by their effect on the whole ecosystem rather than a single screen, and ownership that runs from zero-to-one creation through post-launch structural optimization."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASE 2 — ECOMMERCE / MONTIRONI AUTOMOTIVE
        // ---------------------------------------------------------------------
        {
          "slug": "ecommerce-conversion",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/ecommerce/cover.webp",
            "screens": [
              {
                "src": "assets/images/ecommerce/intervention-progression.webm",
                "label": "Flow Evolution"
              },
              {
                "src": "assets/images/ecommerce/smart-suggestions.webm",
                "label": "Smart Suggestions"
              },
              {
                "src": "assets/images/ecommerce/whatsapp-flow.webm",
                "label": "WhatsApp Handoff"
              }
            ]
          },
          "card": {
            "tags": [
              "E-commerce",
              "Conversion",
              "UX Strategy"
            ],
            "title": "221% Q1 Revenue Increase Driven Purely by UX Intervention",
            "excerpt": "Redesigned the tire inquiry flow and introduced WhatsApp as a high-intent channel for Montironi Automotive. Result: 221% Q1 revenue growth with no pricing changes, no campaigns, no external drivers."
          },
          "meta": {
            "title": "Montironi Automotive — 221% Revenue · Lenin Cuadra",
            "description": "221% Q1 revenue growth for an automotive dealer, with UX as the only variable: I rebuilt a leaking tire inquiry flow and moved the handoff to WhatsApp. No pricing changes, no campaigns."
          },
          "hero": {
            "title": "221% Q1 Revenue Increase Driven Purely by UX Intervention.",
            "subtitle": "Montironi Automotive — UX redesign + WhatsApp as a high-intent channel, with no pricing or campaign changes."
          },
          "quickScan": {
            "role": "Product Designer — UX Redesign & Channel Strategy",
            "team": "Business stakeholders · Development team",
            "timeline": "Q1 project cycle",
            "tools": "UX redesign · Conversion analysis · Channel strategy"
          },
          "sections": [
            {
              "id": "section-overview",
              "tocLabel": "Overview",
              "label": "Overview",
              "h3": "A conversion problem disguised as a sales problem.",
              "layout": "overview",
              "content": [
                {
                  "type": "body",
                  "text": "Tire sales were flat, and the assumption was a demand problem. It wasn't. The website's inquiry flow was quietly leaking buyers. I reframed it as a conversion problem and rebuilt the flow. The payoff was clean to attribute: 221% revenue growth, measured the same quarter one year apart."
                }
              ]
            },
            {
              "id": "section-scope",
              "tocLabel": "Scope",
              "label": "Scope",
              "h3": "Lift conversion without touching price, campaigns, or inventory.",
              "content": [
                {
                  "type": "body",
                  "text": "Tire sales were underperforming because of a complex inquiry flow and high friction across the site. The work was a full UX redesign of that flow plus a new conversion channel, under one constraint: no changes to pricing, campaigns, or inventory. So whatever moved the numbers would be the design, and nothing else."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "h3": "Friction was hiding revenue.",
              "content": [
                {
                  "type": "body",
                  "text": "The original inquiry flow asked too much: one open-ended form that made buyers spell out every detail themselves, relying entirely on traditional web submission. Buyers dropped off mid-form, communication with the business was slow, and conversion stayed low. The demand was there, but the flow was leaking it."
                }
              ]
            },
            {
              "id": "section-intervention",
              "tocLabel": "Intervention",
              "label": "Intervention",
              "h3": "Simplify the path. Change the channel.",
              "content": [
                {
                  "type": "heading",
                  "text": "Cut the cognitive load"
                },
                {
                  "type": "body",
                  "text": "I rebuilt the inquiry form from paper up: fewer fields, a clearer hierarchy, and a flow that guides instead of interrogates. It went from hand sketches to a mid-fidelity form before any pixel was final."
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "wide",
                  "canvas": "dark",
                  "src": "assets/images/ecommerce/intervention-progression.webm",
                  "caption": "From hand sketches to the mid-fidelity inquiry form, the redesign progression.",
                  "alt": "Design progression: hand-drawn paper wireframes dissolving into the mid-fidelity Montironi inquiry form"
                },
                {
                  "type": "body",
                  "text": "For brand selection I borrowed the quick-reply / chip pattern people already know from apps like LinkedIn: tap a suggestion instead of typing it. Fewer inputs, faster completion."
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "auto",
                  "size": "half",
                  "src": "assets/images/ecommerce/smart-suggestions.webm",
                  "caption": "The quick-reply / chip pattern (à la LinkedIn) applied to brand selection.",
                  "alt": "Quick-reply chip / smart-suggestion pattern: tapping a suggestion auto-fills the field"
                },
                {
                  "type": "heading",
                  "text": "Add a high-intent channel"
                },
                {
                  "type": "body",
                  "text": "Then I changed the channel itself: WhatsApp as a one-tap handoff from the form. Buyers and the business could talk in real time, clarify complex tire specs on the spot, and the abandonment that used to happen right after someone showed interest dropped."
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "portrait",
                  "src": "assets/images/ecommerce/whatsapp-flow.webm",
                  "caption": "The redesigned inquiry form on mobile, with WhatsApp as a one-tap high-intent handoff.",
                  "alt": "The Montironi tire inquiry form on mobile, handing off to WhatsApp"
                }
              ]
            },
            {
              "id": "section-before-after",
              "tocLabel": "Before / After",
              "label": "Before / After",
              "h3": "From an open-ended form that asked for everything to a one-tap WhatsApp handoff.",
              "content": [
                {
                  "type": "table",
                  "headers": ["Before", "After"],
                  "rows": [
                    ["High cognitive load", "Reduced input fields"],
                    ["Open-ended form, every detail by hand", "Clearer hierarchy and guidance"],
                    ["No real-time communication channel", "Integrated WhatsApp high-intent entry point"]
                  ]
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Result",
              "label": "Result",
              "h3": "221% revenue growth, with UX as the only variable.",
              "content": [
                {
                  "type": "body",
                  "text": "Measured the same quarter one year apart, with the redesign as the only thing that changed, so the attribution is clean, no confounding factors. The flow that used to leak buyers now converts them."
                },
                {
                  "type": "heading",
                  "text": "Qualitative"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Streamlined, faster inquiry process.",
                    "Higher form-completion rates.",
                    "~10 seconds average task-completion time.",
                    "Every WhatsApp inquiry converted to a sale (Tires dept.)."
                  ]
                },
                {
                  "type": "heading",
                  "text": "Quantitative"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "221% increase in Q1 tire sales vs. the prior-year quarter.",
                    "42.65% growth in user acquisition.",
                    "+54 WhatsApp contacts per month.",
                    "93% of traffic was mobile."
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/ecommerce/impact-chart.gif",
                  "alt": "Impact chart",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "Takeaway",
              "label": "Takeaway",
              "h3": "A revenue problem solved through UX, not just an interface redesign.",
              "content": [
                {
                  "type": "body",
                  "text": "The lever wasn't visual polish: it was finding where the funnel leaked, thinking past the interface to the channel itself, and executing against a number I could measure. Behavioral friction and conversion dynamics were what moved revenue."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASE 3 — TELECOM / LEGACY REFACTOR
        // ---------------------------------------------------------------------
        {
          "slug": "telecom-legacy-refactor",
          "template": "v3",
          "images": {
            "cover": "assets/images/telecom/after-poster.png",
            "video": "assets/images/telecom/before-after.webm",
            "hero": "assets/images/telecom/portrait.png",
            "overviewImage": "assets/images/telecom/mockup-multitasking.png"
          },
          "card": {
            "tags": [
              "Telecom",
              "Systems Design",
              "Design Systems"
            ],
            "title": "Refactoring a Legacy Telecom Platform for Structural Clarity",
            "excerpt": "Led the structural refactor of a live telecom platform: from fragmented IA and inconsistent navigation to a coherent v2 architecture aligned with the new corporate Design System."
          },
          "meta": {
            "title": "Telecom Legacy Refactor · Lenin Cuadra",
            "description": "I led the structural refactor of a live telecom platform: a full IA restructure and design-system alignment shipped as one v1-to-v2 jump, with higher task success and navigation clarity confirmed post-launch."
          },
          "hero": {
            "tags": [
              "Telecom",
              "Systems Design",
              "Platform Refactor"
            ],
            "title": "Refactoring a Legacy Telecom Platform for Structural Clarity and System Consistency."
          },
          "quickScan": {
            "role": "Lead Designer — Structural Refactor",
            "team": "UX Lead · Engineering team",
            "timeline": "Full v1 → v2 transition",
            "tools": "Design System · IA restructuring · Usability testing"
          },
          "sections": [
            {
              "id": "section-overview",
              "tocLabel": "Overview",
              "label": "Overview",
              "h3": "A live telecom platform had outgrown its original architecture.",
              "content": [
                {
                  "type": "body",
                  "text": "A telecom application in production, used every day by real teams, had accumulated structural debt: a fragmented information architecture, inconsistent navigation, and iconography that hurt comprehension. I led a full v1-to-v2 refactor, with no incremental public releases, to give it back the structural clarity it had lost."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/old-version.png",
                  "alt": "The legacy telecom user portal: a contacts list, dial pad, and a meeting panel crowded together",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "h3": "The system made users guess instead of recognize.",
              "content": [
                {
                  "type": "body",
                  "text": "The information hierarchy was poorly structured, navigation forced users to guess instead of recognize, the iconography was inconsistent, and the whole product had drifted from the Design System the company had adopted everywhere else. In a tool already in daily use, that added cognitive friction and slowed every task."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/old-app-architecture.png",
                  "alt": "The legacy information architecture mapped out as a sprawling tree of nested calling states, options, and library screens",
                  "loading": "lazy"
                },
                {
                  "type": "quote",
                  "text": "The problem wasn't visual. It was structural. The architecture itself was creating cognitive friction.",
                  "attr": "Design framing, refactor kickoff"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Constraints",
              "label": "Constraints",
              "h3": "A live system, no staging, one v1-to-v2 jump.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Live system — No staging environment, so the refactor had to ship as one full v1-to-v2 transition with no intermediate public state.",
                    "Legacy IA — Fragmented groupings and implicit module dependencies meant partial fixes wouldn't hold.",
                    "Design System — Adopting the new corporate standard required aligning iconography, components, and interaction patterns."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Process",
              "label": "Process",
              "h3": "Restructure the IA, standardize on the Design System, then validate.",
              "content": [
                {
                  "type": "heading",
                  "text": "I started from the users, not the screens"
                },
                {
                  "type": "body",
                  "text": "Before touching the structure, I ran interviews and mapped them on a sentiment board, from painpoints to satisfaction. The same complaints kept surfacing: too much visual load, no sense of system status, and a heavy learning curve."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/sentiment-analysis-from-interviews.png",
                  "alt": "A sentiment-analysis board from user interviews, sticky notes grouped from painpoints to satisfaction",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Turned the findings into heuristics to fix"
                },
                {
                  "type": "body",
                  "text": "I distilled the research into a short list of heuristics to design against: user control and freedom, visibility of system status, error prevention, and a better signal-to-noise ratio. Those became the rubric for every structural decision."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/heuristic-focus-after-research.png",
                  "alt": "Four heuristics to focus on: user control and freedom, visibility of system status, error prevention, and signal-to-noise ratio",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Restructured the information architecture"
                },
                {
                  "type": "body",
                  "text": "I redefined the navigation model, clarified the grouping logic, and made module separation explicit, working from low-fi wireframes up. The goal was simple: replace the guess-instead-of-recognize pattern the legacy system had accumulated."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/low-wireframing.png",
                  "alt": "Low-fidelity wireframe of the restructured call screen, with transfer and notes laid out clearly",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Standardized on the corporate Design System"
                },
                {
                  "type": "body",
                  "text": "Then I aligned components, interaction patterns, and iconography with the corporate Design System used across the company's other products. That alignment cut the learning curve for users who already knew those products."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/mockup-overview.webp",
                  "alt": "The refactored platform: call transfer, in-call participants, and the recordings library, all built on Design System components",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Validated with usability testing"
                },
                {
                  "type": "body",
                  "text": "I tested the new structure and iterated where it failed. The navbar, for one, went through a round of changes after testing: actions like recordings and reportings that users couldn't find before became named, visible items. Task success, navigation clarity, and icon comprehension all improved."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/usability-test-changes.png",
                  "alt": "Before and after of the navbar from usability testing: bare icons relabeled and surfaced as named items",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisions",
              "label": "Decisions",
              "h3": "A full v2 jump, not incremental patching.",
              "content": [
                {
                  "type": "heading",
                  "text": "A full v1-to-v2 transition instead of incremental updates"
                },
                {
                  "type": "body",
                  "text": "Patching a structurally broken system incrementally would have produced a hybrid architecture: harder to maintain and worse for users during the transition. A full version jump was riskier, but it produced a coherent result and avoided dragging users through prolonged confusion."
                },
                {
                  "type": "heading",
                  "text": "Adopt the corporate Design System, not a local visual fix"
                },
                {
                  "type": "body",
                  "text": "The easy path was a local icon set or component library bolted onto the existing IA. Instead I aligned with the corporate Design System, which forced a deeper IA restructure but bought ecosystem consistency and far less future maintenance."
                },
                {
                  "type": "heading",
                  "text": "Prioritize navigation clarity over feature parity"
                },
                {
                  "type": "body",
                  "text": "Some legacy features had to move or step down in priority to make the navigation clear. I made those calls explicitly, based on how often a task actually happened and the user's mental model, not on where the feature used to live."
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impact",
              "label": "Impact",
              "h3": "Higher task success and navigation clarity, confirmed post-launch.",
              "content": [
                {
                  "type": "body",
                  "text": "Measured after launch, the refactor moved the things that mattered. Same product, same users, a coherent v2 architecture, and the structural friction gone."
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Higher task-success rates — Validated by post-launch usability testing.",
                    "Clearer navigation — Users recognized paths instead of guessing.",
                    "Better icon comprehension — The Design System iconography outperformed the legacy set.",
                    "A complete v2 IA restructure — Shipped with no incremental public releases."
                  ]
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "wide",
                  "src": "assets/images/telecom/before-after.webm",
                  "poster": "assets/images/telecom/after-poster.png",
                  "caption": "Before and after the refactor: the same platform, restructured and aligned to the Design System.",
                  "alt": "Before-and-after of the telecom platform, from the legacy version to the refactored v2"
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "Takeaway",
              "label": "Takeaway",
              "h3": "Structural refactoring is a design discipline, not just a dev one.",
              "content": [
                {
                  "type": "body",
                  "text": "The architecture itself was the problem, so the architecture had to be the solution. This case is where I learned to intervene in a live, constraint-heavy legacy system without disrupting it, to treat a Design System as an architectural decision and not just a coat of paint, and to lead design and engineering through a high-risk, full-version jump."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASE — KHATU / INTERNAL DEV PLATFORM (research-driven redesign)
        // ---------------------------------------------------------------------
        {
          "slug": "khatu",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/khatu/cover.webp"
          },
          "card": {
            "tags": ["UX Research", "Developer Experience", "Information Architecture"],
            "title": "Khatu: Rethinking an Internal Dev Platform",
            "excerpt": "Naranja X's internal platform could bootstrap a project in minutes, yet few engineers used it. Interviews, an empathy map and a card sort reframed a requested reskin into a redesign built around discovery."
          },
          "meta": {
            "title": "Khatu: Rethinking an Internal Dev Platform · Lenin Cuadra",
            "description": "A research-driven redesign of Khatu, Naranja X's internal developer platform. Interviews, an empathy map, a persona and a card sort reframed a visual refresh into a redesign built around discovery."
          },
          "hero": {
            "title": "Khatu: Rethinking an Internal Dev Platform",
            "subtitle": "A research-driven redesign of Naranja X's internal developer platform"
          },
          "sections": [
            {
              "id": "section-lead",
              "content": [
                {
                  "type": "image",
                  "src": "assets/images/khatu/dashboard-v2.webp",
                  "alt": "Khatu 2.0 dashboard: the redesigned home of Naranja X's internal developer platform, showing recent repositories and project shortcuts"
                }
              ]
            },
            {
              "id": "section-overview",
              "tocLabel": "Overview",
              "label": "Overview",
              "h3": "Khatu could spin up a full project in minutes, but most engineers never opened it.",
              "content": [
                {
                  "type": "body",
                  "text": "Khatu was Naranja X's internal platform for engineers. From one place you could generate a repository, pull a ready made template, and wire up cloud infrastructure and security. It turned the first day of a project into a few clicks."
                },
                {
                  "type": "body",
                  "text": "It worked, and the people who used it liked it. The problem was that most of the engineering org either didn't know Khatu existed or forgot that it did."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "h3": "The brief was a visual refresh. We pushed to learn why adoption was low first.",
              "content": [
                {
                  "type": "body",
                  "text": "The team came to us for a v2 that looked more modern. Before touching pixels, we asked the harder question: if Khatu already saved so much time, why were so few people using it? A new skin on an unused tool is still an unused tool."
                }
              ]
            },
            {
              "id": "section-research",
              "tocLabel": "Research",
              "label": "Research",
              "h3": "Interviews with the platform's own engineers became an empathy map and a persona we named Mate.",
              "content": [
                {
                  "type": "body",
                  "text": "We ran interviews with the engineers who were supposed to live in Khatu every day, then clustered what they said, thought, did and felt into an empathy map."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/empathy-map.webp",
                  "alt": "Empathy map built from engineer interviews, with sticky notes grouped into says, thinks, does and feels quadrants",
                  "caption": "Interview notes clustered into says, thinks, does and feels."
                },
                {
                  "type": "body",
                  "text": "From there we distilled a primary persona: Mate, a senior architect who spends his week deploying infrastructure and spinning up automation projects. Khatu was built for people like him, and he was one of the ones who used it least."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/persona-mate.webp",
                  "ratio": "portrait",
                  "alt": "Persona sheet for Mate, a senior architect: his tools, tech stack, motivations, goals and the barriers that keep him from using Khatu",
                  "caption": "Mate: the senior architect Khatu was built for."
                },
                {
                  "type": "heading",
                  "text": "Google Analytics and Hotjar Survey"
                },
                {
                  "type": "body",
                  "text": "Behavioral data, to weigh what engineers said against what they actually did."
                },
                {
                  "type": "gallery",
                  "images": [
                    { "src": "assets/images/khatu/hotjar-survey.webp", "alt": "Hotjar survey results collected from Khatu users" },
                    { "src": "assets/images/khatu/analytics-insight.webp", "alt": "Google Analytics insight on how engineers moved through Khatu" }
                  ]
                }
              ]
            },
            {
              "id": "section-insights",
              "tocLabel": "Insights",
              "label": "Insights",
              "h3": "Engineers never heard Khatu changed, so they pinged a teammate instead of opening it.",
              "content": [
                {
                  "type": "body",
                  "text": "The same three patterns kept surfacing."
                },
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Engineers didn't distrust Khatu, they lost track of it: it shipped changes no one announced, so they never knew what was new and stopped checking.",
                    "When they hit a wall they didn't open the docs. Almost no one used the FAQs, so they asked whoever happened to know, and tribal knowledge beat the platform.",
                    "The templates were Khatu's core value and its worst experience: a flat, unlabeled wall where finding the right one meant already knowing its name."
                  ]
                },
                {
                  "type": "quote",
                  "text": "I always ask Sebas.",
                  "attr": "Sebas was a senior QA Automation engineer, and the lead of the Khatu team."
                }
              ]
            },
            {
              "id": "section-redesign",
              "tocLabel": "Redesign",
              "label": "Redesign",
              "h3": "A card sort turned a wall of templates into three groups, and that reshaped v2.0.",
              "content": [
                {
                  "type": "body",
                  "text": "The card sort was the turning point. We had engineers group Khatu's templates their own way, and the dendrogram drew clean clusters: front end, QA testing, and backend."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/card-sorting.webp",
                  "ratio": "auto",
                  "alt": "Card sorting dendrogram showing how engineers grouped Khatu's templates, with clusters forming around front end, QA and backend",
                  "caption": "Open card sort. The dendrogram grouped templates the way engineers actually think about them."
                },
                {
                  "type": "body",
                  "text": "That structure became the new Templates page. Named groups replaced the flat list, so Mate can find the automation template he needs without knowing its exact name."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/templates-v2.webp",
                  "alt": "Khatu 2.0 Templates page, with templates organized under FrontEnd, QA Testing and Backend groups",
                  "caption": "Templates in v2.0, grouped FrontEnd, QA and Backend from the card sort."
                },
                {
                  "type": "heading",
                  "text": "From a proposal to a system"
                },
                {
                  "type": "body",
                  "text": "The rest of the platform followed the same logic. Every screen went from a low fidelity wireframe to a consistent v2.0 built around discovery."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/khatu/proposal-evolution.webm",
                  "alt": "The Khatu interface cycling from a v1 low-fidelity wireframe through the shipped v2.0 templates page and dashboard",
                  "caption": "The v1 wireframe is the skeleton the v2.0 was built on."
                }
              ]
            },
            {
              "id": "section-takeaway",
              "tocLabel": "Takeaway",
              "label": "Takeaway",
              "h3": "Research turned a reskin into a platform people could actually navigate.",
              "content": [
                {
                  "type": "body",
                  "text": "Khatu 2.0 was designed and handed off as a research backed proposal, so there's no adoption metric to point to here. That's the honest version. What the project shows is the reframe: the team asked for a new coat of paint, and the research turned it into a redesign about discovery over decoration, so the platform's real value could finally be found."
                }
              ]
            }
          ]
        },
        /* @cases-end */
      ], // end cases[]
    },

  // ---------------------------------------------------------------------------
  // ESPAÑOL — agregar traducciones cuando estén listas
  // Duplica la estructura de `en` con el contenido traducido.
  // ---------------------------------------------------------------------------
  es: {
    "site": {
      "designerName": "Lenin Cuadra",
      "role": "Product Designer",
      "email": "hola@lenincuadra.com",
      "linkedinUrl": "https://www.linkedin.com/in/lenincuadra/",
      "resumeUrl": {
        "en": "assets/cv/Lenin_Cuadra_CV_EN.pdf",
        "es": "assets/cv/Lenin_Cuadra_CV_ES.pdf"
      },
      "lang": "es"
    },
    "ui": {
      "nav": {
        "work": "Trabajos",
        "about": "Sobre mí",
        "contact": "Contacto"
      },
      "footer": {
        "work": "Trabajos",
        "about": "Sobre mí",
        "linkedin": "LinkedIn",
        "resume": "CV",
        "email": "Email",
        "builtWith": "Diseñado y construido con cuidado."
      },
      "hero": {
        "cta": "Ver trabajos",
        "scroll": "Desplazate para ver trabajos"
      },
      "case": {
        "readMore": "Ver caso",
        "featuredLabel": "Destacado",
        "gridLabel": "Trabajos seleccionados"
      }
    },
    "home": {
      "hero": {
        "eyebrow": "Abierto a nuevas oportunidades",
        "contactCta": "Hablemos",
        "firstName": "Lenin",
        "lastName": "Cuadra",
        "role": "Senior Product Designer · Líder de Adopción de IA"
      },
      "work": {
        "heading": "Trabajo seleccionado enfocado en sistemas, claridad y resultados medibles."
      },
      "about": {
        "heading": "Diseño productos donde las necesidades del usuario, las restricciones técnicas y los objetivos de negocio se alinean.",
        "paragraphs": [
          "Soy product designer especializado en sistemas complejos, plataformas y flujos donde la claridad y la estructura son lo que más importa. Mi trabajo típicamente implica rediseñar experiencias fragmentadas en soluciones coherentes y escalables.",
          "Abordo el diseño a través de las restricciones. En lugar de tratar las limitaciones como bloqueos, las uso para dar forma a las decisiones temprano, asegurando que lo que se diseña pueda construirse y mantenerse en el tiempo.",
          "Trabajo estrechamente con equipos de ingeniería y producto para definir sistemas, no solo pantallas. Esto incluye patrones de interacción, modelos de estado y la lógica detrás de la UI, apuntando a la consistencia entre superficies y la escalabilidad a largo plazo.",
          "Últimamente también lidero la adopción de IA en mi equipo de diseño: flujos guiados por prompts que llevan un diseño de Figma a código listo para producción, con reglas que hacen que el resultado coincida con el producto real. Es el mismo pensamiento guiado por restricciones, aplicado a un set de herramientas nuevo."
        ],
        "skills": [
          "Diseño de zero-to-one",
          "Refactorización de System Legacy",
          "Design Systems",
          "Research UX y validación de usabilidad",
          "Flujos de diseño asistidos por IA",
          "Product thinking"
        ],
        "vennCenter": "Yo"
      },
      "contact": {
        "heading": "Construyamos algo con sentido.",
        "body": "Estoy abierto a roles de product design, colaboraciones y conversaciones sobre sistemas complejos, diseño de plataformas y experiencias escalables."
      },
    }
  ,

      cases: [
        // ---------------------------------------------------------------------
        // CASO 0 — AI TOOLING / PSH
        // ---------------------------------------------------------------------
        {
          "slug": "no-handoff",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/no-handoff/cover.webp",
            "video": "assets/images/no-handoff/no-handoff-result.webm",
            "screens": [
              {
                "src": "assets/images/no-handoff/screen-app.webp",
                "label": "App en ejecución"
              },
              {
                "src": "assets/images/no-handoff/screen-library.webp",
                "label": "Librería de componentes"
              },
              {
                "src": "assets/images/no-handoff/component-mapping.webp",
                "label": "Referencia de componentes"
              }
            ]
          },
          "card": {
            "tags": [
              "Claude Code",
              "Figma MCP",
              "Design-to-Code"
            ],
            "title": "No Handoff: Closing the Design-Dev Gap",
            "excerpt": "Encontré la forma de tener código funcional en 2 días, no reemplazando el proceso, sino corrigiendo cómo me comunicaba con la IA. El resultado desbloqueó 4 capacidades que el equipo de diseño no tenía antes."
          },
          "meta": {
            "title": "No Handoff: Closing the Design-Dev Gap · Lenin Cuadra",
            "description": "Encontré la forma de tener código funcional en 2 días, no reemplazando el proceso, sino corrigiendo cómo me comunicaba con la IA. El resultado desbloqueó 4 capacidades que el equipo de diseño no tenía antes."
          },
          "hero": {
            "title": "No Handoff: Closing the Design-Dev Gap",
            "subtitle": "Creado con Claude Code + Figma MCP"
          },
          "quickScan": {
            "role": "Product Designer",
            "team": "Solo",
            "timeline": "2 días",
            "tools": "Claude Code · Figma MCP"
          },
          "sections": [
            {
              "id": "section-overview-image",
              "content": [
                {
                  "type": "callout",
                  "variant": "warning",
                  "title": "Nota de confidencialidad",
                  "text": "El programa mostrado es ficticio: la marca, el cliente y el design system reales están protegidos por NDA y no aparecen en ninguna captura ni grabación."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/no-handoff/no-handoff-result.webm",
                  "alt": "Del armado de los componentes en Claude Code al producto EduCore funcionando — diseño a código en movimiento"
                }
              ]
            },
            {
              "id": "section-overview",
              "tocLabel": "Visión general",
              "label": "Visión general",
              "heading": "Visión general",
              "h3": "Nuestra entrega estándar en PSH toma 2 semanas",
              "layout": "overview",
              "content": [
                {
                  "type": "body",
                  "text": "Diseñar en Figma, documentar redlines, hacer handoff a los desarrolladores, iterar con QA. Lo que construí en 2 días se apoyó en ese proceso. El trabajo en Figma lo hizo posible."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problema",
              "label": "Problema",
              "heading": "El problema",
              "h3": "Cada vez que intentaba generar código desde diseños de Figma, la IA alucinaba.",
              "content": [
                {
                  "type": "body",
                  "text": "Un componente equivocado se propaga a cada pantalla que lo usa: el resultado se ve parecido, pero no es lo suficientemente confiable para mostrárselo a alguien."
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisiones",
              "label": "Decisiones",
              "heading": "Las tres decisiones que lo hicieron funcionar.",
              "h3": "Tres restricciones que eliminaron las alucinaciones.",
              "content": [
                {
                  "type": "heading",
                  "text": "1. Reducir el alcance"
                },
                {
                  "type": "body",
                  "text": "Solo los componentes que necesitaba este MVP, no el design system completo. Un proyecto, un alcance, reutilizable después."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/kitchensink.webp",
                  "alt": "Librería de componentes EduCore — el catálogo kitchen-sink con todos los componentes construidos"
                },
                {
                  "type": "heading",
                  "text": "2. Construir la librería primero"
                },
                {
                  "type": "body",
                  "text": "Componente por componente vía Figma MCP: \"Replica esto con todos sus estados.\" Sin adivinar de memoria."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/process-component-structure.webp",
                  "alt": "Estructura de la librería de componentes en el editor — Button.tsx abierto mostrando props tipadas y clases CSS basadas en tokens"
                },
                {
                  "type": "heading",
                  "text": "3. Construir una tabla de referencia"
                },
                {
                  "type": "body",
                  "text": "Un archivo .md con cada componente y su enlace de Figma. Le instruí a Claude para que revisara el original automáticamente si algo parecía mal, sin reenviar links manualmente."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/component-mapping.webp",
                  "alt": "component-mapping.md — tabla de registro con nombre de componente, estado, ID de nodo en Figma y notas"
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Resultado",
              "label": "Resultado",
              "heading": "El resultado",
              "h3": "El resultado era indistinguible del producto real",
              "content": [
                {
                  "type": "heading",
                  "text": "Filtros, estados e interacciones funcionaban tal como se diseñaron"
                },
                {
                  "type": "video",
                  "src": "assets/images/no-handoff/no-handoff-flow.webm",
                  "caption": "Datos simulados, comportamiento real.",
                  "alt": "Portal EduCore Program en ejecución: filtros, flujo de opt-out, banner opted-out y toast de éxito"
                },
                {
                  "type": "heading",
                  "text": "Layout y flujos coincidían con Figma al 100%"
                },
                {
                  "type": "heading",
                  "level": 5,
                  "text": "Expandí y arrastrá para comparar: Figma vs Code"
                },
                {
                  "type": "row",
                  "items": [
                    {
                      "type": "slider",
                      "before": { "src": "assets/images/no-handoff/compare-figma-base.webp", "label": "Figma — Main Screen", "alt": "Pantalla principal del Portal EduCore Program — diseño en Figma" },
                      "after":  { "src": "assets/images/no-handoff/compare-app-base.webp", "label": "Code — Main Screen", "alt": "Pantalla principal del Portal EduCore Program — build en código" }
                    },
                    {
                      "type": "slider",
                      "before": { "src": "assets/images/no-handoff/compare-figma-optout.webp", "label": "Figma — Modal Benefits", "alt": "Confirmación de opt-out con panel de beneficios — diseño en Figma" },
                      "after":  { "src": "assets/images/no-handoff/compare-app-optout.webp", "label": "Code — Modal Benefits", "alt": "Confirmación de opt-out con panel de beneficios — build en código" }
                    }
                  ]
                }
              ]
            },
            {
              "id": "section-unlocks",
              "tocLabel": "Impacto",
              "label": "Impacto",
              "heading": "El impacto",
              "h3": "4 casos de uso que el equipo no tenía antes.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "User testing — comportamiento real de componentes, problemas reales de accesibilidad a la vista",
                    "Presentaciones a stakeholders — fidelidad de app en vivo en lugar de un prototipo clickeable",
                    "Sales demos — look & feel de producción, fácil de actualizar",
                    "Potencial fin del handoff — diseño entrega componentes directamente a desarrollo"
                  ]
                }
              ]
            },
            {
              "id": "section-status",
              "tocLabel": "Estado",
              "label": "Estado",
              "heading": "Estado.",
              "h3": "Escalando el nuevo proceso de diseño",
              "content": [
                {
                  "type": "body",
                  "text": "Le hice una demo a mi Design Manager, quien la llevó al CPO. La respuesta: avanzar con un repositorio compartido en GitHub y Storybook. Una reunión con el Product Manager es el siguiente paso para definir cómo."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASO 1 — FIGMA PLUGIN / WEBP EXPORT
        // ---------------------------------------------------------------------
        {
          "slug": "figma-webp-export",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/figma-webp-export/cover.webp",
            "video": "assets/images/figma-webp-export/figma-flow.webm",
            "screens": []
          },
          "card": {
            "tags": ["Vibe Coding", "Figma Plugin", "AI-Accelerated Workflows"],
            "title": "77 Minutes to Fix a 1-Hour Recurring Problem",
            "excerpt": "Una diseñadora lo pidió. Dije que podía resolverlo. 77 minutos después, lo que tardaba una hora tarda menos de un minuto — y es gratis para todos."
          },
          "meta": {
            "title": "77 Minutes to Fix a 1-Hour Recurring Problem · Lenin Cuadra",
            "description": "Figma no exporta .webp de forma nativa, y cada plugin que lo hace está detrás de un muro de pago. Construí un plugin de exportación por lotes usando solo Claude.ai — en 77 minutos. Está publicado en la Figma Community y disponible para cualquier diseñador."
          },
          "hero": {
            "title": "77 Minutes to Fix a 1-Hour Recurring Problem",
            "subtitle": "Un plugin gratuito de exportación .webp para Figma — creado con Claude.ai"
          },
          "quickScan": {
            "role": "Product Designer",
            "team": "Solo",
            "timeline": "77 minutos",
            "tools": "Claude.ai · Figma Plugin API"
          },
          "sections": [
            {
              "id": "section-overview-image",
              "content": [
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "auto",
                  "src": "assets/images/figma-webp-export/figma-flow.webm",
                  "alt": "El plugin de exportación a .webp corriendo en Figma — flujo de UI con imágenes seleccionadas"
                }
              ]
            },
            {
              "id": "section-overview",
              "tocLabel": "Visión general",
              "label": "Visión general",
              "h3": "Una fricción que cuesta una hora por entrega.",
              "content": [
                {
                  "type": "body",
                  "text": "Exportar imágenes a .webp es una parte rutinaria del handoff de diseño a desarrollo. Figma no lo soporta de forma nativa, y cada plugin que lo hace está detrás de un muro de pago. El workaround era manual: exportar como jpg o png, convertir uno por uno en una herramienta externa. Una fricción pequeña que se acumula rápido, y afecta a todo diseñador que entrega a desarrollo, sin importar el proyecto o el equipo."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problema",
              "label": "Problema",
              "h3": "Cada solución existente cuesta dinero o cuesta tiempo.",
              "content": [
                {
                  "type": "body",
                  "text": "Con 20 o 50 créditos por plan, los plugins de pago se agotan rápido. Exportá 10 imágenes, hacé algunos ajustes, volvé a exportar, y se terminaron. Y el workaround manual tampoco es gratis: una sola exportación tarda alrededor de 5 minutos. Para 12 imágenes en tres viewports (desktop, tablet, mobile), es una hora completa. Esa hora la paga el diseñador o cae sobre el desarrollador. De cualquier forma, alguien paga por un problema que no debería existir."
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Proceso",
              "label": "Proceso",
              "h3": "Una conversación con Claude.ai. Sin experiencia previa en desarrollo de plugins.",
              "content": [
                {
                  "type": "body",
                  "text": "Una diseñadora del lado de la agencia planteó el problema. Le dije que podía construir un plugin para resolverlo. Usando Claude.ai y nada más que vibe coding, lo construí y probé localmente en 77 minutos, ejecutándolo en el Developer Mode de Figma mientras iteraba. También agregué un toggle de idioma español/inglés: trabajo para un cliente de EE.UU. pero mi agencia está en Argentina, y los diseñadores de ambos lados necesitaban usarlo sin fricción."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/figma-webp-export/plugin-code.webm",
                  "caption": "Una sola sesión de Claude.ai (con el consumo), y los archivos del plugin generados — manifest, lógica y UI — abiertos en Cursor.",
                  "alt": "Editor Cursor mostrando los archivos del plugin WebP Optimizer generados con Claude.ai (manifest.json, code.js, ui.html), y la pantalla de consumo de Claude.ai"
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Resultado",
              "label": "Resultado",
              "h3": "Lo que antes tardaba una hora ahora tarda menos de un minuto.",
              "content": [
                {
                  "type": "body",
                  "text": "Exportación por lotes a .webp con control de resolución, publicado en la Figma Community. Lo envié tras probarlo localmente; pasó la revisión en 3 días y ahora es gratis para todos."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/figma-webp-export/plugin-demo.webm",
                  "caption": "Demo completo — exportación por lotes a .webp, y luego los archivos en Finder con sus pesos.",
                  "alt": "Demo del plugin — exportación por lotes a .webp y los archivos resultantes con sus pesos en Finder"
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impacto",
              "label": "Impacto",
              "h3": "Una solución que funciona para cualquier equipo, proyecto y cadencia de entrega.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Los diseñadores entregan más rápido — Sin más loops de conversión manual ni conteo de créditos.",
                    "El handoff a desarrollo es más limpio — Los archivos llegan en el formato que el equipo realmente necesita.",
                    "Escala a cualquier tamaño de proyecto — 6 imágenes o 12, el costo de tiempo es el mismo: menos de un minuto.",
                    "Gratis, permanentemente — Sin muro de pago, sin actualizaciones de plan, sin créditos."
                  ]
                },
                {
                  "type": "quote",
                  "text": "Escuchó un problema que nuestro equipo estaba teniendo, le puso la cabeza, y creó un plugin que se acaba de publicar en Figma. El equipo de UX puede usarlo de inmediato.",
                  "attr": "Lead de Product Design"
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "auto",
                  "themed": true,
                  "src": "assets/images/figma-webp-export/lead-endorsement-dark.webm",
                  "caption": "El endorsement en el Slack del equipo: el post, las reacciones y el hilo.",
                  "alt": "Hilo y post de Slack donde la lead de Product Design celebra el plugin y el equipo reacciona; resuelve el problema de handoff de .webp y el equipo de UX puede usarlo de inmediato"
                }
              ]
            },
            {
              "id": "section-status",
              "tocLabel": "Estado",
              "label": "Estado",
              "h3": "Publicado y disponible para ambos equipos.",
              "content": [
                { "type": "subheading", "text": "Publicado y disponible para ambos equipos: el del cliente y el de la agencia" },
                { "type": "body", "text": "y para cualquier usuario de Figma via la Community." },
                { "type": "subheading", "text": "La diseñadora que planteó el problema es la usuaria principal." },
                { "type": "body", "text": "El equipo del cliente y yo lo usamos según necesidad." },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/figma-webp-export/status-scroll.webm",
                  "caption": "La página del plugin en la Figma Community — publicado e instalable por cualquiera.",
                  "alt": "Scroll por la página del WebP Optimizer en la Figma Community — portada, descripción y botón de instalación"
                },
                {
                  "type": "link",
                  "href": "https://www.figma.com/community/plugin/1644736186405569289",
                  "text": "Ver en la Figma Community →"
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASO 2 — FINTECH / NARANJA X
        // ---------------------------------------------------------------------
        {
          "slug": "fintech-ecosystem",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
            "video": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.webm",
            "screens": [
              {
                "src": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.webm",
                "poster": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                "label": "Web Checkout"
              },
              {
                "src": "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.webm",
                "poster": "assets/images/fintech/2-3—Payment link/0-nx-description.png",
                "label": "Payment Link"
              },
              {
                "src": "assets/images/fintech/3-3—Nshop/9-financial-dashboard.webm",
                "poster": "assets/images/fintech/3-3—Nshop/3-screens01.png",
                "label": "Financial Dashboard"
              }
            ]
          },
          "card": {
            "tags": [
              "Fintech",
              "Arquitectura de Producto",
              "Pagos"
            ],
            "title": "De cero a uno: Ecosistema de Pagos Conectado",
            "excerpt": "Diseñé la primera versión cohesiva de un ecosistema fintech de tres productos para Naranja X, habilitando a los comerciantes a cobrar pagos a través de checkout embebido, links de pago y dashboards financieros."
          },
          "meta": {
            "title": "Naranja X — Ecosistema Fintech · Lenin Cuadra",
            "description": "Diseño de cero a uno del ecosistema de pagos conectado de Naranja X: checkout embebido, herramientas de comercio y flujos de pago entregados como un sistema coherente, para que los comercios cobraran sin salir de su plataforma."
          },
          "hero": {
            "title": "Creación de Cero a Uno de un Ecosistema de Pagos Conectado.",
            "subtitle": "Naranja X: checkout embebido, links de pago y un dashboard financiero, diseñados como un solo sistema bajo restricciones técnicas duras."
          },
          "quickScan": {
            "role": "Product Designer único en tres superficies de producto",
            "team": "Product Owner · Ingenieros Frontend · Ingenieros Backend",
            "timeline": "6 meses",
            "tools": "Figma · Scrum + Lean UX"
          },
          "sections": [
            {
              "id": "section-overview",
              "tocLabel": "Panorama",
              "label": "Panorama",
              "h3": "Tres superficies, un solo responsable de diseño, seis meses: el primer ecosistema de pagos conectado de Naranja X.",
              "layout": "overview",
              "content": [
                {
                  "type": "body",
                  "text": "Naranja X necesitaba que los comercios cobraran sin salir de la plataforma, y todavía no existía nada. La respuesta fueron tres superficies de producto funcionando como un ecosistema: Web Checkout para compradores, Payment Link para comercios y NShops para la visibilidad financiera."
                },
                {
                  "type": "body",
                  "text": "Fui el único diseñador en las tres superficies durante seis meses. Mi trabajo fue traducir requerimientos de negocio y realidades del backend en un sistema coherente: modelos de interacción, arquitectura de información y la lógica operativa que dejaba a compradores, comercios y negocio leyendo el mismo estado."
                },
                {
                  "type": "image",
                  "src": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                  "alt": "Panorama del ecosistema de pagos Naranja X",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problema",
              "label": "Problema",
              "h3": "Tres productos, tres fuentes de fricción, y ningún lenguaje compartido entre ellos.",
              "content": [
                {
                  "type": "body",
                  "text": "Web Checkout sufría tiempos de respuesta lentos del backend y límites duros de UI impuestos por el payment gateway. Payment Link corría con lógica MVP de intento único: cuando un link expiraba tras un pago fallido, desaparecía para siempre. NShops no tenía visibilidad financiera centralizada ni comunicación de estado efectiva, así que los comercios no podían saber en qué estado estaban sus operaciones."
                },
                {
                  "type": "quote",
                  "text": "\"El desafío no era solo la UI. Era equilibrar la experiencia del comprador, las operaciones del comercio y la visibilidad del negocio, todo a la vez.\"",
                  "attr": "Encuadre de diseño, kickoff del proyecto"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Restricciones",
              "label": "Restricciones",
              "h3": "El gateway solo permitía CSS, los links morían tras un pago fallido, y los comercios operaban a ciegas.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Solo CSS — el payment gateway (Lyra) no daba ningún acceso JavaScript a la interfaz de checkout. Toda personalización debía hacerse únicamente con CSS.",
                    "Intento único — los links de pago expiraban permanentemente tras un pago fallido. Los comercios no tenían camino de recuperación.",
                    "Sin visibilidad — NShops no tenía comunicación de estado centralizada entre superficies. Los comercios no podían rastrear el estado de sus operaciones."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Proceso",
              "label": "Proceso",
              "h3": "Primero el Happy Path; el pulido llegó después.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Fase 1: de papel a Mid-Fi y Hi-Fi en menos de 3 días"
                },
                {
                  "type": "body",
                  "text": "Para el checkout inicial definí el Happy Path temprano para alinear con ingeniería, y prioricé la claridad funcional sobre el pulido visual. La velocidad vino de la estructura, no de saltear pasos."
                },
                {
                  "type": "image",
                  "src": "assets/images/fintech/1-3—web checkout/1-nx-wireframes.png",
                  "alt": "Wireframes del Web Checkout: el flujo pasando de papel a mid-fi",
                  "loading": "lazy"
                },
                {
                  "type": "subheading",
                  "text": "Fase 2: reconstruir dentro de un gateway de solo CSS"
                },
                {
                  "type": "body",
                  "text": "Lyra permitía personalización con CSS y nada más. Mapeé lo posible dentro de ese límite y reconstruí el flujo de tarjeta sin marca adentro, preservando la usabilidad a pesar de la restricción."
                },
                {
                  "type": "video",
                  "src": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.webm",
                  "poster": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                  "label": "Prototipo del Checkout",
                  "alt": "Prototipo interactivo del flujo de checkout reconstruido, de punta a punta"
                },
                {
                  "type": "subheading",
                  "text": "Fase 3: convertir un callejón sin salida en un camino de recuperación"
                },
                {
                  "type": "body",
                  "text": "La expiración del Payment Link generaba fricción operativa en cascada: cada pago fallido obligaba al comercio a recrear el link desde cero. El fix, Duplicar Payment Link, eliminó por completo la recreación manual e hizo rápida la recuperación."
                },
                {
                  "type": "video",
                  "src": "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.webm",
                  "poster": "assets/images/fintech/2-3—Payment link/0-nx-description.png",
                  "label": "Demo de Payment Link",
                  "alt": "Flujo de creación y duplicación del Payment Link en la herramienta del comercio"
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisiones",
              "label": "Decisiones",
              "h3": "Diseñé dentro de las restricciones en lugar de escalarlas.",
              "content": [
                {
                  "type": "subheading",
                  "text": "El Happy Path antes del refinamiento visual"
                },
                {
                  "type": "body",
                  "text": "La alineación con ingeniería necesitaba primero un flujo funcional claro. Definir el Happy Path temprano dejó a frontend y backend avanzar en paralelo mientras el pulido visual llegaba después, recortando retrabajo costoso."
                },
                {
                  "type": "subheading",
                  "text": "El solo-CSS tratado como brief, no como bloqueo"
                },
                {
                  "type": "body",
                  "text": "Escalar para cuestionar la integración con Lyra habría frenado el lanzamiento. Aceptar la restricción y diseñar adentro mantuvo el impulso y entregó un checkout funcionando sin demora."
                },
                {
                  "type": "subheading",
                  "text": "Duplicar Payment Link encuadrado como infraestructura, no conveniencia"
                },
                {
                  "type": "body",
                  "text": "Presenté la acción de duplicar como un mecanismo de recuperación sistémica y no como una funcionalidad agradable de tener. Ese encuadre fue lo que aceleró la aprobación de los stakeholders."
                }
              ]
            },
            {
              "id": "section-validation",
              "tocLabel": "Validación",
              "label": "Validación",
              "h3": "5 de 7 usuarios crearon un link de pago; los fallos señalaron la comunicación de estado.",
              "content": [
                {
                  "type": "body",
                  "text": "Testeé con 7 usuarios sobre prototipos interactivos. Cinco completaron la creación del Payment Link por el Happy Path; solo tres completaron la confirmación de pago. Los flujos funcionaban, pero la comunicación de estado entre superficies no, y ese hallazgo fue directo a las prioridades del Sprint."
                },
                {
                  "type": "image",
                  "src": "assets/images/fintech/3-3—Nshop/5-nx-research.png",
                  "alt": "Síntesis del test de usabilidad: tasas de completitud y puntos de fricción en las siete sesiones",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impacto",
              "label": "Impacto",
              "h3": "Naranja X pasó de cero a un ecosistema de pagos funcionando en tres superficies.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "3 superficies conectadas lanzadas — Checkout, Payment Link y NShops entregados como un solo sistema",
                    "Duplicar Payment Link — recuperación tras pagos fallidos sin recrear nada a mano",
                    "Jerarquía de estado más clara — compradores, comercios y negocio por fin leen el mismo estado"
                  ]
                },
                {
                  "type": "video",
                  "src": "assets/images/fintech/3-3—Nshop/9-financial-dashboard.webm",
                  "poster": "assets/images/fintech/3-3—Nshop/3-screens01.png",
                  "label": "Dashboard Financiero",
                  "alt": "Dashboard financiero de NShops mostrando el estado centralizado de las operaciones"
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "Qué demuestra esto",
              "label": "Qué demuestra esto",
              "h3": "Ejecución guiada por restricciones, pensamiento de ecosistema y ownership, en un mismo proyecto.",
              "content": [
                {
                  "type": "body",
                  "text": "Este caso muestra cómo es mi ejecución bajo restricciones: rápida sin perder coherencia, con decisiones evaluadas por su efecto en el ecosistema completo y no en una pantalla, y un ownership que va de la creación de cero a uno hasta la optimización estructural post-lanzamiento."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASO 2 — ECOMMERCE / MONTIRONI AUTOMOTIVE
        // ---------------------------------------------------------------------
        {
          "slug": "ecommerce-conversion",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/ecommerce/cover.webp",
            "screens": [
              {
                "src": "assets/images/ecommerce/intervention-progression.webm",
                "label": "Evolución del flujo"
              },
              {
                "src": "assets/images/ecommerce/smart-suggestions.webm",
                "label": "Sugerencias inteligentes"
              },
              {
                "src": "assets/images/ecommerce/whatsapp-flow.webm",
                "label": "Handoff a WhatsApp"
              }
            ]
          },
          "card": {
            "tags": [
              "E-commerce",
              "Conversión",
              "Estrategia UX"
            ],
            "title": "Incremento del 221% en Ingresos Q1 Impulsado Únicamente por Intervención UX",
            "excerpt": "Rediseñé el flujo de consulta de neumáticos e introduje WhatsApp como canal de alta intención para Montironi Automotive. Resultado: 221% de crecimiento de ingresos en Q1 sin cambios de precios, sin campañas, sin factores externos."
          },
          "meta": {
            "title": "Montironi Automotive — 221% en Ingresos · Lenin Cuadra",
            "description": "221% de crecimiento de ingresos en Q1 para una concesionaria automotriz, con UX como única variable: reconstruí un flujo de consulta que perdía compradores y moví el handoff a WhatsApp. Sin cambios de precios ni campañas."
          },
          "hero": {
            "title": "Incremento del 221% en Ingresos Q1 Impulsado Únicamente por Intervención UX.",
            "subtitle": "Montironi Automotive — rediseño de UX + WhatsApp como canal de alta intención, sin cambios de precio ni campañas."
          },
          "quickScan": {
            "role": "Product Designer — Rediseño UX y Estrategia de Canal",
            "team": "Stakeholders del negocio · Equipo de desarrollo",
            "timeline": "Ciclo de proyecto Q1",
            "tools": "Rediseño UX · Análisis de conversión · Estrategia de canal"
          },
          "sections": [
            {
              "id": "section-overview",
              "tocLabel": "Panorama",
              "label": "Panorama",
              "h3": "Un problema de conversión disfrazado de problema de ventas.",
              "layout": "overview",
              "content": [
                {
                  "type": "body",
                  "text": "Las ventas de neumáticos estaban planchadas y se asumía que era un problema de demanda. No lo era: el flujo de consulta del sitio estaba perdiendo compradores en silencio. Lo replanteé como un problema de conversión y reconstruí el flujo. El resultado fue limpio de atribuir: 221% de crecimiento en ingresos, medido el mismo trimestre un año después."
                }
              ]
            },
            {
              "id": "section-scope",
              "tocLabel": "Alcance",
              "label": "Alcance",
              "h3": "Subir la conversión sin tocar precio, campañas ni inventario.",
              "content": [
                {
                  "type": "body",
                  "text": "Las ventas de neumáticos rendían poco por un flujo de consulta complejo y mucha fricción en el sitio. El trabajo fue un rediseño UX completo de ese flujo más un nuevo canal de conversión, con una restricción: sin cambios de precio, campañas ni inventario. Así, lo que moviera los números iba a ser el diseño, y nada más."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problema",
              "label": "Problema",
              "h3": "La fricción estaba ocultando ingresos.",
              "content": [
                {
                  "type": "body",
                  "text": "El flujo de consulta original pedía demasiado: un formulario abierto donde el comprador tenía que detallar todo él mismo, dependiendo solo del envío web tradicional. Los compradores abandonaban a mitad del formulario, la comunicación con el negocio era lenta y la conversión quedaba baja. La demanda estaba, pero el flujo la dejaba escapar."
                }
              ]
            },
            {
              "id": "section-intervention",
              "tocLabel": "Intervención",
              "label": "Intervención",
              "h3": "Simplificar el camino. Cambiar el canal.",
              "content": [
                {
                  "type": "heading",
                  "text": "Bajar la carga cognitiva"
                },
                {
                  "type": "body",
                  "text": "Reconstruí el formulario de consulta desde el papel: menos campos, una jerarquía más clara y un flujo que guía en vez de interrogar. Pasó de bocetos a mano a un formulario mid-fi antes de que ningún pixel fuera final."
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "wide",
                  "canvas": "dark",
                  "src": "assets/images/ecommerce/intervention-progression.webm",
                  "caption": "De los bocetos a mano al formulario de consulta mid-fi, la progresión del rediseño.",
                  "alt": "Progresión de diseño: los wireframes en papel disuelven en el formulario de consulta mid-fi de Montironi"
                },
                {
                  "type": "body",
                  "text": "Para la selección de marcas tomé el patrón de respuestas rápidas / chips que la gente ya conoce de apps como LinkedIn: tocar una sugerencia en vez de escribirla. Menos inputs, completado más rápido."
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "auto",
                  "size": "half",
                  "src": "assets/images/ecommerce/smart-suggestions.webm",
                  "caption": "El patrón de respuestas rápidas / chips (estilo LinkedIn) aplicado a la selección de marcas.",
                  "alt": "Patrón de chips / sugerencias: tocar una sugerencia autocompleta el campo"
                },
                {
                  "type": "heading",
                  "text": "Sumar un canal de alta intención"
                },
                {
                  "type": "body",
                  "text": "Después cambié el canal en sí: WhatsApp como handoff a un toque desde el formulario. Comprador y negocio podían hablar en tiempo real, aclarar specs técnicas complejas al instante, y el abandono que pasaba justo después de mostrar interés bajó."
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "portrait",
                  "src": "assets/images/ecommerce/whatsapp-flow.webm",
                  "caption": "El formulario rediseñado en mobile, con WhatsApp como handoff de alta intención a un toque.",
                  "alt": "El formulario de consulta de neumáticos de Montironi en mobile, con handoff a WhatsApp"
                }
              ]
            },
            {
              "id": "section-before-after",
              "tocLabel": "Antes / Después",
              "label": "Antes / Después",
              "h3": "De un formulario abierto que pedía todo a un handoff a WhatsApp a un toque.",
              "content": [
                {
                  "type": "table",
                  "headers": ["Antes", "Después"],
                  "rows": [
                    ["Alta carga cognitiva", "Campos reducidos"],
                    ["Formulario abierto, todo el detalle a mano", "Jerarquía y orientación más claras"],
                    ["Sin canal de comunicación en tiempo real", "Punto de entrada WhatsApp de alta intención integrado"]
                  ]
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Resultado",
              "label": "Resultado",
              "h3": "221% de crecimiento en ingresos, con la UX como única variable.",
              "content": [
                {
                  "type": "body",
                  "text": "Medido el mismo trimestre un año después, con el rediseño como lo único que cambió, así la atribución es limpia, sin factores que confundan. El flujo que antes perdía compradores ahora los convierte."
                },
                {
                  "type": "heading",
                  "text": "Cualitativo"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Proceso de consulta más ágil y rápido.",
                    "Mayores tasas de completado del formulario.",
                    "~10 segundos de tiempo promedio de tarea.",
                    "Cada consulta por WhatsApp se convirtió en venta (dpto. Neumáticos)."
                  ]
                },
                {
                  "type": "heading",
                  "text": "Cuantitativo"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "221% de aumento en ventas de neumáticos Q1 vs. el mismo trimestre del año anterior.",
                    "42.65% de crecimiento en adquisición de usuarios.",
                    "+54 contactos por WhatsApp al mes.",
                    "93% del tráfico fue mobile."
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/ecommerce/impact-chart.gif",
                  "alt": "Gráfico de impacto",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "Conclusión",
              "label": "Conclusión",
              "h3": "Un problema de ingresos resuelto con UX, no solo un rediseño de interfaz.",
              "content": [
                {
                  "type": "body",
                  "text": "La palanca no fue el pulido visual: fue encontrar dónde el funnel perdía gente, pensar más allá de la interfaz hasta el canal en sí, y ejecutar contra un número medible. La fricción conductual y las dinámicas de conversión fueron lo que movió los ingresos."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASO 3 — TELECOM / LEGACY REFACTOR
        // ---------------------------------------------------------------------
        {
          "slug": "telecom-legacy-refactor",
          "template": "v3",
          "images": {
            "cover": "assets/images/telecom/after-poster.png",
            "video": "assets/images/telecom/before-after.webm",
            "hero": "assets/images/telecom/portrait.png",
            "overviewImage": "assets/images/telecom/mockup-multitasking.png"
          },
          "card": {
            "tags": [
              "Telecom",
              "Diseño de Sistemas",
              "Design Systems"
            ],
            "title": "Refactoring de una Plataforma Telecom Legada para Claridad Estructural",
            "excerpt": "Lideré el refactoring estructural de una plataforma telecom en producción: de una IA fragmentada y navegación inconsistente a una arquitectura v2 coherente alineada con el nuevo Design System corporativo."
          },
          "meta": {
            "title": "Refactoring Telecom Legado · Lenin Cuadra",
            "description": "Lideré el refactor estructural de una plataforma telecom en producción: reestructura completa de la IA y alineación al design system, entregadas como un salto v1 a v2, con mayor éxito de tarea confirmado post-lanzamiento."
          },
          "hero": {
            "tags": [
              "Telecom",
              "Diseño de Sistemas",
              "Refactoring de Plataforma"
            ],
            "title": "Refactoring de una Plataforma Telecom Legada para Claridad Estructural y Consistencia del Sistema."
          },
          "quickScan": {
            "role": "Lead Designer — Refactoring Estructural",
            "team": "UX Lead · Equipo de ingeniería",
            "timeline": "Transición completa v1 → v2",
            "tools": "Design System · Reestructuración de IA · Testing de usabilidad"
          },
          "sections": [
            {
              "id": "section-overview",
              "tocLabel": "Panorama",
              "label": "Panorama",
              "h3": "Una plataforma telecom en vivo había superado su arquitectura original.",
              "content": [
                {
                  "type": "body",
                  "text": "Una aplicación telecom en producción, usada todos los días por equipos reales, había acumulado deuda estructural: una arquitectura de información fragmentada, navegación inconsistente e iconografía que dañaba la comprensión. Lideré un refactoring completo de v1 a v2, sin lanzamientos públicos incrementales, para devolverle la claridad estructural que había perdido."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/old-version.png",
                  "alt": "El portal de usuario telecom legacy: una lista de contactos, dial pad y un panel de reuniones amontonados",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problema",
              "label": "Problema",
              "h3": "El sistema hacía que los usuarios adivinaran en vez de reconocer.",
              "content": [
                {
                  "type": "body",
                  "text": "La jerarquía de información estaba mal estructurada, la navegación obligaba a adivinar en vez de reconocer, la iconografía era inconsistente, y todo el producto se había alejado del Design System que la empresa había adoptado en todo lo demás. En una herramienta ya en uso diario, eso sumaba fricción cognitiva y frenaba cada tarea."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/old-app-architecture.png",
                  "alt": "La arquitectura de información legacy mapeada como un árbol enorme de estados de llamada, opciones y pantallas de biblioteca anidados",
                  "loading": "lazy"
                },
                {
                  "type": "quote",
                  "text": "El problema no era visual. Era estructural. La arquitectura en sí misma estaba generando fricción cognitiva.",
                  "attr": "Encuadre de diseño, kickoff del refactoring"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Restricciones",
              "label": "Restricciones",
              "h3": "Un sistema en vivo, sin staging, un solo salto de v1 a v2.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Sistema en vivo — Sin entorno de staging, así que el refactoring tenía que salir como una transición completa de v1 a v2, sin estado público intermedio.",
                    "IA legacy — Agrupamientos fragmentados y dependencias implícitas entre módulos hacían que las correcciones parciales no se sostuvieran.",
                    "Design System — Adoptar el nuevo estándar corporativo requería alinear iconografía, componentes y patrones de interacción."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Proceso",
              "label": "Proceso",
              "h3": "Reestructurar la IA, estandarizar sobre el Design System, y después validar.",
              "content": [
                {
                  "type": "heading",
                  "text": "Empecé por los usuarios, no por las pantallas"
                },
                {
                  "type": "body",
                  "text": "Antes de tocar la estructura, hice entrevistas y las mapeé en un board de sentiment, de painpoints a satisfacción. Las mismas quejas aparecían una y otra vez: demasiada carga visual, ninguna noción del estado del sistema y una curva de aprendizaje pesada."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/sentiment-analysis-from-interviews.png",
                  "alt": "Un board de sentiment-analysis de las entrevistas, con sticky notes agrupadas de painpoints a satisfacción",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Convertí los hallazgos en heurísticas a resolver"
                },
                {
                  "type": "body",
                  "text": "Destilé la investigación en una lista corta de heurísticas para diseñar en contra: control y libertad del usuario, visibilidad del estado del sistema, prevención de errores y una mejor relación señal-ruido. Esas pasaron a ser la regla de cada decisión estructural."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/heuristic-focus-after-research.png",
                  "alt": "Cuatro heurísticas en las que enfocarse: control y libertad del usuario, visibilidad del estado del sistema, prevención de errores y relación señal-ruido",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Reestructuré la arquitectura de información"
                },
                {
                  "type": "body",
                  "text": "Redefiní el modelo de navegación, clarifiqué la lógica de agrupamiento e hice explícita la separación de módulos, desde wireframes low-fi hacia arriba. El objetivo era simple: reemplazar el patrón de adivinar-en-lugar-de-reconocer que el sistema legacy había acumulado."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/low-wireframing.png",
                  "alt": "Wireframe de baja fidelidad de la pantalla de llamada reestructurada, con transferencia y notas dispuestas con claridad",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Estandaricé sobre el Design System corporativo"
                },
                {
                  "type": "body",
                  "text": "Después alineé componentes, patrones de interacción e iconografía con el Design System corporativo usado en los otros productos de la empresa. Esa alineación bajó la curva de aprendizaje para los usuarios que ya conocían esos productos."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/mockup-overview.webp",
                  "alt": "La plataforma refactorizada: transferencia de llamada, participantes en llamada y la biblioteca de grabaciones, todo sobre componentes del Design System",
                  "loading": "lazy"
                },
                {
                  "type": "heading",
                  "text": "Validé con testing de usabilidad"
                },
                {
                  "type": "body",
                  "text": "Probé la nueva estructura e iteré donde fallaba. La navbar, por ejemplo, pasó por una ronda de cambios tras el testing: acciones como grabaciones y reportes que antes no se encontraban pasaron a ser ítems nombrados y visibles. La tasa de éxito de tareas, la claridad de navegación y la comprensión de iconos mejoraron."
                },
                {
                  "type": "image",
                  "ratio": "wide",
                  "src": "assets/images/telecom/usability-test-changes.png",
                  "alt": "Antes y después de la navbar a partir del testing de usabilidad: iconos sueltos reetiquetados y expuestos como ítems nombrados",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisiones",
              "label": "Decisiones",
              "h3": "Un salto completo a v2, no parches incrementales.",
              "content": [
                {
                  "type": "heading",
                  "text": "Una transición completa de v1 a v2 en vez de actualizaciones incrementales"
                },
                {
                  "type": "body",
                  "text": "Parchar un sistema estructuralmente roto de forma incremental habría producido una arquitectura híbrida: más difícil de mantener y peor para los usuarios durante la transición. Un salto de versión completo fue más arriesgado, pero produjo un resultado coherente y evitó arrastrar a los usuarios por una confusión prolongada."
                },
                {
                  "type": "heading",
                  "text": "Adoptar el Design System corporativo, no una solución visual local"
                },
                {
                  "type": "body",
                  "text": "El camino fácil era un set de iconos o una biblioteca de componentes local pegada a la IA existente. En cambio me alineé con el Design System corporativo, que forzó una reestructuración de IA más profunda pero compró consistencia de ecosistema y mucho menos mantenimiento futuro."
                },
                {
                  "type": "heading",
                  "text": "Priorizar la claridad de navegación por encima de la paridad de funcionalidades"
                },
                {
                  "type": "body",
                  "text": "Algunas funcionalidades legacy tuvieron que moverse o bajar de prioridad para que la navegación quedara clara. Tomé esas decisiones de forma explícita, según con qué frecuencia pasaba realmente una tarea y el modelo mental del usuario, no según dónde solía estar la funcionalidad."
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impacto",
              "label": "Impacto",
              "h3": "Más éxito en tareas y más claridad de navegación, confirmado post-lanzamiento.",
              "content": [
                {
                  "type": "body",
                  "text": "Medido después del lanzamiento, el refactoring movió lo que importaba. Mismo producto, mismos usuarios, una arquitectura v2 coherente, y la fricción estructural eliminada."
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Mayor tasa de éxito en tareas — Validado por testing de usabilidad post-lanzamiento.",
                    "Navegación más clara — Los usuarios reconocían los caminos en vez de adivinar.",
                    "Mejor comprensión de iconos — La iconografía del Design System superó al conjunto legacy.",
                    "Reestructuración de IA v2 completa — Lanzada sin entregas públicas incrementales."
                  ]
                },
                {
                  "type": "video",
                  "controls": false,
                  "ratio": "wide",
                  "src": "assets/images/telecom/before-after.webm",
                  "poster": "assets/images/telecom/after-poster.png",
                  "caption": "Antes y después del refactoring: la misma plataforma, reestructurada y alineada al Design System.",
                  "alt": "Antes y después de la plataforma telecom, de la versión legacy a la v2 refactorizada"
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "Conclusión",
              "label": "Conclusión",
              "h3": "El refactoring estructural es una disciplina de diseño, no solo de desarrollo.",
              "content": [
                {
                  "type": "body",
                  "text": "La arquitectura en sí era el problema, así que la arquitectura tenía que ser la solución. Este caso es donde aprendí a intervenir en un sistema legacy en vivo y lleno de restricciones sin interrumpirlo, a tratar un Design System como una decisión arquitectónica y no solo una mano de pintura, y a liderar diseño e ingeniería en un salto de versión completo y de alto riesgo."
                }
              ]
            }
          ]
        },

        // ---------------------------------------------------------------------
        // CASO — KHATU / PLATAFORMA INTERNA DE DEVS (rediseño research-driven)
        // ---------------------------------------------------------------------
        {
          "slug": "khatu",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/khatu/cover.webp"
          },
          "card": {
            "tags": ["Investigación UX", "Developer Experience", "Arquitectura de Información"],
            "title": "Khatu: Repensar una Plataforma Interna para Devs",
            "excerpt": "La plataforma interna de Naranja X podía crear un proyecto en minutos, pero pocos ingenieros la usaban. Entrevistas, un mapa de empatía y un card sorting convirtieron un pedido de refresh visual en un rediseño construido alrededor del descubrimiento."
          },
          "meta": {
            "title": "Khatu: Repensar una Plataforma Interna para Devs · Lenin Cuadra",
            "description": "Rediseño research-driven de Khatu, la plataforma interna de developers de Naranja X. Entrevistas, un mapa de empatía, una persona y un card sorting convirtieron un refresh visual en un rediseño construido alrededor del descubrimiento."
          },
          "hero": {
            "title": "Khatu: Repensar una Plataforma Interna para Devs",
            "subtitle": "Rediseño research-driven de la plataforma interna de developers de Naranja X"
          },
          "sections": [
            {
              "id": "section-lead",
              "content": [
                {
                  "type": "image",
                  "src": "assets/images/khatu/dashboard-v2.webp",
                  "alt": "Dashboard de Khatu 2.0: la home rediseñada de la plataforma interna de developers de Naranja X, con repositorios recientes y accesos a proyectos"
                }
              ]
            },
            {
              "id": "section-overview",
              "tocLabel": "Overview",
              "label": "Overview",
              "h3": "Khatu podía crear un proyecto entero en minutos, pero la mayoría de los ingenieros nunca lo abría.",
              "content": [
                {
                  "type": "body",
                  "text": "Khatu era la plataforma interna de Naranja X para developers. Desde un solo lugar podías generar un repositorio, tomar un template listo para usar, y configurar infraestructura cloud y seguridad. Convertía el primer día de un proyecto en unos pocos clics."
                },
                {
                  "type": "body",
                  "text": "Funcionaba, y a quienes lo usaban les gustaba. El problema era que la mayor parte del equipo de ingeniería no sabía que Khatu existía, o se olvidaba de que existía."
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "h3": "El pedido era un refresh visual. Empujamos para entender primero por qué la adopción era tan baja.",
              "content": [
                {
                  "type": "body",
                  "text": "El equipo nos vino a pedir una v2 más moderna. Antes de tocar un pixel, hicimos la pregunta más difícil: si Khatu ya ahorraba tanto tiempo, ¿por qué lo usaba tan poca gente? Una piel nueva sobre una herramienta que nadie usa sigue siendo una herramienta que nadie usa."
                }
              ]
            },
            {
              "id": "section-research",
              "tocLabel": "Research",
              "label": "Research",
              "h3": "Las entrevistas con los propios ingenieros de la plataforma se volvieron un mapa de empatía y una persona que llamamos Mate.",
              "content": [
                {
                  "type": "body",
                  "text": "Entrevistamos a los ingenieros que se suponía que vivían en Khatu todos los días, y agrupamos lo que decían, pensaban, hacían y sentían en un mapa de empatía."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/empathy-map.webp",
                  "alt": "Mapa de empatía construido a partir de las entrevistas con ingenieros, con notas agrupadas en dice, piensa, hace y siente",
                  "caption": "Notas de las entrevistas agrupadas en dice, piensa, hace y siente."
                },
                {
                  "type": "body",
                  "text": "De ahí destilamos una persona principal: Mate, un arquitecto senior que se pasa la semana desplegando infraestructura y arrancando proyectos de automation. Khatu estaba hecho para gente como él, y él era uno de los que menos lo usaba."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/persona-mate.webp",
                  "ratio": "portrait",
                  "alt": "Ficha de persona de Mate, un arquitecto senior: sus herramientas, stack técnico, motivaciones, metas y las barreras que le impiden usar Khatu",
                  "caption": "Mate: el arquitecto senior para el que Khatu fue construido."
                },
                {
                  "type": "heading",
                  "text": "Google Analytics y Hotjar Survey"
                },
                {
                  "type": "body",
                  "text": "Datos de comportamiento, para pesar lo que los ingenieros decían contra lo que realmente hacían."
                },
                {
                  "type": "gallery",
                  "images": [
                    { "src": "assets/images/khatu/hotjar-survey.webp", "alt": "Resultados de la encuesta de Hotjar hecha a usuarios de Khatu" },
                    { "src": "assets/images/khatu/analytics-insight.webp", "alt": "Insight de Google Analytics sobre cómo se movían los ingenieros dentro de Khatu" }
                  ]
                }
              ]
            },
            {
              "id": "section-insights",
              "tocLabel": "Insights",
              "label": "Insights",
              "h3": "Los ingenieros nunca se enteraban de que Khatu cambiaba, así que le preguntaban a un compañero en vez de abrirlo.",
              "content": [
                {
                  "type": "body",
                  "text": "Los mismos tres patrones aparecían una y otra vez."
                },
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Los ingenieros no desconfiaban de Khatu, le perdían el rastro: lanzaba cambios que nadie anunciaba, así que nunca sabían qué había de nuevo y dejaban de mirar.",
                    "Cuando se trababan no abrían la documentación. Casi nadie usaba las FAQs, así que le preguntaban a quien supiera, y el conocimiento tribal le ganaba a la plataforma.",
                    "Los templates eran el valor central de Khatu y su peor experiencia: un muro plano y sin etiquetas donde encontrar el correcto significaba ya saber su nombre."
                  ]
                },
                {
                  "type": "quote",
                  "text": "Siempre le consulto a Sebas.",
                  "attr": "Sebas era un QA Automation Senior, y el lead del equipo de Khatu."
                }
              ]
            },
            {
              "id": "section-redesign",
              "tocLabel": "Redesign",
              "label": "Redesign",
              "h3": "Un card sorting convirtió un muro de templates en tres grupos, y eso reformó la v2.0.",
              "content": [
                {
                  "type": "body",
                  "text": "El card sorting fue el punto de inflexión. Hicimos que los ingenieros agruparan los templates de Khatu a su manera, y el dendrograma dibujó clusters limpios: front end, QA testing y backend."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/card-sorting.webp",
                  "ratio": "auto",
                  "alt": "Dendrograma del card sorting que muestra cómo los ingenieros agruparon los templates de Khatu, con clusters de front end, QA y backend",
                  "caption": "Card sorting abierto. El dendrograma agrupó los templates como los ingenieros realmente piensan en ellos."
                },
                {
                  "type": "body",
                  "text": "Esa estructura se volvió la nueva página de Templates. Grupos con nombre reemplazaron la lista plana, así Mate encuentra el template de automation que necesita sin saber su nombre exacto."
                },
                {
                  "type": "image",
                  "src": "assets/images/khatu/templates-v2.webp",
                  "alt": "Página de Templates de Khatu 2.0, con los templates organizados en los grupos FrontEnd, QA Testing y Backend",
                  "caption": "Templates en la v2.0, agrupados en FrontEnd, QA y Backend a partir del card sorting."
                },
                {
                  "type": "heading",
                  "text": "De una propuesta a un sistema"
                },
                {
                  "type": "body",
                  "text": "El resto de la plataforma siguió la misma lógica. Cada pantalla pasó de un wireframe de baja fidelidad a una v2.0 consistente, construida alrededor del descubrimiento."
                },
                {
                  "type": "video",
                  "controls": false,
                  "src": "assets/images/khatu/proposal-evolution.webm",
                  "alt": "La interfaz de Khatu recorriendo en bucle desde un wireframe v1 de baja fidelidad hasta la página de Templates y el dashboard de la v2.0",
                  "caption": "El wireframe v1 es el esqueleto sobre el que se construyó la v2.0."
                }
              ]
            },
            {
              "id": "section-takeaway",
              "tocLabel": "Takeaway",
              "label": "Takeaway",
              "h3": "La research convirtió un cambio de piel en una plataforma por la que la gente sí podía moverse.",
              "content": [
                {
                  "type": "body",
                  "text": "Khatu 2.0 se diseñó y se entregó como una propuesta respaldada por research, así que acá no hay una métrica de adopción para mostrar. Esa es la versión honesta. Lo que el proyecto muestra es el reencuadre: el equipo pidió una mano de pintura, y la research lo convirtió en un rediseño sobre descubrimiento por encima de decoración, para que el valor real de la plataforma por fin se pudiera encontrar."
                }
              ]
            }
          ]
        },
        /* @cases-end */
      ], // end cases[]
    },
}; // end PORTFOLIO_DATA
