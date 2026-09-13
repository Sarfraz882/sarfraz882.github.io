import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, FileText, Menu, Moon, Sun, X, Mail } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;
const portraitUrl = `${assetBase}assets/sarfraaj-portrait.jpg`;
const resumeUrl = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const stored = localStorage.getItem("theme");
      if (stored !== null) return stored === "dark";
      return document.documentElement.classList.contains("dark");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const isDark = stored !== null ? stored === "dark" : document.documentElement.classList.contains("dark");
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  return { dark, toggle };
}

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Top Fixed Scroll Indicator (matching arbaazcodes) */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[110] h-[2px] origin-left bg-foreground/70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Sticky, floating pill-style navbar centered at the top */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1120px,94%)]">
        <div className="backdrop-blur-md bg-white/75 dark:bg-black/45 border border-black/10 dark:border-white/10 rounded-full px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between transition-all">
          {/* Brand & Interactive Status Pill */}
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
            <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full overflow-hidden border border-foreground/15 shadow-sm group-hover:scale-105 transition-transform">
              <img src={portraitUrl} alt="Sarfraaj Khan" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-foreground">
                Sarfraaj Khan
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface/80 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                Available for opportunities
              </span>
            </div>
          </a>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-1.5 font-sans text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-foreground/5 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Action Group: Theme Toggle & Resume */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggle}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-surface/60 text-foreground transition-all duration-200 hover:bg-foreground/10 hover:border-foreground/40 active:scale-95 cursor-pointer"
            >
              {dark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-foreground" />}
            </button>

            {/* Resume Button */}
            <a
              href={resumeUrl}
              download="Sarfraaj-Khan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 sm:px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-background transition-all duration-200 hover:bg-foreground/85 active:scale-95 shadow-sm"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-surface/60 text-foreground hover:bg-foreground/10 transition-all cursor-pointer"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Collapsible Drawer */}
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-border/80 bg-popover/95 backdrop-blur-2xl px-5 py-4 shadow-2xl flex flex-col gap-1.5 animate-in fade-in duration-200">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
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
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 h-11 w-11 grid place-items-center rounded-full bg-card border border-border/80 text-foreground shadow-lg hover:scale-110 hover:border-foreground/40 transition-all cursor-pointer"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

