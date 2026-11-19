"use client";

import { IconCheck } from "@tabler/icons-react";

export function AboutSection() {
  const checklist = [
    { title: "Expert Team" },
    { title: "Fast Delivery" },
    { title: "24/7 Support" },
    { title: "Results-Driven" },
  ];

  return (
    <section id="about" className="w-full bg-[#050914] py-24 md:py-32 text-white border-t border-[#1E293B]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Label */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              02 — ABOUT US
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Turning Ideas Into Digital Success
            </h2>
          </div>

          {/* Right Column: Text & Checklist */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-base md:text-lg leading-relaxed text-[#94A3B8]">
              At Innotrix, we combine technology, design, and marketing to help businesses grow faster — fast, reliable products, built to scale.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#1E293B] pt-6">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <IconCheck className="size-4 text-[#2563eb] flex-shrink-0" stroke={2.5} />
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Plain Row */}
        <div className="mt-16 border-t border-[#1E293B] pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="border-l border-[#1E293B] pl-5">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                100+
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#94A3B8]">
                Projects Completed
              </p>
            </div>

            <div className="border-l border-[#1E293B] pl-5">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                50+
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#94A3B8]">
                Happy Clients
              </p>
            </div>

            <div className="border-l border-[#1E293B] pl-5">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                8+
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#94A3B8]">
                Years Experience
              </p>
            </div>

            <div className="border-l border-[#1E293B] pl-5">
              <span className="text-3xl sm:text-4xl font-bold text-white">
                99%
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#94A3B8]">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
