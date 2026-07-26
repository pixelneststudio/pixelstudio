import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import { fadeUp, VIEWPORT_ONCE } from "../lib/motion";

import MagneticButton from "./ui/MagneticButton";



function CTASection() {

  return (

    <section className="relative overflow-hidden border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)] py-32">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent-violet)]/10 blur-[180px]" />



      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.p

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={VIEWPORT_ONCE}

          className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-accent-violet)]"

        >

          Ready to grow?

        </motion.p>



        <motion.h2

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={VIEWPORT_ONCE}

          className="text-5xl font-black leading-tight text-[var(--color-text-primary)] md:text-7xl"

        >

          Ready to build something your customers remember?

        </motion.h2>



        <motion.p

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={VIEWPORT_ONCE}

          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[var(--color-text-secondary)]"

        >

          Whether you need a premium website, AI assistant or business

          automation, let's build something that saves time and wins more

          clients.

        </motion.p>



        <motion.div

          variants={fadeUp}

          initial="hidden"

          whileInView="visible"

          viewport={VIEWPORT_ONCE}

          className="mt-12"

        >

          <MagneticButton

            as="a"

            href="#contact"

            whileHover={{ scale: 1.02 }}

            whileTap={{ scale: 0.97 }}

            className="inline-flex items-center gap-3 rounded-[var(--radius-pill)] bg-[var(--color-accent-violet)] px-9 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-[var(--shadow-sm)] transition-colors duration-300 hover:bg-[var(--color-accent-violet-hover)]"

          >

            Book an AI Strategy Call

            <ArrowRight size={18} />

          </MagneticButton>

        </motion.div>

      </div>

    </section>

  );

}



export default CTASection;