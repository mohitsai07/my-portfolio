import Navigation from "@/components/sections/navigation";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";
import SidebarSocial from "@/components/sections/sidebar-social";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Navigation />
      <SidebarSocial />
      <main className="relative">
        <div id="top" />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}