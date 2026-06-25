import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { ChevronRight } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Engineering Blog | Speion Tech',
  description: 'Technical insights, software architecture deep dives, and enterprise engineering best practices.',
  pathname: '/insights',
});

export default function BlogIndex() {
  const posts = getAllPosts('blog');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Engineering <span className="text-rose-600">Insights</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Deep dives into enterprise architecture, cloud-native scalability, and modern software development practices.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="group block bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 dark:bg-rose-900/30 px-3 py-1 rounded-sm">
                      {post.meta.category}
                    </span>
                    <span className="text-sm font-light text-slate-500 dark:text-slate-400 font-serif italic">
                      {post.meta.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-rose-600 transition-colors">
                    {post.meta.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    {post.meta.excerpt}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 transition-all flex-shrink-0">
                  <ChevronRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
