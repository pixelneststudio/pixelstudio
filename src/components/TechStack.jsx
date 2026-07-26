import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaPython,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiTypescript,
  SiN8N,
  SiSupabase,
} from "react-icons/si";

const TECHS = [
  {
    name: "React 19",
    icon: FaReact,
    level: "Modern Frontend",
    color: "text-cyan-400",
    glow: "from-cyan-400/20 to-blue-500/20",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "Full-Stack Framework",
    color: "text-white",
    glow: "from-white/20 to-gray-500/20",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Design System",
    color: "text-sky-400",
    glow: "from-cyan-400/20 to-sky-500/20",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "Type-Safe Development",
    color: "text-blue-400",
    glow: "from-blue-400/20 to-blue-600/20",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    level: "Application Logic",
    color: "text-yellow-400",
    glow: "from-yellow-400/20 to-orange-500/20",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: "Backend APIs",
    color: "text-green-400",
    glow: "from-green-400/20 to-emerald-500/20",
  },
  {
    name: "Python",
    icon: FaPython,
    level: "AI & Automation",
    color: "text-yellow-300",
    glow: "from-yellow-300/20 to-blue-400/20",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    level: "Premium Motion",
    color: "text-violet-400",
    glow: "from-violet-400/20 to-fuchsia-500/20",
  },
  {
    name: "OpenAI API",
    icon: FaRobot,
    level: "AI Agents",
    color: "text-emerald-400",
    glow: "from-emerald-400/20 to-green-500/20",
  },
  {
    name: "n8n Automation",
    icon: SiN8N,
    level: "Workflow Automation",
    color: "text-red-400",
    glow: "from-red-400/20 to-orange-500/20",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    level: "Backend & Database",
    color: "text-green-300",
    glow: "from-green-300/20 to-emerald-400/20",
  },
];

function TechCard({ tech, index }) {
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition-all duration-500 hover:border-violet-500/60"
    >
      {/* Glow */}
      <div
        className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${tech.glow} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100`}
      />

      {/* Animated Top Border */}
      <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

      {/* Icon */}
      <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-500 group-hover:rotate-6 group-hover:border-violet-500">
        <Icon className={`text-3xl ${tech.color}`} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-black text-white transition-colors duration-300 group-hover:text-violet-300">
        {tech.name}
      </h3>

      <p className="mt-2 leading-relaxed text-zinc-400">
        {tech.level}
      </p>

      {/* Bottom */}
      <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
          PixelNest Stack
        </span>

        <span className="text-xl text-violet-400 transition-all duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </motion.div>
  );
}

function TechStack() {
  return (
    <section
      id="tech"
      className="border-b border-zinc-900 bg-[#09090B] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-violet-400">
            Our Tech Stack
          </p>

          <h2 className="text-5xl font-black uppercase text-white md:text-6xl">
            Powered By
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Modern Technology.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-zinc-400">
            PixelNest Studio builds every project using modern,
            scalable technologies focused on performance,
            responsiveness and long-term maintainability.
          </p>

        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {TECHS.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default TechStack;