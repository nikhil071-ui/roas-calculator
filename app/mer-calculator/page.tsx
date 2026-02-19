import Link from "next/link";
import type { Metadata } from "next";
import MERCalculatorClient from "./MERCalculatorClient";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "MER Calculator (Marketing Efficiency Ratio)",
  description:
    "Calculate Marketing Efficiency Ratio (MER) across all paid and owned channels to monitor blended efficiency.",
  keywords: ["mer calculator", "marketing efficiency ratio", "blended roas", "overall marketing efficiency"],
  alternates: {
    canonical: "https://roas-calculator.tech/mer-calculator",
  },
  openGraph: {
    title: "MER Calculator (Marketing Efficiency Ratio)",
    description: "Track blended efficiency across channels with MER and compare against channel ROAS.",
    url: "https://roas-calculator.tech/mer-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "MER Calculator (Marketing Efficiency Ratio)",
    description: "Track blended efficiency across channels with MER and compare against channel ROAS.",
  },
};

export default function MERCalculatorPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MER Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/mer-calculator",
  };
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to calculate MER",
    step: [
      { "@type": "HowToStep", name: "Enter total revenue", text: "Use blended revenue for the period you are analyzing." },
      { "@type": "HowToStep", name: "Enter total marketing spend", text: "Include all paid and owned marketing costs for the same period." },
      { "@type": "HowToStep", name: "Interpret MER trend", text: "Use MER for blended direction and ROAS for channel diagnosis." },
    ],
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a good MER target?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good MER depends on your gross margin and fixed costs. Use your break-even model before setting growth targets.",
        },
      },
      {
        "@type": "Question",
        name: "How is MER different from ROAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MER is blended across all marketing spend, while ROAS is usually channel or campaign specific.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <main className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
        <div>
          <Link href="/ppc-toolkit" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to PPC Toolkit</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">MER Calculator</h1>
          <p className="text-slate-600 mt-3">
            MER (Marketing Efficiency Ratio) measures total revenue against total marketing spend across channels.
          </p>
          <p className="text-slate-700 mt-3">
            Quick answer: MER equals total revenue divided by total marketing spend for the same period.
          </p>
        </div>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Formula</h2>
          <p className="font-mono bg-white border border-slate-200 rounded px-4 py-3">
            MER = Total Revenue / Total Marketing Spend
          </p>
          <p className="text-slate-700 mt-3">
            Use MER for executive-level trend tracking, then use channel ROAS to find where performance is changing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Use It</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Review MER weekly for blended health.</li>
            <li>Break down by channel when MER drops for two consecutive periods.</li>
            <li>Pair MER with CAC and LTV to avoid false confidence from one strong channel.</li>
          </ul>
        </section>

        <MERCalculatorClient />

        <section className="flex flex-wrap gap-3">
          <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Open ROAS Calculator</Link>
          <Link href="/resources/ppc-budget-planner.csv" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">Download Budget Planner</Link>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC Calculator</Link>
            <Link href="/ltv-calculator" className="text-blue-700 hover:underline">LTV Calculator</Link>
            <Link href="/payback-period-calculator" className="text-blue-700 hover:underline">Payback Calculator</Link>
          </div>
        </section>
        <EmailCaptureCard source="mer_calculator" />

        <section className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Updated February 18, 2026.
        </section>
      </main>
    </div>
  );
}
