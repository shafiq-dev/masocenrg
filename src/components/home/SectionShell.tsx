import { type ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`px-6 py-20 lg:px-16 lg:py-28 ${className}`}>
      <div className={`mx-auto w-full max-w-7xl ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
