import { MetadataRoute } from 'next';

// FULL SITEMAP - Include all static pages and all dynamic slug routes
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://roas-calculator.tech';
  const lastModified = new Date();

  const staticRoutes = [
    '/',
    '/image-compressor',
    '/image-compressor/guide',
    '/image-compressor/comprehensive-guide',
    '/image-compressor/faq',
    '/pdf-converter',
    '/pdf-converter/guide',
    '/pdf-converter/faq',
    '/currency-converter',
    '/currency-converter/guide',
    '/currency-converter/faq',
    '/blog',
    '/blog/facebook-ads-case-study',
    '/blog/roas-benchmarks-2026',
    '/blog/image-compression-technical',
    '/blog/pdf-compression-guide',
    '/blog/currency-exchange-guide',
    '/blog/payback-period-cash-flow-saas',
    '/blog/attribution-impact-on-roas',
    '/ppc-toolkit',
    '/cac-calculator',
    '/ltv-calculator',
    '/mer-calculator',
    '/payback-period-calculator',
    '/resources',
    '/comparisons',
    '/comparisons/roas-vs-roi-vs-mer-vs-acos',
    '/comparisons/cac-vs-cpa-vs-roas',
    '/comparisons/mer-vs-roas',
    '/case-studies',
    '/testimonials',
    '/glossary',
    '/about',
    '/team',
    '/editorial-policy',
    '/contact',
    '/faq',
    '/terms',
    '/privacy-policy',
  ];

  const roasSlugs = [
    'facebook-ads',
    'tiktok-ads',
    'google-ads',
    'google-shopping-roas',
    'meta-dtc-roas',
    'lead-gen-cpl-roas',
    'dropshipping-profit',
    'break-even-roas',
    'marketing-roi',
    'amazon-ppc-acos',
    'influencer-roi',
    'target-cpa',
    'pinterest-ads',
  ];

  const compressorSlugs = [
    'jpeg-to-50kb',
    'image-to-20kb',
    'reduce-image-size-in-kb',
    'passport-photo-size',
    'compress-png-to-100kb',
    'compress-image-for-web',
    'resize-pixel-perfect',
    'bulk-image-compressor',
    'ssc-chsl-photo-resizer',
    'upsc-photo-resizer',
  ];

  const pdfSlugs = [
    'jpg-to-pdf',
    'png-to-pdf',
    'merge-photos-to-pdf',
    'images-to-pdf',
    'screenshot-to-pdf',
    'iphone-photo-to-pdf',
    'create-pdf-assignment',
    'receipt-scanner-pdf',
    'instagram-to-pdf',
    'document-photo-to-pdf',
  ];

  const currencySlugs = [
    'usd-to-inr',
    'eur-to-usd',
    'gbp-to-inr',
    'aed-to-inr',
    'cad-to-inr',
    'aud-to-usd',
    'usd-to-pkr',
    'jpy-to-usd',
    'usd-to-php',
    'crypto-converter',
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1 : 0.7,
    })),
    ...roasSlugs.map((slug) => ({
      url: `${baseUrl}/roas/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...compressorSlugs.map((slug) => ({
      url: `${baseUrl}/compressor/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...pdfSlugs.map((slug) => ({
      url: `${baseUrl}/pdf/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...currencySlugs.map((slug) => ({
      url: `${baseUrl}/currency/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
