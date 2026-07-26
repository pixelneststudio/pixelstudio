import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../../lib/motion";

/**
 * Shared shell for standalone pages (Privacy, Terms, Sitemap) so they
 * read as part of PixelNest Studio rather than a plain legal document.
 * Same hero pattern, same glass-card sections, same tokens/motion as
 * the rest of the site.
 */
export function LegalPageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] px-6 pb-20 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[var(--color-accent-violet)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[var(--color-accent-cyan)]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Back to Home
        </motion.a>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl font-black tracking-tight text-[var(--color-text-primary)] md:text-7xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 p-8 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--color-accent-violet)]/30 md:p-10"
    >
      <h2 className="text-2xl font-black tracking-tight text-[var(--color-text-primary)] md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-relaxed text-[var(--color-text-secondary)]">
        {children}
      </div>
    </motion.div>
  );
}

export function LegalPageBody({ children }) {
  return (
    <section className="border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="space-y-6"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}