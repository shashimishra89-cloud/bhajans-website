import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://bhakti.justhobby.net';
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/festivals`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/aartis`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/bhajans`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/mantras`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/search`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    }
  ];

  // Festival pages
  const festivals = [
    'diwali',
    'holi', 
    'navratri',
    'ganesh-chaturthi'
  ];

  const festivalPages = festivals.map(festival => ({
    url: `${baseUrl}/festivals/${festival}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: 0.8
  }));

  const allPages = [...staticPages, ...festivalPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
