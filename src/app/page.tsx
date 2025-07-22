import HeroCarousel from "@/components/hero-carousel";
import ModernHeader from "@/components/modern-header";
import ProcessSection from "@/components/process-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ModernHeader />
      <main className="flex-grow">
        <HeroCarousel />
        <ProcessSection />
      </main>
    </div>
  );
}
