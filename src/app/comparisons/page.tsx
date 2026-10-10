import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { getAllPosts } from "@/lib/mdx";
import { Scale, ArrowRight, Calendar, User } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Technology & Software Comparisons | Speion",
  description: "Architectural comparison guides to help CTOs and business leaders choose the right framework, CRM, cloud provider, and software architecture.",
  pathname: "/comparisons",
});

export default function ComparisonsHubPage() {
  const comparisons = getAllPosts("comparisons");

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 selection:bg-rose-500/30">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
            <Scale size={14} className="text-rose-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200">Architect's Perspective</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500">
              Technology Comparisons
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Unbiased architectural breakdowns evaluating speed, scalability, long-term maintenance costs, and total cost of ownership (TCO).
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {comparisons.map((post) => (
              <Link
                key={post.slug}
                href={`/comparisons/${post.slug}`}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 mb-4">
                    <span className="font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                      {post.meta.category || "Architecture"}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {new Date(post.meta.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-rose-600 transition-colors leading-snug">
                    {post.meta.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed mb-6">
                    {post.meta.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors pt-4 border-t border-slate-100 dark:border-slate-800">
                  Read Technical Breakdown
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
