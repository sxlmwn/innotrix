"use client";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "Understand your business, goals and audience.",
    },
    {
      step: "02",
      title: "Design",
      desc: "Stunning, user-friendly interfaces for your brand.",
    },
    {
      step: "03",
      title: "Develop",
      desc: "Build with modern tech, tested at every step.",
    },
    {
      step: "04",
      title: "Deliver",
      desc: "Launch, train, and support after go-live.",
    },
  ];

  return (
    <section id="process" className="w-full bg-[#050914] py-24 md:py-32 text-white border-t border-[#1E293B]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
            04 — METHODOLOGY
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            How We Deliver
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-[#94A3B8]">
            A transparent four-phase delivery cycle engineered for momentum, continuous feedback, and reliable production results.
          </p>
        </div>

        {/* 4 Steps separated by hairlines */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-[#1E293B]">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`py-8 md:py-10 ${
                idx !== 0 ? "md:border-l border-[#1E293B] md:pl-8" : ""
              } ${idx !== steps.length - 1 ? "md:pr-8" : ""} ${
                idx !== 0 ? "border-t md:border-t-0 border-[#1E293B]" : ""
              }`}
            >
              <span className="font-mono text-3xl md:text-4xl font-bold text-[#94A3B8]">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#94A3B8]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
