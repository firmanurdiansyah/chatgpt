export const themePresets = ["professional", "noc", "finance"] as const;
export type ThemePreset = (typeof themePresets)[number];

export const colorModes = ["light", "dark", "system"] as const;
export type ColorMode = (typeof colorModes)[number];

export const densities = ["compact", "comfortable", "spacious"] as const;
export type Density = (typeof densities)[number];
