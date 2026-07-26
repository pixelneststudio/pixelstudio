import { motion } from "framer-motion";
import { ArrowUpRight, ChevronUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Tech Stack", href: "#tech" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES_LIST = [
  "Premium Business Websites",
  "High-Converting Landing Pages",
  "AI Agents & Lead Qualification",
  "Business Automation Systems",
  "Website Redesign & Modernization",
  "React / Next.js Development",
];

const TECH_STACK_LIST = [
  "React 19",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Framer Motion",
  "OpenAI API",
  "n8n Automation",
  "Supabase",
];

function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = (event) => {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="border-t border-[var(--color-surface-border)] bg-[var(--color-surface-base)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-16 flex flex-col justify-between gap-10 border-b border-[var(--color-surface-border)] pb-16 lg:flex-row lg:items-center"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-accent-violet)]">
              Ready to build?
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight text-[var(--color-text-primary)] md:text-6xl">
              Let's build
              <br />
              something
              <span className="text-[var(--color-accent-violet)]"> amazing.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-[var(--color-text-secondary)]">
              We design premium websites, AI agents, and business automation that help modern companies generate more leads, save time, and scale faster.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex w-fit items-center gap-3 rounded-[var(--radius-pill)] bg-[var(--color-accent-violet)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[var(--shadow-sm)] transition-colors duration-300 hover:bg-[var(--color-accent-violet-hover)]"
          >
            Start Your Project
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--color-text-primary)]">
              PixelNest
              <span className="text-[var(--color-accent-violet)]"> Studio.</span>
            </h3>

            <p className="mt-5 leading-relaxed text-[var(--color-text-secondary)]">
              We design premium websites, AI agents, and business automation that help modern companies generate more leads, save time, and scale faster.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
              Navigation
            </h4>

            <div className="space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-violet-hover)] hover:translate-x-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
              Services
            </h4>

            <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              {SERVICES_LIST.map((service) => (
                <p key={service} className="hover:text-[var(--color-text-primary)] transition-colors duration-300 cursor-default">
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
              Tech Stack
            </h4>

            <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              {TECH_STACK_LIST.map((tech) => (
                <p key={tech} className="hover:text-[var(--color-accent-violet-hover)] transition-colors duration-300 cursor-default">
                  {tech}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Connect & Legal */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-16 grid gap-12 border-t border-[var(--color-surface-border)] pt-12 md:grid-cols-2"
        >
          {/* Connect */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
              Connect
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:pixelneststudio.work@gmail.com"
                className="group flex items-center gap-3 text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-violet-hover)]"
              >
                <Mail size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110" />
                Email
              </a>

              <a
                href="https://github.com/pixelneststudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-violet-hover)]"
              >
                <FaGithub size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/aryan-hn-080752424"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-violet-hover)]"
              >
                <FaLinkedin size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110" />
                LinkedIn
              </a>
              {/* TODO: Update LinkedIn URL to actual company page */}
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeUp}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
              Legal
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href="/privacy-policy"
                className="block text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-violet-hover)] hover:translate-x-1"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="block text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-violet-hover)] hover:translate-x-1"
              >
                Terms of Service
              </a>
              {/* <a
                href="/sitemap"
                className="block text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-accent-violet-hover)] hover:translate-x-1"
              >
                Sitemap
              </a> */}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[var(--color-surface-border)] pt-8 md:flex-row"
        >
          <p className="text-sm text-[var(--color-text-muted)]">
            © 2026 PixelNest Studio. Websites, AI Automation & Digital Experiences.
          </p>

          <a
            href="#"
            onClick={handleBackToTop}
            className="flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-surface-border)] px-5 py-2 text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors duration-300 hover:border-[var(--color-accent-violet)] hover:text-[var(--color-text-primary)]"
          >
            Back to Top
            <ChevronUp size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;