import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonClassName = (variant: ButtonVariant, size: ButtonSize): string =>
  `ui-button ui-button--${variant} ui-button--${size}`;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = [buttonClassName(variant, size), className].filter(Boolean).join(" ");
  return <button className={classes} type={props.type ?? "button"} {...props}>{children}</button>;
}
