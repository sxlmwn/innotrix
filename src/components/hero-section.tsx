"use client";

import GhostFibers from "./ghost-fibers/GhostFibers";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050914] text-white">
      {/* 1. GhostFibers background — full hero background, absolute, behind text, non-blocking */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <GhostFibers
          glowColor="#ffffff"
          layers={3}
          twist={1.8}
          threads={54}
          fiberStyle="dots"
          depthOfField={0.6}
          hoverEffect="focus"
          intro={true}
          mouseInteraction={true}
          lineColor="#ffffff"
          secondaryColor="#ffffff"
          waves={0.25}
          volume={0.2}
          spread={1.45}
          scale={1.25}
          perspective={0.6}
          density={0.3}
          thickness={0.3}
          foldGlow={1.35}
          speed={0.35}
          rollSpeed={-1}
          particles={2}
          sparkle={2}
          glow={0.6}
          vignette={0}
          mouseStrength={2}
        />
      </div>

      {/* Hero content — Centred */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* 2. "Innotrix" — bold, large, white, centred */}
        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Innotrix
        </h1>

        {/* 3. One 3–4 word line */}
        <p className="mt-4 text-xl font-medium tracking-wide text-white/90 sm:text-2xl md:text-3xl">
          Building the Future
        </p>

        {/* 4. 1–2 lines of detail */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
          We build intelligent digital solutions that drive growth — AI-powered software, high-performance websites and results-driven marketing.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
