"use client";

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
    { name: "AI Chatbots", href: "#services" },
    { name: "Automation", href: "#services" },
    { name: "AI Calling Agents", href: "#services" },
    { name: "AI Automation", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
    { name: "Data Analytics", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ];

  return (
    <footer className="w-full bg-[#050914] text-white pt-20 pb-28 border-t border-[#1E293B]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-14">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                className="text-2xl font-bold tracking-tight text-white"
              >
                Innotrix
              </a>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
                We build intelligent digital solutions that drive growth — AI-powered software, high-performance websites and results-driven marketing.
              </p>
            </div>

            <div className="mt-8 space-y-1.5 text-xs text-[#94A3B8]">
              <div>
                <a
                  href="mailto:innotrixai@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  innotrixai@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/971502891421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +971 50 289 1421
                </a>
              </div>
              <div>Dubai, UAE</div>
              <div>Mon–Sat, 9:00 AM – 8:00 PM</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94A3B8] mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#94A3B8]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94A3B8] mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#94A3B8]">
              {serviceLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="hover:text-white transition-colors py-0.5"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[#1E293B] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© 2026 Innotrix. All rights reserved.</p>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
