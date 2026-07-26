import { motion } from "framer-motion";
import { PenTool, Layers, MessageSquare, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

// Four differentiators — trust, quality, and process only.
// No numbers, no comparisons, nothing unverifiable.
const DIFFERENTIATORS = [
  {
    icon: PenTool,
    title: "Built, not assembled",
    description:
      "Every site is custom-built for the business it's for — no page builders, no recycled templates wearing a new logo.",
  },
  {
    icon: Layers,
    title: "Website and automation, designed together",
    description:
      "The site and the AI agents behind it are planned as one system from day one, not bolted together after launch.",
  },
  {
    icon: MessageSquare,
    title: "Direct access, no hand-offs",
    description:
      "You talk to the people actually building your project — no account managers relaying messages back and forth.",
  },
  {
    icon: ShieldCheck,
    title: "Built to be maintained",
    description:
      "Launch isn't the finish line. We stay involved for performance, fixes, and changes as the business evolves.",
  },
];

function WhyChoosePixelNest() {
  return (
    <section
      id="why-us"
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
            Why PixelNest
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            Small team.
            <span className="text-[var(--color-accent-violet)]">
              {" "}Exceptional work.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            We take on fewer projects so we can build better ones. Every decision is intentional—from design and development to performance and user experience.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {DIFFERENTIATORS.map((item) => {
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

export default WhyChoosePixelNest;
