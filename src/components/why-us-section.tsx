"use client";

export function WhyUsSection() {
  const points = [
    {
      title: "Expert Team",
      desc: "Experienced developers, designers, and marketers dedicated to your success.",
    },
    {
      title: "Cutting-Edge Tech",
      desc: "We use the latest technologies and frameworks to build future-proof solutions.",
    },
    {
      title: "Proven Results",
      desc: "Our track record speaks for itself — 100+ successful projects and happy clients.",
    },
    {
      title: "Fast Delivery",
      desc: "We work efficiently to deliver your project on time without compromising quality.",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock support to keep your business running smoothly at all times.",
    },
    {
      title: "Affordable Pricing",
      desc: "High-quality solutions at competitive prices that fit your budget.",
    },
  ];

  return (
    <section id="why-us" className="w-full bg-[#050914] py-16 sm:py-20 lg:py-28 text-white border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              05 — THE INNOTRIX STANDARD
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
              Why Choose Innotrix
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8] break-words">
              We merge deep technical mastery with direct commercial focus to deliver solutions that outperform expectations.
            </p>
          </div>

          {/* Right Column: 2-column list, title + one line each, no cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 sm:gap-x-10 lg:gap-x-12 border-t lg:border-t-0 border-[#1E293B] pt-8 lg:pt-0">
            {points.map((point, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-mono text-[#94A3B8] mb-1">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-white break-words">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#94A3B8] break-words">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
