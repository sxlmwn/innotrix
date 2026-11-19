"use client";

import { useState } from "react";
import { IconX, IconCheck } from "@tabler/icons-react";

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    num: "01",
    title: "Web Development",
    description: "Modern, fast, responsive websites that convert visitors into customers.",
    features: [
      "Custom Next.js & React Architectures",
      "Core Web Vitals & Conversion Optimization",
      "Full-Stack Web Applications & CMS",
      "Enterprise E-Commerce Platforms",
    ],
  },
  {
    id: "mobile-dev",
    num: "02",
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS and Android.",
    features: [
      "Cross-Platform Flutter & React Native",
      "Biometric Authentication & Offline Sync",
      "Intuitive UX/UI Design for iOS & Android",
      "App Store & Google Play Deployment",
    ],
  },
  {
    id: "ai-chatbots",
    num: "03",
    title: "AI Chatbots",
    description: "24/7 chatbots for support, leads and booking.",
    features: [
      "24/7 Automated Multilingual Support",
      "CRM & Calendar Appointment Booking",
      "Proprietary Business Knowledge RAG",
      "Seamless Human Agent Handoff",
    ],
  },
  {
    id: "automation",
    num: "04",
    title: "Automation",
    description: "Workflow and business-process automation that saves time and cost.",
    features: [
      "End-to-End Zapier / Make / API Pipelines",
      "Automated Invoicing & Document Processing",
      "Lead Routing & Notification Triggers",
      "Zero-Error Repetitive Task Removal",
    ],
  },
  {
    id: "ai-calling",
    num: "05",
    title: "AI Calling Agents",
    description: "Voice agents for calls, booking, support and sales.",
    features: [
      "Human-Like Conversational Speech",
      "Inbound Customer Support & Triage",
      "Outbound Call Confirmations & Reminders",
      "Instant Transcription & CRM Sync",
    ],
  },
  {
    id: "ai-automation",
    num: "06",
    title: "AI Automation",
    description: "Intelligent automation, workflows and machine learning.",
    features: [
      "Enterprise Multi-Agent Orchestration",
      "Predictive Machine Learning Systems",
      "Custom Fine-Tuned Model Pipelines",
      "Operational Cost Reduction Solutions",
    ],
  },
  {
    id: "digital-marketing",
    num: "07",
    title: "Digital Marketing",
    description: "SEO, Google Ads, Meta Ads and data-driven growth.",
    features: [
      "Google Ads & Performance Max Campaigns",
      "Meta & TikTok Paid Social Strategy",
      "Comprehensive Technical & Content SEO",
      "Conversion Rate Optimization (CRO)",
    ],
  },
  {
    id: "data-analytics",
    num: "08",
    title: "Data Analytics",
    description: "Dashboards, reporting and AI-powered insights.",
    features: [
      "Executive Looker Studio & Power BI Dashboards",
      "Multi-Source Attribution & GA4 Audits",
      "Cohort Retention & Lifetime Value Analysis",
      "Automated Daily & Weekly Business Reports",
    ],
  },
  {
    id: "cloud-solutions",
    num: "09",
    title: "Cloud Solutions",
    description: "Secure cloud infrastructure, APIs and scalable backends.",
    features: [
      "AWS, Google Cloud & Vercel Infrastructure",
      "Scalable Microservices & REST/GraphQL APIs",
      "High-Availability Container Deployments",
      "Cloud Security Audits & SLA Monitoring",
    ],
  },
];

export function ServicesSection() {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="w-full bg-[#050914] py-16 sm:py-20 lg:py-28 text-white border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-[#1E293B] gap-4 sm:gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              01 — OUR SERVICES
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
              Capabilities &amp; Expertise
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg leading-[1.65] text-[#94A3B8] break-words">
            From custom AI solutions to high-performance marketing, we engineer digital growth for modern businesses.
          </p>
        </div>

        {/* 9 Services as Numbered Editorial Rows */}
        <div className="divide-y divide-[#1E293B]">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveModalService(service)}
              className="group block w-full py-5 sm:py-6 lg:py-7 px-2 sm:px-4 lg:px-6 text-left transition-colors hover:bg-[#0B1528] rounded-[2px]"
            >
              {/* 1. Desktop / Laptop layout: grid grid-cols-[48px_1fr_1fr_32px] */}
              <div className="hidden lg:grid grid-cols-[48px_1fr_1fr_32px] items-center gap-6 w-full">
                <span className="text-sm font-mono text-[#94A3B8]">
                  {service.num}
                </span>
                <h3 className="text-xl xl:text-2xl font-bold tracking-tight text-white group-hover:text-[#2563eb] transition-colors break-words">
                  {service.title}
                </h3>
                <p className="text-sm xl:text-base leading-relaxed text-[#94A3B8] break-words">
                  {service.description}
                </p>
                <span className="text-lg text-[#94A3B8] text-right transition-transform group-hover:text-white group-hover:translate-x-1.5">
                  →
                </span>
              </div>

              {/* 2. Tablet layout: grid-cols-[40px_1fr_32px] */}
              <div className="hidden sm:grid lg:hidden grid-cols-[40px_1fr_32px] items-start gap-4 w-full">
                <span className="text-sm font-mono text-[#94A3B8] pt-0.5">
                  {service.num}
                </span>
                <div className="flex flex-col gap-1 pr-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#2563eb] transition-colors break-words">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8] break-words">
                    {service.description}
                  </p>
                </div>
                <span className="text-base text-[#94A3B8] text-right pt-0.5 transition-transform group-hover:text-white group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* 3. Phone layout: flex flex-col stacked */}
              <div className="flex sm:hidden flex-col gap-2 w-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-baseline gap-2.5 min-w-0">
                    <span className="text-xs font-mono text-[#94A3B8] flex-shrink-0">
                      {service.num}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#2563eb] transition-colors break-words">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-sm text-[#94A3B8] transition-transform group-hover:text-white group-hover:translate-x-1 flex-shrink-0">
                    →
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#94A3B8] pl-5 break-words">
                  {service.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[2px] border border-[#1E293B] bg-[#050914] p-5 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute right-4 top-4 sm:right-5 sm:top-5 p-1 text-[#94A3B8] hover:text-white"
              aria-label="Close modal"
            >
              <IconX className="size-5" />
            </button>

            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              SERVICE {activeModalService.num}
            </span>

            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">
              {activeModalService.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] break-words">
              {activeModalService.description}
            </p>

            <div className="mt-5 border-t border-[#1E293B] pt-4">
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#94A3B8] mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {activeModalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                    <IconCheck className="size-4 text-[#2563eb] flex-shrink-0 mt-0.5" stroke={2} />
                    <span className="break-words">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 sm:gap-4 border-t border-[#1E293B] pt-4">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="text-xs font-medium text-[#94A3B8] hover:text-white"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModalService(null)}
                className="rounded-[2px] bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Inquire About Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
