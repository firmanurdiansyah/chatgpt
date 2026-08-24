# UI Platform

Themeable enterprise UI platform untuk aplikasi Dashboard, CRM, Billing, Payment, Omni Chat, OSS, NMS, GIS, Finance, Inventory, ERP, HRM, CMS, Log, Monitoring, CRUD, Landing, Auth, Docs, dan Public.

## Foundation

- React 19.2.x
- TypeScript 6.0.3 strict
- Tailwind CSS 4.3.x
- shadcn/ui CLI v4-compatible registry configuration
- Animate UI / Motion-compatible animation layer
- Recharts 3.10.x
- Vite 8.x
- pnpm workspace + Turborepo

## Architecture

`config → tokens → theme → primitives → components → compound → blocks/layouts/charts → domain → pages`

Foundation components tidak boleh bergantung pada domain. Theme menggunakan semantic CSS variables sehingga Professional, NOC, dan Finance dapat berbagi component API yang sama.

## Themes

- `professional` — enterprise/general purpose
- `noc` — high-density monitoring and operations
- `finance` — precision-oriented data and financial workflows

Brand customization mengikuti model `Base Theme → Brand Override`.

## Configuration

Konfigurasi dipisah berdasarkan concern dan dikomposisikan melalui `ui.config.ts`. i18n, accessibility, responsive behavior, theme, density, dan feature/domain registration diperlakukan sebagai foundation concerns.

## Showcase

`apps/showcase` adalah reference implementation interaktif untuk theme switching, light/dark/system, density, locale, reusable blocks, Recharts, responsive layout, keyboard focus, reduced motion, dan Motion-powered entrance animation.

## Development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

Dokumen desain dan implementation plan ada di `docs/superpowers/specs/` dan `docs/superpowers/plans/`.
