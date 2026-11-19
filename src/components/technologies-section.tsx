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
    <section id="technologies" className="w-full bg-[#050914] py-24 md:py-32 text-white border-t border-[#1E293B]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#1E293B] gap-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#2563eb]">
              06 — INFRASTRUCTURE
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Technologies &amp; Frameworks
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-relaxed text-[#94A3B8]">
            Engineered on reliable enterprise standards, battle-tested modern libraries, and high-velocity development toolchains.
          </p>
        </div>

        {/* Plain text groups separated by hairlines */}
        <div className="divide-y divide-[#1E293B]">
          {groups.map((group) => (
            <div
              key={group.category}
              className="py-6 md:py-7 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8"
            >
              <div className="md:w-1/3">
                <span className="text-lg sm:text-xl font-bold text-white">
                  {group.category}
                </span>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm md:text-base text-[#94A3B8]">
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
