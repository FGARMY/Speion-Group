import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Globe, Server, Smartphone, Zap } from "lucide-react";

export const metadata = {
  title: "Web Development Services in Pune & Nashik | Speion",
  description: "Speion builds highly scalable, SEO-optimized web applications and enterprise websites using React, Next.js, and Node.js. Partner with Pune's top software agency.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            <Globe size={14} className="text-teal-300" />
            Web Development
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            High-Performance <span className="text-teal-300">Web Applications</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            We engineer fast, secure, and SEO-optimized web experiences that scale to millions of users. Built with modern frameworks like Next.js, React, and Node.js.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "React & Next.js", desc: "Server-side rendered web apps that rank high on Google and load in milliseconds.", icon: <Zap size={24} /> },
              { title: "Custom Backend APIs", desc: "Robust microservices built with Node.js, Python, or Go to power your business logic.", icon: <Server size={24} /> },
              { title: "Responsive Design", desc: "Flawless user experiences across all devices, from mobile phones to 4K desktop monitors.", icon: <Smartphone size={24} /> },
            ].map((feat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl group hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{feat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-20 px-4 sm:px-6 bg-slate-100 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Why Choose Speion for Web Development?</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "99.99% Uptime Guarantee",
              "Sub-second Page Load Times",
              "Advanced SEO & GEO Optimization",
              "Enterprise-Grade Security",
              "Scalable Cloud Architecture",
              "Dedicated Maintenance & Support"
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-teal-500 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{benefit}</span>
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
