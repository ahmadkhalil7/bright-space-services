import {
  Building2,
  Home,
  Moon,
  Clock,
  KeyRound,
  CalendarClock,
  UserRound,
  Check,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Section, Faq } from "@/components/site/section";
import { SITE, telHref, mailHref } from "@/lib/site";
import { QuickQuoteButton } from "@/components/site/quick-quote";

const SERVICES = [
  {
    icon: Building2,
    title: "After-Hours Office Cleaning",
    desc: "We clean after you close, so your office is ready when your team walks in. No disruption to staff or clients.",
    bullets: [
      "Late-night and weekend cleaning",
      "Short-notice and extra cleans in busy seasons",
      "Daily, weekly or custom schedules",
      "Deep cleaning and carpet cleaning",
      "Interior window cleaning",
      "Kiosk and office furniture assembly",
    ],
    cta: "Get an office quote",
    kind: "office" as const,
    href: "/office-cleaning/",
  },
  {
    icon: Home,
    title: "Home Cleaning",
    desc: "Reliable cleaning for houses, condos and apartments, on a schedule that suits you.",
    bullets: [
      "Regular weekly or bi-weekly cleaning",
      "One-time deep cleaning",
      "Move-in and move-out cleaning",
      "Kitchens, bathrooms, floors and dusting",
    ],
    cta: "Get a home quote",
    kind: "home" as const,
    href: "/home-cleaning/",
  },
];

const WHY = [
  { icon: Moon, title: "We work when others don't", desc: "Evenings, late nights and weekends are our normal hours, not an extra." },
  { icon: Clock, title: "Short notice is fine", desc: "Need an extra clean this week? Call us. Busy seasons are when we're most useful." },
  { icon: KeyRound, title: "Respect for your space", desc: "We agree key, alarm and access procedures with you up front, especially where sensitive files are on site." },
  { icon: UserRound, title: "You deal with the owner", desc: "Locally owned in Burnaby. You talk directly to the person responsible for the work." },
];

const FAQS = [
  {
    q: "What hours do you clean offices?",
    a: "Mostly after closing: evenings, late nights and weekends, so we never get in your team's way. We'll set a schedule around your hours.",
  },
  {
    q: "Can you come on short notice?",
    a: "Yes. Short-notice and extra cleans are a big part of what we do, especially for offices in their busy season. Call us and we'll tell you how soon we can be there.",
  },
  {
    q: "Do you also clean homes?",
    a: "Yes. We offer regular home cleaning, one-time deep cleans and move-in/move-out cleaning.",
  },
  {
    q: "How do you price a job?",
    a: "It depends on the size of the space, how often you want cleaning and what's included. Tell us about your space and we'll send a free quote, usually after a quick visit or a few photos.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes, we bring our own cleaning supplies and equipment. If you prefer specific products, let us know.",
  },
  {
    q: "Which areas do you serve?",
    a: `${SITE.serviceAreas.join(", ")} and nearby. Not sure if we cover you? Just ask.`,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-cream">
        <Section className="grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-navy shadow-sm ring-1 ring-navy/10">
              <Moon className="h-4 w-4 text-gold-dark" aria-hidden="true" /> Serving Burnaby &amp; Greater Vancouver
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              After-Hours Office Cleaning &amp; Home Cleaning in Burnaby
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy/75">
              We clean after you close, on short notice when you need it, so your office is ready by morning. We also
              clean homes, condos and apartments.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuickQuoteButton
                kind="office"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 font-semibold text-white hover:bg-navy-dark"
              >
                Get a free quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </QuickQuoteButton>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-navy hover:bg-gold/90"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {SITE.phone}
              </a>
            </div>
          </div>

          {/* Visual: how an after-hours clean works */}
          <div className="rounded-3xl bg-navy p-8 text-white shadow-xl sm:p-10">
            <p className="text-sm font-semibold tracking-wider text-gold">HOW IT WORKS</p>
            <ol className="mt-6 space-y-6">
              {[
                ["6 PM", "Your team heads home."],
                ["After hours", "We arrive and clean, following your access and alarm procedures."],
                ["Before 8 AM", "Your office is clean and ready when everyone walks in."],
              ].map(([time, text]) => (
                <li key={time} className="flex gap-4">
                  <span className="mt-1 inline-flex h-3 w-3 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">{time}</p>
                    <p className="text-white/75">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      </div>

      {/* Services */}
      <Section id="services" className="py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our cleaning services</h2>
          <p className="mt-3 text-navy/70">Two services, one standard: done properly, on your schedule.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article key={s.title} className="flex flex-col rounded-3xl border border-navy/10 bg-white p-8 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-navy">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-navy/70">{s.desc}</p>
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <QuickQuoteButton
                  kind={s.kind}
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 font-semibold text-white hover:bg-navy-dark"
                >
                  {s.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </QuickQuoteButton>
                <Link href={s.href} className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-navy-dark">
                  Learn more<span className="sr-only"> about {s.title.toLowerCase()}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <div className="bg-cream">
        <Section id="why-us" className="py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why choose {SITE.shortName}</h2>
            <p className="mt-3 text-navy/70">{SITE.meaning} We aim to leave every space living up to the name.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
                <w.icon className="h-7 w-7 text-gold-dark" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Service area */}
      <Section id="areas" className="py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Areas we serve</h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {SITE.serviceAreas.map((c) => (
            <li key={c} className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 font-medium">
              <MapPin className="h-4 w-4 text-gold-dark" aria-hidden="true" /> {c}
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="pb-20">
        <Faq items={FAQS} />
      </Section>

      {/* Contact */}
      <div className="bg-navy text-white">
        <Section id="contact" className="grid gap-10 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get your free quote</h2>
            <p className="mt-3 text-white/75">
              Tell us about your office or home and how often you&apos;d like it cleaned. We&apos;ll get back to you
              quickly.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a href={telHref} className="inline-flex items-center gap-3 text-lg font-semibold hover:text-gold">
                  <Phone className="h-5 w-5 text-gold" aria-hidden="true" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a href={mailHref} className="inline-flex items-center gap-3 text-lg font-semibold hover:text-gold">
                  <Mail className="h-5 w-5 text-gold" aria-hidden="true" /> {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" /> {SITE.serviceAreas.join(", ")}
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 text-navy">
            <CalendarClock className="h-8 w-8 text-gold-dark" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-bold">Request a quote</h3>
            <p className="mt-2 text-navy/70">Takes less than a minute. Or call or email with:</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["Office or home", "Address or area", "Approximate size", "How often you want cleaning"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold-dark" aria-hidden="true" /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <QuickQuoteButton
                kind="office"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 font-semibold text-white hover:bg-navy-dark"
              >
                <Building2 className="h-4 w-4" aria-hidden="true" /> Clean my office
              </QuickQuoteButton>
              <QuickQuoteButton
                kind="home"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-3.5 font-semibold text-navy hover:bg-gold/90"
              >
                <Home className="h-4 w-4" aria-hidden="true" /> Clean my home
              </QuickQuoteButton>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
