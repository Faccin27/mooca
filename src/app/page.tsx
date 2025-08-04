import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import ComparisonSection from "@/components/featured/comparison-section";
import InteractiveGallery from "@/components/gallery/interactive-gallery";
import HeroCarousel from "@/components/hero-carousel";
import ModernHeader from "@/components/modern-header";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";
import FloatingWhatsappIcon from "@/components/ui/IconWhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ModernHeader />
      <main className="flex-grow">
        <HeroCarousel />
        <ProcessSection />
        <InteractiveGallery />
        <TestimonialsSection />
        <ComparisonSection />
        <FAQSection />
        <ContactSection />
        <FloatingWhatsappIcon />
      </main>
    </div>
  );
}
