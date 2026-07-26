import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Check,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  timeline: "",
  message: "",
};

// Trust-focused microcopy — what to expect, not marketing feature bullets.
const TRUST_POINTS = [
  "Direct communication, no account managers",
  "Clear scope agreed before any work begins",
  "A reply from us within 24 hours",
  "No pressure, no obligation to proceed",
];

function validateForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.projectType.trim()) {
    errors.projectType = "Please select a project type.";
  }

  if (!values.timeline.trim()) {
    errors.timeline = "Please select a timeline.";
  }

  if (!values.message.trim()) {
    errors.message = "Project brief is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Brief must be at least 10 characters.";
  }

  return errors;
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // status: "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const isSubmitting = status === "submitting";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      // FormData automatically picks up every named field in the form,
      // including the hidden access_key and honeypot inputs below.
      const formData = new FormData(e.target);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setErrors({});

        // Hold the "Sent Successfully" button state briefly before
        // swapping to the full confirmation panel.
        setTimeout(() => {
          setForm(INITIAL_FORM);
          setIsSubmitted(true);
          setStatus("idle");
        }, 1100);

        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error(
          result.message || "Submission failed. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setServerError(
        error?.message ||
          "Something went wrong. Please check your connection and try again."
      );
    }
  };

  const buttonLabel =
    status === "submitting"
      ? "Sending Inquiry..."
      : status === "success"
      ? "Sent Successfully ✓"
      : status === "error"
      ? "Retry Submission"
      : "Send Inquiry";

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent-violet)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-[var(--color-accent-cyan)]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
        {/* Left: Content, trust points, direct line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex flex-col justify-between lg:col-span-5"
        >
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Sparkles size={15} className="text-[var(--color-accent-violet)]" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-accent-violet)]">
                Get In Touch
              </p>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[1.1] tracking-tighter text-[var(--color-text-primary)] md:text-6xl">
              Let&apos;s build <br />
              <span className="bg-gradient-to-br from-[var(--color-accent-violet)] via-[var(--color-accent-fuchsia)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
                your next
              </span>
              <br />
              website.
            </h2>

            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-[var(--color-text-secondary)]">
              Whether you're launching a startup, growing your business, or
              redesigning an existing website, we'd love to hear about your
              project.
            </p>

            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="mt-12 space-y-4"
            >
              {TRUST_POINTS.map((point) => (
                <motion.div
                  key={point}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent-violet)]/20 bg-[var(--color-accent-violet)]/10">
                    <Check size={12} className="text-[var(--color-accent-violet-hover)]" />
                  </div>
                  <span className="text-sm font-medium tracking-wide text-[var(--color-text-secondary)]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="mt-12 flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 p-5 backdrop-blur-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]">
                <Clock className="h-5 w-5 text-[var(--color-accent-cyan)]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  Our Reply Commitment
                </p>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Within 24 Hours
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 hidden space-y-3 lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
              Direct Line
            </p>
            <a
              href="mailto:pixelneststudio.work@gmail.com"
              className="group flex w-max items-center gap-3 text-lg font-bold text-[var(--color-text-primary)] transition-all duration-300 hover:text-[var(--color-accent-violet-hover)]"
            >
              pixelneststudio.work@gmail.com
              <span className="h-[2px] w-0 bg-[var(--color-accent-violet-hover)] transition-all duration-300 group-hover:w-4" />
            </a>
          </div>
        </motion.div>

        {/* Right: Form & success state */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="relative lg:col-span-7"
        >
          <div className="relative rounded-[var(--radius-xl)] border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/80 p-8 shadow-[var(--shadow-lg)] backdrop-blur-xl md:p-12">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex min-h-[500px] flex-col items-center justify-center text-center"
                >
                  <div className="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent-violet)]/20 to-[var(--color-accent-cyan)]/20 shadow-[var(--shadow-glow-violet)]">
                    <div className="absolute inset-0 animate-ping rounded-full border border-[var(--color-accent-violet)]/30 duration-1000" />
                    <CheckCircle2 size={56} className="text-[var(--color-accent-violet-hover)]" />
                  </div>
                  <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-[var(--color-text-primary)] md:text-4xl">
                    Project Inquiry Received
                  </h3>
                  <p className="max-w-sm text-base leading-relaxed text-[var(--color-text-secondary)]">
                    Thank you for contacting PixelNest Studio.
                    <br />
                    We'll review your project and reply within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {/* Web3Forms access key — required for delivery */}
                  <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                  {/* Custom email subject line */}
                  <input type="hidden" name="subject" value="New Project Inquiry — PixelNest Studio" />
                  {/* Honeypot spam trap — must stay empty & hidden from real users */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="group relative">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] transition-colors duration-300 group-focus-within:text-[var(--color-accent-violet-hover)]"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-[var(--radius-md)] border bg-[var(--color-surface-base)]/60 px-5 py-4 text-sm text-[var(--color-text-primary)] shadow-inner transition-all duration-300 focus:outline-none disabled:opacity-50 ${
                          errors.name
                            ? "border-[var(--color-danger)]/70 focus:border-[var(--color-danger)] focus:ring-4 focus:ring-[var(--color-danger)]/10"
                            : "border-[var(--color-surface-border)] hover:border-[var(--color-text-muted)] focus:border-[var(--color-accent-violet)] focus:ring-4 focus:ring-[var(--color-accent-violet)]/10"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="absolute -bottom-5 left-0 text-[10px] text-[var(--color-danger)]">{errors.name}</p>
                      )}
                    </div>

                    <div className="group relative">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] transition-colors duration-300 group-focus-within:text-[var(--color-accent-violet-hover)]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full rounded-[var(--radius-md)] border bg-[var(--color-surface-base)]/60 px-5 py-4 text-sm text-[var(--color-text-primary)] shadow-inner transition-all duration-300 focus:outline-none disabled:opacity-50 ${
                          errors.email
                            ? "border-[var(--color-danger)]/70 focus:border-[var(--color-danger)] focus:ring-4 focus:ring-[var(--color-danger)]/10"
                            : "border-[var(--color-surface-border)] hover:border-[var(--color-text-muted)] focus:border-[var(--color-accent-violet)] focus:ring-4 focus:ring-[var(--color-accent-violet)]/10"
                        }`}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="absolute -bottom-5 left-0 text-[10px] text-[var(--color-danger)]">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="group relative pt-2">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] transition-colors duration-300 group-focus-within:text-[var(--color-accent-violet-hover)]"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/60 px-5 py-4 text-sm text-[var(--color-text-primary)] shadow-inner transition-all duration-300 hover:border-[var(--color-text-muted)] focus:border-[var(--color-accent-violet)] focus:outline-none focus:ring-4 focus:ring-[var(--color-accent-violet)]/10 disabled:opacity-50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
                    <div className="group relative">
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] transition-colors duration-300 group-focus-within:text-[var(--color-accent-violet-hover)]"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full appearance-none rounded-[var(--radius-md)] border bg-[var(--color-surface-base)]/60 px-5 py-4 text-sm text-[var(--color-text-primary)] shadow-inner transition-all duration-300 focus:outline-none disabled:opacity-50 ${
                          errors.projectType
                            ? "border-[var(--color-danger)]/70 focus:border-[var(--color-danger)] focus:ring-4 focus:ring-[var(--color-danger)]/10"
                            : "border-[var(--color-surface-border)] hover:border-[var(--color-text-muted)] focus:border-[var(--color-accent-violet)] focus:ring-4 focus:ring-[var(--color-accent-violet)]/10"
                        }`}
                      >
                        <option value="" disabled>Select a project type</option>
                        <option value="Business Website">Business Website</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="Portfolio Website">Portfolio Website</option>
                        <option value="Gym Website">Gym / Fitness Website</option>
                        <option value="Restaurant Website">Restaurant / Cafe Website</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Custom Web Application">Custom Web Application</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                      <div className="pointer-events-none absolute bottom-0 right-5 top-8 flex items-center text-[var(--color-text-muted)]">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                      {errors.projectType && (
                        <p className="absolute -bottom-5 left-0 text-[10px] text-[var(--color-danger)]">{errors.projectType}</p>
                      )}
                    </div>

                    <div className="group relative">
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] transition-colors duration-300 group-focus-within:text-[var(--color-accent-violet-hover)]"
                      >
                        Expected Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={form.timeline}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full appearance-none rounded-[var(--radius-md)] border bg-[var(--color-surface-base)]/60 px-5 py-4 text-sm text-[var(--color-text-primary)] shadow-inner transition-all duration-300 focus:outline-none disabled:opacity-50 ${
                          errors.timeline
                            ? "border-[var(--color-danger)]/70 focus:border-[var(--color-danger)] focus:ring-4 focus:ring-[var(--color-danger)]/10"
                            : "border-[var(--color-surface-border)] hover:border-[var(--color-text-muted)] focus:border-[var(--color-accent-violet)] focus:ring-4 focus:ring-[var(--color-accent-violet)]/10"
                        }`}
                      >
                        <option value="" disabled>Select timeline</option>
                        <option value="ASAP (Under 2 weeks)">ASAP (Under 2 weeks)</option>
                        <option value="2-4 Weeks">2-4 Weeks</option>
                        <option value="1-2 Months">1-2 Months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                      <div className="pointer-events-none absolute bottom-0 right-5 top-8 flex items-center text-[var(--color-text-muted)]">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                      {errors.timeline && (
                        <p className="absolute -bottom-5 left-0 text-[10px] text-[var(--color-danger)]">{errors.timeline}</p>
                      )}
                    </div>
                  </div>

                  <div className="group relative pt-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[var(--color-text-muted)] transition-colors duration-300 group-focus-within:text-[var(--color-accent-violet-hover)]"
                    >
                      Project Brief *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full resize-none rounded-[var(--radius-md)] border bg-[var(--color-surface-base)]/60 px-5 py-4 text-sm text-[var(--color-text-primary)] shadow-inner transition-all duration-300 focus:outline-none disabled:opacity-50 ${
                        errors.message
                          ? "border-[var(--color-danger)]/70 focus:border-[var(--color-danger)] focus:ring-4 focus:ring-[var(--color-danger)]/10"
                          : "border-[var(--color-surface-border)] hover:border-[var(--color-text-muted)] focus:border-[var(--color-accent-violet)] focus:ring-4 focus:ring-[var(--color-accent-violet)]/10"
                      }`}
                      placeholder="Describe your project, goals, and any specific requirements..."
                    />
                    {errors.message && (
                      <p className="absolute -bottom-3 left-0 text-[10px] text-[var(--color-danger)]">{errors.message}</p>
                    )}
                  </div>

                  <AnimatePresence>
                    {status === "error" && serverError && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-danger)]/30 bg-[var(--color-danger)]/10 px-5 py-4 text-sm text-[var(--color-danger)] backdrop-blur-md"
                        role="alert"
                      >
                        <AlertTriangle size={18} className="mt-0.5 shrink-0" />
                        <span className="font-medium">{serverError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      aria-live="polite"
                      className={`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-pill)] py-5 text-xs font-bold uppercase tracking-widest transition-all duration-500 disabled:cursor-not-allowed ${
                        status === "success"
                          ? "bg-[var(--color-success)] text-white shadow-[0_0_40px_rgba(34,197,94,0.35)]"
                          : status === "error"
                          ? "bg-[var(--color-danger)] text-white hover:bg-red-600 shadow-[0_0_40px_rgba(239,68,68,0.35)]"
                          : "bg-white text-black hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-60 disabled:hover:scale-100"
                      }`}
                    >
                      {status === "idle" && (
                        <div className="absolute inset-0 z-0 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      )}

                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
                        {status === "success" && <CheckCircle2 size={16} />}
                        {buttonLabel}
                      </span>
                    </button>

                    <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[11px] text-[var(--color-text-muted)]">
                      <ShieldCheck size={12} />
                      Your details are only used to reply to your inquiry — never shared.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      </section>
  );
}

export default Contact;