import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import SocialLinks from "@/components/sections/social-links";
import TechCarousel from "@/components/sections/tech-carousel";
import StatsSection from "@/components/sections/stats-section";
import ExperienceSection from "@/components/sections/experience-section";
import ServicesSection from "@/components/sections/services-section";
import DesignShowcase from "@/components/sections/design-showcase";
import SidebarSocial from "@/components/sections/sidebar-social";
import Footer from "@/components/sections/footer";
import ContactSection from "@/components/sections/contact-section";
import FAQSection from "@/components/sections/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Navigation />
      <SidebarSocial />
      
      <main className="relative">
        <div id="top">
          <HeroSection />
        </div>
        
        <SocialLinks />
        
        <div className="py-8">
          <TechCarousel />
        </div>
        
        <StatsSection />
        
        <ExperienceSection />
        
        <ServicesSection />
        
        <DesignShowcase />

        <ContactSection />
        
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
}