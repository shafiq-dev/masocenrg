import { stats } from "@/lib/home-content";
import { IconBox, statIcons } from "@/lib/icons";

type StatsSectionProps = {
  variant?: "bar" | "grid" | "inline";
};

export function StatsSection({ variant = "grid" }: StatsSectionProps) {
  if (variant === "bar") {
    return (
      <section className="masco-gradient px-6 py-14 text-white lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/15">
          {stats.map((stat) => {
            const Icon = statIcons[stat.label];
            return (
              <div
                key={stat.label}
                className="px-4 text-center md:px-8"
              >
                {Icon && (
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-[20px] bg-white/12 backdrop-blur-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                )}
                <p className="text-2xl font-bold sm:text-3xl md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-balance text-[11px] uppercase tracking-[0.15em] text-white/75">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <section className="border-y border-masco-navy/10 bg-white px-6 py-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = statIcons[stat.label];
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-[20px] border border-masco-navy/10 px-4 py-3"
              >
                {Icon && <IconBox icon={Icon} variant="light" size="sm" />}
                <div>
                  <p className="text-xl font-bold text-masco-blue md:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-masco-black/50">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="masco-surface-tint px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-masco-blue" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-masco-blue">
            By the Numbers
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = statIcons[stat.label];
            return (
              <div key={stat.label} className="masco-card p-6 text-center md:p-8">
                {Icon && (
                  <div className="mx-auto mb-4 flex justify-center">
                    <IconBox icon={Icon} variant="light" />
                  </div>
                )}
                <p className="text-3xl font-bold text-masco-blue md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-masco-black/60">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
