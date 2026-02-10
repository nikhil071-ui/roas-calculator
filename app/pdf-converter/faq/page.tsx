import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PDF Converter FAQ | ROAS Tools",
  description: "Answers to common questions about JPG to PDF conversion, compression, size limits, and exam portal rules.",
  keywords: [
    "pdf converter faq",
    "jpg to pdf",
    "compress pdf",
    "pdf size limits",
    "exam pdf upload",
  ],
};

const faqs = [
  {
    q: "How do I create a PDF under 2MB?",
    a: "Upload images, set the target size to 2 MB, and download the compressed PDF. The tool balances size and quality automatically.",
  },
  {
    q: "Can I merge multiple images into one PDF?",
    a: "Yes. Select multiple images and the tool will combine them into one file in the order you choose.",
  },
  {
    q: "Does the tool add watermarks?",
    a: "No. PDFs are clean with no watermarks.",
  },
  {
    q: "Is the conversion safe for sensitive documents?",
    a: "Processing is designed to be privacy-first and happens in your browser when possible. Do not upload documents you are not allowed to share.",
  },
  {
    q: "Why is my PDF still too large?",
    a: "Reduce image resolution or set a lower target size. Large images are the biggest reason PDFs exceed limits.",
  },
  {
    q: "What DPI should I use for exam uploads?",
    a: "For screen viewing and form uploads, 100-150 DPI is typically enough and reduces file size substantially.",
  },
  {
    q: "Can I rotate pages in the PDF?",
    a: "Yes. Use the rotate control to fix any upside-down scans before downloading.",
  },
  {
    q: "Which formats are supported?",
    a: "JPG and PNG images can be converted to PDF.",
  },
  {
    q: "Will text be searchable after conversion?",
    a: "If your images are scanned photos, the PDF will not have searchable text unless OCR is applied separately.",
  },
  {
    q: "Is there a limit on the number of pages?",
    a: "There is no strict limit, but very large uploads may be slower on older devices.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. The tool runs in your browser.",
  },
  {
    q: "Can I use this for government portals?",
    a: "Yes. Set the size limit to match the portal requirements (for example, 500 KB or 2 MB).",
  },
];

export default function PdfConverterFaqPage() {
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
        <Link href="/pdf-converter" className="text-slate-500 hover:text-blue-600 transition text-sm">
          Back to PDF Converter
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">PDF Converter FAQ</h1>
        <p className="text-slate-600 mt-2">
          Common questions about converting and compressing PDFs.
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
          <h2 className="text-lg font-bold text-slate-900">Need to hit a strict size limit?</h2>
          <p className="text-slate-600 mt-2">
            Set your exact target size and download a portal-ready PDF.
          </p>
          <Link href="/pdf-converter" className="inline-block mt-4 text-blue-700 font-semibold hover:underline">
            Open PDF Converter
          </Link>
        </div>
      </div>
    </div>
  );
}
