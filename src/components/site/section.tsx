import { Check, ArrowRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { QuickQuoteButton } from "./quick-quote";
import { SITE, telHref } from "@/lib/site";

export const Section = ({ id, className = "", children }: React.PropsWithChildren<{ id?: string; className?: string }>) => (
  <section id={id} className={`mx-auto w-full max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

export function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items, title = "Frequently asked questions" }: { items: readonly { q: string; a: string }[]; title?: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <Accordion type="single" collapsible className="mt-8">
        {items.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-navy/75">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

/** Quote + call buttons used at the top and bottom of service pages. */
export function QuoteButtons({ kind, label }: { kind: "office" | "home"; label: string }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <QuickQuoteButton
        kind={kind}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 font-semibold text-white hover:bg-navy-dark"
      >
        {label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </QuickQuoteButton>
      <a
        href={telHref}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-navy hover:bg-gold/90"
      >
        <Phone className="h-4 w-4" aria-hidden="true" /> Call {SITE.phone}
      </a>
    </div>
  );
}

/** Closing call-to-action band for service pages. */
export function CtaBand({ kind, heading, text }: { kind: "office" | "home"; heading: string; text: string }) {
  return (
    <div className="bg-navy text-white">
      <Section className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{heading}</h2>
          <p className="mt-2 max-w-xl text-white/75">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <QuickQuoteButton
            kind={kind}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 font-semibold text-navy hover:bg-gold/90"
          >
            Get a free quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </QuickQuoteButton>
          <a
            href={telHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phone}
          </a>
        </div>
      </Section>
    </div>
  );
}
