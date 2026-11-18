import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Innotrix | AI, Software Development & Digital Marketing",
  description:
    "We build intelligent digital solutions that drive growth. From AI-powered software to high-performance websites and results-driven marketing — Innotrix turns your ideas into digital success.",
  keywords: [
    "Innotrix",
    "AI Agency",
    "Software Development",
    "Digital Marketing",
    "Web Development",
    "Mobile Apps",
    "AI Chatbots",
    "Automation",
    "Dubai UAE",
  ],
  authors: [{ name: "Innotrix" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#050914] text-[#eaf2ff] selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
