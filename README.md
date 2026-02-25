# Frontend Engineer Portfolio

A production-deployed React SPA built to demonstrate frontend architectural discipline, routing stability, performance optimization, and controlled motion design.

Live Site:  
https://my-portfolio-lac-nine-cmr0mdy2ds.vercel.app/

---

## Quick Snapshot

- 6+ route-level pages
- 30+ modular components
- SPA rewrite rules for production routing stability
- Lighthouse: 99–100 Performance | 100 Accessibility
- Automated CI/CD deployment via Vercel

---

## Overview

This portfolio is intentionally built as a structured frontend system — not a template-based showcase.

It demonstrates:

- Component-driven architecture
- Production-safe routing behavior
- Clean responsive layout strategy
- Motion used as enhancement, not distraction
- Performance-first engineering
- Deployment correctness under real hosting conditions

The emphasis is engineering clarity, execution quality, and production correctness.

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Vercel (Production Deployment)

---

## Architecture Highlights

### Component Structure

Clear separation between:

- Layout
- UI Components
- Motion Layer
- Feature Modules
- Utilities
- Static Assets

Responsibilities are intentionally isolated to preserve predictability and future scalability.

---

### Routing Stability

Client-side routing handled using React Router.

Production rewrite rules configured via `vercel.json` ensure:

- No 404 on refresh
- Nested route stability
- Direct URL access reliability

All routes fallback to `index.html` via Vercel rewrite configuration.  
Hard refresh tested across all routed pages.

---

### Responsive System

Mobile-first implementation.

Tailwind breakpoints applied intentionally:

- sm
- md
- lg
- xl

Responsive behavior was engineered from initial layout design, not patched later.

---

### Motion Design

Framer Motion implemented with restraint:

- Controlled entry animations
- No scroll jank
- No excessive transitions
- Performance-safe animation timing

Motion enhances clarity without increasing cognitive load.

---

### Performance

Production Lighthouse Scores:

- Performance: 99–100
- Accessibility: 100
- Best Practices: 100
- SEO: 90+

Optimized production build via Vite with minimal runtime overhead and controlled asset output.

---

## Deployment

Deployed on Vercel with:

- GitHub CI/CD integration
- Automatic production builds on push to `main`
- SPA rewrite configuration
- Preview validation before production release

Each deployment is validated in preview before production release.

---

## Why This Portfolio Exists

This project was built to demonstrate:

- Frontend architectural thinking
- Production deployment awareness
- UX precision
- Technical ownership
- Intentional engineering decisions

It reflects how I approach real-world frontend systems — structured, performant, and reliable.

---

## License

Personal portfolio project.