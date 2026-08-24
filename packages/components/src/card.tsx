import type { HTMLAttributes, PropsWithChildren } from "react";

export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement> & PropsWithChildren) {
  return <section className={["ui-card", className].filter(Boolean).join(" ")} {...props}>{children}</section>;
}

function Header({ className, children, ...props }: HTMLAttributes<HTMLDivElement> & PropsWithChildren) {
  return <header className={["ui-card__header", className].filter(Boolean).join(" ")} {...props}>{children}</header>;
}

function Title({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement> & PropsWithChildren) {
  return <h3 className={["ui-card__title", className].filter(Boolean).join(" ")} {...props}>{children}</h3>;
}

function Content({ className, children, ...props }: HTMLAttributes<HTMLDivElement> & PropsWithChildren) {
  return <div className={["ui-card__content", className].filter(Boolean).join(" ")} {...props}>{children}</div>;
}

Card.Header = Header;
Card.Title = Title;
Card.Content = Content;
