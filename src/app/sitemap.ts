import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://speion.com';
  
  // Dynamic content routes
  const blogPosts = getAllPosts('blog');
  const comparisons = getAllPosts('comparisons');
  const caseStudyPosts = getAllPosts('case-studies');

  // Bump this when static page content actually changes. Don't use new Date():
  // a date that changes on every request teaches Google to ignore lastModified.
  const STATIC_UPDATED = new Date('2026-10-10');

  const route = (
    path: string,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: number,
  ) => ({ url: `${baseUrl}${path}`, lastModified: STATIC_UPDATED, changeFrequency, priority });

  // ─── Static routes with explicit priorities ────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    // Home
    route('', 'weekly', 1.0),

    // Core pages
    route('/about', 'monthly', 0.8),
    route('/contact', 'monthly', 0.6),
    route('/pricing', 'monthly', 0.9),
    route('/faq', 'monthly', 0.7),
    route('/careers', 'weekly', 0.6),

    // Services (high priority — pillar pages)
    route('/services', 'weekly', 0.9),
    ...[
      'web-development',
      'custom-software-development',
      'mobile-app-development',
      'ai-automations',
      'crm-development',
      'erp-development',
      'ai-development',
      'chatbot-development',
      'ecommerce-development',
      'machine-learning',
      'mvp-development',
      'rpa-development',
      'saas-development',
    ].map((s) => route(`/services/${s}`, 'weekly', 0.9)),
    ...['ui-ux-design', 'social-media-management'].map((s) => route(`/services/${s}`, 'monthly', 0.8)),

    // Industry packages (commercial-intent landing pages)
    route('/packages', 'weekly', 0.8),
    ...[
      'saas-startup-mvp',
      'healthcare-clinic',
      'real-estate-agency',
      'ecommerce-retail',
      'export-business',
      'enterprise-transformation',
    ].map((p) => route(`/packages/${p}`, 'monthly', 0.8)),

    // Content hubs
    route('/insights', 'weekly', 0.8),
    route('/case-studies', 'monthly', 0.8),
    route('/comparisons', 'monthly', 0.8),

    // Location pages (local SEO) — keep in sync with locations/[city]/page.tsx
    route('/locations', 'monthly', 0.8),
    route('/locations/software-development-pune', 'monthly', 0.8),
    route('/locations/software-development-nashik', 'monthly', 0.8),
    route('/locations/software-development-maharashtra', 'monthly', 0.8),

    // Industry pages
    route('/industries', 'monthly', 0.8),
    route('/industries/healthcare', 'monthly', 0.7),
    route('/industries/fintech', 'monthly', 0.7),

    // Legal pages (low priority)
    route('/privacy-policy', 'yearly', 0.3),
    route('/terms', 'yearly', 0.3),
  ];

  // ─── Dynamic content routes ────────────────────────────────────────────────
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/insights/${post!.slug}`,
    lastModified: new Date(post!.meta.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const comparisonRoutes: MetadataRoute.Sitemap = comparisons.map(post => ({
    url: `${baseUrl}/comparisons/${post!.slug}`,
    lastModified: new Date(post!.meta.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudyPosts.map(post => ({
    url: `${baseUrl}/case-studies/${post!.slug}`,
    lastModified: new Date(post!.meta.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...comparisonRoutes, ...caseStudyRoutes];
}

