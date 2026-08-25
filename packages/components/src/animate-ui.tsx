import * as React from "react";
import { Motion, MotionPresence } from "./motion";

export interface AnimateFadeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  open?: boolean;
}

/** Animate UI-compatible foundation exposed by the design system. */
export function AnimateFade({ children, open = true, ...props }: AnimateFadeProps) {
  return (
    <Motion {...props} preset="fade" aria-hidden={!open || undefined}>
      {open ? children : null}
    </Motion>
  );
}

export interface AnimatePresenceProps {
  children: React.ReactNode;
  present?: boolean;
}

export function AnimatePresence({ children, present = true }: AnimatePresenceProps) {
  return <MotionPresence present={present}>{children}</MotionPresence>;
}

export { Motion, MotionPresence };
