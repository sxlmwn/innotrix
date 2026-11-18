"use client";

export function LogoMarquee() {
  const logos = [
    { name: "Bootstrap", font: "font-mono font-bold tracking-tight" },
    { name: "Stripe", font: "font-sans font-extrabold tracking-normal italic" },
    { name: "Google", font: "font-sans font-medium tracking-wide" },
    { name: "Algolia", font: "font-mono font-semibold tracking-wider" },
    { name: "PayPal", font: "font-sans font-bold tracking-tight italic" },
    { name: "Laravel", font: "font-serif font-bold tracking-normal" },
  ];

  return (
    <section className="relative w-full border-y border-white/10 bg-[#050914] py-8 sm:py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-6">
          Powering World-Class Infrastructure &amp; Tooling
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`text-lg sm:text-xl md:text-2xl text-slate-400/80 transition-colors duration-300 hover:text-white cursor-default select-none ${logo.font}`}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoMarquee;
