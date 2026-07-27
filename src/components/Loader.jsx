import { motion, AnimatePresence } from "framer-motion";

function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#050507]"
        >
          {/* Background Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Ambient Glow 1 */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.18, 0.35, 0.18],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[180px]"
          />

          {/* Ambient Glow 2 */}
          <motion.div
            animate={{
              x: [-40, 40, -40],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-20 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]"
          />

          {/* Ambient Glow 3 */}
          <motion.div
            animate={{
              x: [40, -40, 40],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-12 left-12 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[140px]"
          />

          {/* Center */}
          <div className="relative flex h-full flex-col items-center justify-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.82,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-5xl font-black tracking-tight text-white md:text-8xl">
                PixelNest
                <span className="text-violet-500"> Studio.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 0.7,
                y: 0,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-5 px-4 text-center text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:px-0 sm:text-[11px] sm:tracking-[0.55em]"
            >
              Crafting Premium Digital Experiences
            </motion.p>

            {/* Premium Progress */}
            <div className="mt-14 h-[2px] w-72 overflow-hidden rounded-full bg-zinc-800">

              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_20px_rgba(139,92,246,0.8)]"
              />

            </div>

            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-8 text-[10px] uppercase tracking-[0.45em] text-zinc-600"
            >
              Initializing Experience
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;