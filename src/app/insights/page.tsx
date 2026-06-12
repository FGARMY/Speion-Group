import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Engineering Insights | Speion",
  description: "Technical articles, architecture deep-dives, and engineering best practices from the team at Speion.",
};

export default function InsightsPage() {
  const posts = [
    {
      title: "Migrating from a Monolith to Microservices with Go and gRPC",
      category: "Architecture",
      date: "Oct 12, 2026",
      readTime: "8 min read",
      desc: "A detailed breakdown of how we decoupled a legacy monolithic ERP into 15 microservices using Go, saving 40% in compute costs.",
    },
    {
      title: "Optimizing React Native Performance for 60fps on Budget Devices",
      category: "Mobile",
      date: "Sep 28, 2026",
      readTime: "6 min read",
      desc: "Techniques for memory management, Hermes engine tuning, and avoiding unnecessary re-renders in heavy Fintech apps.",
    },
    {
      title: "Implementing Zero-Trust Architecture in Healthcare SaaS",
      category: "Security",
      date: "Sep 15, 2026",
      readTime: "10 min read",
      desc: "How we utilize mutual TLS, strict RBAC, and ephemeral credentials to ensure absolute data privacy in cloud environments.",
    }
  ];

  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-slate-950">
      <Navbar />
      
      <section className="pt-40 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-400">Insights</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Technical articles, architecture deep-dives, and engineering best practices straight from our development pods.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-sm">{post.date} &middot; {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {post.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
