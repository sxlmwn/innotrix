"use client";

import GhostFibers from "./ghost-fibers/GhostFibers";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] sm:min-h-[700px] lg:min-h-screen w-full items-center justify-center overflow-hidden bg-[#050914] text-white py-16 sm:py-20 lg:py-28">
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
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 sm:px-6 lg:px-10 text-center">
        {/* 2. "Innotrix" — bold, large, white, centred */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white break-words">
          Innotrix
        </h1>

        {/* 3. One 3–4 word line */}
        <p className="mt-4 text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-white/90 break-words">
          Building the Future
        </p>

        {/* 4. 1–2 lines of detail */}
        <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-[1.65] text-[#94A3B8] break-words">
          We build intelligent digital solutions that drive growth — AI-powered software, high-performance websites and results-driven marketing.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
