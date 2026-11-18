"use client";

import {
  IconCheck,
  IconAward,
  IconUsers,
  IconClock,
  IconThumbUp,
} from "@tabler/icons-react";

export function AboutSection() {
  const checklist = [
    { title: "Expert Team", desc: "Elite senior engineers, AI specialists & growth marketers" },
    { title: "Fast Delivery", desc: "Agile sprints delivering production value on schedule" },
    { title: "24/7 Support", desc: "Continuous monitoring, updates and proactive maintenance" },
    { title: "Results-Driven", desc: "Obsessed with business ROI, speed and scalable growth" },
  ];

  const stats = [
    { icon: IconAward, value: "100+", label: "Projects Completed" },
    { icon: IconUsers, value: "50+", label: "Happy Clients" },
    { icon: IconClock, value: "8+", label: "Years Experience" },
    { icon: IconThumbUp, value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Checklist */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="inline-block w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              ABOUT US
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Turning Ideas Into <span className="text-cyan-400">Digital Success</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
              At Innotrix, we combine technology, design, and marketing to help businesses grow faster. We are a full-service digital agency focused on building intelligent digital solutions that create real business results. Our team of experienced developers, designers, and marketers work closely with every client to deliver products that are fast, reliable, and built to scale. Whether you need a modern website, a custom AI solution, or a complete digital marketing strategy, Innotrix is your trusted partner for digital growth.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#071233]/40 p-3.5 backdrop-blur-sm"
                >
                  <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5 border border-cyan-500/30">
                    <IconCheck className="size-4" stroke={2.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Key Metric Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#071233] to-[#0a1a3d] p-6 sm:p-8 text-center shadow-lg transition-transform hover:-translate-y-1 hover:border-cyan-500/40"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 mb-4">
                    <Icon className="size-6" stroke={1.8} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
