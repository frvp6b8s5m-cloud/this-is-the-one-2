# BZaudio Shop Motion + PROJECT: ORIGIN — Task List

## Phase 1: Transfer and baseline
- [x] **Task 1 — Copy approved source foundation.** Copied the approved BZaudio foundation into this repository's feature branch and merged the approved work to this repository's `main`. Source repository remains untouched.
- [x] **Task 2 — Automated baseline.** GitHub Actions completed dependency installation, lint, typecheck, tests, and production build successfully on the latest feature-branch commit. A post-merge main-branch run is underway.

## Phase 2: PROJECT: ORIGIN subdomain
- [x] **Task 3 — Dedicated project presentation.** The ORIGIN page communicates the connected desktop software, touchscreen controller, and dedicated-device OS vision.
- [x] **Task 4 — Classified public aesthetic.** Added TOP SECRET / public-release styling, redacted visual details, and an openly accessible project brief. No fake login or security claims.
- [x] **Task 5 — Subdomain host routing.** Added middleware so requests to `origin.bzaudio.com/` rewrite to the ORIGIN page while preserving the visible subdomain URL.
- [x] **Task 6 — Direct navigation.** Main desktop/mobile header and footer links now point directly to `https://origin.bzaudio.com`.
- [x] **Task 7 — Search metadata.** Added the canonical subdomain URL and disabled search indexing for the project brief.
- [ ] **Task 8 — Hosting and DNS.** The Vercel team has no `bzaudio.com` domain attached. Its availability lookup reports that it is not available for registration; registrar ownership is not established. Vercel also requires its GitHub integration to be installed for the target repository before a linked project can be created. Then attach the subdomain, complete ownership verification, publish the exact DNS record, and confirm HTTPS.

## Phase 3: Shop motion
- [x] **Task 9 — Shop hero animation.** Added an animated technical grid, atmospheric glow, and staggered copy entrance.
- [x] **Task 10 — Category-card motion.** Added staggered entrances, hover lift, light sweep, animated edge reveal, icon movement, and arrow movement.
- [x] **Task 11 — Brand list interaction.** Added restrained hover feedback.
- [x] **Task 12 — Accessibility and mobile.** Added reduced-motion fallbacks and mobile-specific adjustments.
- [x] **Task 13 — Keep homepage unchanged.** The homepage was restored to match the source project's original file; no homepage redesign is part of this scope.

## Phase 4: Quality and review
- [x] **Task 14 — Automated quality gates.** Latest GitHub Actions run passed install, lint, typecheck, tests, and production build.
- [ ] **Task 15 — Manual verification.** Responsive visual review, keyboard navigation, reduced-motion runtime checks, and custom-domain smoke test await a Vercel preview/deployment.
- [ ] **Task 16 — Final review.** Inspect the final diff and confirm only approved Shop/ORIGIN work and relevant documentation changed.

## Final checkpoint
- [x] Automated tests and production build pass.
- [ ] Vercel GitHub integration, custom domain, DNS, and HTTPS verified.
- [ ] Manual browser checks completed.
- [x] Approved changes merged to `main` at `9c1d21241c1a51a7b8c9da5015f211b0ad21709e`.
- [ ] Ready for production promotion after hosting and manual verification.
