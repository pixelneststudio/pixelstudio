import { motion } from "framer-motion";
import {
  Dumbbell,
  Coffee,
  Stethoscope,
  Building2,
  Scale,
  Palette,
  Scissors,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

const INDUSTRIES = [
  {
    icon: Dumbbell,
    title: "Gyms",
    challenge: "Visitors browse plans but rarely commit to a membership online.",
    solution:
      "A booking-ready site with clear plans and an AI agent that follows up before interest cools off.",
    result: "More memberships with less manual follow-up.",
  },
  {
    icon: Coffee,
    title: "Cafes & Restaurants",
    challenge: "A great in-person experience doesn't always come across on the website.",
    solution:
      "A warm, reservation-ready site with automated confirmations so tables don't stay empty.",
    result: "More confirmed bookings with less manual work.",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    challenge: "Missed calls and slow replies mean patients book elsewhere.",
    solution:
      "An appointment agent that answers, books, and reminds — even outside working hours.",
    result: "Fewer missed appointments and happier patients.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    challenge: "Serious buyers get lost in a pile of unqualified enquiries.",
    solution:
      "A lead-qualification agent that separates real interest from browsing, automatically.",
    result: "Focus on serious buyers, not casual browsing.",
  },
  {
    icon: Scale,
    title: "Law Firms",
    challenge: "Prospective clients expect a fast, credible response — not a contact form black hole.",
    solution:
      "A trust-building site paired with automated intake, so no enquiry sits unanswered.",
    result: "More consultations booked, faster responses.",
  },
  {
    icon: Palette,
    title: "Creators & Agencies",
    challenge: "Managing enquiries, bookings, and follow-ups eats the time meant for the work itself.",
    solution:
      "A personal-brand site backed by automation that handles the admin in the background.",
    result: "More time for creative work, less admin.",
  },
  {
    icon: Scissors,
    title: "Salons",
    challenge: "Walk-ins and no-shows make it hard to plan a full schedule.",
    solution:
      "A booking-ready site with WhatsApp reminders that cut down on no-shows.",
    result: "Fewer empty slots and better schedule planning.",
  },
  {
    icon: GraduationCap,
    title: "Coaching Institutes",
    challenge: "Prospective students ask the same questions, but enrollments still lag.",
    solution:
      "An AI agent that answers course questions instantly and guides students toward enrolling.",
    result: "More enrollments with instant answers.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    challenge: "Abandoned carts and unanswered order questions quietly cost sales.",
    solution:
      "Automated follow-ups and an AI agent that answers order questions before customers give up.",
    result: "More recovered carts and fewer lost sales.",
  },
];

function Industries() {
  return (
    <section
      id="industries"
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
            Industries We Serve
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            Different businesses.{" "}
            <span className="text-[var(--color-accent-violet)]">
              The same attention to detail.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] p-6 transition-colors duration-300 hover:border-[var(--color-accent-violet)]/50"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--color-accent-violet)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--color-accent-violet)]/20" />

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet-hover)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-accent-violet)] group-hover:bg-[var(--color-accent-violet)]/20">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-black tracking-tight text-[var(--color-text-primary)]">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {industry.challenge}
                </p>

                <div className="mt-4 flex-1 border-t border-[var(--color-surface-border)] pt-4">
                  <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
                    <span className="font-semibold text-[var(--color-accent-violet-hover)]">
                      PixelNest:
                    </span>{" "}
                    {industry.solution}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;