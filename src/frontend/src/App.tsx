import { Footer } from "@/components/Footer";
import { Layout } from "@/components/Layout";
import { AboutSection } from "@/pages/sections/AboutSection";
import { BentoSection } from "@/pages/sections/BentoSection";
import { BlockSection } from "@/pages/sections/BlockSection";
import { ContactSection } from "@/pages/sections/ContactSection";
import { HeroSection } from "@/pages/sections/HeroSection";
import { PortfolioSection } from "@/pages/sections/PortfolioSection";
import { ServicesSection } from "@/pages/sections/ServicesSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <BlockSection />
      <ServicesSection />
      <BentoSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}
