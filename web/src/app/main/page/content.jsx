import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Message from "./../../../helper/Message";
import AboutMeComponent from "./about/about";
import EducationComponent from "./education/education.component";
import ExperienceComponent from "./experience/experience.component";
import HomeComponent from "./home/home";
import SkillComponent from "./skill/skill.component";
import VolunteerWorkComponent from "./volunteer-work/volunteer-work.component";

const ContentComponent = () => {
  const location = useLocation();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowMessage(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check the scroll position on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="home">
        <HomeComponent />
      </div>
      <div id="about">
        <AboutMeComponent />
        {showMessage && <Message />}
      </div>
      <div id="education">
        <EducationComponent />
      </div>
      <div id="volunteer">
        <VolunteerWorkComponent />
      </div>
      <div id="experience">
        <ExperienceComponent />
      </div>
      <div id="skill">
        <SkillComponent />
      </div>
    </div>
  );
};

export default ContentComponent;
