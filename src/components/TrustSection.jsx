import { motion } from "framer-motion";
import {
  ClipboardCheck,
  MessageCircle,
  CheckCircle2,
  Eye,
  LifeBuoy,
  Users,
  Lock,
  Cpu,
} from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

// Credibility-focused trust section — replaces traditional testimonials.
// No client names, companies, quotes, ratings, or invented statistics.
// This describes how we actually work, not claims about past results.
const TRUST_POINTS = [
  {
    icon: ClipboardCheck,
    title: "A clear development process",
    description:
      "Discovery, design, build, and launch — structured stages so you always know what's happening and what's next.",
  },
  {
    icon: MessageCircle,
    title: "Direct communication",
    description:
      "You talk to the people actually building your project — no account managers relaying messages in between.",
  },
  {
    icon: CheckCircle2,
    title: "Quality assurance, every time",
    description:
      "Every site is tested across devices and browsers before it ever reaches you — not after you find the issues.",
  },
  {
    icon: Eye,
    title: "Transparent delivery",
    description:
      "Clear scope and clear timelines from the start, agreed before work begins — no surprise costs mid-project.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support",
    description:
      "Launch isn't the finish line. We stay involved for fixes, updates, and changes as the business evolves.",
  },
  {
    icon: Users,
    title: "What to expect working with us",
    description:
      "A partner who treats your website and the automation behind it as one connected system, not a one-off deliverable.",
  },
  {
    icon: Lock,
    title: "Your information handled securely",
    description:
      "Project details, credentials, and customer data are handled carefully throughout — never treated as an afterthought.",
  },
  {
    icon: Cpu,
    title: "Built on modern technology",
    description:
      "No outdated tooling or legacy shortcuts — every site and system is built on current, well-supported technology.",
  },
];

function TrustSection() {
  return (
    <section
      id="trust"
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
            Working With PixelNest
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            What you can{" "}
            <span className="text-[var(--color-accent-violet)]">
              actually expect.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            We're a young studio — so instead of recycled quotes, here's
            exactly how we work and what we hold ourselves to on every
            project.
          </p>
        </motion.div>

        {/* Trust points */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TRUST_POINTS.map((item) => {
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

export default TrustSection;