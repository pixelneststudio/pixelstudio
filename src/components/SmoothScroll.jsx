import { useEffect, useRef } from "react";
import Lenis from "lenis";

// Height of the fixed Navbar (h-20 = 5rem = 80px) so anchor-link
// destinations don't land hidden underneath it.
const ANCHOR_OFFSET = -80;

/**
 * Owns Lenis smooth scrolling for the whole app.
 * Renders nothing — purely a lifecycle/behavior component.
 *
 * - Skips initialization entirely when the user prefers reduced motion,
 *   leaving native (instant) scrolling and native anchor jumps in place.
 * - Pauses (lenis.stop()) while `paused` is true, e.g. during the loader.
 * - Intercepts in-page anchor clicks (#services, #projects, ...) and
 *   routes them through lenis.scrollTo so they animate smoothly instead
 *   of jumping — Lenis does not do this automatically.
 */
function SmoothScroll({ paused = false }) {
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Respect the user's preference — no Lenis instance is created,
      // so scrolling and anchor links fall back to native behavior.
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
      smoothWheel: true,
      touchMultiplier: 1.6, // native-feeling on mobile, not sluggish
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    // Route in-page anchor links (#services, #projects, etc.) through
    // Lenis so they scroll smoothly instead of jumping natively.
    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: ANCHOR_OFFSET });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause/resume in response to the `paused` prop (e.g. the loading screen)
  // without tearing down and recreating the Lenis instance.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (paused) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [paused]);

  return null;
}

export default SmoothScroll;