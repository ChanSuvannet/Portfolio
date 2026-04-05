import { IconBrandGithub, IconExternalLink, IconFilter, IconWorld } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { SeeMoreButton } from '../../components/seemore';
import { projectsData } from '../../data/projects';

const filterCategories = [
  { id: 'all',         label: 'All Projects', count: projectsData.length },
  { id: 'opensource',  label: 'Open Source',  count: projectsData.filter(p => p.category === 'Open Source').length },
  { id: 'application', label: 'Applications', count: projectsData.filter(p => p.category === 'Application').length },
];

const FilterButton = ({ active, onClick, children, count }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
      active
        ? 'text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]'
        : 'text-slate-400 hover:text-slate-200'
    }`}
    style={active
      ? { background: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(139,92,246,0.25))', border: '1px solid rgba(6,182,212,0.4)' }
      : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }
    }
  >
    {children}
    <span className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${active ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-slate-500'}`}>
      {count}
    </span>
  </motion.button>
);

const StatusBadge = ({ status }) => {
  const config = {
    'Completed':     { color: 'text-emerald-400', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)', dot: 'bg-emerald-400' },
    'In Development':{ color: 'text-amber-400',   bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)', dot: 'bg-amber-400' },
    'Active':        { color: 'text-blue-400',    bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.3)', dot: 'bg-blue-400' },
  }[status] || { color: 'text-slate-400', bg: 'rgba(100,116,139,0.1)', border: 'rgba(100,116,139,0.3)', dot: 'bg-slate-400' };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color}`}
      style={{ background: config.bg, border: `1px solid ${config.border}` }}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative group overflow-hidden rounded-2xl ${project.className}`}
      style={{
        background: 'rgba(13,13,26,0.85)',
        border: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Hover glow overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top, ${project.glow} 0%, transparent 60%)` }}
      />

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
        {/* Image overlay */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(13,13,26,0.95) 100%)' }} />

        {/* Badges on image */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400"
            style={{ background: 'rgba(13,13,26,0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Gradient line */}
        <div className={`h-0.5 w-12 rounded-full mb-4 bg-gradient-to-r ${project.accent}`} />

        <h3 className="text-sm font-semibold text-slate-100 mb-2 leading-snug group-hover:text-white transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-badge" style={{ fontSize: '10px', padding: '2px 8px' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-white/5">
          <a
            href={project.documentation || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200 hover:opacity-90 bg-gradient-to-r ${project.accent}`}
            style={{ boxShadow: `0 4px 16px ${project.glow}` }}
          >
            <IconExternalLink className="w-3.5 h-3.5" />
            View Project
          </a>

          {project.category === 'Open Source' && (
            <button className="p-2 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/10 border border-white/08 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <IconBrandGithub className="w-4 h-4" />
            </button>
          )}
          <button className="p-2 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/10 transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <IconWorld className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const EmptyState = () => (
  <div className="text-center py-20">
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
      <IconFilter className="w-7 h-7 text-slate-600" />
    </div>
    <p className="text-slate-500 text-sm">No projects found for this filter.</p>
  </div>
);

const ProfessionalProjectComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects = projectsData.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'opensource') return p.category === 'Open Source';
    if (activeFilter === 'application') return p.category === 'Application';
    return true;
  });
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-4 py-24"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)' }}
    >
      {/* Ambient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle mb-3">// recent works</p>
          <h2 className="section-title text-3xl font-bold">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filterCategories.map((cat) => (
            <FilterButton
              key={cat.id}
              active={activeFilter === cat.id}
              onClick={() => { setActiveFilter(cat.id); setShowAll(false); }}
              count={cat.count}
            >
              {cat.label}
            </FilterButton>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {visibleProjects.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
            >
              {visibleProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <EmptyState key="empty" />
          )}
        </AnimatePresence>

        {/* See more */}
        {!showAll && filteredProjects.length > 4 && (
          <div className="text-center">
            <SeeMoreButton showAll={showAll} setShowAll={setShowAll} filteredProjects={filteredProjects} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalProjectComponent;
