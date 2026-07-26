/**
 * PixelNest Badge
 * Variants: neutral | violet | success | warning | danger
 */

const BASE =
  "inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-1 text-xs font-medium tracking-wide";

const VARIANTS = {
  neutral:
    "bg-[var(--color-surface-overlay)] text-[var(--color-text-secondary)] border border-[var(--color-surface-border)]",
  violet:
    "bg-[var(--color-accent-violet)]/15 text-[var(--color-accent-violet-hover)] border border-[var(--color-accent-violet)]/30",
  success: "bg-[var(--color-success)]/15 text-[var(--color-success)] border border-[var(--color-success)]/30",
  warning: "bg-[var(--color-warning)]/15 text-[var(--color-warning)] border border-[var(--color-warning)]/30",
  danger: "bg-[var(--color-danger)]/15 text-[var(--color-danger)] border border-[var(--color-danger)]/30",
};

export default function Badge({ variant = "neutral", className = "", children, ...props }) {
  const classes = [BASE, VARIANTS[variant], className].filter(Boolean).join(" ");

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
