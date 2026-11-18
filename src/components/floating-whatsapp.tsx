"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/971502891421"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Innotrix on WhatsApp"
        className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform duration-200 hover:scale-105"
      >
        <IconBrandWhatsapp className="size-7" stroke={2} />
      </a>
    </aside>
  );
}

export default FloatingWhatsApp;
