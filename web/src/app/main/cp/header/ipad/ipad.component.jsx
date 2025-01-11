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
              About Me{" "}
              <svg
                className={`w-2.5 h-2.5 ml-2 transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </a>
            {dropdownOpen && (
              <div
                id="dropdown"
                className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-52 mt-2"
              >
                <ul className="flex flex-col text-sm text-gray-700">
                  <li>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-gray-800 hover:text-red-300 ${
                        selectedItem === "Education" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Education")}
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-gray-800 hover:text-red-300 ${
                        selectedItem === "Volunteer Work" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Volunteer Work")}
                    >
                      Volunteer Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-gray-800 hover:text-red-300 ${
                        selectedItem === "Experience" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Experience")}
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`block px-4 py-2 text-gray-800 hover:text-red-300 ${
                        selectedItem === "Certificate" ? "text-red-500" : ""
                      }`}
                      onClick={() => handleItemClick("Certificate")}
                    >
                      Certificate
                    </a>
                  </li>
                </ul>
              </div>
            )}
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
