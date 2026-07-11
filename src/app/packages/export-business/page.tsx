import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Globe, ArrowRight, CheckCircle2, TrendingUp, Users, Target, Shield, Rocket } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiGoogleanalytics } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Export Business Package | Global Trade Digitalization | Speion",
  description: "Complete technical package for Export Businesses including Premium Website, Product Catalogue, International SEO, and WhatsApp Integrations.",
  pathname: "/packages/export-business",
});

export default function ExportBusinessPackage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Globe size={14} className="text-rose-600 dark:text-rose-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Business Package</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Export Business <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-500 dark:to-orange-400">
                Digitalization
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Transform your local manufacturing or trading operation into a global export powerhouse. A complete digital suite to attract international buyers, showcase products, and manage inquiries seamlessly.
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Built for Global <span className="text-rose-500">Reach</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                International B2B buyers judge your credibility in seconds based on your digital presence. This package is specifically engineered for manufacturers, traders, and export houses looking to establish overwhelming trust and capture global leads.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Rank Globally</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">International SEO optimizations ensure you rank in buyer countries.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Users size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Trust & Credibility</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Premium UI/UX design to match international corporate standards.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Ideal For:</h3>
               <ul className="space-y-4 relative z-10">
                 {['Manufacturing Units expanding globally', 'Agricultural Exporters & Traders', 'Textile & Garment Export Houses', 'Handicraft & Artisan Exporters', 'B2B Wholesale Distributors'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <Target size={18} className="text-rose-500 shrink-0" /> {item}
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">What's Included</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to operate a modern export business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Globe className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Premium Corporate Website</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">A lightning-fast, high-converting corporate website built on Next.js. Optimized for international loading speeds and strictly adhering to global design standards.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['About Us & History', 'Infrastructure Showcase', 'Certifications & Compliance', 'Interactive Global Presence Map'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-rose-500"/> {f}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Target className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Digital Product Catalogue</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Manage your entire inventory online with high-res images, specs, and downloadable PDFs.</p>
              <div className="text-sm font-semibold text-rose-600 dark:text-rose-400">Includes Custom Admin Panel</div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Shield className="w-10 h-10 text-rose-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Lead Generation CRM</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Never lose an inquiry. All contact form submissions are routed to a centralized dashboard.</p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Omnichannel Communication</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Direct integrations to help international buyers reach you instantly.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><FaWhatsapp className="text-green-500" size={20}/> WhatsApp Business API Integration</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><Globe className="text-blue-500" size={20}/> Professional Workspace Email Setup (e.g. sales@yourdomain.com)</li>
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Powered by Enterprise Tech</h2>
            <p className="text-slate-600 dark:text-slate-400">We don't use slow WordPress templates. We use modern, scalable frameworks.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', icon: SiNextdotjs, color: '' },
              { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Global Edge CDN', icon: SiVercel, color: '' },
              { name: 'Analytics', icon: SiGoogleanalytics, color: '#F9AB00' }
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
            <p className="text-lg text-slate-600 dark:text-slate-400">From kickoff to going live globally in just 4 weeks.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { week: "Week 1", title: "Brand Identity & Architecture", desc: "We map out your product categories, collect high-res imagery, and finalize the UI/UX design." },
              { week: "Week 2", title: "Frontend Development", desc: "Building the custom Next.js frontend, ensuring mobile responsiveness and fast load times." },
              { week: "Week 3", title: "CMS & CRM Integration", desc: "Connecting the product catalogue database and setting up the lead management dashboard." },
              { week: "Week 4", title: "SEO, Testing & Launch", desc: "Applying international SEO tags, setting up professional emails, and deploying to global edge servers." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 shrink-0 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-sm text-center">
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
