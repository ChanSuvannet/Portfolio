import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Cisco from "/src/assets/branch/cisco.png";
import Codecademey from "/src/assets/branch/codecademey.png";
import Coursera from "/src/assets/branch/caursera-removebg-preview.png";
import Freecodecamp from "/src/assets/branch/freecodecamp.png";
import Saylor from "/src/assets/branch/saylor.png";
import Udermy from "/src/assets/branch/udermy.png";
import ItcLogo from "/src/assets/icon/itc.png";

const timelineItems = [
  {
    logo: <img src={ItcLogo} alt="ITC" className="w-7 h-7 object-contain" />,
    degree: "B.Eng Information and Communication Engineering",
    school: "Institute of Technology of Cambodia, Phnom Penh",
    period: "September 2021 – Present",
    badge: "B.Eng",
    accentBg: "bg-blue-600",
    current: true,
  },
  {
    logo: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    degree: "High School Diploma",
    school: "Hunsen Kampong Rou High School, Svay Rieng",
    period: "2015 – 2021",
    badge: "Diploma",
    accentBg: "bg-violet-500",
    current: false,
  },
  {
    logo: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
    degree: "Primary School",
    school: "Prey Chchamna Primary School, Svay Rieng",
    period: "2009 – 2015",
    badge: "Primary",
    accentBg: "bg-gray-400",
    current: false,
  },
];

const selfLearnPlatforms = [
  { src: Udermy,      alt: "Udemy"       },
  { src: Coursera,    alt: "Coursera"    },
  { src: Codecademey, alt: "Codecademy"  },
  { src: Freecodecamp,alt: "freeCodeCamp"},
  { src: Saylor,      alt: "Saylor"      },
  { src: Cisco,       alt: "Cisco"       },
];

const TimelineItem = ({ item, index, isLast }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.4 }}
      className="relative flex gap-4"
    >
      {!isLast && (
        <div className="absolute left-[15px] top-10 w-px h-[calc(100%-8px)] bg-gray-200" />
      )}

      <div className="relative flex-shrink-0">
        <div className={`w-8 h-8 rounded-full ${item.accentBg} flex items-center justify-center shadow-sm`}>
          {item.logo}
        </div>
        {item.current && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-white" />
        )}
      </div>

      <div className={`flex-1 ${!isLast ? "pb-6" : ""}`}>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">{item.degree}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{item.school}</p>
            </div>
            <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full text-white ${item.accentBg}`}>
              {item.badge}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-2.5">
            <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-gray-400">{item.period}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Education</p>
          <h2 className="section-title">
            Academic <span className="text-gradient-purple">Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formal Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">Formal Education</h3>
            </div>
            <div>
              {timelineItems.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} isLast={i === timelineItems.length - 1} />
              ))}
            </div>
          </motion.div>

          {/* Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="glass-card p-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">Continuous Learning</h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-7">
              I actively pursue self-learning through online courses, hands-on projects,
              and open-source contributions to stay current with evolving industry practices
              and emerging technologies.
            </p>

            <div className="grid grid-cols-3 gap-3 flex-1 items-center">
              {selfLearnPlatforms.map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.06, duration: 0.3 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="flex items-center justify-center p-3 rounded-xl border border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white transition-all group"
                >
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="h-7 w-auto max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationComponent;
