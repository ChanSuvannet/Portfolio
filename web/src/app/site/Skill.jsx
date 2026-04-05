import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    id: 'langs',
    title: "Programming Languages",
    icon: (
      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.15)",
    borderColor: "rgba(6,182,212,0.25)",
    shields: [
      "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
      "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
      "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
      "https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white",
      "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=csharp&logoColor=white",
    ],
  },
  {
    id: 'frameworks',
    title: "Frameworks & Libraries",
    icon: (
      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "from-purple-500 to-pink-500",
    glow: "rgba(139,92,246,0.15)",
    borderColor: "rgba(139,92,246,0.25)",
    shields: [
      "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
      "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
      "https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
      "https://img.shields.io/badge/Gin-00ADD8?style=for-the-badge&logo=go&logoColor=white",
      "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
      "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
      "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white",
      "https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white",
      "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
    ],
  },
  {
    id: 'databases',
    title: "Databases",
    icon: (
      <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    accent: "from-emerald-400 to-teal-500",
    glow: "rgba(16,185,129,0.15)",
    borderColor: "rgba(16,185,129,0.25)",
    shields: [
      "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
    ],
  },
  {
    id: 'tools',
    title: "Tools & Platforms",
    icon: (
      <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.15)",
    borderColor: "rgba(245,158,11,0.25)",
    shields: [
      { src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white", alt: "Git" },
      { src: "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white", alt: "Jenkins" },
      { src: "https://img.shields.io/badge/CI/CD-0A0A0A?style=for-the-badge&logo=githubactions&logoColor=white", alt: "CI/CD" },
      { src: "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white", alt: "Cloudflare" },
      { src: "https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white", alt: "DigitalOcean" },
      { src: "https://img.shields.io/badge/Hostinger-673AB7?style=for-the-badge&logo=hostinger&logoColor=white", alt: "Hostinger" },
      { src: "https://img.shields.io/badge/JSReport-2481C4?style=for-the-badge&logo=none&logoColor=white", alt: "JSReport" },
      { src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white", alt: "Postman" },
      { src: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white", alt: "Figma" },
      { src: "https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white", alt: "Canva" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const SkillCard = ({ category, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative group rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(13,13,26,0.8)',
        border: `1px solid ${category.borderColor}`,
        backdropFilter: 'blur(16px)',
        boxShadow: `0 0 0 0 ${category.glow}`,
        transition: 'box-shadow 0.3s ease',
      }}
      whileHover={{ boxShadow: `0 0 40px ${category.glow}` }}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${category.accent}`} />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top, ${category.glow} 0%, transparent 60%)` }}
      />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `radial-gradient(circle, ${category.glow.replace('0.15', '0.2')} 0%, transparent 70%)`, border: `1px solid ${category.borderColor}` }}
          >
            {category.icon}
          </div>
          <h3 className="text-sm font-semibold text-slate-200">{category.title}</h3>
        </div>

        {/* Divider */}
        <div className="h-px mb-5" style={{ background: `linear-gradient(90deg, ${category.borderColor}, transparent)` }} />

        {/* Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap gap-2"
        >
          {category.shields.map((shield, i) => {
            const src  = typeof shield === 'string' ? shield : shield.src;
            const alt  = typeof shield === 'string' ? `skill-${i}` : shield.alt;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="relative group/badge cursor-pointer"
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200"
                  style={{ background: `radial-gradient(circle, ${category.glow} 0%, transparent 70%)`, filter: 'blur(4px)' }}
                />
                <img
                  src={src}
                  alt={alt}
                  className="relative rounded-lg"
                  style={{
                    filter: 'brightness(0.9) contrast(1.1)',
                    transition: 'filter 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.filter = 'brightness(1.1) contrast(1.1)'; }}
                  onMouseLeave={e => { e.target.style.filter = 'brightness(0.9) contrast(1.1)'; }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-4 py-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}
    >
      {/* Ambient */}
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-3">// tech stack</p>
          <h2 className="section-title text-3xl font-bold">
            Skills <span className="text-gradient-purple">Summary</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, i) => (
            <SkillCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillComponent;
