import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";
import MagneticButton from "./ui/MagneticButton";

const STEPS = [
  {
    title: "Discovery",
    description: "We understand your business.",
  },
  {
    title: "Strategy",
    description: "We recommend the best solution.",
  },
  {
    title: "Build",
    description: "Website, AI and automation.",
  },
  {
    title: "Launch & Support",
    description: "Deployment and improvements.",
  },
];

function ProjectInvestment() {
  return (
    <section
      id="investment"
      className="border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]">
            Project Investment
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            Every project is different.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            We don't use fixed packages because every business has different
            goals, workflows and requirements.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] p-6 transition-colors duration-300 hover:border-[var(--color-accent-violet)]/50"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--color-accent-violet)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--color-accent-violet)]/20" />

              {/* Step Number */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet-hover)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-accent-violet)] group-hover:bg-[var(--color-accent-violet)]/20">
                <span className="text-lg font-black">{index + 1}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-black tracking-tight text-[var(--color-text-primary)]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg font-semibold text-[var(--color-text-primary)]">
            Let's discuss your project.
          </p>
          <MagneticButton
            as="a"
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-[var(--radius-pill)] bg-[var(--color-accent-violet)] px-9 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-[var(--shadow-sm)] transition-colors duration-300 hover:bg-[var(--color-accent-violet-hover)]"
          >
            Start Project
            <ArrowRight size={18} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectInvestment;