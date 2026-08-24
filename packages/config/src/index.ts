export type ThemePreset = "professional" | "noc" | "finance";
export type ColorMode = "light" | "dark" | "system";
export type Density = "compact" | "comfortable" | "spacious";

export interface ThemeConfig {
  readonly preset: ThemePreset;
  readonly mode: ColorMode;
}

export interface BrandConfig {
  readonly id: string;
  readonly name?: string;
}

export interface LocaleConfig {
  readonly default: string;
  readonly supported: readonly string[];
  readonly fallback?: string;
}

export interface AccessibilityConfig {
  readonly reducedMotion: "respect" | "always" | "never";
  readonly focusVisible: boolean;
}

export interface DomainConfig {
  readonly dashboard?: boolean;
  readonly crm?: boolean;
  readonly finance?: boolean;
  readonly billing?: boolean;
  readonly payment?: boolean;
  readonly inventory?: boolean;
  readonly erp?: boolean;
  readonly hrm?: boolean;
  readonly oss?: boolean;
  readonly nms?: boolean;
  readonly gis?: boolean;
  readonly omniChat?: boolean;
  readonly cms?: boolean;
  readonly log?: boolean;
  readonly monitoring?: boolean;
}

export interface UIConfig {
  readonly theme: ThemeConfig;
  readonly brand: BrandConfig;
  readonly locale: LocaleConfig;
  readonly density: Density;
  readonly accessibility: AccessibilityConfig;
  readonly domains: DomainConfig;
}

export const defineUIConfig = (config: UIConfig): UIConfig => config;

export const uiConfig = defineUIConfig({
  theme: { preset: "professional", mode: "system" },
  brand: { id: "default" },
  locale: { default: "id-ID", supported: ["id-ID", "en-US"], fallback: "en-US" },
  density: "comfortable",
  accessibility: { reducedMotion: "respect", focusVisible: true },
  domains: {},
});
