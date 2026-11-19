"use client";

import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#1E293B] bg-[#050914]/95 backdrop-none">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4">
        {/* Left: Brand */}
        <a href="#hero" className="text-xl sm:text-2xl font-bold tracking-tight text-white flex-shrink-0">
          Innotrix
        </a>

        {/* Center: Desktop Nav Links (hidden on tablet & mobile) */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-medium tracking-wide text-[#94A3B8] transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: CTA & Hamburger Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <a
            href="#contact"
            className="rounded-[2px] bg-[#2563eb] px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-600 whitespace-nowrap"
          >
            Let&apos;s Talk
          </a>

          {/* Hamburger (visible on tablet and mobile) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 text-[#94A3B8] hover:text-white lg:hidden rounded-[2px] border border-[#1E293B]"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <IconX className="size-5" /> : <IconMenu2 className="size-5" />}
          </button>
        </div>
      </div>

      {/* Full Dark Mobile & Tablet Menu */}
      {mobileOpen && (
        <div className="border-b border-[#1E293B] bg-[#050914] px-4 sm:px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-[#94A3B8] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
