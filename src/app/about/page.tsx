import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Script from "next/script";
import {
  jsonLdGraph,
  founderSchema,
  breadcrumbSchema,
  organizationSchema,
} from "@/lib/schemas";
import { siteUrl } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us | Speion Group",
  description: "Learn about Speion Group's journey, our mission, and how we are empowering businesses in Pune, Nashik, and across India with robust software solutions.",
  pathname: "/about",
});

export default function AboutPage() {
  const jsonLd = jsonLdGraph(
    organizationSchema(),
    founderSchema(),
    breadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "About", url: `${siteUrl}/about` },
    ]),
  );

  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-600/5 dark:bg-rose-600/10 pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 mb-8 tracking-tight">
            Building the Digital Backbone of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">Modern India</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
            Based in Pune and Nashik, Speion Group is a premier software development firm dedicated to engineering highly robust, scalable, and tailored digital solutions that drive real business growth.
          </p>
        </div>
      </section>



      {/* Mission & Vision */}
      <section className="pb-20 pt-10 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To empower enterprises and growing businesses across India by delivering innovative, high-performance web applications, native mobile apps, and robust ERP integrations that solve complex operational challenges.
            </p>
          </div>
          <div className="bg-rose-600 p-10 rounded-3xl text-white shadow-xl shadow-rose-600/20">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-rose-50 leading-relaxed">
              To be the most trusted technology partner in the region, recognized for our uncompromising engineering quality, transparent communication, and deep commitment to our clients&apos; long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership / Founder Story */}
      <section className="py-32 px-4 sm:px-6 bg-white dark:bg-slate-950 overflow-hidden relative">
        {/* Background Visual Element */}
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visuals / Image Side */}
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-50 dark:from-rose-900/30 dark:to-slate-800 rounded-[2rem] transform rotate-3 scale-105 -z-10 transition-transform duration-700 hover:rotate-6"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[radial-gradient(#e11d48_2px,transparent_2px)] [background-size:16px_16px] opacity-20 -z-20"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[radial-gradient(#e11d48_2px,transparent_2px)] [background-size:16px_16px] opacity-10 -z-20"></div>
              
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                <Image 
                  src="/sarvesh-image.jpeg" 
                  alt="Sarvesh - CEO & Founder of Speion Group" 
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Detailed Content Side */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6 w-max">
                Meet The Founder
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                Sarvesh
              </h2>
              <p className="text-xl text-rose-600 dark:text-rose-400 font-semibold mb-8">
                Founder & Chief Executive Officer
              </p>

              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                <p>
                  As the driving force behind Speion Group, Sarvesh established the company with a singular vision: to bridge the gap between complex enterprise requirements and elegant, high-performance technological execution.
                </p>
                <p>
                  With strong roots in Pune and Nashik, he recognized the immense potential of local and national businesses needing world-class digital architectures. Under his leadership, Speion Group has rapidly evolved from a passionate collective of engineers into a highly trusted premier software development firm.
                </p>
                <p>
                  His technical philosophy is straightforward: technology should solve problems seamlessly, not create new ones. Sarvesh remains deeply involved in the architectural design of major client projects, ensuring that every web application, native mobile app, and ERP integration meets his uncompromising standards for scalability, security, and clean code.
                </p>
                
                {/* Quote Block */}
                <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
                  <p className="italic font-medium text-slate-800 dark:text-slate-200 text-xl leading-relaxed">
                    &quot;Our goal isn&apos;t just to write software. It&apos;s to build the robust digital infrastructure that empowers our clients to scale limitlessly and dominate their industries.&quot;
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
