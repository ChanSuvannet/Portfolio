import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    company: "Ministry of Public Works and Transport",
    position: "Full Stack Developer - Internship",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Emblem_of_MPWT_%28Cambodia%29.svg/1200px-Emblem_of_MPWT_%28Cambodia%29.svg.png",
    duration: "June 2025 - October 2025",
    website: "https://www.mpwt.gov.kh/kh/home",
    achievements: [
      "Developed Document Management System to modernize government workflows",
      "Facilitated easy document search and streamlined administrative workflows across multiple departments",
      "Implemented review, approval, task assignment & real-time work progress tracking with WebSocket integration",
      "Secured document sharing with role-based access, standardized templates & confidentiality controls",
      "Automated workflow generation as PDF for official documentation"
    ],
    technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'WebSocket', 'Resend']
  },
  {
    id: 2,
    company: "CamCyber Digital Tech Team",
    position: "Software Engineer - Part Time",
    logo: "https://www.camcyber.com/assets/img/camcyber.png",
    duration: "November 2023 – November 2025",
    website: "https://www.camcyber.com",
    achievements: [
      "Developed scalable full-stack applications serving 1,000+ users using Angular, NestJS, Laravel, and PostgreSQL/MySQL",
      "Integrated advanced third-party solutions including jsreport for dynamic reporting, WebSocket for real-time communication, and Keycloak for secure authentication",
      "Designed responsive front-end interfaces and data-driven dashboards, significantly improving user engagement and product usability",
      "Optimized CI/CD pipeline using Git and DigitalOcean, enabling faster and more reliable deployments across development stages"
    ],
    technologies: ['UML', 'Angular', 'NestJS', 'Laravel', 'PostgreSQL', 'MySQL', 'Docker', 'WebSocket', 'Keycloak', 'Git', 'DigitalOcean']
  },
];

const ExperienceComponent = () => {
  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-center mb-2">
            <div className="flex justify-center max-980:justify-center">
              <h1 className="text-2xl font-bold">💼 Work Experience</h1>
            </div>
            <p className="text-gray-600 mt-1">Building innovative solutions through hands-on development</p>
          </div>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 p-2 bg-gray-50 border border-gray-200 rounded">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{experience.position}</h2>
                    <p className="text-gray-700">{experience.company}</p>
                    <p className="text-sm text-gray-500">{experience.duration}</p>
                  </div>
                </div>

                {experience.website && (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={`Visit ${experience.company} website`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-gray-400 rounded-full"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;