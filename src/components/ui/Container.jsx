/**
 * PixelNest Container
 * Widths: content (1200px, default) | narrow (800px) | wide (1440px)
 */

const WIDTHS = {
  content: "max-w-[var(--container-content)]",
  narrow: "max-w-[var(--container-narrow)]",
  wide: "max-w-[var(--container-wide)]",
};

export default function Container({
  width = "content",
  className = "",
  children,
  ...props
}) {
  const classes = [
    "mx-auto w-full px-[var(--spacing-container-x)]",
    WIDTHS[width],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
