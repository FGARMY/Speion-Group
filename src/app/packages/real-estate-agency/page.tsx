import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Blocks, ArrowRight, CheckCircle2, TrendingUp, Users, Target, MapPin, Search, Home } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiGooglemaps } from "react-icons/si";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Real Estate & Agency Package | Speion",
  description: "Complete technical package for Real Estate Agencies including Property Listings, Lead Gen Funnels, and Agent CRM.",
  pathname: "/packages/real-estate-agency",
});

export default function RealEstateAgencyPackage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Blocks size={14} className="text-orange-600 dark:text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Business Package</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Real Estate & Agency <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-amber-400">
                Growth Engine
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Supercharge your property sales with dynamic listings, automated lead funnels, and an integrated CRM built specifically for high-performing real estate teams.
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Capture More <span className="text-orange-500">Leads</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                In real estate, speed to lead is everything. This package replaces static WordPress templates with a dynamic Next.js application that captures buyer intent instantly and routes leads directly to your agents.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp size={16} className="text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">High-Intent Funnels</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Targeted landing pages designed specifically for Facebook and Google Ads traffic.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Search size={16} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Advanced SEO</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Rank for local property searches with dynamically generated property pages.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Ideal For:</h3>
               <ul className="space-y-4 relative z-10">
                 {['Independent Real Estate Brokerages', 'Property Developers & Builders', 'Commercial Real Estate Agencies', 'Vacation Rental Management Cos', 'Lead Generation Affiliates'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <Target size={18} className="text-orange-500 shrink-0" /> {item}
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">The Real Estate Platform</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A unified system for property listings and agent management.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Home className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Dynamic Listings Portal</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">A blazingly fast Next.js property portal. Includes advanced filtering (Price, BHK, Locality) that updates instantly without page reloads.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['High-Res Image Galleries', 'Virtual Tour Integrations', 'Neighbourhood Details', 'Similar Properties Engine'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-orange-500"/> {f}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <MapPin className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Interactive Maps</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Google Maps API integration for location-based search and nearby amenities.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Users className="w-10 h-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Agent CRM</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Assign leads to specific agents and track deal stages within a custom admin panel.</p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Automated Lead Funnels</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Convert casual browsers into qualified leads.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-amber-500" size={20}/> Schedule a Visit / Request Callback forms</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-amber-500" size={20}/> Automated Email Drip Campaigns (Mailchimp/Sendgrid)</li>
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Modern Tech Stack</h2>
            <p className="text-slate-600 dark:text-slate-400">Optimized for heavy image loading and instant search results.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', icon: SiNextdotjs, color: '' },
              { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Google Maps API', icon: SiGooglemaps, color: '#4285F4' },
              { name: 'Edge CDN', icon: SiVercel, color: '' }
            ].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="group py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-default">
                  <Icon 
                    className="w-6 h-6 text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-[var(--hover-color)]"
                    style={{ '--hover-color': tech.color || 'currentColor' } as React.CSSProperties}
                  />
                  <span>{tech.name}</span>
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
            <p className="text-lg text-slate-600 dark:text-slate-400">Launch your real estate portal in 4-5 weeks.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { week: "Week 1", title: "Brand Identity & Property Modeling", desc: "We design the UI/UX and structure the database schema for properties, agents, and leads." },
              { week: "Weeks 2-3", title: "Frontend & Portal Development", desc: "Building the custom Next.js portal, implementing the search filters and Google Maps integration." },
              { week: "Week 4", title: "CRM & Funnel Integration", desc: "Setting up the agent dashboard and connecting lead capture forms to your email/SMS services." },
              { week: "Week 5", title: "SEO Optimization & Launch", desc: "Applying local SEO best practices and deploying to production." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 shrink-0 rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-sm text-center">
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
