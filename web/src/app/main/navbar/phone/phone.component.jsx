import { useState } from "react";
import "./phone.component.css"; // Import the CSS file for custom styles
import Close from "/src/assets/icon/cross.png";
import Icon from "/src/assets/icon/menu.png";
import Coffee from "/src/assets/logo/coffee-cup.png";
import HeaderFacebookImage from "/src/assets/logo/facebook.png";
import HeaderInstagramImage from "/src/assets/logo/instagram.png";
import HeaderTelegramImage from "/src/assets/logo/telegram.png";
const PhoneComponent = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const toggleNavigation = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <header className="flex flex-row justify-between items-center  pl-4 pr-9 relative z-20">
        <div
          onClick={toggleNavigation}
          className="flex justify-center items-center w-12 h-10 opacity-1  rounded-xl transition duration-300 ease-in-out hover:bg-slate-100  focus:bg-slate-100 "
        >
          <img src={Icon} className="w-8 h-8 cursor-pointer hover:scale-90" />
        </div>
        <div className="header flex items-center justify-center gap-1">
          <h1 className="text-2xl">Coffee</h1>
          <img src={Coffee} alt="Coffee logo" className="w-8 h-8" />
        </div>
      </header>

      {/* navigation is open */}
      <div className={`navigation ${navOpen ? "open" : "close"}`}>
        <header className="flex flex-row justify-between items-center px-9 shadow-sm">
          <div className="header flex items-center justify-center gap-1">
            <h1 className="text-2xl" onClick={toggleNavigation}>
              Coffee
            </h1>
            <img src={Coffee} alt="Coffee logo" className="w-8 h-8" />
          </div>
          <div onClick={toggleNavigation}>
            <img
              src={Close}
              className="w-4 h-4 cursor-pointer hover:scale-90 mt-2 "
            />
          </div>
        </header>
        <header className="flex justify-between px-9 items-start bg-color-cus large-screen-header">
          <nav className="header-nav text-gray-800 ">
            <br />
            <ul className="flex flex-col ">
              <li>
                <a
                  href="/#skill"
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
                  href="#"
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
                          href="/#education"
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
                            selectedItem === "Volunteer Work"
                              ? "text-red-500"
                              : ""
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
          <br />
          <nav className="header-nav text-gray-500">
            <ul className="flex space-x-4">
              <li>
                <a href="#faq">
                  <img src={HeaderFacebookImage} className="w-6 h-6" alt="" />
                </a>
              </li>
              <li>
                <a href="#faq">
                  <img src={HeaderInstagramImage} className="w-6 h-6" alt="" />
                </a>
              </li>
              <li>
                <a href="#faq">
                  <img src={HeaderTelegramImage} className="w-6 h-6" alt="" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default PhoneComponent;
