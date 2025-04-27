import { useState } from "react";
import Coffee from "/src/assets/logo/coffee-cup.png";
import HeaderTradImage from "/src/assets/logo/trad.png";
import HeaderImageHover from "/src/assets/logo/video-unscreen.gif";
const IpadComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [imageSrc, setImageSrc] = useState(HeaderTradImage);
  const [activeLink, setActiveLink] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setImageSrc(HeaderImageHover);
  };

  const handleMouseLeave = () => {
    setImageSrc(HeaderTradImage);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header className="flex justify-between px-9 items-center bg-color-cus large-screen-header relative z-20">
      <nav className="header-nav text-gray-800">
        <ul className="flex space-x-4">
          <li>
            <a href="#faq">
              <img
                src={imageSrc}
                className="w-6 h-6"
                alt=""
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className={`hover:text-red-300 ${
                activeLink === "skill" ? "text-red-500" : ""
              }`}
              onClick={() => handleLinkClick("skill")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={`hover:text-red-300 ${
                activeLink === "portfolio" ? "text-red-500" : ""
              }`}
              onClick={() => handleLinkClick("portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="relative">
            <a
              className={`flex items-center hover:text-red-300 ${
                dropdownOpen
                  ? "text-red-500"
                  : activeLink === "about"
                  ? "text-red-500"
                  : ""
              }`}
              id="dropdownDefaultButton"
              onClick={() => {
                toggleDropdown();
                handleLinkClick("about");
              }}
            >
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <div className="header flex items-center justify-center gap-1 fire-animation pr-10">
        <h1>Coffee</h1>
        <img src={Coffee} alt="" className="w-10 h-10" />
      </div>
    </header>
  );
};

export default IpadComponent;
