import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Mouse lerp & scroll velocity tracking
    const mouse = { x: width * 0.5, y: height * 0.35, targetX: width * 0.5, targetY: height * 0.35 };
    let scrollVelocity = 0;
    let smoothedVelocity = 0;
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();

    // Ambient floating orbs defining the organic mesh gradient
    const orbs = [
      {
        baseXRatio: 0.25,
        baseYRatio: 0.2,
        radius: 460,
        colorStops: [
          { stop: 0, color: "rgba(219, 234, 254, 0.85)" }, // Ice blue
          { stop: 0.6, color: "rgba(219, 234, 254, 0.35)" },
          { stop: 1, color: "rgba(250, 250, 250, 0)" },
        ],
        speedX: 0.0006,
        speedY: 0.0008,
        driftRadiusX: 140,
        driftRadiusY: 100,
        phase: 0,
      },
      {
        baseXRatio: 0.78,
        baseYRatio: 0.28,
        radius: 520,
        colorStops: [
          { stop: 0, color: "rgba(237, 233, 254, 0.8)" }, // Pale lavender
          { stop: 0.55, color: "rgba(237, 233, 254, 0.3)" },
          { stop: 1, color: "rgba(250, 250, 250, 0)" },
        ],
        speedX: 0.0005,
        speedY: 0.0007,
        driftRadiusX: 160,
        driftRadiusY: 120,
        phase: 2.1,
      },
      {
        baseXRatio: 0.45,
        baseYRatio: 0.65,
        radius: 490,
        colorStops: [
          { stop: 0, color: "rgba(224, 231, 255, 0.75)" }, // Soft periwinkle
          { stop: 0.6, color: "rgba(224, 231, 255, 0.25)" },
          { stop: 1, color: "rgba(250, 250, 250, 0)" },
        ],
        speedX: 0.0007,
        speedY: 0.0005,
        driftRadiusX: 130,
        driftRadiusY: 140,
        phase: 4.2,
      },
      {
        baseXRatio: 0.15,
        baseYRatio: 0.82,
        radius: 440,
        colorStops: [
          { stop: 0, color: "rgba(240, 249, 255, 0.8)" }, // Soft sky
          { stop: 0.5, color: "rgba(240, 249, 255, 0.3)" },
          { stop: 1, color: "rgba(250, 250, 250, 0)" },
        ],
        speedX: 0.0008,
        speedY: 0.0006,
        driftRadiusX: 110,
        driftRadiusY: 90,
        phase: 1.5,
      },
      {
        baseXRatio: 0.85,
        baseYRatio: 0.78,
        radius: 470,
        colorStops: [
          { stop: 0, color: "rgba(245, 243, 255, 0.75)" }, // Pale violet tint
          { stop: 0.55, color: "rgba(245, 243, 255, 0.25)" },
          { stop: 1, color: "rgba(250, 250, 250, 0)" },
        ],
        speedX: 0.0006,
        speedY: 0.0007,
        driftRadiusX: 130,
        driftRadiusY: 110,
        phase: 3.4,
      },
    ];

    const handleResize = () => {
      if (!canvas) return;
      // Cap DPR at 1.25 for large blurred mesh orbs to guarantee 60fps with zero GPU load
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouse.targetX = clientX;
      mouse.targetY = clientY;
    };

    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const dt = Math.max(now - lastScrollTime, 16);
      const delta = Math.abs(currentScrollY - lastScrollY);
      scrollVelocity = Math.min(delta / dt, 3.5);
      lastScrollY = currentScrollY;
      lastScrollTime = now;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    let isTabActive = !document.hidden;
    const handleVisibility = () => {
      isTabActive = !document.hidden;
      if (isTabActive) {
        lastTime = performance.now();
        loop(lastTime);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      if (!isTabActive) return;

      const delta = currentTime - lastTime;
      if (delta < 14) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }
      lastTime = currentTime;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Scroll velocity smoothing
      smoothedVelocity += (scrollVelocity - smoothedVelocity) * 0.08;
      scrollVelocity *= 0.94;

      const velocityBonus = smoothedVelocity * 1.8;

      // Clear with pure off-white base
      ctx.fillStyle = "#FAFAFA";
      ctx.fillRect(0, 0, width, height);

      // Render drifting mesh orbs
      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        const t = prefersReducedMotion ? 0 : (currentTime * (1 + velocityBonus));

        const cx =
          width * orb.baseXRatio +
          Math.sin(t * orb.speedX + orb.phase) * orb.driftRadiusX;
        const cy =
          height * orb.baseYRatio +
          Math.cos(t * orb.speedY + orb.phase) * orb.driftRadiusY;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.radius);
        for (const stop of orb.colorStops) {
          grad.addColorStop(stop.stop, stop.color);
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render interactive cursor spotlight orb
      const cursorRadius = 380;
      const cursorGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        cursorRadius
      );
      cursorGrad.addColorStop(0, "rgba(219, 234, 254, 0.55)"); // Soft ambient cyan
      cursorGrad.addColorStop(0.5, "rgba(237, 233, 254, 0.25)");
      cursorGrad.addColorStop(1, "rgba(250, 250, 250, 0)");

      ctx.fillStyle = cursorGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, cursorRadius, 0, Math.PI * 2);
      ctx.fill();

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(loop);
      }
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Fluid Ambient Mesh Canvas (Base Layer) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 2. Persistent Frosted Diffusion & Noise Overlay */}
      <div className="absolute inset-0 backdrop-blur-[60px] saturate-[140%] pointer-events-none" />

      {/* 3. Subtle Tactile Dot Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#0F172A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}


