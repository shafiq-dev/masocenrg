import Image from "next/image";
import { services } from "@/lib/home-content";
import { images, type ServiceName } from "@/lib/images";
import { IconBox, serviceIcons } from "@/lib/icons";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

type ServicesSectionProps = {
  layout?: "grid" | "list" | "cards";
};

export function ServicesSection({ layout = "grid" }: ServicesSectionProps) {
  if (layout === "list") {
    return (
      <SectionShell
        id="services"
        className="border-t border-masco-navy/10 bg-white"
      >
        <SectionHeader
          eyebrow="Services"
          title="Integrated sector capabilities"
          description="End-to-end solutions across energy and industrial markets."
        />
        <div className="mt-12 divide-y divide-masco-navy/10">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.name];
            return (
              <article
                key={service.name}
                className="grid gap-6 py-8 md:grid-cols-[auto_1fr_1fr] md:items-center"
              >
                <div className="flex items-center gap-4">
                  {Icon && <IconBox icon={Icon} variant="light" />}
                  <span className="text-sm font-bold text-masco-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-masco-navy">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-masco-black/60 md:text-right">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </SectionShell>
    );
  }

  const showCardImages = layout === "cards";

  return (
    <SectionShell id="services" className="bg-white">
      <SectionHeader
        eyebrow="Services"
        title="Our Core Capabilities"
        description="Comprehensive EPC, EPCM, and hybrid delivery across energy, oil & gas, petrochemical, and industrial infrastructure in the Kingdom."
      />

      <div
        className={`mt-14 grid gap-6 ${
          layout === "cards"
            ? "sm:grid-cols-2 xl:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {services.map((service) => {
          const Icon = serviceIcons[service.name];
          const imageSrc =
              images.services[service.name as ServiceName] ??
              images.services["EPC Contracting"];

          return (
            <article key={service.name} className="masco-card group overflow-hidden">
              {showCardImages && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-masco-navy/50 to-transparent" />
                </div>
              )}
              <div className="p-6 md:p-8">
                {Icon && (
                  <IconBox
                    icon={Icon}
                    variant={showCardImages ? "blue" : "navy"}
                  />
                )}
                <h3 className="mt-5 text-xl font-bold text-masco-navy">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-masco-black/60">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-col gap-3 border-t border-masco-navy/10 pt-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
                    {service.metric}
                  </p>
                  <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-masco-navy to-masco-blue" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
