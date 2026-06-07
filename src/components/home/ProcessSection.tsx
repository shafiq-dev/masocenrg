import { SectionImage } from "@/components/home/SectionImage";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { processSteps } from "@/lib/home-content";
import { images } from "@/lib/images";
import { IconBox, processIcons } from "@/lib/icons";

export function ProcessSection() {
  return (
    <SectionShell className="border-t border-masco-navy/10 masco-grid-bg">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Our Process"
            title="How We Deliver Excellence"
            description="A structured approach ensuring consistent quality, transparent communication, and alignment with MASCO Energy corporate standards at every project stage."
          />
          <div className="mt-10 hidden lg:block">
            <SectionImage
              src={images.process}
              alt="Infrastructure and project delivery"
              aspect="video"
              overlay="gradient"
              className="shadow-lg"
            />
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-masco-blue via-masco-navy/20 to-transparent lg:block" />
          <div className="space-y-5">
            {processSteps.map((step) => {
              const Icon = processIcons[step.title];
              return (
                <article
                  key={step.step}
                  className="masco-card relative flex gap-5 p-6 lg:pl-14"
                >
                  <div className="absolute left-3 top-8 hidden h-4 w-4 rounded-full border-4 border-white bg-masco-blue lg:block" />
                  {Icon && (
                    <IconBox icon={Icon} variant="blue" size="lg" className="shrink-0" />
                  )}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-masco-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-masco-black/60">
                      {step.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
