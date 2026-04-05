import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * ActivityTicker — a blockchain mempool-style scrolling ticker.
 * Simulates live portfolio "transactions" to give a Web3 feel.
 * Each item maps to a real portfolio event (commit, deploy, merge).
 */

const FEED = [
  { hash: "0x4a2b…c83f", action: "deployed", label: "DocManagement.sol",  status: "confirmed", chain: "ETH",  time: "2s" },
  { hash: "0x9e1a…7d4b", action: "merged",   label: "feat/websocket-rt",  status: "confirmed", chain: "GIT",  time: "5m" },
  { hash: "0x3f7c…2a91", action: "shipped",  label: "CCN v2.3.0 → prod",  status: "confirmed", chain: "DO",   time: "1h" },
  { hash: "0x8b5d…1e3c", action: "built",    label: "CI pipeline #142",   status: "confirmed", chain: "CI",   time: "2h" },
  { hash: "0x2c4e…9f6a", action: "deployed", label: "AMT system live",    status: "confirmed", chain: "ETH",  time: "1d" },
  { hash: "0x6d3b…8c2e", action: "pushed",   label: "50 commits to main", status: "confirmed", chain: "GIT",  time: "2d" },
  { hash: "0x1f8a…4e7d", action: "deployed", label: "DRS v1.0.0 → prod",  status: "confirmed", chain: "VPS",  time: "3d" },
  { hash: "0x7e2c…6b1f", action: "closed",   label: "PR #88 merged",      status: "confirmed", chain: "GIT",  time: "4d" },
];

const CHAIN_COLORS = {
  ETH: { bg: "rgba(98,126,234,0.15)", text: "#627eea", border: "rgba(98,126,234,0.3)" },
  GIT: { bg: "rgba(240,80,50,0.12)",  text: "#f05032", border: "rgba(240,80,50,0.25)" },
  DO:  { bg: "rgba(0,128,255,0.12)",  text: "#0080ff", border: "rgba(0,128,255,0.25)" },
  CI:  { bg: "rgba(6,182,212,0.12)",  text: "#06b6d4", border: "rgba(6,182,212,0.25)" },
  VPS: { bg: "rgba(103,58,183,0.12)", text: "#673ab7", border: "rgba(103,58,183,0.25)" },
};

const TickerItem = ({ item }) => {
  const chain = CHAIN_COLORS[item.chain] || CHAIN_COLORS.CI;
  return (
    <span className="inline-flex items-center gap-3 mx-8 whitespace-nowrap">
      {/* Hash */}
      <span className="font-mono text-xs text-slate-500">{item.hash}</span>

      {/* Chain badge */}
      <span
        className="font-mono text-[10px] px-1.5 py-0.5 rounded font-semibold"
        style={{ background: chain.bg, color: chain.text, border: `1px solid ${chain.border}` }}
      >
        {item.chain}
      </span>

      {/* Action + label */}
      <span className="text-xs text-slate-400">
        <span className="text-cyan-400 font-medium">{item.action}</span>{" "}
        <span className="text-slate-300">{item.label}</span>
      </span>

      {/* Status */}
      <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        {item.status}
      </span>

      {/* Time */}
      <span className="text-[10px] font-mono text-slate-600">{item.time} ago</span>

      {/* Separator */}
      <span className="text-slate-700 text-xs">·</span>
    </span>
  );
};

const ActivityTicker = () => {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  // Double the feed for seamless loop
  const doubled = [...FEED, ...FEED];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: "rgba(13,13,26,0.8)",
        borderTop: "1px solid rgba(6,182,212,0.1)",
        borderBottom: "1px solid rgba(6,182,212,0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(13,13,26,1) 0%, transparent 100%)" }}
      />
      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, rgba(13,13,26,1) 0%, transparent 100%)" }}
      />

      {/* Header label */}
      <div
        className="absolute left-0 top-0 bottom-0 z-20 flex items-center px-4 gap-2"
        style={{
          background: "rgba(13,13,26,0.95)",
          borderRight: "1px solid rgba(6,182,212,0.1)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-mono font-semibold text-emerald-400 uppercase tracking-widest">
          Live
        </span>
      </div>

      {/* Scrolling track */}
      <div className="pl-20 py-2">
        <motion.div
          ref={trackRef}
          className="inline-flex"
          animate={trackWidth ? { x: [0, -trackWidth] } : {}}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {doubled.map((item, i) => (
            <TickerItem key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ActivityTicker;
