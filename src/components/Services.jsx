import { motion } from "framer-motion";
import { Globe, Bot, Workflow, Check, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

// ---- Mini visual previews (pure CSS/SVG, no fake screenshots) ----

function WebsitePreview() {
  return (
    <div className="flex h-28 flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 p-3">
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
      </div>
      <motion.div
        initial={{ width: "20%" }}
        whileInView={{ width: "45%" }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="h-2.5 rounded-full bg-[var(--color-accent-violet)]/50"
      />
      <div className="h-2 w-4/5 rounded-full bg-[var(--color-surface-border)]" />
      <div className="h-2 w-3/5 rounded-full bg-[var(--color-surface-border)]" />
      <div className="mt-auto h-6 w-1/3 rounded-[var(--radius-sm)] bg-[var(--color-accent-violet)]/30" />
    </div>
  );
}

function ConversationPreview() {
  return (
    <div className="flex h-28 flex-col justify-end gap-2 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 p-3">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.4 }}
        className="max-w-[70%] self-start rounded-[var(--radius-sm)] bg-[var(--color-surface-border)] px-3 py-1.5 text-[11px] text-[var(--color-text-secondary)]"
      >
        Do you have Sunday slots?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex max-w-[75%] items-center gap-1.5 self-end rounded-[var(--radius-sm)] bg-[var(--color-accent-violet)]/25 px-3 py-1.5 text-[11px] text-[var(--color-text-primary)]"
      >
        Yes — 10am works.
        <span className="flex gap-0.5">
          <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--color-accent-violet-hover)] [animation-delay:0ms]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--color-accent-violet-hover)] [animation-delay:150ms]" />
        </span>
      </motion.div>
    </div>
  );
}

function WorkflowPreview() {
  const nodes = ["Enquiry", "Qualify", "Follow-up"];

  return (
    <div className="flex h-28 items-center justify-between gap-1 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 p-4">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-1">
          <div className="flex flex-col items-center gap-1.5">
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-accent-cyan)]/40 bg-[var(--color-accent-cyan)]/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-cyan)]" />
            </motion.span>
            <span className="text-[9px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              {node}
            </span>
          </div>
          {i < nodes.length - 1 && (
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.4, delay: i * 0.2 + 0.15 }}
              className="mb-4 h-px w-6 origin-left bg-[var(--color-surface-border)]"
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Three pillars — this is the business model, not a service list.
// Capabilities are stated as outcomes, never technologies.
const PILLARS = [
  {
    icon: Globe,
    title: "Premium Websites",
    outcome:
      "A website built to earn trust and turn visitors into enquiries — not just exist online.",
    capabilities: [
      "High-converting websites",
      "Mobile-first design",
      "Fast, modern experience",
      "SEO-ready foundations",
      "Fully custom — never templated",
    ],
    idealFor: "Founders and businesses who need to be taken seriously online.",
    cta: "Learn More",
    Preview: WebsitePreview,
  },
  {
    icon: Bot,
    title: "AI Agents",
    outcome:
      "A team member that never sleeps — answering, qualifying, and guiding customers the moment they reach out.",
    capabilities: [
      "AI customer support",
      "Instant lead qualification",
      "24/7 enquiry handling",
      "Natural, on-brand conversation",
      "Handoff to a human when needed",
    ],
    idealFor: "Businesses that get repeat enquiries and can't always reply fast.",
    cta: "Learn More",
    Preview: ConversationPreview,
  },
  {
    icon: Workflow,
    title: "Business Automation",
    outcome:
      "The repetitive parts of running a business, handled automatically in the background.",
    capabilities: [
      "Automated lead follow-up",
      "CRM integration",
      "Appointment booking",
      "WhatsApp & email automation",
      "Workflows across your existing tools",
    ],
    idealFor: "Businesses ready to stop doing repetitive tasks by hand.",
    cta: "Learn More",
    Preview: WorkflowPreview,
  },
];

function Services() {
  return (
    <section
      id="services"
      className="border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]">
              How We Work
            </p>

            <h2 className="text-4xl font-black uppercase tracking-tighter text-[var(--color-text-primary)] md:text-6xl">
              Three pillars.{" "}
              <span className="text-[var(--color-accent-violet)]">
                One business, running better.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm font-light leading-relaxed text-[var(--color-text-secondary)]">
            Every PixelNest engagement draws from the same three
            capabilities — used together or on their own, depending on
            what the business actually needs.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-6 md:grid-cols-3 md:gap-8"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const Preview = pillar.Preview;

            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] p-8 transition-colors duration-300 hover:border-[var(--color-accent-violet)]/50"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-accent-violet)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--color-accent-violet)]/20" />

                {/* Visual preview */}
                <div className="mb-6">
                  <Preview />
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet-hover)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-accent-violet)] group-hover:bg-[var(--color-accent-violet)]/20">
                  <Icon size={26} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black tracking-tight text-[var(--color-text-primary)]">
                  {pillar.title}
                </h3>

                {/* Outcome */}
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {pillar.outcome}
                </p>

                {/* Capabilities */}
                <ul className="mt-6 flex-1 space-y-2.5">
                  {pillar.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:text-[var(--color-text-primary)]"
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-[var(--color-accent-cyan)]"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <p className="mt-6 border-t border-[var(--color-surface-border)] pt-5 text-xs leading-relaxed text-[var(--color-text-muted)]">
                  <span className="font-semibold text-[var(--color-accent-violet-hover)]">
                    Ideal for:
                  </span>{" "}
                  {pillar.idealFor}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-violet-hover)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
                >
                  {pillar.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;