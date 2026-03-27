# CASE 1 — Fintech / Naranja X
> Working draft — edit here, then apply changes to `data/content.js`

---

## Card (homepage preview)
**Tags:** Fintech · Payments · Product Architecture
**Title:** Zero-to-one: Connected Payment Ecosystem
**Excerpt:** Designed the first cohesive version of a three-product fintech ecosystem for Naranja X, enabling merchants to collect payments through embedded checkout, payment links and financial dashboards.

---

## Hero
**Tags:** Fintech · Payments — Product Architecture · Naranja X
**Title:** Zero-to-one creation of a connected payment ecosystem under technical and business constraints.
**Summary:** Fintech platform enabling merchants to collect payments through embedded checkout, payment links and financial dashboards.

---

## Quick Scan
- **Role:** Sole Product Designer across three product surfaces
- **Team:** Product Owner · Frontend Engineers · Backend Engineers
- **Timeline:** 6 months
- **Tools:** Figma · Scrum + Lean UX

---

## Overview
**Subheading:** A payment ecosystem built from scratch
**Tags:** Fintech · Online Payments · Zero-to-one
**Body 1:** The project consisted of three connected product surfaces working together in a payment ecosystem: Web Checkout (buyer-facing payment interface), Payment Link (merchant tool for collecting payments), and NShops (financial dashboard for visibility and operations).
**Body 2:** As the sole design owner across the three products, I translated business requirements and technical constraints into a coherent product system — defining interaction models, aligning flows with backend realities, and ensuring operational logic, user clarity and business visibility coexisted.

---

## Problem
**Heading:** Three products, three sets of friction
**Body:** Web Checkout faced slow backend response times and severe UI customization limits imposed by Payment Gateway Lyra. Payment Link had single-attempt MVP logic: once a link expired after a failed payment, it was gone permanently. NShops had no centralized financial visibility and weak status communication — leaving merchants unable to understand the state of their operations.
**Quote:** "The challenge was not just UI. It was balancing Buyer Experience, Merchant Operations, and Business Visibility — simultaneously."
**Quote attr:** Design framing, project kickoff

---

## Constraints
**Heading:** Real technical constraints

| Value | Label | Note |
|---|---|---|
| CSS-only | Payment Gateway (Lyra) UI limits | No JavaScript access to the checkout interface — all customization through CSS alone. |
| Single-attempt | Payment Link expiry logic | Links expired permanently after a failed payment — no recovery path for merchants. |
| No visibility | NShops financial data | No centralized status communication across surfaces — merchants couldn't track operations. |

---

## Role
**Subheading:** Sole Product Designer across three product surfaces
**Body 1:** I owned the end-to-end UX, UI, UX Writing and Research across Web Checkout, Payment Link and NShops. Responsibilities included defining interaction models and information architecture across surfaces, aligning flows with backend realities (API and BFF structures), and ensuring operational logic, user clarity and business visibility coexisted.
**Body 2:** I collaborated directly with backend engineers on API constraints and feasibility, operated across multiple Scrum squads while maintaining ecosystem coherence, and designed within Payment Gateway limitations without compromising system clarity.

---

## Process
**Heading:** From paper to production in structure

**Phase 1 — Move Fast with Structure**
Title: Paper → Mid-Fi → Hi-Fi in under 3 days
Body: For the initial Checkout, I defined the Happy Path early to align engineering and prioritized functional clarity over surface polish. Speed came from structure, not from skipping steps.

**Phase 2 — Design Within Constraints**
Title: Rebuilding within a CSS-only gateway
Body: The Payment Gateway (Lyra) allowed only CSS customization. I rebuilt the non-branded card flow entirely within those limits, preserving usability despite severe technical restrictions.

**Phase 3 — Ecosystem Thinking**
Title: Detecting cascading friction
Body: I identified that Payment Link expiration was creating cascading operational friction. The solution — Duplicate Payment Link — eliminated full manual recreation, enabling faster recovery after failed payments and improving operational scalability.

**Phase 4 — Research Validation**
Title: 7-user usability test with interactive prototypes
Body: 5 out of 7 users completed Payment Link creation via the Happy Path. 3 out of 7 completed payment confirmation successfully. The core insight: status communication across surfaces was unclear, directly informing Sprint priorities.

---

## Decisions
**Heading:** Decisions that shaped the system

**Decision 1**
Title: Prioritize Happy Path definition before visual refinement
Body: Engineering alignment needed a clear functional flow first. Defining the Happy Path early allowed frontend and backend to move in parallel while visual polish came later — reducing costly rework.

**Decision 2**
Title: Design within CSS-only gateway constraints instead of requesting exceptions
Body: Rather than escalating to push back on the Lyra integration, I mapped what was possible within CSS-only limits and rebuilt the non-branded card flow accordingly. This maintained momentum and delivered a working checkout without delay.

**Decision 3**
Title: Introduce Duplicate Payment Link as a structural fix, not just a feature
Body: After detecting that link expiration was creating cascading operational friction, I framed Duplicate Payment Link as a systemic recovery mechanism. This positioned it as infrastructure, not convenience — which accelerated stakeholder buy-in.

---

## Impact
**Heading:** A payment ecosystem where none previously existed

| Value | Label | Note |
|---|---|---|
| 3 | Connected product surfaces launched | Checkout · Payment Link · NShops |
| 5/7 | Users completed Payment Link creation | 7-user usability study, Happy Path |
| 3/7 | Users completed payment confirmation | Identified status ambiguity as key friction |
| Zero→One | Product creation milestone | First connected payment ecosystem at Naranja X |

**Statement:** After launch, structural optimization followed: Duplicate Payment Link eliminated full manual recreation after payment failure, and a clearer cross-surface status hierarchy reduced systemic friction and increased operational coherence.

---

## Learnings
**Heading:** What this case signals
1. Lead Designer: Strong execution under constraints with structured thinking — able to move fast without losing coherence across a complex system.
2. Head of Product: Understands ecosystem impact and trade-offs — design decisions are evaluated based on how they balance multiple dimensions simultaneously.
3. Founder: Capable of owning complex product surfaces with business awareness — from zero-to-one creation to post-launch structural optimization.
