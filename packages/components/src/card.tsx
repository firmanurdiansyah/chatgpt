import type { FC, HTMLAttributes, PropsWithChildren } from "react";

type SlotProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;
type TitleProps = HTMLAttributes<HTMLHeadingElement> & PropsWithChildren;

const Header: FC<SlotProps> = ({ className, children, ...props }) => (
  <header className={["ui-card__header", className].filter(Boolean).join(" ")} {...props}>{children}</header>
);

const Title: FC<TitleProps> = ({ className, children, ...props }) => (
  <h3 className={["ui-card__title", className].filter(Boolean).join(" ")} {...props}>{children}</h3>
);

const Content: FC<SlotProps> = ({ className, children, ...props }) => (
  <div className={["ui-card__content", className].filter(Boolean).join(" ")} {...props}>{children}</div>
);

export const Card = Object.assign(
  function Card({ className, children, ...props }: HTMLAttributes<HTMLElement> & PropsWithChildren) {
    return <section className={["ui-card", className].filter(Boolean).join(" ")} {...props}>{children}</section>;
  },
  { Header, Title, Content },
);
