import { MetadataRoute } from 'next';

// ADD 'async' HERE
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://roas-calculator-brown.vercel.app';

  // 1. COMPRESSOR PAGES
  const compressorPages = [
    "jpeg-to-50kb",
    "image-to-20kb",
    "reduce-image-size-in-kb",
    "passport-photo-size",
    "compress-png-to-100kb",
    "compress-image-for-web",
    "resize-pixel-perfect",
    "bulk-image-compressor",
    "ssc-chsl-photo-resizer",
    "upsc-photo-resizer"
  ];

  // 2. PDF PAGES
  const pdfPages = [
    "jpg-to-pdf",
    "png-to-pdf",
    "merge-photos-to-pdf",
    "images-to-pdf",
    "screenshot-to-pdf",
    "iphone-photo-to-pdf",
    "create-pdf-assignment",
    "receipt-scanner-pdf",
    "instagram-to-pdf",
    "document-photo-to-pdf"
  ];

  // 3. CURRENCY PAGES
  const currencyPages = [
    "usd-to-inr",
    "eur-to-usd",
    "gbp-to-inr",
    "aed-to-inr",
    "cad-to-inr",
    "aud-to-usd",
    "usd-to-pkr",
    "jpy-to-usd",
    "usd-to-php",
    "crypto-converter"
  ];

  // 4. ROAS PAGES
  const roasPages = [
    "facebook-ads",
    "tiktok-ads",
    "google-ads",
    "dropshipping-profit",
    "break-even-roas",
    "marketing-roi",
    "amazon-ppc-acos",
    "influencer-roi",
    "target-cpa",
    "pinterest-ads"
  ];

  // --- GENERATE URL OBJECTS ---
  const compressorUrls = compressorPages.map((slug) => ({
    url: `${baseUrl}/compressor/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const pdfUrls = pdfPages.map((slug) => ({
    url: `${baseUrl}/pdf/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const currencyUrls = currencyPages.map((slug) => ({
    url: `${baseUrl}/currency/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const roasUrls = roasPages.map((slug) => ({
    url: `${baseUrl}/roas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // --- RETURN ALL URLS ---
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/image-compressor`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/pdf-converter`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/currency-converter`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },

    { url: `${baseUrl}/roas-calculator/facebook-ads`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    // If you deleted the 'ssc-cgl' folder, remove this line below:
    { url: `${baseUrl}/image-compressor/ssc-cgl`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    ...compressorUrls,
    ...pdfUrls,
    ...currencyUrls,
    ...roasUrls
  ];
}