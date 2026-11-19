"use client";

import { useState } from "react";
import Image from "next/image";
import { IconX } from "@tabler/icons-react";

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullOverview: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "fashion-campaign",
    num: "01",
    title: "Fashion Brand Performance Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/portfolio-fashion.jpg",
    description: "Google Performance Max, scaled a fashion e-commerce brand.",
    fullOverview:
      "Our performance marketing division overhauled acquisition for an international fashion brand. By engineering structured Performance Max campaigns and deploying granular audience segmentation, we scaled revenue sustainably.",
    tags: ["Google Ads", "Performance Max", "GA4", "Looker Studio"],
    metrics: [
      { label: "Campaign Revenue", value: "45M+" },
      { label: "Return on Ad Spend", value: "8.5x ROAS" },
      { label: "Engaged Traffic", value: "100K+ Clicks" },
    ],
  },
  {
    id: "ai-support",
    num: "02",
    title: "AI Customer Support Platform",
    category: "AI Solutions",
    image: "/images/portfolio/portfolio-ai-support.jpg",
    description: "AI assistant for support, leads and booking, 24/7.",
    fullOverview:
      "Engineered an enterprise generative AI customer support platform that automates tier-1 customer inquiries, qualifies inbound leads, and schedules bookings around the clock.",
    tags: ["OpenAI", "Python", "LangChain", "Automation"],
    metrics: [
      { label: "Response Velocity", value: "80% Faster Replies" },
      { label: "Support Overhead", value: "60% Cost Reduction" },
    ],
  },
  {
    id: "corporate-website",
    num: "03",
    title: "Corporate Business Website",
    category: "Web Development",
    image: "/images/portfolio/portfolio-corporate.jpg",
    description: "High-performance corporate site, SEO + fast loading.",
    fullOverview:
      "Designed and developed a corporate web presence built with Next.js, React, and modern optimization techniques, maximizing organic lead generation and user engagement.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    metrics: [
      { label: "Inbound Pipeline", value: "3x More Leads" },
      { label: "Performance Score", value: "98 Page Speed" },
      { label: "Bounce Reduction", value: "40% Lower Bounce" },
    ],
  },
  {
    id: "mobile-banking",
    num: "04",
    title: "Mobile Banking Application",
    category: "Mobile App",
    image: "/images/portfolio/portfolio-fintech.jpg",
    description: "Secure fintech app, payments + analytics + biometric login.",
    fullOverview:
      "Engineered an iOS and Android fintech application featuring biometric authentication, instant payment rails, and spending analytics backed by high-availability cloud services.",
    tags: ["Flutter", "Firebase", "Biometrics"],
    metrics: [
      { label: "User Adoption", value: "50K+ Downloads" },
      { label: "App Store Score", value: "4.9★ Rating" },
      { label: "Platform Stability", value: "99.9% Uptime" },
    ],
  },
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" className="w-full bg-[#050914] py-16 sm:py-20 lg:py-28 text-white border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-[#1E293B] gap-4 sm:gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              03 — SELECTED CASE STUDIES
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
              Featured Work
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#94A3B8] break-words">
            Selected implementations across AI, high-performance software, and growth marketing.
          </p>
        </div>

        {/* 4 Large Projects: Alternating Image Left / Right */}
        <div className="divide-y divide-[#1E293B]">
          {PROJECTS.map((project, idx) => {
            const isImageRight = idx % 2 === 1;
            return (
              <div
                key={project.id}
                className="py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    isImageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#1E293B] bg-[#050914]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start ${
                    isImageRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
                    {project.num} / {project.category}
                  </span>

                  <h3 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white break-words">
                    {project.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#94A3B8] break-words">
                    {project.description}
                  </p>

                  {/* Tags as plain text */}
                  <div className="mt-5 text-xs text-[#94A3B8] break-words">
                    {project.tags.join(" · ")}
                  </div>

                  {/* Metrics as small plain row with hairlines */}
                  <div className="mt-5 w-full border-y border-[#1E293B] py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <strong className="font-semibold text-white">{m.value}</strong>{" "}
                        <span className="text-[#94A3B8]">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Working View Project Button */}
                  <div className="mt-6 sm:mt-8">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#2563eb] transition-colors"
                    >
                      <span>View Project</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2px] border border-[#1E293B] bg-[#050914] p-5 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 p-1 text-[#94A3B8] hover:text-white"
              aria-label="Close modal"
            >
              <IconX className="size-5" />
            </button>

            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              {selectedProject.num} — {selectedProject.category}
            </span>

            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
              {selectedProject.title}
            </h3>

            <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[#1E293B]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="mt-5">
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#94A3B8] mb-2">
                Overview &amp; Implementation
              </h4>
              <p className="text-sm leading-relaxed text-[#94A3B8] break-words">
                {selectedProject.fullOverview}
              </p>
            </div>

            <div className="mt-5 border-t border-[#1E293B] pt-4">
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#94A3B8] mb-3">
                Key Metrics Achieved
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="border-l border-[#1E293B] pl-3">
                    <span className="text-base sm:text-lg font-bold text-white">{m.value}</span>
                    <p className="text-[11px] text-[#94A3B8] uppercase">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center justify-end gap-3 sm:gap-4 border-t border-[#1E293B] pt-4 sm:pt-5">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-xs font-medium text-[#94A3B8] hover:text-white"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="rounded-[2px] bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Discuss Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
