import * as React from "react";
import { cx } from "./types";

export type CardProps = React.HTMLAttributes<HTMLDivElement>;

function CardRoot({ className, children, ...props }: CardProps) {
  return <section {...props} className={cx("ui-card", className)}>{children}</section>;
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("ui-card__header", className)}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} className={cx("ui-card__title", className)}>{children}</h3>;
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("ui-card__content", className)}>{children}</div>;
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx("ui-card__footer", className)}>{children}</div>;
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
  Footer: CardFooter,
});

export function Alert({ tone = "info", title, children }: { tone?: "info" | "success" | "warning" | "danger"; title?: string; children: React.ReactNode }) {
  return <div role="status" className={`ui-alert ui-alert--${tone}`}><div className="ui-alert__content">{title ? <strong>{title}</strong> : null}<div>{children}</div></div></div>;
}

export function Progress({ value, label }: { value: number; label?: string }) {
  const safe = Math.max(0, Math.min(100, value));
  return <div className="ui-progress"><div className="ui-progress__track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={safe} aria-label={label}><span style={{ inlineSize: `${safe}%` }} /></div></div>;
}

export function Avatar({ src, name, size = "md" }: { src?: string; name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name.split(" ").map(v => v[0]).slice(0, 2).join("").toUpperCase();
  return <span className={`ui-avatar ui-avatar--${size}`} role="img" aria-label={name}>{src ? <img src={src} alt="" /> : initials}</span>;
}

export function Tooltip({ label, children }: { label: string; children: React.ReactElement }) {
  return React.cloneElement(children as React.ReactElement<Record<string, unknown>>, { title: label, "aria-label": label });
}
