import { SiteFooter } from "@/components/brand/SiteFooter";
import { SiteHeader } from "@/components/brand/SiteHeader";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ProjectDirectorySection } from "@/components/home/ProjectDirectorySection";
import { HeroBanner } from "@/components/home/HeroBanner";
import { MinimalMetricRail } from "@/components/home/MinimalMetricRail";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { pillars, aboutParagraphs } from "@/lib/home-content";
import { IconBox, pillarIcons } from "@/lib/icons";
import { pillarMetrics } from "@/lib/metrics";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { CountUp } from "@/components/metrics/CountUp";

export default function MinimalHomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      <HeroBanner
        variant="minimal"
        subtitle="Building for Better Life"
        title="Saudi EPC excellence across energy & industrial sectors"
        description={aboutParagraphs[0]}
        primaryCta={{ label: "Our Story", href: "#about" }}
      />

      <MinimalMetricRail />
      <StatsSection variant="inline" theme="minimal" />
      <AboutSection layout="editorial" />
      <ServicesSection layout="list" showMetrics />

      <SectionShell className="border-t border-masco-navy/10 bg-white">
        <SectionHeader
          eyebrow="Our Values"
          title="What defines us"
          description="The principles driving MASCO Energy's commitment to quality, safety, Vision 2030, and digital innovation."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.title];
            const metric = pillarMetrics[pillar.title];
            return (
              <AnimateIn key={pillar.title} delay={index * 0.08}>
                <article className="masco-card flex gap-4 p-6">
                  {Icon && <IconBox icon={Icon} variant="light" size="lg" />}
                  <div>
                    <h3 className="text-lg font-bold text-masco-navy">
                      {pillar.title}
                    </h3>
                    {metric && (
                      <div className="mt-2">
                        <CountUp
                          metric={{
                            id: pillar.title,
                            value: metric.value,
                            suffix: metric.suffix,
                            prefix: metric.prefix,
                            decimals: metric.decimals,
                            label: metric.caption,
                          }}
                          className="text-lg font-bold text-masco-blue"
                        />
                        <p className="text-xs text-masco-black/50">
                          {metric.caption}
                        </p>
                      </div>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-masco-black/65">
                      {pillar.text}
                    </p>
                  </div>
                </article>
              </AnimateIn>
            );
          })}
        </div>
      </SectionShell>

      <ProjectDirectorySection />
      <ProcessSection />
      <TestimonialsSection layout="quote" />
      <FAQSection variant="minimal" />
      <SiteFooter />
    </div>
  );
}
