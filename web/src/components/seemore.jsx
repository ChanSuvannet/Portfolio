import { motion } from 'framer-motion';

export const SeeMoreButton = ({ showAll, setShowAll, filteredProjects }) => {
  if (showAll || filteredProjects.length <= 4) return null;

  return (
    <div className="mt-10 text-center">
      <motion.button
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setShowAll(true)}
        className="relative inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 group overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(6,182,212,0.3)',
        }}
      >
        {/* Hover fill */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.12))' }} />
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
          style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, transparent 70%)' }} />

        <span className="relative z-10 flex items-center gap-2">
          <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          See More Projects
          <motion.svg
            className="w-4 h-4 text-cyan-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </span>
      </motion.button>
    </div>
  );
};
