import {
  ArrowUpRight,
  Play,
  Clock3,
  Briefcase,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const ACCENT_MAP = {
  violet: {
    glow: "bg-violet-500/10 group-hover:bg-violet-500/30",
    bar: "bg-violet-500",
    border: "group-hover:border-violet-500/60",
  },
  cyan: {
    glow: "bg-cyan-500/10 group-hover:bg-cyan-500/30",
    bar: "bg-cyan-500",
    border: "group-hover:border-cyan-500/60",
  },
  fuchsia: {
    glow: "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/30",
    bar: "bg-fuchsia-500",
    border: "group-hover:border-fuchsia-500/60",
  },
  orange: {
    glow: "bg-orange-500/10 group-hover:bg-orange-500/30",
    bar: "bg-orange-500",
    border: "group-hover:border-orange-500/60",
  },
  amber: {
    glow: "bg-amber-500/10 group-hover:bg-amber-500/30",
    bar: "bg-amber-500",
    border: "group-hover:border-amber-500/60",
  },
};

function getAccentKey(title) {
  const value = title.toLowerCase();

  if (value.includes("vortex")) return "fuchsia";
  if (value.includes("gym")) return "orange";
  if (value.includes("cafe")) return "amber";
  if (value.includes("nova")) return "cyan";

  return "violet";
}

function ProjectCard({ project, onOpenDemo }) {
  const accent = ACCENT_MAP[getAccentKey(project.title)];

  const slug = project.title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");

  const demoType =
    project.title.toLowerCase().includes("vortex")
      ? "vortex"
      : project.title.toLowerCase().includes("gym")
      ? "gym"
      : project.title.toLowerCase().includes("cafe")
      ? "cafe"
      : project.title.toLowerCase().includes("nova")
      ? "nova"
      : null;

  const handleLiveClick = (e) => {
    if (demoType && onOpenDemo) {
      e.preventDefault();
      onOpenDemo(demoType);
    }
  };

  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: .35 }}
      className={`group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-500 ${accent.border}`}
    >
      <div className="relative h-64 overflow-hidden border-b border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">

        <div
          className={`absolute inset-0 blur-3xl transition-all duration-500 ${accent.glow}`}
        />

        <div className="absolute inset-0 flex items-center justify-center p-6">

          <div className="flex h-full w-full max-w-md flex-col overflow-hidden rounded-xl border border-zinc-700 bg-[#0E0E12] shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">

            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">

              <div className="flex gap-2">

                <span className="h-3 w-3 rounded-full bg-red-500"/>

                <span className="h-3 w-3 rounded-full bg-yellow-500"/>

                <span className="h-3 w-3 rounded-full bg-green-500"/>

              </div>

              <div className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1 text-[10px] text-zinc-500">
                pixelnest.studio/{slug}
              </div>

              <ArrowUpRight
                size={14}
                className="text-zinc-500"
              />

            </div>

            <div className="flex flex-1 flex-col justify-between p-6">

              <div>

                <div
                  className={`mb-4 h-2 w-20 rounded ${accent.bar}`}
                />

                <div className="mb-3 h-5 w-2/3 rounded bg-white/10"/>

                <div className="mb-2 h-2 rounded bg-white/5"/>

                <div className="h-2 w-3/4 rounded bg-white/5"/>

              </div>

              <div className="grid grid-cols-3 gap-3">

                <div className="h-20 rounded-lg bg-zinc-800"/>

                <div className="h-20 rounded-lg bg-zinc-800/60"/>

                <div className="h-20 rounded-lg bg-zinc-800"/>

              </div>

            </div>

          </div>

        </div>

      </div>
            <div className="flex flex-1 flex-col justify-between p-7">

        <div>

          <div className="mb-4 flex flex-wrap items-center gap-2">

            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-300">
              Production Ready
            </span>

            <span className="rounded-full border border-zinc-700 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Client Project
            </span>

          </div>

          <h3 className="text-2xl font-black text-white transition-colors duration-300 group-hover:text-violet-300">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300 transition duration-300 group-hover:border-violet-500/40"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <Clock3 className="mb-2 text-violet-400" size={18}/>
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Delivery
              </p>
              <p className="mt-1 font-bold text-white">
                5-7 Days
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <Briefcase className="mb-2 text-violet-400" size={18}/>
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Industry
              </p>
              <p className="mt-1 font-bold text-white">
                Business
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
              <Star className="mb-2 text-violet-400" size={18}/>
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                Quality
              </p>
              <p className="mt-1 font-bold text-white">
                Premium
              </p>
            </div>

          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-800 pt-6">

          <button
            onClick={handleLiveClick}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-violet-500 hover:scale-105"
          >
            <Play size={16}/>
            Live Preview
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-white hover:text-white"
          >
            Source Code
            <ArrowUpRight size={16}/>
          </a>

        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;