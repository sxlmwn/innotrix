"use client";

import { useState } from "react";
import { IconArrowRight, IconX, IconCheck } from "@tabler/icons-react";

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
    description:
      "Modern, fast, and responsive websites built with the latest technologies. From business websites to complex web applications, we create digital experiences that convert visitors into customers.",
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
    description:
      "Native and cross-platform mobile apps for iOS and Android. We build intuitive, high-performance apps that users love and businesses rely on for growth.",
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
    description:
      "AI customer-support and lead-qualification chatbots that work 24/7, answer instantly, book appointments, and hand over to a human when needed.",
    features: [
      "24/7 Multi-Lingual Automated Support",
      "CRM & Calendar Appointment Booking",
      "Proprietary Business Knowledge RAG",
      "Seamless Human Agent Handoff",
    ],
  },
  {
    id: "automation",
    num: "04",
    title: "Automation",
    description:
      "AI workflow automation and business-process automation, with integrations that save time, cut costs, and remove repetitive work.",
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
    title: "AI Calling Agents / Voice Agents",
    description:
      "AI voice agents that handle phone calls, booking, support, and sales calls in a natural voice.",
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
    description:
      "Intelligent automation, chatbots, voice agents, workflows, and machine learning solutions that streamline operations.",
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
    description:
      "Data-driven marketing strategies that grow your brand. From SEO to paid advertising, we help you reach the right audience and maximize your ROI. Google Ads, Meta Ads, TikTok Ads.",
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
    description:
      "Turn business data into insights with dashboards, reporting, and AI-powered analytics.",
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
    description:
      "Secure cloud infrastructure, API integrations, deployment, and scalable backend systems.",
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
    <section id="services" className="w-full bg-[#FFFFFF] py-24 md:py-32 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E5E0D8] gap-6">
          <div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6B6B6B]">
              01 — OUR SERVICES
            </span>
            <h2 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111111]">
              Capabilities &amp; <span className="italic font-normal">Expertise</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-[1.7] text-[#6B6B6B]">
            From bespoke AI systems to high-performing digital marketing campaigns, we engineer scalable digital growth for modern businesses.
          </p>
        </div>

        {/* 9 Services as Numbered Editorial List Rows */}
        <div className="divide-y divide-[#E5E0D8]">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveModalService(service)}
              className="group flex w-full flex-col md:flex-row md:items-center justify-between py-8 md:py-10 text-left transition-colors hover:bg-[#F0EEE9] px-4 md:px-6 rounded-[2px]"
            >
              {/* Left: Number + Title */}
              <div className="flex items-baseline gap-6 md:gap-10 md:w-1/2">
                <span className="font-serif text-lg md:text-xl text-[#6B6B6B]">
                  {service.num}
                </span>
                <h3 className="font-serif text-2xl md:text-[26px] font-normal tracking-tight text-[#111111] group-hover:text-[#1D4ED8] transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Middle: Description */}
              <div className="mt-3 md:mt-0 md:w-5/12 pr-4">
                <p className="text-sm md:text-[15px] leading-[1.7] text-[#6B6B6B]">
                  {service.description}
                </p>
              </div>

              {/* Right: Subtle Arrow */}
              <div className="mt-4 md:mt-0 flex items-center justify-end md:w-1/12">
                <span className="text-lg text-[#111111] transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-lg rounded-[2px] border border-[#E5E0D8] bg-[#FAF8F4] p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute right-5 top-5 p-1 text-[#6B6B6B] hover:text-[#111111]"
              aria-label="Close modal"
            >
              <IconX className="size-5" />
            </button>

            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#1D4ED8]">
              SERVICE {activeModalService.num}
            </span>

            <h3 className="font-serif mt-2 text-2xl sm:text-3xl font-normal text-[#111111]">
              {activeModalService.title}
            </h3>

            <p className="mt-4 text-sm leading-[1.7] text-[#6B6B6B]">
              {activeModalService.description}
            </p>

            <div className="mt-6 border-t border-[#E5E0D8] pt-5">
              <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#6B6B6B] mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111]">
                    <IconCheck className="size-4 text-[#1D4ED8] flex-shrink-0 mt-0.5" stroke={2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-end gap-4 border-t border-[#E5E0D8] pt-5">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="text-xs font-medium text-[#6B6B6B] hover:text-[#111111]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setActiveModalService(null)}
                className="rounded-[2px] bg-[#111111] px-5 py-2.5 text-xs font-medium text-white hover:bg-black transition-colors"
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
