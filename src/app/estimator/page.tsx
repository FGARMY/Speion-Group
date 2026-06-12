import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectEstimator from "@/components/ProjectEstimator";

export const metadata = {
  title: "Project Estimator | Speion",
  description: "Get a customized budget and timeline estimate for your enterprise software, web, or mobile application.",
};

export default function EstimatorPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Get Your <span className="text-primary">Instant Estimate</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Answer a few quick questions about your project scope, and our AI-driven estimator will generate a baseline budget and timeline.
          </p>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <ProjectEstimator />
        </div>
      </section>

      <Footer />
    </main>
  );
}
