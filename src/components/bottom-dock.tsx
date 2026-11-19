"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Briefcase, Info, Folder, Star, Mail } from "lucide-react";

export const DOCK_ITEMS = [
  {
    title: "Home",
    icon: <Home className="h-full w-full" strokeWidth={1.8} />,
    href: "#home",
  },
  {
    title: "Services",
    icon: <Briefcase className="h-full w-full" strokeWidth={1.8} />,
    href: "#services",
  },
  {
    title: "About",
    icon: <Info className="h-full w-full" strokeWidth={1.8} />,
    href: "#about",
  },
  {
    title: "Portfolio",
    icon: <Folder className="h-full w-full" strokeWidth={1.8} />,
    href: "#portfolio",
  },
  {
    title: "Why Us",
    icon: <Star className="h-full w-full" strokeWidth={1.8} />,
    href: "#why-us",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full" strokeWidth={1.8} />,
    href: "#contact",
  },
];

export function BottomDock() {
  return (
    <aside
      aria-label="Navigation dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
    >
      <FloatingDock items={DOCK_ITEMS} />
    </aside>
  );
}

export default BottomDock;
