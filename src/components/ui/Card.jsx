/**
 * PixelNest Card
 * Variants: flat | raised | outline | interactive
 */

const BASE = "rounded-[var(--radius-lg)] p-6";

const VARIANTS = {
  flat: "bg-[var(--color-surface-raised)]",
  raised:
    "bg-[var(--color-surface-raised)] shadow-[var(--shadow-md)]",
  outline:
    "bg-transparent border border-[var(--color-surface-border)]",
  interactive:
    "bg-[var(--color-surface-raised)] border border-[var(--color-surface-border)] transition-all duration-300 hover:border-[var(--color-accent-violet-hover)] hover:shadow-[var(--shadow-glow-violet)]",
};

export default function Card({
  variant = "flat",
  className = "",
  children,
  ...props
}) {
  const classes = [BASE, VARIANTS[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
