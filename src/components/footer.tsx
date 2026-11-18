"use client";

import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function Footer() {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Why Us", href: "#why-us" },
    { name: "Technologies", href: "#technologies" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "#services" },
    { name: "Mobile App Development", href: "#services" },
    { name: "AI Chatbots & Agents", href: "#services" },
    { name: "Workflow Automation", href: "#services" },
    { name: "Digital Marketing & Ads", href: "#services" },
    { name: "Data Analytics & Cloud", href: "#services" },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#040812] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                className="inline-flex items-center gap-1 text-2xl font-bold tracking-tight text-white"
              >
                <span>Inno</span>
                <span className="text-[#22d3ee]">trix</span>
              </a>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                Innotrix is an AI, software development, and digital marketing agency for startups, enterprises, and global brands. We turn ambitious digital concepts into scalable, revenue-generating reality.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <IconMail className="size-4 text-cyan-400" />
                <a
                  href="mailto:innotrixai@gmail.com"
                  className="hover:text-cyan-300 transition-colors"
                >
                  innotrixai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone className="size-4 text-cyan-400" />
                <a
                  href="https://wa.me/971502891421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  +971 50 289 1421
                </a>
              </div>
              <div className="flex items-center gap-2">
                <IconMapPin className="size-4 text-cyan-400" />
                <a
                  href="https://maps.google.com/?q=Dubai,+United+Arab+Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Dubai, UAE
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Quick Links
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Key Capabilities
            </h4>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
              {serviceLinks.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="transition-colors hover:text-cyan-300"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Innotrix. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-rose-500">❤</span>
            <span>by Innotrix</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
