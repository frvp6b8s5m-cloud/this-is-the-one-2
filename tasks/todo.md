# BZaudio Shop Motion + PROJECT: ORIGIN — Task List

## Phase 1: Transfer and baseline
- [x] **Task 1 — Copy approved source foundation.** Copied the approved BZaudio foundation into this repository's feature branch. Source repository remains untouched.
- [ ] **Task 2 — Verify baseline.** Run dependency installation, lint, typecheck, tests, and production build; document any existing failures.

## Phase 2: PROJECT: ORIGIN subdomain
- [x] **Task 3 — Dedicated project presentation.** The ORIGIN page communicates the connected desktop software, touchscreen controller, and dedicated-device OS vision.
- [x] **Task 4 — Classified public aesthetic.** Added TOP SECRET / public-release styling, redacted visual details, and an openly accessible project brief. No fake login or security claims.
- [x] **Task 5 — Subdomain host routing.** Added middleware so requests to `origin.bzaudio.com/` rewrite to the ORIGIN page while preserving the visible subdomain URL.
- [x] **Task 6 — Direct navigation.** Main desktop/mobile header and footer links now point directly to `https://origin.bzaudio.com`.
- [x] **Task 7 — Search metadata.** Added the canonical subdomain URL and disabled search indexing for the project brief.
- [ ] **Task 8 — Hosting and DNS.** Attach the subdomain to the correct Vercel production project, complete ownership verification, publish the exact DNS record, and confirm HTTPS. The Vercel team currently has no `bzaudio.com` domain attached.

## Phase 3: Shop motion
- [x] **Task 9 — Shop hero animation.** Added an animated technical grid, atmospheric glow, and staggered copy entrance.
- [x] **Task 10 — Category-card motion.** Added staggered entrances, hover lift, light sweep, animated edge reveal, icon movement, and arrow movement.
- [x] **Task 11 — Brand list interaction.** Added restrained hover feedback.
- [x] **Task 12 — Accessibility and mobile.** Added reduced-motion fallbacks and mobile-specific adjustments.
- [x] **Task 13 — Keep homepage unchanged.** The homepage was restored to match the source project's original file; no homepage redesign is part of this scope.

## Phase 4: Quality and review
- [ ] **Task 14 — Quality gates.** Run lint, typecheck, tests, production build, and focused browser/runtime checks. Do not mark successful until verified.
- [ ] **Task 15 — Final review.** Inspect the full diff and confirm only approved Shop/ORIGIN work and relevant documentation changed.

## Final checkpoint
- [ ] All tests and production build pass or remaining failures are clearly documented.
- [ ] Vercel custom domain and DNS verified.
- [ ] Changes are ready for user review on the feature branch; do not merge or promote to production until quality checks are complete.
