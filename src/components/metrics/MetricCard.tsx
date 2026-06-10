"use client";

import { CountUp } from "@/components/metrics/CountUp";
import { TrendBadge } from "@/components/metrics/TrendBadge";
import { AnimateIn } from "@/components/metrics/AnimateIn";
import { IconBox, kpiIcons } from "@/lib/icons";
import type { KpiMetric } from "@/lib/metrics";

type MetricCardProps = {
  metric: KpiMetric;
  variant?: "default" | "gradient" | "compact";
  delay?: number;
};

export function MetricCard({
  metric,
  variant = "default",
  delay = 0,
}: MetricCardProps) {
  const Icon = kpiIcons[metric.id];

  if (variant === "gradient") {
    return (
      <AnimateIn delay={delay} className="text-center">
        <div className="px-4 text-center md:px-8">
          {Icon && (
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-[20px] bg-white/12 backdrop-blur-sm">
              <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
            </div>
          )}
          <CountUp
            metric={metric}
            className="text-3xl font-bold text-white md:text-4xl"
          />
          <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-white/75">
            {metric.label}
          </p>
          {metric.trend && (
            <div className="mt-2 flex justify-center">
              <TrendBadge trend={metric.trend} variant="dark" />
            </div>
          )}
        </div>
      </AnimateIn>
    );
  }

  if (variant === "compact") {
    return (
      <AnimateIn delay={delay}>
        <div className="flex items-center gap-3 rounded-[20px] border border-masco-navy/10 px-4 py-3">
          {Icon && <IconBox icon={Icon} variant="light" size="sm" />}
          <div>
            <CountUp
              metric={metric}
              className="text-xl font-bold text-masco-blue md:text-2xl"
            />
            <p className="text-[11px] text-masco-black/50">{metric.label}</p>
          </div>
        </div>
      </AnimateIn>
    );
  }

  return (
    <AnimateIn delay={delay}>
      <article className="masco-card p-6 text-center md:p-8">
        {Icon && (
          <div className="mx-auto mb-4 flex justify-center">
            <IconBox icon={Icon} variant="light" />
          </div>
        )}
        <CountUp
          metric={metric}
          className="text-3xl font-bold text-masco-blue md:text-4xl"
        />
        <p className="mt-2 text-sm text-masco-black/60">{metric.label}</p>
        {metric.trend && (
          <div className="mt-3 flex justify-center">
            <TrendBadge trend={metric.trend} />
          </div>
        )}
      </article>
    </AnimateIn>
  );
}
