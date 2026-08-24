export type Size = "sm" | "md" | "lg";
export type Tone = "neutral" | "primary" | "success" | "warning" | "danger" | "info";
export type Intent = "button" | "submit" | "reset";

export const cx = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(" ");
