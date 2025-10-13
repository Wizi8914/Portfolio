import { useEffect, useRef } from "react";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef<{ x: number; y: number } | null>(
    null,
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Theme color (app purple)
    const themeColor = { r: 168, g: 85, b: 247 }; // #a855f7

    // Config adapted from user's particles.js config
    const config = {
      // slightly more particles for a fuller background
      baseCount: 55,
      // smaller base size
      baseSize: 1.5,
      sizeRandom: true,
      // reduce base opacity so particles are less visible
      opacity: 0.5,
      link: {
        enable: true,
        // allow links across a wider area so particles can be more spread
        distance: 150,
        // make links subtler
        opacity: 0.35,
        // slightly thicker lines
        width: 1.5,
      },
      move: {
        // much slower movement
        speed: 0.25,
      },
      interactivity: {
        detect_on: "window",
        grabDistance: 150,
        pushNumber: 4,
      },
      // minimum separation (px) when placing particles so they start more scattered
      minSeparation: 50,
      densityAreaReference: 1366 * 768, // used to scale particle count subtly by screen area
    } as const;

    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      // target values used for spawn ramping
      sizeTarget: number;
      opacityTarget: number;
      // spawn progress 0..1 (1 = fully spawned)
      spawnProgress?: number;
      // frames to complete spawn ramp
      spawnFrames?: number;
    }> = [];

    const setCanvasSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // handle high DPI

      // Recompute particle count based on area (gentle scaling)
      const area = w * h;
      const scaleFactor = Math.sqrt(
        area / config.densityAreaReference,
      );
      const count = Math.max(
        10,
        Math.round(config.baseCount * scaleFactor),
      );

      // If particle array is empty (first run) create particles, else trim/extend
      if (particles.length === 0) {
        // initial population should be fully spawned (no ramp)
        for (let i = 0; i < count; i++)
          particles.push(
            createParticle(w, h, { instant: true }),
          );
      } else if (particles.length < count) {
        const toAdd = count - particles.length;
        for (let i = 0; i < toAdd; i++)
          particles.push(
            createParticle(w, h, { instant: true }),
          );
      } else if (particles.length > count) {
        particles.splice(count);
      }
    };

    const createParticle = (
      w: number,
      h: number,
      options?: { instant?: boolean; spawnFrames?: number },
    ) => {
      const speed = config.move.speed;
      const angle = Math.random() * Math.PI * 2;
      // reduce random variance so particles are very slow and gentle
      const speedRand = (Math.random() * 0.4 + 0.6) * speed; // 0.6-1.0 * speed
      // smaller sizes: random component reduced and base offset smaller
      const size = config.sizeRandom
        ? Math.random() * (config.baseSize * 0.8) + 0.4
        : config.baseSize;

      // Try to place particle at a position at least `minSeparation` away from existing particles to create a more scattered layout
      const minSep = config.minSeparation || 40;
      let x = Math.random() * w;
      let y = Math.random() * h;
      const maxAttempts = 20;
      for (
        let attempt = 0;
        attempt < maxAttempts && particles.length > 0;
        attempt++
      ) {
        const tooClose = particles.some((other) => {
          const dx = other.x - x;
          const dy = other.y - y;
          return Math.sqrt(dx * dx + dy * dy) < minSep;
        });
        if (!tooClose) break;
        x = Math.random() * w;
        y = Math.random() * h;
      }

      const baseVx =
        Math.cos(angle) *
        speedRand *
        (Math.random() * 0.6 + 0.7);
      const baseVy =
        Math.sin(angle) *
        speedRand *
        (Math.random() * 0.6 + 0.7);
      const opacity = Math.random() * 0.35 + 0.2;
      return {
        x,
        y,
        vx: baseVx,
        vy: baseVy,
        sizeTarget: size,
        opacityTarget: opacity,
        spawnProgress: options?.instant ? 1 : 0,
        spawnFrames: options?.instant
          ? 1
          : (options?.spawnFrames ?? 14),
      };
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Mouse handling
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePosRef.current = null;
    };

    const handleClick = (e: MouseEvent) => {
      const rectW = window.innerWidth;
      const rectH = window.innerHeight;
      for (
        let i = 0;
        i < config.interactivity.pushNumber;
        i++
      ) {
        // spawn with a slightly longer ramp for a smooth appearance
        const frames = 18 + Math.floor(Math.random() * 12); // ~18-30 frames
        const p = createParticle(rectW, rectH, {
          spawnFrames: frames,
        });
        p.x = e.clientX + (Math.random() - 0.5) * 20;
        p.y = e.clientY + (Math.random() - 0.5) * 20;
        p.spawnProgress = 0; // ensure ramp starts
        particles.push(p);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    window.addEventListener("click", handleClick);

    const maxDistance = config.link.distance;

    // easing used for spawn ramp (shared)
    const easeOutCubic = (u: number) => 1 - Math.pow(1 - u, 3);

    let animationId = 0;

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // handle spawn ramp: spawnProgress goes from 0 -> 1 over spawnFrames
        const spawnFrames = p.spawnFrames || 1;
        if ((p.spawnProgress ?? 1) < 1) {
          p.spawnProgress = Math.min(
            1,
            (p.spawnProgress ?? 0) + 1 / spawnFrames,
          );
        }
        // ease function for nicer ramp (easeOutCubic)
        const t = Math.max(
          0,
          Math.min(1, p.spawnProgress ?? 1),
        );
        const easeOutCubic = (u: number) =>
          1 - Math.pow(1 - u, 3);
        const ease = easeOutCubic(t);

        // Move (velocity ramps in with spawn)
        p.x += (p.vx ?? 0) * ease;
        p.y += (p.vy ?? 0) * ease;

        // Out mode: "out" -> wrap around edges
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;
        if (p.y < -50) p.y = h + 50;
        if (p.y > h + 50) p.y = -50;

        // Draw particle with ramped size/opacity (smaller glow)
        const curOpacity = (p.opacityTarget ?? 0.25) * ease;
        const curSize = Math.max(
          0.8,
          (p.sizeTarget ?? 1) * 1.4 * ease,
        );
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          curSize * 3,
        );
        grad.addColorStop(
          0,
          `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${curOpacity})`,
        );
        grad.addColorStop(
          1,
          `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, 0)`,
        );
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, curSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw links between particles (fade in links when particles are still spawning)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            // compute spawn ease for both endpoints (1 when fully spawned)
            const pEase = easeOutCubic(
              Math.max(0, Math.min(1, p.spawnProgress ?? 1)),
            );
            const qEase = easeOutCubic(
              Math.max(0, Math.min(1, q.spawnProgress ?? 1)),
            );
            const combinedEase = pEase * qEase; // links only visible when both ends have spawned

            const baseOpacity =
              (1 - dist / maxDistance) * config.link.opacity;
            const linkOpacity = baseOpacity * combinedEase;
            if (linkOpacity > 0.01) {
              ctx.strokeStyle = `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${linkOpacity})`;
              // slightly scale line width with spawn so it grows with the link
              ctx.lineWidth = Math.max(
                0.5,
                config.link.width * (0.5 + 0.5 * combinedEase),
              );
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          }
        }
      }

      // Hover "grab" effect: draw lines to cursor (no attraction)
      if (mousePosRef.current) {
        const mx = mousePosRef.current.x;
        const my = mousePosRef.current.y;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.interactivity.grabDistance) {
            const grabOpacity =
              (1 - dist / config.interactivity.grabDistance) *
              config.link.opacity;
            ctx.strokeStyle = `rgba(${themeColor.r}, ${themeColor.g}, ${themeColor.b}, ${grabOpacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6, cursor: "grab" }}
    />
  );
}