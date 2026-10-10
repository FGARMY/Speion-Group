import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Building2, Stethoscope, Landmark, ShoppingBag, Globe, Server, ArrowRight, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Industry Solutions & Domain Expertise | Speion",
  description: "Explore Speion's specialized software engineering expertise across FinTech, Healthcare, E-Commerce, Real Estate, Manufacturing, and SaaS startups.",
  pathname: "/industries",
});

const INDUSTRIES = [
  {
    title: "FinTech & Banking",
    category: "Financial Services",
    desc: "PCI-DSS compliant payment gateways, algorithmic trading dashboards, wallet apps, and high-frequency transaction engines with zero downtime.",
    icon: <Landmark size={28} className="text-indigo-600 dark:text-indigo-400" />,
    href: "/industries/fintech",
    badge: "PCI-DSS Ready",
  },
  {
    title: "Healthcare & Clinic Portals",
    category: "HealthTech",
    desc: "HIPAA-compliant patient portals, doctor appointment scheduling, telemedicine video integrations, and EHR record management.",
    icon: <Stethoscope size={28} className="text-emerald-600 dark:text-emerald-400" />,
    href: "/industries/healthcare",
    badge: "HIPAA Ready",
  },
  {
    title: "E-Commerce & D2C Retail",
    category: "Commerce",
    desc: "Headless Next.js storefronts with sub-second page transitions, one-click checkout funnels, automated cart recovery, and ERP inventory sync.",
    icon: <ShoppingBag size={28} className="text-amber-600 dark:text-amber-400" />,
    href: "/packages/ecommerce-retail",
    badge: "High-Speed Headless",
  },
  {
    title: "Real Estate & PropTech",
    category: "Real Estate",
    desc: "Dynamic property listing directories, interactive maps, broker lead assignment CRMs, virtual tours, and automated WhatsApp inquiry capture.",
    icon: <Building2 size={28} className="text-rose-600 dark:text-rose-400" />,
    href: "/packages/real-estate-agency",
    badge: "Lead Gen Engines",
  },
  {
    title: "Export & International Trade",
    category: "Global Logistics",
    desc: "Multi-currency digital product catalogs, RFQ inquiry workflows, container logistics tracking, and customs compliance documentation.",
    icon: <Globe size={28} className="text-blue-600 dark:text-blue-400" />,
    href: "/packages/export-business",
    badge: "Multi-Currency B2B",
  },
  {
    title: "SaaS & Venture Startups",
    category: "Cloud Tech",
    desc: "Multi-tenant cloud platforms, automated Stripe/Razorpay subscription billing, role-based access control, and 30-day MVP releases.",
    icon: <Server size={28} className="text-purple-600 dark:text-purple-400" />,
    href: "/packages/saas-startup-mvp",
    badge: "30-Day Launch",
  },
];

export default function IndustriesHubPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-rose-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
            <ShieldCheck size={14} className="text-rose-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Domain Expertise</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Tailored Engineering for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600">
              High-Stakes Industries
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Generic software fails complex business requirements. Speion delivers battle-tested architectures engineered specifically for your regulatory standards and market dynamics.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind, idx) => (
              <Link 
                key={idx}
                href={ind.href}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {ind.icon}
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {ind.badge}
                    </span>
                  </div>

                  <span className="text-xs uppercase tracking-widest font-semibold text-rose-600 dark:text-rose-400 block mb-2">
                    {ind.category}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-rose-600 transition-colors">
                    {ind.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors pt-4 border-t border-slate-100 dark:border-slate-800">
                  Explore Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
