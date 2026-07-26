/**
 * PixelNest Motion Presets
 * Centralized Framer Motion variants + transitions so every section
 * animates with the same easing/timing language instead of
 * one-off values scattered per component.
 */

// ---- Easing curves ----
export const EASE = {
  standard: [0.22, 1, 0.36, 1], // premium "decelerate" ease, used by Linear/Vercel-style UI
  smooth: [0.4, 0, 0.2, 1],
  sharp: [0.4, 0, 1, 1],
};

// ---- Base transitions ----
export const TRANSITION = {
  base: { duration: 0.7, ease: EASE.standard },
  fast: { duration: 0.3, ease: EASE.standard },
  slow: { duration: 0.9, ease: EASE.standard },
  spring: { type: "spring", stiffness: 260, damping: 24 },
  springSoft: { type: "spring", stiffness: 160, damping: 20 },
};

// ---- Scroll-reveal variants ----
// Usage: <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} />
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: TRANSITION.base },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: TRANSITION.base },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: TRANSITION.base },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: TRANSITION.base },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: TRANSITION.base },
};

// ---- Stagger container ----
// Wrap children (each using `fadeUp` or similar) in a parent with this variant.
export const staggerContainer = (staggerAmount = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerAmount,
      delayChildren,
    },
  },
});

// ---- Standard viewport config for scroll reveals ----
export const VIEWPORT_ONCE = {
  once: true,
  amount: "some",
  margin: "0px 0px -20px 0px",
};

// ---- Hover / interaction presets ----
export const hoverLift = {
  whileHover: { y: -4, transition: TRANSITION.fast },
  whileTap: { y: 0, scale: 0.98 },
};

export const hoverScale = {
  whileHover: { scale: 1.03, transition: TRANSITION.fast },
  whileTap: { scale: 0.97 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "var(--shadow-glow-violet)",
    transition: TRANSITION.fast,
  },
};

// ---- Magnetic button helper ----
// Call inside onMouseMove with the event + bounding rect to get x/y offsets,
// then feed into a motion.div's `animate={{ x, y }}`.
export function getMagneticOffset(event, boundingRect, strength = 0.3) {
  const relX = event.clientX - (boundingRect.left + boundingRect.width / 2);
  const relY = event.clientY - (boundingRect.top + boundingRect.height / 2);
  return { x: relX * strength, y: relY * strength };
}

// ---- Page-level transition (for future route changes) ----
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: TRANSITION.base },
  exit: { opacity: 0, y: -12, transition: TRANSITION.fast },
};