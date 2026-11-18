"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  IconArrowRight,
  IconMenu2,
  IconX,
  IconCircleCheck,
} from "@tabler/icons-react";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { SparklesCore } from "@/components/ui/sparkles";
import InkBackground from "@/components/kokonutui/ink-background";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];

const GLASS_SHADOW =
  "shadow-[0_10px_40px_rgb(0_0_0/0.25),inset_0_1px_0_rgb(255_255_255/0.2)] border border-white/10";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1200;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const interaction = reduceMotion
    ? {}
    : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } };

  return (
    <section
      id="hero"
      className="relative isolate min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050914] via-[#060e24] to-[#0a1a3d] text-white selection:bg-cyan-500/30"
    >
      {/* Background Soft Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.18),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Floating Glass Navbar */}
      <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:pt-6">
        <LiquidGlass
          tint={0.12}
          scale={28}
          bevelDepth={10}
          className={`mx-auto w-full max-w-6xl ${GLASS_SHADOW} ${scrolled ? "bg-slate-950/80 backdrop-blur-xl" : ""}`}
          contentClassName="flex items-center justify-between py-2.5 px-4 sm:px-6"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-1 text-xl sm:text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            <span>Inno</span>
            <span className="text-[#22d3ee]">trix</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <motion.a
              {...interaction}
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              Let&apos;s Talk
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-300 hover:text-white lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <IconX className="size-6 text-cyan-400" />
              ) : (
                <IconMenu2 className="size-6" />
              )}
            </button>
          </div>
        </LiquidGlass>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#071233]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Body with Smoky Ink Canvas & Content */}
      <div className="relative w-full">
        <InkBackground
          text="Building the Future"
          accent="#2563eb"
          interactive={true}
          className="min-h-[700px] sm:min-h-[780px] md:min-h-[840px] w-full"
        >
          {/* Centered Hero Content Stack */}
          <div className="pointer-events-auto mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 pt-10 sm:pt-14 text-center">
            {/* Badge */}
            <div className="mb-4 sm:mb-6">
              <LiquidGlass
                tint={0.14}
                scale={20}
                bevelDepth={8}
                aberration={2}
                className={GLASS_SHADOW}
                contentClassName="flex items-center gap-2 py-1 px-3.5 sm:px-4 text-xs sm:text-sm"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="font-medium text-slate-200">
                  Available for New Projects
                </span>
              </LiquidGlass>
            </div>

            {/* Headline Line 2 (Line 1 "Building the Future" is dynamically simulated by InkBackground canvas) */}
            <div className="mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.4)]">
              with AI, Code &amp; Creativity
            </div>

            {/* Sparkles Centerpiece (Centered directly underneath the headline) */}
            <div className="relative my-4 sm:my-6 h-20 sm:h-24 w-full max-w-xl sm:max-w-2xl">
              {/* Glowing horizontal lines */}
              <div className="absolute inset-x-8 sm:inset-x-16 top-0 h-[2px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#2563eb] to-transparent blur-sm" />
              <div className="absolute inset-x-8 sm:inset-x-16 top-0 h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent" />
              <div className="absolute inset-x-20 sm:inset-x-32 top-0 h-[3px] w-1/3 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm" />
              <div className="absolute inset-x-20 sm:inset-x-32 top-0 h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-white to-transparent" />

              {/* Sparkles Core */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1.2}
                speed={3}
                particleDensity={380}
                className="h-full w-full"
                particleColor="#60a5fa"
              />

              {/* Radial gradient mask to soften edges */}
              <div className="pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(280px_100px_at_top,transparent_20%,white)]" />
            </div>

            {/* Subheadline */}
            <p className="max-w-2xl text-balance text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
              We build intelligent digital solutions that drive growth. From
              AI-powered software to high-performance websites and results-driven
              marketing — Innotrix turns your ideas into digital success.
            </p>

            {/* CTAs (Liquid Glass buttons) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                {...interaction}
                href="#contact"
                className="rounded-full shadow-lg"
              >
                <LiquidGlass
                  tint={0.22}
                  className={`${GLASS_SHADOW} bg-blue-600/30 hover:bg-blue-600/40`}
                  contentClassName="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
                >
                  <span>Get Started</span>
                  <IconArrowRight className="size-4 text-cyan-300" />
                </LiquidGlass>
              </motion.a>

              <motion.a
                {...interaction}
                href="#portfolio"
                className="rounded-full shadow-lg"
              >
                <LiquidGlass
                  tint={0.12}
                  className={`${GLASS_SHADOW} hover:bg-white/10`}
                  contentClassName="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-slate-200"
                >
                  <span>View Portfolio</span>
                </LiquidGlass>
              </motion.a>
            </div>

            {/* Stats Row under CTAs */}
            <div className="mt-12 sm:mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#071233]/50 p-4 backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  <AnimatedCounter target={100} suffix="+" />
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                  Projects Delivered
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#071233]/50 p-4 backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  <AnimatedCounter target={45} suffix="M+" />
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                  Revenue Generated
                </span>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#071233]/50 p-4 backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  <AnimatedCounter target={99} suffix="%" />
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>
        </InkBackground>
      </div>
    </section>
  );
}

export default HeroSection;
