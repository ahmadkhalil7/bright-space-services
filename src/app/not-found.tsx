import Link from "next/link";
import { Section } from "@/components/site/section";

export default function NotFound() {
  return (
    <Section className="py-24 text-center">
      <p className="text-sm font-semibold tracking-wider text-gold-dark">PAGE NOT FOUND</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">We couldn&apos;t find that page</h1>
      <p className="mt-4 text-navy/70">It may have moved. Try one of these instead:</p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/" className="rounded-xl bg-navy px-6 py-3.5 font-semibold text-white hover:bg-navy-dark">Home</Link>
        <Link href="/office-cleaning/" className="rounded-xl border border-navy/20 px-6 py-3.5 font-semibold hover:bg-cream">Office cleaning</Link>
        <Link href="/home-cleaning/" className="rounded-xl border border-navy/20 px-6 py-3.5 font-semibold hover:bg-cream">Home cleaning</Link>
      </div>
    </Section>
  );
}
