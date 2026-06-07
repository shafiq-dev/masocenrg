"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function ContactUsButton({ compact = false }: { compact?: boolean }) {
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
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`masco-gradient shrink-0 cursor-pointer rounded-[20px] font-bold text-white transition-opacity hover:opacity-90 ${
          compact
            ? "px-3 py-1.5 text-[11px] sm:text-xs"
            : "px-4 py-2.5 text-xs sm:px-5 sm:text-sm"
        }`}
      >
        Contact Us
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-masco-black/40"
            aria-label="Close contact form"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 w-full max-w-lg rounded-[20px] bg-white p-8 shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-[20px] text-masco-black/50 transition-colors hover:bg-masco-navy/5 hover:text-masco-navy"
              aria-label="Close"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>

            <p className="text-xs uppercase tracking-[0.2em] text-masco-blue">
              Get in Touch
            </p>
            <h2
              id="contact-modal-title"
              className="mt-2 text-2xl font-bold text-masco-navy"
            >
              Contact MASCO Energy
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-masco-black/60">
              Share your project details and our team will respond within one
              business day.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-masco-navy"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-[20px] border border-masco-navy/15 bg-white px-4 py-3 text-sm text-masco-black outline-none transition-colors focus:border-masco-blue"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-masco-navy"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-[20px] border border-masco-navy/15 bg-white px-4 py-3 text-sm text-masco-black outline-none transition-colors focus:border-masco-blue"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-masco-navy"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full resize-none rounded-[20px] border border-masco-navy/15 bg-white px-4 py-3 text-sm text-masco-black outline-none transition-colors focus:border-masco-blue"
                />
              </div>

              <button
                type="submit"
                className="masco-gradient w-full rounded-[20px] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 border-t border-masco-navy/10 pt-6 text-sm text-masco-black/60">
              <p>info@masco.com.sa</p>
              <p className="mt-1">Al Khobar, Eastern Province, KSA</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
