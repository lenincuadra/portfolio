# Zero-to-one creation of a connected payment ecosystem under technical and business constraints.

Fintech platform enabling merchants to collect payments through embedded checkout, payment links and financial dashboards.

## Naranja X – Fintech Ecosystem Case

Role: **Sole Product Designer across three product surfaces**

## Key Facts
Role: Product Designer  
Scope: 3-product payment ecosystem  
Products: Web Checkout / Payment Link / NShops (Financial Dashboard)  
Team: Product Owner + Frontend + Backend Engineers  
Methodology: Scrum + Lean UX  
Duration: 6 months  
Domain: Fintech / Online Payments

*Design note:* In the final portfolio this section should appear as a **sticky bar** that becomes a **compact version while scrolling** to preserve reading context.

---

## Ecosystem Overview

The project consisted of three connected product surfaces working together in a payment ecosystem:

Buyer → Checkout → Payment Processing

Merchant → Payment Link → Payment Collection

Merchant → NShops → Financial Visibility

[ Ecosystem Venn Diagram Placeholder ]

Recommended visualization: **Venn Diagram** showing the three core forces of the system.

Circle 1: Buyer Experience
Circle 2: Merchant Operations
Circle 3: Business Visibility

Where they intersect, the product ecosystem emerges:
- Checkout (buyer interaction surface)
- Payment Links (merchant operational tool)
- NShops Dashboard (business visibility layer)

Purpose of the Venn diagram:
- Quickly explain the **product system in one visual**
- Show that the challenge was not just UI, but balancing three competing forces
- Establish product thinking before showing interfaces

Goal: communicate **system thinking first**, before diving into individual product decisions.

---

## Positioning

Designed and validated a three-product fintech ecosystem:
- Web Checkout
- Payment Link
- NShops (Financial Dashboard)

Scope: End-to-end UX, UI, UX Writing and Research  
Methodology: Scrum + Lean UX  
Duration: 6 months

As the sole design owner across the three products, I translated business requirements and technical constraints into a coherent product system.

Responsibilities included:
- Defining interaction models and information architecture across surfaces.
- Aligning flows with backend realities (API and BFF structures).
- Ensuring operational logic, user clarity and business visibility coexisted.

Outcome: launched the first connected version of the payment ecosystem, establishing its structural and experiential foundation.

---

## System Context

This ecosystem operates at the intersection of three forces:

Buyer Experience  
Merchant Operations  
Business Visibility

The product challenge lives in the overlap.

Design decisions were evaluated based on how they balanced these three dimensions without creating friction in another.

---

## Product Surfaces

### Web Checkout
Primary payment surface embedded inside e-commerce experiences.

### Payment Link
Tool for merchants to generate payment requests and send them to buyers.

### NShops
Financial dashboard for monitoring incoming payments and operational status.

---

## Core System Frictions

### Web Checkout
- Slow backend response times.
- Payment Gateway (Lyra) dependency.
- Severe UI customization limits.

Risk: Conversion loss and reduced merchant trust.

### Payment Link
- Single-attempt MVP logic.
- Link expired permanently after failure.

Risk: Operational inefficiency and poor buyer experience.

### NShops
- No centralized financial visibility.
- Weak status communication.

Risk: Low confidence in digital payment management.

---

## Design Strategy

### Move Fast with Structure
- Paper → Mid-Fi → Hi-Fi in under 3 days for initial Checkout.
- Early Happy Path definition to align engineering.
- Prioritized functional clarity over surface polish.

### Design Within Constraints
- Rebuilt non-branded card flow within CSS-only gateway limits.
- Preserved usability despite technical restrictions.

### Ecosystem Thinking

Detected cascading friction caused by Payment Link expiration.

Solution: “Duplicate Payment Link”.

Result:
- Eliminated full manual recreation.
- Faster recovery after failed payments.
- Improved operational scalability.

### Research Validation

- Interactive prototypes in Adobe XD.
- 7-user usability test.

Results:
- 5/7 completed Payment Link creation via Happy Path.
- 3/7 completed payment confirmation successfully.

Insight: Status communication across surfaces was unclear.

Research directly informed Sprint priorities.

---

## Product Impact

### Foundational Impact

- Designed the first cohesive version of Checkout, Payment Link and NShops.
- Established shared interaction logic across the ecosystem.

Milestone: launched a connected payment system where none previously existed.

### Structural Optimization

After launch, identified:
- Expiring links with no recovery.
- Inconsistent status visibility.

Interventions:
- Duplicate Payment Link feature.
- Clearer cross-surface status hierarchy.

Result: reduced systemic friction and increased operational coherence.

### Behavioral Evidence

Usability data exposed state ambiguity and guided iteration.

Impact type: zero-to-one product creation followed by structural optimization.

---

## Technical Depth & Product Ownership

- Collaborated directly with backend engineers on API constraints and feasibility.
- Designed within Payment Gateway limitations without compromising system clarity.
- Operated across multiple Scrum squads while maintaining ecosystem coherence.

This case demonstrates end-to-end product ownership under real-world constraints, from zero-to-one creation to post-launch structural optimization.

---

## What This Case Signals

Lead Designer → Strong execution under constraints with structured thinking.

Head of Product → Understands ecosystem impact and trade-offs.

Founder → Capable of owning complex product surfaces with business awareness.


---

## Recommended Case Page Layout (Implementation Guide)

This section defines how the case should be visually structured on the page so the narrative is easy to scan and feels premium.

### 1. Hero Section (Entry Context)
Purpose: Immediately communicate the strategic scope of the work.

Layout:
- Title: Zero-to-one creation of a connected payment ecosystem
- Subtitle: Fintech platform enabling merchants to collect payments through embedded checkout, payment links and financial dashboards.
- Company: Naranja X
- Tags: Fintech / Payments / Product Architecture

Recommended visual (recommended hybrid):
- Ecosystem diagram showing how Checkout, Payment Links and NShops connect
- Three UI surfaces positioned around or below the diagram (Checkout / Payment Link / Dashboard)

Reasoning:
- The diagram signals system thinking
- The UI surfaces prove real product execution
- Together they communicate senior product design capability immediately

Goal: show **system scale**, not a single UI screen.

---

### 2. Sticky Key Facts Bar
This appears directly under the hero and becomes **sticky while scrolling**.

Expanded version:
Role | Scope | Products | Team | Duration | Domain

Compact version while scrolling:
Role | Products | Duration

Purpose:
- Maintain reader context while navigating the long case.
- Reinforce ownership and scope.

---

### 3. Ecosystem Overview (System Understanding)
First content section.

Structure:
Left: short explanation of the ecosystem.
Right: **Venn Diagram visualization**.

Explains the intersection of:
- Buyer Experience
- Merchant Operations
- Business Visibility

Goal: communicate **product thinking before UI**.

---

### 4. System Context
Short narrative explaining the forces shaping the product.

Format recommendation:
Three columns or cards:
- Buyer Experience
- Merchant Operations
- Business Visibility

Each describing the design tension created by that dimension.

---

### 5. Product Surfaces
Introduce the three products clearly.

Recommended layout:
Three horizontal blocks.

For each:
Product name
Short description
Primary interface visual.

Order:
1. Web Checkout
2. Payment Link
3. NShops Dashboard

Purpose:
Help the reader mentally separate the surfaces before diving into problems.

---

### 6. Core System Frictions
Show the problems discovered.

Layout suggestion:
Three cards (one per product).

Each card contains:
Problem
Constraint
Risk

Visual support:
- Flow diagrams
- Interface snapshots

---

### 7. Design Strategy
Explain the design approach.

Three sub-sections:

Move Fast with Structure
Design Within Constraints
Ecosystem Thinking

Visuals that work well here:
- Early sketches
- Wireframes
- Flow diagrams

Goal: demonstrate **how decisions were made**, not only what was designed.

---

### 8. Research Validation
Show how assumptions were tested.

Recommended structure:
Prototype → Test → Insight → Change

Visual support:
- Testing screenshots
- Flow diagrams

Key numbers should be visually emphasized:
5/7 successful flows
3/7 successful confirmations

---

### 9. Product Impact
Separate impact into two layers.

Layer 1: Foundational Impact
Zero-to-one creation of the ecosystem.

Layer 2: Structural Optimization
Fixes that improved operational coherence.

Optional visual:
Before / After workflow comparison.

---

### 10. Technical Depth
Short section demonstrating engineering collaboration and system awareness.

Recommended visual:
**Product Architecture Diagram** showing how the ecosystem components interact.

Example structure:
Merchant → Payment Link → Buyer → Web Checkout → Payment Gateway (Lyra) → Payment Status → NShops Dashboard

Annotations should highlight:
- Gateway UI limitations (CSS‑only customization)
- Where payment status propagates through the system
- Where operational recovery happens (Duplicate Payment Link)

Important constraint:
This product was built **zero‑to‑one**, so the diagram should represent the **original architecture of the system**, not a before/after comparison.

Purpose: signal **technical product maturity and system design thinking**.

---

### 11. Case Takeaways
End with what the case demonstrates about the designer.

Lead Designer perspective
Head of Product perspective
Founder perspective

Goal: translate the project into **career signals**.

---

End of case study.

Recommended next step on page:
"Next Case Study → E‑commerce Conversion".

