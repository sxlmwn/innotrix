"use client";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#1E293B] bg-[#050914]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4">
        {/* Left: Innotrix logo */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white flex-shrink-0 hover:opacity-90 transition-opacity"
        >
          Innotrix
        </a>

        {/* Right: "Let's Talk" button */}
        <a
          href="#contact"
          className="rounded-[2px] bg-[#2563eb] px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-600 whitespace-nowrap"
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}

export default SiteHeader;
