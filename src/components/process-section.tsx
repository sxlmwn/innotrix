"use client";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "We start by understanding your business, goals, and target audience to define a clear project roadmap.",
    },
    {
      step: "02",
      title: "Design",
      desc: "Our designers create stunning, user-friendly interfaces and experiences tailored to your brand.",
    },
    {
      step: "03",
      title: "Develop",
      desc: "Our developers build your solution using modern technologies, with regular updates and testing.",
    },
    {
      step: "04",
      title: "Deliver",
      desc: "We launch your project, provide training, and offer ongoing support to ensure continued success.",
    },
  ];

  return (
    <section id="process" className="w-full bg-[#EFF6FF] py-24 md:py-32 text-[#0B1E3A] border-t border-[#DBEAFE]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#64748B]">
            04 — METHODOLOGY
          </span>
          <h2 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#0B1E3A]">
            How We <span className="italic font-normal">Deliver</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-[1.7] text-[#334155]">
            A transparent four-phase delivery cycle engineered for momentum, continuous feedback, and reliable production results.
          </p>
        </div>

        {/* 4 Steps in a row separated by hairlines */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-[#DBEAFE]">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`py-8 md:py-10 ${
                idx !== 0 ? "md:border-l border-[#DBEAFE] md:pl-8" : ""
              } ${idx !== steps.length - 1 ? "md:pr-8" : ""} ${
                idx !== 0 ? "border-t md:border-t-0 border-[#DBEAFE]" : ""
              }`}
            >
              <span className="font-serif text-3xl md:text-4xl font-normal text-[#64748B]">
                {item.step}
              </span>
              <h3 className="font-serif mt-4 text-xl sm:text-2xl font-normal text-[#0B1E3A]">
                {item.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-[1.7] text-[#334155]">
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
