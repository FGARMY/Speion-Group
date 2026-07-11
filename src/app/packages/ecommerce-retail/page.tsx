import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Zap, ArrowRight, CheckCircle2, TrendingUp, Users, Target, Shield, ShoppingBag, Box, BarChart } from "lucide-react";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiShopify, SiStripe } from "react-icons/si";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "E-Commerce & Retail Package | Speion",
  description: "Complete technical package for E-Commerce including Custom Storefront, Payment Gateways, and ERP Lite.",
  pathname: "/packages/ecommerce-retail",
});

export default function EcommerceRetailPackage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Zap size={14} className="text-yellow-600 dark:text-yellow-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Business Package</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              E-Commerce & Retail <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-500 dark:from-yellow-500 dark:to-amber-400">
                Digitalization
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              Scale your retail operations with a custom, high-converting digital storefront. We integrate headless commerce with automated fulfillment workflows to maximize your revenue.
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
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Engineered to <span className="text-yellow-500">Convert</span></h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Slow loading times and clunky checkouts cost you sales every single day. This package delivers a sub-second shopping experience designed explicitly to increase your Average Order Value (AOV) and conversion rate.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp size={16} className="text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Higher Conversion Rates</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Lightning-fast Next.js architecture reduces bounce rates drastically.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0 mt-1">
                    <Users size={16} className="text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Seamless Management</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Integrated ERP Lite to manage inventory, orders, and shipping from one dashboard.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Ideal For:</h3>
               <ul className="space-y-4 relative z-10">
                 {['D2C (Direct to Consumer) Brands', 'Local Retailers going online', 'B2B Wholesale Portals', 'Fashion & Apparel Brands', 'Electronics & Hardware Sellers'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                     <Target size={18} className="text-yellow-500 shrink-0" /> {item}
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">The E-Commerce Engine</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Everything you need to sell online at scale.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <ShoppingBag className="w-10 h-10 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Custom Next.js Storefront</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">A fully bespoke, mobile-first shopping experience built specifically for your brand. No restrictive templates.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Advanced Product Filtering', 'Dynamic Cart & Checkout', 'Wishlists & User Accounts', 'SEO Optimized Product Pages'].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle2 size={16} className="text-yellow-500"/> {f}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <Box className="w-10 h-10 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Inventory Management</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Real-time stock tracking and automated alerts when inventory runs low.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
              <BarChart className="w-10 h-10 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Marketing Automations</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Abandoned cart recovery emails and dynamic discount code generation.</p>
            </div>

            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Secure Payment Gateways</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Accept payments from anywhere in the world securely.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-amber-500" size={20}/> Razorpay / Stripe Integration</li>
                  <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium"><CheckCircle2 className="text-amber-500" size={20}/> Support for UPI, Cards, and Net Banking</li>
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
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Headless Commerce Architecture</h2>
            <p className="text-slate-600 dark:text-slate-400">Decoupled architecture for maximum speed and flexibility.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Next.js', icon: SiNextdotjs, color: '' },
              { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
              { name: 'Shopify / Medusa', icon: SiShopify, color: '#7AB55C' },
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
            <p className="text-lg text-slate-600 dark:text-slate-400">From concept to first sale in 4-6 weeks.</p>
          </div>
          
          <div className="space-y-8">
            {[
              { week: "Week 1", title: "Brand Identity & UX Design", desc: "We design the wireframes and high-fidelity mockups of your storefront." },
              { week: "Weeks 2-3", title: "Frontend & Backend Development", desc: "Building the custom Next.js UI and integrating the headless CMS/Commerce engine." },
              { week: "Week 4", title: "Payments & Products", desc: "Setting up the payment gateways and importing your initial product catalogue." },
              { week: "Weeks 5-6", title: "Testing & Launch", desc: "End-to-end testing of the checkout flow and deploying the site to production." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 shrink-0 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center font-bold text-sm text-center">
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
