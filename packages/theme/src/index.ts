export type ThemePreset = "professional" | "noc" | "finance";
export type ColorMode = "light" | "dark" | "system";

export interface BrandOverride {
  readonly accent?: string;
  readonly logoUrl?: string;
}

export const getThemeAttribute = (theme: ThemePreset, mode: ColorMode) => ({ theme, mode });

export const mergeBrandOverride = (
  base: BrandOverride,
  override: BrandOverride,
): BrandOverride => ({ ...base, ...override });

const resolveColorMode = (mode: ColorMode): "light" | "dark" => {
  if (mode !== "system") return mode;
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export const applyTheme = (
  root: HTMLElement,
  theme: ThemePreset,
  mode: ColorMode,
  brand?: BrandOverride,
): void => {
  root.dataset.theme = theme;
  root.dataset.mode = mode;
  root.dataset.resolvedMode = resolveColorMode(mode);
  if (brand?.accent) root.style.setProperty("--ui-brand-accent", brand.accent);
  if (brand?.logoUrl) root.dataset.brandLogo = brand.logoUrl;
};
