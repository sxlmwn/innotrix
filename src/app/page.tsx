import HeroSection from "@/components/hero-section";
import Skiper30 from "@/components/parallax-gallery";
import LogoMarquee from "@/components/logo-marquee";
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
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-[#050914] text-white">
      {/* 1 & 2: Header / Nav & Hero */}
      <HeroSection />

      {/* 3: Parallax Image Gallery (Skiper 30) */}
      <Skiper30 />

      {/* Logo Strip (Placed after Parallax gallery as specified in Section 6) */}
      <LogoMarquee />

      {/* 4: Services (9 Separate Services) */}
      <ServicesSection />

      {/* 5: About Us */}
      <AboutSection />

      {/* 6: Portfolio / Case Studies (4 Projects with Working Modals) */}
      <PortfolioSection />

      {/* 7: Process (Discover -> Design -> Develop -> Deliver) */}
      <ProcessSection />

      {/* 8: Why Us (6 Points) */}
      <WhyUsSection />

      {/* 9: Technologies */}
      <TechnologiesSection />

      {/* 10: Testimonials (3 Reviews) */}
      <TestimonialsSection />

      {/* 11: FAQ (Accordion, Only One Open at a Time) */}
      <FAQSection />

      {/* 12: Contact / CTA + Working Form */}
      <ContactSection />

      {/* 13: Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </main>
  );
}
