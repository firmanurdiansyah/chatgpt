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

export const applyTheme = (
  root: HTMLElement,
  theme: ThemePreset,
  mode: ColorMode,
  brand?: BrandOverride,
): void => {
  root.dataset.theme = theme;
  root.dataset.mode = mode;
  if (brand?.accent) root.style.setProperty("--ui-brand-accent", brand.accent);
  if (brand?.logoUrl) root.dataset.brandLogo = brand.logoUrl;
};
