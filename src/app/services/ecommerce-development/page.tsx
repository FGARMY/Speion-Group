import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ShoppingBag, Zap, CreditCard, Layers, Truck, ShieldCheck, ArrowRight, BarChart3 } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Headless E-Commerce Development Services | Next.js Storefronts | Speion",
  description: "Speion engineers ultra-fast headless e-commerce platforms, custom Shopify Plus storefronts, and high-converting checkout funnels with sub-second page loads.",
  pathname: "/services/ecommerce-development",
});

export default function EcommerceDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-amber-500/30">
      <ServicePageSchema
        serviceName="E-Commerce Development"
        serviceDescription="Speion engineers ultra-fast headless e-commerce platforms, custom Shopify Plus storefronts, and high-converting checkout funnels with sub-second page loads."
        pathname="/services/ecommerce-development"
        faqs={[
          { question: "Why choose headless e-commerce over standard Shopify or WooCommerce?", answer: "Standard monolithic platforms suffer from slow load times and rigid templates that hurt conversion rates. A headless Next.js frontend delivers sub-second page transitions, 100/100 Core Web Vitals, custom checkout flows, and up to 35% higher conversions while retaining Shopify or Medusa for backend inventory." },
          { question: "What payment gateways do you integrate?", answer: "We integrate all leading domestic and international gateways: Razorpay, Stripe, Cashfree, PayU, PayPal, Apple Pay, Google Pay, and UPI auto-pay with one-click checkout flows." },
          { question: "Can Speion migrate my existing online store without losing SEO rankings?", answer: "Yes. We execute seamless 1:1 URL 301 redirect mapping, preserve canonical structures, migrate all customer and order history, and ensure zero downtime during domain DNS cutover." },
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-rose-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
            <ShoppingBag size={14} className="text-amber-600 dark:text-amber-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Commerce Engineering</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
            Ultra-Fast Headless <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600">
              E-Commerce Stores
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Every second of page delay slashes conversion rates by 7%. Speion engineers blazing-fast headless commerce platforms with Next.js, frictionless 1-click checkouts, and automated inventory sync built to scale to thousands of orders an hour.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 hover:scale-105 transition-all shadow-lg shadow-amber-600/25">
              Launch Your Store
            </Link>
            <a 
              href="https://wa.me/917758866318?text=Hi%20Speion%2C%20I%20want%20to%20build%20a%20custom%20ecommerce%20store." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold hover:border-slate-400 transition-all"
            >
              Consult an E-Commerce Specialist
            </a>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[40vh] md:h-[55vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group">
            <Image 
              src="/services/web.png" 
              alt="Custom E-Commerce Platform" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">Conversion Architecture</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold mt-2">Next.js Headless Speed with Sub-Second Instant Cart</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="py-20 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Built for High GMV Scaling
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Everything required to maximize average order value (AOV) and customer lifetime value (LTV).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Headless Next.js Storefront",
                desc: "Decoupled frontends that load product catalogs instantaneously, eliminating sluggish page reloads and bounce rates.",
                icon: <Zap size={24} className="text-amber-600" />,
              },
              {
                title: "Optimized 1-Page Checkout",
                desc: "Streamlined checkout funnels with automatic address completion, OTP login, and friction-free payment flows.",
                icon: <CreditCard size={24} className="text-orange-600" />,
              },
              {
                title: "Real-Time Inventory & ERP Sync",
                desc: "Live synchronization across Shopify, Amazon, Flipkart, warehouse ERPs, and physical POS retail counters.",
                icon: <Truck size={24} className="text-rose-600" />,
              },
              {
                title: "Personalized Recommendation Engine",
                desc: "AI-driven product recommendations and bundle upsells that systematically increase average cart size.",
                icon: <BarChart3 size={24} className="text-purple-600" />,
              },
              {
                title: "Multi-Currency & Internationalization",
                desc: "Automatic currency conversion, localized tax calculations (GST/VAT), and multi-lingual storefronts.",
                icon: <Layers size={24} className="text-blue-600" />,
              },
              {
                title: "Enterprise PCI-DSS Security",
                desc: "Tokenized payment gateways, strict SSL encryption, and fraud prevention filters safeguarding transaction data.",
                icon: <ShieldCheck size={24} className="text-emerald-600" />,
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
