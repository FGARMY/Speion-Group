import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { MapPin, Building2, Code2, Rocket } from "lucide-react";

export const metadata = {
  title: "Software Development Company in Pune | Top IT Agency | Speion",
  description: "Speion is a premium software development company in Pune. We build highly scalable SaaS platforms, enterprise software, and mobile apps.",
};

export default function PuneLocationPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
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
            Headquartered in Pune's thriving IT corridor. We partner with tech startups, fintechs, and global enterprises to engineer world-class digital products.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Enterprise Grade Architecture", desc: "We design software using microservices and cloud-native infrastructure capable of handling millions of requests.", icon: <Building2 size={24} /> },
              { title: "Top 1% Engineering Talent", desc: "Located in the heart of Pune's tech hub, we recruit only the sharpest full-stack developers and DevOps engineers.", icon: <Code2 size={24} /> },
              { title: "Startup to Scale-up", desc: "From MVP development to Series B scaling, we provide the technical firepower needed to grow your business rapidly.", icon: <Rocket size={24} /> },
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

      <CTA />
      <Footer />
    </main>
  );
}
