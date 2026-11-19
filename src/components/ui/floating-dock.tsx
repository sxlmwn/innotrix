"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sectionIds = ["home", "services", "about", "portfolio", "why-us", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        activeSection={activeSection}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        activeSection={activeSection}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  activeSection,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  activeSection?: string;
}) => {
  const [tappedTitle, setTappedTitle] = useState<string | null>(null);

  const handleTap = (title: string) => {
    setTappedTitle(title);
    setTimeout(() => {
      setTappedTitle((curr) => (curr === title ? null : curr));
    }, 1500);
  };

  return (
    <div
      className={cn(
        "flex md:hidden h-12 items-center gap-2 rounded-2xl border border-[#1E293B] bg-[#050914] px-2.5 py-1.5 shadow-2xl",
        className
      )}
    >
      {items.map((item) => {
        const isActive = activeSection === item.href;
        const isTapped = tappedTitle === item.title;

        return (
          <a
            key={item.title}
            href={item.href}
            onClick={() => handleTap(item.title)}
            onTouchStart={() => handleTap(item.title)}
            className="group relative flex items-center justify-center"
            aria-label={item.title}
          >
            <AnimatePresence>
              {isTapped && (
                <motion.div
                  initial={{ opacity: 0, y: 6, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: 2, x: "-50%" }}
                  className="pointer-events-none absolute -top-8 left-1/2 w-fit rounded-[2px] border border-[#1E293B] bg-[#050914] px-2 py-0.5 text-[11px] font-medium tracking-wide text-white shadow-xl whitespace-pre"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className={cn(
                "flex h-8.5 w-8.5 items-center justify-center rounded-full border transition-all active:scale-95",
                isActive
                  ? "border-[#2563eb] bg-[#0A101F] text-[#2563eb]"
                  : "border-[#1E293B] bg-[#070D1E] text-white hover:border-[#2563eb]/60 hover:text-[#2563eb]"
              )}
            >
              <div className="h-4.5 w-4.5">{item.icon}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  activeSection,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  activeSection?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-3.5 rounded-2xl border border-[#1E293B] bg-[#050914] px-4 pb-3 shadow-2xl md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          isActive={activeSection === item.href}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 36, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} className="group relative">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full border transition-colors",
          isActive
            ? "border-[#2563eb] bg-[#0A101F]"
            : "border-[#1E293B] bg-[#070D1E] hover:border-[#2563eb]/60 hover:bg-[#0B132B]"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="pointer-events-none absolute -top-9 left-1/2 w-fit rounded-[2px] border border-[#1E293B] bg-[#050914] px-2.5 py-0.5 text-xs font-medium tracking-wide text-white shadow-xl whitespace-pre"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "flex items-center justify-center transition-colors duration-200",
            isActive
              ? "text-[#2563eb]"
              : "text-white group-hover:text-[#2563eb]"
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

export default FloatingDock;
