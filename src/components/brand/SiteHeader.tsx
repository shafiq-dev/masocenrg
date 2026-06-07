import Link from "next/link";
import { ContactUsButton } from "@/components/brand/ContactUsButton";
import { MascoLogo } from "@/components/brand/MascoLogo";
import { MobileNav } from "@/components/brand/MobileNav";
import { navItems } from "@/lib/home-content";

const headerNavItems = navItems.filter((item) => item.label !== "Contact");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-masco-navy/10 bg-white px-4 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] lg:overflow-visible lg:px-16 lg:pt-2">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between gap-3">
        <MascoLogo href="/main" size="xs" className="relative z-10 shrink-0" />

        <div className="masco-desktop-nav gap-2 md:gap-4">
          <nav className="flex items-center gap-0.5 md:gap-3">
            {headerNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-[20px] px-2 py-1 text-[11px] font-bold text-masco-black/70 transition-colors hover:bg-masco-navy/5 hover:text-masco-navy sm:px-2.5 sm:text-xs"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ContactUsButton compact />
        </div>

        <div className="masco-mobile-nav">
          <MobileNav items={headerNavItems} />
        </div>
      </div>
    </header>
  );
}
