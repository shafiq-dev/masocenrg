"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/components/metrics/useReducedMotion";

type ProgressRingProps = {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  label?: string;
};

export function ProgressRing({
  value,
  size = 56,
  strokeWidth = 5,
  className = "",
  label,
}: ProgressRingProps) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(reduced ? value : 0);
  const ref = useRef<SVGSVGElement>(null);
  const hasAnimated = useRef(false);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (reduced) {
      setProgress(value);
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
          setProgress(value * (1 - Math.pow(1 - t, 3)));
          if (t < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduced]);

  return (
    <div className={`relative inline-flex ${className}`}>
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        role="img"
        aria-label={label ?? `${Math.round(progress)}%`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgb(19 72 128 / 0.1)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1691cf"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-masco-blue">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
