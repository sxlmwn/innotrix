"use client";

export function TechnologiesSection() {
  const groups = [
    {
      category: "Frontend",
      stack: "React · Next.js · Vue.js · TypeScript · Tailwind CSS",
    },
    {
      category: "Backend",
      stack: "Node.js · Python · Laravel · PostgreSQL · MongoDB",
    },
    {
      category: "Mobile",
      stack: "Flutter · React Native · Swift · Kotlin",
    },
    {
      category: "AI & ML",
      stack: "OpenAI · TensorFlow · LangChain · Python · Hugging Face",
    },
    {
      category: "Cloud & DevOps",
      stack: "AWS · Google Cloud · Docker · Vercel · Firebase",
    },
    {
      category: "Marketing",
      stack: "Google Ads · Meta Ads · GA4 · SEO · HubSpot",
    },
  ];

  return (
    <section id="technologies" className="w-full bg-[#FAF8F4] py-24 md:py-32 text-[#111111] border-t border-[#E5E0D8]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E5E0D8] gap-6">
          <div>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#6B6B6B]">
              06 — INFRASTRUCTURE
            </span>
            <h2 className="font-serif mt-4 text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111111]">
              Technologies &amp; <span className="italic font-normal">Frameworks</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-[1.7] text-[#6B6B6B]">
            Engineered on reliable enterprise standards, battle-tested modern libraries, and high-velocity development toolchains.
          </p>
        </div>

        {/* Plain text groups separated by hairlines (No badges, no pills) */}
        <div className="divide-y divide-[#E5E0D8]">
          {groups.map((group) => (
            <div
              key={group.category}
              className="py-7 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8"
            >
              <div className="md:w-1/3">
                <span className="font-serif text-xl sm:text-2xl font-normal text-[#111111]">
                  {group.category}
                </span>
              </div>
              <div className="md:w-2/3">
                <p className="text-sm md:text-base text-[#6B6B6B] tracking-wide">
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
