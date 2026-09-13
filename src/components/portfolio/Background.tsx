import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Grid configuration
    const cols = Math.max(24, Math.floor(width / 45));
    const rows = 32;
    const spacingX = (width * 1.6) / cols;
    const spacingZ = 42;

    // Camera & Projection
    const fov = 380;
    const cameraY = -180;
    const cameraZ = -100;

    // Interactive state (Mouse lerp & Scroll velocity)
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let smoothedVelocity = 0;
    let lastScrollTime = performance.now();

    // Floating ambient particle stars
    const particleCount = 45;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();

    // Pointer move listener
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      mouse.targetX = (clientX - width / 2) / (width / 2);
      mouse.targetY = (clientY - height / 2) / (height / 2);
    };

    // Scroll listener for velocity calculation
    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const dt = Math.max(now - lastScrollTime, 16);
      const delta = Math.abs(currentScrollY - lastScrollY);
      scrollVelocity = Math.min(delta / dt, 4.0);
      lastScrollY = currentScrollY;
      lastScrollTime = now;
      scrollY = currentScrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    let time = 0;
    let lastTime = performance.now();
    let isTabActive = !document.hidden;

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive) {
        lastTime = performance.now();
        loop(lastTime);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Main 60 FPS Render Loop
    const loop = (currentTime: number) => {
      if (!isTabActive) return;

      const delta = currentTime - lastTime;
      // Cap at 60 FPS
      if (delta < 14) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }
      lastTime = currentTime;

      // Mouse lerp damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Scroll velocity smoothing & decay
      smoothedVelocity += (scrollVelocity - smoothedVelocity) * 0.1;
      scrollVelocity *= 0.92;

      // Advance wave time
      const speedMultiplier = 1 + smoothedVelocity * 1.5;
      time += prefersReducedMotion ? 0 : 0.012 * speedMultiplier;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Render ambient floating stars
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha})`;
        ctx.fill();
      }

      // 2. Compute 3D grid projection
      const centerX = width / 2 + mouse.x * 35;
      const centerY = height * 0.68 + mouse.y * 25 - (scrollY * 0.08) % 40;

      // Temporary point buffer
      const gridPoints: Array<Array<{ x: number; y: number; alpha: number }>> = [];

      for (let r = 0; r < rows; r++) {
        const rowArr: Array<{ x: number; y: number; alpha: number }> = [];
        const z = r * spacingZ - cameraZ;

        // Depth perspective scale
        const scale = fov / (fov + z);
        if (scale <= 0) continue;

        for (let c = 0; c < cols; c++) {
          const x = (c - cols / 2) * spacingX;

          // Multi-frequency harmonic wave elevation
          const waveFreqX = 0.0035;
          const waveFreqZ = 0.0045;
          const baseAmp = 38 + smoothedVelocity * 22;

          let yElevation =
            Math.sin(x * waveFreqX + time * 1.8) *
              Math.cos(z * waveFreqZ + time * 1.4) *
              baseAmp +
            Math.sin((x + z) * 0.0025 + time * 0.8) * (baseAmp * 0.45);

          // Localized mouse interaction ripple
          const mouseWorldX = mouse.x * (width * 0.6);
          const mouseDist = Math.hypot(x - mouseWorldX, z - 280);
          if (mouseDist < 260) {
            const ripple = Math.cos((mouseDist / 260) * Math.PI) * 28;
            yElevation -= ripple;
          }

          const y3d = cameraY + yElevation;

          // Projected 2D coordinates
          const projX = centerX + x * scale;
          const projY = centerY + y3d * scale;

          // Depth fog alpha
          const depthProgress = r / rows;
          const alpha = Math.max(0, Math.sin(depthProgress * Math.PI) * 0.45);

          rowArr.push({ x: projX, y: projY, alpha });
        }
        gridPoints.push(rowArr);
      }

      // 3. Render grid wireframe lines
      // Lateral lines (row by row)
      for (let r = 0; r < gridPoints.length; r++) {
        const row = gridPoints[r];
        if (row.length === 0) continue;

        ctx.beginPath();
        for (let c = 0; c < row.length - 1; c++) {
          const p1 = row[c];
          const p2 = row[c + 1];

          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
        }
        const rowAlpha = row[Math.floor(row.length / 2)]?.alpha || 0.2;
        ctx.strokeStyle = `rgba(56, 189, 248, ${rowAlpha * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Longitudinal lines (column connecting rows)
      for (let c = 0; c < cols; c += 2) {
        ctx.beginPath();
        let started = false;
        for (let r = 0; r < gridPoints.length; r++) {
          const pt = gridPoints[r]?.[c];
          if (!pt) continue;
          if (!started) {
            ctx.moveTo(pt.x, pt.y);
            started = true;
          } else {
            ctx.lineTo(pt.x, pt.y);
          }
        }
        ctx.strokeStyle = `rgba(99, 102, 241, 0.14)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // 4. Render glowing node highlights
      for (let r = 0; r < gridPoints.length; r += 2) {
        const row = gridPoints[r];
        for (let c = 0; c < row.length; c += 3) {
          const pt = row[c];
          if (!pt || pt.alpha < 0.12) continue;

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${pt.alpha * 0.85})`;
          ctx.fill();

          // Subtle glow bloom for foreground nodes
          if (pt.alpha > 0.28) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${pt.alpha * 0.25})`;
            ctx.fill();
          }
        }
      }

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
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* 1. Hardware-Accelerated Interactive Canvas (z: -20) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-20 w-screen h-screen pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* 2. Deep Obsidian Ambient Scrim & Contrast Overlays (z: -10) */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none select-none bg-[#07080C]/85 backdrop-blur-[0.5px]"
        aria-hidden="true"
      >
        {/* Top radial ambient glow (Cyan / Sky) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-5%,rgba(56,189,248,0.12),transparent_75%)]" />

        {/* Bottom accent ambient glow (Indigo / Violet) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_80%_80%,rgba(99,102,241,0.08),transparent_70%)]" />

        {/* Micro-dot grid for tactile texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
    </>
  );
}

