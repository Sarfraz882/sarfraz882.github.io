import { motion } from "framer-motion";
import {
  Download, Mail, Cloud, Shield, Server, Network, Lock, Monitor,
  Users, CheckCircle2, Briefcase, GraduationCap, Award, Linkedin,
  Phone, MapPin, Building2, Layers, Send, ArrowUpRight, Sparkles,
  Terminal, Database, Globe, Github, ExternalLink, Cpu, Wrench, Check,
  Copy, CheckCheck, Clock, Activity, RefreshCw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const assetBase = import.meta.env.BASE_URL;
const AVATAR = `${assetBase}assets/sarfraaj-portrait.jpg`;
const RESUME_URL = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

// ---------- TYPEWRITER HOOK ----------
function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const currentWord = words[index];

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDuration]);

  return words[index] ? words[index].substring(0, subIndex) : "";
}

// ---------- HERO ----------
export function Hero() {
  const heroTitles = [
    "IT Systems Engineer",
    "Cloud & Microsoft 365 Specialist",
    "Infrastructure Troubleshooter",
    "Enterprise Problem Solver",
  ];
  const activeTitle = useTypewriter(heroTitles);

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-14 md:items-center">
          {/* Left Column: Hero Typography & Actions */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill with Green Pulse */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                New Delhi / NCR · Available for Full-Time & Contracts
              </span>
            </motion.div>

            {/* Editorial Display Heading with Typewriter Cycling & Blinking Cursor */}
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold tracking-tight leading-[1.08]">
              <motion.span
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="block text-foreground"
              >
                Sarfraaj Khan
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="mt-2 min-h-[1.3em] flex items-center flex-wrap"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  {activeTitle}
                </span>
                <span className="inline-block font-mono text-cyan-400 font-light ml-1 animate-cursor select-none">
                  |
                </span>
              </motion.div>
            </h1>

            {/* Subheading / Summary */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            >
              Enterprise IT Systems Administrator with <strong className="text-foreground font-semibold">3.8+ years</strong> orchestrating Microsoft 365, Azure Entra ID, endpoint security fleets, Windows Server, and high-uptime network infrastructure.
            </motion.p>

            {/* 3 Call-To-Action Buttons (Arbaaz style) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                className="group relative inline-flex min-h-[44px] items-center gap-2.5 overflow-hidden rounded-full bg-foreground px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-background transition-transform hover:scale-[1.02] shadow-md shadow-foreground/10"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-all hover:border-foreground/60 hover:bg-foreground/5"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contact Me</span>
              </a>

              <a
                href={RESUME_URL}
                download="Sarfraaj-Khan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border/80 bg-card px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-all hover:text-foreground hover:border-foreground/60 hover:bg-foreground/5"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume (PDF)</span>
              </a>
            </motion.div>

            {/* Quick Contact & Info Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60 text-xs text-muted-foreground"
            >
              <a
                href="https://wa.me/918826457998?text=Hi%20Sarfraaj%2C%20I%20would%20like%20to%20connect%20regarding%20an%20IT%20role."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10.5px] uppercase tracking-wider hover:bg-emerald-500/20 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                WhatsApp Direct
              </a>
              <a
                href="mailto:sarfaraajsince2004@gmail.com"
                className="font-mono text-[10.5px] text-muted-foreground hover:text-foreground transition-colors"
              >
                sarfaraajsince2004@gmail.com
              </a>
              <span className="text-border">•</span>
              <span className="font-mono text-[10.5px] text-muted-foreground">
                New Delhi / NCR
              </span>
            </motion.div>
          </div>

          {/* Right Column: Studio Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:col-span-5 relative z-10"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] max-h-[500px]">
              {/* Main Card Image with Gradient Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-card overflow-hidden border border-border/80 shadow-2xl">
                <img
                  src={AVATAR}
                  alt="Sarfraaj Khan — IT Support & Systems Engineer"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/80">
                    Infrastructure · Cloud · Security
                  </p>
                  <p className="font-display text-2xl font-bold">
                    Sarfraaj Khan
                  </p>
                  <p className="text-xs text-white/75 mt-0.5 font-mono">
                    IT Executive &amp; Cloud Support Specialist
                  </p>
                </div>
              </div>

              {/* Floating Stat Card Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-5 top-10 glass rounded-2xl p-3 shadow-lg"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Lane A — Cloud &amp; Identity
                </p>
                <p className="font-display text-xs sm:text-sm font-semibold text-foreground">
                  M365 · Azure · Entra ID
                </p>
              </motion.div>

              {/* Floating Stat Card Right */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-5 bottom-16 glass rounded-2xl px-3.5 py-2.5 shadow-lg"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Lane B — Enterprise Support
                </p>
                <p className="font-display text-xs sm:text-sm font-semibold text-foreground">
                  500+ Devices · 99.8% SLA
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee Ticker */}
        <LogoMarquee />
      </div>
    </section>
  );
}

// ---------- LOGO / SKILLS MARQUEE ----------
function LogoMarquee() {
  const items = [
    "Microsoft 365", "Azure / Entra ID", "Windows Server 2022", "Active Directory & GPO",
    "Microsoft Intune", "Google Workspace", "EDR / EPP Cloud Security",
    "SonicWall & VPN", "macOS & Windows 11", "PowerShell Automation",
    "Hardware Diagnostics", "ServiceNow / Jira ITSM",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="mt-16 sm:mt-20 relative overflow-hidden py-4 border-y border-border/80 bg-surface/50">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-display font-semibold text-base md:text-lg text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              {t}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

// ---------- BIG TEXT MARQUEE BANNER (Arbaaz style) ----------
export function BigMarqueeBanner({ text }: { text: string }) {
  const doubled = [text, text, text, text];
  return (
    <div className="relative -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-12 my-10 sm:my-14 overflow-hidden py-3 select-none pointer-events-none border-y border-border/40">
      <div className="flex whitespace-nowrap gap-12 animate-marquee w-max text-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold uppercase leading-[0.92] text-foreground/[0.07] tracking-tight">
        {doubled.map((t, i) => (
          <div key={i} className="inline-flex items-center gap-12">
            <span>{t}</span>
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/40 align-middle" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- SECTION HEADER (Arbaaz style) ----------
function SectionHeader({
  index, eyebrow, title, description,
}: {
  index: string; eyebrow: string; title: React.ReactNode; description?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="text-eyebrow mb-3 sm:mb-4">
        / {index} · {eyebrow}
      </p>
      <h2 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

// ---------- ABOUT (BENTO GRID) ----------
export function About() {
  const [latency, setLatency] = useState(1.18);
  const [isPinging, setIsPinging] = useState(false);
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now)
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const runDiagnostics = () => {
    setIsPinging(true);
    setTimeout(() => {
      setLatency(+(1.05 + Math.random() * 0.35).toFixed(2));
      setIsPinging(false);
    }, 600);
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="01"
          eyebrow="About & Systems"
          title={
            <>
              Resilient enterprise IT operations —{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                from
              </span>{" "}
              rapid tickets to cloud architecture.
            </>
          }
          description="A multi-disciplinary IT engineer dedicated to zero-downtime availability, bulletproof endpoint security, and frictionless enterprise cloud workflows."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1: Short Bio & Operational Philosophy (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 lg:col-span-7 paper-card p-6 sm:p-8 flex flex-col justify-between group hover:border-foreground/30 transition-all relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  / Bio &amp; Systems Philosophy
                </span>
              </div>
              <h3 className="text-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-snug">
                Engineering reliability where stability is non-negotiable.
              </h3>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                With over <strong className="text-foreground font-semibold">3.8 years</strong> in enterprise IT seats, I combine hands-on operational grit with strategic cloud administration. From managing 500+ endpoints and enforcing zero-trust Entra ID policies to deploying fleet EDR defenses and diagnosing mission-critical infrastructure, my goal is simple: eliminate downtime before it disrupts the business.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-border/80 flex flex-wrap gap-2">
              {[
                "Zero-Trust MFA",
                "M365 & Intune",
                "SonicWall Firewalls",
                "EDR / Cloud Security",
                "ITIL v4 Service Delivery",
                "PowerShell Automation",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/80 bg-surface/80 text-xs font-mono text-foreground/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/5 cursor-default"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Simulated Interactive Terminal / Diagnostics Snippet (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-12 lg:col-span-5 rounded-3xl border border-border/80 bg-black/70 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-hidden font-mono text-xs"
          >
            <div>
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-white/60 font-mono">sarfraaj@gateway:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="space-y-2 text-white/80 leading-relaxed">
                <div className="flex items-center gap-2 text-cyan-300">
                  <span>&gt;</span>
                  <span>ping cloud.infra.local -t</span>
                </div>
                <div className="text-[11px] text-white/60">
                  64 bytes from 10.240.0.1: icmp_seq=1 ttl=64 time={latency} ms
                </div>
                <div className="pt-2 text-[11px] space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="h-3.5 w-3.5 shrink-0" />
                    <span>M365 Exchange &amp; Teams: HEALTHY</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="h-3.5 w-3.5 shrink-0" />
                    <span>Entra ID SSO &amp; MFA: 100% ENFORCED</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="h-3.5 w-3.5 shrink-0" />
                    <span>Fleet EDR Defense: 500+ SHIELDED</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="h-3.5 w-3.5 shrink-0" />
                    <span>Network Gateway: 99.8% SLA UPTIME</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Action Bar */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
              <div className="text-[10px] text-white/50 font-mono">
                packet loss: 0% · latency: {latency}ms
              </div>
              <button
                type="button"
                onClick={runDiagnostics}
                disabled={isPinging}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-[11px] transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${isPinging ? "animate-spin" : ""}`} />
                <span>{isPinging ? "Scanning..." : "Ping Infra"}</span>
              </button>
            </div>
          </motion.div>

          {/* Card 3: Interactive Metrics / Key Stats (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12 lg:col-span-7 paper-card p-6 sm:p-8 hover:border-foreground/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-6">
                / Key Metrics &amp; Enterprise Track Record
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-display font-bold text-3xl sm:text-4xl text-foreground leading-none">
                    <Counter end={4} suffix="+" />
                  </div>
                  <div className="mt-2 text-xs font-semibold text-foreground">Years in IT</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">Enterprise service</div>
                </div>
                <div>
                  <div className="text-display font-bold text-3xl sm:text-4xl text-foreground leading-none">
                    <Counter end={500} suffix="+" />
                  </div>
                  <div className="mt-2 text-xs font-semibold text-foreground">Endpoints</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">Fleet managed</div>
                </div>
                <div>
                  <div className="text-display font-bold text-3xl sm:text-4xl text-foreground leading-none">
                    <Counter end={1200} suffix="+" />
                  </div>
                  <div className="mt-2 text-xs font-semibold text-foreground">Tickets Solved</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">L1/L2 SLA driven</div>
                </div>
                <div>
                  <div className="text-display font-bold text-3xl sm:text-4xl text-foreground leading-none">
                    <Counter end={99} suffix=".8%" />
                  </div>
                  <div className="mt-2 text-xs font-semibold text-foreground">SLA Compliance</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">Resolution fidelity</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-mono">Tested in high-concurrency enterprise seats</span>
              <span className="text-emerald-500 font-medium">99% Positive Feedback</span>
            </div>
          </motion.div>

          {/* Card 4: Location & Real-Time IST Timezone (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-12 lg:col-span-5 paper-card p-6 sm:p-8 flex flex-col justify-between hover:border-foreground/30 transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-wider">
                  <MapPin className="h-3.5 w-3.5 text-foreground" />
                  <span>Base Location</span>
                </div>
                <span className="font-mono text-[10.5px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-border/80 bg-surface text-muted-foreground">
                  UTC +05:30
                </span>
              </div>

              <div className="text-display font-bold text-xl sm:text-2xl text-foreground">
                New Delhi / NCR, India
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Available for worldwide remote roles and on-site / hybrid enterprise engagements.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-border/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-500" />
                <span className="font-mono text-sm font-semibold text-foreground">
                  {istTime || "Active"} IST
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-emerald-500 font-mono text-[11px] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Time
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- STATS (HIGH-IMPACT OPERATIONAL STRIP) ----------
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1400;
        const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  const stats = [
    { value: 100, suffix: "%", label: "Zero-Trust Enforcement", desc: "MFA & Conditional Access across tenants" },
    { value: 15, suffix: "m", label: "Avg Incident Triage", desc: "First response on critical tickets" },
    { value: 500, suffix: "+", label: "Fleet Coverage", desc: "Windows, macOS & Mobile secured" },
    { value: 99, suffix: ".8%", label: "Core Network Uptime", desc: "SonicWall & infrastructure reliability" },
  ];
  return (
    <section className="relative px-4 sm:px-6 md:px-10 lg:px-12 pb-12">
      <div className="max-w-7xl mx-auto paper-card p-8 md:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <div className="text-display font-bold text-4xl md:text-5xl text-foreground leading-none">
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-semibold text-foreground text-sm">{s.label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- CORE COMPETENCIES & TECHNICAL SKILLS (3 PILLARS) ----------
export function Expertise() {
  const pillars = [
    {
      pillar: "Pillar 01",
      title: "Systems & Cloud Administration",
      icon: Cloud,
      description: "Complete administration of enterprise cloud tenants, identity directories, and endpoint management policies.",
      skills: [
        "Microsoft 365 (Exchange Online, Teams, SharePoint)",
        "Microsoft Entra ID (Azure AD, SSO, MFA)",
        "Microsoft Intune (MDM/MAM, Autopilot, Compliance)",
        "Windows Server 2019 / 2022 (Active Directory DS)",
        "Group Policy Objects (GPO) & OU Management",
        "Google Workspace Administration",
        "Exchange Mail Flow, Shared Mailboxes & Security",
        "License Optimization & User Lifecycle Management",
      ],
    },
    {
      pillar: "Pillar 02",
      title: "IT Infrastructure & Networking",
      icon: Network,
      description: "Robust physical and virtual networking, security firewalls, peripheral ecosystems, and corporate meeting room tech.",
      skills: [
        "LAN / WAN Architecture & TCP/IP Routing",
        "Subnetting, VLAN Segmentation & Port Security",
        "SonicWall & Fortinet Firewall Policies",
        "Site-to-Site & Client Remote VPN Configuration",
        "Enterprise Wi-Fi APs & Controller Setup",
        "Patch Panels, Switch Stacking & Structured Cabling",
        "Network Printer Fleets, Print Servers & Spoolers",
        "Conference Room AV, Biometrics & Teams Rooms",
      ],
    },
    {
      pillar: "Pillar 03",
      title: "Troubleshooting, Security & Tooling",
      icon: Shield,
      description: "Proactive cyber defense, rapid incident escalation, diagnostic tooling, and automation workflows.",
      skills: [
        "EDR / EPP Cloud Endpoint Security & Quarantine",
        "ServiceNow & Jira Service Management (ITSM)",
        "Hardware Diagnostics (Dell, HP, Lenovo, MacBook)",
        "Remote Support (AnyDesk, TeamViewer, RDP)",
        "PowerShell Scripting & Repetitive Task Automation",
        "OS Deployment, Imaging & Driver Packages",
        "Veeam & Cloud Backup Verification",
        "Disaster Recovery & Data Migration Procedures",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="02"
          eyebrow="Core Competencies"
          title={
            <>
              Three operational pillars,{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                zero
              </span>{" "}
              downtime.
            </>
          }
          description="A structured, battle-tested skillset categorised across enterprise cloud, core network infrastructure, and high-velocity technical support."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="paper-card p-7 flex flex-col justify-between group hover:border-foreground/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {p.pillar}
                  </span>
                  <div className="h-11 w-11 rounded-2xl bg-surface border border-border/80 grid place-items-center text-foreground group-hover:scale-105 transition-transform">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-display font-bold text-2xl text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-border/80">
                  {p.skills.map((sk) => (
                    <div
                      key={sk}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/70 bg-surface/80 text-xs font-mono text-foreground/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-cyan-500/5 cursor-default shadow-xs"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- EXPERIENCE TIMELINE ----------
export function Experience() {
  const jobs = [
    {
      idx: "01",
      role: "IT Executive",
      company: "Prasatti Group Sales and Services",
      period: "May 2024 — Present",
      current: true,
      summary:
        "Head end-to-end enterprise IT operations and infrastructure: managing Microsoft 365, Azure Entra ID user lifecycle, endpoint security fleet (EDR/EPP), Google Workspace, corporate networking, and vendor contracts.",
      responsibilities: [
        "Orchestrated cloud tenant security, MFA enforcement, and Conditional Access policies.",
        "Deployed and monitored EDR / EPP across 200+ enterprise endpoints with zero security breaches.",
        "Engineered AV and biometric conference systems, cutting meeting setup disruptions by 90%.",
        "Achieved 99.8% resolution rate on internal IT escalation and support tickets.",
      ],
      tags: ["Microsoft 365", "Azure / Entra ID", "EDR / EPP", "Google Workspace", "Vendor Ops"],
    },
    {
      idx: "02",
      role: "Desktop Support Engineer · L1 & L2",
      company: "Team Computers Pvt Ltd",
      period: "Dec 2022 — Apr 2024",
      current: false,
      summary:
        "Delivered mission-critical hardware, OS, and network support across a 500+ heterogeneous device environment (Windows 10/11, macOS, iPads, mobile devices) with SLA-driven ticketing.",
      responsibilities: [
        "Diagnosed and resolved hardware faults, board replacements, and SSD/RAM upgrades.",
        "Maintained corporate Wi-Fi, SonicWall firewall policies, and managed PoE switch ports.",
        "Standardized multi-floor printer fleets, network print queues, and driver packages.",
        "Streamlined asset tracking audits and employee onboarding/offboarding workflows.",
      ],
      tags: ["Desktop L1/L2", "MacBook / iOS", "SonicWall", "PoE Switches", "Print Fleet"],
    },
    {
      idx: "03",
      role: "IT Support Technician & Network Trainee",
      company: "Enterprise Technical Services",
      period: "Aug 2021 — Nov 2022",
      current: false,
      summary:
        "Conducted first-response desktop support, OS imaging, structured network cabling, user account configuration, and helpdesk queue monitoring.",
      responsibilities: [
        "Deployed standardized Windows images via USB and network boot across workstations.",
        "Assisted in rack mounting, patch panel punch-downs, and cable management.",
        "Handled day-to-day user tickets, software installations, and VPN remote access.",
      ],
      tags: ["Hardware Diagnostics", "OS Deployment", "Patch Panels", "Ticketing", "VPN"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="03"
          eyebrow="Career Timeline"
          title={
            <>
              3.8+ years of{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                proven
              </span>{" "}
              enterprise delivery.
            </>
          }
          description="Consistent progression across enterprise IT service providers and in-house IT administration seats."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 space-y-10 before:absolute before:left-[11px] md:before:left-[19px] before:top-3 before:bottom-3 before:w-[2px] before:bg-border">
          {jobs.map((j, i) => (
            <motion.div
              key={j.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[31px] md:-left-[43px] top-6 h-5 w-5 rounded-full bg-background border-2 border-foreground grid place-items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
              </div>

              {/* Card */}
              <div className="paper-card p-6 md:p-8 hover:border-foreground/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-display font-bold text-2xl md:text-3xl text-foreground">
                        {j.role}
                      </h3>
                      {j.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10.5px] tracking-wider uppercase font-semibold">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" /> Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-muted-foreground font-medium text-sm mt-1">{j.company}</div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground md:text-right bg-surface border border-border/80 px-3 py-1 rounded-full w-fit">
                    {j.period}
                  </div>
                </div>

                <p className="text-foreground/80 text-sm md:text-[15px] leading-relaxed mt-4">
                  {j.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-5 pt-4 border-t border-border/80 space-y-2">
                  {j.responsibilities.map((r) => (
                    <div key={r} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 mt-2 shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {j.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono uppercase tracking-[0.14em] px-3 py-1 rounded-full border border-border/80 bg-surface text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
export function Projects() {
  const projects = [
    {
      n: "01",
      title: "Microsoft 365 Enterprise Administration & Hybrid Cloud",
      tag: "Cloud M365",
      icon: Cloud,
      overview: "Complete tenant administration across user lifecycle, Exchange Online mail routing, SharePoint, OneDrive, and Microsoft Teams governance for enterprise staff.",
      outcome: "Standardized licensing · zero downtime user migration · 60% faster onboarding.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "02",
      title: "Fleet-Wide EDR & Endpoint Cloud Security Rollout",
      tag: "Cyber Security",
      icon: Shield,
      overview: "Cloud-managed endpoint detection and response rolled out across 500+ corporate devices with custom quarantine rules, posture hardening, and threat playbooks.",
      outcome: "100% endpoint visibility · incidents contained in under 5 minutes.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "03",
      title: "Microsoft Entra ID (Azure AD) Lifecycle & Zero-Trust MFA",
      tag: "Identity / IAM",
      icon: Layers,
      overview: "Azure directory administration implementing Single Sign-On (SSO), Multi-Factor Authentication (MFA), Conditional Access policies, and Joiner-Mover-Leaver flow.",
      outcome: "Eliminated orphan credentials · 100% compliance on remote access audits.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "04",
      title: "Network Infrastructure, VLAN & SonicWall Firewall Setup",
      tag: "Networking",
      icon: Network,
      overview: "Structured enterprise network topology implementation including subnetting, VLAN segmentation, switch port security, Wi-Fi controller AP mapping, and secure client VPN.",
      outcome: "99.9% uptime · isolated guest and sensitive corporate network traffic.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "05",
      title: "Centralized Print Server & Infrastructure Overhaul",
      tag: "Infrastructure",
      icon: Terminal,
      overview: "Consolidated print server infrastructure supporting multi-floor printer fleets, Brady label printers, driver standardization, and queue monitoring.",
      outcome: "80% drop in print spooler tickets · seamless zero-config user printing.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      n: "06",
      title: "Smart Conference Room AV & Hybrid Collaboration Setup",
      tag: "Smart AV",
      icon: Monitor,
      overview: "Standardized corporate boardrooms with interactive projectors, Teams Rooms hardware, microphone arrays, biometric access integration, and wireless presentation bridges.",
      outcome: "Zero-friction hybrid meetings · 95% reduction in meeting setup calls.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="04"
          eyebrow="Featured Projects"
          title={
            <>
              Enterprise deployments,{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                tangible
              </span>{" "}
              impact.
            </>
          }
          description="High-impact initiatives engineered across cloud tenancy, endpoint defense, and enterprise physical infrastructure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="paper-card p-7 flex flex-col justify-between hover:border-foreground/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                    {p.n}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border border-border/80 bg-surface text-foreground">
                    {p.tag}
                  </span>
                </div>

                <div className="h-12 w-12 rounded-2xl bg-surface border border-border/80 text-foreground grid place-items-center mb-5 group-hover:scale-105 transition-transform">
                  <p.icon className="h-6 w-6" />
                </div>

                <h3 className="text-display font-bold text-xl leading-tight text-foreground group-hover:text-muted-foreground transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.overview}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border/80">
                <div className="flex items-start gap-2.5 text-xs text-foreground font-medium mb-4">
                  <Sparkles className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{p.outcome}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-2 px-3 text-xs font-mono font-medium border border-border/80 bg-surface text-foreground hover:bg-foreground/5 transition-all"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Repository</span>
                  </a>
                  <a
                    href={p.demo}
                    className="group/btn flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-2 px-3 text-xs font-mono font-medium bg-foreground text-background hover:bg-foreground/85 transition-all"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills is exported for backward compatibility
export function Skills() { return null; }

// ---------- CERTIFICATIONS ----------
export function Certifications() {
  const certs = [
    { name: "Microsoft Azure Administrator", code: "AZ-104", status: "In Progress", issuer: "Microsoft" },
    { name: "Microsoft 365 Certified: Endpoint Administrator", code: "MD-102", status: "Planned", issuer: "Microsoft" },
    { name: "CompTIA Network+ (N10-008)", code: "Network+", status: "Certified", issuer: "CompTIA" },
    { name: "Windows Server Hybrid Administrator", code: "AZ-800", status: "In Progress", issuer: "Microsoft" },
    { name: "Google Workspace Administrator", code: "GWA", status: "Planned", issuer: "Google" },
    { name: "ITIL Foundation in IT Service Management", code: "ITIL 4", status: "Certified", issuer: "Axelos" },
  ];

  const badge = (s: string) => {
    if (s === "Certified") return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    if (s === "In Progress") return "bg-surface text-foreground border-border/80";
    return "bg-surface text-muted-foreground border-border/60";
  };

  return (
    <section id="certifications" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="05"
          eyebrow="Credentials"
          title={
            <>
              Enterprise certifications{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                &amp;
              </span>{" "}
              qualifications.
            </>
          }
          description="Verified technical competencies backed by industry-standard accreditation bodies."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="paper-card p-6 hover:border-foreground/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-5">
                  <div className="h-11 w-11 rounded-2xl bg-surface border border-border/80 text-foreground grid place-items-center">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border ${badge(c.status)}`}>
                    {c.status}
                  </span>
                </div>
                <div className="font-mono text-xs text-muted-foreground mb-1">{c.code} · {c.issuer}</div>
                <h3 className="text-display font-bold text-lg text-foreground">{c.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
export function Testimonials() {
  const items = [
    { name: "Operations Lead", role: "Prasatti Group", quote: "Sarfraaj takes full ownership from the first ticket to the final rollout. Our cloud tenancy, security, and hardware just work when he is on it." },
    { name: "Service Delivery Manager", role: "Team Computers", quote: "Reliable, calm under high-pressure escalations, and technically sharp. A trusted safe pair of hands for enterprise-grade support." },
    { name: "Enterprise Systems Stakeholder", role: "Corporate Client", quote: "Troubleshoots complex networking and cloud identity issues swiftly and communicates clearly to non-technical staff." },
  ];
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="06"
          eyebrow="Recommendations"
          title={
            <>
              Stakeholder{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                feedback
              </span>{" "}
              &amp; trust.
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="paper-card p-7 flex flex-col justify-between hover:border-foreground/30 transition-all"
            >
              <div>
                <div className="font-serif-italic italic text-5xl text-muted-foreground/30 leading-none">&ldquo;</div>
                <p className="mt-3 text-sm md:text-[15px] text-foreground/85 leading-relaxed font-normal">{t.quote}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-border/80">
                <div className="font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT ----------
export function Contact() {
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText("sarfaraajsince2004@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                reliable.
              </span>
            </>
          }
          description="Open to enterprise IT roles, systems administrator opportunities, and complex infrastructure challenges."
        />

        {/* Quick Direct Action Dock */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="group relative inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-4 py-2 font-mono text-xs text-foreground hover:border-foreground/50 hover:bg-foreground/5 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            {copiedEmail ? (
              <>
                <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span>Copy Email: sarfaraajsince2004@gmail.com</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/918826457998?text=Hi%20Sarfraaj%2C%20I%20would%20like%20to%20connect%20regarding%20an%20IT%20role."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sarfraaj-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-4 py-2 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href="https://github.com/Sarfraz882"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface px-4 py-2 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          {/* Contact Direct Links */}
          <div className="grid gap-3">
            {[
              {
                icon: Mail,
                label: "Direct Email",
                value: "sarfaraajsince2004@gmail.com",
                href: "mailto:sarfaraajsince2004@gmail.com",
                copyable: true,
              },
              { icon: Phone, label: "Phone", value: "+91 88264 57998", href: "tel:+918826457998" },
              { icon: MapPin, label: "Location", value: "New Delhi / NCR · India", href: "https://www.google.com/maps/place/New+Delhi", external: true },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sarfraaj-engineer", href: "https://www.linkedin.com/in/sarfraaj-engineer/", external: true },
              { icon: Github, label: "GitHub", value: "github.com/Sarfraz882", href: "https://github.com/Sarfraz882", external: true },
              { icon: Building2, label: "Current Role", value: "Prasatti Group · IT Executive", href: "https://www.linkedin.com/in/sarfraaj-engineer/", external: true },
            ].map((c) => (
              <div
                key={c.label}
                className="paper-card p-4 flex items-center justify-between gap-4 hover:border-foreground/30 transition-all group relative"
              >
                <a
                  href={c.href}
                  target={"external" in c && c.external ? "_blank" : undefined}
                  rel={"external" in c && c.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 min-w-0 flex-1"
                >
                  <div className="h-10 w-10 rounded-xl bg-surface border border-border/80 text-foreground grid place-items-center group-hover:scale-105 transition-transform shrink-0">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-semibold truncate text-foreground group-hover:text-muted-foreground transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>

                {"copyable" in c && c.copyable && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    title="Copy Email Address"
                    className="h-8 px-2.5 rounded-lg border border-border/80 bg-surface/80 hover:bg-foreground/10 text-muted-foreground hover:text-foreground text-xs font-mono inline-flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-[10.5px] text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span className="text-[10.5px]">Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quick Message Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = String(fd.get("name") || "");
              const email = String(fd.get("email") || "");
              const company = String(fd.get("company") || "");
              const message = String(fd.get("message") || "");
              const subject = `Portfolio Inquiry from ${name}`;
              const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;
              window.location.href = `mailto:sarfaraajsince2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              setSent(true);
            }}
            className="paper-card p-6 md:p-8 space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Company" name="company" placeholder="Company / Organization" />
            <div>
              <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="How can I assist your enterprise IT infrastructure?"
                className="w-full rounded-2xl bg-surface border border-border/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/60 transition"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-xs text-muted-foreground font-mono">
                {sent ? "✓ Message client opened — thank you." : "Direct inquiry via email."}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs font-mono font-semibold uppercase tracking-[0.16em] bg-foreground text-background hover:bg-foreground/85 active:scale-95 transition-all cursor-pointer shadow-sm"
              >
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating Clipboard Toast Feedback */}
      {copiedEmail && (
        <div className="fixed bottom-6 right-6 z-50 rounded-full bg-neutral-900 text-white border border-neutral-700 px-4 py-2.5 font-mono text-xs shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-2">
          <CheckCheck className="h-4 w-4 text-emerald-400" />
          <span>sarfaraajsince2004@gmail.com copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}

function Field(props: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={props.name} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 block">{props.label}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        placeholder={props.placeholder}
        className="w-full rounded-2xl bg-surface border border-border/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/60 transition"
      />
    </div>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-6 md:px-10 lg:px-12 border-t border-border/80 mt-10 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 items-start">
          <div>
            <div className="text-display font-bold text-3xl sm:text-4xl text-foreground leading-tight">
              Let&apos;s engineer something{" "}
              <span className="font-serif-italic italic font-normal text-muted-foreground">
                reliable.
              </span>
            </div>
            <p className="mt-3 text-muted-foreground text-sm max-w-sm leading-relaxed">
              Available for full-time IT executive, IT support engineer, and systems administrator opportunities.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={RESUME_URL}
                download="Sarfraaj-Khan-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 text-foreground text-xs font-mono uppercase tracking-wider bg-card hover:bg-foreground/5 transition-all"
              >
                <Download className="h-3.5 w-3.5" /> Download Resume
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Navigation</div>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Core Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Featured Projects", href: "#projects" },
                { label: "Certifications", href: "#certifications" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Connect</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/Sarfraz882" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sarfraaj-engineer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:sarfaraajsince2004@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
              <li>
                <a href="tel:+918826457998" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> Phone
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/80 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>All Systems Operational · SLA 99.8%</span>
          </div>
          <div className="text-center md:text-right">
            <span>Crafted with precision &amp; code. · © 2026 Sarfraaj Khan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Keep Briefcase import used
void Briefcase;

