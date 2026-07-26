import { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

function DeviceMacBook({ children, className = "" }) {
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
      
      // Max 4deg rotation
      targetRotateY.current = (deltaX / rect.width) * 4;
      targetRotateX.current = -(deltaY / rect.height) * 4;
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
          translateY(${prefersReducedMotion ? 0 : -8}px)
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
      {/* MacBook Pro Frame */}
      <div className="relative mx-auto" style={{ width: "100%", maxWidth: "800px" }}>
        {/* Screen */}
        <div className="relative bg-zinc-900 rounded-t-2xl border-4 border-zinc-800 border-b-0 overflow-hidden"
             style={{ 
               aspectRatio: "16/10",
               boxShadow: "0 0 60px rgba(124, 58, 237, 0.15), inset 0 0 100px rgba(0, 0, 0, 0.5)"
             }}>
          {/* Screen Content */}
          <div className="w-full h-full overflow-hidden">
            {children}
          </div>
          
          {/* Screen Reflection */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
              opacity: 0.5
            }}
          />
          
          {/* Top Camera */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-700" />
        </div>
        
        {/* Base/Keyboard */}
        <div className="relative bg-zinc-900 rounded-b-2xl border-4 border-zinc-800 border-t-0"
             style={{ 
               height: "24px",
               boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(124, 58, 237, 0.1)"
             }}>
          {/* Trackpad */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-3 bg-zinc-800 rounded-md" />
          
          {/* Keyboard hint */}
          <div className="absolute inset-x-4 top-1 flex justify-center gap-1">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-1 bg-zinc-800 rounded-sm" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceMacBook;
