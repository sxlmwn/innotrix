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
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="column relative flex h-full w-1/4 min-w-0 flex-1 flex-col gap-6 md:gap-8"
      style={{ y }}
    >
      {images.map((img, i) => (
        <div key={i} className="flex flex-col">
          <div className="relative h-52 sm:h-64 md:h-80 lg:h-96 w-full flex-shrink-0 overflow-hidden rounded-[2px] bg-[#050914] border border-[#1E293B]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover"
            />
          </div>
          <span className="mt-2 text-[12px] font-medium text-[#94A3B8]">
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
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

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
    <section className="relative w-full bg-[#050914] text-white">
      {/* Top spacer screen */}
      <div className="flex h-[20vh] md:h-[28vh] flex-col items-center justify-center px-4 text-center">
        <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#94A3B8]">
          Selected Portfolio Work
        </span>
        <p className="mt-2 text-xs md:text-sm text-[#94A3B8]">
          scroll down to see
        </p>
      </div>

      {/* Parallax 4-column gallery container */}
      <div
        ref={galleryRef}
        className="gallery relative flex h-[175vh] w-full gap-4 md:gap-6 overflow-hidden bg-[#050914] px-4 md:px-10"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>

      {/* Bottom spacer screen */}
      <div className="flex h-[20vh] md:h-[28vh] flex-col items-center justify-center px-4 text-center border-b border-[#1E293B]">
        <p className="text-xs md:text-sm text-[#94A3B8]">
          scroll up to see
        </p>
        <span className="mt-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#94A3B8]">
          Digital Craft &amp; Engineering
        </span>
      </div>
    </section>
  );
}

export default Skiper30;
