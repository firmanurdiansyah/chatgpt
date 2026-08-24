# UI Platform Design Specification

## Goal
Membangun UI platform jangka panjang yang themeable, accessible, responsive, i18n-ready, dan dapat dipakai ulang lintas Dashboard, CRM, Finance, Billing, Payment, Omni Chat, OSS, NMS, GIS, Inventory, ERP, HRM, CMS, Log, Monitoring, CRUD, Landing, Auth, Error, Docs, dan public pages.

## Architecture
Monorepo pnpm + Turborepo dengan package boundaries yang ketat. Aliran dependency: tokens → config/theme → primitives → components → compound → blocks/layouts → domain blocks → pages. Domain tidak boleh membuat ulang primitive atau bergantung balik ke foundation.

## Theme contract
Base Theme → Brand Override. Preset awal: Professional, NOC, Finance. Mode: light/dark/system. Component hanya menggunakan semantic/component tokens; theme tidak mengubah component tree.

## UI contract
Composition-first, semantic variants, slot-based customization, CSS naming `ui-*`, mobile-first responsive behavior, WCAG-oriented accessibility, reduced-motion support, localized strings and formatters, tree-shakable ESM packages, lazy domain/chart/locale boundaries.

## Stack
React 19.2.x, TypeScript 6.x strict, Tailwind CSS 4.x, shadcn/ui CLI v4, Animate UI distribution, Recharts 3.x, Vite 8.x, Vitest 4.x.

## Implementation scope
Phase 1 in this repository delivers the working foundation and a reference showcase proving the three themes, reusable atomic/compound components, responsive dashboard blocks, data visualization, i18n switching, and accessibility behavior. Domain/page packages are registered as extension points and are added incrementally without violating boundaries.

## Quality gates
Every feature gets tests first where behavior exists. CI runs typecheck, lint, test, and build. Completion claims require fresh GitHub Actions evidence. No hardcoded theme colors in components, no domain imports into foundation, and no duplicate components for data-only differences.
