"use client";

import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Websites 2–4 weeks, larger AI / e-commerce 6–12 weeks.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes, maintenance, updates and support after deployment.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes, redesign and modernise it, keeping your content if needed.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "Next.js, React, Node.js, Python, AI, cloud and modern marketing tools.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#050914] py-24 md:py-32 text-white border-t border-[#1E293B]">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-left mb-12">
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
            08 — QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion: hairline rows, only one open at a time */}
        <div className="border-t border-[#1E293B] divide-y divide-[#1E293B]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-7">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#2563eb] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className="text-xl font-mono text-[#94A3B8] flex-shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm leading-relaxed text-[#94A3B8] max-w-3xl pr-6">
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
