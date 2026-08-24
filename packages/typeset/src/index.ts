export type TextTone = "primary" | "secondary" | "muted" | "success" | "warning" | "danger" | "info";
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export interface TextStyle { tone?: TextTone; size?: TextSize; weight?: "regular" | "medium" | "semibold" | "bold"; }
export const textClassName = ({ tone = "primary", size = "md", weight = "regular" }: TextStyle = {}) => `ui-text ui-text--${tone} ui-text--${size} ui-text--${weight}`;
