import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
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
      className={`${inter.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#050914] text-white font-sans antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
