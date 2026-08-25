import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Badge, Button, Card } from "@ui-platform/components";
import { StatCard } from "@ui-platform/blocks";
import { applyTheme, type ColorMode, type ThemePreset } from "@ui-platform/theme";

type Locale = "id-ID" | "en-US";
type Density = "compact" | "comfortable" | "spacious";
type Route = "overview" | "foundations" | "components" | "blocks" | "charts" | "domains" | "themes" | "motion" | "localization" | "accessibility" | "docs";

const nav = [
  ["overview", "Overview"],
  ["foundations", "Foundations"],
  ["components", "Components"],
  ["blocks", "Blocks"],
  ["charts", "Charts"],
  ["domains", "Domains"],
  ["themes", "Themes"],
  ["motion", "Motion"],
  ["localization", "Localization"],
  ["accessibility", "Accessibility"],
  ["docs", "Docs"],
] as const satisfies readonly [Route, string][];

const copy = {
  "id-ID": { theme: "Tema", mode: "Mode", density: "Kepadatan", locale: "Bahasa", menu: "Buka navigasi", close: "Tutup navigasi", title: "Satu system untuk seluruh produk enterprise.", lede: "Design system yang themeable, responsive, accessible, localized, dan motion-aware.", explore: "Eksplor komponen", architecture: "Lihat arsitektur" },
  "en-US": { theme: "Theme", mode: "Mode", density: "Density", locale: "Language", menu: "Open navigation", close: "Close navigation", title: "One system for every enterprise product.", lede: "A themeable, responsive, accessible, localized and motion-aware design system.", explore: "Explore components", architecture: "View architecture" },
} as const;

function routeFromHash(): Route {
  const value = window.location.hash.slice(1) as Route;
  return nav.some(([key]) => key === value) ? value : "overview";
}

export function App() {
  const [route, setRoute] = useState<Route>(() => routeFromHash());
  const [mobileNav, setMobileNav] = useState(false);
  const [theme, setTheme] = useState<ThemePreset>("professional");
  const [mode, setMode] = useState<ColorMode>("system");
  const [density, setDensity] = useState<Density>("comfortable");
  const [locale, setLocale] = useState<Locale>("id-ID");
  const t = copy[locale];

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    applyTheme(root, theme, mode, { accent: "var(--ui-interactive-primary)" });
    root.dataset.density = density;
    root.lang = locale;
  }, [theme, mode, density, locale]);

  const formatter = useMemo(() => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }), [locale]);
  const activeLabel = nav.find(([key]) => key === route)?.[1] ?? "Overview";

  const page = route === "overview" ? (
    <>
      <motion.section className="ui-hero" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}>
        <p className="ui-eyebrow">UI PLATFORM · FOUNDATION</p><h1 className="ui-title">{t.title}</h1><p className="ui-lede">{t.lede}</p>
        <div className="ui-actions"><a className="ui-button ui-button--lg ui-button--primary" href="#components">{t.explore}</a><a className="ui-button ui-button--lg ui-button--secondary" href="#foundations">{t.architecture}</a></div>
      </motion.section>
      <section className="ui-grid ui-grid--stats" aria-label="Key metrics">
        <StatCard label="Reusable components" value={formatter.format(24)} delta="Composition-first" />
        <StatCard label="Themes" value="3 × 2" delta="Professional · NOC · Finance" />
        <StatCard label="Locales" value="ID · EN" delta="Typed resources" />
        <StatCard label="Motion" value="A11y" delta="Reduced-motion ready" tone="success" />
      </section>
    </>
  ) : (
    <Card><Card.Header><Card.Title>{activeLabel}</Card.Title><Badge tone="info">Phase 2</Badge></Card.Header><Card.Content>
      {route === "foundations" && <Section title="Semantic foundation" items={["Color, surface, content and feedback tokens", "Typography, spacing, radius and elevation", "Component tokens mapped through themes", "Mobile-first responsive contracts"]} />}
      {route === "components" && <Section title="Core component catalog" items={["Button and Badge", "Card compound runtime API", "Form and overlay foundations", "Accessible states and focus contracts"]} />}
      {route === "blocks" && <Section title="Reusable blocks" items={["StatCard", "Operational activity patterns", "Dashboard composition primitives", "Domain-ready block boundaries"]} />}
      {route === "charts" && <Section title="Data visualization" items={["Recharts integration", "Semantic chart tokens", "Responsive containers", "Accessible chart presentation"]} />}
      {route === "domains" && <Section title="Domain readiness" items={["Dashboard", "CRM", "Billing", "Payment", "NMS / OSS / GIS", "ERP / HRM / CMS / Monitoring"]} />}
      {route === "themes" && <Section title="Theme playground" items={["Professional", "NOC", "Finance", "Light / Dark / System", "Semantic token mapping"]} />}
      {route === "motion" && <Section title="Animate UI foundation" items={["Motion abstraction boundary", "Presence and enter/exit patterns", "Purposeful interaction motion", "prefers-reduced-motion"]} />}
      {route === "localization" && <Section title="Localization" items={["Indonesian and English", "Typed locale contract", "Localized document language", "No locale-specific component APIs"]} />}
      {route === "accessibility" && <Section title="Accessibility" items={["Semantic HTML", "Keyboard navigation", "Visible focus", "Accessible names", "Reduced motion"]} />}
      {route === "docs" && <Section title="Documentation contract" items={["Purpose and API", "Variants and states", "Responsive behavior", "Theme and motion behavior", "Accessibility guidance", "Do / Don't"]} />}
    </Card.Content></Card>
  );

  return <div className="ui-app-shell">
    <a className="ui-skip-link" href="#main-content">Skip to content</a>
    <button className="ui-mobile-nav__trigger" type="button" aria-expanded={mobileNav} aria-controls="mobile-navigation" onClick={() => setMobileNav(true)}>{t.menu}</button>
    {mobileNav && <div className="ui-mobile-nav__backdrop" aria-hidden="true" onClick={() => setMobileNav(false)} />}
    <aside className={`ui-sidebar ${mobileNav ? "ui-sidebar--mobile-open" : ""}`} id="mobile-navigation" aria-label="Primary navigation">
      <div className="ui-brand ui-brand--sidebar"><div className="ui-brand__mark" aria-hidden="true">UI</div><div><div className="ui-brand__name">UI Platform</div><div className="ui-brand__meta">Enterprise design system</div></div><button className="ui-mobile-nav__close" type="button" aria-label={t.close} onClick={() => setMobileNav(false)}>×</button></div>
      <nav className="ui-sidebar__nav">
        {nav.map(([key, label]) => <a className="ui-sidebar__item" aria-current={route === key ? "page" : undefined} href={`#${key}`} key={key} onClick={() => setMobileNav(false)}>{label}</a>)}
      </nav>
    </aside>
    <main id="main-content" className="ui-main">
      <header className="ui-topbar">
        <div className="ui-brand"><div className="ui-brand__mark" aria-hidden="true">UI</div><div><div className="ui-brand__name">Design System</div><div className="ui-brand__meta">Professional · NOC · Finance</div></div></div>
        <div className="ui-toolbar" aria-label="Display preferences">
          <label><span className="sr-only">{t.theme}</span><select className="ui-select" value={theme} onChange={(e) => setTheme(e.target.value as ThemePreset)} aria-label={t.theme}><option value="professional">Professional</option><option value="noc">NOC</option><option value="finance">Finance</option></select></label>
          <label><span className="sr-only">{t.mode}</span><select className="ui-select" value={mode} onChange={(e) => setMode(e.target.value as ColorMode)} aria-label={t.mode}><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select></label>
          <label><span className="sr-only">{t.density}</span><select className="ui-select" value={density} onChange={(e) => setDensity(e.target.value as Density)} aria-label={t.density}><option value="compact">Compact</option><option value="comfortable">Comfortable</option><option value="spacious">Spacious</option></select></label>
          <label><span className="sr-only">{t.locale}</span><select className="ui-select" value={locale} onChange={(e) => setLocale(e.target.value as Locale)} aria-label={t.locale}><option value="id-ID">ID</option><option value="en-US">EN</option></select></label>
        </div>
      </header>
      <div className="ui-content"><div className="ui-page-heading"><p className="ui-eyebrow">PHASE 2 · CORE DESIGN SYSTEM</p><h2 className="ui-page-heading__title">{activeLabel}</h2><p className="ui-page-heading__lede">Themeable, reusable, accessible foundation untuk aplikasi enterprise jangka panjang.</p></div>{page}<footer className="ui-footer">React 19 · TypeScript 6 strict · Tailwind 4 · shadcn/ui v4 · Animate UI · Recharts</footer></div>
    </main>
  </div>;
}

function Section({ title, items }: { title: string; items: readonly string[] }) {
  return <div className="ui-doc-section"><h3 className="ui-doc-section__title">{title}</h3><ul className="ui-doc-section__list">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}
