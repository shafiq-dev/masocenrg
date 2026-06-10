"use client";

import { AnimateIn } from "@/components/metrics/AnimateIn";
import type { ChartSegment } from "@/lib/metrics";

type BarChartProps = {
  data: ChartSegment[];
  orientation?: "horizontal" | "vertical";
  className?: string;
  barClassName?: string;
  labelClassName?: string;
  variant?: "default" | "gradient" | "white";
  showPercent?: boolean;
};

export function BarChart({
  data,
  orientation = "horizontal",
  className = "",
  barClassName = "",
  labelClassName = "",
  variant = "default",
  showPercent = true,
}: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value));
  const ariaLabel = data.map((d) => `${d.label}: ${d.value}%`).join(", ");

  const barBg =
    variant === "white"
      ? "bg-white/20"
      : variant === "gradient"
        ? "bg-white/15"
        : "bg-masco-navy/8";

  const barFill = (color?: string) =>
    color ? { backgroundColor: color } : undefined;

  if (orientation === "vertical") {
    return (
      <div
        className={`flex items-end justify-between gap-3 ${className}`}
        role="img"
        aria-label={ariaLabel}
      >
        {data.map((item, index) => (
          <AnimateIn key={item.label} delay={index * 0.08} className="flex flex-1 flex-col items-center gap-2">
            <div className={`relative h-40 w-full overflow-hidden rounded-[20px] ${barBg}`}>
              <div
                className={`absolute inset-x-0 bottom-0 rounded-[20px] transition-all duration-1000 ease-out ${!item.color ? "masco-gradient" : ""} ${barClassName}`}
                style={{
                  height: `${(item.value / max) * 100}%`,
                  ...barFill(item.color),
                }}
              />
            </div>
            <span className={`text-center text-xs font-bold text-masco-navy ${labelClassName}`}>
              {item.value}
              {showPercent ? "%" : ""}
            </span>
            <span className={`text-center text-[10px] text-masco-black/50 ${labelClassName}`}>
              {item.label}
            </span>
          </AnimateIn>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`} role="img" aria-label={ariaLabel}>
      {data.map((item, index) => (
        <AnimateIn key={item.label} delay={index * 0.08}>
          <div className="flex items-center gap-4">
            <span className={`w-28 shrink-0 text-sm font-bold text-masco-navy ${labelClassName}`}>
              {item.label}
            </span>
            <div className={`relative h-3 flex-1 overflow-hidden rounded-full ${barBg}`}>
              <div
                className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out ${!item.color ? "masco-gradient" : ""} ${barClassName}`}
                style={{
                  width: `${(item.value / max) * 100}%`,
                  ...barFill(item.color),
                }}
              />
            </div>
            <span className={`w-10 shrink-0 text-right text-sm font-bold text-masco-blue ${labelClassName}`}>
              {item.value}
              {showPercent ? "%" : ""}
            </span>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
