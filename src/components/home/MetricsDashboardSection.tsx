import { AnimateIn } from "@/components/metrics/AnimateIn";
import { BarChart } from "@/components/metrics/BarChart";
import { DonutChart } from "@/components/metrics/DonutChart";
import { Sparkline } from "@/components/metrics/Sparkline";
import { MetricCard } from "@/components/metrics/MetricCard";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import {
  deliveryModelSplit,
  getKpisByIds,
  safetyTrend,
  sectorPortfolio,
} from "@/lib/metrics";

type MetricsDashboardSectionProps = {
  compact?: boolean;
};

export function MetricsDashboardSection({
  compact = false,
}: MetricsDashboardSectionProps) {
  const compactKpis = getKpisByIds(["delivery", "partners"]);

  if (compact) {
    return (
      <SectionShell className="border-t border-masco-navy/10 masco-surface-tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <AnimateIn>
            <SectionHeader
              eyebrow="Performance"
              title="Growth & Safety Trajectory"
              description="Five-year project growth and cumulative safe man-hours across the portfolio."
            />
            <div className="mt-8 rounded-[20px] border border-masco-navy/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
                Safety trend (M man-hours)
              </p>
              <Sparkline data={safetyTrend} width={280} height={72} className="mt-4 w-full" />
            </div>
          </AnimateIn>
          <div className="grid gap-5 sm:grid-cols-2">
            {compactKpis.map((metric, index) => (
              <MetricCard key={metric.id} metric={metric} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell className="border-t border-masco-navy/10 bg-white">
      <SectionHeader
        eyebrow="Performance Dashboard"
        title="Portfolio at a Glance"
        description="Delivery model distribution and sector portfolio mix across MASCO Energy's active programmes in the Kingdom."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <AnimateIn>
          <div className="masco-card flex h-full flex-col items-center p-8 md:p-10">
            <h3 className="text-lg font-bold text-masco-navy">
              Delivery Models
            </h3>
            <p className="mt-2 text-center text-sm text-masco-black/60">
              EPC, EPCM, and hybrid programme split
            </p>
            <div className="mt-8">
              <DonutChart
                data={deliveryModelSplit}
                centerValue="127"
                centerLabel="Active projects"
                size={200}
              />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {deliveryModelSplit.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs font-bold text-masco-navy">
                    {item.label} {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="masco-card h-full p-8 md:p-10">
            <h3 className="text-lg font-bold text-masco-navy">
              Sector Portfolio
            </h3>
            <p className="mt-2 text-sm text-masco-black/60">
              Share of active contract value by sector
            </p>
            <BarChart data={sectorPortfolio} className="mt-8" />
          </div>
        </AnimateIn>
      </div>
    </SectionShell>
  );
}
