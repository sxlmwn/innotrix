"use client";

import { useState } from "react";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="hero" className="w-full bg-[#FAF8F4] text-[#111111]">
      {/* Clean Editorial Navigation */}
      <nav className="w-full border-b border-[#E5E0D8] bg-[#FAF8F4] sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          {/* Logo */}
          <a
            href="#hero"
            className="font-serif text-2xl font-normal tracking-tight text-[#111111]"
          >
            Inno<span className="text-[#1D4ED8]">trix</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 text-[13px] font-medium tracking-normal text-[#6B6B6B] lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-[#111111]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex rounded-full bg-[#111111] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-black"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111111] lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <IconX className="size-5" />
              ) : (
                <IconMenu2 className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-[#E5E0D8] bg-[#FAF8F4] px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#6B6B6B] hover:text-[#111111] py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full bg-[#111111] px-5 py-2 text-xs font-medium text-white"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Left-Aligned Content Area */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (Editorial Typography) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[#6B6B6B]">
              <span className="size-1.5 rounded-full bg-[#1D4ED8]" />
              <span>INNOTRIX — AI · SOFTWARE · MARKETING — DUBAI, UAE</span>
            </div>

            {/* Huge Headline: Serif, sharp, with "Future" in italic */}
            <h1 className="font-serif mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.05] tracking-tight text-[#111111]">
              Building the <span className="italic font-normal">Future</span> with AI, Code &amp; Creativity
            </h1>

            {/* Subtext (max-w 560px, generous line-height) */}
            <p className="mt-8 max-w-[560px] text-base md:text-[17px] leading-[1.7] text-[#6B6B6B]">
              We build intelligent digital solutions that drive growth. From AI-powered software to high-performance websites and results-driven marketing — Innotrix turns your ideas into digital success.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="rounded-[2px] bg-[#111111] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black"
              >
                Get Started
              </a>
              <a
                href="#portfolio"
                className="group text-sm font-medium text-[#111111] hover:underline underline-offset-4 flex items-center gap-1.5"
              >
                <span>View Portfolio</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>

            {/* Hairline + Client Logos */}
            <div className="mt-14 w-full border-t border-[#E5E0D8] pt-6">
              <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#6B6B6B] mb-3">
                Selected Technology Partners
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] font-medium text-[#6B6B6B]">
                <span>Bootstrap</span>
                <span>Stripe</span>
                <span>Google</span>
                <span>Algolia</span>
                <span>PayPal</span>
                <span>Laravel</span>
              </div>
            </div>
          </div>

          {/* Right Column (ONE Large, Clean Portfolio Image in Sharp Frame) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative overflow-hidden rounded-[2px] border border-[#E5E0D8] bg-[#F7F5F0]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero-showcase.jpg"
                  alt="Innotrix digital platform and high-performance corporate interface"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-2.5 text-[12px] text-[#6B6B6B]">
              01 — Recent Innotrix Enterprise Deployment · High-Performance Web Architecture
            </p>
          </div>
        </div>
      </section>

      {/* Stats Row as Single Plain Text Row with Hairlines */}
      <section className="w-full border-y border-[#E5E0D8] bg-[#FAF8F4] py-5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-medium text-[#6B6B6B]">
            <div>
              <strong className="font-semibold text-[#111111]">100+</strong> Projects Delivered
            </div>
            <span className="hidden sm:inline text-[#E5E0D8]">·</span>
            <div>
              <strong className="font-semibold text-[#111111]">45M+</strong> Revenue Generated
            </div>
            <span className="hidden sm:inline text-[#E5E0D8]">·</span>
            <div>
              <strong className="font-semibold text-[#111111]">99%</strong> Client Satisfaction
            </div>
            <span className="hidden md:inline text-[#E5E0D8]">·</span>
            <div className="hidden md:block">
              <strong className="font-semibold text-[#111111]">Dubai, UAE</strong> Global Headquarters
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
