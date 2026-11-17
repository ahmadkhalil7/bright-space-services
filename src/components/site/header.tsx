"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./logo";
import { SITE, telHref } from "@/lib/site";

const NAV = [
  { href: "/office-cleaning/", label: "Office Cleaning" },
  { href: "/home-cleaning/", label: "Home Cleaning" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => !href.includes("#") && pathname.replace(/\/?$/, "/") === href;

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${SITE.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isCurrent(n.href) ? "page" : undefined}
              className="border-b-2 border-transparent py-1 text-sm font-medium text-navy/80 hover:text-navy aria-[current=page]:border-gold aria-[current=page]:font-semibold aria-[current=page]:text-navy"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-navy hover:bg-gold/90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phone}
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-navy/10 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(n.href) ? "page" : undefined}
                className="rounded-lg px-3 py-3 font-medium text-navy hover:bg-cream aria-[current=page]:bg-cream aria-[current=page]:font-semibold"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={telHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 font-semibold text-navy"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
