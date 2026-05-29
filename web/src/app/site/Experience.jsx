import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "../../data/experience";

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="glass-card p-6"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
          <img src={experience.logo} alt={experience.company} className="w-9 h-9 object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug">{experience.position}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{experience.company}</p>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-xs text-gray-400">{experience.duration}</span>
          </div>
        </div>
        {experience.website && (
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
            aria-label={`Visit ${experience.company}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      <div className="h-px bg-gray-100 mb-4" />

      {/* Achievements */}
      <ul className="space-y-2 mb-5">
        {experience.achievements.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.12 + i * 0.06 + 0.2 }}
            className="flex items-start gap-2.5 text-sm text-gray-600"
          >
            <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
        {experience.technologies.map(tech => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Experience</p>
          <h2 className="section-title">
            Professional <span className="text-gradient-cyan">Journey</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
            Hands-on development across government systems and enterprise software.
          </p>
        </motion.div>

        <div className="space-y-5">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
