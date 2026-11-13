# Implementation Plan: Restore Original BZaudio Design + PROJECT: ORIGIN

## Objective
Restore the original BZaudio website's visual identity while keeping the current multi-brand business direction and working browser-based features. PROJECT: ORIGIN remains a first-class public destination.

## Approved design baseline
- Source reference: the original frvp6b8s5m-cloud/BZaudio repository's finalized styles.css and homepage design.
- Palette: premium black, warm antique gold, and warm ivory/paper sections.
- Typography: Barlow Condensed display, DM Sans body copy, Space Grotesk technical labels.
- Visual language: cinematic live-audio photography, strong editorial typography, architectural grid details, restrained motion, and generous spacing.
- Keep the interface visually clear and not overwhelming.

## Product and content constraints
- Serve the full approved BZaudio audience: venues, events, houses of worship, schools, organizations, production teams, technicians, musicians, beginners, and audio professionals.
- Preserve Shop, SoundMatch, Tools, Installation, Studio, Contact, and all existing browser-based functionality.
- Preserve verified-data boundaries: no invented inventory, pricing, supplier relationships, product claims, or quote submissions.
- Do not replace working features with decorative mockups.

## PROJECT: ORIGIN
- Exact name: **PROJECT: ORIGIN**
- Tagline: *Where the next era of audio begins.*
- Headline: **THE FUTURE OF LIVE AUDIO IS UNDER DEVELOPMENT.**
- Keep the public-facing classified / redacted presentation as theatrical design only, not a real security boundary.
- Present the approved connected vision: Windows/macOS desktop platform, dedicated touchscreen audio controller, and dedicated-device OS.
- Allen & Heath is the first compatibility priority, verified model by model and firmware by firmware where relevant.
- Link directly to /origin from desktop navigation, mobile navigation, the homepage teaser, and the footer.
- Do not claim origin.bzaudio.com is live or configure DNS until domain control and GitHub Pages custom-domain requirements are verified.

## Hosting and architecture
- Keep the Next.js App Router, React, TypeScript, Tailwind, and browser-first architecture.
- GitHub is the source of truth and GitHub Actions / GitHub Pages is the deployment path.
- Maintain static export compatibility. Do not add server middleware, server routes, or server-only features to the Pages build.
- Keep changes on a feature branch, run CI, open a pull request, and merge only after checks pass.

## Acceptance checks
- Original black / antique-gold / ivory visual identity is consistent across homepage and shared navigation/footer.
- PROJECT: ORIGIN is prominent and directly reachable on desktop and mobile.
- Existing routes and browser tools remain available.
- Layout is usable at 320px, 768px, 1024px, and 1440px.
- Keyboard focus and reduced-motion support remain intact.
- Lint, typecheck, tests, and production static export pass.
