# BZaudio Premium Experience — Task List

## Phase 1: Transfer and baseline
- [x] **Task 1 — Copy approved source foundation.** Copied the 32-file Next.js/React/TypeScript foundation from `this-is-the-one` into this repository's feature branch. Source repository remains untouched.
  - Acceptance: existing app routes, components, docs, tests, and package configuration are present.
  - Verification: inspect destination tree and compare key files with source.
- [ ] **Task 2 — Verify baseline.**
  - Acceptance: dependencies install; tests, typecheck, lint, and build are run; failures are recorded accurately.
  - Verification: repository commands and GitHub Actions.

## Phase 2: PROJECT: ORIGIN
- [x] **Task 3 — Add public ORIGIN route.** Implemented in `app/origin/page.tsx`; runtime verification remains in Task 7.
  - Acceptance: exact identity “PROJECT: ORIGIN”; tagline “Where the next era of audio begins.”; headline “THE FUTURE OF LIVE AUDIO IS UNDER DEVELOPMENT.”; honest staged vision for OS, desktop platform, and touchscreen controller.
  - Acceptance: Allen & Heath compatibility described as model-by-model validation, not universal support.
  - Verification: route renders; no fake login, security, or classified access claims.
- [x] **Task 4 — Add direct global navigation.** Implemented beside Shop in the desktop/mobile header and added to the footer; browser verification remains in Task 7.
  - Acceptance: PROJECT: ORIGIN appears as a separate clickable header item beside Shop on desktop and mobile; footer includes a direct link.
  - Verification: keyboard and mobile navigation.

## Checkpoint: After Tasks 3–4
- [ ] Browser/runtime and keyboard checks pending in Task 7.
- [ ] Shop and PROJECT: ORIGIN both have direct header access.
- [ ] Existing SoundMatch and other routes remain accessible.
- [ ] Route interaction is keyboard accessible.

## Phase 3: Premium visual direction

Implementation is in place; responsive and reduced-motion runtime verification remains in Task 7.
- [x] **Task 5 — Cinematic architectural homepage lead.** Implemented with a CSS architectural venue/stage/audience visual and updated purpose-led copy; visual verification remains in Task 7.
  - Acceptance: visual direction feels architectural, live-audio focused, premium, and distinct; no generic AI-looking imagery.
  - Acceptance: homepage expresses “Bring people closer to music.”
  - Verification: responsive visual inspection at 320px, 768px, 1024px, and 1440px.
- [x] **Task 6 — Motion and accessibility polish.** Implemented restrained stage-light motion, reduced-motion fallback, responsive breakpoints, semantic details disclosure, and visible focus styling; manual checks remain in Task 7.
  - Acceptance: restrained animation, reduced-motion support, strong contrast, visible focus, no layout-breaking overflow.
  - Verification: keyboard pass and reduced-motion check.

## Phase 4: Quality and review
- [ ] **Task 7 — Quality gates.**
  - Acceptance: lint, typecheck, tests, and production build pass; regressions fixed or clearly documented.
  - Verification: exact command output and route smoke checks.
- [ ] **Task 8 — Documentation and review summary.**
  - Acceptance: README/spec/plan describe actual delivered state; review summary lists changed files and known limits.
  - Verification: diff review.

## Final checkpoint
- [ ] All criteria met; ready for user review.
- [ ] Do not merge to main, deploy, configure a subdomain, or change DNS without separate approval.
