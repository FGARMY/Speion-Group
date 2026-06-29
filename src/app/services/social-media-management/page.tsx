import Navbar from "@/components/Navbar";
import ServicePageSchema from "@/components/ServicePageSchema";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { CheckCircle2, Megaphone, Target, BarChart, Users, ArrowRight, TrendingUp } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Social Media Management Services | Organic Growth & Ads | Speion",
  description: "Speion drives brand growth through data-driven social media management, viral organic content, and highly targeted ad campaigns.",
  pathname: "/services/social-media-management",
});

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#020617] selection:bg-rose-500/30">
      <ServicePageSchema
        serviceName="Social Media Management"
        serviceDescription="Speion drives brand growth through data-driven social media management, viral organic content, and highly targeted ad campaigns."
        pathname="/services/social-media-management"
        faqs={[
          { question: "What platforms do you manage?", answer: "We manage Instagram, LinkedIn, X (Twitter), Facebook, TikTok, and YouTube. We tailor our strategy to where your specific target audience is most active." },
          { question: "Do you handle content creation?", answer: "Yes, our team handles end-to-end content creation, including graphic design in Figma/Canva, short-form video editing, and professional copywriting." },
          { question: "How do you measure success?", answer: "We track core KPIs depending on your goals: Reach and Engagement for brand awareness, and Click-Through-Rates (CTR) and Cost-Per-Acquisition (CPA) for conversion-driven campaigns. You receive detailed monthly analytics reports." },
        ]}
      />
      <Navbar />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8">
              <Megaphone size={14} className="text-rose-600 dark:text-rose-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Growth Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
              Data-Driven <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500 dark:from-rose-500 dark:to-orange-400">
                Digital Growth
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mb-12">
              We don&apos;t just post; we engineer viral social strategies that dominate algorithms and capture market share. Whether you need explosive organic growth on TikTok and Instagram, or precision-targeted B2B campaigns on LinkedIn that generate high-ticket leads, our expert team manages your entire digital footprint to guarantee a massive return on investment.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Scale Your Brand
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Product Image Showcase */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/50 group bg-slate-900">
            <Image 
              src="/services/social-media.png" 
              alt="Social Media Management Dashboard" 
              fill
              quality={100}
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Bento Grid */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-[2px] bg-rose-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Core Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <TrendingUp className="w-12 h-12 text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Organic Content Strategy</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We craft visually stunning, highly shareable content designed to build undeniable brand loyalty and authority in your niche. Our strategies are aggressively proactive—we adapt to real-time algorithm shifts on LinkedIn, Instagram, and TikTok to ensure your organic reach never stagnates. We turn passive scrollers into active brand advocates through compelling storytelling.
              </p>
              <ul className="space-y-2">
                {['High-Fidelity Graphic Design', 'Short-Form Video Editing (Reels/TikTok)', 'Trend Analysis & Copywriting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <CheckCircle2 size={16} className="text-rose-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Capability 2 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Target className="w-12 h-12 text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Performance Ads</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                We design and execute highly targeted Meta, Google, and LinkedIn ad campaigns optimized for maximum conversion. By leveraging advanced audience segmentation and hyper-specific retargeting pixels, we generate qualified leads at the lowest possible Cost-Per-Acquisition (CPA).
              </p>
            </div>
            
            {/* Capability 3 */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
              <Users className="w-12 h-12 text-rose-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Community Management</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We actively manage your digital ecosystem by engaging with comments, direct messages, and brand mentions within minutes. We transform your social platforms into thriving, highly loyal communities that champion your brand.
              </p>
            </div>
            
            {/* Capability 4 */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
              <BarChart className="w-12 h-12 text-rose-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Advanced Analytics & Reporting</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl relative z-10">
                Data is everything. We provide comprehensive, granular monthly reports detailing audience demographics, engagement velocities, and precise ROI metrics. By continuously A/B testing ad creatives, copy, and posting times, we pivot strategies based on hard statistical evidence rather than guesswork, ensuring your growth curve always trends upward.
              </p>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-rose-500/10 to-transparent rounded-tl-[100%] pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Tool Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">Industry-standard tools for creating, managing, and tracking elite campaigns.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Meta Business Suite', 'LinkedIn Campaign Manager', 'Google Analytics', 'Figma', 'Adobe Premiere Pro', 'Hootsuite', 'HubSpot', 'SEMrush'].map((tech, i) => (
              <div key={i} className="group py-5 px-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-rose-500 hover:text-rose-600 transition-all cursor-default">
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-[2px] bg-rose-600"></div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center">Execution Process</h2>
            <div className="w-12 h-[2px] bg-rose-600"></div>
          </div>
          
          <div className="space-y-12">
            {[
              { num: "01", title: "Brand Audit & Strategy", desc: "We analyze your current presence, study your competitors, and define a unique content strategy that resonates with your target demographic." },
              { num: "02", title: "Content Calendar Creation", desc: "Our team plans out a 30-day content calendar complete with graphics, videos, and captions for your approval." },
              { num: "03", title: "Daily Execution & Posting", desc: "We handle scheduling and posting across all platforms at optimized times for maximum engagement." },
              { num: "04", title: "Active Community Management", desc: "Responding to comments and messages to build relationships and increase brand loyalty." },
              { num: "05", title: "Performance Review", desc: "Monthly deep-dives into analytics to measure ROI, adjust strategies, and continuously improve results." }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-900 border border-slate-800 group-hover:border-rose-500 group-hover:bg-rose-600 flex items-center justify-center font-display font-bold text-xl transition-all duration-300">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 font-light leading-relaxed">{step.desc}</p>
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
