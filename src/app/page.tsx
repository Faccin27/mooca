import ComparisonSection from "@/components/comparison-section";
import FAQSection from "@/components/faq-section";
import HeroCarousel from "@/components/hero-carousel";
import InteractiveGallery from "@/components/interactive-gallery";
import ModernHeader from "@/components/modern-header";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";

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
      </main>
    </div>
  );
}
