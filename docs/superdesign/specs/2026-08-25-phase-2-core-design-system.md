# Phase 2 — Core Design System

## Goal
Build the reusable foundation for long-lived applications with semantic theming, i18n, mobile-first responsive behavior, accessible motion, and compound component APIs.

## Architecture

Primitive tokens → semantic tokens → component tokens → theme mapping → components/blocks/pages.

Motion follows the same abstraction: motion tokens → project motion API → Animate UI implementation → component behavior.

## Initial themes
- Professional
- NOC
- Finance

Each theme supports light and dark modes through semantic token mappings.

## i18n
- Indonesian (`id`) is the default locale.
- English (`en`) is the initial secondary locale.
- User-facing strings must come from translation resources.
- Components must accept localized content without coupling to a specific locale.

## Motion / Animate UI
Animate UI is integrated as the implementation layer for reusable motion primitives. Components must not scatter direct animation constants. Motion tokens define duration/easing and support `prefers-reduced-motion`.

Motion is purposeful: feedback, presence, enter/exit, navigation, disclosure, overlays, and state transitions. Avoid decorative animation and per-row/per-cell animation in dense enterprise data views.

## Responsive
Mobile-first CSS. Components must remain usable at narrow viewports before desktop enhancements are applied. Avoid fixed intrinsic widths that can create horizontal overflow.

## Accessibility
Semantic HTML first, accessible names, keyboard interaction, visible focus, appropriate ARIA, sufficient target sizes, contrast-aware semantic tokens, and reduced-motion support.

## Component layering
Primitive → Atomic → Compound → Block → Domain Block → Page.
Compound APIs must be real runtime objects when exposed (for example `Card.Header`), not TypeScript-only namespaces.

## Quality gates
Every implementation batch must pass strict typecheck, lint, unit tests where applicable, production build, Playwright browser smoke tests, theme/mode checks, i18n checks, mobile/desktop checks, accessibility checks, reduced-motion checks, and performance budget before deployment.

## Phase 2 scope
1. Token and theme foundation.
2. i18n foundation.
3. Motion/Animate UI foundation.
4. Core primitives and atomic components.
5. Compound component runtime APIs.
6. Responsive and accessibility contracts.
7. Showcase examples and documentation.
8. CI coverage for the new behavior.
