/**
 * Animate UI integration boundary.
 *
 * Animate UI is distributed as open source shadcn-compatible components rather
 * than a single runtime package. This package keeps our public motion API
 * stable while allowing selected Animate UI primitives to be vendored into
 * this layer without leaking implementation details to domain components.
 */
export const animateUiIntegration = {
  source: "animate-ui",
  strategy: "open-component-distribution",
  motionEngine: "motion/react",
} as const;
