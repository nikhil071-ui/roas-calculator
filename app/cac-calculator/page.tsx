import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAC Calculator (Customer Acquisition Cost)",
  description:
    "Calculate Customer Acquisition Cost (CAC) from ad spend and new customers. Use CAC with ROAS and LTV to decide scale vs hold.",
  keywords: ["cac calculator", "customer acquisition cost formula", "marketing cac", "saas cac benchmark"],
  alternates: {
    canonical: "https://roas-calculator.tech/cac-calculator",
  },
  openGraph: {
    title: "CAC Calculator (Customer Acquisition Cost)",
    description:
      "Use CAC with ROAS and LTV to make profitable paid growth decisions.",
    url: "https://roas-calculator.tech/cac-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Calculator (Customer Acquisition Cost)",
    description:
      "Use CAC with ROAS and LTV to make profitable paid growth decisions.",
  },
};

export default function CACCalculatorPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a good CAC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good CAC depends on margin and LTV. Many teams target LTV:CAC above 3 while maintaining acceptable payback.",
        },
      },
      {
        "@type": "Question",
        name: "Should CAC be tracked weekly or monthly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Track weekly for optimization and monthly for strategic planning to smooth short-term volatility.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <main className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
        <div>
          <Link href="/ppc-toolkit" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to PPC Toolkit</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">CAC Calculator</h1>
          <p className="text-slate-600 mt-3">
            CAC shows how much you spend to acquire one paying customer. Track it weekly with ROAS and LTV:CAC.
          </p>
        </div>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Formula</h2>
          <p className="font-mono bg-white border border-slate-200 rounded px-4 py-3">CAC = Total Ad Spend / New Customers</p>
          <p className="text-slate-700 mt-3">Example: $6,000 spend / 120 new customers = $50 CAC.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Decision Thresholds</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Scale when CAC is below your target threshold and payback window is acceptable.</li>
            <li>Hold when CAC drifts but still stays inside margin guardrails.</li>
            <li>Pause or rework when CAC exceeds target for 7-14 days after optimizations.</li>
          </ul>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Open ROAS Calculator</Link>
          <Link href="/ltv-calculator" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">Open LTV Calculator</Link>
        </section>

        <section className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Updated February 18, 2026.
        </section>
      </main>
    </div>
  );
}
