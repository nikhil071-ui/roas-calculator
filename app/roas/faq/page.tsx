import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS Calculator FAQ | ROAS Tools",
  description: "Answers to common questions about ROAS, break-even ROAS, and profitability tracking.",
  keywords: [
    "roas faq",
    "return on ad spend",
    "break even roas",
    "marketing roi",
    "ad profitability",
  ],
  openGraph: {
    title: "ROAS Calculator FAQ | ROAS Tools",
    description: "Answers to common questions about ROAS, break-even ROAS, and profitability tracking.",
    url: "https://roas-calculator.tech/roas/faq",
  },
      twitter: {
    card: "summary_large_image",
    title: "ROAS Calculator FAQ | ROAS Tools",
    description: "Answers to common questions about ROAS, break-even ROAS, and profitability tracking.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/roas/faq",
  },
};

const faqs = [
  {
    q: "What is ROAS?",
    a: "ROAS (Return on Ad Spend) is revenue divided by ad spend. A 4x ROAS means $4 in revenue for every $1 spent.",
  },
  {
    q: "What is break-even ROAS?",
    a: "Break-even ROAS is the minimum ROAS needed to avoid losing money. It depends on your profit margin.",
  },
  {
    q: "How do I calculate break-even ROAS?",
    a: "Use the formula 1 divided by profit margin. If margin is 40%, break-even ROAS is 2.5.",
  },
  {
    q: "Is a high ROAS always good?",
    a: "Not always. A high ROAS is helpful, but profit also depends on margins, returns, and overhead.",
  },
  {
    q: "Why is my ROAS lower than expected?",
    a: "Common reasons include weak creatives, slow landing pages, poor targeting, and incorrect tracking.",
  },
  {
    q: "What is a good ROAS for e-commerce?",
    a: "Many e-commerce brands target 3x to 5x, but the right number depends on margins and LTV.",
  },
  {
    q: "What is the difference between ROAS and ROI?",
    a: "ROAS focuses on ad revenue vs ad spend. ROI includes all business costs and profit.",
  },
  {
    q: "How many conversions do I need before judging ROAS?",
    a: "At least 50 conversions is a common minimum so the data is stable.",
  },
  {
    q: "Should I use target ROAS bidding?",
    a: "It is effective at scale with stable conversion data. For new accounts, start with conversion optimization first.",
  },
  {
    q: "Does ROAS include shipping and taxes?",
    a: "It typically uses gross revenue. Use the calculator to include costs for true profit analysis.",
  },
  {
    q: "How do I improve ROAS quickly?",
    a: "Test new creatives, improve landing page speed, and focus budgets on top-performing audiences.",
  },
  {
    q: "Does the calculator store my data?",
    a: "No. Calculations are done in your browser and are not saved on our servers.",
  },
];

export default function RoasFaqPage() {
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
        <Link href="/" className="text-slate-500 hover:text-blue-600 transition text-sm">
          Back to ROAS Calculator
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">ROAS Calculator FAQ</h1>
        <p className="text-slate-600 mt-2">
          Answers to the most common ROAS and profitability questions.
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
          <h2 className="text-lg font-bold text-slate-900">Want to calculate now?</h2>
          <p className="text-slate-600 mt-2">
            Use the free calculator to compute ROAS, break-even, and profit instantly.
          </p>
          <Link href="/" className="inline-block mt-4 text-blue-700 font-semibold hover:underline">
            Open ROAS Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
