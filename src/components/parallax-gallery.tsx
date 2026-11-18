"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";

const images = [
  {
    src: "/images/gallery/web-development.jpg",
    alt: "Modern high-performance web development",
    caption: "Web Development",
  },
  {
    src: "/images/gallery/mobile-app.jpg",
    alt: "Intuitive iOS and Android mobile app interface",
    caption: "Mobile App",
  },
  {
    src: "/images/gallery/ai-chatbot.jpg",
    alt: "24/7 intelligent AI customer support chatbot",
    caption: "AI Chatbots",
  },
  {
    src: "/images/gallery/ai-voice-agent.jpg",
    alt: "AI voice calling agent and conversational intelligence",
    caption: "Voice Agents",
  },
  {
    src: "/images/gallery/automation.jpg",
    alt: "Enterprise business process automation and workflows",
    caption: "Workflow Automation",
  },
  {
    src: "/images/gallery/digital-marketing.jpg",
    alt: "High-ROI digital marketing and Performance Max campaigns",
    caption: "Digital Marketing",
  },
  {
    src: "/images/gallery/data-analytics.jpg",
    alt: "Real-time executive data analytics and reporting dashboard",
    caption: "Data Analytics",
  },
  {
    src: "/images/gallery/cloud.jpg",
    alt: "Scalable cloud infrastructure and API integrations",
    caption: "Cloud Solutions",
  },
  {
    src: "/images/gallery/ui-ux-design.jpg",
    alt: "Bespoke UI/UX design and interaction prototyping",
    caption: "UI/UX Design",
  },
  {
    src: "/images/gallery/ecommerce.jpg",
    alt: "High-converting ecommerce storefront and checkout",
    caption: "E-Commerce",
  },
  {
    src: "/images/gallery/team-working.jpg",
    alt: "Innotrix engineers and creatives collaborating",
    caption: "Engineering Team",
  },
  {
    src: "/images/gallery/dashboard.jpg",
    alt: "Intelligent analytics dashboard and enterprise metrics",
    caption: "AI SaaS Software",
  },
  {
    src: "/images/gallery/fashion-ecommerce.jpg",
    alt: "Performance fashion brand ecommerce campaign",
    caption: "Growth Strategy",
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
          <div className="relative h-52 sm:h-64 md:h-80 lg:h-96 w-full flex-shrink-0 overflow-hidden rounded-[2px] bg-[#DBEAFE]/40 border border-[#DBEAFE]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 25vw"
              className="object-cover"
            />
          </div>
          <span className="mt-2 text-[12px] font-medium text-[#64748B]">
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
    <section className="relative w-full bg-[#EFF6FF] text-[#0B1E3A]">
      {/* Top spacer screen */}
      <div className="flex h-[20vh] md:h-[28vh] flex-col items-center justify-center px-4 text-center">
        <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#64748B]">
          Selected Portfolio Work
        </span>
        <p className="mt-2 text-xs md:text-sm text-[#64748B]">
          scroll down to see
        </p>
      </div>

      {/* Parallax 4-column gallery container */}
      <div
        ref={galleryRef}
        className="gallery relative flex h-[175vh] w-full gap-4 md:gap-6 overflow-hidden bg-[#EFF6FF] px-4 md:px-10"
      >
        <Column images={[images[0], images[1], images[2], images[12]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>

      {/* Bottom spacer screen */}
      <div className="flex h-[20vh] md:h-[28vh] flex-col items-center justify-center px-4 text-center border-b border-[#DBEAFE]">
        <p className="text-xs md:text-sm text-[#64748B]">
          scroll Up to see
        </p>
        <span className="mt-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#64748B]">
          Digital Craft &amp; Engineering
        </span>
      </div>
    </section>
  );
}

export default Skiper30;
