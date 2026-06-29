import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import ServicePageSchema from "@/components/ServicePageSchema";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import { MapPin, Building2, Code2, Rocket, Plus, Minus } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Company in Pune | Top IT Agency | Speion",
  description: "Speion is a premium software development company in Pune. We build highly scalable SaaS platforms, enterprise software, and mobile apps.",
  pathname: "/locations/software-development-pune",
});

const localFaqs = [
  {
    q: "Why choose Speion for custom software development in Pune?",
    a: "Speion is recognized as a top software development company in Pune, specializing in high-performance web applications, native mobile apps, and complex enterprise software. Our local presence in Pune allows us to closely collaborate with regional startups and enterprises in Hinjewadi, Baner, and Kharadi, providing them with top 1% engineering talent and robust cloud infrastructure."
  },
  {
    q: "Do you provide AI automation services to Pune businesses?",
    a: "Yes, Speion builds custom AI automation workflows, integrates Large Language Models (LLMs) into existing software, and develops autonomous AI agents specifically for enterprises and startups based in Pune."
  },
  {
    q: "What industries do you serve in Maharashtra?",
    a: "While we are industry-agnostic, we have deep expertise in building secure, scalable platforms for FinTech, Healthcare, E-Commerce, and Manufacturing sectors across Pune and the wider Maharashtra region."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: localFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function PuneLocationPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <LocalBusinessSchema
        addressLocality="Pune"
        postalCode="411001"
        url="https://speion.com/locations/software-development-pune"
        description={metadata.description ?? "Speion is a premium software development company in Pune."}
      />
      <ServicePageSchema
        serviceName="Software Development Services in Pune"
        serviceDescription="Premium custom software, web, and mobile app development services for businesses in Pune."
        pathname="/locations/software-development-pune"
      />
      
      {/* Dynamic Local FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            <MapPin size={14} className="text-teal-300" />
            Pune HQ
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Top Software Development Company in <span className="text-teal-300">Pune</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Headquartered in Pune&apos;s thriving IT corridor. We partner with tech startups, fintechs, and global enterprises to engineer world-class digital products.
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 pb-8">
        <div className="container mx-auto pt-8">
          <p className="text-center text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">Trusted by Innovative Companies</p>
          <ClientLogos />
        </div>
      </section>

      {/* AI Citable Answer Block */}
      <section aria-label="About Speion in Pune" className="px-4 sm:px-6 py-20 bg-[#FAFAFA] dark:bg-[#020617]">
        <div className="container mx-auto max-w-4xl text-center bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Why Pune Enterprises Choose Speion</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
            Speion is widely recognized as a top-tier software development company based in Pune, India. Our engineering team operates at the intersection of complex logic and stunning user experience, delivering bespoke SaaS platforms, custom enterprise software, and scalable mobile applications. By deploying cloud-native architectures on AWS and Google Cloud, and utilizing cutting-edge frameworks like Next.js and React Native, we ensure 99.9% uptime and rapid deployment cycles for our clients. From early-stage startups in Hinjewadi to established manufacturing and fintech giants across Maharashtra, businesses choose Speion for our uncompromising code quality, deep expertise in AI automation integrations, and our commitment to eliminating technical debt.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mb-4">Local Presence, Global Standards</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Engineering excellence delivered from the heart of Pune.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enterprise Grade Architecture", desc: "We design software using microservices and cloud-native infrastructure capable of handling millions of requests.", icon: <Building2 size={24} /> },
              { title: "Top 1% Engineering Talent", desc: "Located in the heart of Pune's tech hub, we recruit only the sharpest full-stack developers and DevOps engineers.", icon: <Code2 size={24} /> },
              { title: "Startup to Scale-up", desc: "From MVP development to Series B scaling, we provide the technical firepower needed to grow your business rapidly.", icon: <Rocket size={24} /> },
            ].map((feat, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 group hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{feat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Services Block */}
      <Services />

      {/* Local FAQ Section */}
      <section className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {localFaqs.map((faq, idx) => (
              <details key={idx} className="group overflow-hidden rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left cursor-pointer focus:outline-none">
                  <h3 className="font-semibold text-base sm:text-lg text-slate-800 dark:text-slate-200 pr-6">
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 group-open:bg-rose-100 dark:group-open:bg-rose-500/20 group-open:text-rose-600 dark:group-open:text-rose-400 transition-colors">
                    <span className="block group-open:hidden"><Plus size={18} /></span>
                    <span className="hidden group-open:block"><Minus size={18} /></span>
                  </div>
                </summary>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
