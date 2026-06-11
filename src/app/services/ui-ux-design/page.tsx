import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Layout, PenTool, Palette } from "lucide-react";

export const metadata = {
  title: "UI/UX Design Services | Speion Software Development",
  description: "User-centric UI/UX design that drives conversions. We design intuitive, modern, and beautiful interfaces for web and mobile applications.",
};

export default function UIUXPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            <Layout size={14} className="text-teal-300" />
            UI/UX Design
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Design that Drives <span className="text-teal-300">Conversions</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            A beautiful product is nothing if it isn't usable. We combine striking visual aesthetics with deep user research to create interfaces that users love.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "User Research & Strategy", desc: "We map out user journeys, conduct interviews, and define the core problem before drawing a single pixel.", icon: <PenTool size={24} /> },
              { title: "Wireframing & Prototyping", desc: "Rapid prototyping in Figma allows us to test concepts and workflows early in the development lifecycle.", icon: <Palette size={24} /> },
              { title: "Design Systems", desc: "We build comprehensive, scalable design systems ensuring brand consistency across all digital touchpoints.", icon: <Layout size={24} /> },
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">Our Design Approach</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Data-Driven Design Decisions",
              "Accessibility (WCAG) Compliance",
              "Mobile-First Philosophy",
              "Interactive Micro-Animations",
              "A/B Testing Support",
              "Developer-Ready Asset Handoff"
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
