import { motion } from "framer-motion";

const PLANS = [
  {
    name: "Monthly Elite",
    price: "₹2,499",
    features: ["Full Gym Access", "1 Free Trainer Session", "Locker Room Access"],
  },
  {
    name: "Quarterly Beast",
    price: "₹5,999",
    features: ["All Monthly Features", "Custom Diet Plan", "5 Group Classes/mo"],
    featured: true,
  },
  {
    name: "Annual Legend",
    price: "₹17,999",
    features: ["24/7 VIP Access", "Personal Trainer Assigned", "Supplement Discounts"],
  },
];

function GymDemo({ embedded = false }) {
  return (
    <div
      className={`${embedded ? "min-h-full" : "min-h-screen"} overflow-hidden bg-black font-sans text-white`}
    >
      <div className="relative flex min-h-[85vh] items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        <div className="relative z-10 max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-orange-500"
          >
            IronPulse Gym • No Excuses
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-4xl font-black uppercase leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl"
          >
            PAIN IS{" "}
            <span className="text-transparent [-webkit-text-stroke:2px_#ffffff]">
              WEAKNESS
            </span>
            <br />
            LEAVING THE BODY.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-lg text-sm text-zinc-400 md:text-base"
          >
            Forge your legacy at IronPulse — elite equipment, world-class trainers,
            and a community that refuses to quit.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              className="bg-orange-500 px-8 py-4 text-xs font-black uppercase tracking-wider text-black transition duration-300 hover:bg-orange-400"
            >
              Join The Club Now
            </button>
            <button
              type="button"
              className="border border-zinc-700 px-8 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:border-orange-500"
            >
              Free Trial Day
            </button>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-24">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.4em] text-orange-500">
          Membership
        </p>
        <h2 className="mb-16 text-center text-3xl font-black uppercase tracking-tight md:text-4xl">
          Choose Your Path
        </h2>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col justify-between border p-8 transition duration-300 ${
                plan.featured
                  ? "border-orange-500 bg-orange-500/5"
                  : "border-zinc-800 bg-zinc-900/30 hover:border-orange-500/60"
              }`}
            >
              <div>
                {plan.featured && (
                  <span className="mb-3 inline-block bg-orange-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-black">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold uppercase tracking-wider">{plan.name}</h3>
                <p className="mt-4 text-4xl font-black text-orange-500">{plan.price}</p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-400">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-orange-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className={`mt-8 w-full py-3 text-xs font-bold uppercase tracking-wider transition ${
                  plan.featured
                    ? "bg-orange-500 text-black hover:bg-orange-400"
                    : "border border-white hover:bg-white hover:text-black"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GymDemo;
