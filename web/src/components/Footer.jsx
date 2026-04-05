import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Footer — Web3-styled portfolio footer.
 * Features: mock ENS name, live block-height counter, chain status,
 * "BUIDLING" badge, quick links, and social links.
 */

// ── Live block counter (increments every ~12 s like Ethereum) ──
const useBlockCounter = (start = 21_847_392) => {
  const [block, setBlock] = useState(start);
  useEffect(() => {
    const id = setInterval(() => setBlock((b) => b + 1), 12000);
    return () => clearInterval(id);
  }, [start]);
  return block;
};

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Education", href: "/#education" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Competitions", href: "/#competitions" },
  { label: "Volunteer", href: "/#volunteer" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ChanSuvannet/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chan-suvannet-63865224a/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/chan_suvannet",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 1 0 12 24 12 12 0 1 0 11.944 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:suvannetchan@gmail.com",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const Footer = () => {
  const block = useBlockCounter();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer
      ref={ref}
      className="relative"
      style={{
        background: "linear-gradient(180deg, #0a0a0f 0%, #060609 100%)",
        borderTop: "1px solid rgba(6,182,212,0.1)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), rgba(139,92,246,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        {/* ── Top row ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
        >
          {/* Brand block */}
          <div className="md:col-span-1">
            {/* ENS Name */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3))",
                  border: "1px solid rgba(6,182,212,0.3)",
                }}
              >
                <span className="text-xs font-mono font-bold text-white">
                  CS
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">
                  chansuvannet.eth
                </p>
                <p className="text-[10px] font-mono text-slate-500">
                  0x7a3B…4f2E
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              Full-stack developer & software engineer based in Cambodia.
              Building scalable systems and chasing clean code.
            </p>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#10b981",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              BUIDLING · Open to Work
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <p className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-cyan-400 transition-colors font-mono flex items-center gap-1.5 group"
                  >
                    <span className="w-3 h-px bg-slate-600 group-hover:bg-cyan-500 group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Chain stats */}
          <div>
            <p className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest mb-4">
              On-Chain Status
            </p>

            <div className="space-y-3">
              {/* Block height */}
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-xs text-slate-500 font-mono">Block</span>
                <span className="text-xs font-mono text-cyan-400">
                  #{block.toLocaleString()}
                </span>
              </div>

              {/* Network */}
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-xs text-slate-500 font-mono">
                  Network
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Mainnet
                </span>
              </div>

              {/* Projects deployed */}
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span className="text-xs text-slate-500 font-mono">
                  Contracts
                </span>
                <span className="text-xs font-mono text-purple-400">
                  5 deployed
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Divider ─────────────────────────────────────── */}
        <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(6,182,212,0.2), rgba(139,92,246,0.2), transparent)",
          }}
        />

        {/* ── Bottom row ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-[11px] font-mono text-slate-600 order-2 sm:order-1">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-500">Chan Suvannet</span>
            {" · "}
            <span className="text-cyan-700">Built with React + Vite</span>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-1 order-1 sm:order-2">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.04 }}
            className="order-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            back to top
          </motion.a>
        </motion.div>
      </div>
      <br />
      <br />
      <br />
    </footer>
  );
};

export default Footer;
