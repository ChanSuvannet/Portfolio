import { motion } from "framer-motion";

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
            <h1 className="text-xl font-bold">💻ᝰ.ᐟ Work Experience</h1>
          </div>

        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Timeline Node */}
            <div className="absolute z-10 w-4 h-4 transform border-4 rounded-full shadow-lg left-6 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

            {/* Experience Card */}
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12">
              <motion.div
                whileHover={{ y: -5, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden transition-all duration-300 "
              >
                {/* Card Header */}
                <div className="p-6 text-white bg-gradient-to-r from-pink-500 to-purple-600">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 p-2 bg-white shadow-lg rounded-xl">
                        <div className="flex items-center justify-center w-full h-full rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                          <span className="text-2xl font-bold text-blue-600">CC</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1 text-xl font-bold">Junior Full Stack Developer</h3>
                        <p className="font-medium text-blue-100">CamCyber Digital Tech Team</p>
                      </div>
                    </div>
                    <a
                      href="https://www.camcyber.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-all duration-200 bg-white rounded-lg bg-opacity-20 hover:bg-opacity-30 group"
                    >

                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Duration */}
                  <div className="flex items-center mb-6 space-x-2 text-gray-600">

                    <span className="font-medium">November 2023 – July 2025</span>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="mb-3 font-semibold text-gray-800">Key Responsibilities & Achievements</h4>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 group">
                        <div className="w-2 h-2 mt-2 transition-transform bg-blue-500 rounded-full group-hover:scale-125"></div>
                        <p className="leading-relaxed text-gray-700">
                          Developed scalable full-stack applications serving <span className="font-semibold text-blue-600">1,000+ users</span> using Angular, NestJS, Laravel, and PostgreSQL/MySQL in Dockerized environments.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3 group">
                        <div className="w-2 h-2 mt-2 transition-transform bg-purple-500 rounded-full group-hover:scale-125"></div>
                        <p className="leading-relaxed text-gray-700">
                          Integrated advanced third-party solutions including jsreport for dynamic reporting, WebSocket for real-time communication, and Keycloak for secure authentication with role-based access control.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3 group">
                        <div className="w-2 h-2 mt-2 transition-transform bg-green-500 rounded-full group-hover:scale-125"></div>
                        <p className="leading-relaxed text-gray-700">
                          Designed responsive front-end interfaces and data-driven dashboards, significantly improving user engagement and overall product usability.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3 group">
                        <div className="w-2 h-2 mt-2 transition-transform bg-orange-500 rounded-full group-hover:scale-125"></div>
                        <p className="leading-relaxed text-gray-700">
                          Contributed to CI/CD pipeline optimization using Git and DigitalOcean, enabling faster and more reliable deployments across all development stages.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <h4 className="mb-3 font-semibold text-gray-800">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Angular', 'NestJS', 'Laravel', 'PostgreSQL', 'MySQL', 'Docker', 'WebSocket', 'Keycloak', 'Git', 'DigitalOcean'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium text-blue-700 transition-colors border border-blue-200 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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