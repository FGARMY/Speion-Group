import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Shield, Zap, Globe, Server, ArrowRight } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing | Speion Software Development",
  description: "Transparent, ROI-focused pricing for enterprise web applications, mobile apps, and custom software development.",
  pathname: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Transparent Pricing</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
            An Investment in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-500 dark:to-orange-400">
              Scalable Growth
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            We don't just write code—we build revenue-generating digital infrastructure. Our pricing is structured to deliver massive ROI through high performance, robust security, and zero technical debt.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Website Development */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={80} />
              </div>
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Web Presence</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm h-10">High-performance corporate websites & landing pages.</p>
              </div>
              <div className="mb-8 relative z-10">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Starts at</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-display font-bold text-slate-900 dark:text-white">₹25k</span>
                  <span className="text-rose-500 font-bold text-xl">+</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {[
                  "Custom UI/UX Design",
                  "Mobile Responsive",
                  "SEO Optimized",
                  "Blazing Fast Load Times",
                  "1 Month Support included"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-center hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors relative z-10">
                Request Proposal
              </Link>
            </div>

            {/* AI Automation (Highlight) */}
            <div className="bg-slate-900 dark:bg-slate-950 rounded-[2rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden group transform lg:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-rose-500">
                <Zap size={80} />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-b-lg">
                Most Popular
              </div>
              
              <div className="mb-6 relative z-10 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">AI Automation</h3>
                <p className="text-slate-400 text-sm h-10">Intelligent chatbots, workflow automation & LLM integrations.</p>
              </div>
              <div className="mb-8 relative z-10">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Starts at</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-display font-bold text-white">₹40k</span>
                  <span className="text-rose-500 font-bold text-xl">+</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {[
                  "Custom LLM Integration",
                  "Automated Workflows",
                  "24/7 AI Customer Support",
                  "Data Pipeline Setup",
                  "3 Months Premium Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full py-4 rounded-xl bg-rose-600 text-white font-bold text-center hover:bg-rose-700 transition-colors relative z-10 block shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                Automate Now
              </Link>
            </div>

            {/* Custom Software / Mobile */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server size={80} />
              </div>
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Custom Software</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm h-10">SaaS platforms, Web Apps & Native Mobile Apps.</p>
              </div>
              <div className="mb-8 relative z-10">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Starts at</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-display font-bold text-slate-900 dark:text-white">₹75k</span>
                  <span className="text-rose-500 font-bold text-xl">+</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {[
                  "Complex Business Logic",
                  "Scalable Database Architecture",
                  "User Authentication & RBAC",
                  "API Development & Docs",
                  "Cross-Platform Deployment"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-center hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors relative z-10">
                Build Your App
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield size={80} />
              </div>
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Enterprise</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm h-10">Large-scale ERP/CRM, legacy migration & dedicated teams.</p>
              </div>
              <div className="mb-8 relative z-10">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Pricing</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">Custom Quote</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {[
                  "Dedicated Engineering Team",
                  "Custom SLA Guarantees",
                  "Legacy System Integration",
                  "Enterprise-Grade Security",
                  "24/7 Critical Support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-center hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors relative z-10">
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">Why Invest with Speion?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-rose-600 dark:text-rose-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Zero Tech Debt</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We use modern, typed languages (TypeScript) and proven architectures so your software doesn't break when you scale.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="text-rose-600 dark:text-rose-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Predictable Costs</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">No hidden fees or unexpected maintenance charges. We scope meticulously and deliver exactly what we promise.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-rose-600 dark:text-rose-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Security</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Every line of code is written with security in mind, protecting your user data and your business reputation.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
