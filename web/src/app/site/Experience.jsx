import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "../../data/experience";

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative group"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${experience.glow} 0%, transparent 60%)` }}
      />

      <div
        className="relative rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1"
        style={{
          background: 'rgba(13,13,26,0.8)',
          border: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}
      >
        {/* Header row */}
        <div className="flex items-start gap-4 mb-5">
          {/* Logo */}
          <div
            className={`flex-shrink-0 relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden`}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-9 h-9 object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-slate-100 leading-tight">{experience.position}</h3>
            <p className="text-sm text-slate-400 mt-0.5">{experience.company}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.color}`}
              />
              <span className="text-xs font-mono text-slate-500">{experience.duration}</span>
            </div>
          </div>

          {/* External link */}
          {experience.website && (
            <a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
              aria-label={`Visit ${experience.company}`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.2), transparent)' }} />

        {/* Achievements */}
        <ul className="space-y-2.5 mb-5">
          {experience.achievements.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + i * 0.07 + 0.3 }}
              className="flex items-start gap-3 text-sm text-slate-400"
            >
              <span
                className={`flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.color}`}
              />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="tech-badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-4 py-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">// work experience</p>
          <h2 className="section-title text-3xl font-bold">
            Professional <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-sm text-slate-500 mt-3">Building innovative solutions through hands-on development</p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
