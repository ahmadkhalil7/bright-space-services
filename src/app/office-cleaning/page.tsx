import type { Metadata } from "next";
import { Moon, Clock, KeyRound, FileLock2, Building2, Store, Calculator, Briefcase } from "lucide-react";
import { Section, CheckList, Faq, QuoteButtons, CtaBand } from "@/components/site/section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `After-Hours Office Cleaning in Burnaby & Vancouver | ${SITE.name}`,
  description:
    "Late-night, weekend and short-notice office cleaning in Burnaby, Vancouver, New Westminster and Coquitlam. Your office cleaned after you close and ready by morning.",
};

const INCLUDED = [
  "Desks and workstations dusted and wiped (we clean around papers and files, never move them)",
  "Kitchen and break room: counters, sink, microwave and appliance fronts",
  "Washrooms cleaned and sanitized; supplies restocked if you provide them",
  "Floors vacuumed and mopped",
  "Garbage and recycling emptied",
  "Entrance, reception and glass doors",
  "High-touch surfaces: door handles, light switches, shared equipment",
];

const ADD_ONS = [
  "Deep cleaning",
  "Carpet cleaning",
  "Interior window cleaning",
  "Kiosk and office furniture assembly",
  "Extra short-notice cleans during your busy season",
];

const FOR_WHO = [
  { icon: Calculator, title: "Tax & accounting offices", desc: "Extra cleans through tax season, when client traffic peaks." },
  { icon: Briefcase, title: "Professional offices", desc: "Real estate, insurance, legal and other client-facing offices." },
  { icon: Building2, title: "Small & mid-size offices", desc: "Regular schedules for teams that want a clean space every morning." },
  { icon: Store, title: "Kiosks & showrooms", desc: "Cleaning and setup for retail kiosks and display spaces." },
];

const HOW = [
  { icon: Moon, title: "After you close", desc: "We clean evenings, late nights or weekends, never during your working hours." },
  { icon: Clock, title: "Short notice", desc: "Need an extra clean this week? Call and we'll tell you how soon we can be there." },
  { icon: KeyRound, title: "Agreed access", desc: "Keys, alarm codes and lock-up steps are agreed with you before the first visit." },
  { icon: FileLock2, title: "Discreet with your files", desc: "We clean around paperwork and screens and leave confidential material untouched." },
];

const FAQS = [
  {
    q: "How late do you clean?",
    a: "Whenever suits you after closing: evenings, late nights or weekends. We'll set the schedule around your hours so we're never in the way.",
  },
  {
    q: "Can you add extra cleans during our busy season?",
    a: "Yes. That's one of the main things we do. Many offices, like tax and accounting offices, need more cleaning in their busy months, and we can add extra visits on short notice.",
  },
  {
    q: "How do you handle keys and alarms?",
    a: "We agree on key, alarm and lock-up procedures with you before the first clean and follow them every visit.",
  },
  {
    q: "Do you sign a contract?",
    a: "We can work with a written agreement that sets out the schedule, what's included and the price, or on a trial basis first. Whatever works for you.",
  },
  {
    q: "How is office cleaning priced?",
    a: "Mainly by the size of the space, how often you want cleaning and what's included. We'll visit or look at photos and give you a free, clear quote.",
  },
  {
    q: "Which areas do you cover?",
    a: `${SITE.serviceAreas.join(", ")} and nearby. Ask us if you're not sure.`,
  },
];

export default function OfficeCleaningPage() {
  return (
    <>
      <div className="bg-cream">
        <Section className="py-16 md:py-24">
          <p className="text-sm font-semibold tracking-wider text-gold-dark">OFFICE CLEANING</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            After-Hours Office Cleaning in Burnaby &amp; Vancouver
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy/75">
            We clean your office after you close, so your team walks into a clean, ready workspace every morning. Late
            nights, weekends and short-notice cleans are our normal.
          </p>
          <div className="mt-8">
            <QuoteButtons kind="office" label="Get an office quote" />
          </div>
        </Section>
      </div>

      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">What&apos;s included in a regular clean</h2>
            <p className="mt-3 text-navy/70">Every office is different, so we agree the exact list with you. A typical visit covers:</p>
            <CheckList items={INCLUDED} className="mt-6" />
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold">Add-on services</h2>
            <p className="mt-2 text-white/75">Book these with your regular cleaning or on their own.</p>
            <ul className="mt-6 space-y-3">
              {ADD_ONS.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold" aria-hidden="true" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-cream">
        <Section className="py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">How we work</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW.map((w) => (
              <div key={w.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy/5">
                <w.icon className="h-7 w-7 text-gold-dark" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-navy/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Who we clean for</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOR_WHO.map((w) => (
            <div key={w.title} className="rounded-3xl border border-navy/10 p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent">
                <w.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-navy/70">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <Faq items={FAQS} title="Office cleaning questions" />
      </Section>

      <CtaBand
        kind="office"
        heading="Want your office clean by tomorrow morning?"
        text="Tell us about your space and schedule. We'll send a free quote, with no obligation."
      />
    </>
  );
}
