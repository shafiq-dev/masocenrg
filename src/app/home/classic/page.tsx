import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { aboutParagraphs } from "@/lib/home-content";

export default function ClassicHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <HeroBanner
        variant="classic"
        subtitle="Building for Better Life"
        title="Trusted Saudi EPC Partner for Energy & Industry"
        description={aboutParagraphs[0]}
        primaryCta={{ label: "Our Services", href: "#services" }}
        secondaryCta={{ label: "Project Directory", href: "#projects" }}
      />

      <StatsSection variant="bar" />
      <AboutSection layout="centered" />
      <ServicesSection layout="cards" />
      <ProjectDirectorySection />
      <PillarsSection />
      <ProcessSection />
      <TestimonialsSection layout="cards" />
      <FAQSection variant="classic" />
      <SiteFooter />
    </div>
  );
}
