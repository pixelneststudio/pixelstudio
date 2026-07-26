import { motion } from "framer-motion";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business — goals, customers, and where a website, AI agent, or automation would actually move the needle.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map out the exact combination of website, AI agents, and automation your business needs — not everything, just what's useful.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Your website is built with clean, modern code — and any AI agents or automation are built and connected alongside it, not bolted on after.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Everything is tested across devices and browsers, then launched together as one working system.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "After launch, we stay involved — refining performance, adjusting automations, and supporting changes as the business grows.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]">
            Our Process
          </p>

          <h2 className="text-4xl font-black text-[var(--color-text-primary)] md:text-6xl">
            From Idea
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent-violet)] via-[var(--color-accent-fuchsia)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
              To Launch.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            A simple, transparent process designed to keep projects moving
            smoothly — from the first conversation to a fully working system.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="space-y-8"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="group flex flex-col gap-6 border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] p-8 transition-all duration-300 hover:border-[var(--color-accent-violet)]/50 md:flex-row md:items-center"
            >
              <div className="text-5xl font-black text-[var(--color-accent-violet)]">
                {step.number}
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-black text-[var(--color-text-primary)]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Process;