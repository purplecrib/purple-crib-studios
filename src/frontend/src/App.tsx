import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { AboutSection } from "@/pages/sections/AboutSection";
import { ContactSection } from "@/pages/sections/ContactSection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { PortfolioSection } from "@/pages/sections/PortfolioSection";
import { ServicesSection } from "@/pages/sections/ServicesSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}
