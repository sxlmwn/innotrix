"use client";

import { useState } from "react";
import {
  IconLayout,
  IconServer,
  IconDeviceMobile,
  IconBrain,
  IconCloud,
  IconSpeakerphone,
} from "@tabler/icons-react";

export function TechnologiesSection() {
  const categories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: IconLayout,
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "backend",
      title: "Backend",
      icon: IconServer,
      skills: ["Node.js", "Python", "Laravel", "PostgreSQL", "MongoDB"],
    },
    {
      id: "mobile",
      title: "Mobile",
      icon: IconDeviceMobile,
      skills: ["Flutter", "React Native", "Swift", "Kotlin"],
    },
    {
      id: "ai-ml",
      title: "AI & ML",
      icon: IconBrain,
      skills: ["OpenAI", "TensorFlow", "LangChain", "Python", "Hugging Face"],
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      icon: IconCloud,
      skills: ["AWS", "Google Cloud", "Docker", "Vercel", "Firebase"],
    },
    {
      id: "marketing",
      title: "Marketing",
      icon: IconSpeakerphone,
      skills: ["Google Ads", "Meta Ads", "GA4", "SEO", "HubSpot"],
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const displayed =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="technologies" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            OUR TECH STACK
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Modern, Scalable Technologies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We build solutions on battle-tested frameworks, state-of-the-art AI architectures, and resilient cloud systems.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                  : "bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              All Technologies
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === c.id
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayed.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071233]/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#071233]/70 hover:shadow-[0_12px_36px_rgba(37,99,235,0.2)]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <Icon className="size-5" stroke={1.8} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Production Ready</span>
                  <span className="text-cyan-400 font-semibold">Enterprise SLA</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
