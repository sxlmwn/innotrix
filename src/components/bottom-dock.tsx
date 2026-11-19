"use client";

const DOCK_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function BottomDock() {
  return (
    <aside
      aria-label="Quick navigation dock"
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <nav className="flex items-center gap-5 rounded-[2px] border border-[#1E293B] bg-[#050914] px-4 py-2 text-xs font-medium text-[#94A3B8] shadow-2xl">
        {DOCK_ITEMS.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group relative py-1 transition-colors hover:text-white"
          >
            <span>{item.name}</span>
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#2563eb] transition-all duration-200 group-hover:w-full" />
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default BottomDock;
