import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { pageMetadata } from '@/lib/seo';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'case-studies');

  if (!post) {
    return { title: 'Case Study Not Found' };
  }

  return pageMetadata({
    title: `${post.meta.title} | Speion Case Studies`,
    description: post.meta.excerpt,
    pathname: `/case-studies/${slug}`,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: 'article',
      publishedTime: post.meta.date,
      authors: [post.meta.author],
    },
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts('case-studies');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'case-studies');

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 px-4 sm:px-6 relative selection:bg-rose-500/30">
      <div className="container mx-auto max-w-3xl relative z-10">
        
        <Link href="/case-studies" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors mb-12 group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 dark:bg-rose-900/30 px-3 py-1 rounded-sm">
              {post.meta.category}
            </span>
            <time className="text-sm font-light text-slate-500 font-serif italic">
              {post.meta.date}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-8">
            {post.meta.title}
          </h1>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-slate max-w-none 
          prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-16 
          prose-a:text-rose-600 hover:prose-a:text-rose-500 prose-a:transition-colors
          prose-strong:text-slate-900 dark:prose-strong:text-white
          prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-400
          prose-li:text-slate-600 dark:prose-li:text-slate-400">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

      </div>
    </article>
  );
}
