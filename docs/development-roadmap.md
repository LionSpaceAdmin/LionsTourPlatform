# Lions of Zion Roadmap

This roadmap is informed by the refreshed visual language introduced in this update. It maps the next stages of work needed to bring the platform to launch-readiness while keeping the experience fast, resilient, and narratively coherent.

## Q2 2024 – Visual & UX Polish

1. **Responsive Art Direction**
   - Generate mobile-first crops for every hero/placeholder illustration so that key storytelling beats remain visible on phones and tablets.
   - Add prefers-reduced-motion friendly variants for animated sections (Hero, scroll-linked stories).
2. **Component Refinement**
   - Port the Landing Hero background into a reusable composable so dashboards and campaign pages can inherit the same light/shadow grammar.
   - Introduce semantic typography tokens (display, title, prose) backed by locally hosted font files.
3. **Design QA**
   - Establish Percy or Chromatic visual regression coverage for the primary marketing funnel.
   - Build a color-contrast lint rule to prevent regressions against WCAG AA.

## Q3 2024 – Product Depth

1. **Story-Driven Planner**
   - Enrich the AI Planner prompts with itinerary primitives (time of day, energy level, travel party) and persist them on user profiles.
   - Add multimedia blocks (audio testimonies, panoramic stills) to AI recommendations using the new illustration system as graceful fallbacks.
2. **Guide Network**
   - Launch a CMS-backed guide directory where guides can upload portraits that automatically harmonize with the illustrated avatar palette.
   - Implement availability calendars and booking intents that sync with Firestore and highlight trusted partners.
3. **Experiences Marketplace**
   - Convert the static experiences grid into a filterable marketplace with price bands, difficulty, and origin story tags.
   - Integrate payment intent capture via Stripe Checkout with guardrails for refundable deposits.

## Q4 2024 – Platform Resilience

1. **Offline-first Surfaces**
   - Ship Service Worker caching tuned for illustration assets, itinerary data, and AI chat history.
   - Provide a printable pilgrimage packet that retains key imagery and directions for offline use.
2. **Observability & Insights**
   - Instrument Core Web Vitals dashboards and connect them to alerting (PagerDuty/DataDog) to catch performance drifts.
   - Add experience feedback loops (post-tour surveys, NPS) that feed into a Story Bank for future marketing.
3. **Internationalization & Growth**
   - Localize hero copy and trip planner flows into Hebrew, French, and Spanish while keeping illustration hints accessible.
   - Launch targeted landing pages with A/B tested hero narratives for diaspora cohorts (college, families, veterans).

## Continuous Initiatives

- Maintain a living design system that captures color, motion, and illustration usage with code-linked tokens.
- Document AI safety guardrails to ensure generated itineraries stay historically accurate and culturally sensitive.
- Rotate illustrations quarterly to keep the visual narrative fresh while retaining the brand palette introduced here.
