import { mdiStar, mdiStarHalfFull } from '@mdi/js';
import Icon from '@mdi/react';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Coffee from "/src/assets/svg/cafe.svg";
import Certificate from "/src/assets/svg/certificate.svg";
import Code from "/src/assets/svg/code.svg";
import Rocket from "/src/assets/svg/rocket.svg";

const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/a/ACg8ocLwnU6pFHzGJX_V7X1iM4-BrlFso2NwYtH2IFrlFKU73CEuirNg=s317-c-no";

const SKILLS_DATA = [
  { name: "Development",    percentage: 80, color: "from-cyan-500 to-blue-500" },
  { name: "Problem-Solving",percentage: 85, color: "from-purple-500 to-pink-500" },
  { name: "Communication",  percentage: 91, color: "from-emerald-400 to-cyan-400" },
];

const STATS_DATA = [
  { icon: Code,        value: 10,   label: "Projects Completed", color: "from-cyan-500 to-blue-500" },
  { icon: Rocket,      value: 3,    label: "Projects Ongoing",   color: "from-purple-500 to-pink-400" },
  { icon: Coffee,      value: 1460, label: "Cups of Coffee",     color: "from-amber-400 to-orange-500" },
  { icon: Certificate, value: 6,    label: "Certificates",       color: "from-emerald-400 to-teal-400" },
];

/* ── Animated counter ────────────────────────────────── */
const Counter = ({ target, inView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      setCount((c) => {
        if (c + step >= target) { clearInterval(timer); return target; }
        return c + step;
      });
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span>{count.toLocaleString()}</span>;
};

/* ── Animated skill bar ──────────────────────────────── */
const SkillBar = ({ name, percentage, color, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm font-mono text-cyan-400">{percentage}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ boxShadow: '0 0 10px rgba(6,182,212,0.5)' }}
        />
      </div>
    </div>
  );
};

/* ── Stat card ───────────────────────────────────────── */
const StatCard = ({ icon, value, label, color, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative group overflow-hidden rounded-2xl p-5 cursor-default"
      style={{
        background: 'rgba(13,13,26,0.8)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Hover glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${color}`}
        style={{ opacity: 0.04 }} />

      <div className="flex items-center gap-4">
        <div className={`relative flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${color}`}
          style={{ opacity: 0.15 }}
        />
        <div className={`absolute p-3 rounded-xl`}>
          <img src={icon} className="w-8 h-8" alt={label} style={{ filter: 'invert(1) brightness(0.9)' }} />
        </div>
        <div className="ml-14">
          <div className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            <Counter target={value} inView={inView} />
          </div>
          <p className="text-xs text-slate-500 mt-0.5">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Component ──────────────────────────────────── */
const AboutMeComponent = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section className="relative min-h-screen px-4 py-24 flex justify-center items-center"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}
    >
      {/* Section ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="w-full max-w-6xl space-y-12" ref={headerRef}>

        {/* ── Section Header ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-subtitle mb-3">// about me</p>
          <h2 className="section-title text-3xl font-bold">
            Building With{" "}
            <span className="text-gradient-cyan">Purpose</span>
          </h2>
        </motion.div>

        {/* ── Profile + quote card ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-8 flex flex-col items-center gap-4"
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 blur-md opacity-50" />
            <img
              className="relative w-16 h-16 rounded-full border-2 border-cyan-500/30"
              src={PROFILE_IMAGE_URL}
              alt="Profile"
              loading="lazy"
            />
          </div>

          {/* Stars */}
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Icon path={mdiStar} size={0.9} color="#f59e0b" />
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 400 }}>
              <Icon path={mdiStarHalfFull} size={0.9} color="#f59e0b" />
            </motion.div>
          </div>

          <blockquote className="max-w-xl text-center text-slate-400 italic text-sm leading-relaxed border-l-2 border-cyan-500/50 pl-4">
            "I'm not a great programmer, I'm just a good programmer with great habits."
          </blockquote>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-4 h-px bg-slate-600" />
            <span>Khmer • English • French</span>
            <span className="w-4 h-px bg-slate-600" />
          </div>
        </motion.div>

        {/* ── About + Skills columns ────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.25)' }}>
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-200">About Me</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              I am a passionate, results-driven software engineer with strong expertise in full-stack development and microservices architecture. I specialize in building scalable web applications, optimizing user experiences, and collaborating in Agile teams. Recognized for my positive mindset, motivation, and excellent communication skills, I'm eager to tackle challenges and contribute to innovative software solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Full-Stack', 'Microservices', 'DevOps', 'Agile', 'TypeScript'].map((tag) => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)' }}>
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-200">Skills & Expertise</h3>
            </div>
            {SKILLS_DATA.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.15} />
            ))}
          </motion.div>
        </div>

        {/* ── Stats grid ───────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS_DATA.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-slate-500">
            Let's start a conversation to explore new technology together.{" "}
            <a
              href="https://t.me/chan_suvannet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 transition-colors"
            >
              Contact me
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
