import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { MapPin, Briefcase, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Careers | Join the Engineering Team at Speion",
  description: "Join our elite engineering team in Pune and Nashik. We are hiring Senior Go Developers, Next.js Architects, and Product Designers.",
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Next.js Architect",
      location: "Pune, India (Hybrid)",
      type: "Full-Time",
      department: "Frontend Engineering"
    },
    {
      title: "Lead Golang Developer",
      location: "Nashik, India (Remote)",
      type: "Full-Time",
      department: "Backend Systems"
    },
    {
      title: "Product Designer (UI/UX)",
      location: "Pune, India (Hybrid)",
      type: "Full-Time",
      department: "Design"
    },
    {
      title: "Cloud Infrastructure Engineer (AWS)",
      location: "Remote (India)",
      type: "Full-Time",
      department: "DevOps"
    }
  ];

  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-10 opacity-40"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-6">
            Careers at Speion
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Build Software that <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Changes Industries</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light mb-10 max-w-2xl mx-auto">
            We are looking for passionate problem solvers to join our engineering hubs in Pune and Nashik.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-3 gap-8">
          <div className="p-8">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🚀</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Hyper-Growth</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Work directly on zero-to-one enterprise systems and scale them to millions of users.</p>
          </div>
          <div className="p-8">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🌴</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Remote & Hybrid</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Enjoy the flexibility to work from our beautiful hubs in Pune and Nashik, or work entirely from home.</p>
          </div>
          <div className="p-8">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">🧠</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Continuous Learning</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Annual learning stipends, conference passes, and dedicated time for open-source contributions.</p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Open Positions</h2>
          
          <div className="flex flex-col gap-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-orange-500 transition-all hover:shadow-xl group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} /> {job.type}</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 font-medium">{job.department}</span>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold py-3 px-6 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0">
                  Apply Now <ChevronRight size={16} />
                </button>
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
