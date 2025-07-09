import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import OurServices from "@/components/OurServices";
import WorkProcessSection from "@/components/WorkProcessSection";
import ContactFormSection from "@/components/ContactFormSection";
import OurProjects from "@/components/OurProjects";
import AboutUsSection from "@/components/AboutUsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <Header />
      <ImageSlider className="w-full" />
      <AboutUsSection />
      <OurServices />
      <WorkProcessSection />
      <ContactFormSection />
      <OurProjects />
      <FAQSection />
      <Footer />
    </main>
  );
}

