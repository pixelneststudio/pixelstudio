import { motion } from "framer-motion";
import { TRANSITION } from "../../lib/motion";

/**
 * PixelNest Button
 * Variants: primary | secondary | ghost | outline
 * Sizes: sm | md | lg
 *
 * Not yet wired into existing sections (Navbar/Hero untouched per instructions).
 * Intended to replace ad-hoc button markup once each section is rebuilt.
 */

const BASE =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 rounded-[var(--radius-pill)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] disabled:opacity-50 disabled:pointer-events-none";

const VARIANTS = {
  primary:
    "bg-[var(--color-accent-violet)] text-white hover:bg-[var(--color-accent-violet-hover)] shadow-[var(--shadow-sm)]",
  secondary:
    "bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border border-[var(--color-surface-border)] hover:border-[var(--color-accent-violet-hover)]",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]",
  outline:
    "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-surface-border)] hover:border-[var(--color-accent-violet-hover)] hover:text-[var(--color-accent-violet-hover)]",
};

const SIZES = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

export default function Button({
  variant = "primary",
  size = "md",
  as = "button",
  className = "",
  children,
  ...props
}) {
  const Component = motion[as] ?? motion.button;
  const classes = [BASE, VARIANTS[variant], SIZES[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={TRANSITION.fast}
      {...props}
    >
      {children}
    </Component>
  );
}
