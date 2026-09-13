import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, FileText, Menu, X, ArrowUpRight } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;
const portraitUrl = `${assetBase}assets/sarfraaj-portrait.jpg`;
const resumeUrl = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Skills" },
  { id: "projects", label: "Projects" },
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
      {/* Scroll indicator bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-[#2563EB] pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Glass Pill Navigation Bar */}
      <div className="sticky top-4 z-50 w-full px-4 sm:px-6">
        <header className="max-w-[1140px] mx-auto h-14 px-3 sm:px-5 flex items-center justify-between rounded-full bg-white/75 backdrop-blur-md border border-slate-200/60 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.03)] transition-all">
          {/* Left: Brand Monogram & Name */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200/80 p-0.5 bg-slate-100 shrink-0 group-hover:scale-105 transition-transform">
              <img
                src={portraitUrl}
                alt="Sarfraaj Khan"
                className="h-full w-full rounded-full object-cover object-top"
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-sm tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                Sarfraaj Khan
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
                / Systems
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="px-3 py-1.5 text-xs font-medium text-[#475569] hover:text-[#0F172A] hover:bg-slate-100/80 rounded-full transition-all"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Get in Touch CTA & Resume */}
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Sarfraaj-Khan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/70 px-3 py-1.5 font-mono text-xs font-medium text-[#475569] hover:text-[#0F172A] transition-all"
            >
              <FileText className="h-3 w-3 text-[#2563EB]" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0F172A] px-4 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 active:scale-95 transition-all shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 text-[#0F172A] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Drawer */}
        {open && (
          <div className="md:hidden max-w-[1140px] mx-auto mt-2 rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl p-3 shadow-xl flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 rounded-xl transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download="Sarfraaj-Khan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#2563EB] hover:bg-blue-50 rounded-xl transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        )}
      </div>
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
      className="fixed bottom-6 right-6 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-md text-[#0F172A] shadow-md hover:bg-white transition-all cursor-pointer"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}



