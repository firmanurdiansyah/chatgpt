import * as React from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Transition,
} from "motion/react";

export type MotionPreset = "fade" | "fade-scale" | "slide-up";

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "fade-scale": {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 8 },
  },
} as const;

const reducedMotionTransition: Transition = { duration: 0 };

export interface MotionPresenceProps {
  children: React.ReactNode;
  mode?: "sync" | "wait" | "popLayout";
  initial?: boolean;
}

export function MotionPresence({ children, mode = "sync", initial = false }: MotionPresenceProps) {
  return (
    <AnimatePresence initial={initial} mode={mode}>
      {children}
    </AnimatePresence>
  );
}

export interface MotionProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  preset?: MotionPreset;
}

export function Motion({ children, preset = "fade", transition, ...props }: MotionProps) {
  const reducedMotion = useReducedMotion();
  const variant = variants[preset];
  const resolvedTransition = reducedMotion ? reducedMotionTransition : transition;

  return (
    <motion.div
      {...props}
      initial={reducedMotion ? false : variant.initial}
      animate={reducedMotion ? { opacity: 1 } : variant.animate}
      exit={reducedMotion ? { opacity: 1 } : variant.exit}
      {...(resolvedTransition === undefined
        ? {}
        : { transition: resolvedTransition })}
    >
      {children}
    </motion.div>
  );
}
