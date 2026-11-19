"use client";

export function TechnologiesSection() {
  const groups = [
    {
      category: "Frontend",
      stack: "React, Next.js, Vue.js, TypeScript, Tailwind CSS",
    },
    {
      category: "Backend",
      stack: "Node.js, Python, Laravel, PostgreSQL, MongoDB",
    },
    {
      category: "Mobile",
      stack: "Flutter, React Native, Swift, Kotlin",
    },
    {
      category: "AI & ML",
      stack: "OpenAI, TensorFlow, LangChain, Python, Hugging Face",
    },
    {
      category: "Cloud & DevOps",
      stack: "AWS, Google Cloud, Docker, Vercel, Firebase",
    },
    {
      category: "Marketing",
      stack: "Google Ads, Meta Ads, GA4, SEO, HubSpot",
    },
  ];

  return (
    <section id="technologies" className="w-full bg-[#050914] py-16 sm:py-20 lg:py-28 text-white border-t border-[#1E293B]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 sm:pb-12 border-b border-[#1E293B] gap-4 sm:gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              06 — INFRASTRUCTURE
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white break-words">
              Technologies &amp; Frameworks
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#94A3B8] break-words">
            Engineered on reliable enterprise standards, battle-tested modern libraries, and high-velocity development toolchains.
          </p>
        </div>

        {/* Plain text groups separated by hairlines */}
        <div className="divide-y divide-[#1E293B]">
          {groups.map((group) => (
            <div
              key={group.category}
              className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-6"
            >
              <div className="sm:w-1/3">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-white break-words">
                  {group.category}
                </span>
              </div>
              <div className="sm:w-2/3">
                <p className="text-xs sm:text-sm lg:text-base text-[#94A3B8] break-words">
                  {group.stack}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesSection;
