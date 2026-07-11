import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Server, ArrowRight, CheckCircle2, TrendingUp, Users, Target, Shield, Rocket, Database, Lock, Code2 } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiNodedotjs, SiPostgresql, SiStripe } from "react-icons/si";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SaaS Startup MVP Package | Speion",
  description: "Complete technical package for building a SaaS MVP including Frontend, Backend, Auth, and Stripe Payments.",
  pathname: "/packages/saas-startup-mvp",
});

export default function SaaSStartupMVPPackage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Server size={14} className="text-blue-600 dark:text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Business Package</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              SaaS Startup MVP <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-indigo-400">
                Architecture
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Stop hacking together templates. Launch a robust, investor-ready Minimum Viable Product built on enterprise-grade architecture. From authentication to Stripe billing, we build the foundation so you can focus on growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience / Business Value */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Built for <span className="text-blue-500">Scale</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Technical debt kills startups before they even find product-market fit. This package delivers a clean, scalable codebase that won't need to be rewritten when you hit your first 10,000 users.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Rocket size={16} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Investor Ready</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Clean architecture and security practices that pass technical due diligence.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp size={16} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Revenue Day One</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Fully integrated Stripe billing handles subscriptions, upgrades, and invoices.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Ideal For:</h3>
               <ul className="space-y-4 relative z-10">
                 {['Pre-Seed & Seed Stage Startups', 'Non-Technical Founders', 'B2B Software Tools', 'AI Wrapper Applications', 'Internal Enterprise Tools'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <Target size={18} className="text-blue-500 shrink-0" /> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features Bento Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">The SaaS Foundation</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to launch a subscription software business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Code2 className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">High-Performance Frontend & Dashboard</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">A blazingly fast Next.js frontend with a custom-designed dashboard for your users to interact with your core features.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Landing Page & Blog', 'User Dashboard Area', 'Responsive Mobile Design', 'State Management (Zustand/Redux)'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-blue-500"/> {f}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Lock className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Auth & Security</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Secure JWT authentication, Social Logins (Google, GitHub), and Password Resets.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Database className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Scalable Database</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">PostgreSQL database schema design, ORM integration (Prisma/Drizzle), and API routes.</p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Stripe Billing Integration</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Monetize instantly with a fully configured Stripe billing portal.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20}/> Subscription Tiers & One-Time Payments</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-indigo-500" size={20}/> Webhooks for automated upgrades/downgrades</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6 bg-slate-100 dark:bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Modern Cloud Architecture</h2>
            <p className="text-slate-600 dark:text-slate-400">Built on the same technology stack powering the world's most successful startups.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Next.js', icon: SiNextdotjs, color: '' },
              { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
              { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
              { name: 'Stripe', icon: SiStripe, color: '#008CDD' }
            ].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="group py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-default">
                  <Icon 
                    className="w-6 h-6 text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                    style={{ '--hover-color': tech.color || 'currentColor' } as React.CSSProperties}
                  />
                  <span className="hidden md:inline">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Delivery Timeline</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Launch your MVP in 6-8 weeks, depending on core feature complexity.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { week: "Weeks 1-2", title: "Architecture & Database Design", desc: "We map out the data models, design the system architecture, and setup the development environments." },
              { week: "Weeks 3-5", title: "Core Feature Development", desc: "Building the Next.js frontend, integrating APIs, and implementing the core business logic of your SaaS." },
              { week: "Week 6", title: "Auth & Stripe Integration", desc: "Securing the application and implementing the billing portal and payment webhooks." },
              { week: "Weeks 7-8", title: "QA & Cloud Deployment", desc: "Rigorous testing, setting up CI/CD pipelines, and deploying to production." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 shrink-0 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm text-center">
                  {step.week}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
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
