import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://speion.com';
  
  // Dynamic content routes
  const blogPosts = getAllPosts('blog');
  const comparisons = getAllPosts('comparisons');
  const caseStudyPosts = getAllPosts('case-studies');

  // ─── Static routes with explicit priorities ────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    // Home
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    
    // Core pages
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    
    // Services (high priority — pillar pages)
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/web-development`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/custom-software-development`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/mobile-app-development`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/ai-automations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/crm-development`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/erp-development`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    
    // Content hubs
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    
    // Location pages (local SEO)
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/locations/software-development-pune`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/locations/software-development-nashik`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/locations/software-development-maharashtra`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    
    // Industry pages
    { url: `${baseUrl}/industries/healthcare`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/fintech`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    
    // Legal pages (low priority)
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
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

