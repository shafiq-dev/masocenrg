import { BarChart } from "@/components/metrics/BarChart";
import { DonutChart } from "@/components/metrics/DonutChart";
import { MetricCard } from "@/components/metrics/MetricCard";
import { Sparkline } from "@/components/metrics/Sparkline";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { statsByTheme } from "@/lib/home-content";
import {
  deliveryModelSplit,
  safetyTrend,
  yearlyProjectGrowth,
} from "@/lib/metrics";

export function SplitMetricsPanel() {
  const stats = statsByTheme.split;

  return (
    <section className="border-b border-masco-navy/10 bg-masco-navy/[0.04] px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-5">
            {stats.map((stat, index) => (
              <MetricCard
                key={stat.id}
                metric={stat.metric}
                delay={index * 0.06}
              />
            ))}
          </div>

          <AnimateIn delay={0.1} className="masco-card p-6 lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
              5-Year Project Growth
            </p>
            <BarChart
              data={yearlyProjectGrowth.map((p) => ({
                label: p.year,
                value: p.value,
                color: "#1691cf",
              }))}
              orientation="vertical"
              showPercent={false}
              className="mt-6"
            />
          </AnimateIn>

          <AnimateIn delay={0.15} className="masco-card flex flex-col items-center p-6 lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-masco-blue">
              Delivery Split
            </p>
            <DonutChart
              data={deliveryModelSplit}
              size={140}
              strokeWidth={18}
              className="mt-4"
            />
            <Sparkline
              data={safetyTrend}
              width={160}
              height={48}
              className="mt-4"
            />
            <p className="mt-2 text-[10px] text-masco-black/50">
              Safety man-hours trend
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
