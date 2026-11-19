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
    <footer className="w-full bg-[#050914] text-white pt-16 sm:pt-20 pb-28 sm:pb-32 border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="#hero"
                className="text-2xl font-bold tracking-tight text-white"
              >
                Innotrix
              </a>

              <p className="mt-3 sm:mt-4 max-w-sm text-sm leading-relaxed text-[#94A3B8] break-words">
                We build intelligent digital solutions that drive growth — AI-powered software, high-performance websites and results-driven marketing.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 space-y-1.5 text-xs text-[#94A3B8]">
              <div>
                <a
                  href="mailto:innotrixai@gmail.com"
                  className="hover:text-white transition-colors break-words"
                >
                  innotrixai@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/971502891421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors break-words"
                >
                  +971 50 289 1421
                </a>
              </div>
              <div className="break-words">Dubai, UAE</div>
              <div className="break-words">Mon–Sat, 9:00 AM – 8:00 PM</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94A3B8] mb-3 sm:mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#94A3B8]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-0.5 break-words"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#94A3B8] mb-3 sm:mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2 text-xs text-[#94A3B8]">
              {serviceLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="hover:text-white transition-colors py-0.5 break-words"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 border-t border-[#1E293B] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <p>© 2026 Innotrix. All rights reserved.</p>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
