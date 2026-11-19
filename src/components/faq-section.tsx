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
    <section id="faq" className="w-full bg-[#050914] py-16 sm:py-20 lg:py-28 text-white border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="text-left mb-8 sm:mb-12">
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
            08 — QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion: hairline rows */}
        <div className="border-t border-[#1E293B] divide-y divide-[#1E293B]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left group gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#2563eb] transition-colors break-words">
                    {faq.question}
                  </span>
                  <span className="text-xl font-mono text-[#94A3B8] flex-shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm sm:text-base leading-relaxed text-[#94A3B8] max-w-3xl break-words">
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
