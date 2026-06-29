import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Script from 'next/script';
import { pageMetadata, siteUrl } from '@/lib/seo';
import { jsonLdGraph, articleSchema, breadcrumbSchema } from '@/lib/schemas';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return pageMetadata({
    title: `${post.meta.title} | Speion Engineering Blog`,
    description: post.meta.excerpt,
    pathname: `/insights/${slug}`,
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
  const posts = getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');

  if (!post) {
    notFound();
  }

  const articleJsonLd = jsonLdGraph(
    articleSchema({
      title: post.meta.title,
      description: post.meta.excerpt,
      url: `${siteUrl}/insights/${slug}`,
      datePublished: post.meta.date,
      author: post.meta.author,
      image: post.meta.coverImage,
    }),
    breadcrumbSchema([
      { name: 'Home', url: siteUrl },
      { name: 'Insights', url: `${siteUrl}/insights` },
      { name: post.meta.title, url: `${siteUrl}/insights/${slug}` },
    ]),
  );

  return (
    <article className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-24 px-4 sm:px-6 relative selection:bg-rose-500/30">
      <Script
        id={`blog-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="container mx-auto max-w-3xl relative z-10">
        
        <Link href="/insights" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-rose-600 transition-colors mb-12 group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
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
          
          <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              S
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{post.meta.author}</p>
              <p className="text-sm text-slate-500">Enterprise Engineering Pod</p>
            </div>
          </div>
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

      {/* Decorative background blur */}
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-rose-500/5 blur-[120px] rounded-full pointer-events-none"></div>
    </article>
  );
}
