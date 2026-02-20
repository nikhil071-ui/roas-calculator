import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/image-compressor/',
        '/pdf-converter/',
        '/currency-converter/',
        '/compressor/',
        '/pdf/',
        '/currency/',
      ],
    },
    host: 'roas-calculator.tech',
    sitemap: 'https://roas-calculator.tech/sitemap.xml',
  };
}
