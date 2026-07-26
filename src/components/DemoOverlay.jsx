import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PREVIEW_LABELS = {
  gym: "IRONPULSE_GYM",
  cafe: "BREW_BITE_CAFE",
  nova: "NOVA_CLOUD",
  clinic: "ELITECARE_CLINIC",
  realty: "HORIZON_REALTY",
  law: "LEXPRO_LAW",
};

// Gym Data
const GYM_PLANS = [
  { name: "Starter", price: "$49", features: ["Gym Access", "Locker Room", "Basic Equipment"], popular: false },
  { name: "Pro", price: "$89", features: ["All Access", "Personal Trainer (2x/mo)", "Nutrition Plan"], popular: true },
  { name: "Elite", price: "$149", features: ["VIP Access", "Unlimited PT", "Spa & Recovery", "Meal Prep"], popular: false },
];

const GYM_TRAINERS = [
  { name: "Mike Chen", specialty: "Strength", rating: "4.9", sessions: "500+" },
  { name: "Sarah Johnson", specialty: "HIIT", rating: "4.8", sessions: "350+" },
  { name: "Alex Rivera", specialty: "Yoga", rating: "5.0", sessions: "600+" },
  { name: "Jordan Lee", specialty: "CrossFit", rating: "4.7", sessions: "280+" },
];

const GYM_CLASSES = [
  { name: "HIIT Blast", time: "6:00 AM", instructor: "Sarah", spots: 8 },
  { name: "Power Yoga", time: "7:30 AM", instructor: "Alex", spots: 12 },
  { name: "Strength Lab", time: "9:00 AM", instructor: "Mike", spots: 5 },
  { name: "CrossFit WOD", time: "5:00 PM", instructor: "Jordan", spots: 10 },
];

// Cafe Data
const CAFE_MENU = [
  { name: "Nitro Double Espresso", price: "$6.50", category: "Coffee", description: "Double cold pulled roast with micro-foam", popular: true },
  { name: "Almond Butter Croissant", price: "$5.50", category: "Pastry", description: "Handmade puff pastry with stoneground nuts", popular: false },
  { name: "Avocado Sourdough", price: "$12.00", category: "Food", description: "Smashed greens, olive glaze, chili crunch", popular: true },
  { name: "Matcha Latte", price: "$7.00", category: "Tea", description: "Ceremonial grade matcha with oat milk", popular: false },
  { name: "Cold Brew", price: "$5.00", category: "Coffee", description: "24-hour steeped single origin", popular: false },
];

const CAFE_REVIEWS = [
  {	name: "Sarah M.", rating: 5, text: "Best coffee in the city. The atmosphere is perfect for working." },
  {	name: "James K.", rating: 5, text: "The croissants are incredible. Worth every penny." },
  {	name: "Emily R.", rating: 4, text: "Great ambiance and friendly staff. Will be back!" },
];

// Clinic Data
const CLINIC_DEPARTMENTS = [
  { name: "Cardiology", icon: "❤️", doctors: 5 },
  { name: "Pediatrics", icon: "👶", doctors: 3 },
  { name: "Orthopedics", icon: "🦴", doctors: 4 },
  { name: "Dermatology", icon: "🔬", doctors: 2 },
];

const CLINIC_DOCTORS = [
  { name: "Dr. Emily Watson", specialty: "Internal Medicine", available: true, rating: "4.9", experience: "15 years" },
  { name: "Dr. James Park", specialty: "Cardiology", available: false, rating: "5.0", experience: "20 years" },
  { name: "Dr. Lisa Chen", specialty: "Pediatrics", available: true, rating: "4.8", experience: "12 years" },
  { name: "Dr. Michael Brown", specialty: "Orthopedics", available: true, rating: "4.7", experience: "18 years" },
];

const CLINIC_PACKAGES = [
  { name: "Basic Checkup", price: "$199", includes: ["Physical Exam", "Blood Work", "Consultation"] },
  { name: "Executive Health", price: "$499", includes: ["Full Panel", "Cardiac Screening", "MRI", "Specialist Consult"] },
  { name: "Family Plan", price: "$799", includes: ["4 Checkups", "Pediatric Care", "Dental Screening", "Vision Test"] },
];

// Real Estate Data
const REALTY_LISTINGS = [
  { address: "123 Oak Street", price: "$450,000", beds: 3, baths: 2, sqft: "1,800", type: "Single Family", image: "🏠", featured: false },
  { address: "456 Maple Ave", price: "$675,000", beds: 4, baths: 3, sqft: "2,400", type: "Modern Townhouse", image: "🏘️", featured: true },
  { address: "789 Pine Road", price: "$890,000", beds: 5, baths: 4, sqft: "3,200", type: "Luxury Estate", image: "🏡", featured: false },
];

const REALTY_AGENTS = [
  { name: "Jennifer Martinez", sales: "45+", rating: "4.9", phone: "(555) 123-4567" },
  { name: "David Kim", sales: "38+", rating: "4.8", phone: "(555) 234-5678" },
];

// Law Firm Data
const LAW_PRACTICE_AREAS = [
  { name: "Corporate Law", icon: "🏢", cases: "200+" },
  { name: "Real Estate", icon: "🏠", cases: "150+" },
  { name: "Family Law", icon: "👨‍👩‍👧", cases: "180+" },
  { name: "Criminal Defense", icon: "⚖️", cases: "120+" },
  { name: "Immigration", icon: "🌍", cases: "90+" },
  { name: "Intellectual Property", icon: "💡", cases: "75+" },
];

const LAW_ATTORNEYS = [
  { name: "Robert Sterling", title: "Senior Partner", experience: "20+ years", rating: "4.9", cases: "500+" },
  { name: "Jennifer Mills", title: "Partner", experience: "15 years", rating: "4.8", cases: "350+" },
  { name: "David Chen", title: "Associate", experience: "8 years", rating: "4.7", cases: "200+" },
];

const LAW_CASE_STUDIES = [
  { title: "Tech Startup Acquisition", outcome: "$50M Deal", duration: "6 months" },
  { title: "Property Dispute Settlement", outcome: "Victory", duration: "3 months" },
];

// Nova Cloud Data
const NOVA_INTEGRATIONS = [
  { name: "AWS", icon: "☁️", status: "Connected" },
  { name: "GitHub", icon: "🐙", status: "Connected" },
  { name: "Slack", icon: "💬", status: "Connected" },
  { name: "Stripe", icon: "💳", status: "Pending" },
];

const NOVA_SERVERS = [
  { name: "US-East-1", status: "Healthy", cpu: "45%", memory: "62%" },
  { name: "EU-West-1", status: "Healthy", cpu: "38%", memory: "55%" },
  { name: "Asia-Pacific", status: "Warning", cpu: "78%", memory: "81%" },
];

const NOVA_METRICS = [
  { label: "Uptime", value: "99.99%", trend: "↑" },
  { label: "Response Time", value: "12ms", trend: "↓" },
  { label: "Requests/sec", value: "2.4K", trend: "↑" },
  { label: "Error Rate", value: "0.01%", trend: "↓" },
];

function DemoOverlay({ isOpen, onClose, type }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const scrollY = window.scrollY;
    
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const originalTop = document.body.style.top;
    
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Move focus into the dialog so keyboard and screen-reader users
    // land inside it rather than on whatever was behind it.
    dialogRef.current?.focus();

    return () => {
      // Restore body scroll position
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      document.body.style.top = originalTop;
      
      // Restore scroll position
      window.scrollTo(0, scrollY);
      
      document.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const previewLabel = PREVIEW_LABELS[type] || "CLIENT_PREVIEW";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden="true"
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${previewLabel} live preview`}
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative z-10 flex h-[85vh] w-full max-w-5xl flex-col rounded-2xl border border-zinc-800 bg-[#0D0D11] font-sans focus:outline-none"
        >
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-900 bg-[#0D0D11] px-6 py-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-zinc-800" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Live Client Preview // {previewLabel}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)]"
            >
              Close Preview [X]
            </button>
          </div>

          <div className="flex-grow overflow-y-auto overflow-x-hidden overscroll-contain -webkit-overflow-scrolling: touch p-0">
            {/* IronPulse Gym - Unique Fitness Layout */}
            {type === "gym" && (
              <div className="flex h-full flex-col bg-black">
                {/* Hero Section */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-red-600">
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }} />
                  <div className="relative h-full flex items-center justify-between px-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h1 className="text-4xl font-black uppercase tracking-tighter text-white">IronPulse</h1>
                      <p className="text-sm font-medium text-orange-100">Forge Your Legacy</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-black text-white">24/7</div>
                        <div className="text-[10px] uppercase text-orange-200">Access</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-white">500+</div>
                        <div className="text-[10px] uppercase text-orange-200">Members</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Membership Plans */}
                    <div className="lg:col-span-1 space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">Membership</h3>
                      {GYM_PLANS.map((plan, idx) => (
                        <motion.div
                          key={plan.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className={`relative rounded-xl border-2 p-4 transition-all hover:scale-105 ${
                            plan.popular 
                              ? 'border-orange-500 bg-orange-500/10' 
                              : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                          }`}
                        >
                          {plan.popular && (
                            <div className="absolute -top-2 right-4 bg-orange-500 px-2 py-0.5 text-[9px] font-bold uppercase text-black">
                              Best Value
                            </div>
                          )}
                          <div className="text-lg font-black text-white">{plan.name}</div>
                          <div className="text-2xl font-black text-orange-400">{plan.price}<span className="text-sm text-zinc-400">/mo</span></div>
                          <ul className="mt-3 space-y-1">
                            {plan.features.map((f) => (
                              <li key={f} className="text-xs text-zinc-400 flex items-center gap-2">
                                <span className="h-1 w-1 bg-orange-500" />{f}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    {/* Class Schedule */}
                    <div className="lg:col-span-1">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">Today's Classes</h3>
                      <div className="space-y-2">
                        {GYM_CLASSES.map((cls, idx) => (
                          <motion.div
                            key={cls.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.05 }}
                            className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 hover:border-orange-500/50 transition-all"
                          >
                            <div>
                              <div className="text-sm font-bold text-white">{cls.name}</div>
                              <div className="text-xs text-zinc-500">{cls.instructor}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs font-bold text-orange-400">{cls.time}</div>
                              <div className="text-[10px] text-zinc-500">{cls.spots} spots</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Trainers */}
                    <div className="lg:col-span-1">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">Elite Trainers</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {GYM_TRAINERS.map((trainer, idx) => (
                          <motion.div
                            key={trainer.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.05 }}
                            className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-3 hover:border-orange-500/50 transition-all"
                          >
                            <div className="h-16 w-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-orange-400 to-orange-600" />
                            <div className="text-center">
                              <div className="text-xs font-bold text-white">{trainer.name}</div>
                              <div className="text-[10px] text-zinc-500">{trainer.specialty}</div>
                              <div className="mt-1 flex items-center justify-center gap-1 text-[10px] text-orange-400">
                                <span>★</span><span>{trainer.rating}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BMI Calculator Widget */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500 mb-4">BMI Calculator</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="text-[10px] uppercase text-zinc-500">Height (ft)</label>
                        <input type="number" className="w-full mt-1 rounded border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white" placeholder="5.10" />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase text-zinc-500">Weight (lbs)</label>
                        <input type="number" className="w-full mt-1 rounded border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white" placeholder="175" />
                      </div>
                      <div className="flex items-end">
                        <button className="w-full rounded bg-orange-500 py-2 text-xs font-bold uppercase text-black hover:bg-orange-400 transition-all">
                          Calculate
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Brew & Bite Cafe - Unique Cafe Layout */}
            {type === "cafe" && (
              <div className="flex h-full flex-col bg-amber-50">
                {/* Cafe Header */}
                <div className="relative h-48 bg-gradient-to-r from-amber-800 to-amber-600">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }} />
                  <div className="relative h-full flex items-center justify-between px-8">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h1 className="text-3xl font-serif italic text-white">Brew & Bite</h1>
                      <p className="text-amber-100 text-sm">Artisanal Coffee & Pastries</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white text-right"
                    >
                      <div className="text-2xl">☕</div>
                      <div className="text-xs text-amber-100">Est. 2019</div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Menu Section */}
                    <div>
                      <h3 className="text-lg font-serif text-amber-900 mb-4">Our Menu</h3>
                      <div className="space-y-3">
                        {CAFE_MENU.map((item, idx) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                            className={`group relative overflow-hidden rounded-lg border-2 p-4 transition-all hover:shadow-lg ${
                              item.popular 
                                ? 'border-amber-500 bg-amber-100' 
                                : 'border-amber-200 bg-white hover:border-amber-400'
                            }`}
                          >
                            {item.popular && (
                              <div className="absolute top-2 right-2 bg-amber-500 px-2 py-0.5 text-[9px] font-bold uppercase text-white">
                                ★ Popular
                              </div>
                            )}
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-xs uppercase tracking-wider text-amber-600">{item.category}</div>
                                <div className="font-serif text-lg font-semibold text-amber-900">{item.name}</div>
                                <div className="text-xs text-amber-700 mt-1">{item.description}</div>
                              </div>
                              <div className="text-lg font-bold text-amber-600">{item.price}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Reservation Widget */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="rounded-xl border-2 border-amber-300 bg-white p-5 shadow-lg"
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-4">Reserve a Table</h3>
                        <div className="space-y-3">
                          <input type="date" className="w-full rounded border border-amber-200 px-3 py-2 text-sm" />
                          <input type="time" className="w-full rounded border border-amber-200 px-3 py-2 text-sm" />
                          <select className="w-full rounded border border-amber-200 px-3 py-2 text-sm">
                            <option>2 Guests</option>
                            <option>4 Guests</option>
                            <option>6 Guests</option>
                          </select>
                          <button className="w-full rounded bg-amber-600 py-2 text-sm font-bold uppercase text-white hover:bg-amber-700 transition-all">
                            Book Now
                          </button>
                        </div>
                      </motion.div>

                      {/* Reviews */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 mb-4">What People Say</h3>
                        <div className="space-y-3">
                          {CAFE_REVIEWS.map((review) => (
                            <div key={review.name} className="rounded-lg bg-white p-4 border border-amber-200">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-amber-900 text-sm">{review.name}</span>
                                <span className="text-amber-500">{'★'.repeat(review.rating)}</span>
                              </div>
                              <p className="text-xs text-amber-700 italic">"{review.text}"</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Location Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="rounded-xl bg-amber-900 p-5 text-white"
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Visit Us</h3>
                        <p className="text-sm text-amber-100">123 Coffee Lane</p>
                        <p className="text-sm text-amber-100">Downtown District</p>
                        <div className="mt-3 text-xs text-amber-200">
                          <div>Mon-Fri: 7am-9pm</div>
                          <div>Sat-Sun: 8am-10pm</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Nova Cloud - Unique Cloud Dashboard Layout */}
            {type === "nova" && (
              <div className="flex h-full flex-col bg-slate-950 font-mono">
                {/* Cloud Header */}
                <div className="relative h-40 bg-gradient-to-r from-cyan-900 via-blue-900 to-slate-900 border-b border-cyan-800">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }} />
                  <div className="relative h-full flex items-center justify-between px-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-cyan-500 flex items-center justify-center text-sm">☁️</div>
                        <div>
                          <h1 className="text-lg font-bold text-white">NOVA CLOUD</h1>
                          <div className="text-[10px] text-cyan-400">v2.4.1 • Production</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-8">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-400">All Systems Operational</span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex gap-4"
                    >
                      <button className="px-3 py-1.5 rounded border border-cyan-700 text-xs text-cyan-400 hover:bg-cyan-900 transition-all">
                        Deploy
                      </button>
                      <button className="px-3 py-1.5 rounded bg-cyan-600 text-xs text-black font-bold hover:bg-cyan-500 transition-all">
                        + New Project
                      </button>
                    </motion.div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                    {/* Metrics Panel */}
                    <div className="lg:col-span-1 space-y-4">
                      {NOVA_METRICS.map((metric, idx) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          className="rounded-lg bg-slate-900 border border-slate-800 p-4"
                        >
                          <div className="text-[10px] uppercase text-slate-500">{metric.label}</div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="text-xl font-bold text-white">{metric.value}</div>
                            <span className={`text-xs ${metric.trend === '↑' ? 'text-green-400' : 'text-cyan-400'}`}>{metric.trend}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Main Dashboard */}
                    <div className="lg:col-span-3 space-y-4">
                      {/* Server Status */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="rounded-lg bg-slate-900 border border-slate-800 p-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs font-bold uppercase text-cyan-400">Server Status</h3>
                          <span className="text-[10px] text-slate-500">Last updated: 2s ago</span>
                        </div>
                        <div className="space-y-3">
                          {NOVA_SERVERS.map((server) => (
                            <div key={server.name} className="flex items-center gap-4">
                              <div className={`h-2 w-2 rounded-full ${server.status === 'Healthy' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                              <div className="flex-1">
                                <div className="text-sm text-white">{server.name}</div>
                                <div className="flex gap-4 mt-1">
                                  <span className="text-[10px] text-slate-500">CPU: {server.cpu}</span>
                                  <span className="text-[10px] text-slate-500">Memory: {server.memory}</span>
                                </div>
                              </div>
                              <span className={`text-[10px] uppercase ${server.status === 'Healthy' ? 'text-green-400' : 'text-yellow-400'}`}>
                                {server.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Traffic Graph */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="rounded-lg bg-slate-900 border border-slate-800 p-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs font-bold uppercase text-cyan-400">Request Traffic</h3>
                          <div className="flex gap-2">
                            <span className="px-2 py-1 rounded bg-cyan-900 text-[10px] text-cyan-400">1H</span>
                            <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-400">24H</span>
                            <span className="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-400">7D</span>
                          </div>
                        </div>
                        <div className="flex h-32 items-end gap-1">
                          {[40, 65, 30, 85, 45, 90, 70, 55, 60, 80, 95, 40, 75, 50, 85, 60, 30, 90, 100, 45, 80, 70, 55, 65, 75, 85, 60, 70, 80, 90].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="flex-1 rounded-t bg-gradient-to-t from-cyan-600 to-cyan-400 transition-all duration-200 hover:from-cyan-400 hover:to-cyan-300 cursor-crosshair"
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* Integrations */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="rounded-lg bg-slate-900 border border-slate-800 p-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs font-bold uppercase text-cyan-400">Integrations</h3>
                          <button className="text-[10px] text-cyan-400 hover:underline">+ Add Integration</button>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                          {NOVA_INTEGRATIONS.map((integration) => (
                            <div key={integration.name} className="rounded-lg bg-slate-800 p-3 border border-slate-700 hover:border-cyan-500 transition-all cursor-pointer">
                              <div className="text-2xl mb-2">{integration.icon}</div>
                              <div className="text-xs text-white">{integration.name}</div>
                              <div className={`text-[10px] mt-1 ${integration.status === 'Connected' ? 'text-green-400' : 'text-yellow-400'}`}>
                                {integration.status}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* EliteCare Clinic - Unique Healthcare Layout */}
            {type === "clinic" && (
              <div className="flex h-full flex-col bg-slate-50">
                {/* Medical Header */}
                <div className="relative h-56 bg-gradient-to-br from-emerald-600 to-teal-700">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }} />
                  <div className="relative h-full flex items-center justify-between px-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-2xl">🏥</div>
                        <div>
                          <h1 className="text-2xl font-bold text-white">EliteCare Clinic</h1>
                          <p className="text-emerald-100 text-sm">Excellence in Healthcare</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-right"
                    >
                      <div className="text-white text-lg font-bold">24/7 Emergency</div>
                      <div className="text-emerald-100 text-sm">Call: 555-0123</div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Departments */}
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-4">Departments</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {CLINIC_DEPARTMENTS.map((dept, idx) => (
                          <motion.div
                            key={dept.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                            className="rounded-xl bg-white p-4 border border-emerald-200 text-center hover:border-emerald-400 transition-all cursor-pointer"
                          >
                            <div className="text-2xl mb-2">{dept.icon}</div>
                            <div className="text-xs font-semibold text-slate-700">{dept.name}</div>
                            <div className="text-[10px] text-slate-500">{dept.doctors} Doctors</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Doctors */}
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-4">Our Specialists</h3>
                      <div className="space-y-3">
                        {CLINIC_DOCTORS.map((doctor, idx) => (
                          <motion.div
                            key={doctor.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + idx * 0.05 }}
                            className="rounded-xl bg-white p-4 border border-slate-200 hover:border-emerald-400 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold">
                                {doctor.name.split(' ')[1][0]}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-bold text-slate-800">{doctor.name}</div>
                                <div className="text-xs text-slate-500">{doctor.specialty}</div>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs text-emerald-600">★ {doctor.rating}</span>
                                  <span className="text-[10px] text-slate-400">{doctor.experience}</span>
                                </div>
                              </div>
                              <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full ${
                                doctor.available 
                                  ? 'bg-emerald-100 text-emerald-700' 
                                  : 'bg-slate-100 text-slate-500'
                              }`}>
                                {doctor.available ? 'Available' : 'Busy'}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Health Packages */}
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-4">Health Packages</h3>
                      <div className="space-y-3">
                        {CLINIC_PACKAGES.map((pkg, idx) => (
                          <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + idx * 0.1 }}
                            className="rounded-xl bg-gradient-to-br from-emerald-50 to-white p-4 border border-emerald-200 hover:border-emerald-400 transition-all"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="font-bold text-slate-800">{pkg.name}</div>
                              <div className="text-lg font-bold text-emerald-600">{pkg.price}</div>
                            </div>
                            <ul className="space-y-1">
                              {pkg.includes.map((item) => (
                                <li key={item} className="text-xs text-slate-600 flex items-center gap-2">
                                  <span className="h-1 w-1 bg-emerald-500 rounded-full" />{item}
                                </li>
                              ))}
                            </ul>
                            <button className="mt-3 w-full rounded-lg bg-emerald-600 py-2 text-xs font-bold uppercase text-white hover:bg-emerald-700 transition-all">
                              Book Package
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Appointment Widget */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 rounded-xl bg-white border-2 border-emerald-500 p-6 shadow-lg"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-4">Quick Appointment</h3>
                    <div className="grid grid-cols-4 gap-4">
                      <select className="rounded border border-slate-300 px-3 py-2 text-sm">
                        <option>Select Department</option>
                        <option>Cardiology</option>
                        <option>Pediatrics</option>
                        <option>Orthopedics</option>
                      </select>
                      <input type="date" className="rounded border border-slate-300 px-3 py-2 text-sm" />
                      <input type="time" className="rounded border border-slate-300 px-3 py-2 text-sm" />
                      <button className="rounded bg-emerald-600 py-2 text-sm font-bold uppercase text-white hover:bg-emerald-700 transition-all">
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Horizon Realty - Unique Real Estate Layout */}
            {type === "realty" && (
              <div className="flex h-full flex-col bg-slate-100">
                {/* Realty Header */}
                <div className="relative h-48 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }} />
                  <div className="relative h-full flex items-center justify-between px-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h1 className="text-3xl font-bold text-white">Horizon Realty</h1>
                      <p className="text-blue-100 text-sm">Find Your Dream Home</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-right text-white"
                    >
                      <div className="text-2xl">🏠</div>
                      <div className="text-xs text-blue-100">500+ Properties</div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Property Listings */}
                    <div className="lg:col-span-2">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-blue-800 mb-4">Featured Properties</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {REALTY_LISTINGS.map((listing, idx) => (
                          <motion.div
                            key={listing.address}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className={`relative overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl ${
                              listing.featured ? 'ring-2 ring-blue-500' : ''
                            }`}
                          >
                            {listing.featured && (
                              <div className="absolute top-3 left-3 bg-blue-600 px-2 py-1 text-[9px] font-bold uppercase text-white">
                                Featured
                              </div>
                            )}
                            <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-5xl">
                              {listing.image}
                            </div>
                            <div className="p-4">
                              <div className="text-2xl font-bold text-blue-900">{listing.price}</div>
                              <div className="text-xs text-slate-500 mb-2">{listing.type}</div>
                              <div className="text-sm font-semibold text-slate-800">{listing.address}</div>
                              <div className="mt-3 flex gap-4 text-xs text-slate-600">
                                <span>🛏️ {listing.beds} Beds</span>
                                <span>🚿 {listing.baths} Baths</span>
                                <span>📐 {listing.sqft} sqft</span>
                              </div>
                              <button className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-xs font-bold uppercase text-white hover:bg-blue-700 transition-all">
                                Schedule Tour
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Mortgage Calculator */}
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="rounded-xl bg-white p-5 shadow-lg border border-blue-200"
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-blue-800 mb-4">Mortgage Calculator</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="text-[10px] uppercase text-slate-500">Home Price</label>
                            <input type="number" className="w-full mt-1 rounded border border-slate-300 px-3 py-2 text-sm" placeholder="$450,000" />
                          </div>
                          <div>
                            <label className="text-[10px] uppercase text-slate-500">Down Payment</label>
                            <input type="number" className="w-full mt-1 rounded border border-slate-300 px-3 py-2 text-sm" placeholder="$90,000" />
                          </div>
                          <div>
                            <label className="text-[10px] uppercase text-slate-500">Interest Rate</label>
                            <input type="number" className="w-full mt-1 rounded border border-slate-300 px-3 py-2 text-sm" placeholder="6.5%" />
                          </div>
                          <button className="w-full rounded bg-blue-600 py-2 text-xs font-bold uppercase text-white hover:bg-blue-700 transition-all">
                            Calculate
                          </button>
                        </div>
                      </motion.div>

                      {/* Agents */}
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-blue-800 mb-4">Top Agents</h3>
                        <div className="space-y-3">
                          {REALTY_AGENTS.map((agent) => (
                            <div key={agent.name} className="rounded-xl bg-white p-4 border border-slate-200 hover:border-blue-400 transition-all">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                                  {agent.name[0]}
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-bold text-slate-800">{agent.name}</div>
                                  <div className="text-xs text-slate-500">{agent.sales} Sales</div>
                                </div>
                                <div className="text-xs text-blue-600">★ {agent.rating}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LexPro Law Firm - Unique Legal Layout */}
            {type === "law" && (
              <div className="flex h-full flex-col bg-slate-900">
                {/* Law Header */}
                <div className="relative h-56 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }} />
                  <div className="relative h-full flex items-center justify-between px-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-14 w-14 rounded-lg bg-white flex items-center justify-center text-3xl">⚖️</div>
                        <div>
                          <h1 className="text-3xl font-bold text-white">LexPro</h1>
                          <p className="text-purple-200 text-sm">Justice Prevails</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-right"
                    >
                      <div className="text-white text-lg font-bold">Free Consult</div>
                      <div className="text-purple-200 text-sm">555-789-0123</div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Practice Areas */}
                    <div className="lg:col-span-2">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">Practice Areas</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {LAW_PRACTICE_AREAS.map((area, idx) => (
                          <motion.div
                            key={area.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                            className="rounded-xl bg-slate-800 p-4 border border-slate-700 hover:border-purple-500 transition-all cursor-pointer group"
                          >
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{area.icon}</div>
                            <div className="text-sm font-semibold text-white">{area.name}</div>
                            <div className="text-[10px] text-slate-400">{area.cases} Cases</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Case Studies */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">Recent Victories</h3>
                        <div className="space-y-3">
                          {LAW_CASE_STUDIES.map((study) => (
                            <div key={study.title} className="rounded-xl bg-gradient-to-r from-purple-900/50 to-slate-800 p-4 border border-purple-800">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-bold text-white">{study.title}</div>
                                  <div className="text-xs text-slate-400 mt-1">{study.duration}</div>
                                </div>
                                <div className="text-lg font-bold text-purple-400">{study.outcome}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Attorneys */}
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">Our Attorneys</h3>
                        <div className="space-y-3">
                          {LAW_ATTORNEYS.map((attorney) => (
                            <div key={attorney.name} className="rounded-xl bg-slate-800 p-4 border border-slate-700 hover:border-purple-500 transition-all">
                              <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                  {attorney.name.split(' ')[1][0]}
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-bold text-white">{attorney.name}</div>
                                  <div className="text-xs text-slate-400">{attorney.title}</div>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-purple-400">★ {attorney.rating}</span>
                                    <span className="text-[10px] text-slate-500">{attorney.cases} cases</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Consultation Form */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="rounded-xl bg-slate-800 p-5 border-2 border-purple-500"
                      >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">Free Consultation</h3>
                        <div className="space-y-3">
                          <input type="text" className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white" placeholder="Your Name" />
                          <input type="email" className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white" placeholder="Email Address" />
                          <select className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white">
                            <option>Select Practice Area</option>
                            <option>Corporate Law</option>
                            <option>Real Estate</option>
                            <option>Family Law</option>
                            <option>Criminal Defense</option>
                          </select>
                          <button className="w-full rounded bg-purple-600 py-2 text-xs font-bold uppercase text-white hover:bg-purple-700 transition-all">
                            Request Consult
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default DemoOverlay;
