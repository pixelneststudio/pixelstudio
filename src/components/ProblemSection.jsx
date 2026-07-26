import { motion } from "framer-motion";
import { Target, Clock, Globe2, Inbox, RefreshCw, ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

// Real, common problems — presented respectfully, each paired with what
// PixelNest actually does about it. No blame, no fear marketing.
const PROBLEMS = [
  {
    icon: Target,
    title: "Visitors don't turn into customers",
    description:
      "Traffic without conversions is just visits. Most business websites present information but never guide people toward an actual next step.",
    solution:
      "We design every page around a clear action — not just information.",
  },
  {
    icon: Clock,
    title: "New enquiries wait longer than they should",
    description:
      "Between running the business and everything else, it's easy for a message to sit unanswered for hours, sometimes days.",
    solution:
      "Our AI agents respond and follow up within minutes, automatically.",
  },
  {
    icon: Globe2,
    title: "The website doesn't reflect the business behind it",
    description:
      "A business can be excellent in person and still look generic or dated online — and that gap costs trust before a conversation even starts.",
    solution:
      "We build a site that actually matches the quality of the work.",
  },
  {
    icon: Inbox,
    title: "Interested people fall through the cracks",
    description:
      "Without a system to capture and organize enquiries, some leads simply never get followed up — not from lack of care, just lack of process.",
    solution:
      "Every enquiry is captured, tracked, and routed automatically.",
  },
  {
    icon: RefreshCw,
    title: "The same manual work, every single day",
    description:
      "Answering the same questions, sending the same messages, updating the same spreadsheets — hours spent on work that doesn't need a human.",
    solution:
      "We automate the repetitive parts, so that time goes back to the business.",
  },
];

function ProblemSection() {
  return (
    <section
      id="problems"
      className="border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]">
            Common Challenges We Help Solve
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            Most businesses are doing good work.
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent-violet)] via-[var(--color-accent-fuchsia)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
              Some of it just needs a better system behind it.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            These are the patterns we see most often — none of them are about
            effort or care. They're usually about the website and the systems
            behind it not keeping up.
          </p>
        </motion.div>

        {/* Problem → Solution rows */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="divide-y divide-[var(--color-surface-border)] border-y border-[var(--color-surface-border)]"
        >
          {PROBLEMS.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group grid gap-6 py-10 transition-colors duration-300 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] text-[var(--color-accent-violet-hover)] transition-colors duration-300 group-hover:border-[var(--color-accent-violet)]/50">
                  <Icon size={22} strokeWidth={2} />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-[var(--color-text-primary)] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 p-5 transition-colors duration-300 group-hover:border-[var(--color-accent-violet)]/30">
                  <ArrowUpRight
                    size={16}
                    className="mt-0.5 shrink-0 text-[var(--color-accent-cyan)]"
                  />
                  <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                    <span className="font-semibold text-[var(--color-accent-violet-hover)]">
                      PixelNest:
                    </span>{" "}
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            That's why every{" "}
            <span className="font-bold text-[var(--color-text-primary)]">
              PixelNest Studio
            </span>{" "}
            engagement covers the website and the systems running behind it —
            together, not separately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProblemSection;
