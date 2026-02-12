import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Compressor FAQ | ROAS Tools",
  description: "Answers to common questions about image compression, size limits, quality settings, and exam portal requirements.",
  keywords: [
    "image compressor faq",
    "reduce image size",
    "50kb photo",
    "exam portal image size",
    "jpg compression",
  ],
  openGraph: {
    title: "Image Compressor FAQ | ROAS Tools",
    description: "Answers to common questions about image compression, size limits, quality settings, and exam portal requirements.",
    url: "https://roas-calculator.tech/image-compressor/faq",
  },
      twitter: {
    card: "summary_large_image",
    title: "Image Compressor FAQ | ROAS Tools",
    description: "Answers to common questions about image compression, size limits, quality settings, and exam portal requirements.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/image-compressor/faq",
  },
};

const faqs = [
  {
    q: "How do I reduce an image to 50KB?",
    a: "Upload your image, set the target size to 0.05 MB, and download the result. This uses a quality-size tradeoff to hit the size limit.",
  },
  {
    q: "Does the tool upload my photos to a server?",
    a: "No. The compressor processes images in your browser whenever possible. Your images do not need to leave your device.",
  },
  {
    q: "What file types are supported?",
    a: "JPEG and PNG are supported. JPEG is best for photos and PNG is best for signatures or text-heavy images.",
  },
  {
    q: "What is the best quality setting for web use?",
    a: "For web images, a quality setting around 80-90 is usually visually lossless and significantly smaller.",
  },
  {
    q: "Why does my image look blurry after compression?",
    a: "The size target may be too low for the image dimensions. Reduce dimensions or increase the target size slightly.",
  },
  {
    q: "What size do exam portals require?",
    a: "Many portals require photos under 50KB and signatures under 20KB, but exact limits vary by exam. Always verify the portal instructions.",
  },
  {
    q: "Can I compress images for UPSC/SSC/IBPS forms?",
    a: "Yes. The tool is commonly used for exam form uploads. Set the target size to match the portal requirement.",
  },
  {
    q: "Does compression remove EXIF data?",
    a: "Compression can reduce or remove metadata depending on the settings. If metadata matters, keep a backup of the original file.",
  },
  {
    q: "What dimensions should I use for photo uploads?",
    a: "Use the minimum dimensions required by the portal. Avoid upscaling small images, which can reduce quality.",
  },
  {
    q: "Can I compress multiple images at once?",
    a: "The current tool focuses on one image at a time to ensure accurate size targeting. Batch support can be added if needed.",
  },
  {
    q: "Why is PNG larger than JPEG?",
    a: "PNG is lossless and stores more data, so file sizes are larger. For photos, JPEG is usually the best choice.",
  },
  {
    q: "Is there a limit to how many times I can use it?",
    a: "No. There are no usage limits.",
  },
];

export default function ImageCompressorFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <Link href="/image-compressor" className="text-slate-500 hover:text-blue-600 transition text-sm">
          Back to Image Compressor
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">Image Compressor FAQ</h1>
        <p className="text-slate-600 mt-2">
          Quick answers to the most common image compression questions.
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="bg-white border border-slate-200 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">
                {item.q}
              </summary>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900">Need a specific size?</h2>
          <p className="text-slate-600 mt-2">
            Try the tool and set exact KB or MB targets for your upload requirements.
          </p>
          <Link href="/image-compressor" className="inline-block mt-4 text-blue-700 font-semibold hover:underline">
            Open Image Compressor
          </Link>
        </div>
      </div>
    </div>
  );
}
