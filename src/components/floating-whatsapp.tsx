"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/971502891421"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Innotrix on WhatsApp"
        className="group flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_35px_rgba(37,211,102,0.65)] focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        <IconBrandWhatsapp className="size-8" stroke={2} />
        {/* Subtle tooltip on hover */}
        <span className="pointer-events-none absolute right-16 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap border border-white/10">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
