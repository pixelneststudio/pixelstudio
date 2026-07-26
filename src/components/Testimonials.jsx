const REVIEWS = [
  {
    quote:
      "PixelNest Studio delivered a complex cloud SaaS interface in record time. Absolute design geniuses.",
    author: "Marcus Vance",
    role: "Founder, Nova Platform",
  },
  {
    quote:
      "The attention to raw typography and fast interaction engineering is unparalleled. Highly recommended.",
    author: "Elena Rostova",
    role: "Product Lead, Synapse Systems",
  },
  {
    quote:
      "Clean logic, zero filler text, and premium speed updates. Our conversion rate boosted instantly.",
    author: "Vikram Malhotra",
    role: "CTO, Vortex Tech",
  },
  {
    quote:
      "IronPulse Gym's new site doubled our membership sign-ups in the first month. Insane ROI.",
    author: "Jake Morrison",
    role: "Owner, IronPulse Gym",
  },
  {
    quote:
      "Brew & Bite needed warmth and elegance — PixelNest nailed the artisanal vibe perfectly.",
    author: "Priya Sharma",
    role: "Founder, Brew & Bite Cafe",
  },
];

function ReviewCard({ review }) {
  return (
    <div className="flex w-[20rem] shrink-0 flex-col justify-between border border-zinc-800/60 bg-zinc-900/20 p-8 md:w-[28rem]">
      <p className="text-base font-light italic leading-relaxed text-zinc-300 md:text-lg">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-8 border-t border-zinc-900 pt-4">
        <h4 className="text-sm font-bold uppercase tracking-tight text-white">
          {review.author}
        </h4>
        <p className="mt-0.5 text-xs tracking-wider text-zinc-500">{review.role}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const track = [...REVIEWS, ...REVIEWS];

  return (
    <section className="overflow-hidden border-b border-zinc-900 bg-[#050507] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-violet-400">
            Client Feedback
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
            Trusted Voice.
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050507] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050507] to-transparent" />

        <div className="animate-ticker flex w-max gap-6 px-6">
          {track.map((review, index) => (
            <ReviewCard key={`${review.author}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
