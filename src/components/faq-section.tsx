"use client";

import { useState } from "react";

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

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full bg-[#FFFFFF] py-24 md:py-32 text-[#0B1E3A] border-t border-[#DBEAFE]">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-left mb-14">
          <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#64748B]">
            08 — QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-serif mt-4 text-4xl sm:text-5xl font-normal tracking-tight text-[#0B1E3A]">
            Frequently Asked <span className="italic font-normal">Questions</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-[1.7] text-[#334155]">
            Answers to common questions regarding timelines, post-deployment support, and technical scope.
          </p>
        </div>

        {/* Accordion: hairline rows, question in sans semibold, answer in muted slate, plus/minus on the right */}
        <div className="border-t border-[#DBEAFE] divide-y divide-[#DBEAFE]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-8">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#0B1E3A] group-hover:text-[#1D4ED8] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className="text-xl font-light text-[#64748B] flex-shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 text-sm md:text-[15px] leading-[1.7] text-[#334155] max-w-3xl pr-6">
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
