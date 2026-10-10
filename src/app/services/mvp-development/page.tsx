import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Rocket, Zap, ShieldCheck, Code2, Users, DollarSign, ArrowRight, Clock } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Startup MVP Development Services | Launch in 4 Weeks | Speion",
  description: "Speion builds investor-ready Minimum Viable Products (MVPs) for founders in 30 days. Scalable Next.js architectures, authentication, payments, and clean code.",
  pathname: "/services/mvp-development",
});

export default function MvpDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <ServicePageSchema
        serviceName="MVP Development"
        serviceDescription="Speion builds investor-ready Minimum Viable Products (MVPs) for founders in 30 days. Scalable Next.js architectures, authentication, payments, and clean code."
        pathname="/services/mvp-development"
        faqs={[
          { question: "How fast can Speion build and launch an MVP?", answer: "Our standard sprint timeline is 4 to 6 weeks from initial scope lockdown to live production release. We focus strictly on the top 20% of core features that deliver 80% of client value to get you in front of real users fast." },
          { question: "Will the MVP need to be rewritten when we raise funding?", answer: "No. Unlike agencies that cut corners with low-code tools, we engineer every MVP with production-ready Next.js, TypeScript, and PostgreSQL. It is clean, modular, and built to scale seamlessly from 100 users to 100,000 users without rewriting." },
          { question: "How much does MVP development cost?", answer: "Our fixed-scope startup MVP packages start from ₹75,000 to ₹2,50,000 ($1,500 to $3,500 USD). This includes complete UI/UX prototyping, full-stack development, database architecture, authentication, and payment gateway integration." },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <Rocket size={14} className="text-rose-600 dark:text-rose-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Startup Acceleration</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
            From Idea to Market <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-500 to-orange-500">
              in 30 Days
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Stop wasting months in development limbo. Speion acts as your elite fractional CTO and engineering team, delivering investor-grade Minimum Viable Products built to capture traction, acquire early revenue, and secure venture capital.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 hover:scale-105 transition-all shadow-lg shadow-rose-600/25">
              Launch Your MVP
            </Link>
            <a 
              href="https://wa.me/917758866318?text=Hi%20Speion%2C%20I%20have%20a%20startup%20idea%20and%20want%20to%20scope%20an%20MVP." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold hover:border-slate-400 transition-all"
            >
              Get a 24-Hour Scope & Quote
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
              alt="Startup MVP Architecture" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-rose-400">Production-Ready Foundation</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-2">Next.js 16 + Supabase + Stripe Built to Scale</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              What Every Speion MVP Includes
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Everything required to onboard users, process payments, and validate your hypothesis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strict 4-Week Delivery",
                desc: "Weekly milestones with interactive preview deployments so you always see exactly what is built without surprises.",
                icon: <Clock size={24} className="text-rose-600" />,
              },
              {
                title: "Authentication & User Management",
                desc: "Social OAuth (Google, GitHub), magic links, multi-factor auth, and role-based permissions ready on day one.",
                icon: <Users size={24} className="text-orange-600" />,
              },
              {
                title: "Payment Gateway Integration",
                desc: "Monetize immediately with Stripe Subscriptions, Razorpay, or webhook-driven automated billing cycles.",
                icon: <DollarSign size={24} className="text-emerald-600" />,
              },
              {
                title: "Clean Modular TypeScript",
                desc: "Zero technical debt. Beautifully structured codebases that in-house developers or investors will love reading.",
                icon: <Code2 size={24} className="text-blue-600" />,
              },
              {
                title: "Admin Analytics Dashboard",
                desc: "Monitor signups, active users, churn rates, and revenue metrics directly from a private administrative panel.",
                icon: <Zap size={24} className="text-purple-600" />,
              },
              {
                title: "100% IP & Code Ownership",
                desc: "Full transfer of all GitHub repositories, cloud credentials, Figma design files, and documentation upon completion.",
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
