import type { PropsWithChildren } from "react";

export type BadgeTone = "neutral" | "success" | "warning" | "danger" | "info";

export interface BadgeProps extends PropsWithChildren {
  readonly tone?: BadgeTone;
}

export function Badge({ tone = "neutral", children }: BadgeProps) {
  return <span className={`ui-badge ui-badge--${tone}`}>{children}</span>;
}
