import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { aboutParagraphs, stats } from "@/lib/home-content";
import { IconBox, statIcons } from "@/lib/icons";

export default function SplitHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <HeroBanner
        variant="split"
        subtitle="Building for Better Life"
        title="Trusted Saudi EPC Partner — Al Khobar to the Kingdom"
        description={aboutParagraphs[2]}
        primaryCta={{ label: "About Us", href: "#about" }}
        secondaryCta={{ label: "Project Directory", href: "#projects" }}
      />

      <section className="border-b border-masco-navy/10 bg-masco-navy/[0.04] px-6 py-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = statIcons[stat.label];
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-[20px] bg-white p-6 shadow-sm"
              >
                {Icon && <IconBox icon={Icon} variant="light" />}
                <div>
                  <p className="text-2xl font-bold text-masco-blue">
                    {stat.value}
                  </p>
                  <p className="text-sm text-masco-black/60">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <AboutSection layout="split" />
      <ServicesSection layout="grid" />
      <ProjectDirectorySection />
      <PillarsSection />
      <ProcessSection />
      <TestimonialsSection layout="cards" />
      <FAQSection variant="classic" />
      <SiteFooter />
    </div>
  );
}
