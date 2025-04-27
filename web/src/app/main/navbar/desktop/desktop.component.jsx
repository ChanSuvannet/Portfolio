import { useState } from "react";
import "./desktop.component.css";

import Coffee from "/src/assets/logo/coffee-cup.png";
import HeaderFacebookImage from "/src/assets/logo/facebook.png";
import HeaderInstagramImage from "/src/assets/logo/instagram.png";
import HeaderTelegramImage from "/src/assets/logo/telegram.png";
import HeaderTradImage from "/src/assets/logo/trad.png";
import HeaderImageHover from "/src/assets/logo/video-unscreen.gif";

const navLinks = [
  { label: "Skills", href: "/#skill", id: "skill" },
  { label: "Portfolio", href: "#", id: "portfolio" },
  { label: "About Me", href: "#", id: "about" },
];

const dropdownItems = [
  { label: "Education", href: "/#education" },
  { label: "Volunteer Work", href: "/#volunteer" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificate", href: "#" },
];

const DesktopComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [imageSrc, setImageSrc] = useState(HeaderTradImage);
  const [activeLink, setActiveLink] = useState(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => setImageSrc(HeaderImageHover);
  const handleMouseLeave = () => setImageSrc(HeaderTradImage);

  const handleLinkClick = (link) => setActiveLink(link);

  return (
    <header className="flex justify-between px-9 items-center large-screen-header my-bg1 relative z-20">
      {/* Left Nav */}
      <nav className="header-nav text-gray-800">
        <ul className="flex space-x-4">
          <li>
            <a
              href="/#about"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={imageSrc} className="w-6 h-6" alt="Trad Icon" />
            </a>
          </li>

          {navLinks.map((link) =>
            link.id !== "about" ? (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`hover:text-red-300 ${activeLink === link.id ? "text-red-500" : ""
                    }`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.id} className="relative">
                <a
                  href={link.href}
                  className={`flex items-center hover:text-red-300 ${dropdownOpen || activeLink === "about" ? "text-red-500" : ""
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                    handleLinkClick("about");
                  }}
                >
                  {link.label}
                  <svg
                    className={`w-2.5 h-2.5 ml-2 transform ${dropdownOpen ? "rotate-180" : ""
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </a>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-52 mt-2">
                    <ul className="flex flex-col text-sm text-gray-700">
                      {dropdownItems.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className={`block px-4 py-2 hover:text-red-300 ${selectedItem === item.label ? "text-red-500" : ""
                              }`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleItemClick(item.label);
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Center Logo */}
      <div className="header flex items-center justify-center gap-2 fire-animation pr-14">
        <h1>Coffee</h1>
        <img src={Coffee} alt="Coffee logo" className="w-10 h-10" />
      </div>

      {/* Right Nav */}
      <nav className="header-nav text-gray-500">
        <ul className="flex space-x-4">
          <li>
            <a href="#faq">
              <img src={HeaderFacebookImage} className="w-6 h-6" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#faq">
              <img src={HeaderInstagramImage} className="w-6 h-6" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#faq">
              <img src={HeaderTelegramImage} className="w-6 h-6" alt="Telegram" />
            </a>
          </li>
          <li>
            <a href="#contact" className="text-red-300 hover:text-gray-300">
              Quick Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopComponent;
