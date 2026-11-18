"use client";

import { useState } from "react";
import {
  IconWorldWww,
  IconDeviceMobile,
  IconMessageChatbot,
  IconCpu,
  IconPhoneCall,
  IconRobot,
  IconChartBar,
  IconDatabase,
  IconCloudComputing,
  IconArrowRight,
  IconCheck,
  IconX,
} from "@tabler/icons-react";

export interface ServiceItem {
  id: string;
  icon: typeof IconWorldWww;
  title: string;
  description: string;
  features: string[];
  tag: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    icon: IconWorldWww,
    title: "Web Development",
    tag: "Core Engineering",
    description:
      "Modern, fast, and responsive websites built with the latest technologies. From business websites to complex web applications, we create digital experiences that convert visitors into customers.",
    features: [
      "Custom Next.js & React Apps",
      "High Conversion UI/UX Architecture",
      "SEO & Core Web Vitals Optimization",
      "Enterprise E-Commerce Platforms",
    ],
  },
  {
    id: "mobile-dev",
    icon: IconDeviceMobile,
    title: "Mobile App Development",
    tag: "Native & Cross-Platform",
    description:
      "Native and cross-platform mobile apps for iOS and Android. We build intuitive, high-performance apps that users love and businesses rely on for growth.",
    features: [
      "Flutter & React Native Architecture",
      "Offline-First Data Sync",
      "Biometric Authentication & Security",
      "App Store & Google Play Launch",
    ],
  },
  {
    id: "ai-chatbots",
    icon: IconMessageChatbot,
    title: "AI Chatbots",
    tag: "24/7 Intelligence",
    description:
      "AI customer-support and lead-qualification chatbots that work 24/7, answer instantly, book appointments, and hand over to a human when needed.",
    features: [
      "LLM Integration with OpenAI & Anthropic",
      "Automated Appointment Scheduling",
      "CRM & WhatsApp Integrations",
      "Human Handoff Guardrails",
    ],
  },
  {
    id: "automation",
    icon: IconCpu,
    title: "Automation",
    tag: "Process Optimization",
    description:
      "AI workflow automation and business-process automation, with integrations that save time, cut costs, and remove repetitive work.",
    features: [
      "Multi-Tool Webhook & API Pipelines",
      "Automated Invoice & Document Extraction",
      "Lead Routing & Notification Systems",
      "Zero-Error Repetitive Work Elimination",
    ],
  },
  {
    id: "ai-calling",
    icon: IconPhoneCall,
    title: "AI Calling Agents / Voice Agents",
    tag: "Conversational Audio",
    description:
      "AI voice agents that handle phone calls, booking, support, and sales calls in a natural voice.",
    features: [
      "Human-Like Ultra-Low Latency Voice",
      "Inbound Support & Triage Handling",
      "Outbound Appointment & Sales Reminders",
      "Instant Call Transcription & Summary",
    ],
  },
  {
    id: "ai-automation",
    icon: IconRobot,
    title: "AI Automation",
    tag: "Enterprise ML",
    description:
      "Intelligent automation, chatbots, voice agents, workflows, and machine learning solutions that streamline operations.",
    features: [
      "End-to-End Autonomous Workflows",
      "Proprietary Business Data RAG Models",
      "Predictive Machine Learning Pipelines",
      "Unified AI Operational Dashboards",
    ],
  },
  {
    id: "digital-marketing",
    icon: IconChartBar,
    title: "Digital Marketing",
    tag: "Performance Growth",
    description:
      "Data-driven marketing strategies that grow your brand. From SEO to paid advertising, we help you reach the right audience and maximize your ROI. Google Ads, Meta Ads, TikTok Ads.",
    features: [
      "Google Ads & Performance Max Campaigns",
      "Meta Ads & TikTok Creative Strategy",
      "Full-Funnel Conversion Rate Optimization",
      "GA4 & Advanced Attribution Tracking",
    ],
  },
  {
    id: "data-analytics",
    icon: IconDatabase,
    title: "Data Analytics",
    tag: "Actionable Insights",
    description:
      "Turn business data into insights with dashboards, reporting, and AI-powered analytics.",
    features: [
      "Custom Looker & Power BI Dashboards",
      "Automated Multi-Channel ETL Pipelines",
      "Revenue & Cohort Retention Analytics",
      "Predictive Customer Lifetime Modeling",
    ],
  },
  {
    id: "cloud-solutions",
    icon: IconCloudComputing,
    title: "Cloud Solutions",
    tag: "Scalable Infrastructure",
    description:
      "Secure cloud infrastructure, API integrations, deployment, and scalable backend systems.",
    features: [
      "AWS & GCP Serverless Architecture",
      "High-Availability Container Deployment",
      "Enterprise Microservices & REST/GraphQL",
      "Security Audits & 99.99% SLA Uptime",
    ],
  },
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white">
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.15),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Our Expertise
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Intelligent Services Built for Scale
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We deliver end-to-end technology and growth solutions designed to accelerate revenue, streamline operations, and elevate customer experience.
          </p>
        </div>

        {/* 9 Services Grid (3x3 on desktop) */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071233]/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#071233]/70 hover:shadow-[0_12px_36px_rgba(37,99,235,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <Icon className="size-6" stroke={1.8} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-200"
                  >
                    <span>Learn More</span>
                    <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-[#071233] p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <IconX className="size-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-400 border border-cyan-500/30">
                <selectedService.icon className="size-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                  {selectedService.tag}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {selectedService.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Deliverables &amp; Capabilities
              </h4>
              <ul className="mt-3 space-y-2.5">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                    <IconCheck className="size-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                Inquire About This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
