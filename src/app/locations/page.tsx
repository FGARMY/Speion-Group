import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";
import { MapPin, Building2, Code2 } from "lucide-react";

export const metadata = pageMetadata({
  title: "Software Development Locations in Pune, Nashik & Maharashtra | Speion",
  description: "Explore Speion's software development offices and local services in Pune, Nashik, and Maharashtra. We build custom software, mobile apps, ERP systems, and enterprise solutions.",
  pathname: "/locations",
  keywords: [
    "software development locations Maharashtra",
    "software development company Nashik",
    "software development company Pune",
    "custom software development Maharashtra",
    "local software development services India",
  ],
});

const locations = [
  {
    title: "Nashik Software Development",
    subtitle: "Local Nashik expertise for manufacturing, logistics, and startups.",
    href: "/locations/software-development-nashik",
    icon: MapPin,
  },
  {
    title: "Pune Software Development",
    subtitle: "Pune-based engineering for fintech, SaaS, and enterprise projects.",
    href: "/locations/software-development-pune",
    icon: Building2,
  },
  {
    title: "Maharashtra Software Development",
    subtitle: "State-wide digital transformation through custom software and ERP solutions.",
    href: "/locations/software-development-maharashtra",
    icon: Code2,
  },
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <section className="pt-32 pb-16 px-4 sm:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-500 font-bold mb-4">Software Development Locations</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Software Development Services in <span className="text-teal-400">Pune</span>, <span className="text-teal-400">Nashik</span> and <span className="text-teal-400">Maharashtra</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Speion delivers local software development expertise across Maharashtra with dedicated teams for custom software, mobile app, ERP, and enterprise development.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {locations.map((location) => {
              const Icon = location.icon;
              return (
                <Link
                  key={location.title}
                  href={location.href}
                  className="group block rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg shadow-slate-200/40 dark:shadow-slate-900/40 transition hover:-translate-y-2"
                >
                  <div className="mb-6 w-14 h-14 rounded-3xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-300 flex items-center justify-center">
                    <Icon size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{location.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{location.subtitle}</p>
                  <span className="text-sm font-semibold text-teal-600 dark:text-teal-300">Explore {location.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
