import { TrendingUp } from "lucide-react";

type TrendBadgeProps = {
  trend: string;
  variant?: "light" | "dark";
};

export function TrendBadge({ trend, variant = "light" }: TrendBadgeProps) {
  const isPositive = !trend.startsWith("-");

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
        variant === "dark"
          ? "bg-white/15 text-white"
          : "bg-masco-blue/10 text-masco-blue"
      }`}
    >
      <TrendingUp
        className={`h-3 w-3 ${isPositive ? "" : "rotate-180"}`}
        strokeWidth={2}
      />
      {trend}
    </span>
  );
}
