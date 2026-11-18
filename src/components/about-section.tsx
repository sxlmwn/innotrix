"use client";

import { IconCheck } from "@tabler/icons-react";

export function AboutSection() {
  const checklist = [
    {
      title: "Expert Team",
      desc: "Experienced developers, designers, and marketers dedicated to your success.",
    },
    {
      title: "Fast Delivery",
      desc: "Agile sprints ensuring precision execution and on-time launches.",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock technical monitoring and proactive infrastructure support.",
    },
    {
      title: "Results-Driven",
      desc: "Obsessed with business ROI, speed, conversion rates, and scalable growth.",
    },
  ];

  return (
    <section id="about" className="w-full bg-[#EFF6FF] py-24 md:py-32 text-[#0B1E3A] border-t border-[#DBEAFE]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Label */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#64748B]">
              02 — ABOUT US
            </span>
            <h2 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#0B1E3A]">
              Turning Ideas Into <span className="italic font-normal">Digital Success</span>
            </h2>
          </div>

          {/* Right Column: Editorial Body & Checklist */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-base md:text-lg leading-[1.7] text-[#334155]">
              At Innotrix, we combine technology, design, and marketing to help businesses grow faster. We are a full-service digital agency focused on building intelligent digital solutions that create real business results. Our team of experienced developers, designers, and marketers work closely with every client to deliver products that are fast, reliable, and built to scale. Whether you need a modern website, a custom AI solution, or a complete digital marketing strategy, Innotrix is your trusted partner for digital growth.
            </p>

            {/* Checklist as Plain List with Small Blue Check Marks (No Boxes) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 border-t border-[#DBEAFE] pt-8">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <IconCheck className="size-4 text-[#1D4ED8] flex-shrink-0 mt-1" stroke={2.5} />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B1E3A]">{item.title}</h4>
                    <p className="mt-1 text-xs sm:text-[13px] leading-[1.6] text-[#64748B]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats as a Plain Row with Hairlines */}
        <div className="mt-16 sm:mt-20 border-t border-[#DBEAFE] pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="border-l border-[#DBEAFE] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#0B1E3A]">
                100+
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#64748B]">
                Projects Completed
              </p>
            </div>

            <div className="border-l border-[#DBEAFE] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#0B1E3A]">
                50+
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#64748B]">
                Happy Clients
              </p>
            </div>

            <div className="border-l border-[#DBEAFE] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#0B1E3A]">
                8+
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#64748B]">
                Years Experience
              </p>
            </div>

            <div className="border-l border-[#DBEAFE] pl-5">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#0B1E3A]">
                99%
              </span>
              <p className="mt-1 text-xs tracking-wider uppercase text-[#64748B]">
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
