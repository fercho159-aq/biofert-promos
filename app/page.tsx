import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PromotionsSection from "@/components/PromotionsSection";
import CalculatorSection from "@/components/CalculatorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PromotionsSection />
        <CalculatorSection />
      </main>
      <Footer />
    </>
  );
}
