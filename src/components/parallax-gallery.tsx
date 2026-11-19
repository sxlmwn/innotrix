"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

const images = [
  {
    src: "/images/gallery/01-web-development.jpg",
    alt: "Modern high-performance web development",
    caption: "Web Development",
  },
  {
    src: "/images/gallery/02-code-screen.jpg",
    alt: "Scalable backend code and software engineering",
    caption: "Software Architecture",
  },
  {
    src: "/images/gallery/03-developers-team.jpg",
    alt: "Innotrix development and engineering team",
    caption: "Engineering Team",
  },
  {
    src: "/images/gallery/05-mobile-app.jpg",
    alt: "Intuitive iOS and Android mobile app interface",
    caption: "Mobile App",
  },
  {
    src: "/images/gallery/06-phone-in-hand.jpg",
    alt: "High-performance smartphone digital experience",
    caption: "Mobile Interface",
  },
  {
    src: "/images/gallery/07-ai-chatbot.jpg",
    alt: "24/7 intelligent AI customer support chatbot",
    caption: "AI Chatbots",
  },
  {
    src: "/images/gallery/09-ai-dashboard.jpg",
    alt: "Real-time AI enterprise metrics and automated dashboard",
    caption: "AI Analytics",
  },
  {
    src: "/images/gallery/10-data-analytics.jpg",
    alt: "Executive data reporting and conversion analytics",
    caption: "Data Insights",
  },
  {
    src: "/images/gallery/12-marketing-charts.jpg",
    alt: "Results-driven performance digital marketing",
    caption: "Digital Marketing",
  },
  {
    src: "/images/gallery/13-cloud-earth.jpg",
    alt: "Global cloud infrastructure and server networks",
    caption: "Cloud Solutions",
  },
  {
    src: "/images/gallery/15-ui-ux-design.jpg",
    alt: "Bespoke user interface and design systems",
    caption: "UI/UX Design",
  },
  {
    src: "/images/gallery/17-ecommerce.jpg",
    alt: "Conversion-optimized ecommerce shopping platform",
    caption: "E-Commerce",
  },
];

interface ColumnProps {
  images: typeof images;
  y: MotionValue<number>;
  widthClass?: string;
}

const Column = ({ images, y, widthClass = "w-full" }: ColumnProps) => {
  return (
    <motion.div
      className={`column relative flex h-full ${widthClass} min-w-0 flex-1 flex-col gap-4 sm:gap-6 lg:gap-8`}
      style={{ y }}
    >
      {images.map((img, i) => (
        <div key={i} className="flex flex-col">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full flex-shrink-0 overflow-hidden rounded-[2px] bg-[#050914] border border-[#1E293B]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover w-full h-auto"
            />
          </div>
          <span className="mt-2 text-[11px] sm:text-[12px] font-medium text-[#94A3B8] truncate">
            {img.caption}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export function Skiper30() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.2]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#050914] text-white overflow-hidden">
      {/* Top spacer screen */}
      <div className="flex py-10 sm:py-16 lg:py-20 flex-col items-center justify-center px-4 text-center">
        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
          Selected Portfolio Work
        </span>
        <p className="mt-2 text-xs sm:text-sm text-[#94A3B8]">
          scroll down to see
        </p>
      </div>

      {/* Fluid container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Parallax gallery container with responsive heights */}
        <div
          ref={galleryRef}
          className="gallery relative flex h-[90vh] sm:h-[130vh] lg:h-[175vh] w-full gap-3 sm:gap-5 lg:gap-6 overflow-hidden bg-[#050914]"
        >
          {/* Desktop: 4 columns */}
          <div className="hidden lg:flex w-full h-full gap-6">
            <Column images={[images[0], images[1], images[2]]} y={y} widthClass="w-1/4" />
            <Column images={[images[3], images[4], images[5]]} y={y2} widthClass="w-1/4" />
            <Column images={[images[6], images[7], images[8]]} y={y3} widthClass="w-1/4" />
            <Column images={[images[9], images[10], images[11]]} y={y4} widthClass="w-1/4" />
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden sm:flex lg:hidden w-full h-full gap-5">
            <Column
              images={[images[0], images[1], images[2], images[3], images[4], images[5]]}
              y={y}
              widthClass="w-1/2"
            />
            <Column
              images={[images[6], images[7], images[8], images[9], images[10], images[11]]}
              y={y2}
              widthClass="w-1/2"
            />
          </div>

          {/* Phone: 1 column */}
          <div className="flex sm:hidden w-full h-full">
            <Column
              images={[images[0], images[3], images[6], images[9]]}
              y={y}
              widthClass="w-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom spacer screen */}
      <div className="flex py-10 sm:py-16 lg:py-20 flex-col items-center justify-center px-4 text-center border-b border-[#1E293B]">
        <p className="text-xs sm:text-sm text-[#94A3B8]">
          scroll up to see
        </p>
        <span className="mt-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94A3B8]">
          Digital Craft &amp; Engineering
        </span>
      </div>
    </section>
  );
}

export default Skiper30;
