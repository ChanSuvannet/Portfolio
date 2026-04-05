import { IconBooks, IconBriefcase, IconCertificate, IconMenu2, IconMichelinStarGreen, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn.ts";

const menuData = [
  {
    label: "About Me",
    isMegaMenu: true,
    subData: [
      {
        icon: <IconBooks className="w-5 h-5 text-cyan-400" />,
        title: "Education",
        description: "Academic background & qualifications.",
        href: "/#education",
      },
      {
        icon: <IconMichelinStarGreen className="w-5 h-5 text-emerald-400" />,
        title: "Volunteer Work",
        description: "Community & social contributions.",
        href: "/#volunteer",
      },
      {
        icon: <IconBriefcase className="w-5 h-5 text-purple-400" />,
        title: "Experience",
        description: "Professional journey & roles.",
        href: "/#experience",
      },
      {
        icon: <IconCertificate className="w-5 h-5 text-yellow-400" />,
        title: "Certificates",
        description: "Certifications & achievements.",
        href: "/#certificates",
      },
    ],
  },
  { label: "Skills",       isMegaMenu: false, href: "/#skills" },
  { label: "Projects",     isMegaMenu: false, href: "/#projects" },
  { label: "Competitions", isMegaMenu: false, href: "/#competitions" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleItemClick = (label) => {
    setSelectedItem(label);
    if (label === "About Me") {
      setShowMegaMenu((v) => !v);
    } else {
      setShowMegaMenu(false);
      setOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dark-800/90 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(6,182,212,0.05)]"
          : "bg-transparent"
      )}
      style={{ '--dark-800': '#0d0d1a' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <motion.a
            href="/#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-mono font-bold text-white text-sm z-10">CS</span>
            </div>
            <span className="font-semibold text-slate-200 text-sm tracking-wide hidden sm:block">
              Chan<span className="text-cyan-400">.</span>dev
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {menuData.map((item, index) => (
              <div key={index} className="relative">
                {item.isMegaMenu ? (
                  <>
                    <button
                      onClick={() => handleItemClick(item.label)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        selectedItem === item.label
                          ? "text-cyan-400 bg-cyan-400/10"
                          : "text-slate-400 hover:text-cyan-300 hover:bg-white/5"
                      )}
                      aria-expanded={showMegaMenu}
                    >
                      {item.label}
                      <motion.svg
                        animate={{ rotate: showMegaMenu ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        width="14" height="14" viewBox="0 0 20 20" fill="none"
                      >
                        <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" fill="currentColor"/>
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {showMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-2 w-[520px] rounded-2xl overflow-hidden"
                          style={{
                            background: 'rgba(13,13,26,0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(6,182,212,0.15)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(6,182,212,0.05)',
                          }}
                        >
                          <div className="p-4 grid grid-cols-2 gap-2">
                            {item.subData.map((subItem, si) => (
                              <a
                                key={si}
                                href={subItem.href}
                                onClick={() => { setShowMegaMenu(false); setOpen(false); }}
                                className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group hover:bg-white/5"
                              >
                                <div className="flex-shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                                    {subItem.title}
                                  </p>
                                  <p className="text-xs text-slate-500 mt-0.5">{subItem.description}</p>
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
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      selectedItem === item.label
                        ? "text-cyan-400 bg-cyan-400/10"
                        : "text-slate-400 hover:text-cyan-300 hover:bg-white/5"
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://t.me/chan_suvannet"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Quick Contact
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <IconX className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div
                className="pb-4 pt-2 border-t border-white/5"
                style={{ background: 'rgba(13,13,26,0.98)', backdropFilter: 'blur(20px)' }}
              >
                {menuData.map((item, index) => (
                  <div key={index}>
                    {item.isMegaMenu ? (
                      <>
                        <button
                          onClick={() => handleItemClick(item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                          {item.label}
                          <motion.svg animate={{ rotate: showMegaMenu ? 180 : 0 }} width="14" height="14" viewBox="0 0 20 20" fill="none">
                            <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4062 5.65625 17.6875 5.9375C17.9688 6.21875 17.9688 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1562 10.1875 14.25 10 14.25Z" fill="currentColor"/>
                          </motion.svg>
                        </button>
                        <AnimatePresence>
                          {showMegaMenu && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 border-l border-cyan-500/20 ml-4"
                            >
                              {item.subData.map((sub, si) => (
                                <a
                                  key={si}
                                  href={sub.href}
                                  onClick={() => { setOpen(false); setShowMegaMenu(false); }}
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
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
                        className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-3 border-t border-white/5 mt-2">
                  <a
                    href="https://t.me/chan_suvannet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold text-cyan-400 border border-cyan-500/40"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Quick Contact
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
