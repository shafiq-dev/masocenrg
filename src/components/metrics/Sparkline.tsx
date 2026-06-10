"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/metrics/useReducedMotion";

type SparklineProps = {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
  stroke?: string;
  fill?: string;
};

export function Sparkline({
  data,
  width = 200,
  height = 60,
  className = "",
  stroke = "#1691cf",
  fill = "url(#sparkGradient)",
}: SparklineProps) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(reduced ? 1 : 0);
  const ref = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 4;

  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - padding * 2);
    const y =
      height - padding - ((value - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;
  const pathLength = width * 2;

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
          const t = Math.min((now - start) / 1400, 1);
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

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label={`Trend from ${data[0]} to ${data[data.length - 1]}`}
    >
      <defs>
        <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1691cf" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1691cf" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={areaPath}
        fill={fill}
        opacity={progress}
      />
      <path
        d={linePath}
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        strokeDashoffset={pathLength * (1 - progress)}
      />
    </svg>
  );
}
