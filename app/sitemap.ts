import { MetadataRoute } from 'next';

// STREAMLINED SITEMAP - Only core pages for AdSense approval
// Dynamic pages still work via [slug] routes, but we don't advertise all 40+ in sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://roas-calculator-brown.vercel.app';

  // --- RETURN ONLY CORE HIGH-VALUE URLS ---
  return [
    // Homepage - Highest Priority
    { 
      url: baseUrl, 
      lastModified: new Date(), 
      changeFrequency: 'daily' as const, 
      priority: 1 
    },

    // Main Tool Pages
    { 
      url: `${baseUrl}/image-compressor`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/pdf-converter`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },
    { 
      url: `${baseUrl}/currency-converter`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },

    // Most Popular Dynamic Pages (Top 3 per category)
    { 
      url: `${baseUrl}/compressor/jpeg-to-50kb`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/pdf/jpg-to-pdf`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/currency/usd-to-inr`, 
      lastModified: new Date(), 
      changeFrequency: 'daily' as const, 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/roas/facebook-ads`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 0.8 
    },

    // Company & Legal Pages
    { 
      url: `${baseUrl}/about`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.6 
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.6 
    },
    { 
      url: `${baseUrl}/faq`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
    { 
      url: `${baseUrl}/terms`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly' as const, 
      priority: 0.4 
    },
    { 
      url: `${baseUrl}/privacy-policy`, 
      lastModified: new Date(), 
      changeFrequency: 'yearly' as const, 
      priority: 0.5 
    },
  ];
}