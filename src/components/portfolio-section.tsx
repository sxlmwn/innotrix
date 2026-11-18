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
    description:
      "Scaled a fashion ecommerce brand using Google Performance Max campaigns, advanced audience targeting, and conversion optimization.",
    fullOverview:
      "Our performance marketing division overhauled the acquisition strategy for an international fashion brand. By engineering structured Performance Max campaigns, deploying granular customer segments in GA4, and configuring real-time Looker Studio reporting, we achieved record ROAS and sustainable scale.",
    tags: ["Google Ads", "Performance Max", "GA4", "Looker Studio"],
    metrics: [
      { label: "Campaign Revenue", value: "$45M+" },
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
    description:
      "Built an intelligent AI assistant capable of handling customer support, lead qualification, and appointment booking 24/7.",
    fullOverview:
      "Engineered an enterprise generative AI customer support platform powered by OpenAI LLMs, Python backend services, and LangChain orchestration. The platform automates first-line tier-1 inquiries, qualifies inbound leads, and schedules meetings with zero latency.",
    tags: ["OpenAI", "Python", "LangChain", "Automation"],
    metrics: [
      { label: "Availability", value: "24/7 Automation" },
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
    description:
      "Designed and developed a high-performance corporate website with modern UI, SEO optimization, and lightning-fast loading speed.",
    fullOverview:
      "Delivered a modern corporate web presence built with Next.js, React, and Tailwind CSS. We emphasized clean typography, sub-second load times, and structured technical SEO, driving a substantial boost in high-value inbound consultation requests.",
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
    description:
      "Designed a secure fintech mobile application featuring digital payments, analytics dashboard, and biometric authentication.",
    fullOverview:
      "Created a robust cross-platform fintech banking application utilizing Flutter and Firebase. Features include biometric face/fingerprint authentication, instant peer-to-peer digital transfers, spending analytics, and bank-grade data security.",
    tags: ["Flutter", "Firebase", "Figma"],
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
    <section id="portfolio" className="w-full bg-[#FFFFFF] py-24 md:py-32 text-[#111111] border-t border-[#E5E0D8]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-14 border-b border-[#E5E0D8] gap-6">
          <div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6B6B6B]">
              03 — SELECTED CASE STUDIES
            </span>
            <h2 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111111]">
              Featured <span className="italic font-normal">Work</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-[1.7] text-[#6B6B6B]">
            A curation of recent software, AI implementations, and growth initiatives delivered for our partners worldwide.
          </p>
        </div>

        {/* 4 Large Editorial Case Studies: Alternating Image Left / Right */}
        <div className="divide-y divide-[#E5E0D8]">
          {PROJECTS.map((project, idx) => {
            const isImageRight = idx % 2 === 1;
            return (
              <div
                key={project.id}
                className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    isImageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#E5E0D8] bg-[#FAF8F4]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-5 flex flex-col items-start ${
                    isImageRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6B6B6B]">
                    {project.num} / {project.category}
                  </span>

                  <h3 className="font-serif mt-3 text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.15] text-[#111111]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm md:text-base leading-[1.7] text-[#6B6B6B]">
                    {project.description}
                  </p>

                  {/* Tags as plain text separated by dots (not pills) */}
                  <div className="mt-6 text-xs text-[#6B6B6B]">
                    {project.tags.join(" · ")}
                  </div>

                  {/* Metrics as small plain row with hairlines */}
                  <div className="mt-6 w-full border-y border-[#E5E0D8] py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
                    {project.metrics.map((m, i) => (
                      <div key={i}>
                        <strong className="font-semibold text-[#111111]">{m.value}</strong>{" "}
                        <span className="text-[#6B6B6B]">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Working View Project Button */}
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:underline underline-offset-4"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2px] border border-[#E5E0D8] bg-[#FAF8F4] p-8 sm:p-10 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 p-1 text-[#6B6B6B] hover:text-[#111111]"
              aria-label="Close modal"
            >
              <IconX className="size-5" />
            </button>

            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#1D4ED8]">
              {selectedProject.num} — {selectedProject.category}
            </span>

            <h3 className="font-serif mt-2 text-2xl sm:text-3xl font-normal text-[#111111]">
              {selectedProject.title}
            </h3>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-[#E5E0D8]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6">
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#6B6B6B] mb-2">
                Overview &amp; Implementation
              </h4>
              <p className="text-sm leading-[1.7] text-[#6B6B6B]">
                {selectedProject.fullOverview}
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-6 border-t border-[#E5E0D8] pt-5">
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#6B6B6B] mb-3">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="border border-[#E5E0D8] bg-white p-3 rounded-[2px]">
                    <div className="text-base font-semibold text-[#111111]">{m.value}</div>
                    <div className="text-[11px] text-[#6B6B6B] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 border-t border-[#E5E0D8] pt-5">
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#6B6B6B]">
                Core Tech:
              </span>{" "}
              <span className="text-xs text-[#111111]">
                {selectedProject.tags.join(" · ")}
              </span>
            </div>

            {/* Modal actions */}
            <div className="mt-8 flex items-center justify-end gap-4 border-t border-[#E5E0D8] pt-5">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-xs font-medium text-[#6B6B6B] hover:text-[#111111]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="rounded-[2px] bg-[#111111] px-5 py-2.5 text-xs font-medium text-white hover:bg-black transition-colors"
              >
                Inquire About Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
