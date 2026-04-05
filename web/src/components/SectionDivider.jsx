import { motion } from "framer-motion";

/**
 * SectionDivider — animated circuit-board pulse line between sections.
 * A gradient line with a bright energy dot that races across it,
 * giving the impression of data flowing through the portfolio.
 */
const SectionDivider = ({ flip = false }) => {
  return (
    <div
      className="relative w-full h-8 flex items-center overflow-hidden"
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      {/* Static gradient track */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px"
        style={{
          background: flip
            ? "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 30%, rgba(6,182,212,0.3) 70%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.3) 30%, rgba(139,92,246,0.3) 70%, transparent 100%)",
        }}
      />

      {/* Left node */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
      </div>
      {/* Right node */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40" />
      </div>

      {/* Animated energy pulse dot */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2"
        initial={{ left: flip ? "90%" : "10%" }}
        animate={{ left: flip ? "10%" : "90%" }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-full blur-sm"
          style={{
            width: "16px",
            height: "16px",
            top: "-6px",
            left: "-6px",
            background: flip
              ? "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)",
          }}
        />
        {/* Core dot */}
        <div
          className="rounded-full"
          style={{
            width: "6px",
            height: "6px",
            background: flip ? "#8b5cf6" : "#06b6d4",
            boxShadow: flip
              ? "0 0 8px rgba(139,92,246,0.9)"
              : "0 0 8px rgba(6,182,212,0.9)",
          }}
        />
      </motion.div>

      {/* Trailing glow behind the dot */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-px pointer-events-none"
        initial={{ left: flip ? "90%" : "10%", width: 0, opacity: 0 }}
        animate={{
          left: flip ? ["90%", "10%"] : ["10%", "90%"],
          width: ["0%", "8%", "0%"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
        style={{
          background: flip
            ? "linear-gradient(90deg, transparent, rgba(139,92,246,0.6))"
            : "linear-gradient(90deg, rgba(6,182,212,0.6), transparent)",
        }}
      />
    </div>
  );
};

export default SectionDivider;
