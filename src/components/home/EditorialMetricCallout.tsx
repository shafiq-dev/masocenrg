import { CountUp } from "@/components/metrics/CountUp";
import { TrendBadge } from "@/components/metrics/TrendBadge";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { editorialBandMetrics } from "@/lib/metrics";

type EditorialMetricCalloutProps = {
  bandTitle: string;
  variant?: "gradient" | "light";
};

export function EditorialMetricCallout({
  bandTitle,
  variant = "light",
}: EditorialMetricCalloutProps) {
  const metric = editorialBandMetrics[bandTitle];
  if (!metric) return null;

  const isGradient = variant === "gradient";

  return (
    <AnimateIn delay={0.15} className="mt-8">
      <div
        className={`inline-flex flex-col gap-2 rounded-[20px] px-6 py-4 ${
          isGradient
            ? "bg-white/10 backdrop-blur-sm"
            : "border border-masco-navy/10 bg-masco-navy/[0.03]"
        }`}
      >
        <CountUp
          metric={metric}
          className={`text-3xl font-bold md:text-4xl ${
            isGradient ? "text-white" : "text-masco-blue"
          }`}
        />
        <p
          className={`text-xs uppercase tracking-[0.15em] ${
            isGradient ? "text-white/75" : "text-masco-black/50"
          }`}
        >
          {metric.label}
        </p>
        {metric.trend && (
          <TrendBadge trend={metric.trend} variant={isGradient ? "dark" : "light"} />
        )}
      </div>
    </AnimateIn>
  );
}
