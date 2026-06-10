import { AnimateIn } from "@/components/metrics/AnimateIn";
import { BarChart } from "@/components/metrics/BarChart";
import { SectionHeader } from "@/components/home/SectionHeader";
import { SectionShell } from "@/components/home/SectionShell";
import { yearlyProjectGrowth } from "@/lib/metrics";

export function GrowthTimelineSection() {
  const chartData = yearlyProjectGrowth.map((point) => ({
    label: point.year,
    value: point.value,
    color: "#134880",
  }));

  return (
    <SectionShell className="border-t border-masco-navy/10 masco-surface-tint">
      <SectionHeader
        eyebrow="Growth Timeline"
        title="Five Years of Expansion"
        description="Project portfolio growth from 2021 to 2025, reflecting MASCO Energy's accelerating presence across the Kingdom."
      />

      <AnimateIn>
        <div className="masco-card mt-14 p-8 md:p-12">
          <BarChart
            data={chartData}
            orientation="vertical"
            showPercent={false}
            className="mx-auto max-w-3xl"
          />
          <p className="mt-8 text-center text-sm text-masco-black/50">
            Active projects in delivery · 2021–2025
          </p>
        </div>
      </AnimateIn>
    </SectionShell>
  );
}
