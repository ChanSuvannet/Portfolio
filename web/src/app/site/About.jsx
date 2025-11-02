import { mdiStar, mdiStarHalfFull } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import Coffee from "/src/assets/svg/cafe.svg";
import Certificate from "/src/assets/svg/certificate.svg";
import Code from "/src/assets/svg/code.svg";
import Rocket from "/src/assets/svg/rocket.svg";

// Constants
const PROFILE_IMAGE_URL = "https://lh3.googleusercontent.com/a/ACg8ocLwnU6pFHzGJX_V7X1iM4-BrlFso2NwYtH2IFrlFKU73CEuirNg=s317-c-no";
const COPILOT_EMOJI_URL = "https://github.githubassets.com/images/icons/emoji/copilot.png";

const SKILLS_DATA = [
  { name: "Development", percentage: 80, color: "bg-red-400" },
  { name: "Problem-Solving", percentage: 85, color: "bg-yellow-400" },
  { name: "Communication", percentage: 91, color: "bg-purple-400" }
];

const STATS_DATA = [
  { icon: Code, value: "10", label: "Project Completed" },
  { icon: Rocket, value: "3", label: "Project Ongoing" },
  { icon: Coffee, value: "1460", label: "Cup of Coffee" },
  { icon: Certificate, value: "6", label: "Certificate" }
];

const ANIMATION_CONFIG = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  transition: { type: 'spring', stiffness: 300 }
};

// Components
const StarRating = () => (
  <div className="flex justify-center gap-3 my-5">
    {[...Array(4)].map((_, index) => (
      <motion.div key={index} {...ANIMATION_CONFIG}>
        <Icon path={mdiStar} size={1} className="text-red-400" />
      </motion.div>
    ))}
    <motion.div {...ANIMATION_CONFIG}>
      <Icon path={mdiStarHalfFull} size={1} className="text-red-400" />
    </motion.div>
  </div>
);

const ProfileHeader = () => (
  <div className="max-w-[510px] mx-auto text-center px-4">
    <div className="w-full flex justify-center">
      <img
        className="w-14 h-14 rounded-full"
        src={PROFILE_IMAGE_URL}
        alt="Profile avatar"
        loading="lazy"
      />
    </div>
    <div className="flex justify-center mt-8 px-4">
      <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-800 text-lg max-w-xl">
        “I'm not a great programmer, I'm just a good programmer with great habits.”
      </blockquote>
    </div>

    <div className="relative inline-flex items-center justify-center w-full">
      <hr className="w-64 h-[2px] my-8 bg-gray-200 border-0 rounded" />
      <div className="absolute px-4 -translate-x-1/2 left-1/2 flex items-center justify-center bg-white">
        <img
          className="pt-[1.2px]"
          title="GitHub Copilot"
          alt="GitHub Copilot"
          src={COPILOT_EMOJI_URL}
          height="20"
          width="20"
          loading="lazy"
        />
      </div>
    </div>

    <p className="text-base text-gray-60000 leading-relaxed">
      Explore my background and dedicated skills in teamwork, which bring
      extensive experience and creativity to every project.
    </p>
  </div>
);

const ProfileCard = () => (
  <div className="flex flex-col justify-center items-center text-center">

    <div className="font-medium">
      <p className="text-sm mt-1 text-gray-60000">Languages Spoken</p>
      <div className="text-xs mt-1 text-gray-50000 italic">
        Khmer, English, and French.
      </div>
    </div>
  </div>
);

const SkillBar = ({ name, percentage, color }) => (
  <div className="w-full mb-5">
    <div className="flex justify-between items-center mb-3">
      <p className="text-base md:text-lg font-medium">{name}</p>
      <p className="text-base md:text-lg font-medium">{percentage}%</p>
    </div>
    <div className="bg-gray-200 relative h-1 md:h-[4px] w-full rounded-full">
      <div
        className={`${color} absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="w-full md:w-1/2">
    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-80000">
      Skills & Expertise
    </h2>
    {SKILLS_DATA.map((skill) => (
      <SkillBar key={skill.name} {...skill} />
    ))}
  </div>
);

const AboutSection = () => (
  <div className="w-full md:w-1/2 md:pr-8">
    <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-80000">
      About Me
    </h2>
    <p className="text-base md:text-lg leading-relaxed text-gray-70000">
      I am a passionate, results-driven software engineer with strong expertise in full-stack development and microservices architecture. I specialize in building scalable web applications, optimizing user experiences, and collaborating in Agile teams. Recognized for my positive mindset, motivation, and excellent communication skills, I’m eager to tackle challenges and contribute to innovative software solutions.
    </p>
  </div>
);

const StatCard = ({ icon: IconComponent, value, label }) => (
  <div className="flex items-center gap-4 p-4 bg-white  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex-shrink-0">
      <img
        src={IconComponent}
        className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
        alt={`${label} icon`}
        loading="lazy"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-xl md:text-2xl font-bold text-gray-80000">
        {value}
      </h3>
      <p className="text-sm md:text-base text-gray-60000 mt-1">
        {label}
      </p>
    </div>
  </div>
);

const StatsSection = () => (
  <section className="my-16 md:my-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {STATS_DATA.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  </section>
);

const CallToAction = () => (
  <div className="text-center mb-10 md:mb-16">
    <p className="text-base md:text-lg text-gray-70000 leading-relaxed">
      Let's start a conversation to explore new technology together.
      <button className="text-red-400 font-semibold hover:text-red-500red-300 transition-colors duration-300 ml-2 underline underline-offset-2 hover:underline-offset-4">
        Click here
      </button>
      {" "}to contact me!
    </p>
  </div>
);

const MainContentCard = ({ children }) => (
  <div className="w-full bg-white rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 md:p-8">
    {children}
  </div>
);

// Main Component
const AboutMeComponent = () => {
  return (
    <main className="min-h-screen px-5 py-8 flex justify-center items-center ">
      <div className="w-full max-w-7xl">
        <div className="space-y-8">
          {/* Header Section */}
          <section className="flex flex-col items-center gap-6">
            <div className="w-full max-w-2xl">
              <ProfileHeader />
              <StarRating />
              <ProfileCard />
            </div>

            <MainContentCard>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <AboutSection />
                <div className="hidden lg:block w-px bg-gray-200" />
                <SkillsSection />
              </div>
            </MainContentCard>
          </section>

          {/* Stats Section */}
          <StatsSection />

          {/* Call to Action */}
          <CallToAction />
        </div>
      </div>
    </main>
  );
};

export default AboutMeComponent;