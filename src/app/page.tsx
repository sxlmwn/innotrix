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
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-[#FAF8F4] text-[#111111]">
      {/* 1 & 2: Clean Editorial Nav & Left-Aligned Hero */}
      <HeroSection />

      {/* 3: Parallax Image Gallery (Skiper 30, restyled for warm ivory theme) */}
      <Skiper30 />

      {/* 4: Services (9 Separate Numbered Editorial Rows) */}
      <ServicesSection />

      {/* 5: About Us (Two-Column Editorial) */}
      <AboutSection />

      {/* 6: Selected Case Studies (Large Editorial, Alternating Image Left/Right with Working Modals) */}
      <PortfolioSection />

      {/* 7: Methodology (01 Discover -> 02 Design -> 03 Develop -> 04 Deliver) */}
      <ProcessSection />

      {/* 8: The Innotrix Standard (6 Points, 2-Column Editorial List) */}
      <WhyUsSection />

      {/* 9: Infrastructure & Technologies (Grouped Plain Text) */}
      <TechnologiesSection />

      {/* 10: Testimonials (The Only Dark Ink Section) */}
      <TestimonialsSection />

      {/* 11: FAQ (Accordion with Hairline Rows) */}
      <FAQSection />

      {/* 12: Initiate Project (Two-Column Editorial Contact + White Box Form) */}
      <ContactSection />

      {/* 13: Footer (Ink Black) */}
      <Footer />

      {/* Quick WhatsApp Contact CTA */}
      <FloatingWhatsApp />
    </main>
  );
}
