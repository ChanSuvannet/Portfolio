import { IconBrandGithub, IconExternalLink, IconFilter } from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projectsData } from "../../data/projects";

const filterCategories = [
  { id: "all",         label: "All Projects", count: projectsData.length },
  { id: "opensource",  label: "Open Source",  count: projectsData.filter(p => p.category === "Open Source").length },
  { id: "application", label: "Applications", count: projectsData.filter(p => p.category === "Application").length },
];

const FilterButton = ({ active, onClick, children, count }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
      active
        ? "text-white bg-blue-600 shadow-sm"
        : "text-gray-600 bg-white border border-gray-200 hover:border-gray-300 hover:text-gray-900"
    }`}
  >
    {children}
    <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
      active ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-500"
    }`}>
      {count}
    </span>
  </button>
);

const StatusBadge = ({ status }) => {
  const cfg = {
    Completed:      { cls: "bg-green-50 text-green-700 border-green-200",  dot: "bg-green-500"  },
    "In Development": { cls: "bg-amber-50 text-amber-700 border-amber-200",  dot: "bg-amber-400"  },
    Active:         { cls: "bg-blue-50  text-blue-700  border-blue-200",   dot: "bg-blue-500"   },
  }[status] || { cls: "bg-gray-50 text-gray-600 border-gray-200", dot: "bg-gray-400" };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${cfg.cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {status}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`glass-card overflow-hidden ${project.className}`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-md text-xs bg-white/90 text-gray-600 border border-gray-200 font-medium">
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="h-0.5 w-10 rounded-full mb-3 bg-blue-500" />

        <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug line-clamp-2">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-gray-100">
          <a
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <IconExternalLink className="w-3.5 h-3.5" />
            View Project
          </a>
          {project.category === "Open Source" && (
            <button className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 transition-all">
              <IconBrandGithub className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const EmptyState = () => (
  <div className="text-center py-20">
    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
      <IconFilter className="w-6 h-6 text-gray-400" />
    </div>
    <p className="text-gray-500 text-sm">No projects found for this filter.</p>
  </div>
);

const ProfessionalProjectComponent = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects = projectsData.filter(p => {
    if (activeFilter === "all")         return true;
    if (activeFilter === "opensource")  return p.category === "Open Source";
    if (activeFilter === "application") return p.category === "Application";
    return true;
  });
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-subtitle mb-3">Projects</p>
          <h2 className="section-title">
            Featured <span className="text-gradient-cyan">Work</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filterCategories.map(cat => (
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
              transition={{ duration: 0.25 }}
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

        {/* Show more */}
        {!showAll && filteredProjects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all shadow-sm"
            >
              Show all {filteredProjects.length} projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalProjectComponent;
