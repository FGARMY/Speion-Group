import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Automations | Speion",
  description: "Streamline your workflows and operations with custom AI-powered automation solutions to drive efficiency and scale.",
  pathname: "/services/ai-automations",
});

export default function AIAutomationsPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-rose-600 dark:text-rose-400 font-bold tracking-widest uppercase text-sm mb-4 block">Efficiency & Scale</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-400">Automations</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              We help enterprises and ambitious startups streamline their workflows and operations with custom AI-powered automation solutions to drive efficiency.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Workflow Optimization</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">We analyze your business processes and implement AI agents to automate repetitive tasks, freeing up your team to focus on high-value work.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Custom AI Agents</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Develop specialized AI assistants trained on your internal data to handle customer inquiries, summarize reports, and assist with decision-making.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Data Processing</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Leverage machine learning models to automatically extract, structure, and analyze large volumes of unstructured data with unprecedented speed.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">System Integration</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Seamlessly connect your existing software stack with powerful AI APIs to create intelligent, automated pipelines that span across your organization.</p>
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
