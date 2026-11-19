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
    <section id="process" className="w-full bg-[#050914] py-16 sm:py-20 lg:py-28 text-white border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
            04 — METHODOLOGY
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
            How We Deliver
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed text-[#94A3B8] break-words">
            A transparent four-phase delivery cycle engineered for momentum, continuous feedback, and reliable production results.
          </p>
        </div>

        {/* 4 Steps separated by hairlines */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#1E293B]">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`py-6 sm:py-8 lg:py-10 ${
                idx % 2 !== 0 ? "sm:border-l border-[#1E293B] sm:pl-6" : ""
              } ${
                idx !== 0 ? "lg:border-l border-[#1E293B] lg:pl-8" : ""
              } ${
                idx !== steps.length - 1 ? "sm:pr-6 lg:pr-8" : ""
              } ${
                idx !== 0 ? "border-t sm:border-t-0 border-[#1E293B]" : ""
              } ${
                idx >= 2 ? "sm:border-t lg:border-t-0 border-[#1E293B]" : ""
              }`}
            >
              <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-[#94A3B8]">
                {item.step}
              </span>
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-white break-words">
                {item.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[#94A3B8] break-words">
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
