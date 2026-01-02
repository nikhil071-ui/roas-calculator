import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roas-calculator-brown.vercel.app';

  return [
    // --- MAIN TOOLS ---
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/image-compressor`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pdf-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/currency-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // --- STATIC PAGES ---
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },

    // --- SPECIFIC SUB-TOOLS ---
    {
      // FIX: Assuming your folder is "app/ssc-cgl", this is the correct URL:
      url: `${baseUrl}/image-compressor/ssc-cgl`, 
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, 
    },
    {
      // This matches your "app/roas-calculator/facebook-ads" folder:
      url: `${baseUrl}/roas-calculator/facebook-ads`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, 
    },
  ];
}