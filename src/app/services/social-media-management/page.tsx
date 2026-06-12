import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Social Media Management | Speion",
  description: "Data-driven social media strategies to elevate your enterprise brand presence and drive growth.",
};

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-rose-600 dark:text-rose-400 font-bold tracking-widest uppercase text-sm mb-4 block">Digital Marketing</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-400">Management</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              We help enterprises and ambitious startups build a commanding online presence through data-driven social media strategies, high-quality content, and targeted audience engagement.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Strategy & Branding</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">We develop tailored content strategies that align with your business goals, ensuring a consistent voice across LinkedIn, Twitter, Instagram, and Facebook.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Content Creation</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">From professional graphics and video production to insightful thought-leadership articles, we produce content that resonates with B2B and B2C audiences.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Community Engagement</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Active monitoring and rapid response management to foster brand loyalty and address customer inquiries directly on your social channels.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">Analytics & Reporting</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Continuous tracking of KPIs, reach, and engagement metrics to optimize future campaigns and maximize your marketing ROI.</p>
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
