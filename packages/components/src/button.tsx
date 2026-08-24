import * as React from "react";
import type { Intent, Size, Tone } from "./types";
import { cx } from "./types";

export const buttonClassName = (tone: Tone = "primary", size: Size = "md") => `ui-button ui-button--${tone} ui-button--${size}`;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { size?: Size; tone?: Tone; loading?: boolean; }
export function Button({ className, size = "md", tone = "primary", loading = false, disabled, children, type = "button", ...props }: ButtonProps) { return <button {...props} type={type as Intent} disabled={disabled || loading} aria-busy={loading || undefined} className={cx(buttonClassName(tone, size), loading && "ui-button--loading", className)}>{loading ? <span className="ui-button__spinner" aria-hidden="true" /> : null}<span className="ui-button__content">{children}</span></button>; }
export interface BadgeProps { tone?: Tone; size?: "sm" | "md"; className?: string; children: React.ReactNode }
export function Badge({ tone = "neutral", size = "md", className, children }: BadgeProps) { return <span className={cx("ui-badge", `ui-badge--${tone}`, `ui-badge--${size}`, className)}>{children}</span>; }
export function Spinner({ label = "Loading" }: { label?: string }) { return <span className="ui-spinner" role="status" aria-label={label} />; }
export function Skeleton({ className }: { className?: string }) { return <span aria-hidden="true" className={cx("ui-skeleton", className)} />; }
export function Separator({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) { return <div role="separator" aria-orientation={orientation} className={cx("ui-separator", `ui-separator--${orientation}`)} />; }
