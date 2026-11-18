"use client";

import {
  IconUsersGroup,
  IconCpu,
  IconTrophy,
  IconBolt,
  IconHeadset,
  IconCoin,
} from "@tabler/icons-react";

export function WhyUsSection() {
  const points = [
    {
      icon: IconUsersGroup,
      title: "Expert Team",
      description:
        "Experienced developers, designers, and marketers dedicated to your success.",
    },
    {
      icon: IconCpu,
      title: "Cutting-Edge Tech",
      description:
        "We use the latest technologies and frameworks to build future-proof solutions.",
    },
    {
      icon: IconTrophy,
      title: "Proven Results",
      description:
        "Our track record speaks for itself — 100+ successful projects and happy clients.",
    },
    {
      icon: IconBolt,
      title: "Fast Delivery",
      description:
        "We work efficiently to deliver your project on time without compromising quality.",
    },
    {
      icon: IconHeadset,
      title: "24/7 Support",
      description:
        "Round-the-clock support to keep your business running smoothly at all times.",
    },
    {
      icon: IconCoin,
      title: "Affordable Pricing",
      description:
        "High-quality solutions at competitive prices that fit your budget.",
    },
  ];

  return (
    <section id="why-us" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            THE INNOTRIX ADVANTAGE
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Why Partner With Innotrix
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We operate as an extension of your leadership and technical team, committed to your long-term success.
          </p>
        </div>

        {/* 6 points grid (3x2 on desktop) */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#071233]/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#071233]/70 hover:shadow-[0_12px_36px_rgba(37,99,235,0.2)]"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="size-6" stroke={1.8} />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
