import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, VIEWPORT_ONCE } from "../lib/motion";

const FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is unique. Pricing depends on the scope, features, integrations, and timeline. Share your requirements and we'll provide a transparent custom quote with no hidden costs.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are delivered within 1–3 weeks. Larger projects such as dashboards or SaaS platforms may require additional development time.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. PixelNest Studio collaborates remotely with clients worldwide using Google Meet, Zoom, WhatsApp and email for seamless communication.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website is designed mobile-first and optimized for desktops, tablets and smartphones for a consistent experience.",
  },
  {
    question: "Do I own the website after completion?",
    answer:
      "Yes. After the project is completed and final payment is received, the source code and project assets belong entirely to you.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Definitely. We modernize outdated websites with better UI, faster performance, improved SEO and conversion-focused user experiences.",
  },
];

function FAQItem({ item, index, open, onClick }) {
  const buttonId = `faq-trigger-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <motion.div
      layout
      whileHover={{ x: 6 }}
      className={`group relative overflow-hidden rounded-[var(--radius-lg)] border transition-all duration-300 ${
        open
          ? "border-[var(--color-accent-violet)]/50 bg-[var(--color-surface-raised)]"
          : "border-[var(--color-surface-border)] bg-[var(--color-surface-base)] hover:border-[var(--color-accent-violet)]/30"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-violet)]/0 via-[var(--color-accent-violet)]/5 to-[var(--color-accent-cyan)]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Left Accent */}
      <div
        className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 ${
          open ? "bg-[var(--color-accent-violet)]" : "bg-transparent"
        }`}
      />

      <button
        id={buttonId}
        onClick={onClick}
        aria-expanded={open}
        aria-controls={panelId}
        className="relative flex w-full items-center justify-between gap-8 px-8 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-accent-violet-hover)]"
      >
        <h3
          className={`text-lg font-bold transition-colors duration-300 ${
            open ? "text-[var(--color-accent-violet-hover)]" : "text-[var(--color-text-primary)]"
          }`}
        >
          {item.question}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "border-[var(--color-accent-violet)] bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet-hover)]"
              : "border-[var(--color-surface-border)] text-[var(--color-text-muted)] group-hover:border-[var(--color-accent-violet)] group-hover:text-[var(--color-accent-violet-hover)]"
          }`}
        >
          <ChevronDown size={18} aria-hidden="true" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8">
              <p className="max-w-3xl leading-8 text-[var(--color-text-secondary)]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--color-accent-violet)]/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl font-black uppercase tracking-tight text-[var(--color-text-primary)] md:text-6xl">
            Questions
            <br />
            <span className="bg-gradient-to-r from-[var(--color-accent-violet)] via-[var(--color-accent-fuchsia)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
              Answered.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Everything you need to know before working with PixelNest Studio.
            Still have questions? We'd love to hear about your project.
          </p>
        </motion.div>

        <div className="space-y-5">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              open={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;