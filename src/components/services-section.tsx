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
    <section id="services" className="w-full bg-[#050914] py-24 md:py-32 text-white border-t border-[#1E293B]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#1E293B] gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              01 — OUR SERVICES
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Capabilities &amp; Expertise
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-relaxed text-[#94A3B8]">
            From custom AI solutions to high-performance marketing, we engineer digital growth for modern businesses.
          </p>
        </div>

        {/* 9 Services as Numbered Editorial List Rows */}
        <div className="divide-y divide-[#1E293B]">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveModalService(service)}
              className="group flex w-full flex-col md:flex-row md:items-center justify-between py-7 md:py-8 text-left transition-colors hover:bg-[#0B1528] px-4 md:px-6 rounded-[2px]"
            >
              {/* Left: Number + Title */}
              <div className="flex items-baseline gap-6 md:gap-8 md:w-1/2">
                <span className="text-sm font-mono text-[#94A3B8]">
                  {service.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#2563eb] transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Middle: Description */}
              <div className="mt-2 md:mt-0 md:w-5/12 pr-4">
                <p className="text-sm leading-relaxed text-[#94A3B8]">
                  {service.description}
                </p>
              </div>

              {/* Right: Subtle Arrow */}
              <div className="mt-3 md:mt-0 flex items-center justify-end md:w-1/12">
                <span className="text-lg text-[#94A3B8] transition-all duration-200 group-hover:text-white group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-lg rounded-[2px] border border-[#1E293B] bg-[#050914] p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute right-5 top-5 p-1 text-[#94A3B8] hover:text-white"
              aria-label="Close modal"
            >
              <IconX className="size-5" />
            </button>

            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              SERVICE {activeModalService.num}
            </span>

            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              {activeModalService.title}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
              {activeModalService.description}
            </p>

            <div className="mt-6 border-t border-[#1E293B] pt-5">
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#94A3B8] mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white">
                    <IconCheck className="size-4 text-[#2563eb] flex-shrink-0 mt-0.5" stroke={2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-end gap-4 border-t border-[#1E293B] pt-5">
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
                className="rounded-[2px] bg-[#2563eb] px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-600 transition-colors"
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
