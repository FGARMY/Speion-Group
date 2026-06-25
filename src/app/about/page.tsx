import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us | Speion Software Development Company",
  description: "Learn about Speion's journey, our elite engineering team, and our mission to accelerate business growth through custom software solutions.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            About Speion
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 mb-8 tracking-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
            We are an elite team of software architects, developers, and designers. We partner with ambitious companies worldwide to build scalable, mission-critical digital products.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To empower enterprises and startups by delivering highly scalable, robust, and innovative software solutions that solve real business problems and drive growth.
            </p>
          </div>
          <div className="bg-blue-600 p-10 rounded-3xl text-white shadow-xl shadow-blue-600/20">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-50 leading-relaxed">
              To be the most trusted technology partner in India, known for our engineering excellence, transparent communication, and commitment to delivering measurable ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 sm:px-6 bg-slate-100 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Leadership</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Guided by enterprise engineering veterans.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Founder/CEO */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-400 p-1 mb-6">
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-4xl font-bold text-slate-300">S</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Speion Founder</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold mb-4">Founder & CEO</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Visionary behind Speion's enterprise growth. Ex-FAANG architect with 15+ years scaling B2B SaaS.</p>
            </div>
            {/* CTO */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 mb-6">
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-4xl font-bold text-slate-300">CT</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Chief Tech Officer</h3>
              <p className="text-purple-600 dark:text-purple-400 font-bold mb-4">CTO</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Leading the engineering pods. Expert in Go, microservices, and high-availability cloud infrastructure.</p>
            </div>
            {/* Design Lead */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-amber-400 p-1 mb-6">
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-4xl font-bold text-slate-300">DL</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Design Lead</h3>
              <p className="text-orange-600 dark:text-orange-400 font-bold mb-4">Head of Product Design</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Crafting award-winning enterprise user experiences. Obsessed with micro-interactions and accessibility.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
