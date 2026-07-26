import { motion } from "framer-motion";
import { Users, MessageCircle, Mail, Bot, CheckCheck } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

// ---- Mini workflow previews (pure CSS/SVG, no fake dashboards) ----

function CRMPreview() {
  const stages = ["New", "Contacted", "Won"];
  return (
    <div className="flex h-28 flex-col justify-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 p-4">
      <div className="flex items-center justify-between">
        {stages.map((stage, i) => (
          <div key={stage} className="flex flex-1 items-center">
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[9px] font-bold ${
                i < 2
                  ? "border-[var(--color-accent-violet)] bg-[var(--color-accent-violet)]/20 text-[var(--color-accent-violet-hover)]"
                  : "border-[var(--color-surface-border)] text-[var(--color-text-muted)]"
              }`}
            >
              {i + 1}
            </motion.span>
            {i < stages.length - 1 && (
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.4, delay: i * 0.2 + 0.15 }}
                className="mx-1 h-px flex-1 origin-left bg-[var(--color-surface-border)]"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[9px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
        {stages.map((stage) => (
          <span key={stage}>{stage}</span>
        ))}
      </div>
    </div>
  );
}

function WhatsAppPreview() {
  return (
    <div className="flex h-28 flex-col justify-end gap-2 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 p-3">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.4 }}
        className="max-w-[75%] self-start rounded-[var(--radius-sm)] bg-[var(--color-surface-border)] px-3 py-1.5 text-[11px] text-[var(--color-text-secondary)]"
      >
        Is the table for 2 still free at 8?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex max-w-[80%] items-center gap-1.5 self-end rounded-[var(--radius-sm)] bg-[var(--color-accent-cyan)]/15 px-3 py-1.5 text-[11px] text-[var(--color-text-primary)]"
      >
        Confirmed for 8:00 PM.
        <CheckCheck size={13} className="shrink-0 text-[var(--color-accent-cyan)]" />
      </motion.div>
    </div>
  );
}

function EmailPreview() {
  const rows = [
    { subject: "Welcome — next steps", sent: false },
    { subject: "Your quote is ready", sent: true },
    { subject: "Following up on your visit", sent: false },
  ];

  return (
    <div className="flex h-28 flex-col justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 p-3">
      {rows.map((row, i) => (
        <motion.div
          key={row.subject}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.35, delay: i * 0.15 }}
          className="flex items-center justify-between gap-2 rounded-[var(--radius-sm)] bg-[var(--color-surface-raised)] px-2.5 py-1.5"
        >
          <span className="truncate text-[10px] text-[var(--color-text-secondary)]">
            {row.subject}
          </span>
          {row.sent && (
            <span className="shrink-0 rounded-[var(--radius-pill)] bg-[var(--color-success)]/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[var(--color-success)]">
              Sent
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

const PILLARS = [
  {
    key: "crm",
    icon: Users,
    title: "CRM Automation",
    outcome:
      "Every enquiry lands in one place — organized, tracked, and never lost in an inbox.",
    idealFor: "Businesses juggling enquiries across multiple channels.",
    Preview: CRMPreview,
    integrations: "n8n • HubSpot • OpenAI",
  },
  {
    key: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp Automation",
    outcome:
      "Instant replies and follow-ups on the channel your customers already use.",
    idealFor: "Restaurants, cafes, and service businesses booked over chat.",
    Preview: WhatsAppPreview,
    integrations: "WhatsApp Cloud API • OpenAI",
  },
  {
    key: "email",
    icon: Mail,
    title: "Email Automation",
    outcome:
      "The right email, sent automatically, at the right moment — every time.",
    idealFor: "Businesses with a multi-step follow-up or onboarding flow.",
    Preview: EmailPreview,
    integrations: "Resend • OpenAI",
  },
  {
    key: "pixelnest-ai",
    icon: Bot,
    title: "AI Agents",
    outcome:
      "A custom AI assistant trained for your business that answers questions, captures leads, and helps customers instantly.",
    idealFor: "Businesses that want an AI assistant available all day.",
    Preview: CRMPreview,
    integrations: "OpenAI • Pinecone • Vercel AI SDK",
  },
];

function BusinessAutomation() {
  return (
    <section
      id="automation"
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
            Business Automation
          </p>

          <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-5xl">
            The parts of the business that run{" "}
            <span className="text-[var(--color-accent-violet)]">
              without anyone watching.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            Four systems that quietly keep enquiries moving, whichever
            channel they come in on.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const Preview = pillar.Preview;

            return (
              <motion.div
                key={pillar.key}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)] p-6 transition-colors duration-300 hover:border-[var(--color-accent-violet)]/50"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--color-accent-violet)]/0 blur-3xl transition-all duration-500 group-hover:bg-[var(--color-accent-violet)]/20" />

                {/* Preview */}
                <div className="mb-5">
                  <Preview />
                </div>

                {/* Icon */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet-hover)] transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-accent-violet)] group-hover:bg-[var(--color-accent-violet)]/20">
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-black tracking-tight text-[var(--color-text-primary)]">
                  {pillar.title}
                </h3>

                {/* Outcome */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {pillar.outcome}
                </p>

                {/* Ideal for */}
                <p className="mt-4 border-t border-[var(--color-surface-border)] pt-4 text-xs leading-relaxed text-[var(--color-text-muted)]">
                  <span className="font-semibold text-[var(--color-accent-violet-hover)]">
                    Ideal for:
                  </span>{" "}
                  {pillar.idealFor}
                </p>

                {/* Integrations badge */}
                <div className="mt-3 text-[10px] text-[var(--color-text-muted)]">
                  <span className="font-semibold">Common integrations:</span>{" "}
                  {pillar.integrations}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default BusinessAutomation;