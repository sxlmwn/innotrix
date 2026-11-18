"use client";

import {
  IconCompass,
  IconPalette,
  IconCode,
  IconRocket,
} from "@tabler/icons-react";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      icon: IconCompass,
      description:
        "We start by understanding your business, goals, and target audience to define a clear project roadmap.",
    },
    {
      step: "02",
      title: "Design",
      icon: IconPalette,
      description:
        "Our designers create stunning, user-friendly interfaces and experiences tailored to your brand.",
    },
    {
      step: "03",
      title: "Develop",
      icon: IconCode,
      description:
        "Our developers build your solution using modern technologies, with regular updates and testing.",
    },
    {
      step: "04",
      title: "Deliver",
      icon: IconRocket,
      description:
        "We launch your project, provide training, and offer ongoing support to ensure continued success.",
    },
  ];

  return (
    <section id="process" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            HOW WE WORK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our Proven 4-Step Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From initial discovery to post-launch scaling, our structured framework ensures high velocity and flawless delivery.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071233]/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#071233]/70 hover:shadow-[0_12px_36px_rgba(37,99,235,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
                      {item.step}
                    </span>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <Icon className="size-5" stroke={1.8} />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 h-1 w-12 rounded-full bg-cyan-500/30 group-hover:w-full group-hover:bg-cyan-400 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
