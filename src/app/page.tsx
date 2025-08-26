"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  Droplets,
  Paintbrush,
  Brush,
  PaintRoller,
  Hammer,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  Building2,
  Check,
  Send,
  ArrowRight,
  BedDouble,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// ===== Brand Config =====
const BRAND = "Bright Space Services";
const TAGLINE = "Your Space, Our Shine — Serving Burnaby & Beyond";
const PHONE = "778‑674‑0836";
const EMAIL = "zaynrashidkhalil@gmail.com";
const SERVICE_AREAS = ["Burnaby", "Vancouver", "New Westminster", "Coquitlam", "Nearby cities"];
const LOGO_URL = "/bright-space-logo.png"; // paste logo path e.g. "/bright-space-logo.png"
const BOOKING_URL = ""; // optional booking link
const FORMSPREE_ENDPOINT = ""; // optional Formspree endpoint

// ===== Taxes Config (BC rules) =====
// GST always applies. PST applies to pressure washing and some reno/materials.
const GST_RATE = 0.05;
const PST_RATE = 0.07;

// Helper utils
const telHref = (p: string) => {
  const digits = p.replace(/[^0-9]/g, "");
  return digits.length >= 10 ? `tel:+1${digits}` : "#contact";
};




const Section = ({ id, className = "", children }: React.PropsWithChildren<{ id?: string; className?: string }>) => (
  <section id={id} className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const IconBubble = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ring-1 ring-black/5 bg-white/80 backdrop-blur">
    {children}
  </div>
);

// ===== Services =====
const services = [
  {
    icon: <Home className="h-6 w-6" />, 
    title: "Residential & Commercial Cleaning",
    desc: "Regular, deep, and move‑out cleans tailored to homes & workplaces.",
    bullets: ["Recurring or one‑time", "Eco‑friendly products", "Move‑in/out options"],
  },
  {
    icon: <Droplets className="h-6 w-6" />, 
    title: "Pressure Washing",
    desc: "Parkings, driveways, walkways — spotless and renewed.",
    bullets: ["Oil stain treatment", "Surface‑safe methods", "Sealing options"],
  },
  {
    icon: <Hammer className="h-6 w-6" />, 
    title: "Gutter Cleaning",
    desc: "Clear gutters & downspouts to protect your property from water damage.",
    bullets: ["Full debris removal", "Downspout flush", "Photo proof"],
  },
  {
    icon: <BedDouble className="h-6 w-6" />, 
    title: "Airbnb Turnovers",
    desc: "Fast, reliable, guest‑ready cleans with restock & photo checklists.",
    bullets: ["Hotel‑style setup", "Laundry add‑on", "Inventory restock"],
  },
  {
    icon: <Sparkles className="h-6 w-6" />, 
    title: "Post‑Reno / Post‑Construction",
    desc: "Dust‑free, detailed cleans after any project — we handle the fine dust.",
    bullets: ["HEPA filtration", "Detailing & wipe‑downs", "Debris haul‑away add‑on"],
  },
  {
    icon: <Paintbrush className="h-6 w-6" />, 
    title: "Light Renovations",
    desc: "Painting, drywall, flooring, and small repairs for a polished finish.",
    bullets: ["Colour matching", "Drywall patching", "Flooring installs"],
  },
];

const tiers = [
  {
    name: "Standard Clean",
    price: "$159+",
    desc: "Apartments & small homes",
    features: ["Kitchen & baths", "All rooms dust & wipe", "Floors vacuum & mop", "Trash out"],
    cta: "Book Online",
    popular: false,
  },
  {
    name: "Deep Clean",
    price: "$299+",
    desc: "Homes that need extra attention",
    features: ["Standard Clean +", "Baseboards & doors", "Inside fridge/oven", "Detailing & edges"],
    cta: "Get Quote",
    popular: true,
  },
  {
    name: "Move‑Out / Turnover",
    price: "$349+",
    desc: "Move‑in/Move‑out & Airbnb",
    features: ["Inside cabinets & appliances", "Walls spot‑clean", "Checklist & photos", "Laundry add‑on"],
    cta: "Schedule Inspection",
    popular: false,
  },
];

const faqs = [
  {
    q: "Are you insured & bonded?",
    a: "Yes — fully insured & bonded. Techs are background‑checked and trained to our safety standards.",
  },
  {
    q: "How do you price jobs?",
    a: "We give fast ballpark quotes online and confirm after a quick on‑site or photo assessment based on size, condition, and access.",
  },
  {
    q: "Do you bring supplies?",
    a: "Yes. We use professional, eco‑friendly products and commercial‑grade equipment. Specific products by request.",
  },
  {
    q: "What areas do you serve?",
    a: `We serve ${SERVICE_AREAS.join(", ")}. Contact us to confirm your address.`,
  },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const nav = [
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#pricing", label: "Pricing" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Section className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          {LOGO_URL ? (
            <img src={LOGO_URL} alt={`${BRAND} logo`} className="h-16 w-auto md:h-20" />
          ) : (
            <>
              <Building2 className="h-6 w-6" />
              <span>{BRAND}</span>
            </>
          )}
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-gray-900">
              {n.label}
            </a>
          ))}
          <a href={telHref(PHONE)}>
            <Button variant="outline" className="rounded-xl">Call Now</Button>
          </a>
          {(BOOKING_URL ? (
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              <Button className="rounded-xl">Book Online</Button>
            </a>
          ) : (
            <a href="#contact">
              <Button className="rounded-xl">Book Online</Button>
            </a>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Section>
      {open && (
        <div className="border-t bg-white md:hidden">
          <Section className="py-2">
            <div className="flex flex-col gap-2">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={()=>setOpen(false)}>
                  {n.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-2">
                <a href={telHref(PHONE)} onClick={()=>setOpen(false)}>
                  <Button variant="outline" className="w-full rounded-xl">Call</Button>
                </a>
                <a href={(BOOKING_URL || "#contact")} onClick={()=>setOpen(false)}>
                  <Button className="w-full rounded-xl">Book</Button>
                </a>
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-400/30 to-emerald-300/30 blur-3xl" />
      <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-300/30 to-sky-300/30 blur-3xl" />
      <Section className="py-16 md:py-24 grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge className="mb-4 rounded-full px-3 py-1" variant="secondary">
            <span className="inline-flex items-center gap-2 text-xs"><ShieldCheck className="h-4 w-4"/> Fully insured & bonded</span>
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {TAGLINE}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Residential & commercial cleaning, pressure washing, gutter cleaning, Airbnb turnovers, post‑reno cleanup, and light renovations.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={telHref(PHONE)}><Button size="lg" className="rounded-xl">Call Now ({PHONE})</Button></a>
            {(BOOKING_URL ? (
              <a href={BOOKING_URL} target="_blank" rel="noreferrer"><Button size="lg" variant="outline" className="rounded-xl">Book Online</Button></a>
            ) : (
              <a href="#contact"><Button size="lg" variant="outline" className="rounded-xl">Book Online</Button></a>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1"><Star className="h-4 w-4"/> 4.9/5 service rating</span>
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4"/> Flexible scheduling</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4"/> Satisfaction guaranteed</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-gradient-to-br from-white to-gray-50 shadow-xl">
            <img
              alt="Bright Space Services crew cleaning windows and interiors"
              src="https://images.unsplash.com/photo-1581578017426-62f692587af4?q=80&w=1600&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white">
              <p className="text-sm">Serving {SERVICE_AREAS.slice(0, -1).join(", ")} & {SERVICE_AREAS.slice(-1)}</p>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

function Services() {
  return (
    <Section id="services" className="py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="mt-3 text-gray-600">Your Space. Our Shine. A complete suite for homes, businesses, and rentals.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
            <Card className="rounded-2xl h-full">
              <CardHeader className="space-y-2">
                <IconBubble>{f.icon}</IconBubble>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2 text-sm text-gray-700">
                  {f.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function WhyUs() {
  const points = [
    { title: "Fully insured & bonded", desc: "Peace of mind on every job.", icon: <ShieldCheck className="h-5 w-5"/> },
    { title: "Local Burnaby team", desc: "Fast response across the Tri‑Cities.", icon: <Building2 className="h-5 w-5"/> },
    { title: "Flexible scheduling", desc: "Evenings, weekends, and rush options.", icon: <Calendar className="h-5 w-5"/> },
    { title: "Satisfaction guaranteed", desc: "Not satisfied? We’ll return within 72 hours — free.", icon: <Sparkles className="h-5 w-5"/> },
  ];
  return (
    <Section id="why-us" className="py-16">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why choose {BRAND}?</h3>
          <p className="mt-3 text-gray-600">Meticulous workmanship, clear communication, and friendly pros. Every job is documented and guaranteed.</p>
          <div className="mt-6 space-y-4">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <IconBubble>{p.icon}</IconBubble>
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#contact"><Button className="rounded-xl">Book an Inspection <ArrowRight className="ml-2 h-4 w-4"/></Button></a>
            <a href="#pricing"><Button variant="outline" className="rounded-xl">See Packages</Button></a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border shadow-xl">
            <img alt="Before and after pressure washing" src="https://images.unsplash.com/photo-1597007066917-5f9c5f6d1a38?q=80&w=1600&auto=format&fit=crop" className="h-full w-full object-cover"/>
          </div>
          <Badge className="absolute -bottom-3 left-6 rounded-xl px-3 py-1">Before → After</Badge>
        </div>
      </div>
    </Section>
  );
}

function Estimator() {
  const [bedrooms, setBedrooms] = React.useState(2);
  const [bathrooms, setBathrooms] = React.useState(1);
  const [windows, setWindows] = React.useState(10);
  const [sqftDrive, setSqftDrive] = React.useState(0);
  const [addons, setAddons] = React.useState({ gutter: false, turnover: false, postreno: false, materials: 0 });

  // Pricing model
  const BASE_VISIT = 119;
  const BEDROOM_RATE = 35;
  const BATH_RATE = 50;
  const WINDOW_RATE = 8;
  const GUTTER_BASE = 180;
  const PRESSURE_PER_SQFT = 0.25;
  const TURNOVER_FEE = bedrooms * 35 + bathrooms * 50;
  const POST_RENO_MULT = 1.4;

  const baseCleaning = BASE_VISIT + bedrooms * BEDROOM_RATE + bathrooms * BATH_RATE + windows * WINDOW_RATE * 0.15;
  const pressure = sqftDrive * PRESSURE_PER_SQFT;
  const gutter = addons.gutter ? GUTTER_BASE : 0;
  const turnover = addons.turnover ? TURNOVER_FEE : 0;

  let subtotal = baseCleaning + pressure + gutter + turnover;
  if (addons.postreno) subtotal *= POST_RENO_MULT;
  subtotal += Number(addons.materials) || 0;

  // Taxes: GST always, PST for pressure/gutters/materials/post-reno portion
  const pstBase = pressure + gutter + (Number(addons.materials) || 0) + (addons.postreno ? (subtotal - (Number(addons.materials)||0)) * 0.0 : 0);
  const gst = subtotal * GST_RATE;
  const pst = pstBase * PST_RATE;
  const total = Math.round((subtotal + gst + pst) * 100) / 100;

  return (
    <Section id="estimator" className="py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Instant Estimate</h3>
        <p className="mt-2 text-gray-600">Enter details for a rough price. Taxes follow BC rules (GST + PST where applicable).</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Inputs */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Your Space</CardTitle>
            <CardDescription>Adjust inputs to see pricing update.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm">Bedrooms
                <Input type="number" min={0} value={bedrooms} onChange={e=>setBedrooms(parseInt(e.target.value||"0"))} />
              </label>
              <label className="text-sm">Bathrooms
                <Input type="number" min={0} value={bathrooms} onChange={e=>setBathrooms(parseInt(e.target.value||"0"))} />
              </label>
            </div>
            <label className="text-sm">Windows (rough count)
              <Input type="number" min={0} value={windows} onChange={e=>setWindows(parseInt(e.target.value||"0"))} />
            </label>
            <label className="text-sm">Driveway / Walkway sq ft (for pressure washing)
              <Input type="number" min={0} value={sqftDrive} onChange={e=>setSqftDrive(parseInt(e.target.value||"0"))} />
            </label>
            <div className="grid gap-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-sky-600" checked={addons.gutter} onChange={e=>setAddons(a=>({...a,gutter:e.target.checked}))} />
                Add Gutter Cleaning
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-sky-600" checked={addons.turnover} onChange={e=>setAddons(a=>({...a,turnover:e.target.checked}))} />
                Airbnb Turnover (with laundry)
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-sky-600" checked={addons.postreno} onChange={e=>setAddons(a=>({...a,postreno:e.target.checked}))} />
                Post‑Reno / Post‑Construction detail
              </label>
              <label className="text-sm">Materials you supply ($)
                <Input type="number" min={0} value={addons.materials} onChange={e=>setAddons(a=>({...a,materials:parseFloat(e.target.value||"0")}))} />
              </label>
            </div>
          </CardContent>
        </Card>
        {/* Output */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Estimated Price (CAD)</CardTitle>
            <CardDescription>Competitive rates — GST + PST as applicable.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex justify-between"><span>Base cleaning</span><span>${baseCleaning.toFixed(2)}</span></li>
              <li className="flex justify-between"><span>Driveway/Walk pressure</span><span>${pressure.toFixed(2)}</span></li>
              <li className="flex justify-between"><span>Gutter cleaning</span><span>${gutter.toFixed(2)}</span></li>
              <li className="flex justify-between"><span>Airbnb turnover</span><span>${turnover.toFixed(2)}</span></li>
              <li className="flex justify-between"><span>Materials</span><span>${(Number(addons.materials)||0).toFixed(2)}</span></li>
              {addons.postreno && <li className="flex justify-between"><span>Post‑reno multiplier</span><span>× {1.4}</span></li>}
              <li className="flex justify-between border-t pt-2"><span>GST (5%)</span><span>${gst.toFixed(2)}</span></li>
              <li className="flex justify-between"><span>PST (7% on applicable)</span><span>${pst.toFixed(2)}</span></li>
            </ul>
            <div className="mt-4 flex items-baseline justify-between">
              <p className="text-xl font-semibold">Total</p>
              <p className="text-3xl font-bold">${total.toFixed(2)}</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <a href={BOOKING_URL || "#contact"}><Button className="w-full rounded-xl">Request Formal Quote</Button></a>
              <a href={telHref(PHONE)}><Button variant="outline" className="w-full rounded-xl">Call {PHONE}</Button></a>
            </div>
            <p className="mt-3 text-xs text-gray-500">Estimates assume average condition & access. GST always included; PST only on applicable services/materials per BC rules.</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="pricing" className="py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, honest pricing</h3>
        <p className="mt-3 text-gray-600">Get a fast estimate now and lock in your preferred date. Final quote after quick assessment.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <Card key={i} className={`rounded-2xl ${t.popular ? "ring-2 ring-sky-500" : ""}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t.name}</CardTitle>
                {t.popular && <Badge className="rounded-xl">Popular</Badge>}
              </div>
              <CardDescription>{t.desc}</CardDescription>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4"/>{f}</li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <a href={BOOKING_URL || "#contact"}><Button className="w-full rounded-xl">{t.cta}</Button></a>
                <a href={telHref(PHONE)}><Button variant="outline" className="w-full rounded-xl">Call</Button></a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-gray-600">Add‑ons: Pressure washing • Gutter cleaning • Painting • Drywall • Flooring</p>
    </Section>
  );
}

function Gallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
  ];
  return (
    <Section id="gallery" className="py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Recent work</h3>
          <p className="text-gray-600">Before/after highlights from our crews.</p>
        </div>
        <Badge className="rounded-xl">100% Real Projects</Badge>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {imgs.map((src, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl border">
            <img src={src} alt={`Project ${i+1}`} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ServiceArea() {
  return (
    <Section id="service-area" className="py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Service Area</h3>
        <p className="mt-2 text-gray-600">We proudly serve:</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {SERVICE_AREAS.map((c) => (
            <Badge key={c} className="rounded-xl" variant="secondary">{c}</Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  const items = [
    { name: "Alexandra P.", text: "Our office looks brand new after their deep clean. Fast, friendly, meticulous!", rating: 5 },
    { name: "Jordan R.", text: "Gutters were overflowing — fixed the same day and sent photos.", rating: 5 },
    { name: "Priya S.", text: "Post‑reno cleanup was flawless. You can't even tell there was dust.", rating: 5 },
  ];
  return (
    <Section className="py-16">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Customers love us</h3>
        <p className="mt-2 text-gray-600">We treat every property like it's our own.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                {Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="h-4 w-4"/>))}
              </div>
              <CardTitle className="text-lg">{t.name}</CardTitle>
              <CardDescription>Verified review</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">“{t.text}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FAQ() {
  return (
    <Section className="py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-center">Frequently asked questions</h3>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="py-20">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Get your free quote</h3>
          <p className="mt-3 text-gray-600">Tell us about your space and the services you’re interested in. We’ll respond promptly.</p>
          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> {PHONE}</p>
            <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> {EMAIL}</p>
            <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> {SERVICE_AREAS.join(", ")}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Business Hours</CardTitle>
                <CardDescription>Mon–Sat • 8:00–6:00</CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Emergency Service</CardTitle>
                <CardDescription>Storm & leak response</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Request a Quote</CardTitle>
            <CardDescription>We’ll follow up with a tailored estimate.</CardDescription>
          </CardHeader>
          <CardContent>
            {FORMSPREE_ENDPOINT ? (
              <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">Name</label>
                    <Input name="name" required placeholder="Jane Doe"/>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">Phone</label>
                    <Input name="phone" type="tel" required placeholder={PHONE}/>
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <Input name="email" type="email" required placeholder="you@example.com"/>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Address (optional)</label>
                  <Input name="address" placeholder="123 Main St"/>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Services</label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[
                      "Residential/Commercial Cleaning",
                      "Pressure Washing",
                      "Gutter Cleaning",
                      "Airbnb Turnover",
                      "Post‑Reno / Post‑Construction",
                      "Light Renovations (Paint/Drywall/Flooring)",
                    ].map((s) => (
                      <label key={s} className="flex items-center gap-2 rounded-xl border p-2 text-sm">
                        <input name="services" value={s} type="checkbox" className="accent-sky-600"/> {s}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Notes</label>
                  <Textarea name="notes" rows={4} placeholder="Tell us about your project…"/>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button type="submit" className="w-full rounded-xl">Send Request</Button>
                  <a href={telHref(PHONE)} className="w-full"><Button type="button" variant="outline" className="w-full rounded-xl">Call Now</Button></a>
                </div>
                <p className="text-xs text-gray-500">By submitting, you agree to our terms and privacy policy.</p>
              </form>
            ) : (
              <div>
                <p className="text-sm text-gray-600">To enable live form submissions, set <code>FORMSPREE_ENDPOINT</code> at the top (e.g., <code>https://formspree.io/f/xyz</code>). Until then, use the Call or Book buttons.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t bg-gray-50">
      <Section className="py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2 font-semibold">
              {LOGO_URL ? <img src={LOGO_URL} alt={`${BRAND} logo`} className="h-6 w-auto"/> : <Building2 className="h-6 w-6" />}
              <span>{BRAND}</span>
            </a>
            <p className="mt-3 text-sm text-gray-600">Residential & commercial cleaning, pressure washing, gutter cleaning, Airbnb turnovers, post‑reno cleanup, and light renovations.</p>
          </div>
          <div>
            <p className="font-medium">Company</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a href="#why-us">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Services</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              {services.slice(0,6).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium">Contact</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> {PHONE}</li>
              <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> {EMAIL}</li>
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> {SERVICE_AREAS.join(", ")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default function CleaningCompanySite() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Estimator />
      <Pricing />
      <Gallery />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <a href={telHref(PHONE)} className="fixed bottom-6 right-6 hidden md:block">
        <Button size="lg" className="rounded-full shadow-xl">
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Call {PHONE}</span>
        </Button>
      </a>
    </div>
  );
}
