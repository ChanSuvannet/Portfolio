import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import { cn } from "../utils/cn";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const dockStyle = {
  background: 'rgba(13,13,26,0.90)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(6,182,212,0.18)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(6,182,212,0.05)',
};

const FloatingDockMobile = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={dockStyle}
      className={cn(
        "mx-auto flex h-14 items-end gap-3 rounded-2xl px-4 pb-2.5 md:hidden",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={dockStyle}
      className={cn(
        "mx-auto hidden h-14 items-end gap-3 rounded-2xl px-4 pb-2.5 md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

const IconContainer = ({ mouseX, title, icon, href }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() || { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [36, 72, 36]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [36, 72, 36]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [18, 36, 18]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [18, 36, 18]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{
          width,
          height,
          background: hovered
            ? 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2))'
            : 'rgba(255,255,255,0.04)',
          border: hovered ? '1px solid rgba(6,182,212,0.4)' : '1px solid rgba(255,255,255,0.08)',
          boxShadow: hovered ? '0 0 16px rgba(6,182,212,0.25)' : 'none',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-xl transition-colors duration-200"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 4, x: "-50%" }}
              transition={{ duration: 0.15 }}
              className="absolute -top-9 left-1/2 w-fit rounded-lg px-2.5 py-1 text-xs font-medium whitespace-pre text-slate-200"
              style={{
                background: 'rgba(13,13,26,0.95)',
                border: '1px solid rgba(6,182,212,0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-slate-400"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
};