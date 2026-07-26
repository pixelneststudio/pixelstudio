import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

// Thin fixed progress bar reflecting page scroll position. Uses design
// tokens for its gradient rather than raw color classes, and skips the
// spring smoothing (falls back to a direct 1:1 value) when the user has
// requested reduced motion.
function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left"
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : smoothProgress,
        backgroundImage:
          "linear-gradient(to right, var(--color-accent-violet), var(--color-accent-fuchsia), var(--color-accent-cyan))",
      }}
    />
  );
}

export default ScrollProgress;