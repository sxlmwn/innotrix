"use client";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Innotrix transformed our online presence. Traffic up 180%, orders up 65% in 3 months.",
      author: "Ahmed Al Mansoori",
      role: "CEO, TechVision UAE",
    },
    {
      quote:
        "AI automation saved us countless hours. Response time dropped from hours to seconds.",
      author: "Sarah Johnson",
      role: "Marketing Director, FashionHub",
    },
    {
      quote:
        "Google Ads ROI up 320% in two months. Real results.",
      author: "Omar Khalid",
      role: "Founder, FinTech Pro",
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-[#050914] py-24 md:py-32 text-white border-t border-[#1E293B]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="pb-12 border-b border-[#1E293B]">
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
            07 — TESTIMONIALS
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Client Perspectives
          </h2>
        </div>

        {/* 3 Testimonials in a 3-column grid with hairlines */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${
                idx !== 0 ? "md:border-l border-[#1E293B] md:pl-8" : ""
              } ${idx !== 0 ? "pt-6 md:pt-0 border-t md:border-t-0 border-[#1E293B]" : ""}`}
            >
              <blockquote className="text-base sm:text-lg leading-relaxed text-white">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-8 border-t border-[#1E293B] pt-4">
                <div className="text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs text-[#94A3B8] mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
