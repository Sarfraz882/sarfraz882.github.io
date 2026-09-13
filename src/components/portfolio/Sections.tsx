import {
  Download, Mail, Cloud, Shield, Server, Network, Lock, Monitor,
  Users, CheckCircle2, Briefcase, GraduationCap, Award, Linkedin,
  Phone, MapPin, Building2, Layers, Send, ArrowUpRight, Sparkles,
  Terminal, Database, Globe, Github, ExternalLink, Cpu, Wrench, Check,
  Copy, CheckCheck, Clock, FileText,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const assetBase = import.meta.env.BASE_URL;
const AVATAR = `${assetBase}assets/sarfraaj-portrait.jpg`;
const RESUME_URL = `${assetBase}assets/Sarfraaj-Khan-Resume.pdf`;

// ---------- SECTION HEADER ----------
function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
          {index}
        </span>
        <span className="text-white/20">•</span>
        <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-400 text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

// ---------- HERO ----------
export function Hero() {
  return (
    <section id="top" className="pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="md:col-span-7">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-medium text-emerald-300">
                Available for work · New Delhi / NCR &amp; Remote
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Sarfraaj Khan
            </h1>
            <p className="mt-3 text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">
              IT Systems &amp; Cloud Infrastructure Engineer
            </p>

            {/* Concise Value Proposition */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Enterprise Systems Administrator with <strong className="text-white font-semibold">3.8+ years</strong> orchestrating Microsoft 365 tenants, Azure Entra ID zero-trust policies, endpoint security fleets, Windows Server, and high-uptime networks.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.3)] active:scale-98 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass-card px-5 py-2.5 text-sm font-medium text-white hover:border-sky-400/40 active:scale-98 transition-all"
              >
                <Mail className="h-4 w-4 text-sky-400" />
                <span>Contact Direct</span>
              </a>

              <a
                href={RESUME_URL}
                download="Sarfraaj-Khan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl glass-card px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:border-sky-400/40 active:scale-98 transition-all"
              >
                <Download className="h-4 w-4 text-slate-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Contact Quick Info */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href="mailto:sarfaraajsince2004@gmail.com"
                className="hover:text-sky-300 transition-colors hover:underline"
              >
                sarfaraajsince2004@gmail.com
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://wa.me/918826457998"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors hover:underline"
              >
                +91 88264 57998
              </a>
              <span className="text-white/20">•</span>
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Right Column: Clean Studio Portrait in Floating Glass Card */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-[340px] rounded-2xl glass-card p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
              {/* Subtle back ambient glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-900 border border-white/10">
                <img
                  src={AVATAR}
                  alt="Sarfraaj Khan"
                  className="h-full w-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative mt-3.5 px-1 py-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-white">Sarfraaj Khan</span>
                  <span className="font-mono text-xs text-sky-400">IT Systems Executive</span>
                </div>
                <div className="flex items-center justify-between mt-1 text-xs font-mono text-slate-400">
                  <span>Prasatti Group · M365 &amp; Infra</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    99.8% SLA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- ABOUT ----------
export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="01"
          eyebrow="About & Background"
          title="Resilient enterprise IT operations & zero-downtime systems administration."
          description="A dedicated systems engineer with hands-on enterprise tenure across cloud tenancy, endpoint fleets, network architecture, and user lifecycle support."
        />

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div className="md:col-span-7 space-y-4 text-base text-slate-300 leading-relaxed">
            <p>
              I specialize in maintaining dependable enterprise infrastructure where uptime and security are non-negotiable. Over <strong className="text-white">3.8+ years</strong> in active service delivery, I have managed heterogeneous environments supporting 500+ endpoints across Windows 11, macOS, and mobile devices.
            </p>
            <p>
              My focus spans end-to-end administration: Microsoft 365, Azure Entra ID (SSO, MFA, Conditional Access), fleet-wide EDR cloud defense, SonicWall security policies, and rapid L1/L2 incident resolution.
            </p>

            {/* Diagnostic / Health terminal card */}
            <div className="mt-6 rounded-xl border border-white/10 bg-[#0B0E14]/80 backdrop-blur-md p-4 font-mono text-xs text-slate-200 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-slate-400">
                <span className="flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-sky-400" />
                  sarfraaj@infra-health:~
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  TELEMETRY LIVE
                </span>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Microsoft 365 Tenant: All Services Operational</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Azure Entra ID: Zero-Trust MFA Enforced (100%)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Endpoint Fleet: 500+ Devices Shielded via EDR</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Network Gateway SLA: 99.8% Resolution Fidelity</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Metrics */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {[
              { num: "3.8+", label: "Years Experience", desc: "Enterprise IT operations" },
              { num: "500+", label: "Fleet Endpoints", desc: "Windows, macOS, Mobile" },
              { num: "1,200+", label: "Tickets Resolved", desc: "L1/L2 SLA compliance" },
              { num: "99.8%", label: "SLA Adherence", desc: "Resolution fidelity" },
            ].map((m) => (
              <div key={m.label} className="glass-card p-5 group hover:border-sky-400/40">
                <div className="text-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                  {m.num}
                </div>
                <div className="mt-2 text-sm font-semibold text-white">{m.label}</div>
                <div className="mt-0.5 text-xs text-slate-400">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES / CRAFT ----------
export function Services() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Tenancy & Identity Governance",
      desc: "Architecting zero-trust identity frameworks, Conditional Access policies, Exchange Online routing, and unified Microsoft 365 / Google Workspace administration.",
      tags: ["Microsoft 365", "Azure Entra ID", "Exchange Online", "MFA / SSO"],
    },
    {
      icon: Shield,
      title: "Fleet Endpoint Defense & MDM",
      desc: "Deploying enterprise EDR/EPP agent security across 500+ devices, enforcing Intune compliance baselines, automated patching, BitLocker encryption, and threat isolation.",
      tags: ["EDR / EPP", "Microsoft Intune", "Windows 11 / Mac", "Patching"],
    },
    {
      icon: Network,
      title: "Enterprise Networking & Security",
      desc: "Implementing secure network architectures with SonicWall firewalls, VLAN segmentation, switch stacking, PoE infrastructure, and secure client/site-to-site VPNs.",
      tags: ["SonicWall", "VLAN Segmentation", "Switch Stacking", "Client VPN"],
    },
    {
      icon: Server,
      title: "Systems Engineering & ITIL Service",
      desc: "Administering Windows Server 2022 Active Directory DS, GPO policies, PowerShell automation, ITIL SLA ticketing compliance, and smart biometric conference setups.",
      tags: ["Active Directory", "PowerShell", "ITSM / ITIL", "Teams Rooms"],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="02"
          eyebrow="Services & Operational Craft"
          title="Core disciplines engineered for 99.8% uptime & zero breaches."
          description="Comprehensive technical capabilities spanning cloud tenancy, endpoint fleet defense, network infrastructure, and mission-critical systems."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Soft ambient corner glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="h-11 w-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 grid place-items-center mb-5 group-hover:border-sky-400/50 group-hover:scale-105 transition-all">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="badge-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS (TABBED SHOWCASE) ----------
export function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "cloud" | "security" | "networking">("all");

  const projects = [
    {
      id: "m365",
      category: "cloud",
      title: "Microsoft 365 Enterprise Administration & Hybrid Cloud",
      tag: "Cloud M365",
      overview:
        "End-to-end tenant administration across user lifecycle, Exchange Online mail flow, SharePoint security, OneDrive data governance, and Microsoft Teams rooms.",
      outcome: "Standardized licensing · zero-downtime mailbox migration · 60% faster onboarding.",
      stack: ["Exchange Online", "SharePoint", "PowerShell", "Teams Admin"],
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      id: "edr",
      category: "security",
      title: "Fleet-Wide EDR & Endpoint Cloud Security Rollout",
      tag: "Cyber Defense",
      overview:
        "Cloud-managed endpoint detection and response deployed across 500+ heterogeneous corporate devices with automated threat isolation and vulnerability posture hardening.",
      outcome: "100% endpoint visibility · threats isolated in under 5 minutes.",
      stack: ["EDR / EPP", "BitLocker", "Intune Baselines", "Threat Hunting"],
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      id: "entra",
      category: "cloud",
      title: "Microsoft Entra ID Lifecycle & Zero-Trust MFA",
      tag: "Identity / IAM",
      overview:
        "Identity directory architecture implementing Single Sign-On (SSO), Multi-Factor Authentication (MFA), Conditional Access policies, and automated Joiner-Mover-Leaver workflows.",
      outcome: "Eliminated orphan credentials · 100% compliance on remote access audits.",
      stack: ["Azure Entra ID", "SSO / SAML", "Conditional Access", "JML Flow"],
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      id: "sonicwall",
      category: "networking",
      title: "Network Infrastructure, VLAN & SonicWall Firewall Setup",
      tag: "Networking",
      overview:
        "Structured enterprise network topology implementation including subnetting, VLAN segmentation, switch port security, Wi-Fi controller AP mapping, and secure client VPN.",
      outcome: "99.9% uptime · isolated guest and sensitive corporate network traffic.",
      stack: ["SonicWall", "VLANs", "Managed PoE", "IPSec / SSL VPN"],
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      id: "print",
      category: "networking",
      title: "Centralized Print Server & Infrastructure Overhaul",
      tag: "Infrastructure",
      overview:
        "Consolidated print server architecture supporting multi-floor printer fleets, Brady label printers, driver standardization, and print queue health monitoring.",
      outcome: "80% drop in spooler tickets · seamless zero-config user printing.",
      stack: ["Windows Server", "Print Management", "GPO Mapping", "Network Spooler"],
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      id: "av",
      category: "networking",
      title: "Smart Conference Room AV & Hybrid Collaboration Setup",
      tag: "Smart AV",
      overview:
        "Standardized corporate boardrooms with interactive projectors, Teams Rooms hardware, microphone arrays, biometric access integration, and wireless presentation bridges.",
      outcome: "Zero-friction hybrid meetings · 95% reduction in meeting setup calls.",
      stack: ["Teams Rooms", "Biometrics", "Ceiling Arrays", "HDMI Over IP"],
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
  ];

  const TABS = [
    { id: "all", label: "All Projects" },
    { id: "cloud", label: "Cloud & Identity" },
    { id: "security", label: "Cyber Defense" },
    { id: "networking", label: "Networking & Infra" },
  ] as const;

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="03"
          eyebrow="Selected Works & Deployments"
          title="Enterprise deployments, security rollouts & infrastructure engineering."
          description="High-impact initiatives delivered across cloud administration, endpoint defense, and enterprise networking."
        />

        {/* Multi-Category Interactive Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-xl font-mono text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-sky-500/20 text-sky-300 border border-sky-400/50 shadow-[0_0_16px_rgba(56,189,248,0.25)]"
                    : "bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="glass-card p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-tag">{p.tag}</span>
                  <span className="text-[11px] font-mono text-slate-400">Enterprise</span>
                </div>

                <h3 className="text-display text-lg font-bold text-white group-hover:text-sky-300 leading-snug transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {p.overview}
                </p>

                {/* Stack tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((st) => (
                    <span
                      key={st}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <div className="text-xs text-slate-200 font-medium mb-4 flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{p.outcome}</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] py-2 px-3 text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-sky-400/40 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={p.demo}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-sky-500/20 border border-sky-400/40 py-2 px-3 text-xs font-mono font-medium text-sky-300 hover:bg-sky-500/30 hover:text-white transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SKILLS ----------
export function Skills() {
  const categories = [
    {
      title: "Systems & Cloud Administration",
      desc: "Enterprise cloud tenancy, identity directories, and fleet endpoint policies.",
      skills: [
        "Microsoft 365 (Exchange, Teams, SharePoint)",
        "Microsoft Entra ID (Azure AD, SSO, MFA)",
        "Microsoft Intune (MDM, Autopilot)",
        "Windows Server 2019 / 2022 (Active Directory DS)",
        "Group Policy Objects (GPO) & OU Hierarchy",
        "Google Workspace Administration",
        "Exchange Mail Routing & Security",
        "License Optimization & User Lifecycle",
      ],
    },
    {
      title: "IT Infrastructure & Networking",
      desc: "Physical & virtual network architecture, firewalls, and conference ecosystems.",
      skills: [
        "LAN / WAN & TCP/IP Routing",
        "Subnetting & VLAN Segmentation",
        "SonicWall & Fortinet Firewall Policies",
        "Client & Site-to-Site VPN Setup",
        "Enterprise Wi-Fi APs & Controllers",
        "Patch Panels, Switch Stacking & Cabling",
        "Print Servers & Network Spoolers",
        "Smart AV, Biometrics & Teams Rooms",
      ],
    },
    {
      title: "Troubleshooting, Security & Tooling",
      desc: "Cyber defense posture, diagnostics, disaster recovery, and task automation.",
      skills: [
        "EDR / EPP Cloud Endpoint Security",
        "ServiceNow & Jira Service Management (ITSM)",
        "Hardware Diagnostics (Dell, HP, Lenovo, Mac)",
        "Remote Support (AnyDesk, TeamViewer, RDP)",
        "PowerShell Scripting & Automation",
        "OS Deployment, Imaging & Drivers",
        "Veeam & Cloud Backup Verification",
        "Disaster Recovery & Data Migration",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="04"
          eyebrow="Skills & Arsenal"
          title="Categorized technical competencies & operational toolkit."
          description="Structured across enterprise cloud administration, network infrastructure, and high-velocity systems support."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="glass-card p-6 flex flex-col justify-between group">
              <div>
                <h3 className="text-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  {c.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
                  {c.skills.map((sk) => (
                    <span key={sk} className="badge-tag">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Expertise = Skills;

// ---------- EXPERIENCE ----------
export function Experience() {
  const jobs = [
    {
      role: "IT Executive",
      company: "Prasatti Group Sales and Services",
      period: "May 2024 — Present",
      current: true,
      summary:
        "Head end-to-end enterprise IT operations: managing Microsoft 365 tenants, Azure Entra ID user lifecycle, endpoint security (EDR/EPP), Google Workspace, network infrastructure, and vendor renewals.",
      responsibilities: [
        "Orchestrated cloud tenant security, MFA enforcement, and Conditional Access policies.",
        "Deployed and monitored EDR across 200+ enterprise endpoints with zero security breaches.",
        "Engineered AV and biometric conference systems, cutting meeting setup disruptions by 90%.",
        "Maintained 99.8% resolution rate on internal IT escalation and support tickets.",
      ],
      tags: ["Microsoft 365", "Azure / Entra ID", "EDR / EPP", "Google Workspace", "Vendor Ops"],
    },
    {
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
      tags: ["Desktop L1/L2", "MacBook / macOS", "SonicWall", "PoE Switches", "Print Fleet"],
    },
    {
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
      tags: ["Hardware Diagnostics", "OS Deployment", "Patch Panels", "ITSM Ticketing", "VPN"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="05"
          eyebrow="Experience & Career"
          title="Chronological timeline of enterprise service delivery."
          description="Consistent progression across enterprise IT service providers and in-house IT administration roles."
        />

        <div className="space-y-6">
          {jobs.map((j) => (
            <div key={j.role} className="glass-card p-6 sm:p-8 group hover:border-sky-400/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-display text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {j.role}
                    </h3>
                    {j.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current Seat
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-slate-300 mt-1">{j.company}</div>
                </div>
                <div className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-md w-fit">
                  {j.period}
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {j.summary}
              </p>

              <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-2">
                {j.responsibilities.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {j.tags.map((t) => (
                  <span key={t} className="badge-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

  return (
    <section id="certifications" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="06"
          eyebrow="Industry Credentials"
          title="Certifications & professional qualifications."
          description="Recognized credentials validating enterprise cloud administration, network engineering, and ITIL service governance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="glass-card p-6 flex flex-col justify-between group hover:border-sky-400/40">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-sky-400 font-semibold">{c.code}</span>
                  <span
                    className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${
                      c.status === "Certified"
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        : "bg-sky-500/10 text-sky-300 border-sky-500/30"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-white group-hover:text-sky-300 transition-colors">{c.name}</h3>
                <div className="text-xs text-slate-400 mt-1 font-mono">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- TESTIMONIALS ----------
export function Testimonials() {
  const items = [
    {
      name: "Operations Lead",
      role: "Prasatti Group",
      quote:
        "Sarfraaj takes complete ownership from user tickets to critical cloud infrastructure rollouts. Our systems, M365 tenancy, and hardware run with zero friction.",
    },
    {
      name: "Service Delivery Manager",
      role: "Team Computers",
      quote:
        "Reliable, calm under high-pressure escalations, and technically sharp. A trusted professional for enterprise IT support and hardware maintenance.",
    },
    {
      name: "Enterprise Systems Stakeholder",
      role: "Corporate Client",
      quote:
        "Quickly troubleshoots complex networking and cloud identity issues while communicating clearly with both technical and non-technical teams.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="07"
          eyebrow="Recommendations"
          title="Colleague feedback & stakeholder trust."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="glass-card p-6 flex flex-col justify-between group hover:border-sky-400/40">
              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <div className="font-semibold text-sm text-white">{t.name}</div>
                <div className="text-xs text-sky-400 font-mono mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT (FULL-WIDTH GLASS BANNER) ----------
export function Contact() {
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sarfaraajsince2004@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="08"
          eyebrow="Contact & Connect"
          title="Let's engineer reliable infrastructure together."
          description="Open to enterprise IT executive, systems administrator, and cloud infrastructure opportunities across Delhi NCR and remote."
        />

        {/* Action Pills Banner */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-xl glass-card px-4 py-2.5 font-mono text-xs text-white hover:border-sky-400/50 transition-all cursor-pointer shadow-sm"
          >
            {copiedEmail ? (
              <>
                <CheckCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-sky-400" />
                <span>Copy: sarfaraajsince2004@gmail.com</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/918826457998?text=Hi%20Sarfraaj%2C%20I%20would%20like%20to%20connect%20regarding%20an%20IT%20role."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 font-mono text-xs text-emerald-300 hover:bg-emerald-500/20 transition-colors shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sarfraaj-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass-card px-4 py-2.5 font-mono text-xs text-slate-300 hover:text-white hover:border-sky-400/40 transition-colors shadow-sm"
          >
            <Linkedin className="h-4 w-4 text-sky-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Sarfraz882"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl glass-card px-4 py-2.5 font-mono text-xs text-slate-300 hover:text-white hover:border-sky-400/40 transition-colors shadow-sm"
          >
            <Github className="h-4 w-4 text-slate-300" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Direct channels */}
          <div className="md:col-span-5 space-y-3">
            {[
              { icon: Mail, label: "Email Address", value: "sarfaraajsince2004@gmail.com", href: "mailto:sarfaraajsince2004@gmail.com" },
              { icon: Phone, label: "Phone Direct", value: "+91 88264 57998", href: "tel:+918826457998" },
              { icon: MapPin, label: "Location", value: "New Delhi / NCR · India", href: "https://maps.google.com/?q=New+Delhi", external: true },
              { icon: Building2, label: "Current Seat", value: "Prasatti Group · IT Executive", href: "https://www.linkedin.com/in/sarfraaj-engineer/", external: true },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={"external" in c && c.external ? "_blank" : undefined}
                rel={"external" in c && c.external ? "noopener noreferrer" : undefined}
                className="glass-card p-4 flex items-center gap-3.5 hover:border-sky-400/50 transition-all block group"
              >
                <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 grid place-items-center shrink-0 group-hover:scale-105 transition-transform">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{c.label}</div>
                  <div className="text-sm font-semibold text-white group-hover:text-sky-300 truncate transition-colors">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick email form in glass card */}
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
            className="md:col-span-7 glass-card p-6 sm:p-8 space-y-4 relative overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Name
                </label>
                <input
                  id="form-name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all"
                />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Email
                </label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="form-company" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Company / Organization
              </label>
              <input
                id="form-company"
                name="company"
                placeholder="Company Name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all"
              />
            </div>

            <div>
              <label htmlFor="form-message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                id="form-message"
                name="message"
                required
                rows={4}
                placeholder="How can I assist your enterprise IT infrastructure?"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] transition-all resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400 font-mono">
                {sent ? "✓ Mail client launched" : "Direct handoff to mail client"}
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-slate-950 active:scale-98 transition-all cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              >
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5 stroke-[2.5]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
export function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.08] bg-black/40 backdrop-blur-md">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300">All Systems Operational · SLA 99.8%</span>
          </div>
          <div>
            © 2026 Sarfraaj Khan · Enterprise IT &amp; Cloud Infrastructure
          </div>
        </div>
      </div>
    </footer>
  );
}

// Backward compatibility exports
export function Stats() { return null; }
export function BigMarqueeBanner() { return null; }
void Briefcase;
void GraduationCap;
void Users;
void CheckCircle2;
void Clock;
void FileText;

// Keep Briefcase import used
void Briefcase;


