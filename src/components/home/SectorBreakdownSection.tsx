import { AnimateIn } from "@/components/metrics/AnimateIn";
import { BarChart } from "@/components/metrics/BarChart";
import { regionalFootprint } from "@/lib/metrics";
import { sectorPortfolio } from "@/lib/metrics";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";

export function SectorBreakdownSection() {
  return (
    <SectionShell className="border-t border-masco-navy/10 masco-surface-tint">
      <SectionHeader
        eyebrow="Market Intelligence"
        title="Sector & Regional Footprint"
        description="Portfolio distribution across energy sectors and geographic regions in the Kingdom."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <AnimateIn>
          <div className="masco-card p-8">
            <h3 className="text-lg font-bold text-masco-navy">
              Sector Breakdown
            </h3>
            <BarChart data={sectorPortfolio} className="mt-8" />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="masco-card p-8">
            <h3 className="text-lg font-bold text-masco-navy">
              Regional Footprint
            </h3>
            <BarChart data={regionalFootprint} className="mt-8" />
          </div>
        </AnimateIn>
      </div>
    </SectionShell>
  );
}
