export type KpiMetric = {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  trend?: string;
};

export type ChartSegment = {
  label: string;
  value: number;
  color?: string;
};

export type GrowthPoint = {
  year: string;
  value: number;
};

export type ServiceMetric = {
  serviceName: string;
  sharePct: number;
  activeProjects: number;
  trend: string;
  metricLabel: string;
};

export const kpiMetrics: KpiMetric[] = [
  {
    id: "workforce",
    value: 2400,
    suffix: "+",
    label: "Employees across KSA",
    trend: "+12%",
  },
  {
    id: "projects",
    value: 127,
    label: "Projects in delivery",
    trend: "+8",
  },
  {
    id: "contract",
    value: 18.5,
    prefix: "SAR ",
    suffix: "B",
    decimals: 1,
    label: "Total awarded value",
    trend: "+22%",
  },
  {
    id: "safety",
    value: 6.2,
    suffix: "M",
    decimals: 1,
    label: "Safe man-hours without LTI",
    trend: "+18%",
  },
  {
    id: "delivery",
    value: 98.4,
    suffix: "%",
    decimals: 1,
    label: "On-time programme delivery",
    trend: "+2.1%",
  },
  {
    id: "saudi",
    value: 85,
    suffix: "%",
    label: "Saudi nationals in operations",
    trend: "+5%",
  },
  {
    id: "capacity",
    value: 12.4,
    suffix: " GW",
    decimals: 1,
    label: "Cumulative energy capacity",
    trend: "+34%",
  },
  {
    id: "partners",
    value: 47,
    label: "Strategic global partners",
    trend: "+6",
  },
  {
    id: "regions",
    value: 18,
    label: "Regions served in KSA",
    trend: "+3",
  },
  {
    id: "vision2030",
    value: 94,
    suffix: "%",
    label: "Vision 2030 portfolio alignment",
    trend: "+8%",
  },
];

export const deliveryModelSplit: ChartSegment[] = [
  { label: "EPC", value: 52, color: "#134880" },
  { label: "EPCM", value: 31, color: "#1691cf" },
  { label: "Hybrid", value: 17, color: "#4db8e8" },
];

export const sectorPortfolio: ChartSegment[] = [
  { label: "Oil & Gas", value: 38, color: "#134880" },
  { label: "Petrochemical", value: 24, color: "#1691cf" },
  { label: "Industrial", value: 22, color: "#3a7ab5" },
  { label: "Digital", value: 16, color: "#4db8e8" },
];

export const yearlyProjectGrowth: GrowthPoint[] = [
  { year: "2021", value: 42 },
  { year: "2022", value: 58 },
  { year: "2023", value: 71 },
  { year: "2024", value: 96 },
  { year: "2025", value: 127 },
];

export const safetyTrend = [3.2, 3.8, 4.5, 5.1, 5.6, 6.2];

export const regionalFootprint: ChartSegment[] = [
  { label: "Eastern Province", value: 42, color: "#134880" },
  { label: "Central Region", value: 28, color: "#1691cf" },
  { label: "Western Region", value: 18, color: "#3a7ab5" },
  { label: "Other Regions", value: 12, color: "#4db8e8" },
];

export const serviceMetrics: ServiceMetric[] = [
  {
    serviceName: "EPC Contracting",
    sharePct: 38,
    activeProjects: 42,
    trend: "+14%",
    metricLabel: "38% portfolio share",
  },
  {
    serviceName: "Oil & Gas",
    sharePct: 28,
    activeProjects: 24,
    trend: "+9%",
    metricLabel: "24 active projects",
  },
  {
    serviceName: "Petrochemical",
    sharePct: 18,
    activeProjects: 19,
    trend: "+6%",
    metricLabel: "19 process facilities",
  },
  {
    serviceName: "Industrial Infrastructure",
    sharePct: 22,
    activeProjects: 21,
    trend: "+11%",
    metricLabel: "21 industrial sites",
  },
  {
    serviceName: "Digital Infrastructure",
    sharePct: 16,
    activeProjects: 12,
    trend: "+34%",
    metricLabel: "12 data center programmes",
  },
  {
    serviceName: "EPCM Delivery",
    sharePct: 31,
    activeProjects: 18,
    trend: "+7%",
    metricLabel: "18 hybrid programmes",
  },
];

export const pillarMetrics: Record<string, { value: number; suffix?: string; prefix?: string; decimals?: number; caption: string }> = {
  "Vision 2030 Alignment": {
    value: 94,
    suffix: "%",
    caption: "Portfolio alignment score",
  },
  "Quality & Safety": {
    value: 6.2,
    suffix: "M",
    decimals: 1,
    caption: "Safe man-hours delivered",
  },
  "Saudi Expertise": {
    value: 85,
    suffix: "%",
    caption: "Saudi workforce participation",
  },
  "Innovation & Digital": {
    value: 34,
    suffix: "%",
    caption: "YoY digital growth",
  },
};

export const processProgress = [92, 88, 95, 90];

export const editorialBandMetrics: Record<string, KpiMetric> = {
  "Our Vision": kpiMetrics.find((m) => m.id === "vision2030")!,
  "Who We Are": kpiMetrics.find((m) => m.id === "workforce")!,
  "Our Mission": kpiMetrics.find((m) => m.id === "projects")!,
  "Saudi Vision 2030": kpiMetrics.find((m) => m.id === "capacity")!,
};

export const themeStats = {
  classic: ["workforce", "projects", "delivery", "vision2030"],
  minimal: ["workforce", "saudi", "delivery"],
  services: ["projects", "contract", "delivery", "partners"],
  split: ["workforce", "projects", "safety", "regions"],
  editorial: ["workforce", "capacity", "vision2030", "partners"],
} as const;

export function getKpisByIds(ids: readonly string[]): KpiMetric[] {
  return ids
    .map((id) => kpiMetrics.find((m) => m.id === id))
    .filter((m): m is KpiMetric => Boolean(m));
}

export function getServiceMetric(serviceName: string): ServiceMetric | undefined {
  return serviceMetrics.find((m) => m.serviceName === serviceName);
}

export function formatMetricValue(metric: KpiMetric, value?: number): string {
  const v = value ?? metric.value;
  const formatted =
    metric.decimals !== undefined
      ? v.toFixed(metric.decimals)
      : Math.round(v).toLocaleString();
  return `${metric.prefix ?? ""}${formatted}${metric.suffix ?? ""}`;
}
