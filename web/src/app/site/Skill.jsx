import { motion } from 'framer-motion';

const SkillComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="px-4 pb-20">
        <div className="flex justify-center items-start flex-grow">
          <div className="w-full max-w-7xl">

            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center pt-2 max-980:justify-center">
                <h1 className="text-3xl font-bold">🛠 Skills Summary</h1>
              </div>
            </motion.div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

              {/* Programming Languages */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-12"
              >
                <div className="bg-white rounded-2xl  border border-gray-100 p-8 hover:shadow-xl  duration-300">
                  <motion.h2
                    variants={itemVariants}
                    className="text-xl font-bold  text-center mb-8 border-b-2 border-blue-100 pb-4"
                  >
                    Programming Languages
                  </motion.h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {[
                      "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
                      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
                      "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
                      "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
                      "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white",
                      "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white"
                    ].map((src, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="transform hover:shadow-lg rounded-lg"
                      >
                        <img className="rounded-lg shadow-md" src={src} alt="Programming Language" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Frameworks & Libraries */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-12"
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                  <motion.h2
                    variants={itemVariants}
                    className="text-xl font-bold text-gray-800 text-center mb-8 border-b-2 border-purple-100 pb-4"
                  >
                    Frameworks & Libraries
                  </motion.h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {[
                      "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
                      "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
                      "https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
                      "https://img.shields.io/badge/Gin-00ADD8?style=for-the-badge&logo=go&logoColor=white",
                      "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
                      "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
                      "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
                      "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
                      "https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white",
                      "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"
                    ].map((src, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="transform hover:shadow-lg rounded-lg"
                      >
                        <img className="rounded-lg shadow-md" src={src} alt="Framework" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Databases */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-12"
              >
                <div className="bg-white rounded-2xl  border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                  <motion.h2
                    variants={itemVariants}
                    className="text-xl font-bold text-gray-800 text-center mb-8 border-b-2 border-green-100 pb-4"
                  >
                    Databases
                  </motion.h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {[
                      "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
                      "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"
                    ].map((src, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="transform hover:shadow-lg rounded-lg"
                      >
                        <img className="rounded-lg shadow-md" src={src} alt="Database" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tools & Platforms */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mb-12"
              >
                <div className="bg-white rounded-2xl  border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                  <motion.h2
                    variants={itemVariants}
                    className="text-xl font-bold text-gray-800 text-center mb-8 border-b-2 border-orange-100 pb-4"
                  >
                    Tools & Platforms
                  </motion.h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {[
                      { src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white", alt: "Git" },
                      { src: "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white", alt: "Jenkins" },
                      { src: "https://img.shields.io/badge/CI/CD-0A0A0A?style=for-the-badge&logo=githubactions&logoColor=white", alt: "CI/CD" },
                      { src: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white", alt: "Cloudflare" },
                      { src: "https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white", alt: "DigitalOcean" },
                      { src: "https://img.shields.io/badge/Hostinger-673AB7?style=for-the-badge&logo=hostinger&logoColor=white", alt: "Hostinger" },
                      { src: "https://img.shields.io/badge/JSReport-2481C4?style=for-the-badge&logo=none&logoColor=white", alt: "JSReport" },
                      { src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white", alt: "Postman" },
                      { src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white", alt: "Figma" },
                      { src: "https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white", alt: "Canva" }
                    ].map((tool, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="transform hover:shadow-lg rounded-lg"
                      >
                        <img className="rounded-lg shadow-md" src={tool.src} alt={tool.alt} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillComponent;