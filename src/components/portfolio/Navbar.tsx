import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, FileText, Menu, X, Sparkles } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;
const portraitUrl = `${assetBase}assets/sarfraaj-portrait.jpg`;
const resumeUrl = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Dynamic Scroll progress indicator */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[100] h-[2.5px] origin-left bg-gradient-to-r from-sky-400 via-teal-400 to-indigo-500 pointer-events-none shadow-[0_0_8px_rgba(56,189,248,0.6)]"
        aria-hidden="true"
      />

      {/* Floating Glassmorphic Header */}
      <header className="sticky top-0 z-50 w-full bg-[#07080C]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Name with Live Status Indicator */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative h-9 w-9 rounded-full overflow-hidden border border-white/20 p-0.5 bg-white/5 shrink-0 group-hover:border-sky-400/60 transition-colors">
              <img
                src={portraitUrl}
                alt="Sarfraaj Khan"
                className="h-full w-full rounded-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-[#07080C]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  Sarfraaj Khan
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  <Sparkles className="h-2.5 w-2.5" />
                  PRO
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-400 tracking-wide">
                IT Systems &amp; Cloud Infra
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 backdrop-blur-md">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download="Sarfraaj-Khan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 px-3.5 py-1.5 font-mono text-xs font-semibold text-white hover:border-sky-400/40 active:scale-95 transition-all shadow-sm"
            >
              <FileText className="h-3.5 w-3.5 text-sky-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#0B0E14]/95 backdrop-blur-xl px-4 py-3 shadow-xl flex flex-col gap-1.5">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-[#0D1117]/85 backdrop-blur-lg text-slate-200 shadow-lg hover:border-sky-400/50 hover:text-white hover:bg-[#1E293B] transition-all cursor-pointer"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}


