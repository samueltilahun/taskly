import BenefitsSection from "./components/BenefitsSection";
import FeaturesSection from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <div> 
      <HeroSection /> 
      <FeaturesSection />
      <BenefitsSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
