# UI Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Membuat foundation UI platform dan showcase yang membuktikan themeability, reusable components, charts, i18n, accessibility, responsive behavior, dan CI/deploy.

**Architecture:** pnpm/Turborepo monorepo. Shared packages own contracts and tokens; showcase is a consumer application. Domain packages are extension points, not copies of primitives.

**Tech Stack:** React 19.2.x, TypeScript 6.0.3 strict, Tailwind CSS 4.3.3, shadcn/ui CLI 4.x, Animate UI open component distribution, Recharts 3.10.1, Vite 8.2.2, Vitest 4.1.11.

**Spec:** `docs/superpowers/specs/2026-08-24-ui-platform-design.md`

## Global Constraints
- Mobile-first and responsive.
- Semantic CSS naming: `ui-*`, `ui-{component}__{element}`, `ui-{component}--{modifier}`.
- Theme via semantic CSS variables; no component hardcoded palette.
- Base Theme → Brand Override.
- i18n, accessibility, light/dark, reduced motion, and performance are foundation concerns.
- No domain-to-foundation dependency inversion.
- Reuse by semantic composition, not by accidental markup similarity.

---

### Task 1: Workspace and build contracts

**Files:** root package manifests, workspace package manifests, app manifests, Vite/TS configs, CI.

- [ ] Define workspace packages and scripts.
- [ ] Pin compatible stable dependency versions.
- [ ] Generate lockfile in CI on first install, then enforce frozen lockfile after it is committed.
- [ ] Run typecheck/lint/test/build in GitHub Actions.

### Task 2: Theme/config foundation

**Files:** `packages/config`, `packages/tokens`, `packages/theme`.

- [ ] Test config validation and theme registry behavior.
- [ ] Implement Professional, NOC, Finance semantic tokens.
- [ ] Implement light/dark/system mode attributes.
- [ ] Implement Base Theme → Brand Override contract.

### Task 3: Reusable component foundation

**Files:** `packages/primitives`, `packages/components`, `packages/compound`.

- [ ] Add failing tests for Button, Card, Badge, Input, Select-like control contracts.
- [ ] Implement composition-first APIs and semantic variants.
- [ ] Add keyboard/focus/invalid/loading states.
- [ ] Add shadcn-compatible `components.json` and component source organization.
- [ ] Add Animate UI-inspired/open-source motion primitives with reduced-motion handling.

### Task 4: Layout, chart and blocks

**Files:** `packages/layouts`, `packages/charts`, `packages/blocks`.

- [ ] Implement AppShell and responsive dashboard layout.
- [ ] Implement Recharts adapters using data-viz tokens.
- [ ] Implement StatCard, ChartCard, ActivityFeed, FilterBar and DataTable block contracts.

### Task 5: Showcase application

**Files:** `apps/showcase`.

- [ ] Build a real interactive reference page, not a static mock.
- [ ] Add theme selector, light/dark/system mode, density selector, locale selector.
- [ ] Demonstrate reusable components and charts.
- [ ] Demonstrate responsive mobile navigation and accessible controls.

### Task 6: Documentation and domain registry

**Files:** `docs/`, `packages/domain-registry`, README.

- [ ] Document architecture, naming, theme extension, component rules and domain boundaries.
- [ ] Register planned domains without coupling implementation to foundation.
- [ ] Add integration guidance for Dashboard, CRM, Finance, Billing, Payment, Omni Chat, OSS, NMS, GIS, Inventory, ERP, HRM, CMS, Log and Monitoring.

### Task 7: Deployment and verification

- [ ] Add GitHub Pages deployment workflow.
- [ ] Trigger CI/deploy from main.
- [ ] Inspect workflow jobs and artifacts.
- [ ] Only report build/test/deploy success with fresh GitHub Actions evidence.
