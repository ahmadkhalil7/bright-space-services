"use client";

import React from "react";
import { Building2, Home, X, Check, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type Kind = "office" | "home";

const LABEL: Record<Kind, string> = { office: "Clean my office", home: "Clean my home" };
const OPEN_EVENT = "open-quick-quote";

/** Opens the quick-quote popup from anywhere on the page. */
export function openQuickQuote(kind: Kind) {
  window.dispatchEvent(new CustomEvent<Kind>(OPEN_EVENT, { detail: kind }));
}

/** A button that opens the popup with office or home already chosen. */
export function QuickQuoteButton({ kind, className, children }: React.PropsWithChildren<{ kind: Kind; className?: string }>) {
  return (
    <button type="button" className={className} onClick={() => openQuickQuote(kind)}>
      {children}
    </button>
  );
}

/** Always-visible "Clean my office / Clean my home" bar plus the popup it opens. */
export function QuickQuote() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [kind, setKind] = React.useState<Kind>("office");
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const open = React.useCallback((k: Kind) => {
    setKind(k);
    setStatus("idle");
    dialogRef.current?.showModal();
  }, []);

  React.useEffect(() => {
    const handler = (e: Event) => open((e as CustomEvent<Kind>).detail);
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, [open]);

  const close = () => dialogRef.current?.close();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const service = kind === "office" ? "Office cleaning" : "Home cleaning";

    if (SITE.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `New ${service.toLowerCase()} quote request: ${data.name} (${data.area})`,
            _template: "table",
            _captcha: "false",
            Service: service,
            Name: data.name,
            Phone: data.phone,
            Area: data.area,
            Details: data.notes || "(none)",
            _honey: data._honey ?? "",
          }),
        });
        setStatus(res.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
      return;
    }

    // Until the form service is connected: open a pre-filled text (phones) or email (computers).
    const lines = [
      `Hi, I'd like a quote for ${service.toLowerCase()}.`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Area: ${data.area}`,
      data.notes ? `Details: ${data.notes}` : "",
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));
    const isPhone = window.matchMedia("(pointer: coarse)").matches;
    window.location.href = isPhone
      ? `sms:+1${SITE.phone.replace(/\D/g, "")}?&body=${body}`
      : `mailto:${SITE.email}?subject=${encodeURIComponent(`${service} quote request`)}&body=${body}`;
    setStatus("sent");
  }

  const pill =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold shadow-lg transition";

  return (
    <>
      {/* Always-visible bar: full-width at the bottom on phones, floating on larger screens */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 p-3 backdrop-blur md:inset-x-auto md:bottom-6 md:right-6 md:rounded-2xl md:border md:p-2 md:shadow-2xl"
        role="region"
        aria-label="Quick quote"
      >
        <div className="grid grid-cols-2 gap-2 md:flex">
          <button type="button" onClick={() => open("office")} className={`${pill} bg-navy text-white hover:bg-navy-dark`}>
            <Building2 className="h-5 w-5" aria-hidden="true" /> {LABEL.office}
          </button>
          <button type="button" onClick={() => open("home")} className={`${pill} bg-gold text-navy hover:bg-gold/90`}>
            <Home className="h-5 w-5" aria-hidden="true" /> {LABEL.home}
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="quick-quote-title"
        className="m-auto w-[min(32rem,calc(100%-2rem))] rounded-3xl p-0 text-navy shadow-2xl backdrop:bg-navy/60"
        onClick={(e) => e.target === dialogRef.current && close()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-wider text-gold-dark">FREE QUOTE</p>
              <h2 id="quick-quote-title" className="mt-1 text-2xl font-bold">{LABEL[kind]}</h2>
            </div>
            <button type="button" onClick={close} className="rounded-lg p-2 hover:bg-cream" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>

          {status === "sent" ? (
            <div className="mt-6 text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                <Check className="h-7 w-7 text-gold-dark" aria-hidden="true" />
              </span>
              <p className="mt-4 text-lg font-semibold">Thanks! We&apos;ll be in touch soon.</p>
              <p className="mt-1 text-navy/70">Need us faster? Call {SITE.phone}.</p>
              <button type="button" onClick={close} className="mt-6 rounded-xl bg-navy px-6 py-3 font-semibold text-white">
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {/* Switch between office and home inside the popup */}
              <fieldset className="grid grid-cols-2 gap-2">
                <legend className="sr-only">What do you need cleaned?</legend>
                {(["office", "home"] as Kind[]).map((k) => (
                  <label
                    key={k}
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 font-semibold ${
                      kind === k ? "border-navy bg-navy text-white" : "border-navy/15 hover:border-navy/40"
                    }`}
                  >
                    <input type="radio" name="kind" value={k} checked={kind === k} onChange={() => setKind(k)} className="sr-only" />
                    {k === "office" ? <Building2 className="h-4 w-4" aria-hidden="true" /> : <Home className="h-4 w-4" aria-hidden="true" />}
                    {k === "office" ? "Office" : "Home"}
                  </label>
                ))}
              </fieldset>

              <div>
                <label htmlFor="qq-name" className="mb-1 block text-sm font-medium">Your name</label>
                <input id="qq-name" name="name" required autoComplete="name" className="w-full rounded-xl border border-navy/20 px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label htmlFor="qq-phone" className="mb-1 block text-sm font-medium">Phone</label>
                <input id="qq-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="w-full rounded-xl border border-navy/20 px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label htmlFor="qq-area" className="mb-1 block text-sm font-medium">Area</label>
                <select id="qq-area" name="area" required defaultValue={SITE.serviceAreas[0]} className="w-full rounded-xl border border-navy/20 bg-white px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-gold">
                  {[...SITE.serviceAreas, "Other"].map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="qq-notes" className="mb-1 block text-sm font-medium">
                  Anything else? <span className="font-normal text-navy/70">(optional)</span>
                </label>
                <textarea id="qq-notes" name="notes" rows={2} placeholder={kind === "office" ? "e.g. 2,000 sq ft, 3 nights a week" : "e.g. 2-bedroom condo, every 2 weeks"} className="w-full rounded-xl border border-navy/20 px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-gold" />
              </div>

              {/* Hidden from people; bots that fill it are ignored */}
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

              {status === "error" && (
                <p role="alert" className="text-sm text-red-700">
                  Something went wrong. Please call {SITE.phone} instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-4 text-lg font-semibold text-white hover:bg-navy-dark disabled:opacity-60"
              >
                <Send className="h-5 w-5" aria-hidden="true" /> {status === "sending" ? "Sending…" : "Send"}
              </button>
              <p className="text-center text-sm text-navy/70">Free, no obligation. We&apos;ll get back to you quickly.</p>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
