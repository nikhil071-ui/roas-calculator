import Link from "next/link";
import type { Metadata } from "next";
import BreakEvenByMarginClient from "./BreakEvenByMarginClient";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Break-even ROAS by Margin Calculator",
  description:
    "Calculate required break-even ROAS from contribution margin and apply scale/hold/pause logic against current ROAS.",
  alternates: {
    canonical: "https://roas-calculator.tech/break-even-roas-by-margin",
  },
  openGraph: {
    title: "Break-even ROAS by Margin Calculator",
    description:
      "Use margin-based break-even math to set ROAS guardrails before scaling ad spend.",
    url: "https://roas-calculator.tech/break-even-roas-by-margin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Break-even ROAS by Margin Calculator",
    description:
      "Use margin-based break-even math to set ROAS guardrails before scaling ad spend.",
  },
};

export default function BreakEvenByMarginPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Break-even ROAS by Margin Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/break-even-roas-by-margin",
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I calculate break-even ROAS from margin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Break-even ROAS equals 1 divided by contribution margin in decimal form.",
        },
      },
      {
        "@type": "Question",
        name: "Why is margin-based ROAS critical?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It sets a profitability floor so you do not scale channels that look efficient but fail unit economics.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <main className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
        <article className="space-y-8">
        <header>
          <Link href="/ppc-toolkit" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to PPC Toolkit</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Break-even ROAS by Margin Calculator</h1>
          <p className="text-slate-600 mt-3">
            This calculator converts your contribution margin into a required break-even ROAS and adds a practical decision layer for scale/hold/pause.
          </p>
        </header>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Formula</h2>
          <p className="font-mono bg-white border border-slate-200 rounded px-4 py-3">
            Break-even ROAS = 1 / Contribution Margin
          </p>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for Decision-Making</h2>
          <p className="text-slate-700">
            Break-even ROAS defines your minimum revenue efficiency threshold to avoid losing contribution dollars.
            Use it as the hard floor under campaign <Link href="/" className="text-blue-700 hover:underline">ROAS</Link> and
            pair with <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC</Link>,
            <Link href="/ltv-calculator" className="text-blue-700 hover:underline"> LTV</Link>, and
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> for full-profit interpretation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Your Result</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>If actual ROAS is below break-even, reduce spend or improve conversion economics before scaling.</li>
            <li>If ROAS is only slightly above break-even, hold and optimize margin leakage before increasing budget.</li>
            <li>If ROAS stays materially above break-even over time, scaling is generally safer.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>DTC with 45% contribution margin: break-even ROAS is 2.22x, so 2.0x campaigns should not scale.</li>
            <li>Amazon seller with fee pressure: stable ROAS can still underperform when margin compresses after storage costs.</li>
            <li>B2B lead-gen with high fulfillment costs: high top-line ROAS may still fail to clear break-even economics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use It, Limitations, and Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use before launch, before budget increases, and after pricing or cost-structure changes.</li>
            <li>Do not use gross margin and contribution margin interchangeably without consistency.</li>
            <li>Do not assume this metric captures payback timing; use <Link href="/payback-period-calculator" className="text-blue-700 hover:underline">payback period</Link> for cash recovery risk.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            The calculator converts contribution margin percentage to decimal and applies the inverse formula (1 divided by margin).
            Input margin should include variable costs, platform fees, and fulfillment to avoid overstating safe ROAS thresholds.
          </p>
        </section>

        <BreakEvenByMarginClient />

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="text-blue-700 hover:underline">ROAS Calculator</Link>
            <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC Calculator</Link>
            <Link href="/mer-calculator" className="text-blue-700 hover:underline">MER Calculator</Link>
            <Link href="/resources/roas-planning-template" className="text-blue-700 hover:underline">ROAS Planning Template</Link>
          </div>
        </section>
        <EmailCaptureCard source="break_even_margin_calculator" />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
        </article>
      </main>
    </div>
  );
}
