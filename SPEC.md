# BZaudio Product and Technical Specification

**Status:** Approved strategic direction; implementation proceeds incrementally on the feature branch.

## 1. Objective
Build BZaudio as an independent audio technology company and multi-brand professional-audio equipment sourcing partner. The public website should make equipment discovery, system planning, installation support, and browser-based audio tools clear and useful. The long-term differentiator is a connected software-and-hardware audio ecosystem.

**Purpose:** Bring people closer to music.

## 2. Customers and use cases
Serve beginners, volunteers, musicians, venues, houses of worship, schools, organizations, audio technicians, production teams, and experienced audio professionals. Interfaces should be approachable without hiding useful technical detail.

## 3. Product capabilities

### Public website
- Premium, cinematic, architectural visual direction with restrained, controlled motion.
- Clear routes for Shop, SoundMatch, Tools, Installation, Studio, Contact, and PROJECT: ORIGIN.
- PROJECT: ORIGIN is a direct header destination beside Shop on desktop and mobile.
- Keep the interface uncluttered through clear hierarchy and progressive disclosure.

### Shop and quote workflow
- Equipment categories include mixing consoles, PA/speakers, microphones, processors/effects, amplification/system processing, stage/monitoring, and accessories.
- Product pages and comparisons may use only verified product information and authorized imagery.
- Do not invent stock, prices, product specifications, supplier relationships, or manufacturer authorization.
- Initial commercial interaction is quote requests / copyable inquiry briefs, not checkout or payment.
- Contact destination and quote delivery remain configurable; do not claim a request was transmitted when it was only prepared locally.

### SoundMatch and tools
- Preserve the current guided SoundMatch workflow and its Essential, Recommended, and Professional planning paths.
- Preserve installation/consultation information, the studio customizer, and existing browser audio tools/calculators.
- Clearly distinguish preliminary planning from engineering approval, acoustic simulation, and verified compatibility.
- Every calculation must expose units, assumptions, validation, and limits.

### PROJECT: ORIGIN
- Exact name: **PROJECT: ORIGIN**
- Tagline: *Where the next era of audio begins.*
- Headline: **THE FUTURE OF LIVE AUDIO IS UNDER DEVELOPMENT.**
- Public project presentation with theatrical design only; it is not a real classified environment, login, or security boundary.
- Present the connected vision: Windows/macOS desktop platform, dedicated touchscreen audio controller, and dedicated-device operating system.
- Allen & Heath is the first compatibility priority, verified model by model and firmware by firmware where relevant.
- Other brands and cross-vendor workflows require explicit testing. Never promise universal compatibility.

## 4. Technical architecture
- Next.js App Router, React, TypeScript, Tailwind CSS, custom CSS design system.
- Deterministic domain logic stays separate from presentation components.
- Vitest for unit tests; GitHub Actions for lint, typecheck, tests, and production build.
- Keep the current application as one deployable app; no microservices are justified.
- Use CSS and semantic UI for the architectural visual direction; avoid generic AI-looking imagery.

## 5. Current implementation boundaries
- No backend persistence, customer accounts, payment processor, subscriptions, or privileged admin API.
- No external integrations, analytics, supplier feeds, or CRM delivery without separate approval.
- Browser-local behavior must be disclosed accurately.
- No custom subdomain or DNS changes until the registered domain and DNS control are confirmed.
- No merge to main or production deployment without separate approval.

## 6. Quality requirements
- Responsive at 320px, 768px, 1024px, and 1440px.
- WCAG-oriented semantic structure, keyboard navigation, visible focus, contrast, labels, and reduced-motion support.
- Preserve existing working flows during visual improvements.
- Run lint, typecheck, tests, and production build; verify key routes at runtime.
- Document model-specific compatibility and technical assumptions.

## 7. Success criteria
- Shop and PROJECT: ORIGIN are directly reachable from the global header on desktop and mobile.
- Existing SoundMatch, equipment categories, installation, studio, and tools remain available.
- PROJECT: ORIGIN communicates the approved long-term ecosystem without implying current capabilities that are not implemented.
- Homepage expresses the BZaudio purpose and feels premium, architectural, and live-audio focused.
- No fabricated technical, commercial, or compatibility claims.
