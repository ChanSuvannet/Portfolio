import { IconBooks, IconBriefcase, IconCertificate, IconMenu2, IconMichelinStarGreen, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn.ts";

const menuData = [
  {
    label: "About",
    isMegaMenu: true,
    subData: [
      {
        icon: <IconBooks className="w-4 h-4 text-blue-500" />,
        title: "Education",
        description: "Academic background & qualifications.",
        href: "/#education",
      },
      {
        icon: <IconMichelinStarGreen className="w-4 h-4 text-green-600" />,
        title: "Volunteer",
        description: "Community & social contributions.",
        href: "/#volunteer",
      },
      {
        icon: <IconBriefcase className="w-4 h-4 text-blue-500" />,
        title: "Experience",
        description: "Professional journey & roles.",
        href: "/#experience",
      },
      {
        icon: <IconCertificate className="w-4 h-4 text-amber-500" />,
        title: "Certificates",
        description: "Certifications & achievements.",
        href: "/#certificates",
      },
    ],
  },
  { label: "Skills",       isMegaMenu: false, href: "/#skills"       },
  { label: "Projects",     isMegaMenu: false, href: "/#projects"     },
  { label: "Competitions", isMegaMenu: false, href: "/#competitions" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleItemClick = (label) => {
    if (label === "About") {
      setShowMegaMenu(v => !v);
    } else {
      setShowMegaMenu(false);
      setOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-white/90 backdrop-blur-md"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm leading-none">CS</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm hidden sm:block">
              Chan<span className="text-blue-600">.</span>dev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {menuData.map((item, index) => (
              <div key={index} className="relative">
                {item.isMegaMenu ? (
                  <>
                    <button
                      onClick={() => handleItemClick(item.label)}
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                        showMegaMenu
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      )}
                      aria-expanded={showMegaMenu}
                    >
                      {item.label}
                      <motion.svg
                        animate={{ rotate: showMegaMenu ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        width="12" height="12" viewBox="0 0 20 20" fill="none"
                        className="opacity-50"
                      >
                        <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" fill="currentColor"/>
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {showMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-2 w-96 rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden"
                        >
                          <div className="p-2 grid grid-cols-2 gap-1">
                            {item.subData.map((subItem, si) => (
                              <a
                                key={si}
                                href={subItem.href}
                                onClick={() => { setShowMegaMenu(false); setOpen(false); }}
                                className="flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-gray-50 group"
                              >
                                <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-gray-100 group-hover:bg-blue-50 transition-colors">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                                    {subItem.title}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{subItem.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => handleItemClick(item.label)}
                    className="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:suvannetchan@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <IconX className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <IconMenu2 className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-3 border-t border-gray-100 bg-white">
                {menuData.map((item, index) => (
                  <div key={index}>
                    {item.isMegaMenu ? (
                      <>
                        <button
                          onClick={() => handleItemClick(item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                        >
                          {item.label}
                          <motion.svg animate={{ rotate: showMegaMenu ? 180 : 0 }} width="12" height="12" viewBox="0 0 20 20" fill="none" className="opacity-50">
                            <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" fill="currentColor"/>
                          </motion.svg>
                        </button>
                        <AnimatePresence>
                          {showMegaMenu && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 pl-4 border-l-2 border-blue-100"
                            >
                              {item.subData.map((sub, si) => (
                                <a
                                  key={si}
                                  href={sub.href}
                                  onClick={() => { setOpen(false); setShowMegaMenu(false); }}
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                  {sub.icon}
                                  {sub.title}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2 border-t border-gray-100 mt-2">
                  <a
                    href="mailto:suvannetchan@gmail.com"
                    className="flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default React.memo(Navigation);
