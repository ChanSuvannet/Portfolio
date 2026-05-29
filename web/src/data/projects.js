import AMTImage from "../assets/projects/amt.png";
import CCNImage from "../assets/projects/ccn.png";
import DmsImage from "../assets/projects/dms.png";
import MMEImage from "../assets/projects/mme.png";
import TDMSImage from "../assets/projects/tdms.png";

export const projectsData = [
  {
    id: 1,
    title: "Technical Document Management System",
    description:
      "Built an internal document management platform with role-based access control, enabling teams to organize files by subject and category, pin priority documents, and manage project publication workflows efficiently.",
    category: "Application",
    technologies: ["PHP", "Laravel", "Angular", "MySQL"],
    status: "Completed",
    image: TDMSImage,
    className: "md:col-span-1",
    link: "https://mpwt-gdt.info/#/auth/login",
    accent: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.2)",
  },
  {
    id: 2,
    title: "Document Management System",
    description:
      "Enterprise-grade document management system featuring review and approval workflows, intelligent task assignment with role-based permissions, real-time collaboration via WebSocket, and automated one-click PDF export.",
    category: "Application",
    technologies: ["NestJS", "Angular", "PostgreSQL", "Docker"],
    status: "Completed",
    image: DmsImage,
    className: "md:col-span-2",
    documentation:
      "https://skitter-agenda-833.notion.site/Document-Management-System-21e07e0faa4e81059015c853045da6f1",
    link: "https://dms.uat.camcyber.com/#/auth",
    accent: "from-purple-500 to-pink-500",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    id: 3,
    title: "Cambodian Council of Nurses (CCN) System",
    description:
      "Full-stack registry platform for the Cambodian Council of Nurses supporting license application processing, automated renewal workflows, inter-institution transfer management, training tracking, and QR code credential verification.",
    category: "Application",
    technologies: ["Nuxt", "Angular", "NestJS", "PostgreSQL"],
    status: "Completed",
    image: CCNImage,
    className: "md:col-span-2",
    link: "https://app.ccn.gov.kh/",
    accent: "from-emerald-400 to-teal-500",
    glow: "rgba(16,185,129,0.2)",
  },
  {
    id: 4,
    title: "ប្រព័ន្ធចុះលេខលិខិតចេញរ៉ែ (DRS)",
    description:
      "Government document registration system automating letter-numbering workflows, tracking document status across departments, enabling inter-agency document forwarding, and providing QR code-based document retrieval and verification.",
    category: "Application",
    technologies: ["Nuxt", "Angular", "NestJS", "PostgreSQL"],
    status: "Completed",
    image: MMEImage,
    className: "md:col-span-1",
    link: "https://drs.mme.gov.kh/#/auth/sign-in",
    accent: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.2)",
  },
  {
    id: 5,
    title: "សមាគមសិស្ស-និស្សិត អ.ម.ត (AMT)",
    description:
      "Student association management platform supporting new member registration, scholarship application workflows, member record review and approval, and administrative data management for a university student organization.",
    category: "Application",
    technologies: ["NestJS", "Angular", "PostgreSQL"],
    status: "Completed",
    image: AMTImage,
    className: "md:col-span-1",
    link: "https://amt.uat.camcyber.com/#/auth",
    accent: "from-rose-400 to-pink-600",
    glow: "rgba(244,63,94,0.2)",
  },
];
