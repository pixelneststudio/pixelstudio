import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { getMagneticOffset } from "../../lib/motion";

const MAX_OFFSET = 7;

function MagneticButton({
  as = "button",
  className = "",
  children,
  whileHover,
  whileTap,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  const [isTouchDevice] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: none), (pointer: coarse)").matches
  );

  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  const y = useSpring(rawY, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  const disableMagnetism = isTouchDevice || prefersReducedMotion;

  const handleMouseMove = (event) => {
    if (disableMagnetism || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offset = getMagneticOffset(event, rect, 0.35);

    rawX.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, offset.x)));
    rawY.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, offset.y)));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const MotionTag = motion[as] ?? motion.button;

  // Touch devices / Reduced motion
  if (disableMagnetism) {
    const PlainTag = as;

    return (
      <PlainTag className={className} {...props}>
        {children}
      </PlainTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default MagneticButton;