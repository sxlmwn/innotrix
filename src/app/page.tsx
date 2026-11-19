import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import Skiper30 from "@/components/parallax-gallery";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import PortfolioSection from "@/components/portfolio-section";
import ProcessSection from "@/components/process-section";
import WhyUsSection from "@/components/why-us-section";
import TechnologiesSection from "@/components/technologies-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BottomDock from "@/components/bottom-dock";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-[#050914] text-white">
      {/* Top Fixed Header */}
      <SiteHeader />

      {/* 1. Hero Section (v5, untouched) */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. Parallax Image Gallery */}
      <div id="gallery">
        <Skiper30 />
      </div>

      {/* 3. Services (9 Separate Numbered Rows) */}
      <ServicesSection />

      {/* 4. About Us (2 Lines, Checklist, Stats) */}
      <AboutSection />

      {/* 5. Portfolio / Selected Case Studies (4 Projects, Working Modals) */}
      <PortfolioSection />

      {/* 6. Process (4 Steps, One Line Each) */}
      <ProcessSection />

      {/* 7. Why Us (6 Points, One Line Each) */}
      <WhyUsSection />

      {/* 8. Technologies (Plain Text Groups) */}
      <TechnologiesSection />

      {/* 9. Testimonials (3 Client Perspectives) */}
      <TestimonialsSection />

      {/* 10. FAQ (4 Accordion Items) */}
      <FAQSection />

      {/* 11. Contact / Initiate Project */}
      <ContactSection />

      {/* 12. Footer */}
      <Footer />

      {/* Minimal Bottom Floating Dock */}
      <BottomDock />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </main>
  );
}
