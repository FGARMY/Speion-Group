import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://speion-group.vercel.app';

  const routes = [
    '',
    '/about',
    '/contact',
    '/faq',
    '/blog',
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/locations') ? 0.9 : 0.8,
  }));
}
