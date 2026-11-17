import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./logo";
import { SITE, telHref, mailHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm text-white/75">
            {SITE.tagline}, plus home cleaning, across {SITE.serviceAreas.join(", ")}.
          </p>
          <p className="mt-3 text-sm text-white/60">{SITE.meaning}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wider text-gold">SERVICES</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/#services" className="hover:text-white">After-hours office cleaning</Link></li>
            <li><Link href="/#services" className="hover:text-white">Home cleaning</Link></li>
            <li><Link href="/#services" className="hover:text-white">Deep &amp; move-in/out cleaning</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wider text-gold">CONTACT</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a href={telHref} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a href={mailHref} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" aria-hidden="true" /> {SITE.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {SITE.city}, {SITE.region}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
