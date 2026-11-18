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
    <section id="why-us" className="w-full bg-[#FFFFFF] py-24 md:py-32 text-[#111111] border-t border-[#E5E0D8]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6B6B6B]">
              05 — THE INNOTRIX STANDARD
            </span>
            <h2 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#111111]">
              Why Choose <span className="italic font-normal">Innotrix</span>
            </h2>
            <p className="mt-4 text-sm md:text-base leading-[1.7] text-[#6B6B6B]">
              We merge deep technical mastery with direct commercial focus to deliver solutions that outperform expectations.
            </p>
          </div>

          {/* Right Column: 2-column list, small title (sans, semibold) + one line (No cards, no icons in boxes) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 border-t lg:border-t-0 border-[#E5E0D8] pt-8 lg:pt-0">
            {points.map((point, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-medium text-[#6B6B6B] mb-1">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-[#111111]">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] leading-[1.7] text-[#6B6B6B]">
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
