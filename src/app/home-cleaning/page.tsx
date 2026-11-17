import type { Metadata } from "next";
import { Repeat, Sparkles, Truck, CalendarClock } from "lucide-react";
import { Section, CheckList, Faq, QuoteButtons, CtaBand } from "@/components/site/section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Home Cleaning in Burnaby, Vancouver & New Westminster | ${SITE.name}`,
  description:
    "Regular house and condo cleaning, deep cleaning and move-in/move-out cleaning in Burnaby, Vancouver, New Westminster and Coquitlam. Evening and weekend times available.",
};

const TYPES = [
  {
    icon: Repeat,
    title: "Regular cleaning",
    desc: "Weekly, bi-weekly or monthly visits to keep your home consistently clean.",
  },
  {
    icon: Sparkles,
    title: "Deep cleaning",
    desc: "A top-to-bottom clean for homes that need extra attention, or a fresh start.",
  },
  {
    icon: Truck,
    title: "Move-in / move-out",
    desc: "An empty-home clean so you can get your deposit back or move into a clean space.",
  },
];

const ROOMS = [
  {
    title: "Kitchen",
    items: ["Counters, sink and backsplash", "Stovetop and appliance fronts", "Microwave inside and out", "Cabinet fronts wiped"],
  },
  {
    title: "Bathrooms",
    items: ["Toilet, sink and vanity", "Shower and tub", "Mirrors and fixtures", "Floors washed"],
  },
  {
    title: "Bedrooms & living areas",
    items: ["Dusting of reachable surfaces", "Furniture and shelves wiped", "Beds made (on request)", "Mirrors and glass"],
  },
  {
    title: "Throughout the home",
    items: ["Floors vacuumed and mopped", "Garbage emptied", "Light switches and door handles", "Entryway tidied"],
  },
];

const DEEP_EXTRAS = [
  "Baseboards, doors and door frames",
  "Inside the oven and fridge",
  "Inside cabinets and drawers (move-in/out)",
  "Window sills and tracks",
  "Detailed scrubbing of grout and fixtures",
];

const FAQS = [
  {
    q: "Do I need to be home during the clean?",
    a: "No. Many clients give us access and carry on with their day. We'll agree how to get in and lock up before the first visit.",
  },
  {
    q: "Can you clean in the evening or on weekends?",
    a: "Yes. Flexible hours are what we do, so evenings and weekends are available.",
  },
  {
    q: "Do you bring supplies?",
    a: "Yes, we bring our own cleaning supplies and equipment. If you'd like us to use specific products, just let us know.",
  },
  {
    q: "What's the difference between a regular and a deep clean?",
    a: "A regular clean keeps a home that's already in good shape clean. A deep clean adds detailed work like baseboards, inside appliances, and scrubbing built-up grime. Most homes start with one deep clean, then switch to regular visits.",
  },
  {
    q: "How is home cleaning priced?",
    a: "Mainly by the size of the home, its condition and the type of clean. Tell us about your home and we'll send a free quote.",
  },
  {
    q: "Which areas do you cover?",
    a: `${SITE.serviceAreas.join(", ")} and nearby. Ask us if you're not sure.`,
  },
];

export default function HomeCleaningPage() {
  return (
    <>
      <div className="bg-cream">
        <Section className="py-16 md:py-24">
          <p className="text-sm font-semibold tracking-wider text-gold-dark">HOME CLEANING</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Home Cleaning in Burnaby, Vancouver &amp; New Westminster
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy/75">
            House, condo and apartment cleaning on a schedule that suits you, including evenings and weekends. Regular
            visits, one-time deep cleans and move-in/move-out cleaning.
          </p>
          <div className="mt-8">
            <QuoteButtons kind="home" label="Get a home quote" />
          </div>
        </Section>
      </div>

      <Section className="py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Choose your clean</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TYPES.map((t) => (
            <div key={t.title} className="rounded-3xl border border-navy/10 p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent">
                <t.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{t.title}</h3>
              <p className="mt-2 text-navy/70">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bg-cream">
        <Section className="py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What&apos;s included</h2>
            <p className="mt-3 text-navy/70">A standard clean covers every room. We&apos;ll adjust it to your home.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROOMS.map((r) => (
              <div key={r.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <CheckList items={r.items} className="mt-4 text-sm" />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Deep and move-in/out cleans add</h2>
            <CheckList items={DEEP_EXTRAS} className="mt-6" />
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
            <CalendarClock className="h-8 w-8 text-gold" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">Flexible times</h2>
            <p className="mt-2 text-white/75">
              Weekdays, evenings or weekends. Pick what fits your routine, and change it when you need to.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pb-20">
        <Faq items={FAQS} title="Home cleaning questions" />
      </Section>

      <CtaBand
        kind="home"
        heading="Ready for a cleaner home?"
        text="Tell us about your home and when you'd like us to come. We'll send a free quote, with no obligation."
      />
    </>
  );
}
