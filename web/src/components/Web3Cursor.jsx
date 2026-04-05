import { useEffect, useRef } from "react";

/**
 * Web3Cursor — canvas-based glowing trail cursor.
 * Renders a cyan ring that follows the mouse with 12 fading tail dots
 * and a click ripple effect. Disabled on touch devices.
 */
const Web3Cursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Skip on touch-primary devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animId;
    const mouse = { x: -200, y: -200 };
    const trail = [];
    const TRAIL_LENGTH = 14;
    const ripples = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      trail.unshift({ x: mouse.x, y: mouse.y, a: 1 });
      if (trail.length > TRAIL_LENGTH) trail.pop();
    };

    const onClick = (e) => {
      ripples.push({ x: e.clientX, y: e.clientY, r: 0, a: 0.8 });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Ripples ──────────────────────────────────────────
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6,182,212,${rp.a})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        rp.r += 4;
        rp.a -= 0.04;
        if (rp.a <= 0) ripples.splice(i, 1);
      }

      // ── Trail dots ────────────────────────────────────────
      trail.forEach((p, i) => {
        const t = 1 - i / TRAIL_LENGTH;
        const r = t * 5;
        const isFirstHalf = i < TRAIL_LENGTH / 2;
        const color = isFirstHalf ? `6,182,212` : `139,92,246`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${t * 0.6})`;
        ctx.fill();
      });

      // ── Outer ring (follows mouse) ─────────────────────
      const ringR = 18;
      // Glow
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, ringR + 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(6,182,212,0.08)";
      ctx.lineWidth = 10;
      ctx.stroke();
      // Ring
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, ringR, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(6,182,212,0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Inner dot
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(6,182,212,0.9)";
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};

export default Web3Cursor;
