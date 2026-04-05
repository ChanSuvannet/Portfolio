import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ContainerTextFlip } from "../../components/container-text-flip";
import Profile from "/src/assets/image/image.png";
import Discord from "/src/assets/svg/discord.svg";
import GitHub from "/src/assets/svg/github.svg";
import LinkIn from "/src/assets/svg/icons8-linkedin.svg";
import Mail from "/src/assets/svg/mail.svg";
import Mouse from "/src/assets/svg/mouse.svg";

/* ── Particle canvas background ─────────────────────── */
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 60;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random() * 0.5 + 0.15,
      col: Math.random() > 0.5 ? "6,182,212" : "139,92,246",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col},${p.a})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

/* ── Social Link ─────────────────────────────────────── */
const SocialLink = ({ href, src, alt, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.15, y: -4 }}
    whileTap={{ scale: 0.9 }}
    className="relative group"
  >
    <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300">
      <img
        src={src}
        alt={alt}
        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ filter: "invert(1) brightness(0.8)" }}
      />
    </div>
  </motion.a>
);

/* ── Typing cursor ───────────────────────────────────── */
const StatusBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium"
    style={{
      background: "rgba(6,182,212,0.08)",
      border: "1px solid rgba(6,182,212,0.25)",
      color: "#06b6d4",
    }}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
    Available for opportunities
  </motion.div>
);

/* ── Main Component ──────────────────────────────────── */
const HomeComponent = () => {
  const [codeLines] = useState([
    '> const developer = "Chan Suvannet"',
    '> developer.skills = ["NestJS", "Angular", "NextJS"]',
    '> developer.status = "building_cool_stuff" ✓',
  ]);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((v) => (v < codeLines.length ? v + 1 : v));
    }, 900);
    return () => clearInterval(timer);
  }, [codeLines.length]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 60%, #0a0a0f 100%)",
      }}
    >
      <ParticleBackground />

      {/* Ambient glows */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        {/* Status badge */}
        <StatusBadge />

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            type: "spring",
            stiffness: 120,
          }}
          className="relative mt-8 mb-6"
        >
          {/* Animated ring */}
          <div
            className="absolute inset-[-6px] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #06b6d4, #8b5cf6, #3b82f6, #06b6d4)",
              animation: "spin 4s linear infinite",
              borderRadius: "50%",
              padding: "2px",
            }}
          />
          <div
            className="absolute inset-[-6px] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #06b6d4, #8b5cf6, #3b82f6, #06b6d4)",
              borderRadius: "50%",
              filter: "blur(8px)",
              opacity: 0.5,
              animation: "spin 4s linear infinite",
            }}
          />
          <div
            className="relative w-36 h-36 rounded-full p-[3px]"
            style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden"
              style={{ background: "#0d0d1a", border: "3px solid #0d0d1a" }}
            >
              <img
                src={Profile}
                alt="Chan Suvannet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl max-600:text-2xl font-primary mb-2"
          style={{ color: "#e2e8f0", letterSpacing: "-0.02em" }}
        >
          Chan Suvannet
        </motion.h1>
        <br />
        {/* Animated role flip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-6"
        >
          <ContainerTextFlip
            words={[
              "Web Development",
              "DevOps",
              "Prompt Engineering",
              "AI Research ",
            ]}
          />
        </motion.div>

        {/* Terminal code block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-full max-w-lg mb-8 text-left rounded-xl overflow-hidden"
          style={{
            background: "rgba(13,13,26,0.9)",
            border: "1px solid rgba(6,182,212,0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-xs text-slate-500 font-mono">
              ~/portfolio
            </span>
          </div>
          <div className="p-4 space-y-1.5">
            {codeLines.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-mono"
                style={{
                  color: i === visibleLines - 1 ? "#06b6d4" : "#64748b",
                }}
              >
                {line}
                {i === visibleLines - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-1.5 h-3.5 ml-1 bg-cyan-400 align-middle"
                  />
                )}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <SocialLink
            href="https://github.com/ChanSuvannet/"
            src={GitHub}
            alt="GitHub"
            delay={1.1}
          />
          <SocialLink
            href="https://www.linkedin.com/in/chan-suvannet-63865224a/"
            src={LinkIn}
            alt="LinkedIn"
            delay={1.2}
          />
          <SocialLink
            href="https://discordapp.com/users/suvannet"
            src={Discord}
            alt="Discord"
            delay={1.3}
          />
          <SocialLink
            href="mailto:suvannetchan@gmail.com"
            src={Mail}
            alt="Email"
            delay={1.4}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.a
            href="https://t.me/chan_suvannet"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))",
              border: "1px solid rgba(6,182,212,0.4)",
              color: "#e2e8f0",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Hire Me</span>
            <svg
              className="relative z-10 w-4 h-4 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -bottom-[10px] flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
          Scroll
        </span>
        <br />
        <img className="mouse w-6 h-6" src={Mouse} alt="scroll" />
      </motion.div>
    </div>
  );
};

export default HomeComponent;
