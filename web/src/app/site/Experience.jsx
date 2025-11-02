import { motion } from "framer-motion";
import { useState } from "react";

const experienceData = [
  {
    id: 1,
    company: "Ministry of Public Works and Transport",
    position: "Full Stack Developer - Internship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Emblem_of_MPWT_%28Cambodia%29.svg/1200px-Emblem_of_MPWT_%28Cambodia%29.svg.png",
    logoColors: "from-[#003399] to-blue-400",
    headerColors: "from-blue-900 to-blue-600",
    cardAccent: "blue",
    duration: "June 2025 - October 2025",
    website: "https://www.mpwt.gov.kh/kh/home",
    achievements: [
      {
        description: "Developed <span class=\"font-semibold text-blue-700\">Document Management System</span> to modernize government workflows"
      },
      {
        description: "Facilitated easy document search and streamlined administrative workflows across multiple departments"
      },
      {
        description: "Implemented review, approval, task assignment & real-time work progress tracking with WebSocket integration"
      },
      {
        description: "Secured document sharing with role-based access, standardized templates & confidentiality controls"
      },
      {
        description: "Automated workflow generation as PDF for official documentation"
      }
    ],
    technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'WebSocket', 'Resend']
  },
  {
    id: 2,
    company: "CamCyber Digital Tech Team",
    position: "Software Engineer - Part Time",
    logo: "https://www.camcyber.com/assets/img/camcyber.png",
    logoColors: "from-blue-100 to-purple-100",
    headerColors: "from-pink-500 to-purple-600",
    cardAccent: "purple",
    duration: "November 2023 – Present",
    website: "https://www.camcyber.com",
    achievements: [
      {
        description: "Developed scalable full-stack applications serving <span class=\"font-semibold text-purple-700\">1,000+ users</span> using Angular, NestJS, Laravel, and PostgreSQL/MySQL"
      },
      {
        description: "Integrated advanced third-party solutions including jsreport for dynamic reporting, WebSocket for real-time communication, and Keycloak for secure authentication"
      },
      {
        description: "Designed responsive front-end interfaces and data-driven dashboards, significantly improving user engagement and product usability"
      },
      {
        description: "Optimized CI/CD pipeline using Git and DigitalOcean, enabling faster and more reliable deployments across development stages"
      }
    ],
    technologies: ['UML', 'Angular', 'NestJS', 'Laravel', 'PostgreSQL', 'MySQL', 'Docker', 'WebSocket', 'Keycloak', 'Git', 'DigitalOcean']
  },
];

const ExperienceComponent = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const getAccentColors = (accent) => {
    const colors = {
      blue: {
        dot: "from-blue-500 to-blue-600",
        badge: "bg-blue-500",
        hover: "hover:bg-blue-50",
        tech: "from-blue-50 to-blue-100 text-blue-700 border-blue-200 hover:border-blue-300",
        glow: "shadow-blue-500/20"
      },
      purple: {
        dot: "from-purple-500 to-pink-500",
        badge: "bg-purple-500",
        hover: "hover:bg-purple-50",
        tech: "from-purple-50 to-pink-50 text-purple-700 border-purple-200 hover:border-purple-300",
        glow: "shadow-purple-500/20"
      }
    };
    return colors[accent];
  };

  return (
    <section className="min-h-screen px-4 py-16 ">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center gap-3 mb-4 bg-white rounded-full"
          >
            {/* Header */}
            <div className="text-center mb-2">
              <div className="flex justify-center max-980:justify-center">
                <h1 className="text-2xl font-bold">💼 Work Experience</h1>
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600"
          >
            Building innovative solutions and growing through hands-on experience
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-px w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-transparent"
          ></motion.div>

          {experienceData.map((experience, index) => {
            const colors = getAccentColors(experience.cardAccent);
            const isExpanded = expandedCard === experience.id;

            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                className={`relative mb-24 ${index === experienceData.length - 1 ? 'mb-0' : ''}`}
              >
                {/* Enhanced Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`absolute z-20 w-6 h-6 transform border-4 border-white rounded-full shadow-xl left-5 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r ${colors.dot}`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.dot} opacity-30`}
                  />
                </motion.div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-0 md:w-[48%] ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl ${colors.glow} transition-all duration-300`}
                  >
                    {/* Card Header with Gradient */}
                    <div className={`relative p-6 text-white bg-gradient-to-r ${experience.headerColors} overflow-hidden`}>
                      {/* Decorative Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                      </div>

                      <div className="relative flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          {/* Enhanced Logo Container */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-16 h-16 p-2 bg-white shadow-2xl rounded-xl"
                          >
                            <div className={`flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-br ${experience.logoColors}`}>
                              <img src={experience.logo} alt={experience.company} className="object-contain w-full h-full p-1" />
                            </div>
                          </motion.div>

                          <div>
                            <h3 className="mb-1 text-xl font-bold leading-tight">{experience.position}</h3>
                            <p className="font-medium opacity-95">{experience.company}</p>
                          </div>
                        </div>

                        {/* Website Link */}
                        {experience.website && (
                          <motion.a
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 transition-all duration-200 bg-white rounded-lg bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm group"
                            aria-label={`Visit ${experience.company} website`}
                          >
                            <svg className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Duration with Icon */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center mb-6 space-x-3 text-gray-600"
                      >
                        <div className={`p-2 ${colors.badge} bg-opacity-10 rounded-lg`}>
                          <svg className={`w-5 h-5 ${experience.cardAccent === 'blue' ? 'text-blue-600' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-700">{experience.duration}</span>
                      </motion.div>

                      {/* Achievements */}
                      <div className="mb-6 space-y-4">
                        <h4 className="flex items-center gap-2 mb-4 text-sm font-bold tracking-wide text-gray-800 uppercase">
                          <div className={`w-1 h-5 ${colors.badge} rounded-full`}></div>
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {experience.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                              className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${colors.hover} group`}
                            >
                              <motion.div
                                whileHover={{ scale: 1.5, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                                className={`flex-shrink-0 w-2 h-2 mt-2 ${colors.badge} rounded-full`}
                              ></motion.div>
                              <p
                                className="leading-relaxed text-gray-700 text-[15px]"
                                dangerouslySetInnerHTML={{ __html: achievement.description }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      {experience.technologies.length > 0 && (
                        <div className="pt-6 mt-6 border-t border-gray-100">
                          <h4 className="flex items-center gap-2 mb-4 text-sm font-bold tracking-wide text-gray-800 uppercase">
                            <div className={`w-1 h-5 ${colors.badge} rounded-full`}></div>
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                whileHover={{ scale: 1.08, y: -2 }}
                                className={`px-4 py-2 text-sm font-semibold transition-all border rounded-full cursor-default bg-gradient-to-r ${colors.tech}`}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="">
            <p className="">
              Passionate about creating <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">innovative solutions</span> and continuously learning new technologies to deliver exceptional user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceComponent;