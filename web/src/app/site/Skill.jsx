import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    id: "langs",
    title: "Programming Languages",
    barColor: "#2563eb",
    icon: (
      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    iconBg: "bg-blue-50 border-blue-100",
    shields: [
      "https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white",
      "https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white",
      "https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white",
      "https://img.shields.io/badge/C%23-239120?style=flat-square&logo=csharp&logoColor=white",
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    barColor: "#7c3aed",
    icon: (
      <svg className="w-4 h-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    iconBg: "bg-violet-50 border-violet-100",
    shields: [
      "https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white",
      "https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white",
      "https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white",
      "https://img.shields.io/badge/Gin-00ADD8?style=flat-square&logo=go&logoColor=white",
      "https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white",
      "https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white",
      "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black",
      "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
      "https://img.shields.io/badge/Nuxt.js-00DC82?style=flat-square&logo=nuxt.js&logoColor=white",
      "https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    barColor: "#059669",
    icon: (
      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    iconBg: "bg-emerald-50 border-emerald-100",
    shields: [
      "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white",
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    barColor: "#d97706",
    icon: (
      <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-amber-50 border-amber-100",
    shields: [
      "https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white",
      "https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white",
      "https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white",
      "https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white",
      "https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white",
      "https://img.shields.io/badge/DigitalOcean-0080FF?style=flat-square&logo=digitalocean&logoColor=white",
      "https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white",
      "https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white",
    ],
  },
];

const SkillCard = ({ category, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="glass-card overflow-hidden"
    >
      <div className="h-0.5 w-full" style={{ backgroundColor: category.barColor }} />

      <div className="p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-7 h-7 rounded-lg border flex items-center justify-center ${category.iconBg}`}>
            {category.icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-900">{category.title}</h3>
        </div>

        <div className="h-px bg-gray-100 mb-4" />

        <div className="flex flex-wrap gap-2">
          {category.shields.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`${category.id}-skill-${i}`}
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 + i * 0.04 + 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="rounded cursor-default"
              style={{ height: "20px" }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Tech Stack</p>
          <h2 className="section-title">
            Skills <span className="text-gradient-purple">Summary</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillComponent;
