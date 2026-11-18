"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope. Most websites take 2-4 weeks, while larger AI or e-commerce projects can take 6-12 weeks.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We provide maintenance, updates, security monitoring, and ongoing technical support after deployment.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can redesign, optimize, and modernize your current website while preserving your existing content if required.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with Next.js, React, Node.js, Python, AI technologies, cloud platforms, and modern marketing tools to build scalable digital products.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Got questions before getting started? Here are clear answers to the most common inquiries.
          </p>
        </div>

        {/* Accordion List (Only one open at a time) */}
        <div className="mt-12 sm:mt-16 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#071233]/40 backdrop-blur-sm transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:text-cyan-300"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-500/20 text-cyan-400" : "text-slate-400"
                    }`}
                  >
                    <IconChevronDown className="size-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-slate-300 border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
