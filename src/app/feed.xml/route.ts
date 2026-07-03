import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const blogPosts = getAllPosts('blog');
  const caseStudies = getAllPosts('case-studies');
  
  const allPosts = [...blogPosts, ...caseStudies].sort((a, b) => 
    new Date(b!.meta.date).getTime() - new Date(a!.meta.date).getTime()
  );

  const siteUrl = 'https://speion.com';

  const rssItems = allPosts.map((post) => {
    // Determine path based on folder
    const isBlog = blogPosts.includes(post);
    const basePath = isBlog ? 'insights' : 'case-studies';
    
    return `
      <item>
        <title><![CDATA[${post!.meta.title}]]></title>
        <link>${siteUrl}/${basePath}/${post!.slug}</link>
        <guid isPermaLink="true">${siteUrl}/${basePath}/${post!.slug}</guid>
        <pubDate>${new Date(post!.meta.date).toUTCString()}</pubDate>
        <description><![CDATA[${post!.meta.excerpt}]]></description>
      </item>
    `;
  }).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Speion | Software Development Insights</title>
        <link>${siteUrl}</link>
        <description>Technical insights, case studies, and updates from Speion Group.</description>
        <language>en</language>
        <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${rssItems}
      </channel>
    </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
