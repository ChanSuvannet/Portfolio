import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Cisco from "/src/assets/branch/cisco.png";
import Codecademey from "/src/assets/branch/codecademey.png";
import Coursera from "/src/assets/branch/caursera-removebg-preview.png";
import Freecodecamp from "/src/assets/branch/freecodecamp.png";
import Saylor from "/src/assets/branch/saylor.png";
import Udermy from "/src/assets/branch/udermy.png";
import ItcLogo from "/src/assets/icon/itc.png";
import HightSchool from "/src/assets/svg/hight-school.svg";

const timelineItems = [
  {
    logo: <img src={ItcLogo} alt="ITC" className="w-8 h-8 object-contain" />,
    degree: "Information and Communication Engineering",
    school: "Institute of Technology of Cambodia, Phnom Penh",
    period: "September 2021 – Present",
    color: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.3)",
    badge: "B.Eng",
    current: true,
  },
  {
    logo: (
      <img
        src={HightSchool}
        alt="High School"
        className="w-8 h-8 object-contain brightness-0 invert"
      />
    ),
    degree: "High School",
    school: "Hunsen Kampong Rou High School, Svay Rieng",
    period: "2015 – 2021",
    color: "from-purple-500 to-pink-500",
    glow: "rgba(139,92,246,0.3)",
    badge: "Diploma",
    current: false,
  },
  {
    logo: (
      <img
        src={HightSchool}
        alt="Primary"
        className="w-8 h-8 object-contain brightness-0 invert opacity-60"
      />
    ),
    degree: "Primary School",
    school: "Prey Chchamna Primary, Svay Rieng",
    period: "2009 – 2015",
    color: "from-emerald-400 to-teal-400",
    glow: "rgba(16,185,129,0.3)",
    badge: "Primary",
    current: false,
  },
];

const selfLearnPlatforms = [
  { src: Udermy, alt: "Udemy" },
  { src: Coursera, alt: "Coursera" },
  { src: Codecademey, alt: "Codecademy" },
  { src: Freecodecamp, alt: "freeCodeCamp" },
  { src: Saylor, alt: "Saylor" },
  { src: Cisco, alt: "Cisco" },
];

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative flex gap-5 group"
    >
      {/* Connector line */}
      {index < timelineItems.length - 1 && (
        <div
          className="absolute left-[19px] top-12 w-px h-[calc(100%+8px)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,182,212,0.3), rgba(6,182,212,0.05))",
          }}
        />
      )}

      {/* Node */}
      <div className="relative flex-shrink-0">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color}`}
          style={{ boxShadow: `0 0 16px ${item.glow}` }}
        >
          {item.logo}
        </div>
        {item.current && (
          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-dark-900 animate-pulse"
            style={{ "--dark-900": "#0a0a0f" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 group-hover:-translate-y-1 transition-transform duration-300">
        <div
          className="rounded-xl p-4 transition-all duration-300"
          style={{
            background: "rgba(13,13,26,0.7)",
            border: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <h3 className="text-sm font-semibold text-slate-200 leading-tight">
                {item.degree}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{item.school}</p>
            </div>
            <span
              className={`flex-shrink-0 text-xs font-mono px-2.5 py-1 rounded-full bg-gradient-to-r ${item.color}`}
              style={{ color: "white", fontSize: "10px" }}
            >
              {item.badge}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-3">
            <svg
              className="w-3 h-3 text-slate-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs font-mono text-slate-500">
              {item.period}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EducationComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-4 py-24"
      style={{
        background: "linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)",
      }}
    >
      {/* Ambient */}
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">// education</p>
          <h2 className="section-title text-3xl font-bold">
            Academic <span className="text-gradient-purple">Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formal Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(6,182,212,0.12)",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
              >
                <svg
                  className="w-4 h-4 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-300 font-mono">
                Formal Education
              </h3>
            </div>
            <div>
              {timelineItems.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Self-Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-8 flex flex-col"
          >
            {/* Terminal dots */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 text-xs font-mono text-slate-500">
                self_learning.sh
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              I actively pursue self-learning through online courses, hands-on
              projects, technical blogs, and open-source contributions, ensuring
              I stay updated and adaptable in the ever-evolving tech industry.
              🚀
            </p>

            <div className="mb-4">
              <svg
                className="w-5 h-5 text-cyan-400/50 mx-auto"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
            </div>

            {/* Platform logos grid */}
            <div className="grid grid-cols-3 gap-4 flex-1 items-center">
              {selfLearnPlatforms.map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="flex items-center justify-center p-3 rounded-xl transition-all duration-200 group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="h-8 w-auto max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ filter: "brightness(0) invert(1)" }}
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
