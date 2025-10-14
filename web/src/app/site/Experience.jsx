import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    company: "Ministry of Public Works and Transport",
    position: "Full Stack Developer - Internship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Emblem_of_MPWT_%28Cambodia%29.svg/1200px-Emblem_of_MPWT_%28Cambodia%29.svg.png",
    logoColors: "from-[#003399] to-blue-400",
    logoTextColor: "text-blue-800",
    headerColors: "from-blue-900 to-blue-500",
    duration: "June 2025 - October 2025",
    website: "https://www.mpwt.gov.kh/kh/home",
    achievements: [
      {
        iconColor: "bg-blue-800",
        description: "Developed <span class=\"font-semibold text-[#003399]\">Document Management System</span>"
      },
      {
        iconColor: "bg-blue-800",
        description: "Facilitate easy document search & streamline administrative workflows"
      },
      {
        iconColor: "bg-blue-800",
        description: "Support review, approval, task assignment & real-time work progress tracking with WebSocket integration"
      },
      {
        iconColor: "bg-blue-800",
        description: "Secure document sharing with role-based access, standardized templates & confidentiality controls"
      },
      {
        iconColor: "bg-blue-800",
        description: "Automatic workflow generation as PDF"
      }
    ],
    technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'WebSocket', 'Resend']
  },
  {
    id: 2,
    company: "CamCyber Digital Tech Team",
    position: "Software Engineer - Part Time", // Fixed typo: "Sortware Enginner"
    logo: "https://www.camcyber.com/assets/img/camcyber.png",
    logoColors: "from-blue-100 to-purple-100",
    logoTextColor: "text-blue-600",
    headerColors: "from-pink-500 to-purple-600",
    duration: "November 2023 – Present",
    website: "https://www.camcyber.com",
    achievements: [
      {
        iconColor: "bg-cyan-600",
        description: "Developed scalable full-stack applications serving <span class=\"font-semibold text-blue-600\">1,000+ users</span> using Angular, NestJS, Laravel, and PostgreSQL/MySQL in Dockerized environments."
      },
      {
        iconColor: "bg-cyan-600",
        description: "Integrated advanced third-party solutions including jsreport for dynamic reporting, WebSocket for real-time communication, and Keycloak for secure authentication with role-based access control."
      },
      {
        iconColor: "bg-cyan-600",
        description: "Designed responsive front-end interfaces and data-driven dashboards, significantly improving user engagement and overall product usability."
      },
      {
        iconColor: "bg-cyan-600",
        description: "Contributed to CI/CD pipeline optimization using Git and DigitalOcean, enabling faster and more reliable deployments across all development stages."
      }
    ],
    technologies: ['UML', 'Angular', 'NestJS', 'Laravel', 'PostgreSQL', 'MySQL', 'Docker', 'WebSocket', 'Keycloak', 'Git', 'DigitalOcean']
  },
];
const ExperienceComponent = () => {
  return (
    <section className="min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center pt-2 max-980:justify-center">
            <h1 className="text-3xl font-bold">💻ᝰ.ᐟ Work Experience</h1>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"></div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="relative mb-20"
            >
              {/* Timeline Node */}
              <div className="absolute z-10 w-4 h-4 transform border-4 rounded-full shadow-lg left-6 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

              {/* Experience Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-12 md:pl-12'}`}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-xl"
                >
                  {/* Card Header */}
                  <div className={`p-6 text-white bg-gradient-to-r ${experience.headerColors}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 p-2 bg-white shadow-lg rounded-xl">
                          <div className={`flex items-center justify-center w-full h-full rounded-lg  ${experience.logoColors}`}>
                            <img src={experience.logo} alt="" />
                          </div>
                        </div>
                        <div>
                          <h3 className="mb-1 text-xl font-bold">{experience.position}</h3>
                          <p className="font-medium">{experience.company}</p>
                        </div>
                      </div>
                      {experience.website && (
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 transition-all duration-200 bg-white rounded-lg bg-opacity-20 hover:bg-opacity-30 group"
                          aria-label={`Visit ${experience.company} website`}
                        >
                          <svg className="w-5 h-5 text-white group-hover:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Duration */}
                    <div className="flex items-center mb-6 space-x-2 text-gray-600">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{experience.duration}</span>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="mb-3 font-semibold text-gray-800">Key Responsibilities & Achievements</h4>
                      <div className="space-y-3">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                            className="flex items-start space-x-3 group"
                          >
                            <div className={`flex-shrink-0 w-2 h-2 mt-2 transition-transform ${achievement.iconColor} rounded-full group-hover:scale-125`}></div>
                            <p
                              className="leading-relaxed text-gray-700"
                              dangerouslySetInnerHTML={{ __html: achievement.description }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    {experience.technologies.length > 0 && (
                      <div className="pt-6 mt-6 border-t border-gray-100">
                        <h4 className="mb-3 font-semibold text-gray-800">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                              className="px-3 py-1 text-sm font-medium text-blue-700 transition-colors border border-blue-200 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 cursor-default"
                              whileHover={{ scale: 1.05 }}
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
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="max-w-2xl mx-auto leading-relaxed text-gray-600">
            Passionate about creating innovative solutions and continuously learning new technologies to deliver exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceComponent;