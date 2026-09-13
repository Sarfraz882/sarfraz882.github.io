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
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
          {index}
        </span>
        <span className="text-[#E4E4E7]">•</span>
        <span className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#09090B] max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[#52525B] text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

// ---------- HERO ----------
export function Hero() {
  return (
    <section id="top" className="pt-20 sm:pt-24 pb-16 sm:pb-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="md:col-span-7">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E4E4E7] bg-[#F4F4F6] px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-medium text-[#09090B]">
                Available for work · New Delhi / NCR &amp; Remote
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#09090B] leading-[1.12]">
              Sarfraaj Khan
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-[#52525B]">
              IT Systems &amp; Cloud Infrastructure Engineer
            </p>

            {/* Concise Value Proposition */}
            <p className="mt-5 text-base sm:text-lg text-[#52525B] leading-relaxed max-w-xl">
              Enterprise Systems Administrator with <strong className="text-[#09090B] font-semibold">3.8+ years</strong> orchestrating Microsoft 365 tenants, Azure Entra ID zero-trust policies, endpoint security fleets, Windows Server, and high-uptime networks.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#18181B] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#27272A] active:scale-98 transition-all shadow-xs"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E4E4E7] bg-white px-5 py-2.5 text-sm font-medium text-[#09090B] hover:bg-[#F4F4F6] active:scale-98 transition-all shadow-xs"
              >
                <Mail className="h-4 w-4 text-[#52525B]" />
                <span>Contact Me</span>
              </a>

              <a
                href={RESUME_URL}
                download="Sarfraaj-Khan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E4E4E7] bg-white px-5 py-2.5 text-sm font-medium text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F6] active:scale-98 transition-all shadow-xs"
              >
                <Download className="h-4 w-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Contact Quick Info */}
            <div className="mt-8 pt-6 border-t border-[#E4E4E7] flex flex-wrap items-center gap-4 text-xs font-mono text-[#52525B]">
              <a
                href="mailto:sarfaraajsince2004@gmail.com"
                className="hover:text-[#09090B] hover:underline"
              >
                sarfaraajsince2004@gmail.com
              </a>
              <span className="text-[#E4E4E7]">•</span>
              <a
                href="https://wa.me/918826457998"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#09090B] hover:underline"
              >
                +91 88264 57998
              </a>
              <span className="text-[#E4E4E7]">•</span>
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Right Column: Clean Studio Portrait */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-[340px] rounded-2xl border border-[#E4E4E7] bg-white p-3 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[#F4F4F6]">
                <img
                  src={AVATAR}
                  alt="Sarfraaj Khan"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-3 px-1 py-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[#09090B]">Sarfraaj Khan</span>
                  <span className="font-mono text-xs text-[#71717A]">IT Executive</span>
                </div>
                <p className="text-xs text-[#52525B] mt-0.5 font-mono">
                  Prasatti Group · M365 &amp; Infrastructure
                </p>
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
    <section id="about" className="py-16 sm:py-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="01"
          eyebrow="About & Background"
          title="Resilient enterprise IT operations & zero-downtime systems administration."
          description="A dedicated systems engineer with hands-on enterprise tenure across cloud tenancy, endpoint fleets, network architecture, and user lifecycle support."
        />

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div className="md:col-span-7 space-y-4 text-base text-[#52525B] leading-relaxed">
            <p>
              I specialize in maintaining dependable enterprise infrastructure where uptime and security are non-negotiable. Over <strong className="text-[#09090B]">3.8+ years</strong> in active service delivery, I have managed heterogeneous environments supporting 500+ endpoints across Windows 11, macOS, and mobile devices.
            </p>
            <p>
              My focus spans end-to-end administration: Microsoft 365, Azure Entra ID (SSO, MFA, Conditional Access), fleet-wide EDR cloud defense, SonicWall security policies, and rapid L1/L2 incident resolution.
            </p>

            {/* Diagnostic / Health terminal card */}
            <div className="mt-6 rounded-xl border border-[#E4E4E7] bg-[#F4F4F6] p-4 font-mono text-xs text-[#09090B]">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E4E4E7] text-[#71717A]">
                <span>sarfraaj@infra-health:~</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  SYSTEM HEALTHY
                </span>
              </div>
              <div className="space-y-1.5 text-[#334155]">
                <p>✓ Microsoft 365 Tenant: All Services Operational</p>
                <p>✓ Azure Entra ID: Zero-Trust MFA Enforced (100%)</p>
                <p>✓ Endpoint Fleet: 500+ Devices Shielded via EDR</p>
                <p>✓ Network Gateway SLA: 99.8% Resolution Fidelity</p>
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
              <div key={m.label} className="paper-card p-5">
                <div className="text-display text-3xl sm:text-4xl font-bold text-[#09090B]">
                  {m.num}
                </div>
                <div className="mt-2 text-sm font-semibold text-[#09090B]">{m.label}</div>
                <div className="mt-0.5 text-xs text-[#71717A]">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="experience" className="py-16 sm:py-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="02"
          eyebrow="Experience & Career"
          title="Chronological timeline of enterprise service delivery."
          description="Consistent progression across enterprise IT service providers and in-house IT administration roles."
        />

        <div className="space-y-6">
          {jobs.map((j) => (
            <div key={j.role} className="paper-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-display text-xl sm:text-2xl font-bold text-[#09090B]">
                      {j.role}
                    </h3>
                    {j.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current Role
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-[#52525B] mt-1">{j.company}</div>
                </div>
                <div className="font-mono text-xs text-[#71717A] bg-[#F4F4F6] border border-[#E4E4E7] px-3 py-1 rounded-md w-fit">
                  {j.period}
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[#52525B] leading-relaxed">
                {j.summary}
              </p>

              <div className="mt-4 pt-4 border-t border-[#E4E4E7] space-y-2">
                {j.responsibilities.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#52525B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#18181B] mt-2 shrink-0" />
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
    <section id="skills" className="py-16 sm:py-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="03"
          eyebrow="Skills & Arsenal"
          title="Categorized technical competencies & operational toolkit."
          description="Structured across enterprise cloud administration, network infrastructure, and high-velocity systems support."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div key={c.title} className="paper-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-display text-lg font-bold text-[#09090B]">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-[#52525B] leading-relaxed">
                  {c.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-[#E4E4E7] flex flex-wrap gap-2">
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

// ---------- PROJECTS ----------
export function Projects() {
  const projects = [
    {
      title: "Microsoft 365 Enterprise Administration & Hybrid Cloud",
      tag: "Cloud M365",
      overview: "Complete tenant administration across user lifecycle, Exchange Online mail routing, SharePoint, OneDrive, and Microsoft Teams governance for enterprise staff.",
      outcome: "Standardized licensing · zero downtime user migration · 60% faster onboarding.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      title: "Fleet-Wide EDR & Endpoint Cloud Security Rollout",
      tag: "Cyber Security",
      overview: "Cloud-managed endpoint detection and response rolled out across 500+ corporate devices with custom quarantine rules, posture hardening, and threat playbooks.",
      outcome: "100% endpoint visibility · incidents contained in under 5 minutes.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      title: "Microsoft Entra ID (Azure AD) Lifecycle & Zero-Trust MFA",
      tag: "Identity / IAM",
      overview: "Azure directory administration implementing Single Sign-On (SSO), Multi-Factor Authentication (MFA), Conditional Access policies, and Joiner-Mover-Leaver flow.",
      outcome: "Eliminated orphan credentials · 100% compliance on remote access audits.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      title: "Network Infrastructure, VLAN & SonicWall Firewall Setup",
      tag: "Networking",
      overview: "Structured enterprise network topology implementation including subnetting, VLAN segmentation, switch port security, Wi-Fi controller AP mapping, and secure client VPN.",
      outcome: "99.9% uptime · isolated guest and sensitive corporate network traffic.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      title: "Centralized Print Server & Infrastructure Overhaul",
      tag: "Infrastructure",
      overview: "Consolidated print server infrastructure supporting multi-floor printer fleets, Brady label printers, driver standardization, and queue monitoring.",
      outcome: "80% drop in print spooler tickets · seamless zero-config user printing.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
    {
      title: "Smart Conference Room AV & Hybrid Collaboration Setup",
      tag: "Smart AV",
      overview: "Standardized corporate boardrooms with interactive projectors, Teams Rooms hardware, microphone arrays, biometric access integration, and wireless presentation bridges.",
      outcome: "Zero-friction hybrid meetings · 95% reduction in meeting setup calls.",
      github: "https://github.com/Sarfraz882",
      demo: "#contact",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="04"
          eyebrow="Featured Projects"
          title="Enterprise deployments & technical initiatives."
          description="High-impact projects delivered across cloud administration, endpoint defense, and core networking."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="paper-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-tag">{p.tag}</span>
                </div>

                <h3 className="text-display text-lg font-bold text-[#09090B] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-xs text-[#52525B] leading-relaxed">
                  {p.overview}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E4E4E7]">
                <div className="text-xs text-[#09090B] font-medium mb-4 flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{p.outcome}</span>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#E4E4E7] bg-white py-2 px-3 text-xs font-mono font-medium text-[#09090B] hover:bg-[#F4F4F6] transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={p.demo}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#18181B] py-2 px-3 text-xs font-mono font-medium text-white hover:bg-[#27272A] transition-colors"
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
    <section id="certifications" className="py-16 sm:py-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="05"
          eyebrow="Credentials"
          title="Certifications & industry qualifications."
          description="Recognized credentials validating enterprise cloud, networking, and service governance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.name} className="paper-card p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#71717A]">{c.code}</span>
                  <span
                    className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${
                      c.status === "Certified"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-[#F4F4F6] text-[#52525B] border-[#E4E4E7]"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
                <h3 className="font-semibold text-base text-[#09090B]">{c.name}</h3>
                <div className="text-xs text-[#71717A] mt-1">{c.issuer}</div>
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
    <section className="py-16 sm:py-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="06"
          eyebrow="Recommendations"
          title="Colleague feedback & stakeholder trust."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="paper-card p-6 flex flex-col justify-between">
              <p className="text-sm text-[#52525B] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-[#E4E4E7]">
                <div className="font-semibold text-sm text-[#09090B]">{t.name}</div>
                <div className="text-xs text-[#71717A] font-mono mt-0.5">{t.role}</div>
              </div>
            </div>
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

  const copyEmail = () => {
    navigator.clipboard.writeText("sarfaraajsince2004@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-[#E4E4E7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <SectionHeader
          index="07"
          eyebrow="Contact & Connect"
          title="Let's build reliable systems together."
          description="Open to enterprise IT executive, systems administrator, and cloud infrastructure opportunities."
        />

        {/* Action Pills */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-[#E4E4E7] bg-white px-4 py-2 font-mono text-xs text-[#09090B] hover:bg-[#F4F4F6] transition-all cursor-pointer shadow-xs"
          >
            {copiedEmail ? (
              <>
                <CheckCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-[#71717A]" />
                <span>Copy: sarfaraajsince2004@gmail.com</span>
              </>
            )}
          </button>

          <a
            href="https://wa.me/918826457998?text=Hi%20Sarfraaj%2C%20I%20would%20like%20to%20connect%20regarding%20an%20IT%20role."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 font-mono text-xs text-emerald-800 hover:bg-emerald-100 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href="https://www.linkedin.com/in/sarfraaj-engineer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E4E4E7] bg-white px-4 py-2 font-mono text-xs text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F6] transition-colors shadow-xs"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Sarfraz882"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E4E4E7] bg-white px-4 py-2 font-mono text-xs text-[#52525B] hover:text-[#09090B] hover:bg-[#F4F4F6] transition-colors shadow-xs"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Direct channels */}
          <div className="md:col-span-5 space-y-3">
            {[
              { icon: Mail, label: "Email Address", value: "sarfaraajsince2004@gmail.com", href: "mailto:sarfaraajsince2004@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 88264 57998", href: "tel:+918826457998" },
              { icon: MapPin, label: "Location", value: "New Delhi / NCR · India", href: "https://maps.google.com/?q=New+Delhi", external: true },
              { icon: Building2, label: "Current Seat", value: "Prasatti Group · IT Executive", href: "https://www.linkedin.com/in/sarfraaj-engineer/", external: true },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={"external" in c && c.external ? "_blank" : undefined}
                rel={"external" in c && c.external ? "noopener noreferrer" : undefined}
                className="paper-card p-4 flex items-center gap-3.5 hover:border-[#CBD5E1] transition-all block"
              >
                <div className="h-9 w-9 rounded-lg bg-[#F4F4F6] border border-[#E4E4E7] text-[#09090B] grid place-items-center shrink-0">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">{c.label}</div>
                  <div className="text-sm font-semibold text-[#09090B] truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Quick email form */}
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
            className="md:col-span-7 paper-card p-6 sm:p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono uppercase tracking-wider text-[#52525B] mb-1.5">
                  Name
                </label>
                <input
                  id="form-name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-[#E4E4E7] bg-white px-3.5 py-2 text-sm text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#18181B]"
                />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-mono uppercase tracking-wider text-[#52525B] mb-1.5">
                  Email
                </label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-[#E4E4E7] bg-white px-3.5 py-2 text-sm text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#18181B]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="form-company" className="block text-xs font-mono uppercase tracking-wider text-[#52525B] mb-1.5">
                Company / Organization
              </label>
              <input
                id="form-company"
                name="company"
                placeholder="Company Name"
                className="w-full rounded-lg border border-[#E4E4E7] bg-white px-3.5 py-2 text-sm text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#18181B]"
              />
            </div>

            <div>
              <label htmlFor="form-message" className="block text-xs font-mono uppercase tracking-wider text-[#52525B] mb-1.5">
                Message
              </label>
              <textarea
                id="form-message"
                name="message"
                required
                rows={4}
                placeholder="How can I assist your enterprise IT infrastructure?"
                className="w-full rounded-lg border border-[#E4E4E7] bg-white px-3.5 py-2 text-sm text-[#09090B] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#18181B]"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#71717A] font-mono">
                {sent ? "✓ Email client opened" : "Direct inquiry via mail client"}
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#18181B] px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-white hover:bg-[#27272A] active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                <span>Send Message</span>
                <Send className="h-3.5 w-3.5" />
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
    <footer className="py-12 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>All Systems Operational · SLA 99.8%</span>
          </div>
          <div>
            © 2026 Sarfraaj Khan · Minimalist Portfolio
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

