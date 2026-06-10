"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/metrics/useReducedMotion";
import type { ChartSegment } from "@/lib/metrics";

type DonutChartProps = {
  data: ChartSegment[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
  className?: string;
};

export function DonutChart({
  data,
  size = 180,
  strokeWidth = 22,
  centerLabel,
  centerValue,
  className = "",
}: DonutChartProps) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(reduced ? 1 : 0);
  const ref = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = data.reduce((sum, d) => sum + d.value, 0);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const animate = (now: number) => {
          const t = Math.min((now - start) / 1200, 1);
          setProgress(1 - Math.pow(1 - t, 3));
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  let offset = 0;
  const segments = data.map((segment) => {
    const length = (segment.value / total) * circumference * progress;
    const dashOffset = -offset;
    offset += (segment.value / total) * circumference;
    return { ...segment, length, dashOffset };
  });

  const ariaLabel = data
    .map((d) => `${d.label}: ${d.value}%`)
    .join(", ");

  return (
    <div className={`relative inline-flex ${className}`}>
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={ariaLabel}
        className="-rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgb(19 72 128 / 0.08)"
          strokeWidth={strokeWidth}
        />
        {segments.map((segment) => (
          <circle
            key={segment.label}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={segment.color ?? "#134880"}
            strokeWidth={strokeWidth}
            strokeDasharray={`${segment.length} ${circumference}`}
            strokeDashoffset={segment.dashOffset}
            strokeLinecap="round"
          />
        ))}
      </svg>
      {(centerLabel || centerValue) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {centerValue && (
            <span className="text-2xl font-bold text-masco-navy">{centerValue}</span>
          )}
          {centerLabel && (
            <span className="mt-1 max-w-[80px] text-[10px] uppercase tracking-wide text-masco-black/50">
              {centerLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
