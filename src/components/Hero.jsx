import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe, Sparkles, Zap, ArrowRight, Check } from "lucide-react";
import { fadeUp, staggerContainer, EASE, VIEWPORT_ONCE } from "../lib/motion";
import MagneticButton from "./ui/MagneticButton";

// Rows for the AI Workspace Preview — a real demonstration of the three
// pillars (Website / AI Agent / Automation), not a stat or a fake client.
const WORKSPACE_ROWS = [
  {
    icon: Globe,
    label: "Website Engine",
    detail: "Deployed · 60fps interactions",
    tone: "success",
  },
  {
    icon: Sparkles,
    label: "AI Agent",
    detail: "Qualifying a new inbound lead…",
    tone: "violet",
    animated: true,
  },
  {
    icon: Zap,
    label: "Automation",
    detail: "WhatsApp follow-up sent",
    tone: "cyan",
  },
];

const TONE_STYLES = {
  success: {
    icon: "text-[var(--color-success)] bg-[var(--color-success)]/10",
    dot: "bg-[var(--color-success)]",
  },
  violet: {
    icon: "text-[var(--color-accent-violet-hover)] bg-[var(--color-accent-violet)]/10",
    dot: "bg-[var(--color-accent-violet)]",
  },
  cyan: {
    icon: "text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/10",
    dot: "bg-[var(--color-accent-cyan)]",
  },
};

function AIWorkspacePreview() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className="relative w-full max-w-md rounded-[var(--radius-xl)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/80 p-1.5 shadow-[var(--shadow-lg)] backdrop-blur-md"
    >
      {/* Ambient glow behind the panel */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[var(--radius-xl)] bg-[var(--color-accent-violet)]/10 blur-3xl" />

      {/* Window chrome */}
      <div className="flex items-center justify-between rounded-t-[var(--radius-lg)] border-b border-[var(--color-surface-border)] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-success)]" />
          </span>
          Live workspace
        </div>
      </div>

      {/* Rows */}
      <motion.div
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="space-y-2 p-3"
      >
        {WORKSPACE_ROWS.map((row) => {
          const tone = TONE_STYLES[row.tone];
          const Icon = row.icon;

          return (
            <motion.div
              key={row.label}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 px-4 py-3.5 transition-colors duration-300 hover:border-[var(--color-accent-violet)]/40"
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] ${tone.icon}`}>
                <Icon size={16} strokeWidth={2.25} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {row.label}
                </p>
                <p className="mt-0.5 truncate text-xs text-[var(--color-text-secondary)]">
                  {row.detail}
                  {row.animated && (
                    <span className="ml-1 inline-flex gap-0.5 align-middle">
                      <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--color-accent-violet-hover)] [animation-delay:0ms]" />
                      <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--color-accent-violet-hover)] [animation-delay:150ms]" />
                      <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--color-accent-violet-hover)] [animation-delay:300ms]" />
                    </span>
                  )}
                </p>
              </div>

              {!row.animated && (
                <Check size={16} className="shrink-0 text-[var(--color-text-muted)]" />
              )}
              {row.animated && (
                <span className={`h-2 w-2 shrink-0 rounded-full ${tone.dot}`} />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <p className="border-t border-[var(--color-surface-border)] px-5 py-3 text-[11px] leading-relaxed text-[var(--color-text-muted)]">
        A simplified view of what runs behind every PixelNest site.
      </p>
    </motion.div>
  );
}

function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Defer animations until after initial paint
    const request = requestIdleCallback(() => {
      setShouldAnimate(true);
    });

    return () => cancelIdleCallback(request);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--color-surface-base)] px-6 pb-20 pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[var(--color-accent-violet)]/10 blur-[80px]" />
      <div className="absolute -left-32 bottom-1/4 h-72 w-72 rounded-full bg-[var(--color-accent-cyan)]/5 blur-[60px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        {/* Left column — Concept A typography, Concept B messaging */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-violet)]"
          >
            <span className="h-2 w-2 animate-ping rounded-full bg-[var(--color-accent-violet)]" />
            Websites · AI Agents · Automation
          </motion.div>

          <div className="w-full overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={shouldAnimate ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 0.8, ease: EASE.standard }}
              className="select-none text-3xl font-black uppercase leading-[0.92] tracking-tighter text-[var(--color-text-primary)] sm:text-4xl md:text-[5.5rem] lg:text-[6rem]"
            >
              PREMIUM WEBSITES.
              <br />
              <span className="text-[var(--color-surface-base)] transition-all duration-300 [-webkit-text-stroke:2px_var(--color-text-primary)] hover:text-[var(--color-accent-violet)] hover:[-webkit-text-stroke:2px_var(--color-accent-violet-hover)]">
                AI AGENTS.
              </span>
              <br />
              AUTOMATED GROWTH.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 max-w-xl text-lg font-medium leading-relaxed text-[var(--color-text-secondary)]"
          >
            We design premium websites, then build the AI agents and automation
            that run behind them — so your business responds, qualifies, and
            follows up without you lifting a finger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
          >
            <MagneticButton
              as="a"
              href="#contact"
              className="group flex items-center justify-center gap-3 rounded-[var(--radius-pill)] bg-[var(--color-accent-violet)] px-9 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[var(--shadow-sm)] transition-colors duration-300 hover:bg-[var(--color-accent-violet-hover)]"
            >
              Book a Strategy Call
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>

            <a
              href="#projects"
              className="group flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
            >
              See Live Demos
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right column — Concept C interaction: AI Workspace Preview */}
        <div className="flex justify-center lg:justify-end">
          <AIWorkspacePreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;