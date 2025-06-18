import { IconBooks, IconBriefcase, IconCertificate, IconMenu2, IconMichelinStarGreen, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../utils/cn.ts";

// Menu data structure
const menuData = [
  {
    label: "About Me",
    isMegaMenu: true,
    subData: [
      {
        icon: <IconBooks className="w-6 h-6 text-primary" />,
        title: "Education",
        description: "Explore my academic background and qualifications.",
        href: "/#education",
      },
      {
        icon: <IconMichelinStarGreen className="w-6 h-6 text-primary" />,
        title: "Volunteer Work",
        description: "Discover my contributions to community and social causes.",
        href: "/#volunteer",
      },
      {
        icon: <IconBriefcase className="w-6 h-6 text-primary" />,
        title: "Experience",
        description: "Learn about my professional journey and roles.",
        href: "/#experience",
      },
      {
        icon: <IconCertificate className="w-6 h-6 text-primary" />,
        title: "Certificates",
        description: "View my certifications and achievements.",
        href: "/#certificates",
      },
    ],
  },
  {
    label: "Skills",
    isMegaMenu: false,
    href: "/#skills",
  },
  {
    label: "Projects",
    isMegaMenu: false,
    href: "/#projects",
  },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleItemClick = (label) => {
    setSelectedItem(label);
    if (label === "About Me") {
      setShowMegaMenu(!showMegaMenu);
    } else {
      setShowMegaMenu(false);
      setOpen(false);
    }
  };

  return (
    <header>
      <div className="container z-50 mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="z-50 flex items-center justify-between w-full px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={cn(
                  "absolute flex justify-end right-4 top-1/2 -translate-y-1/2 mt-[1px] rounded-lg lg:hidden",
                  open && "navbarTogglerActive"
                )}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-controls="navbarCollapse"
                aria-expanded={open}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.div
                      key="icon-x"
                      initial={{ opacity: 0, rotate: -60 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.25 }}
                      className="w-6 h-6 text-neutral-500"
                    >
                      <IconX className="w-full h-full" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="icon-menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.25 }}
                      className="w-6 h-6 text-neutral-500"
                    >
                      <IconMenu2 className="w-full h-full" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              <nav
                id="navbarCollapse"
                className={cn(
                  "absolute right-4 top-full w-full max-w-[300px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block z-50 lg:w-full lg:max-w-full lg:shadow-none dark:bg-dark-2 lg:dark:bg-transparent",
                  !open && "hidden"
                )}
                aria-label="Main navigation"
              >
                <ul className="block lg:flex">
                  {menuData.map((item, index) => (
                    <li key={index} className="relative">
                      {item.isMegaMenu ? (
                        <>
                          <button
                            onClick={() => handleItemClick(item.label)}
                            className={cn(
                              "flex w-full items-center justify-between gap-2 py-2 text-base font-medium lg:ml-12 lg:inline-flex lg:w-auto lg:justify-center",
                              selectedItem === item.label ? "text-dark" : "text-body-color",
                              "hover:text-red-500 transition-colors"
                            )}
                            aria-expanded={showMegaMenu}
                            aria-controls="megaMenu"
                          >
                            {item.label}
                            <span className={cn("duration-300", showMegaMenu ? "-scale-y-100" : "")}>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <path
                                  d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                          <div
                            id="megaMenu"
                            className={cn(
                              "w-full lg:absolute lg:left-0 lg:top-full lg:w-[600px] xl:w-[850px] lg:rounded-xl lg:shadow-lg",
                              showMegaMenu ? "block" : "hidden"
                            )}
                          >
                            <div className="p-4 bg-white rounded-t-xl sm:p-6 lg:p-8 dark:bg-dark-2">
                              <div className="grid gap-y-2 sm:grid-cols-2 sm:gap-4 lg:gap-x-5">
                                {item.subData.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.href}
                                    className="flex flex-col gap-4 p-4 duration-300 rounded-lg group hover:bg-gray-100/90 lg:flex-row"
                                  >
                                    <div>{subItem.icon}</div>
                                    <div>
                                      <h3 className="mb-1 text-base font-semibold duration-200 text-dark group-hover:text-primary">
                                        {subItem.title}
                                      </h3>
                                      <p className="text-sm text-body-color">{subItem.description}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => handleItemClick(item.label)}
                          className={cn(
                            "flex py-2 text-base font-medium lg:ml-12 lg:inline-flex",
                            selectedItem === item.label ? "text-dark" : "text-body-color",
                            "hover:text-red-500 transition-colors"
                          )}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <motion.div
              /* Slide‑in & fade‑in when the component appears */
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="hidden justify-end gap-3 pr-4 sm:flex sm:pr-16 lg:pr-0 mt-[14px] sm:mt-[5px] md:mt-0 z-50"
            >
              <motion.a
                href="https://t.me/chan_suvannet"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-100 px-4 sm:px-5 py-2 sm:py-2.5 text-base font-medium hover:bg-primary/90 hover:text-red-500 transition-colors"
                /* Slight scale on hover / press for tactile feel */
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
              >
                Quick Contact
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Navigation);