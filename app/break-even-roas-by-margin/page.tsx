import Link from "next/link";
import type { Metadata } from "next";
import BreakEvenByMarginClient from "./BreakEvenByMarginClient";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <main className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
        <div>
          <Link href="/ppc-toolkit" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to PPC Toolkit</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Break-even ROAS by Margin Calculator</h1>
          <p className="text-slate-600 mt-3">
            This calculator converts your contribution margin into a required break-even ROAS and adds a practical decision layer for scale/hold/pause.
          </p>
        </div>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Formula</h2>
          <p className="font-mono bg-white border border-slate-200 rounded px-4 py-3">
            Break-even ROAS = 1 / Contribution Margin
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
      </main>
    </div>
  );
}

