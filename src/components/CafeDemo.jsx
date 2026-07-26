import { motion } from "framer-motion";

const MENU_ITEMS = [
  {
    name: "Smoked Espresso Macchiato",
    desc: "Double shot espresso with velvety micro-foam.",
    price: "₹240",
  },
  {
    name: "Almond Butter Croissant",
    desc: "Flaky pastry layered with fresh organic almond paste.",
    price: "₹180",
  },
  {
    name: "Avocado Sourdough Toast",
    desc: "Poached eggs, cherry tomatoes, chili flakes.",
    price: "₹320",
  },
  {
    name: "Cold Brew Tonic",
    desc: "18-hour steeped cold brew with citrus tonic water.",
    price: "₹260",
  },
];

function CafeDemo({ embedded = false }) {
  return (
    <div
      className={`${embedded ? "min-h-full" : "min-h-screen"} bg-[#0C0A09] font-sans text-[#F5F5F4]`}
    >
      <div className="relative flex min-h-[85vh] flex-col justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-2 block font-serif text-lg italic text-amber-600"
          >
            Brew &amp; Bite Cafe — Artisanal Roastery &amp; Kitchen
          </motion.span>
          <motion.h1
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="max-w-3xl text-4xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            CRAFTING PERFECTION
            <br />
            <span className="font-serif italic text-amber-600">one cup at a time.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-md text-base font-light text-zinc-400"
          >
            Freshly roasted single-origin coffee beans matched with organic bakery
            goods baked at dawn.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              type="button"
              className="bg-amber-700 px-6 py-3 text-sm font-medium transition hover:bg-amber-600"
            >
              Explore Menu
            </button>
            <button
              type="button"
              className="border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-amber-600 hover:text-amber-500"
            >
              Book Table
            </button>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-zinc-900 bg-[#090706] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              // OUR_SIGNATURES
            </span>
            <h2 className="mt-2 text-3xl font-light tracking-tight text-white">
              The Morning Flavors
            </h2>
            <div className="mt-12 space-y-8">
              {MENU_ITEMS.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4"
                >
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-medium text-white">{item.name}</h4>
                    <p className="mt-1 text-sm font-light text-zinc-500">{item.desc}</p>
                  </div>
                  <span className="shrink-0 font-mono font-bold text-amber-500">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center border border-zinc-800 bg-zinc-900/50 p-8 md:p-12">
            <p className="font-serif text-2xl italic leading-relaxed text-zinc-400">
              &ldquo;Spaces curated for remote creators, deep execution hours, and cozy
              aesthetic evenings.&rdquo;
            </p>
            <div className="mt-8 border-t border-zinc-800 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Hours
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Mon–Fri: 7AM – 9PM
                <br />
                Sat–Sun: 8AM – 10PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CafeDemo;
