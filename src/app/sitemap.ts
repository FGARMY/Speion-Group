import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://speion-group.vercel.app';
  
  const posts = getAllPosts('blog');
  const postRoutes = posts.map(post => `/insights/${post.slug}`);

  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/insights',
    '/case-studies',
    '/comparisons',
    '/services/crm-development',
    '/services/custom-software-development',
    '/services/erp-development',
    '/services/mobile-app-development',
    '/services/ui-ux-design',
    '/services/web-development',
    '/services/social-media-management',
    '/locations/software-development-nashik',
    '/locations/software-development-pune',
    '/privacy-policy',
    '/terms',
    ...postRoutes
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/locations') ? 0.9 : 0.8,
  }));
}
