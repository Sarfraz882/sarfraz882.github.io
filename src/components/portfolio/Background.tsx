export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none transition-colors duration-300">
      {/* Base: Crisp White Light Mode vs Deep Pitch Black Dark Mode (#09090b / #030712) */}
      <div className="absolute inset-0 bg-[#ffffff] dark:bg-[#09090b] transition-colors duration-300" />

      {/* Subtle Radial Gradient Top Highlight (from prompt) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.18),rgba(255,255,255,0))] pointer-events-none" />

      {/* Cyan / Teal / Emerald Atmospheric Glows */}
      <div className="absolute -top-40 -left-32 h-[560px] w-[560px] rounded-full bg-cyan-500/[0.04] dark:bg-cyan-500/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-emerald-500/[0.035] dark:bg-teal-500/[0.04] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[450px] w-[450px] rounded-full bg-indigo-500/[0.03] dark:bg-emerald-500/[0.03] blur-[140px] pointer-events-none" />

      {/* Subtle Matrix Dots */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

