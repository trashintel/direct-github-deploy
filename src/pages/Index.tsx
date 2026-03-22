import RojoNav from "@/components/RojoNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import RojoFooter from "@/components/RojoFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <RojoNav />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ServicesSection />
      <ContactSection />
      <RojoFooter />
    </div>
  );
};

export default Index;
