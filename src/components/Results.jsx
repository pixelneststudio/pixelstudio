import { motion } from "framer-motion";
import { Target, Gauge, Inbox, Link2 } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

// Methodology-based proof — how we approach the work, not invented
// numbers. No fake client stats, no revenue claims, no testimonials.
const PROOF_POINTS = [
  {
    icon: Target,
    title: "Conversion-focused by design",
    description:
      "Every page is built around a clear next step for the visitor — not just information sitting on a screen.",
  },
  {
    icon: Gauge,
    title: "Built for speed",
    description:
      "Lean, modern code and optimized assets mean the site feels instant — on any device, any connection.",
  },
  {
    icon: Inbox,
    title: "Nothing falls through",
    description:
      "Enquiries are captured, qualified, and routed the moment they arrive — not discovered hours later.",
  },
  {
    icon: Link2,
    title: "One connected system",
    description:
      "The website, the AI agents, and the automation behind them are built to work together, not as separate pieces bolted on.",
  },
];

function Results() {
  return (
    <section
      id="results"
      className="border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]">
            How We Deliver Results
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            Not a promise.{" "}
            <span className="text-[var(--color-accent-violet)]">
              A methodology.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            Every engagement is built around the same four principles —
            regardless of industry or project size.
          </p>
        </motion.div>

        {/* Proof points */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PROOF_POINTS.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] p-6 transition-colors duration-300 hover:border-[var(--color-accent-violet)]/50"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--color-accent-violet)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--color-accent-violet)]/20" />

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet-hover)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-accent-violet)] group-hover:bg-[var(--color-accent-violet)]/20">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h3 className="text-base font-black tracking-tight text-[var(--color-text-primary)]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Results;