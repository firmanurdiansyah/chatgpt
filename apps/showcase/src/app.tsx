import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge, Button, Card } from "@ui-platform/components";
import { applyTheme, type ColorMode, type ThemePreset } from "@ui-platform/theme";

type Locale = "id-ID" | "en-US";
type Density = "compact" | "comfortable" | "spacious";

const copy = {
  "id-ID": {
    eyebrow: "UI PLATFORM · FOUNDATION",
    title: "Satu system untuk seluruh produk enterprise.",
    lede: "Reference implementation yang membuktikan themeable UI, semantic tokens, reusable components, data visualization, i18n, accessibility, dan responsive behavior dalam satu surface.",
    primary: "Eksplor komponen",
    secondary: "Lihat arsitektur",
    revenue: "Pendapatan bulanan",
    users: "Pengguna aktif",
    uptime: "Uptime",
    tickets: "Tiket terbuka",
    trend: "Tren operasional",
    activity: "Aktivitas terbaru",
    theme: "Theme",
    mode: "Mode",
    density: "Density",
    locale: "Bahasa",
    status: "Status",
  },
  "en-US": {
    eyebrow: "UI PLATFORM · FOUNDATION",
    title: "One system for every enterprise product.",
    lede: "A reference implementation proving themeable UI, semantic tokens, reusable components, data visualization, i18n, accessibility, and responsive behavior in one surface.",
    primary: "Explore components",
    secondary: "View architecture",
    revenue: "Monthly revenue",
    users: "Active users",
    uptime: "Uptime",
    tickets: "Open tickets",
    trend: "Operational trend",
    activity: "Latest activity",
    theme: "Theme",
    mode: "Mode",
    density: "Density",
    locale: "Language",
    status: "Status",
  },
} as const;

const data = [
  { month: "Jan", value: 42 }, { month: "Feb", value: 48 }, { month: "Mar", value: 46 },
  { month: "Apr", value: 58 }, { month: "May", value: 64 }, { month: "Jun", value: 61 },
  { month: "Jul", value: 72 }, { month: "Aug", value: 78 },
];

const activities = [
  ["Payment reconciliation completed", "2 min", "success"],
  ["NMS edge cluster degraded", "11 min", "warning"],
  ["CRM import processed", "24 min", "info"],
  ["Invoice #INV-2048 approved", "41 min", "success"],
] as const;

export function App() {
  const [theme, setTheme] = useState<ThemePreset>("professional");
  const [mode, setMode] = useState<ColorMode>("system");
  const [density, setDensity] = useState<Density>("comfortable");
  const [locale, setLocale] = useState<Locale>("id-ID");
  const t = copy[locale];

  useEffect(() => {
    const root = document.documentElement;
    applyTheme(root, theme, mode, { accent: "var(--ui-interactive-primary)" });
    root.dataset.density = density;
    root.lang = locale;
  }, [theme, mode, density, locale]);

  const formatter = useMemo(() => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }), [locale]);

  return (
    <div className="ui-app-shell">
      <a className="ui-skip-link" href="#main-content">Skip to content</a>
      <aside className="ui-sidebar" aria-label="Primary navigation">
        <div className="ui-brand" style={{ padding: "1rem" }}>
          <div className="ui-brand__mark" aria-hidden="true">UI</div>
          <div><div className="ui-brand__name">UI Platform</div><div className="ui-brand__meta">Enterprise system</div></div>
        </div>
        <nav className="ui-sidebar__nav">
          {['Overview', 'Components', 'Blocks', 'Charts', 'Domains', 'Docs'].map((item, index) => (
            <a className="ui-sidebar__item" aria-current={index === 0 ? "page" : undefined} href={`#${item.toLowerCase()}`} key={item}>{item}</a>
          ))}
        </nav>
      </aside>

      <main id="main-content" className="ui-main">
        <header className="ui-topbar">
          <div className="ui-brand">
            <div className="ui-brand__mark" aria-hidden="true">UI</div>
            <div><div className="ui-brand__name">Design System</div><div className="ui-brand__meta">Professional · NOC · Finance</div></div>
          </div>
          <div className="ui-toolbar" aria-label="Display preferences">
            <label><span className="sr-only">{t.theme}</span><select className="ui-select" value={theme} onChange={(e) => setTheme(e.target.value as ThemePreset)} aria-label={t.theme}><option value="professional">Professional</option><option value="noc">NOC</option><option value="finance">Finance</option></select></label>
            <label><span className="sr-only">{t.mode}</span><select className="ui-select" value={mode} onChange={(e) => setMode(e.target.value as ColorMode)} aria-label={t.mode}><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select></label>
            <label><span className="sr-only">{t.density}</span><select className="ui-select" value={density} onChange={(e) => setDensity(e.target.value as Density)} aria-label={t.density}><option value="compact">Compact</option><option value="comfortable">Comfortable</option><option value="spacious">Spacious</option></select></label>
            <label><span className="sr-only">{t.locale}</span><select className="ui-select" value={locale} onChange={(e) => setLocale(e.target.value as Locale)} aria-label={t.locale}><option value="id-ID">ID</option><option value="en-US">EN</option></select></label>
          </div>
        </header>

        <div className="ui-content">
          <motion.section className="ui-hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
            <p className="ui-eyebrow">{t.eyebrow}</p>
            <h1 className="ui-title">{t.title}</h1>
            <p className="ui-lede">{t.lede}</p>
            <div className="ui-actions">
              <Button size="lg">{t.primary}</Button>
              <Button size="lg" variant="secondary">{t.secondary}</Button>
            </div>
          </motion.section>

          <section className="ui-grid ui-grid--stats" aria-label="Key metrics">
            <Metric label={t.revenue} value={`Rp ${formatter.format(12.8)}M`} delta="+12.4%" />
            <Metric label={t.users} value={formatter.format(4820)} delta="+8.7%" />
            <Metric label={t.uptime} value="99.98%" delta="+0.03%" />
            <Metric label={t.tickets} value={formatter.format(38)} delta="-14.2%" />
          </section>

          <section className="ui-grid ui-grid--content" style={{ marginTop: ".75rem" }}>
            <Card>
              <Card.Header><Card.Title>{t.trend}</Card.Title><Badge tone="success">Live</Badge></Card.Header>
              <Card.Content><div className="ui-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}><defs><linearGradient id="ui-chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--ui-chart-series-1)" stopOpacity={.3}/><stop offset="100%" stopColor="var(--ui-chart-series-1)" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="var(--ui-chart-grid)" vertical={false}/><XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "var(--ui-content-secondary)", fontSize: 11 }}/><YAxis tickLine={false} axisLine={false} tick={{ fill: "var(--ui-content-secondary)", fontSize: 11 }}/><Tooltip contentStyle={{ background: "var(--ui-surface-card)", border: "1px solid var(--ui-border-default)", borderRadius: 8, color: "var(--ui-content-primary)" }}/><Area type="monotone" dataKey="value" stroke="var(--ui-chart-series-1)" strokeWidth={2.5} fill="url(#ui-chart-fill)"/></AreaChart></ResponsiveContainer></div></Card.Content>
            </Card>

            <Card>
              <Card.Header><Card.Title>{t.activity}</Card.Title><Badge tone="info">24h</Badge></Card.Header>
              <Card.Content>
                <div className="ui-grid">
                  {activities.map(([label, time, tone]) => <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", paddingBlock: ".55rem", borderBottom: "1px solid var(--ui-border-default)" }}><div style={{ minWidth: 0 }}><div style={{ fontSize: ".8rem", fontWeight: 650 }}>{label}</div><div style={{ marginTop: ".2rem", color: "var(--ui-content-secondary)", fontSize: ".7rem" }}>{time} ago</div></div><Badge tone={tone}>{t.status}</Badge></div>)}
                </div>
              </Card.Content>
            </Card>
          </section>

          <section style={{ marginTop: ".75rem" }}>
            <Card>
              <Card.Header><Card.Title>Component contract</Card.Title><Badge tone="neutral">Composition-first</Badge></Card.Header>
              <Card.Content>
                <div className="ui-actions"><Button size="sm">Primary</Button><Button size="sm" variant="secondary">Secondary</Button><Button size="sm" variant="ghost">Ghost</Button><Button size="sm" variant="danger">Destructive</Button><Badge tone="success">Success</Badge><Badge tone="warning">Warning</Badge><Badge tone="danger">Critical</Badge></div>
              </Card.Content>
            </Card>
          </section>

          <footer className="ui-footer">UI Platform foundation · React 19 · TypeScript 6 strict · Tailwind 4 · shadcn/ui v4 · Animate UI · Recharts</footer>
        </div>
      </main>
    </div>
  );
}

function Metric({ label, value, delta }: { readonly label: string; readonly value: string; readonly delta: string }) {
  return <Card><div className="ui-stat"><p className="ui-stat__label">{label}</p><p className="ui-stat__value">{value}</p><p className="ui-stat__delta">{delta}</p></div></Card>;
}
