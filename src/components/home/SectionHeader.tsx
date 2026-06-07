import { type ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  action,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "text-center" : "text-left"} ${className}`}
    >
      <div
        className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${
          isCenter ? "lg:flex-col lg:items-center" : ""
        }`}
      >
        <div className={isCenter ? "mx-auto max-w-3xl" : "max-w-3xl"}>
          <div
            className={`flex items-center gap-3 ${
              isCenter ? "justify-center" : ""
            }`}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-masco-blue" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-masco-blue">
              {eyebrow}
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-masco-navy sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-masco-black/60 md:text-base">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <div
        className={`mt-8 h-px w-full bg-gradient-to-r from-masco-blue/40 via-masco-navy/10 to-transparent ${
          isCenter ? "max-w-xs mx-auto" : "max-w-xl"
        }`}
      />
    </div>
  );
}
