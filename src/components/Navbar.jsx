import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Anchors reflect sections that exist today. Routed items (Services detail
// pages, AI hub, Industries) join this list once those pages are built —
// linking to them now would point at nothing.
const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Selected Work", href: "#projects" },
  { label: "Tech Stack", href: "#tech" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const CLIENT_DEMOS = [
  { key: "gym", label: "IronPulse Gym" },
  { key: "cafe", label: "Brew & Bite Cafe" },
  { key: "nova", label: "Nova Cloud" },
  { key: "clinic", label: "EliteCare Clinic" },
  { key: "realty", label: "Horizon Realty" },
  { key: "law", label: "LexPro Law" },
];

function Navbar({ activeDemo, onOpenDemo, onCloseDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoMenuOpen, setDemoMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
    setDemoMenuOpen(false);
  };

  const handleDemoToggle = (key) => {
    if (activeDemo === key) {
      onCloseDemo();
    } else {
      onOpenDemo(key);
    }

    setDemoMenuOpen(false);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-surface-border)] bg-[var(--color-surface-base)]/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#"
          onClick={handleNavClick}
          className="group text-lg font-black uppercase tracking-tight md:text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] focus-visible:rounded-[var(--radius-sm)]"
        >
          <span className="text-[var(--color-text-primary)] transition duration-300 group-hover:text-[var(--color-accent-violet-hover)]">
            PixelNest
          </span>{" "}
          <span className="text-[var(--color-accent-violet)]">Studio.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-text-primary)] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent-violet)] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] focus-visible:rounded-[var(--radius-sm)]"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setDemoMenuOpen(!demoMenuOpen)}
              aria-haspopup="menu"
              aria-expanded={demoMenuOpen}
              aria-controls="demo-menu-desktop"
              className={`flex items-center gap-2 rounded-[var(--radius-pill)] border px-5 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] ${
                activeDemo
                  ? "border-[var(--color-accent-violet)] bg-[var(--color-accent-violet)] text-white"
                  : "border-[var(--color-surface-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-violet)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              {activeDemo ? "Demo Live" : "Client Demos"}
              <ChevronDown size={14} aria-hidden="true" />
            </button>

            {demoMenuOpen && (
              <div
                id="demo-menu-desktop"
                role="menu"
                className="absolute right-0 mt-3 w-56 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-surface-border)] bg-[var(--color-surface-overlay)] shadow-[var(--shadow-lg)]"
              >
                {CLIENT_DEMOS.map((demo) => (
                  <button
                    key={demo.key}
                    role="menuitem"
                    aria-pressed={activeDemo === demo.key}
                    onClick={() => handleDemoToggle(demo.key)}
                    className={`w-full px-5 py-4 text-left text-xs font-semibold transition ${
                      activeDemo === demo.key
                        ? "bg-[var(--color-accent-violet)]/20 text-[var(--color-accent-violet-hover)]"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="rounded-[var(--radius-pill)] bg-[var(--color-accent-violet)] px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-[var(--color-accent-violet-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] focus-visible:rounded-[var(--radius-sm)]"
          >
            Let's Build
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          className="rounded-[var(--radius-pill)] border border-[var(--color-surface-border)] p-2 text-[var(--color-text-primary)] transition hover:border-[var(--color-accent-violet)] lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] focus-visible:rounded-[var(--radius-sm)]"
        >
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-nav-menu" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[var(--color-surface-border)] bg-[var(--color-surface-base)] lg:hidden">
          <div className="space-y-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block text-sm font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] focus-visible:rounded-[var(--radius-sm)]"
              >
                {link.label}
              </a>
            ))}

            <div className="grid gap-3 pt-3">
              {CLIENT_DEMOS.map((demo) => (
                <button
                  key={demo.key}
                  aria-pressed={activeDemo === demo.key}
                  onClick={() => handleDemoToggle(demo.key)}
                  className={`rounded-[var(--radius-md)] border px-4 py-3 text-xs font-bold uppercase tracking-widest ${
                    activeDemo === demo.key
                      ? "border-[var(--color-accent-violet)] bg-[var(--color-accent-violet)] text-white"
                      : "border-[var(--color-surface-border)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {demo.label}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-4 block rounded-[var(--radius-pill)] bg-[var(--color-accent-violet)] py-3 text-center text-xs font-bold uppercase tracking-widest text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-violet-hover)] focus-visible:rounded-[var(--radius-sm)]"
            >
              Let's Build
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;