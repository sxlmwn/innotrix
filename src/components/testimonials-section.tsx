"use client";

import { IconStarFilled, IconQuote } from "@tabler/icons-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Al Mansoori",
      role: "CEO, TechVision UAE",
      quote:
        "Innotrix transformed our online presence completely. Our website traffic increased by 180% and online orders grew by 65% within just 3 months. The team is professional, creative, and always available.",
      initials: "AM",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, FashionHub",
      quote:
        "The AI automation solution saved us countless hours every week. Customer response time dropped from hours to seconds, and our team can now focus on growing the business instead of repetitive tasks.",
      initials: "SJ",
    },
    {
      name: "Omar Khalid",
      role: "Founder, FinTech Pro",
      quote:
        "Their Google Ads optimization increased our ROI by 320% in just two months. The team understands both technology and marketing — a rare combination that delivers real results.",
      initials: "OK",
    },
  ];

  return (
    <section id="testimonials" className="relative w-full bg-[#050914] py-20 sm:py-28 text-white border-t border-white/5">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            TESTIMONIALS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Trusted by Global Leaders &amp; Fast-Growing Brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Read what founders and enterprise executives say about partnering with Innotrix.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#071233]/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#071233]/70 hover:shadow-[0_12px_36px_rgba(37,99,235,0.2)]"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <IconStarFilled key={i} className="size-4" />
                  ))}
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-slate-200 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-md">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-cyan-300">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
