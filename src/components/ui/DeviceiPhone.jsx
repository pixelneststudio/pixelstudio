import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

function DeviceiPhone({ children, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const [isTouchDevice] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: none), (pointer: coarse)").matches
  );
  const containerRef = useRef(null);
  const rafId = useRef(null);
  
  const rotateX = useRef(0);
  const rotateY = useRef(0);
  const targetRotateX = useRef(0);
  const targetRotateY = useRef(0);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return undefined;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Opposite rotation from MacBook, max 4deg
      targetRotateY.current = -(deltaX / rect.width) * 4;
      targetRotateX.current = (deltaY / rect.height) * 4;
    };

    const animate = () => {
      // Smooth interpolation
      rotateX.current += (targetRotateX.current - rotateX.current) * 0.1;
      rotateY.current += (targetRotateY.current - rotateY.current) * 0.1;
      
      if (containerRef.current) {
        containerRef.current.style.transform = `
          perspective(1000px)
          rotateX(${rotateX.current}deg)
          rotateY(${rotateY.current}deg)
          translateY(${prefersReducedMotion ? 0 : 8}px)
        `;
      }
      
      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [isTouchDevice, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        transform: prefersReducedMotion ? "none" : "perspective(1000px)",
        transition: prefersReducedMotion ? "none" : "transform 0.1s ease-out",
      }}
    >
      {/* iPhone 16 Pro Frame */}
      <div className="relative mx-auto" style={{ width: "100%", maxWidth: "280px" }}>
        {/* Device Body */}
        <div className="relative bg-zinc-900 rounded-[3rem] border-4 border-zinc-700 overflow-hidden"
             style={{ 
               aspectRatio: "9/19.5",
               boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(124, 58, 237, 0.1), inset 0 0 60px rgba(0, 0, 0, 0.3)"
             }}>
          {/* Screen Content */}
          <div className="w-full h-full overflow-hidden rounded-[2.5rem]">
            {children}
          </div>
          
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20"
               style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-800" />
          </div>
          
          {/* Screen Reflection */}
          <div 
            className="absolute inset-0 pointer-events-none z-10 rounded-[2.5rem]"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(255,255,255,0.03) 100%)",
              opacity: 0.6
            }}
          />
          
          {/* Side Buttons */}
          <div className="absolute left-0 top-24 w-1 h-12 bg-zinc-700 rounded-l" />
          <div className="absolute left-0 top-40 w-1 h-8 bg-zinc-700 rounded-l" />
          <div className="absolute right-0 top-28 w-1 h-16 bg-zinc-700 rounded-r" />
          
          {/* Bottom Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-20" />
        </div>
      </div>
    </div>
  );
}

export default DeviceiPhone;
