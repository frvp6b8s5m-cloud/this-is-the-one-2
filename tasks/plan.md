# Implementation Plan: BZaudio Premium Experience + PROJECT: ORIGIN

## Overview
Transfer the approved BZaudio foundation from `frvp6b8s5m-cloud/this-is-the-one` into this repository, then improve the visual direction and add PROJECT: ORIGIN as a first-class destination. Preserve the working equipment categories, SoundMatch, installation information, studio customizer, and browser-based audio tools.

## Architecture Decisions
- Keep the existing Next.js App Router, React, TypeScript, Tailwind, and CSS architecture.
- Keep the destination work on `feat/bzaudio-premium-rendition`; leave source repository and destination `main` unchanged.
- PROJECT: ORIGIN is an internal `/origin` route initially. A separate subdomain and DNS are deferred until the domain and DNS control are confirmed.
- PROJECT: ORIGIN is a public project presentation, not a real classified system, login, security boundary, or access-control mechanism.
- Present the BZaudio audio ecosystem honestly: dedicated-device OS, desktop platform, and touchscreen controller; Allen & Heath is the first compatibility priority, validated model by model. Do not claim universal support.
- Preserve the current no-fake-inventory and no-fake-quote-submission boundaries. No payment, accounts, backend, analytics, or new external services.

## Task List

### Phase 1: Transfer and baseline
- [x] Task 1: Copy the current BZaudio foundation into the destination branch.
- [ ] Task 2: Verify copied app structure, current tests, typecheck, and production build.

### Checkpoint: Baseline
- [ ] Existing routes and working tools remain present.
- [ ] Baseline tests and build pass or existing failures are documented.

### Phase 2: PROJECT: ORIGIN entry point
- [x] Task 3: Add the PROJECT: ORIGIN route with its approved identity and truthful project status.
- [x] Task 4: Add a clearly visible PROJECT: ORIGIN header link beside Shop on desktop and mobile, plus a footer link.

### Checkpoint: Navigation and route
- [ ] Runtime/keyboard verification pending. Direct navigation is implemented but not yet verified in a browser.
- [ ] Direct navigation works on desktop and mobile.
- [ ] ORIGIN panel interaction is keyboard accessible and does not imply real authentication.

### Phase 3: Premium visual direction
- [x] Task 5: Rework the homepage visual lead into a cinematic architectural live-audio environment using CSS and semantic markup, not AI-looking stock imagery.
- [x] Task 6: Add restrained motion, responsive behavior, and reduced-motion support while preserving existing content and functionality.

### Checkpoint: Visual quality
- [ ] Runtime responsive visual verification pending.
- [ ] Homepage clearly communicates “Bring people closer to music.”
- [ ] Existing category, SoundMatch, installation, studio, and tools journeys remain intact.
- [ ] Layout works at 320px, 768px, 1024px, and 1440px.

### Phase 4: Quality and review
- [ ] Task 7: Run lint, typecheck, tests, production build, and focused browser/runtime checks; resolve regressions.
- [ ] Task 8: Update project documentation and prepare a review summary.

### Checkpoint: Complete
- [ ] All acceptance criteria met.
- [ ] Changes are committed on the feature branch.
- [ ] Ready for user review; do not merge or deploy without separate approval.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Source app has unverified supplier listings | High | Preserve category-first catalog and supplier verification notices; do not invent product facts |
| Static frontend cannot submit quote requests | High | Keep local copyable brief behavior and label it accurately |
| Cinematic effects hurt mobile or reduced-motion users | Medium | CSS-only restrained effects, responsive fallbacks, and prefers-reduced-motion rules |
| ORIGIN theatrics could imply real security | Medium | Explicitly label it as a public project presentation; no fake login or protected access |
| Allen & Heath compatibility is model-specific | High | Describe compatibility as planned/validated per model; no universal claim |

## Open Questions
- None blocking for the approved internal-route implementation.
- Registered domain/DNS control is required before any subdomain or DNS work.
- Verified supplier feeds, product photos, pricing, inventory, and quote delivery remain separate decisions.
