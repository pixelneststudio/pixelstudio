import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "../../lib/motion";
import MagneticButton from "./MagneticButton";

// Roughly "past the Hero" — Hero is min-h-screen, so one viewport height
// is a reliable trigger point without needing a ref/IntersectionObserver
// wired into Hero.jsx itself (keeping Hero untouched).
const SCROLL_THRESHOLD_RATIO = 0.9;

/**
 * A floating "Start Project" CTA that appears once the visitor has
 * scrolled past the Hero, and hides again near the very top of the
 * page. Scroll position is read via a rAF-throttled listener and only
 * triggers a re-render when the visibility boundary is actually
 * crossed, not on every scroll tick.
 */
function FloatingCTA() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const rafId = useRef(null);
  const wasVisible = useRef(false);

  useEffect(() => {
    const threshold = () => window.innerHeight * SCROLL_THRESHOLD_RATIO;

    const evaluateScroll = () => {
      const shouldShow = window.scrollY > threshold();
      if (shouldShow !== wasVisible.current) {
        wasVisible.current = shouldShow;
        setIsVisible(shouldShow);
      }
      rafId.current = null;
    };

    const handleScroll = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(evaluateScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Evaluate once on mount in case the page loads already scrolled.
    evaluateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const transition = prefersReducedMotion
    ? { duration: 0.15 }
    : { duration: 0.4, ease: EASE.standard };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: prefersReducedMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: prefersReducedMotion ? 1 : 0.95 }}
          transition={transition}
          className="fixed bottom-5 right-5 z-[9998] sm:bottom-8 sm:right-8"
        >
          <MagneticButton
            as="a"
            href="#contact"
            className="group flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent-violet)] px-5 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-[var(--shadow-lg)] transition-colors duration-300 hover:bg-[var(--color-accent-violet-hover)] sm:px-6 sm:py-4 sm:text-sm"
          >
            Start Project
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingCTA;