# Implementation Plan: BZaudio Shop Motion + PROJECT: ORIGIN

## Overview

**Approved implementation scope:** animate the existing Shop experience and give PROJECT: ORIGIN its own public-facing subdomain at `origin.bzaudio.com`. Keep the existing homepage and unrelated sections unchanged.

Preserve the working equipment categories, SoundMatch, installation information, studio customizer, and browser-based audio tools.

## Architecture Decisions
- Keep the existing Next.js App Router, React, TypeScript, Tailwind, and CSS architecture.
- Keep all changes on `feat/bzaudio-premium-rendition`; leave the source repository and destination `main` unchanged until review and quality gates are complete.
- Serve the existing ORIGIN page at `/origin` on the main app and rewrite the root request on `origin.bzaudio.com` to that page.
- Link to the ORIGIN subdomain directly from the main desktop/mobile header and footer.
- The subdomain uses the same app deployment; it does not create a separate product codebase.
- PROJECT: ORIGIN is presented publicly with a top-secret / redacted visual language. This is presentation only, not a real classified system, login, security boundary, or access-control mechanism.
- Search indexing is disabled for the ORIGIN public brief so it is discoverable by direct link rather than search.
- Present the BZaudio audio ecosystem honestly: dedicated-device OS, desktop platform, and touchscreen controller; Allen & Heath is the first compatibility priority, validated model by model. Do not claim universal support.
- Preserve the current no-fake-inventory and no-fake-quote-submission boundaries. No payment, accounts, backend, analytics, or new external services.

## Task List

### Phase 1: Transfer and baseline
- [x] Task 1: Copy the current BZaudio foundation into the destination branch.
- [ ] Task 2: Verify copied app structure, current tests, typecheck, and production build.

### Phase 2: PROJECT: ORIGIN subdomain
- [x] Task 3: Deliver the ORIGIN project page with the approved identity and staged platform overview.
- [x] Task 4: Add classified/public-release styling without implying actual security.
- [x] Task 5: Add host-based rewrite from `origin.bzaudio.com/` to the ORIGIN page.
- [x] Task 6: Point desktop/mobile header and footer links directly to the subdomain.
- [x] Task 7: Add canonical metadata and disable search indexing for the ORIGIN brief.
- [ ] Task 8: Attach and verify the custom subdomain in Vercel and publish its DNS record. The Vercel team currently has no `bzaudio.com` domain registered/attached, so ownership/DNS verification is still required.

### Phase 3: Premium Shop motion
- [x] Task 9: Add Shop-only animated grid and hero lighting.
- [x] Task 10: Add staggered category-card entrances, hover lift, light sweep, edge reveal, icon and arrow motion.
- [x] Task 11: Add reduced-motion and mobile fallbacks.
- [x] Task 12: Keep homepage markup and design unchanged.

### Phase 4: Quality and review
- [ ] Task 13: Run lint, typecheck, tests, production build, and focused browser/runtime checks; resolve regressions.
- [ ] Task 14: Review the final diff and update the project documentation.

## Checkpoints
- [ ] Existing homepage and unrelated routes remain unchanged.
- [ ] Shop and ORIGIN layouts work at 320px, 768px, 1024px, and 1440px.
- [ ] Reduced-motion users receive a stable non-animated presentation.
- [ ] Direct subdomain routing and canonical metadata are verified after a deployment.
- [ ] DNS and HTTPS are verified after the domain is attached.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Custom domain is not attached to the Vercel team | High | Do not alter DNS blindly; verify domain ownership and use the host's exact DNS challenge |
| Classified visuals could imply actual security | Medium | Clearly keep the page public and state that the presentation is not an access-control system |
| Cinematic effects hurt mobile or reduced-motion users | Medium | CSS-only effects, responsive fallbacks, and prefers-reduced-motion rules |
| Allen & Heath compatibility is model-specific | High | Validate supported models/workflows individually; no universal claim |
| Source app has unverified supplier listings | High | Preserve category-first catalog and supplier verification notices |

## Hosting State
- Vercel has an existing project named `bzaudio` with the Vercel-provided domain `bzaudio.vercel.app`.
- The connected Vercel team currently has no registered/attached `bzaudio.com` domain.
- `origin.bzaudio.com` is the selected subdomain, but it is not live until the apex domain is verified, the subdomain is attached to the correct production project, DNS is published, and a deployment containing this branch is promoted.
- No DNS zone has been overwritten and no domain has been purchased.
