"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

const images = [
  {
    src: "/images/gallery/web-development.jpg",
    alt: "Modern high-performance web development",
    tag: "Web Development",
  },
  {
    src: "/images/gallery/mobile-app.jpg",
    alt: "Intuitive iOS and Android mobile app interface",
    tag: "Mobile App",
  },
  {
    src: "/images/gallery/ai-chatbot.jpg",
    alt: "24/7 intelligent AI customer support chatbot",
    tag: "AI Chatbots",
  },
  {
    src: "/images/gallery/ai-voice-agent.jpg",
    alt: "AI voice calling agent and conversational intelligence",
    tag: "Voice Agents",
  },
  {
    src: "/images/gallery/automation.jpg",
    alt: "Enterprise business process automation and workflows",
    tag: "Automation",
  },
  {
    src: "/images/gallery/digital-marketing.jpg",
    alt: "High-ROI digital marketing and Performance Max campaigns",
    tag: "Digital Marketing",
  },
  {
    src: "/images/gallery/data-analytics.jpg",
    alt: "Real-time executive data analytics and reporting dashboard",
    tag: "Data Analytics",
  },
  {
    src: "/images/gallery/cloud.jpg",
    alt: "Scalable cloud infrastructure and API integrations",
    tag: "Cloud Solutions",
  },
  {
    src: "/images/gallery/ui-ux-design.jpg",
    alt: "Bespoke UI/UX design and interaction prototyping",
    tag: "UI/UX Design",
  },
  {
    src: "/images/gallery/ecommerce.jpg",
    alt: "High-converting ecommerce storefront and checkout",
    tag: "E-Commerce",
  },
  {
    src: "/images/gallery/team-working.jpg",
    alt: "Innotrix engineers and creatives collaborating",
    tag: "Expert Team",
  },
  {
    src: "/images/gallery/dashboard.jpg",
    alt: "Intelligent analytics dashboard and enterprise metrics",
    tag: "AI Software",
  },
  {
    src: "/images/gallery/fashion-ecommerce.jpg",
    alt: "Performance fashion brand ecommerce campaign",
    tag: "Growth Campaigns",
  },
];

interface ColumnProps {
  images: typeof images;
  y: MotionValue<number>;
  className?: string;
}

const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div
      className={`column relative flex h-full w-1/4 min-w-0 flex-1 flex-col gap-3 sm:gap-4 md:gap-[2vw] ${className ?? ""}`}
      style={{ y }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="group relative h-48 sm:h-64 md:h-80 lg:h-96 w-full flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-[#0a1a3d]/60 shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02] hover:border-cyan-400/40"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/80 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-2 left-2 right-2 md:bottom-3 md:left-3 md:right-3">
            <span className="inline-block rounded-full bg-[#050914]/75 px-2 py-0.5 text-[10px] md:text-xs font-medium text-cyan-300 backdrop-blur-md border border-cyan-500/20">
              {img.tag}
            </span>
          </div>
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
      <div className="flex h-[24vh] md:h-[35vh] flex-col items-center justify-center px-4 text-center">
        <span className="mb-2 text-xs font-semibold tracking-widest uppercase text-cyan-400">
          Our Craft in Motion
        </span>
        <p className="text-sm md:text-base font-medium text-slate-300">
          scroll down to see
        </p>
        <div className="mt-3 flex items-center justify-center">
          <span className="inline-block h-6 w-px animate-pulse bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </div>

      {/* Parallax 4-column gallery container */}
      <div
        ref={galleryRef}
        className="gallery relative flex h-[175vh] w-full gap-2 sm:gap-3 md:gap-[2vw] overflow-hidden bg-[#071233] p-2 sm:p-3 md:p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2], images[12]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>

      {/* Bottom spacer screen */}
      <div className="flex h-[24vh] md:h-[35vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-3 flex items-center justify-center">
          <span className="inline-block h-6 w-px animate-pulse bg-gradient-to-t from-cyan-400 to-transparent" />
        </div>
        <p className="text-sm md:text-base font-medium text-slate-300">
          scroll Up to see
        </p>
        <span className="mt-2 text-xs font-semibold tracking-widest uppercase text-cyan-400">
          Tailored Digital Execution
        </span>
      </div>
    </section>
  );
}

export default Skiper30;
