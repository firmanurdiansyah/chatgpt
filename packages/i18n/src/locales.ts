export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  id: {
    common: "Umum",
    theme: "Tema",
    mode: "Mode warna",
    light: "Terang",
    dark: "Gelap",
    system: "Sistem",
    professional: "Profesional",
    noc: "NOC",
    finance: "Finance",
  },
  en: {
    common: "Common",
    theme: "Theme",
    mode: "Color mode",
    light: "Light",
    dark: "Dark",
    system: "System",
    professional: "Professional",
    noc: "NOC",
    finance: "Finance",
  },
} as const satisfies Record<Locale, Readonly<Record<string, string>>>;
