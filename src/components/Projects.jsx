import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { Play, ArrowUpRight, HeartPulse, Scale, Building, Cloud, Coffee, Dumbbell } from "lucide-react";
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "../lib/motion";
import { memo } from "react";
import DeviceMacBook from "./ui/DeviceMacBook";
import DeviceiPhone from "./ui/DeviceiPhone";

// Only the best 6 — each backed by a real, working live demo (see
// DemoOverlay). Business-outcome framing throughout, no tech stack lists.
const FEATURED_PROJECTS = [
  {
    demoType: "gym",
    category: "Fitness",
    title: "IronPulse Gym",
    slug: "ironpulse-gym",
    challenge: "Turn website visitors into memberships, not just tab closures.",
    outcome:
      "A membership-focused site with clear plans, trainer profiles, and a booking flow that removes hesitation before it starts.",
    accent: "orange",
    technologies: ["React 19", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    demoType: "cafe",
    category: "Restaurant",
    title: "Brew & Bite Cafe",
    slug: "brew-and-bite-cafe",
    challenge: "Make a small cafe feel as premium online as it does in person.",
    outcome:
      "A warm, reservation-ready site with a live menu and map integration that turns browsing into a booked table.",
    accent: "amber",
    technologies: ["React 19", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    demoType: "nova",
    category: "Technology",
    title: "Nova Cloud",
    slug: "nova-cloud",
    challenge: "Give a technical product a homepage that builds enterprise trust fast.",
    outcome:
      "A conversion-focused landing page that explains a complex product simply enough to move a visitor toward a demo request.",
    accent: "cyan",
    technologies: ["React 19", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    demoType: "clinic",
    category: "Healthcare",
    title: "EliteCare Clinic",
    slug: "elitecare-clinic",
    challenge: "Make booking appointments seamless while building patient trust.",
    outcome:
      "A modern healthcare platform with online scheduling, doctor profiles, and virtual consultation capabilities.",
    accent: "emerald",
    technologies: ["React 19", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    demoType: "realty",
    category: "Real Estate",
    title: "Horizon Realty",
    slug: "horizon-realty",
    challenge: "Transform property browsing into an immersive experience.",
    outcome:
      "A stunning property showcase with virtual tours, advanced search, and instant inquiry forms.",
    accent: "blue",
    technologies: ["React 19", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    demoType: "law",
    category: "Legal",
    title: "LexPro Law Firm",
    slug: "lexpro-law",
    challenge: "Build credibility and convert visitors into consultation bookings.",
    outcome:
      "A professional legal services site with attorney profiles, practice areas, and easy consultation scheduling.",
    accent: "purple",
    technologies: ["React 19", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
];

const ACCENT_STYLES = {
  orange: {
    bar: "bg-orange-500",
    border: "group-hover:border-orange-500/50",
    glow: "shadow-orange-500/20",
    gradient: "from-orange-500/20 to-transparent",
    text: "text-orange-500",
  },
  amber: {
    bar: "bg-amber-500",
    border: "group-hover:border-amber-500/50",
    glow: "shadow-amber-500/20",
    gradient: "from-amber-500/20 to-transparent",
    text: "text-amber-500",
  },
  cyan: {
    bar: "bg-[var(--color-accent-cyan)]",
    border: "group-hover:border-[var(--color-accent-cyan)]/50",
    glow: "shadow-[var(--color-accent-cyan)]/20",
    gradient: "from-[var(--color-accent-cyan)]/20 to-transparent",
    text: "text-[var(--color-accent-cyan)]",
  },
  emerald: {
    bar: "bg-emerald-500",
    border: "group-hover:border-emerald-500/50",
    glow: "shadow-emerald-500/20",
    gradient: "from-emerald-500/20 to-transparent",
    text: "text-emerald-500",
  },
  blue: {
    bar: "bg-blue-500",
    border: "group-hover:border-blue-500/50",
    glow: "shadow-blue-500/20",
    gradient: "from-blue-500/20 to-transparent",
    text: "text-blue-500",
  },
  purple: {
    bar: "bg-purple-500",
    border: "group-hover:border-purple-500/50",
    glow: "shadow-purple-500/20",
    gradient: "from-purple-500/20 to-transparent",
    text: "text-purple-500",
  },
};

const CATEGORY_ICONS = {
  "Fitness": Dumbbell,
  "Restaurant": Coffee,
  "Technology": Cloud,
  "Healthcare": HeartPulse,
  "Real Estate": Building,
  "Legal": Scale,
};

const PARTICLES_CONFIG = [
  { id: 0, width: 3.5, height: 4.2, left: 15, top: 20, duration: 3.8, delay: 0.2 },
  { id: 1, width: 2.8, height: 2.8, left: 75, top: 35, duration: 4.2, delay: 0.8 },
  { id: 2, width: 5.0, height: 3.6, left: 40, top: 70, duration: 3.2, delay: 1.4 },
  { id: 3, width: 2.2, height: 4.8, left: 85, top: 80, duration: 4.6, delay: 0.5 },
  { id: 4, width: 4.4, height: 2.4, left: 25, top: 60, duration: 3.5, delay: 1.1 },
  { id: 5, width: 3.0, height: 3.0, left: 60, top: 15, duration: 4.0, delay: 1.7 },
];

const MOBILE_PARTICLES_CONFIG = [
  { id: 0, width: 2.5, height: 3.0, left: 10, top: 15, duration: 3.5, delay: 0.1 },
  { id: 1, width: 2.0, height: 2.0, left: 80, top: 25, duration: 4.0, delay: 0.6 },
  { id: 2, width: 3.5, height: 2.5, left: 30, top: 75, duration: 3.0, delay: 1.2 },
  { id: 3, width: 1.8, height: 3.5, left: 70, top: 85, duration: 4.2, delay: 0.4 },
  { id: 4, width: 3.0, height: 1.8, left: 20, top: 55, duration: 3.2, delay: 0.9 },
];

const MobileProjectHeader = memo(function MobileProjectHeader({ category, accent }) {
  const style = ACCENT_STYLES[accent];
  const IconComponent = CATEGORY_ICONS[category];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative h-[160px] flex items-center justify-center md:hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-30`} />
        
        {/* Radial glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br ${style.gradient} opacity-40 blur-2xl`} />
        
        {/* Floating particles */}
        {MOBILE_PARTICLES_CONFIG.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/5"
            style={{
              width: particle.width,
              height: particle.height,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -15, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }
            }
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Icon Container */}
      <div className="relative z-10">
        {/* Animated accent ring */}
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${style.gradient} blur-xl`}
        />
        
        {/* Icon with gradient background */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl"
        >
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -5, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {IconComponent && (
              <IconComponent 
                size={48} 
                className={`${style.text} drop-shadow-lg`}
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

const ProjectDeviceShowcase = memo(function ProjectDeviceShowcase({ accent, category }) {
  const style = ACCENT_STYLES[accent];
  const prefersReducedMotion = useReducedMotion();

  const particles = PARTICLES_CONFIG;

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <MobileProjectHeader category={category} accent={accent} />
      
      {/* Desktop/Tablet Device Showcase - Hidden on mobile */}
      <div className="relative hidden md:block h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Radial gradients */}
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br ${style.gradient} opacity-20 blur-3xl`} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tl ${style.gradient} opacity-10 blur-3xl`} />
          
          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/5"
              style={{
                width: particle.width,
                height: particle.height,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }
              }
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Device Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 w-full px-4">
          {/* MacBook */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-auto flex justify-center"
          >
            <DeviceMacBook className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px]">
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
                {/* Screen Content */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-30`} />
                <div className="relative h-full flex flex-col">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                    <div className="flex-1 h-6 rounded-full bg-zinc-800/50" />
                  </div>

                  {/* Content Skeleton */}
                  <div className="flex-1 space-y-3">
                    <div className={`h-3 w-1/3 rounded-full ${style.bar} animate-pulse`} />
                    <div className="h-2 w-full rounded-full bg-zinc-700/50" />
                    <div className="h-2 w-2/3 rounded-full bg-zinc-700/50" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-20 rounded-lg bg-zinc-800/50" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DeviceMacBook>
          </motion.div>

          {/* iPhone - Hidden on mobile, visible on tablet and desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex lg:w-auto lg:-ml-16 justify-center"
          >
            <DeviceiPhone className="w-full max-w-[180px] md:max-w-[200px] lg:max-w-[250px]">
              <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 p-4">
                {/* Mobile Content */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-30`} />
                <div className="relative h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-2 w-8 rounded-full ${style.bar} animate-pulse`} />
                    <div className="h-2 w-2 rounded-full bg-zinc-700/50" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="h-16 rounded-lg bg-zinc-800/50" />
                    <div className="h-2 w-full rounded-full bg-zinc-700/50" />
                    <div className="h-2 w-2/3 rounded-full bg-zinc-700/50" />
                    <div className="mt-4 space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-12 rounded-lg bg-zinc-800/50" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DeviceiPhone>
          </motion.div>
        </div>
      </div>
    </>
  );
});

const ProjectCard = memo(function ProjectCard({ project, onOpenDemo }) {
  const style = ACCENT_STYLES[project.accent];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/80 backdrop-blur-xl transition-all duration-500 ${style.border} hover:shadow-2xl ${style.glow}`}
    >
      {/* Radial glow background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative flex h-full flex-col p-6">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute right-6 top-6"
        >
          <span className={`rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text-secondary)] backdrop-blur-sm ${style.bar}/10`}>
            {project.category}
          </span>
        </motion.div>

        {/* Device Showcase */}
        <div className="mb-4 sm:mb-6">
          <ProjectDeviceShowcase accent={project.accent} category={project.category} />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent-violet-hover)]">
            {project.title}
          </h3>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium leading-relaxed text-[var(--color-text-secondary)]">
            {project.challenge}
          </p>

          <p className="mt-2 sm:mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-[var(--color-text-muted)]">
            {project.outcome}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Qualitative Badges */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--color-surface-border)] pt-4">
            <span className="rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] backdrop-blur-sm">
              AI Powered
            </span>
            <span className="rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] backdrop-blur-sm">
              Lead Focused
            </span>
            <span className="rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] backdrop-blur-sm">
              Premium UX
            </span>
            <span className="rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] backdrop-blur-sm">
              Fast Performance
            </span>
            <span className="rounded-full border border-[var(--color-surface-border)] bg-[var(--color-surface-raised)]/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)] backdrop-blur-sm">
              Responsive
            </span>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => onOpenDemo?.(project.demoType)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-6 flex w-fit items-center gap-3 rounded-full border-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-lg ${style.border.replace('group-hover:', '')} bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-accent-violet)] hover:text-white`}
          >
            <Play size={14} />
            View Live Demo
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
});

function Projects({ onOpenDemo }) {
  return (
    <section
      id="projects"
      className="border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]">
              Featured Projects
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] md:text-6xl">
              A closer look at <br />
              <span className="bg-gradient-to-r from-[var(--color-accent-violet)] via-[var(--color-accent-fuchsia)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent">
                recent outcomes.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-[var(--color-text-secondary)]">
            Six engagements, Six different goals — each solved with a
            site built around what the business actually needed to happen
            next.
          </p>
        </motion.div>

        {/* Case studies */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.demoType}
              project={project}
              onOpenDemo={onOpenDemo}
            />
          ))}
        </motion.div>

        {/* Link back to remaining demos still reachable via nav */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
          >
            Want to see what we'd build for your business?
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
