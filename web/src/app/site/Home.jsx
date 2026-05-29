import { motion } from "framer-motion";
import Profile from "/src/assets/image/image.png";
import Discord from "/src/assets/svg/discord.svg";
import GitHub from "/src/assets/svg/github.svg";
import LinkIn from "/src/assets/svg/icons8-linkedin.svg";
import Mail from "/src/assets/svg/mail.svg";

const SocialLink = ({ href, src, alt, delay = 0 }) => (
  <motion.a
    href={href}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -2 }}
    className="p-2.5 rounded-xl border border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 shadow-sm"
    aria-label={alt}
  >
    <img src={src} alt={alt} className="w-4 h-4 opacity-60" />
  </motion.a>
);

const HomeComponent = () => (
  <div className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 overflow-hidden">
    {/* Subtle dot grid */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(#e5e7eb 1.2px, transparent 1.2px)",
        backgroundSize: "28px 28px",
        opacity: 0.65,
      }}
    />
    {/* Bottom gradient fade */}
    <div
      className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
    />

    <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }}
        className="mb-7"
      >
        <div className="w-28 h-28 rounded-full ring-4 ring-blue-100 ring-offset-4 ring-offset-white overflow-hidden shadow-md">
          <img
            src={Profile}
            alt="Chan Suvannet"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2"
      >
        Chan Suvannet
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-lg font-semibold text-blue-600 mb-4"
      >
        Full Stack Developer
      </motion.p>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-base text-gray-500 leading-relaxed mb-8"
      >
        Building scalable web systems, clean REST APIs, and reliable backend
        services. Based in Phnom Penh, Cambodia.
      </motion.p>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 mb-8"
      >
        <SocialLink
          href="https://github.com/ChanSuvannet/"
          src={GitHub}
          alt="GitHub"
          delay={0.5}
        />
        <SocialLink
          href="https://www.linkedin.com/in/chan-suvannet-63865224a/"
          src={LinkIn}
          alt="LinkedIn"
          delay={0.55}
        />
        <SocialLink
          href="https://discordapp.com/users/suvannet"
          src={Discord}
          alt="Discord"
          delay={0.6}
        />
        <SocialLink
          href="mailto:suvannetchan@gmail.com"
          src={Mail}
          alt="Email"
          delay={0.65}
        />
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
        >
          View Projects
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        <a
          href="mailto:suvannetchan@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
        >
          Contact Me
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 flex flex-col items-center gap-1.5"
    >
      <span className="text-xs text-gray-400 tracking-widest uppercase">
        Scroll
      </span>
      <svg
        className="w-4 h-4 text-gray-400 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </motion.div>
  </div>
);

export default HomeComponent;
