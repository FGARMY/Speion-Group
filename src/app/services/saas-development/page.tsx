import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Cloud, Server, ShieldCheck, CreditCard, Users, Zap, ArrowRight, Layers } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "SaaS Product Development Services | Cloud Software Engineering | Speion",
  description: "Speion engineers scalable B2B and B2C SaaS platforms with multi-tenant database architectures, automated subscription billing, and 99.9% uptime.",
  pathname: "/services/saas-development",
});

export default function SaasDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-blue-500/30">
      <ServicePageSchema
        serviceName="SaaS Development"
        serviceDescription="Speion engineers scalable B2B and B2C SaaS platforms with multi-tenant database architectures, automated subscription billing, and 99.9% uptime."
        pathname="/services/saas-development"
        faqs={[
          { question: "How does Speion handle multi-tenancy in SaaS applications?", answer: "Depending on your enterprise compliance requirements, we engineer tenant isolation using either row-level security (RLS) with dedicated tenant schemas, or segregated database instances. This ensures airtight data privacy between your enterprise clients." },
          { question: "Can Speion integrate automated recurring billing and tax compliance?", answer: "Yes. We integrate Stripe Billing, Paddle, or Razorpay Subscriptions with automated invoicing, localized GST/VAT handling, dunning management for failed payments, and self-serve upgrade/downgrade portals." },
          { question: "What is the typical timeline and cost to build a SaaS platform?", answer: "A production SaaS MVP ready for commercial beta takes 8 to 12 weeks, typically ranging from ₹2,00,000 to ₹6,00,000+ ($3,000 to $8,000 USD). Full-scale enterprise SaaS platforms with microservices and advanced integrations take 3 to 6 months with milestone billing." },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <Cloud size={14} className="text-blue-600 dark:text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Cloud Architecture</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
            High-Throughput <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
              SaaS Platforms
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Build software that scales effortlessly from your first 10 customers to millions in ARR. Speion engineers resilient multi-tenant SaaS products with airtight security, automated billing, and microsecond query latency.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-600/25">
              Engineer Your SaaS Platform
            </Link>
            <a 
              href="https://wa.me/917758866318?text=Hi%20Speion%2C%20I%20want%20to%20build%20a%20scalable%20SaaS%20application." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold hover:border-slate-400 transition-all"
            >
              Consult with SaaS Architect
            </a>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[40vh] md:h-[55vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group">
            <Image 
              src="/services/software.png" 
              alt="Custom SaaS Platform Dashboard" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-blue-400">Enterprise Multi-Tenancy</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-2">Zero-Leakage Tenant Segregation & 99.9% Cloud Uptime</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Enterprise SaaS Architecture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Engineered to support rapid feature velocity without architectural technical debt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Airtight Multi-Tenancy",
                desc: "PostgreSQL Row-Level Security (RLS) and schema-isolated multi-tenancy safeguarding corporate data boundaries.",
                icon: <Server size={24} className="text-blue-600" />,
              },
              {
                title: "Automated Recurring Billing",
                desc: "Turnkey integration with Stripe Billing, Paddle, or Razorpay with tiered pricing, metered usage, and automated dunning.",
                icon: <CreditCard size={24} className="text-emerald-600" />,
              },
              {
                title: "Role-Based Access Control (RBAC)",
                desc: "Granular permissions, team invites, audit logs, and SSO/SAML integration for enterprise IT approval.",
                icon: <Users size={24} className="text-indigo-600" />,
              },
              {
                title: "Scalable Microservices & APIs",
                desc: "Decoupled background workers, event-driven message queues (Redis/Kafka), and public REST/GraphQL APIs.",
                icon: <Layers size={24} className="text-cyan-600" />,
              },
              {
                title: "Zero-Downtime CI/CD",
                desc: "Automated test suites, containerized Docker builds, and rolling blue-green deployments on AWS or Vercel.",
                icon: <Zap size={24} className="text-amber-600" />,
              },
              {
                title: "SOC2 & GDPR Compliance Ready",
                desc: "Data encryption at rest and in transit, comprehensive audit trails, and strict data retention controls.",
                icon: <ShieldCheck size={24} className="text-rose-600" />,
              },
            ].map((cap, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 hover:-translate-y-1.5 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
