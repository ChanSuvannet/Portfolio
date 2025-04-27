import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./phone.component.css";
import Close from "/src/assets/icon/cross.png";
import Icon from "/src/assets/icon/menu.png";
import Coffee from "/src/assets/logo/coffee-cup.png";
import HeaderFacebookImage from "/src/assets/logo/facebook.png";
import HeaderInstagramImage from "/src/assets/logo/instagram.png";
import HeaderTelegramImage from "/src/assets/logo/telegram.png";

// Data arrays
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

const PhoneComponent = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  const toggleNavigation = () => setNavOpen(!navOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const handleItemClick = (itemLabel) => {
    setSelectedItem(itemLabel);
    setDropdownOpen(false);
  };

  return (
    <div>
      {/* Top Header */}
      <header className="flex flex-row justify-between items-center pl-4 pr-9 relative z-20 pt-2">
        <div
          onClick={toggleNavigation}
          className="flex justify-center items-center w-12 h-10 rounded-xl transition hover:bg-slate-100 cursor-pointer"
        >
          <img src={Icon} alt="Menu Icon" className="w-8 h-8 hover:scale-90 transition" />
        </div>
        <div className="flex items-center gap-1">
          <h1 className="text-2xl">Coffee</h1>
          <img src={Coffee} alt="Coffee logo" className="w-8 h-8" />
        </div>
      </header>

      {/* Navigation Drawer */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="fixed top-0 left-0 w-full h-full bg-white z-30 shadow-lg overflow-y-auto"
          >
            {/* Drawer Header */}
            <header className="flex flex-row justify-between items-center px-9 py-4 shadow-sm">
              <div className="flex items-center gap-1">
                <h1 className="text-2xl cursor-pointer" onClick={toggleNavigation}>
                  Coffee
                </h1>
                <img src={Coffee} alt="Coffee logo" className="w-8 h-8" />
              </div>
              <div onClick={toggleNavigation} className="cursor-pointer">
                <img src={Close} alt="Close Icon" className="w-6 h-6 hover:scale-90 transition" />
              </div>
            </header>

            {/* Drawer Links */}
            <nav className="flex flex-col px-9 py-6 text-gray-800">
              <ul className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  link.id !== "about" ? (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className={`hover:text-red-400 ${activeLink === link.id ? "text-red-500" : ""}`}
                        onClick={() => handleLinkClick(link.id)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.id} className="relative">
                      <div
                        className={`flex items-center justify-between hover:text-red-400 cursor-pointer ${activeLink === "about" ? "text-red-500" : ""
                          }`}
                        onClick={() => {
                          toggleDropdown();
                          handleLinkClick("about");
                        }}
                      >
                        {link.label}
                        <motion.svg
                          animate={{ rotate: dropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-4 h-4 ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>

                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-2 ml-4 mt-2"
                          >
                            {dropdownItems.map((item) => (
                              <li key={item.label}>
                                <a
                                  href={item.href}
                                  className={`block px-2 py-1 hover:text-red-400 ${selectedItem === item.label ? "text-red-500" : ""
                                    }`}
                                  onClick={() => handleItemClick(item.label)}
                                >
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                ))}
              </ul>
            </nav>

            {/* Social Media Links */}
            <div className="flex justify-center gap-6 py-6">
              <a href="#facebook">
                <img src={HeaderFacebookImage} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#instagram">
                <img src={HeaderInstagramImage} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#telegram">
                <img src={HeaderTelegramImage} alt="Telegram" className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhoneComponent;
