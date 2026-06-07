import Image from "next/image";
import Link from "next/link";

type MascoLogoProps = {
  href?: string;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  xs: {
    width: 176,
    height: 64,
    className: "h-9 w-auto max-w-[120px] lg:h-14 lg:max-w-[176px]",
  },
  sm: { width: 104, height: 40, className: "h-9 w-auto max-w-[104px]" },
  md: { width: 140, height: 52, className: "h-12 w-auto max-w-[140px]" },
  lg: { width: 180, height: 68, className: "h-16 w-auto max-w-[180px]" },
};

export function MascoLogo({
  href = "/main",
  size = "md",
  className = "",
}: MascoLogoProps) {
  const { width, height, className: sizeClass } = sizes[size];

  const logo = (
    <Image
      src="/masco-logo.png"
      alt="MASCO Energy"
      width={width}
      height={height}
      className={`object-contain ${sizeClass} ${className}`}
      priority
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center">
        {logo}
      </Link>
    );
  }

  return logo;
}
