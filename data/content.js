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
      "email": "leninxperience@gmail.com",
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
        "scroll": "Scroll"
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
          "I work closely with engineering and product teams to define systems, not just screens. This includes interaction patterns, state models, and the logic behind the UI, aiming for consistency across surfaces and long-term scalability."
        ],
        "skills": [
          "Zero-to-one product design",
          "Legacy system refactoring",
          "Design systems",
          "UX research & validation",
          "Product thinking"
        ],
        "vennCenter": "Me"
      },
      "contact": {
        "heading": "I'm open to product design roles...",
        "body": "Collaborations, and conversations around complex systems, platform design, and scalable experiences."
      },
      "capabilities": {
        "label": "Capabilities",
        "heading": "What I bring to a product team.",
        "items": [
          "Zero-to-one product creation",
          "Legacy system refactoring",
          "Conversion and growth optimization",
          "Design systems integration",
          "UX research and usability validation"
        ]
      }
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
            "cover": "assets/images/no-handoff/cover.png",
            "screens": [
              {
                "src": "assets/images/no-handoff/screen-app.png",
                "poster": "assets/images/no-handoff/screen-app.png",
                "label": "Running App"
              },
              {
                "src": "assets/images/no-handoff/screen-library.png",
                "poster": "assets/images/no-handoff/screen-library.png",
                "label": "Component Library"
              },
              {
                "src": "assets/images/no-handoff/screen-side-by-side.png",
                "poster": "assets/images/no-handoff/screen-side-by-side.png",
                "label": "Figma vs App"
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
            "role": "TODO",
            "team": "TODO",
            "timeline": "2 days",
            "tools": "Claude Code · Figma MCP"
          },
          "sections": [
            {
              "id": "section-overview-image",
              "content": [
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/hero.png",
                  "alt": "App running in browser, full flow visible",
                  "loading": "lazy"
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
                  "text": "Design in Figma, document redlines, hand off to developers, iterate with QA. What I built in 2 days was built on top of that process — the Figma work made it possible."
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
                  "text": "One wrong component propagates to every screen that uses it — the output looks close, but it's not trustworthy enough to show anyone."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/before-after.png",
                  "alt": "Before/after — failed AI attempt vs clean component output",
                  "loading": "lazy"
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
                  "type": "subheading",
                  "text": "1. Reduce scope"
                },
                {
                  "type": "body",
                  "text": "Only the components this MVP needed — not the full design system. One project, one scope, reusable later."
                },
                {
                  "type": "subheading",
                  "text": "2. Build the library first"
                },
                {
                  "type": "body",
                  "text": "Component by component via Figma MCP: \"Replicate this with all its states.\" No guessing from memory."
                },
                {
                  "type": "subheading",
                  "text": "3. Build a reference table"
                },
                {
                  "type": "body",
                  "text": "A .md file with every component and its Figma link. I instructed Claude to check the original automatically if something looked off — no resharing links manually."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/vscode-library.png",
                  "alt": "VS Code — component library structure and reference .md file",
                  "loading": "lazy"
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
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Layout and flows matched Figma at 100%",
                    "Filters, states, and interactions all worked as designed",
                    "Mocked data, real behavior"
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/side-by-side.png",
                  "alt": "Side by side — Figma screen vs running app",
                  "loading": "lazy"
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
          ],
          "nav": {
            "prev": {
              "slug": "telecom-legacy-refactor",
              "title": "Telecom Legacy Platform Refactor"
            },
            "next": {
              "slug": "figma-webp-export",
              "title": "77 Minutes to Fix a 1-Hour Recurring Problem"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASE 1 — FIGMA PLUGIN / WEBP EXPORT
        // ---------------------------------------------------------------------
        {
          "slug": "figma-webp-export",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/figma-webp-export/cover.png",
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
                  "type": "image",
                  "src": "assets/images/figma-webp-export/hero.png",
                  "alt": "Plugin running in Figma, UI visible with multiple images selected",
                  "loading": "lazy"
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
                  "text": "Exporting images to .webp is a routine part of design-to-dev handoff. Figma doesn't support it natively, and every plugin that does hides behind a paywall. The workaround was manual: export as jpg or png, convert one by one in an external tool. A small friction that adds up fast — and affects every designer delivering to dev, regardless of project or team."
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
                  "text": "With 20 or 50 credits per plan, paid plugins disappear fast. Export 10 images, make a few adjustments, re-export, and you're out. And the manual workaround isn't free either: a single export takes around 5 minutes. For 12 images across three viewports — desktop, tablet, mobile — that's a full hour. That hour belongs to the designer or it falls on the developer. Either way, someone pays for a problem that shouldn't exist."
                },
                {
                  "type": "image",
                  "src": "assets/images/figma-webp-export/before-after.png",
                  "alt": "Before/after — manual step-by-step flow vs. the plugin in one step",
                  "loading": "lazy"
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
                  "text": "A designer on our agency side raised the problem. I told her I could build a plugin to fix it. Using Claude.ai and nothing but vibe coding, I built and tested it locally in 77 minutes — running it in Figma's Developer Mode while iterating. I also added a Spanish/English language toggle — I work for a US client but my agency is based in Argentina, and designers on both sides needed to use it without friction."
                },
                {
                  "type": "image",
                  "src": "assets/images/figma-webp-export/claude-process.png",
                  "alt": "Claude.ai — build process screen, token usage visible",
                  "loading": "lazy"
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
                  "type": "image",
                  "src": "assets/images/figma-webp-export/plugin-in-use.png",
                  "alt": "Plugin in use — export in progress or side-by-side comparison",
                  "loading": "lazy"
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
                }
              ]
            },
            {
              "id": "section-status",
              "tocLabel": "Status",
              "label": "Status",
              "h3": "Published and available to the whole team — and to any Figma user via the Community.",
              "content": [
                { "type": "subheading", "text": "Published and available to the whole team" },
                { "type": "body", "text": "and to any Figma user via the Community." },
                { "type": "subheading", "text": "The designer who raised the problem is the primary user." },
                { "type": "body", "text": "The client team and I use it as needed." },
                {
                  "type": "image",
                  "src": "assets/images/figma-webp-export/figma-community.png",
                  "alt": "Plugin's Figma Community page — listing with cover, description and install button",
                  "loading": "lazy"
                },
                {
                  "type": "link",
                  "href": "https://www.figma.com/community/plugin/1644736186405569289",
                  "text": "View on Figma Community →"
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "no-handoff",
              "title": "No Handoff: Closing the Design-Dev Gap"
            },
            "next": {
              "slug": "fintech-ecosystem",
              "title": "Zero-to-one: Connected Payment Ecosystem"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASE 2 — FINTECH / NARANJA X
        // ---------------------------------------------------------------------
        {
          "slug": "fintech-ecosystem",
          "images": {
            "cover": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
            "video": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.mp4",
            "hero": "assets/images/telecom/portrait.png",
            "process1": "assets/images/fintech/1-3—web checkout/1-nx-wireframes.png",
            "process2": "assets/images/fintech/2-3—Payment link/3-nx-proto-wireframes.gif",
            "decisions": "assets/images/fintech/3-3—Nshop/3-screens01.png",
            "screens": [
              {
                "src": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.mp4",
                "poster": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                "label": "Web Checkout"
              },
              {
                "src": "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.mp4",
                "poster": "assets/images/fintech/2-3—Payment link/0-nx-description.png",
                "label": "Payment Link"
              },
              {
                "src": "assets/images/fintech/3-3—Nshop/9-financial-dashboard.mp4",
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
            "description": "Zero-to-one creation of a connected payment ecosystem. A case study by Lenin Cuadra."
          },
          "hero": {
            "tags": [
              "Fintech",
              "Payments — Product Architecture",
              "Naranja X"
            ],
            "title": "Zero-to-one creation of a connected payment ecosystem under technical and business constraints."
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
              "heading": "A payment ecosystem built from scratch.",
              "layout": "overview",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "3 connected product surfaces: Checkout · Payment Link · NShops",
                    "Sole design owner across all three products",
                    "Zero-to-one under technical and business constraints"
                  ]
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
              "heading": "Three products, three sets of friction.",
              "content": [
                {
                  "type": "body",
                  "text": "Web Checkout faced slow backend response times and severe UI customization limits imposed by Payment Gateway Lyra. Payment Link had single-attempt MVP logic: once a link expired after a failed payment, it was gone permanently. NShops had no centralized financial visibility and weak status communication — leaving merchants unable to understand the state of their operations."
                },
                {
                  "type": "quote",
                  "text": "\"The challenge was not just UI. It was balancing Buyer Experience, Merchant Operations, and Business Visibility — simultaneously.\"",
                  "attr": "Design framing, project kickoff"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Constraints",
              "label": "Constraints",
              "heading": "Real technical constraints.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "CSS-only — Payment Gateway (Lyra) imposed zero JavaScript access to the checkout interface. All customization through CSS alone.",
                    "Single-attempt — Payment Link expiry logic meant links expired permanently after a failed payment. No recovery path for merchants.",
                    "No visibility — NShops had no centralized status communication across surfaces. Merchants couldn't track the state of their operations."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Process",
              "label": "Process",
              "heading": "From paper to production in structure.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Phase 1 — Paper → Mid-Fi → Hi-Fi in under 3 days"
                },
                {
                  "type": "body",
                  "text": "Defined the Happy Path early to align engineering and prioritized functional clarity over surface polish. Speed came from structure, not from skipping steps."
                },
                {
                  "type": "subheading",
                  "text": "Phase 2 — Rebuilding within a CSS-only gateway"
                },
                {
                  "type": "body",
                  "text": "The Payment Gateway (Lyra) allowed only CSS customization. I rebuilt the non-branded card flow entirely within those limits, preserving usability despite severe technical restrictions."
                },
                {
                  "type": "subheading",
                  "text": "Phase 3 — Detecting cascading friction"
                },
                {
                  "type": "body",
                  "text": "Identified that Payment Link expiration was creating cascading operational friction. The solution — Duplicate Payment Link — eliminated full manual recreation, enabling faster recovery after failed payments and improving operational scalability."
                },
                {
                  "type": "subheading",
                  "text": "Phase 4 — 7-user usability test with interactive prototypes"
                },
                {
                  "type": "body",
                  "text": "5 out of 7 users completed Payment Link creation via the Happy Path. 3 out of 7 completed payment confirmation. Core insight: status communication across surfaces was unclear, directly informing Sprint priorities."
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisions",
              "label": "Decisions",
              "heading": "Decisions that shaped the system.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Prioritize Happy Path definition before visual refinement"
                },
                {
                  "type": "body",
                  "text": "Engineering alignment needed a clear functional flow first. Defining the Happy Path early allowed frontend and backend to move in parallel while visual polish came later — reducing costly rework."
                },
                {
                  "type": "subheading",
                  "text": "Design within CSS-only gateway constraints instead of requesting exceptions"
                },
                {
                  "type": "body",
                  "text": "Rather than escalating to push back on the Lyra integration, I mapped what was possible within CSS-only limits and rebuilt the non-branded card flow accordingly. This maintained momentum and delivered a working checkout without delay."
                },
                {
                  "type": "subheading",
                  "text": "Introduce Duplicate Payment Link as a structural fix, not just a feature"
                },
                {
                  "type": "body",
                  "text": "After detecting that link expiration was creating cascading operational friction, I framed Duplicate Payment Link as a systemic recovery mechanism. This positioned it as infrastructure, not convenience — which accelerated stakeholder buy-in."
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impact",
              "label": "Impact",
              "heading": "A payment ecosystem where none previously existed.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "3 connected product surfaces launched: Checkout · Payment Link · NShops",
                    "5/7 users completed Payment Link creation — 7-user usability study, Happy Path",
                    "3/7 users completed payment confirmation — identified status ambiguity as key friction",
                    "Zero → One: first connected payment ecosystem at Naranja X"
                  ]
                },
                {
                  "type": "body",
                  "text": "After launch, structural optimization followed: Duplicate Payment Link eliminated full manual recreation after payment failure, and a clearer cross-surface status hierarchy reduced systemic friction and increased operational coherence."
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "What This Demonstrates",
              "label": "What This Demonstrates",
              "heading": "What This Demonstrates.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Strong execution under constraints — able to move fast without losing coherence across a complex system.",
                    "Ecosystem impact thinking — design decisions evaluated based on how they balance multiple dimensions simultaneously.",
                    "Business-aware product ownership — from zero-to-one creation to post-launch structural optimization."
                  ]
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "no-handoff",
              "title": "No Handoff: Closing the Design-Dev Gap"
            },
            "next": {
              "slug": "ecommerce-conversion",
              "title": "221% Q1 Revenue: E-commerce Conversion"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASE 2 — ECOMMERCE / MONTIRONI AUTOMOTIVE
        // ---------------------------------------------------------------------
        {
          "slug": "ecommerce-conversion",
          "images": {
            "cover": "assets/images/ecommerce/mockup.png",
            "hero": "assets/images/telecom/portrait.png"
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
            "description": "221% Q1 revenue increase driven purely by UX intervention. A case study by Lenin Cuadra."
          },
          "hero": {
            "tags": [
              "E-commerce",
              "Conversion Optimization",
              "Montironi Automotive"
            ],
            "title": "221% Q1 Revenue Increase Driven Purely by UX Intervention."
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
              "heading": "A conversion problem disguised as a sales problem.",
              "layout": "overview",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Same quarter, one year apart",
                    "No pricing or campaign changes",
                    "No external growth drivers"
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/ecommerce/impact-chart.gif",
                  "alt": "Q1 vs Q1 revenue impact chart",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-scope",
              "tocLabel": "Scope",
              "label": "Scope",
              "heading": "Full website UX redesign + conversion channel strategy.",
              "style": "padding-bottom: 0",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Automotive tire sales were underperforming due to a complex inquiry flow and high cognitive friction across the website.",
                    "The objective was to improve conversion without altering pricing, campaigns or inventory strategy."
                  ]
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "heading": "Friction was hiding revenue.",
              "content": [
                {
                  "type": "subheading",
                  "text": "The original inquiry flow:"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Required excessive cognitive effort.",
                    "Forced users through a rigid multi-step structure.",
                    "Relied exclusively on traditional web form submission."
                  ]
                },
                {
                  "type": "subheading",
                  "text": "Resulting in:"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "High drop-off during form completion.",
                    "Slow communication between buyers and the business.",
                    "Low conversion efficiency."
                  ]
                }
              ]
            },
            {
              "id": "section-intervention",
              "tocLabel": "Intervention",
              "label": "Intervention",
              "heading": "Simplify the path. Change the channel.",
              "content": [
                {
                  "type": "subheading",
                  "text": "1. Cognitive Friction Reduction"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "columns": 2,
                  "items": [
                    "Simplified the inquiry structure.",
                    "Reduced unnecessary inputs.",
                    "Improved information hierarchy and clarity.",
                    "Optimized form completion flow."
                  ]
                },
                {
                  "type": "gallery",
                  "images": [
                    {
                      "src": "assets/images/ecommerce/wireframes.png",
                      "alt": "Wireframes"
                    },
                    {
                      "src": "assets/images/ecommerce/wireframe-MidFi.png",
                      "alt": "Mid-Fi wireframe"
                    }
                  ]
                },
                {
                  "type": "subheading",
                  "text": "2. Channel Strategy Shift"
                },
                {
                  "type": "body",
                  "text": "Proposed and integrated WhatsApp as a high-intent communication channel during early market adoption."
                },
                {
                  "type": "subheading",
                  "text": "This allowed:"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Faster buyer-business interaction.",
                    "Reduced abandonment after initial interest.",
                    "Real-time clarification for complex tire specifications."
                  ]
                }
              ]
            },
            {
              "id": "section-before-after",
              "tocLabel": "Before / After",
              "label": "Before / After",
              "heading": "Before / After Comparison.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Before"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "High cognitive load.",
                    "Multi-step rigid structure.",
                    "No real-time communication channel."
                  ]
                },
                {
                  "type": "subheading",
                  "text": "After"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Reduced input fields.",
                    "Clearer hierarchy and guidance.",
                    "Integrated WhatsApp high-intent entry point."
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/ecommerce/mockup.png",
                  "alt": "Redesigned simplified flow"
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Result",
              "label": "Result",
              "heading": "Measured as Q1 vs Q1 year-over-year.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Same quarter, one year apart — identical market conditions.",
                    "UX intervention was the only variable changed.",
                    "Attribution is clean: no confounding factors introduced."
                  ]
                },
                {
                  "type": "subheading",
                  "text": "221% revenue growth driven exclusively by UX simplification and channel redesign."
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
              "tocLabel": "What This Demonstrates",
              "label": "What This Demonstrates",
              "heading": "What This Demonstrates.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Ability to identify revenue bottlenecks.",
                    "Strategic thinking beyond interface design.",
                    "Execution focused on measurable business impact.",
                    "Understanding of behavioral friction and conversion dynamics."
                  ]
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "fintech-ecosystem",
              "title": "Zero-to-one: Connected Payment Ecosystem"
            },
            "next": {
              "slug": "telecom-legacy-refactor",
              "title": "Telecom Legacy Platform Refactor"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASE 3 — TELECOM / LEGACY REFACTOR
        // ---------------------------------------------------------------------
        {
          "slug": "telecom-legacy-refactor",
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
            "excerpt": "Led the structural refactor of a live telecom platform — from fragmented IA and inconsistent navigation to a coherent v2 architecture aligned with the new corporate Design System."
          },
          "meta": {
            "title": "Telecom Legacy Refactor · Lenin Cuadra",
            "description": "Refactoring a legacy telecom platform for structural clarity and system consistency. A case study by Lenin Cuadra."
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
              "heading": "A platform that had outgrown its original architecture.",
              "layout": "overview",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "A live telecom application in production with real users",
                    "Accumulated structural debt: fragmented IA, inconsistent navigation, iconography issues",
                    "Full v1 → v2 transition without incremental public releases"
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/telecom/mockup-multitasking.png",
                  "alt": "Telecom platform overview",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problem",
              "label": "Problem",
              "heading": "The system required users to guess, not recognize.",
              "content": [
                {
                  "type": "body",
                  "text": "The platform suffered from poorly structured information hierarchy, navigation that required users to guess rather than recognize, iconography inconsistencies that reduced comprehension, and divergence from the newly adopted Design System used across other company products. This created cognitive friction and reduced task clarity in a product already in active use."
                },
                {
                  "type": "quote",
                  "text": "\"The problem wasn't visual. It was structural. The architecture itself was creating cognitive friction.\"",
                  "attr": "Design framing, refactor kickoff"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Constraints",
              "label": "Constraints",
              "heading": "Refactoring live — without disrupting users.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Live system — No staging environment: the refactor had to be planned as a full v1 → v2 transition with no intermediate public state.",
                    "Legacy IA — Accumulated structural debt: fragmented groupings and implicit module dependencies made partial fixes ineffective.",
                    "Design System — New corporate standard: adoption required alignment across iconography, components, and interaction patterns."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Process",
              "label": "Process",
              "heading": "Restructure first. Standardize second. Validate third.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Phase 1 — Full IA reorganization: v1 → v2"
                },
                {
                  "type": "body",
                  "text": "Completely reorganized the information architecture: redefined the navigation model, clarified grouping logic, and established explicit module separation. The goal was to eliminate the 'guess rather than recognize' pattern that had accumulated in the legacy system."
                },
                {
                  "type": "subheading",
                  "text": "Phase 2 — Applying corporate Design System standards"
                },
                {
                  "type": "body",
                  "text": "Applied the new corporate Design System across the platform — standardizing components, interaction patterns, and iconography. Alignment with the broader product ecosystem reduced the learning curve for users already familiar with other company products."
                },
                {
                  "type": "subheading",
                  "text": "Phase 3 — Standardizing iconography for recognition"
                },
                {
                  "type": "body",
                  "text": "The legacy icon set had inconsistent metaphors and lower recognition accuracy. By adopting the Design System iconography, I improved recognition rates, standardized the visual language, and aligned the product with the broader company ecosystem."
                },
                {
                  "type": "subheading",
                  "text": "Phase 4 — Usability testing to confirm structural improvements"
                },
                {
                  "type": "body",
                  "text": "Usability testing validated the refactor: increased task success rates, improved clarity in navigation, and better icon comprehension under the new Design System confirmed that structural simplification improved real user interaction with the live system."
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisions",
              "label": "Decisions",
              "heading": "The structural choices behind the refactor.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Full v1 → v2 transition instead of incremental updates"
                },
                {
                  "type": "body",
                  "text": "Incremental updates to a structurally broken system would have created a hybrid architecture harder to maintain and worse for users during the transition period. A full version transition was riskier but produced a coherent result — and avoided prolonged user confusion."
                },
                {
                  "type": "subheading",
                  "text": "Adopt the corporate Design System, not a local visual fix"
                },
                {
                  "type": "body",
                  "text": "The temptation was to create a local icon set or component library that fit the existing IA. Instead, I aligned with the corporate Design System — which required deeper IA restructuring but produced ecosystem consistency and reduced future maintenance overhead."
                },
                {
                  "type": "subheading",
                  "text": "Prioritize navigation clarity over feature parity"
                },
                {
                  "type": "body",
                  "text": "During the refactor, some legacy features required relocation or de-prioritization to achieve navigation clarity. I made explicit decisions about primary navigation access vs. nested content — based on task frequency and user mental models, not legacy placement."
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impact",
              "label": "Impact",
              "heading": "Structural clarity in a live, complex system.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "↑ Task success rates — validated by usability testing post-launch",
                    "↑ Navigation clarity — users recognized paths instead of guessing",
                    "↑ Icon comprehension — Design System iconography outperformed legacy set",
                    "v2 — complete IA restructure without incremental releases"
                  ]
                },
                {
                  "type": "body",
                  "text": "The refactor demonstrated that structural design interventions in live systems can deliver measurable UX improvement — without requiring a product rebuild or user-facing disruption during the transition."
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "What This Demonstrates",
              "label": "What This Demonstrates",
              "heading": "What This Demonstrates.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Ability to intervene in legacy systems without disrupting live operations — structural refactoring is a design discipline, not just a development one.",
                    "Structural thinking in complex, constraint-driven environments: the architecture itself was the problem, and the architecture had to be the solution.",
                    "Strategic application of Design Systems beyond visual consistency — Design System adoption here was an architectural decision that reduced cognitive debt across the product ecosystem.",
                    "Leadership in high-risk, full-version refactoring: coordinating design and engineering decisions across a complex transition without incremental releases."
                  ]
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "ecommerce-conversion",
              "title": "221% Q1 Revenue: E-commerce Conversion"
            },
            "next": {
              "slug": "no-handoff",
              "title": "No Handoff: Closing the Design-Dev Gap"
            }
          }
        },
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
      "email": "leninxperience@gmail.com",
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
        "scroll": "Scroll"
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
          "Trabajo estrechamente con equipos de ingeniería y producto para definir sistemas, no solo pantallas. Esto incluye patrones de interacción, modelos de estado y la lógica detrás de la UI, apuntando a la consistencia entre superficies y la escalabilidad a largo plazo."
        ],
        "skills": [
          "Diseño de zero-to-one",
          "Refactorización de System Legacy",
          "Design Systems",
          "Research UX y validación de usabilidad",
          "Product thinking"
        ],
        "vennCenter": "Yo"
      },
      "contact": {
        "heading": "Construyamos algo con sentido.",
        "body": "Estoy abierto a roles de product design, colaboraciones y conversaciones sobre sistemas complejos, diseño de plataformas y experiencias escalables."
      },
      "capabilities": {
        "label": "Capacidades",
        "heading": "Lo que aporto a un equipo de producto.",
        "items": [
          "Creación de producto de cero a uno",
          "Refactorización de sistemas legacy",
          "Optimización de conversión y crecimiento",
          "Integración de design systems",
          "Investigación UX y validación de usabilidad"
        ]
      }
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
            "cover": "assets/images/no-handoff/cover.png",
            "screens": [
              {
                "src": "assets/images/no-handoff/screen-app.png",
                "poster": "assets/images/no-handoff/screen-app.png",
                "label": "App en ejecución"
              },
              {
                "src": "assets/images/no-handoff/screen-library.png",
                "poster": "assets/images/no-handoff/screen-library.png",
                "label": "Librería de componentes"
              },
              {
                "src": "assets/images/no-handoff/screen-side-by-side.png",
                "poster": "assets/images/no-handoff/screen-side-by-side.png",
                "label": "Figma vs App"
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
            "role": "TODO",
            "team": "TODO",
            "timeline": "2 días",
            "tools": "Claude Code · Figma MCP"
          },
          "sections": [
            {
              "id": "section-overview-image",
              "content": [
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/hero.png",
                  "alt": "App corriendo en el browser, flujo completo visible",
                  "loading": "lazy"
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
                  "text": "Diseñar en Figma, documentar redlines, hacer handoff a los desarrolladores, iterar con QA. Lo que construí en 2 días se apoyó en ese proceso — el trabajo en Figma lo hizo posible."
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
                  "text": "Un componente equivocado se propaga a cada pantalla que lo usa — el resultado se ve parecido, pero no es lo suficientemente confiable para mostrárselo a alguien."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/before-after.png",
                  "alt": "Antes/después — intento fallido de IA vs output limpio de componentes",
                  "loading": "lazy"
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
                  "type": "subheading",
                  "text": "1. Reducir el alcance"
                },
                {
                  "type": "body",
                  "text": "Solo los componentes que necesitaba este MVP — no el design system completo. Un proyecto, un alcance, reutilizable después."
                },
                {
                  "type": "subheading",
                  "text": "2. Construir la librería primero"
                },
                {
                  "type": "body",
                  "text": "Componente por componente vía Figma MCP: \"Replica esto con todos sus estados.\" Sin adivinar de memoria."
                },
                {
                  "type": "subheading",
                  "text": "3. Construir una tabla de referencia"
                },
                {
                  "type": "body",
                  "text": "Un archivo .md con cada componente y su enlace de Figma. Le instruí a Claude para que revisara el original automáticamente si algo parecía mal — sin reenviar links manualmente."
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/vscode-library.png",
                  "alt": "VS Code — estructura de la librería de componentes y archivo .md de referencia",
                  "loading": "lazy"
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
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Layout y flujos coincidían con Figma al 100%",
                    "Filtros, estados e interacciones funcionaban tal como se diseñaron",
                    "Datos simulados, comportamiento real"
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/no-handoff/side-by-side.png",
                  "alt": "Comparación — pantalla de Figma vs app en ejecución",
                  "loading": "lazy"
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
          ],
          "nav": {
            "prev": {
              "slug": "telecom-legacy-refactor",
              "title": "Telecom Legacy Platform Refactor"
            },
            "next": {
              "slug": "figma-webp-export",
              "title": "77 Minutes to Fix a 1-Hour Recurring Problem"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASO 1 — FIGMA PLUGIN / WEBP EXPORT
        // ---------------------------------------------------------------------
        {
          "slug": "figma-webp-export",
          "template": "v3",
          "featured": false,
          "images": {
            "cover": "assets/images/figma-webp-export/cover.png",
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
                  "type": "image",
                  "src": "assets/images/figma-webp-export/hero.png",
                  "alt": "Plugin corriendo en Figma, UI visible con varias imágenes seleccionadas",
                  "loading": "lazy"
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
                  "text": "Exportar imágenes a .webp es una parte rutinaria del handoff de diseño a desarrollo. Figma no lo soporta de forma nativa, y cada plugin que lo hace está detrás de un muro de pago. El workaround era manual: exportar como jpg o png, convertir uno por uno en una herramienta externa. Una fricción pequeña que se acumula rápido — y afecta a todo diseñador que entrega a desarrollo, sin importar el proyecto o el equipo."
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
                  "text": "Con 20 o 50 créditos por plan, los plugins de pago se agotan rápido. Exportá 10 imágenes, hacé algunos ajustes, volvé a exportar, y se terminaron. Y el workaround manual tampoco es gratis: una sola exportación tarda alrededor de 5 minutos. Para 12 imágenes en tres viewports — desktop, tablet, mobile — es una hora completa. Esa hora la paga el diseñador o cae sobre el desarrollador. De cualquier forma, alguien paga por un problema que no debería existir."
                },
                {
                  "type": "image",
                  "src": "assets/images/figma-webp-export/before-after.png",
                  "alt": "Antes/después — flujo manual paso a paso vs. el plugin en un paso",
                  "loading": "lazy"
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
                  "text": "Una diseñadora del lado de la agencia planteó el problema. Le dije que podía construir un plugin para resolverlo. Usando Claude.ai y nada más que vibe coding, lo construí y probé localmente en 77 minutos — ejecutándolo en el Developer Mode de Figma mientras iteraba. También agregué un toggle de idioma español/inglés — trabajo para un cliente de EE.UU. pero mi agencia está en Argentina, y los diseñadores de ambos lados necesitaban usarlo sin fricción."
                },
                {
                  "type": "image",
                  "src": "assets/images/figma-webp-export/claude-process.png",
                  "alt": "Claude.ai — pantalla del proceso de construcción, consumo de tokens visible",
                  "loading": "lazy"
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
                  "type": "image",
                  "src": "assets/images/figma-webp-export/plugin-in-use.png",
                  "alt": "Plugin en uso — exportación en progreso o comparación lado a lado",
                  "loading": "lazy"
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
                }
              ]
            },
            {
              "id": "section-status",
              "tocLabel": "Estado",
              "label": "Estado",
              "h3": "Publicado y disponible para todo el equipo — y para cualquier usuario de Figma via la Community.",
              "content": [
                { "type": "subheading", "text": "Publicado y disponible para todo el equipo" },
                { "type": "body", "text": "y para cualquier usuario de Figma via la Community." },
                { "type": "subheading", "text": "La diseñadora que planteó el problema es la usuaria principal." },
                { "type": "body", "text": "El equipo del cliente y yo lo usamos según necesidad." },
                {
                  "type": "image",
                  "src": "assets/images/figma-webp-export/figma-community.png",
                  "alt": "Página del plugin en la Figma Community — listado con portada, descripción y botón de instalación",
                  "loading": "lazy"
                },
                {
                  "type": "link",
                  "href": "https://www.figma.com/community/plugin/1644736186405569289",
                  "text": "Ver en la Figma Community →"
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "no-handoff",
              "title": "No Handoff: Closing the Design-Dev Gap"
            },
            "next": {
              "slug": "fintech-ecosystem",
              "title": "Zero-to-one: Connected Payment Ecosystem"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASO 2 — FINTECH / NARANJA X
        // ---------------------------------------------------------------------
        {
          "slug": "fintech-ecosystem",
          "images": {
            "cover": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
            "video": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.mp4",
            "hero": "assets/images/telecom/portrait.png",
            "process1": "assets/images/fintech/1-3—web checkout/1-nx-wireframes.png",
            "process2": "assets/images/fintech/2-3—Payment link/3-nx-proto-wireframes.gif",
            "decisions": "assets/images/fintech/3-3—Nshop/3-screens01.png",
            "screens": [
              {
                "src": "assets/images/fintech/1-3—web checkout/6-nx-proto-demo.mp4",
                "poster": "assets/images/fintech/1-3—web checkout/0-nx-portada.png",
                "label": "Web Checkout"
              },
              {
                "src": "assets/images/fintech/2-3—Payment link/4-nx-Demo-payment-link.mp4",
                "poster": "assets/images/fintech/2-3—Payment link/0-nx-description.png",
                "label": "Payment Link"
              },
              {
                "src": "assets/images/fintech/3-3—Nshop/9-financial-dashboard.mp4",
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
            "description": "Creación de cero a uno de un ecosistema de pagos conectado. Un caso de estudio de Lenin Cuadra."
          },
          "hero": {
            "tags": [
              "Fintech",
              "Pagos — Arquitectura de Producto",
              "Naranja X"
            ],
            "title": "Creación de cero a uno de un ecosistema de pagos conectado bajo restricciones técnicas y de negocio."
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
              "heading": "Un ecosistema de pagos construido desde cero.",
              "layout": "overview",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "3 superficies de producto conectadas: Checkout · Payment Link · NShops",
                    "Único responsable de diseño en los tres productos",
                    "Zero-to-one bajo restricciones técnicas y de negocio"
                  ]
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
              "heading": "Tres productos, tres fuentes de fricción.",
              "content": [
                {
                  "type": "body",
                  "text": "Web Checkout enfrentaba tiempos de respuesta lentos y severas limitaciones de UI impuestas por el Payment Gateway Lyra. Payment Link tenía lógica de intento único: una vez que el link expiraba tras un pago fallido, desaparecía permanentemente. NShops no tenía visibilidad financiera centralizada ni comunicación de estado efectiva — dejando a los comerciantes sin capacidad de entender sus operaciones."
                },
                {
                  "type": "quote",
                  "text": "\"El desafío no era solo la UI. Era equilibrar la Experiencia del Comprador, las Operaciones del Comerciante y la Visibilidad del Negocio — simultáneamente.\"",
                  "attr": "Encuadre de diseño, kickoff del proyecto"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Restricciones",
              "label": "Restricciones",
              "heading": "Restricciones técnicas reales.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Solo CSS — el Payment Gateway (Lyra) no permitía acceso JavaScript a la interfaz de checkout. Toda la personalización debía hacerse únicamente con CSS.",
                    "Intento único — la lógica de expiración del Payment Link eliminaba los links permanentemente tras un pago fallido. Sin camino de recuperación para los comerciantes.",
                    "Sin visibilidad — NShops no tenía comunicación de estado centralizada entre superficies. Los comerciantes no podían rastrear el estado de sus operaciones."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Proceso",
              "label": "Proceso",
              "heading": "Del papel a producción con estructura.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Fase 1 — Papel → Mid-Fi → Hi-Fi en menos de 3 días"
                },
                {
                  "type": "body",
                  "text": "Definí el Happy Path temprano para alinear con ingeniería y prioricé la claridad funcional sobre el pulido visual. La velocidad vino de la estructura, no de saltarse pasos."
                },
                {
                  "type": "subheading",
                  "text": "Fase 2 — Reconstruyendo dentro de un gateway solo con CSS"
                },
                {
                  "type": "body",
                  "text": "El Payment Gateway (Lyra) solo permitía personalización CSS. Reconstruí el flujo de tarjeta sin marca completamente dentro de esos límites, preservando la usabilidad pese a las severas restricciones técnicas."
                },
                {
                  "type": "subheading",
                  "text": "Fase 3 — Detectando fricción en cascada"
                },
                {
                  "type": "body",
                  "text": "Identifiqué que la expiración del Payment Link estaba generando fricción operacional en cascada. La solución — Duplicar Payment Link — eliminó la recreación manual completa, habilitando una recuperación más rápida tras pagos fallidos y mejorando la escalabilidad operacional."
                },
                {
                  "type": "subheading",
                  "text": "Fase 4 — Test de usabilidad con 7 usuarios y prototipos interactivos"
                },
                {
                  "type": "body",
                  "text": "5 de 7 usuarios completaron la creación del Payment Link por el Happy Path. 3 de 7 completaron la confirmación de pago. Insight clave: la comunicación de estado entre superficies era poco clara, lo que informó directamente las prioridades del Sprint."
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisiones",
              "label": "Decisiones",
              "heading": "Decisiones que moldearon el sistema.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Priorizar la definición del Happy Path antes del refinamiento visual"
                },
                {
                  "type": "body",
                  "text": "La alineación con ingeniería necesitaba primero un flujo funcional claro. Definir el Happy Path temprano permitió que frontend y backend avanzaran en paralelo mientras el pulido visual llegaba después — reduciendo costosos retrabados."
                },
                {
                  "type": "subheading",
                  "text": "Diseñar dentro de las restricciones de solo CSS en lugar de pedir excepciones"
                },
                {
                  "type": "body",
                  "text": "En lugar de escalar para cuestionar la integración de Lyra, mapeé lo posible dentro de los límites de solo CSS y reconstruí el flujo sin marca en consecuencia. Esto mantuvo el impulso y entregó un checkout funcional sin demoras."
                },
                {
                  "type": "subheading",
                  "text": "Introducir Duplicar Payment Link como solución estructural, no solo una funcionalidad"
                },
                {
                  "type": "body",
                  "text": "Al detectar que la expiración del link generaba fricción operacional en cascada, encuadré Duplicar Payment Link como un mecanismo de recuperación sistémica. Esto lo posicionó como infraestructura, no conveniencia — acelerando la aprobación de los stakeholders."
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impacto",
              "label": "Impacto",
              "heading": "Un ecosistema de pagos donde antes no existía ninguno.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "3 superficies de producto conectadas lanzadas: Checkout · Payment Link · NShops",
                    "5/7 usuarios completaron la creación del Payment Link — estudio de usabilidad con 7 usuarios",
                    "3/7 usuarios completaron la confirmación de pago — identificó la ambigüedad de estado como fricción clave",
                    "Cero → Uno: primer ecosistema de pagos conectado en Naranja X"
                  ]
                },
                {
                  "type": "body",
                  "text": "Tras el lanzamiento, la optimización estructural continuó: Duplicar Payment Link eliminó la recreación manual completa tras pagos fallidos, y una jerarquía de estado más clara entre superficies redujo la fricción sistémica y aumentó la coherencia operacional."
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "Qué demuestra esto",
              "label": "Qué demuestra esto",
              "heading": "Qué demuestra esto.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Sólida ejecución bajo restricciones — capacidad de avanzar rápido sin perder coherencia en un sistema complejo.",
                    "Pensamiento de impacto en el ecosistema — las decisiones de diseño se evalúan según cómo equilibran múltiples dimensiones simultáneamente.",
                    "Liderazgo de producto con consciencia de negocio — desde la creación zero-to-one hasta la optimización estructural post-lanzamiento."
                  ]
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "no-handoff",
              "title": "No Handoff: Closing the Design-Dev Gap"
            },
            "next": {
              "slug": "ecommerce-conversion",
              "title": "221% Q1 en Ingresos: Conversión E-commerce"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASO 2 — ECOMMERCE / MONTIRONI AUTOMOTIVE
        // ---------------------------------------------------------------------
        {
          "slug": "ecommerce-conversion",
          "images": {
            "cover": "assets/images/ecommerce/mockup.png",
            "hero": "assets/images/telecom/portrait.png"
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
            "description": "Incremento del 221% en ingresos Q1 impulsado únicamente por intervención UX. Un caso de estudio de Lenin Cuadra."
          },
          "hero": {
            "tags": [
              "E-commerce",
              "Optimización de Conversión",
              "Montironi Automotive"
            ],
            "title": "Incremento del 221% en Ingresos Q1 Impulsado Únicamente por Intervención UX."
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
              "heading": "Un problema de conversión disfrazado de problema de ventas.",
              "layout": "overview",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Mismo trimestre, un año de diferencia",
                    "Sin cambios de precios ni campañas",
                    "Sin factores externos de crecimiento"
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/ecommerce/impact-chart.gif",
                  "alt": "Gráfico de impacto Q1 vs Q1",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-scope",
              "tocLabel": "Alcance",
              "label": "Alcance",
              "heading": "Rediseño UX completo del sitio + estrategia de canal de conversión.",
              "style": "padding-bottom: 0",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Las ventas de neumáticos tenían bajo rendimiento por un flujo de consulta complejo y alta fricción cognitiva en el sitio.",
                    "El objetivo era mejorar la conversión sin modificar precios, campañas ni estrategia de inventario."
                  ]
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problema",
              "label": "Problema",
              "heading": "La fricción estaba ocultando ingresos.",
              "content": [
                {
                  "type": "subheading",
                  "text": "El flujo de consulta original:"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Exigía un esfuerzo cognitivo excesivo.",
                    "Forzaba a los usuarios a través de una estructura rígida de múltiples pasos.",
                    "Dependía exclusivamente del envío de formularios web tradicionales."
                  ]
                },
                {
                  "type": "subheading",
                  "text": "Lo que resultó en:"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Alta tasa de abandono durante el llenado del formulario.",
                    "Comunicación lenta entre compradores y el negocio.",
                    "Baja eficiencia de conversión."
                  ]
                }
              ]
            },
            {
              "id": "section-intervention",
              "tocLabel": "Intervención",
              "label": "Intervención",
              "heading": "Simplificar el camino. Cambiar el canal.",
              "content": [
                {
                  "type": "subheading",
                  "text": "1. Reducción de fricción cognitiva"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "columns": 2,
                  "items": [
                    "Se simplificó la estructura de consulta.",
                    "Se redujeron campos innecesarios.",
                    "Se mejoró la jerarquía de información y la claridad.",
                    "Se optimizó el flujo de llenado del formulario."
                  ]
                },
                {
                  "type": "gallery",
                  "images": [
                    {
                      "src": "assets/images/ecommerce/wireframes.png",
                      "alt": "Wireframes"
                    },
                    {
                      "src": "assets/images/ecommerce/wireframe-MidFi.png",
                      "alt": "Wireframe Mid-Fi"
                    }
                  ]
                },
                {
                  "type": "subheading",
                  "text": "2. Cambio de estrategia de canal"
                },
                {
                  "type": "body",
                  "text": "Se propuso e integró WhatsApp como canal de comunicación de alta intención durante la adopción temprana del mercado."
                },
                {
                  "type": "subheading",
                  "text": "Esto permitió:"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Interacción más rápida entre compradores y el negocio.",
                    "Menor abandono después del interés inicial.",
                    "Aclaración en tiempo real para especificaciones técnicas complejas."
                  ]
                }
              ]
            },
            {
              "id": "section-before-after",
              "tocLabel": "Antes / Después",
              "label": "Antes / Después",
              "heading": "Comparación Antes / Después.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Antes"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Alta carga cognitiva.",
                    "Estructura rígida de múltiples pasos.",
                    "Sin canal de comunicación en tiempo real."
                  ]
                },
                {
                  "type": "subheading",
                  "text": "Después"
                },
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Campos reducidos.",
                    "Jerarquía y orientación más claras.",
                    "Punto de entrada WhatsApp de alta intención integrado."
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/ecommerce/mockup.png",
                  "alt": "Flujo simplificado rediseñado"
                }
              ]
            },
            {
              "id": "section-result",
              "tocLabel": "Resultado",
              "label": "Resultado",
              "heading": "Medido como Q1 vs Q1 año a año.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Mismo trimestre, un año de diferencia — condiciones de mercado idénticas.",
                    "La intervención UX fue la única variable modificada.",
                    "Atribución limpia: sin factores externos que confundan el resultado."
                  ]
                },
                {
                  "type": "subheading",
                  "text": "221% de crecimiento en ingresos generado exclusivamente por simplificación UX y rediseño del canal."
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
              "tocLabel": "Qué demuestra esto",
              "label": "Qué demuestra esto",
              "heading": "Qué demuestra esto.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Capacidad para identificar cuellos de botella de ingresos.",
                    "Pensamiento estratégico más allá del diseño de interfaz.",
                    "Ejecución enfocada en impacto de negocio medible.",
                    "Comprensión de la fricción conductual y las dinámicas de conversión."
                  ]
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "fintech-ecosystem",
              "title": "De cero a uno: Ecosistema de Pagos Conectado"
            },
            "next": {
              "slug": "telecom-legacy-refactor",
              "title": "Refactoring de Plataforma Telecom Legada"
            }
          }
        },

        // ---------------------------------------------------------------------
        // CASO 3 — TELECOM / LEGACY REFACTOR
        // ---------------------------------------------------------------------
        {
          "slug": "telecom-legacy-refactor",
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
            "excerpt": "Lideré el refactoring estructural de una plataforma telecom en producción — de una IA fragmentada y navegación inconsistente a una arquitectura v2 coherente alineada con el nuevo Design System corporativo."
          },
          "meta": {
            "title": "Refactoring Telecom Legado · Lenin Cuadra",
            "description": "Refactoring de una plataforma telecom legada para claridad estructural y consistencia del sistema. Un caso de estudio de Lenin Cuadra."
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
              "heading": "Una plataforma que había superado su arquitectura original.",
              "layout": "overview",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Una aplicación telecom en producción con usuarios reales",
                    "Deuda estructural acumulada: IA fragmentada, navegación inconsistente, problemas de iconografía",
                    "Transición completa v1 → v2 sin lanzamientos públicos incrementales"
                  ]
                },
                {
                  "type": "image",
                  "src": "assets/images/telecom/mockup-multitasking.png",
                  "alt": "Panorama de la plataforma telecom",
                  "loading": "lazy"
                }
              ]
            },
            {
              "id": "section-problem",
              "tocLabel": "Problema",
              "label": "Problema",
              "heading": "El sistema obligaba a los usuarios a adivinar, no a reconocer.",
              "content": [
                {
                  "type": "body",
                  "text": "La plataforma sufría de una jerarquía de información mal estructurada, navegación que obligaba a los usuarios a adivinar en lugar de reconocer, inconsistencias de iconografía que reducían la comprensión, y divergencia del nuevo Design System adoptado en otros productos de la empresa. Esto generaba fricción cognitiva y reducía la claridad de las tareas en un producto ya en uso activo."
                },
                {
                  "type": "quote",
                  "text": "\"El problema no era visual. Era estructural. La arquitectura en sí misma estaba generando fricción cognitiva.\"",
                  "attr": "Encuadre de diseño, kickoff del refactoring"
                }
              ]
            },
            {
              "id": "section-constraints",
              "tocLabel": "Restricciones",
              "label": "Restricciones",
              "heading": "Refactoring en vivo — sin interrumpir a los usuarios.",
              "content": [
                {
                  "type": "steps",
                  "variant": "bullet",
                  "items": [
                    "Sistema en vivo — sin entorno de staging: el refactoring debía planificarse como una transición completa v1 → v2 sin estado público intermedio.",
                    "IA legacy — deuda estructural acumulada: agrupamientos fragmentados y dependencias implícitas entre módulos hacían que las correcciones parciales fueran ineficaces.",
                    "Design System — nuevo estándar corporativo: la adopción requería alineación en iconografía, componentes y patrones de interacción."
                  ]
                }
              ]
            },
            {
              "id": "section-process",
              "tocLabel": "Proceso",
              "label": "Proceso",
              "heading": "Reestructurar primero. Estandarizar después. Validar al final.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Fase 1 — Reorganización completa de IA: v1 → v2"
                },
                {
                  "type": "body",
                  "text": "Reorganicé completamente la arquitectura de información: redefiní el modelo de navegación, clarifiqué la lógica de agrupamiento y establecí separación explícita de módulos. El objetivo era eliminar el patrón adivinar-en-lugar-de-reconocer acumulado en el sistema legacy."
                },
                {
                  "type": "subheading",
                  "text": "Fase 2 — Aplicación de estándares del Design System corporativo"
                },
                {
                  "type": "body",
                  "text": "Apliqué el nuevo Design System corporativo en toda la plataforma — estandarizando componentes, patrones de interacción e iconografía. La alineación con el ecosistema de producto redujo la curva de aprendizaje para usuarios ya familiarizados con otros productos de la empresa."
                },
                {
                  "type": "subheading",
                  "text": "Fase 3 — Estandarización de iconografía para el reconocimiento"
                },
                {
                  "type": "body",
                  "text": "El conjunto de iconos legacy tenía metáforas inconsistentes y menor precisión de reconocimiento. Al adoptar la iconografía del Design System, mejoré las tasas de reconocimiento, estandaricé el lenguaje visual y alineé el producto con el ecosistema más amplio de la empresa."
                },
                {
                  "type": "subheading",
                  "text": "Fase 4 — Testing de usabilidad para confirmar las mejoras estructurales"
                },
                {
                  "type": "body",
                  "text": "El testing de usabilidad validó el refactoring: mayor tasa de éxito en tareas, mejor claridad en la navegación y mayor comprensión de iconos bajo el nuevo Design System confirmaron que la simplificación estructural mejoró la interacción real de los usuarios con el sistema en vivo."
                }
              ]
            },
            {
              "id": "section-decisions",
              "tocLabel": "Decisiones",
              "label": "Decisiones",
              "heading": "Las decisiones estructurales detrás del refactoring.",
              "content": [
                {
                  "type": "subheading",
                  "text": "Transición completa v1 → v2 en lugar de actualizaciones incrementales"
                },
                {
                  "type": "body",
                  "text": "Las actualizaciones incrementales a un sistema estructuralmente roto habrían creado una arquitectura híbrida más difícil de mantener y peor para los usuarios durante la transición. Una transición de versión completa fue más arriesgada pero produjo un resultado coherente — y evitó confusión prolongada en los usuarios."
                },
                {
                  "type": "subheading",
                  "text": "Adoptar el Design System corporativo, no una solución visual local"
                },
                {
                  "type": "body",
                  "text": "La tentación era crear un conjunto de iconos o una biblioteca de componentes local que se adaptara a la IA existente. En cambio, me alineé con el Design System corporativo — lo que requirió una reestructuración de IA más profunda, pero produjo consistencia en el ecosistema y redujo la sobrecarga de mantenimiento futuro."
                },
                {
                  "type": "subheading",
                  "text": "Priorizar la claridad de navegación por encima de la paridad de funcionalidades"
                },
                {
                  "type": "body",
                  "text": "Durante el refactoring, algunas funcionalidades legacy requirieron reubicación o repriorización para lograr claridad en la navegación. Tomé decisiones explícitas sobre qué merecía acceso de navegación principal vs. qué debía quedar anidado — basadas en la frecuencia de tareas y los modelos mentales del usuario, no en la ubicación legacy."
                }
              ]
            },
            {
              "id": "section-impact",
              "tocLabel": "Impacto",
              "label": "Impacto",
              "heading": "Claridad estructural en un sistema vivo y complejo.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "↑ Tasas de éxito de tareas — validado por testing de usabilidad post-lanzamiento",
                    "↑ Claridad de navegación — los usuarios reconocían los caminos en lugar de adivinar",
                    "↑ Comprensión de iconos — la iconografía del Design System superó al conjunto legacy",
                    "v2 — reestructuración completa de IA sin lanzamientos incrementales"
                  ]
                },
                {
                  "type": "body",
                  "text": "El refactoring demostró que las intervenciones de diseño estructural en sistemas en vivo pueden generar mejoras UX medibles — sin requerir una reconstrucción del producto ni interrupciones visibles para el usuario durante la transición."
                }
              ]
            },
            {
              "id": "section-learnings",
              "tocLabel": "Qué demuestra esto",
              "label": "Qué demuestra esto",
              "heading": "Qué demuestra esto.",
              "content": [
                {
                  "type": "steps",
                  "variant": "numbered",
                  "items": [
                    "Capacidad de intervenir en sistemas legacy sin interrumpir las operaciones en vivo — el refactoring estructural es una disciplina de diseño, no solo de desarrollo.",
                    "Pensamiento estructural en entornos complejos y con restricciones: la arquitectura en sí era el problema, y la arquitectura tenía que ser la solución.",
                    "Aplicación estratégica de Design Systems más allá de la consistencia visual — la adopción aquí fue una decisión arquitectónica que redujo la deuda cognitiva en el ecosistema de producto.",
                    "Liderazgo en refactoring de versión completa de alto riesgo: coordinando decisiones de diseño e ingeniería en una transición compleja sin lanzamientos incrementales."
                  ]
                }
              ]
            }
          ],
          "nav": {
            "prev": {
              "slug": "ecommerce-conversion",
              "title": "221% Q1 en Ingresos: Conversión E-commerce"
            },
            "next": {
              "slug": "no-handoff",
              "title": "No Handoff: Closing the Design-Dev Gap"
            }
          }
        },
      ], // end cases[]
    },
}; // end PORTFOLIO_DATA
