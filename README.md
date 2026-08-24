# UI Platform

Themeable enterprise UI platform untuk aplikasi Dashboard, CRM, Billing, Payment, Omni Chat, OSS, NMS, GIS, Finance, Inventory, ERP, HRM, CMS, Log, Monitoring, CRUD, Landing, Auth, Docs, dan Public.

## Foundation

- React 19.x
- TypeScript 6 strict
- Tailwind CSS 4
- shadcn/ui v4
- Animate UI
- Recharts
- pnpm workspace + Turborepo

## Architecture

`tokens → typeset → primitives → components → compound → blocks → layouts → domain → pages`

Foundation components tidak boleh bergantung pada domain. Theme menggunakan semantic CSS variables sehingga Professional, NOC, dan Finance dapat berbagi component API yang sama.

## Themes

- `professional` — enterprise/general purpose
- `noc` — high-density monitoring and operations
- `finance` — precision-oriented data and financial workflows

Brand customization mengikuti model `Base Theme → Brand Override`.

## Configuration

Konfigurasi dipisah berdasarkan concern dan dikomposisikan melalui `ui.config.ts`. i18n, accessibility, responsive behavior, theme, density, dan feature/domain registration diperlakukan sebagai foundation concerns.
