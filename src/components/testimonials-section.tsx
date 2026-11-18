"use client";

import { useState } from "react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Innotrix transformed our online presence completely. Our website traffic increased by 180% and online orders grew by 65% within just 3 months. The team is professional, creative, and always available.",
      author: "Ahmed Al Mansoori",
      role: "CEO, TechVision UAE",
    },
    {
      quote:
        "The AI automation solution saved us countless hours every week. Customer response time dropped from hours to seconds, and our team can now focus on growing the business instead of repetitive tasks.",
      author: "Sarah Johnson",
      role: "Marketing Director, FashionHub",
    },
    {
      quote:
        "Their Google Ads optimization increased our ROI by 320% in just two months. The team understands both technology and marketing — a rare combination that delivers real results.",
      author: "Omar Khalid",
      role: "Founder, FinTech Pro",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="w-full bg-[#0E0E0E] py-24 md:py-36 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6B6B6B]">
              07 — TESTIMONIALS
            </span>
            <h2 className="font-serif mt-4 text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white">
              Client <span className="italic font-normal">Perspectives</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all ${
                  currentIndex === idx ? "w-8 bg-white" : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Featured Testimonial: White serif quote, large, client name + role in small muted text below, 5 stars in small gold text (No cards) */}
        <div className="py-16 md:py-24 max-w-4xl">
          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-amber-400 text-sm tracking-widest mb-6 select-none">
            ★★★★★
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-[1.3] text-white">
            &ldquo;{testimonials[currentIndex].quote}&rdquo;
          </blockquote>

          {/* Author Details */}
          <div className="mt-8">
            <div className="text-sm md:text-base font-semibold text-white">
              {testimonials[currentIndex].author}
            </div>
            <div className="text-xs md:text-sm text-[#888888] mt-0.5">
              {testimonials[currentIndex].role}
            </div>
          </div>
        </div>

        {/* Footer overview of all 3 clients */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {testimonials.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`text-left transition-opacity ${
                currentIndex === i ? "opacity-100" : "opacity-40 hover:opacity-75"
              }`}
            >
              <div className="text-xs font-semibold text-white">{t.author}</div>
              <div className="text-[11px] text-[#888888] mt-0.5">{t.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
