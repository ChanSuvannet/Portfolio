import { motion } from 'framer-motion';

const SkillComponent = () => {
  return (
    <div className="flex justify-center items-start flex-grow mt-10 md:px-4 sm:px-4 px-0">
      <div className="w-full max-w-7xl">

        {/* Skill Summary Section */}
        <h1 className="text-xl text-center font-bold max-600:text-2xl">🛠 Skills Summary</h1>
        <br />
        {/* Programming Languages */}
        <div className="mb-8">
          <p className="text-sm text-center my-3 font-semibold">Programming Languages</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" />
            </motion.a>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="mb-8">
          <p className="text-sm text-center mb-3 font-semibold">Frameworks & Libraries</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/Gin-00ADD8?style=for-the-badge&logo=go&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
            </motion.a>
          </div>
        </div>

        {/* Databases */}
        <div className="mb-8">
          <p className="text-sm text-center mb-3 font-semibold">Databases</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
            </motion.a>
          </div>
        </div>
        {/* Tools & Platforms */}
        <div className="mb-8">
          <p className="text-sm text-center mb-3 font-semibold">Tools & Platforms</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white"
                alt="Jenkins"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/CI/CD-0A0A0A?style=for-the-badge&logo=githubactions&logoColor=white"
                alt="CI/CD"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white"
                alt="Cloudflare"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white"
                alt="DigitalOcean"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/Hostinger-673AB7?style=for-the-badge&logo=hostinger&logoColor=white"
                alt="Hostinger"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/JSReport-2481C4?style=for-the-badge&logo=none&logoColor=white"
                alt="JSReport"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
                alt="Postman"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                alt="Figma"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img className="rounded-sm"
                src="https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white"
                alt="Canva"
              />
            </motion.a>
          </div>
        </div>
        {/* Soft Skills */}
        <div className="mb-8">
          <p className="text-sm text-center mb-3 font-semibold">Soft Skills</p>
          <div className="flex gap-4 justify-center">
            <div className="flex items-center">
              <span className="text-xl">🥇</span>
              <span className="ml-2">Teamwork</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl">💬</span>
              <span className="ml-2">Communication</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl">🔄</span>
              <span className="ml-2">Adaptability</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl">🧩</span>
              <span className="ml-2">Problem Solving</span>
            </div>
            <div className="flex items-center">
              <span className="text-xl">🤝</span>
              <span className="ml-2">Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillComponent;
