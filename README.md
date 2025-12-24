# Codex Arcanum

Codex Arcanum is a full-stack Nuxt 4 application designed to demonstrate production-grade architecture, accessibility-first UI development, and hybrid rendering strategies.

This project is intentionally scoped and structured to mirror real-world SaaS applications.

## Live Demo

🔗 [https://codex-arcanum.netlify.app](https://codex-arcanum.netlify.app)

## Tech Stack

- Nuxt 4

- Vue 3

- Vanilla CSS (with optional Tachyons utilities)

- PostgreSQL

- Prisma

- Zod

- Netlify

## Architecture Overview

Codex Arcanum is built using Nuxt’s full-stack capabilities:

- Server-rendered marketing and documentation pages

- Authenticated application dashboard

- API routes implemented via Nuxt server routes

- Session-based authentication using HttpOnly cookies

- A full architecture breakdown is available in /docs/architecture.md.

- Rendering Strategy

- Different parts of the application use different rendering strategies:

- Public pages: Static Site Generation

- Documentation: Static generation with dynamic routing

- Dashboard: SSR + client-side hydration

- APIs: Server routes with caching where appropriate

## Accessibility

- Accessibility is treated as a first-class concern.

- WCAG 2.2 AA compliance

- Keyboard-only navigation supported

- Screen reader tested

- Reduced motion preferences respected

- Details: /docs/accessibility.md

## Tradeoffs & Future Improvements

- No real-time collaboration (intentional scope choice)

- Limited theming options

- Future: content versioning, audit logs, feature flags
