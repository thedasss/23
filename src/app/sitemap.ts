import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.innovexa.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/packages',
    '/portfolio',
    '/how-it-works',
    '/book',
    '/portal',
    '/contact',
    '/faq',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
