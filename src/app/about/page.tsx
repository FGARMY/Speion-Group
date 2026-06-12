import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About Us | Speion Software Development Company",
  description: "Learn about Speion's journey, our elite engineering team, and our mission to accelerate business growth through custom software solutions.",
};

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

      <CTA />
      <Footer />
    </main>
  );
}
