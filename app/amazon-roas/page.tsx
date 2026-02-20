import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Amazon ROAS Calculator Guide (ACoS + Profit Example)",
  description:
    "Amazon PPC ROAS guide with benchmark ranges, ACoS conversion logic, and worked profitability examples for Sponsored Products.",
  alternates: {
    canonical: "https://roas-calculator.tech/amazon-roas",
  },
};

export default function AmazonRoasPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Amazon ROAS Calculator Guide",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/amazon-roas",
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do Amazon sellers convert ACoS to ROAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Convert ACoS to ROAS by taking 1 divided by ACoS as a decimal. For example, 25% ACoS equals 4.0x ROAS.",
        },
      },
      {
        "@type": "Question",
        name: "Why can acceptable ACoS still hurt profit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FBA fees, storage charges, returns, and price pressure can shrink contribution margin even when ACoS looks controlled.",
        },
      },
    ],
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-8">
        <header>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Amazon ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Built for Amazon sellers using Sponsored Products and Sponsored Brands.
          </p>
        </header>

        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Who This Page Is For</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Amazon operators managing ACoS targets and listing-level profitability.</li>
            <li>Agencies optimizing Sponsored Products/Sponsored Brands mix.</li>
            <li>Teams deciding when to raise bids versus improve conversion assets.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Amazon PPC Benchmark Snapshot</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Typical ROAS range: 2.0x to 4.0x</li>
            <li>Strong ROAS range: 4.0x to 6.0x+</li>
            <li>ACoS conversion: ROAS = 1 / ACoS (as decimal)</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">
            Example: 25% ACoS maps to 4.0x ROAS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Amazon Example</h2>
          <p className="text-slate-700">
            Example listing group: ad spend $8,000, attributed sales $28,000, landed COGS + Amazon fees $14,200, orders 560.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>ROAS = 3.50x</li>
            <li>ACoS = 28.6%</li>
            <li>Net Profit = $5,800</li>
            <li>Decision = Hold and optimize creatives/keywords before doubling budget</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for Amazon Decisions</h2>
          <p className="text-slate-700">
            Amazon ROAS and ACoS help prioritize bids and SKU-level spend, but they are not complete profitability metrics.
            Validate with contribution margins, <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC</Link>-style acquisition cost controls, and blended
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> on total marketing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Compare SKU/campaign ROAS against margin-adjusted thresholds in <Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline">Break-even ROAS by Margin</Link>.</li>
            <li>Segment branded and non-branded terms before deciding to scale bids.</li>
            <li>Track fee and return trends to confirm ROAS gains translate to contribution profit.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Private-label launch: strong branded ROAS masks weak non-branded profitability, so scaling should stay selective.</li>
            <li>Seasonal spike: peak-period ROAS rises, but higher storage and return rates reduce realized margin.</li>
            <li>Catalog cleanup: pausing low-margin ASINs improves blended MER even when overall ad volume drops.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use, Limitations, and Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use this metric during bid adjustments, SKU prioritization, and daily budget allocation reviews.</li>
            <li>Do not treat Amazon-attributed ROAS as total business return without organic halo and cost checks.</li>
            <li>Do not assume a fixed ACoS target works across all categories and lifecycle stages.</li>
          </ul>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/roas/amazon-ppc-acos" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Amazon ACoS Calculator
          </Link>
          <Link href="/break-even-roas-by-margin" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            Break-even by Margin
          </Link>
          <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Open PPC Toolkit
          </Link>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Amazon Decision Workflow</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Map ACoS to ROAS and compare with break-even margin thresholds.</li>
            <li>Segment by campaign type, SKU group, and branded vs non-branded terms.</li>
            <li>Scale bids only where contribution margin remains positive after fees.</li>
          </ol>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            Core logic uses standard formulas: ROAS equals attributed sales divided by ad spend, and ACoS equals ad spend divided by attributed sales.
            Decision guidance should be validated against post-fee contribution economics.
          </p>
        </section>

        <EmailCaptureCard
          source="persona_amazon_roas"
          title="Get Amazon RPM/ROAS Benchmark Updates"
          description="Use this with ACoS and break-even targets before changing bids or daily budgets."
          buttonLabel="Send Amazon Benchmarks"
          helperText="Includes ACoS to ROAS conversion and scale/hold/pause guardrails."
        />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
      </article>
    </main>
  );
}
