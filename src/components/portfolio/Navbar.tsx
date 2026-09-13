import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, FileText, Menu, X } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;
const portraitUrl = `${assetBase}assets/sarfraaj-portrait.jpg`;
const resumeUrl = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Scroll indicator bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-[#18181B] pointer-events-none"
        aria-hidden="true"
      />

      {/* Sticky Minimal Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-[#E4E4E7]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <div className="h-8 w-8 rounded-full overflow-hidden border border-[#E4E4E7] shrink-0">
              <img src={portraitUrl} alt="Sarfraaj Khan" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-base tracking-tight text-[#09090B]">
                Sarfraaj Khan
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider text-[#71717A]">
                IT Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="text-sm font-medium text-[#52525B] hover:text-[#09090B] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Mobile toggle */}
          <div className="flex items-center gap-2.5">
            <a
              href={resumeUrl}
              download="Sarfraaj-Khan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#18181B] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#27272A] active:scale-95 transition-all shadow-xs"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-[#E4E4E7] text-[#09090B] hover:bg-[#F4F4F6] transition-colors cursor-pointer"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {open && (
          <div className="md:hidden border-t border-[#E4E4E7] bg-white px-4 py-3 shadow-md flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F6] rounded-lg transition-colors"
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
      className="fixed bottom-6 right-6 z-40 flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white text-[#09090B] shadow-sm hover:bg-[#F4F4F6] transition-all cursor-pointer"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

