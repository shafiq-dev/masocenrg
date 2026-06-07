"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ContactUsButton } from "@/components/brand/ContactUsButton";

type NavItem = {
  label: string;
  href: string;
};

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-[20px] text-masco-navy transition-colors hover:bg-masco-navy/5"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X className="h-5 w-5" strokeWidth={1.75} />
        ) : (
          <Menu className="h-5 w-5" strokeWidth={1.75} />
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-masco-black/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <nav
            id="mobile-nav-panel"
            className="absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col overflow-y-auto bg-white px-4 pb-6 pt-[calc(3.75rem+env(safe-area-inset-top))] shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between border-b border-masco-navy/10 pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-masco-blue">
                Menu
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-[20px] text-masco-navy transition-colors hover:bg-masco-navy/5"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-[20px] px-4 text-sm font-bold text-masco-black/75 transition-colors hover:bg-masco-navy/5 hover:text-masco-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-masco-navy/10 pt-6">
              <ContactUsButton />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
