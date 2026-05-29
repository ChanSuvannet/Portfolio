import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Profile from "/src/assets/image/image.png";

const STATS = [
  { value: "10+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
  { value: "6", label: "Certifications" },
  { value: "3", label: "Ongoing Projects" },
];

const TAGS = [
  "Full-Stack",
  "Microservices",
  "DevOps",
  "TypeScript",
  "Agile",
  "REST API",
];

const FOCUS_ITEMS = [
  "Designing RESTful APIs and scalable backend services",
  "Building secure authentication and role-based access control",
  "Managing containerized deployments with Docker and CI/CD",
  "Writing maintainable, well-architected TypeScript code",
];

const AboutMeComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">About Me</p>
          <h2 className="section-title">
            Building with <span className="text-gradient-cyan">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={Profile}
                alt="Chan Suvannet"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  Chan Suvannet
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Full Stack Developer
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Results-driven software engineer with expertise in full-stack
              development and microservices architecture. I build scalable web
              applications, design clean REST APIs, and collaborate in Agile
              teams to deliver reliable, user-focused software solutions.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {TAGS.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 pt-4 border-t border-gray-100">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              Khmer (Native) · English (Working Proficiency) · French (Basic)
            </div>
          </motion.div>

          {/* Stats + focus */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="glass-card p-5 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-card p-6"
            >
              <h4 className="text-sm font-semibold text-gray-900 mb-4">
                What I focus on
              </h4>
              <ul className="space-y-2.5">
                {FOCUS_ITEMS.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComponent;
