"use client";

import { useState } from "react";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconX,
  IconCheck,
  IconSparkles,
} from "@tabler/icons-react";

export interface ProjectItem {
  id: string;
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
    title: "Fashion Brand Performance Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/portfolio-fashion.jpg",
    description:
      "Scaled a fashion ecommerce brand using Google Performance Max campaigns, advanced audience targeting, and conversion optimization.",
    fullOverview:
      "Our performance marketing division overhauled the multi-channel acquisition strategy for a rapidly expanding fashion brand. By restructuring Google Performance Max assets, deploying first-party data audiences in GA4, and configuring real-time Looker Studio reporting, we drastically unlocked scalable profitability across global markets.",
    tags: ["Google Ads", "Performance Max", "GA4", "Looker Studio"],
    metrics: [
      { label: "Campaign Revenue", value: "$45M+" },
      { label: "Return on Ad Spend", value: "8.5x ROAS" },
      { label: "Engaged Traffic", value: "100K+ Clicks" },
    ],
  },
  {
    id: "ai-support",
    title: "AI Customer Support Platform",
    category: "AI Solutions",
    image: "/images/portfolio/portfolio-ai-support.jpg",
    description:
      "Built an intelligent AI assistant capable of handling customer support, lead qualification, and appointment booking 24/7.",
    fullOverview:
      "Engineered an enterprise generative AI customer copilot using OpenAI GPT models, Python microservices, and LangChain orchestration. The platform automatically answers multi-lingual inquiries, books calendar meetings, extracts intent, and smoothly escalates VIP inquiries to human agents with full conversation context.",
    tags: ["OpenAI", "Python", "LangChain", "Automation"],
    metrics: [
      { label: "Operational Uptime", value: "24/7 Automation" },
      { label: "Response Velocity", value: "80% Faster Replies" },
      { label: "Support Overhead", value: "60% Cost Reduction" },
    ],
  },
  {
    id: "corporate-website",
    title: "Corporate Business Website",
    category: "Web Development",
    image: "/images/portfolio/portfolio-corporate.jpg",
    description:
      "Designed and developed a high-performance corporate website with modern UI, SEO optimization, and lightning-fast loading speed.",
    fullOverview:
      "Architected and deployed a cutting-edge web flagship built on Next.js, React, and Tailwind CSS. The solution achieved perfect Lighthouse speed scores, integrated interactive 3D elements without performance degradation, and generated an immediate surge in organic inbound inquiries.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    metrics: [
      { label: "Inbound Pipeline", value: "3x More Leads" },
      { label: "Lighthouse Performance", value: "98 Page Speed" },
      { label: "Visitor Retention", value: "40% Lower Bounce" },
    ],
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking Application",
    category: "Mobile App",
    image: "/images/portfolio/portfolio-fintech.jpg",
    description:
      "Designed a secure fintech mobile application featuring digital payments, analytics dashboard, and biometric authentication.",
    fullOverview:
      "Delivered a native-grade iOS and Android fintech banking app built with Flutter and Firebase cloud infrastructure. Features include biometric login, instant peer-to-peer money transfers, expense categorization charts, and strict financial-grade data encryption.",
    tags: ["Flutter", "Firebase", "Figma"],
    metrics: [
      { label: "Verified Active Users", value: "50K+ Downloads" },
      { label: "App Store Reviews", value: "4.9★ Rating" },
      { label: "Service Reliability", value: "99.9% Uptime" },
    ],
  },
];

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="portfolio" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            CASE STUDIES
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Proven Results in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore how we build future-ready solutions that drive record growth, operational efficiency, and tangible digital impact.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071233]/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_16px_40px_rgba(37,99,235,0.25)]"
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071233] via-[#071233]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-full bg-[#050914]/80 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-md border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlight Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-2 border-y border-white/10 py-3.5 text-center">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-sm sm:text-base font-bold text-cyan-400">
                          {metric.value}
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Working Action Button */}
                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:from-blue-500 hover:to-cyan-500 hover:shadow-cyan-500/25"
                  >
                    <span>View Project</span>
                    <IconArrowUpRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/20 bg-[#071233] p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <IconX className="size-6" />
            </button>

            <span className="inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
              {selectedProject.category}
            </span>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
              {selectedProject.title}
            </h3>

            {/* Modal Image */}
            <div className="relative mt-5 h-56 sm:h-64 w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Project Overview &amp; Implementation
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                {selectedProject.fullOverview}
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Verified Performance Metrics
              </h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#050914] p-3 text-center"
                  >
                    <div className="text-lg font-bold text-cyan-400">{m.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Technologies Used
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-8 flex items-center justify-end gap-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:text-white"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Start a Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
