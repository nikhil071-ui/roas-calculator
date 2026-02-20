import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Shopify ROAS Calculator Guide (Benchmarks + Example)",
  description:
    "Shopify-focused ROAS guide with DTC benchmarks, break-even interpretation, and a worked example for paid social and Shopping campaigns.",
  alternates: {
    canonical: "https://roas-calculator.tech/shopify-roas-calculator",
  },
};

export default function ShopifyRoasCalculatorPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Shopify ROAS Calculator Guide",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/shopify-roas-calculator",
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should a Shopify team trust ROAS enough to scale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scale when campaign ROAS is consistently above break-even, CAC payback remains acceptable, and blended MER is stable.",
        },
      },
      {
        "@type": "Question",
        name: "Why can high Shopify ROAS still be unprofitable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discounting, shipping, returns, and platform fees can reduce contribution margin, so ROAS alone may overstate true profitability.",
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
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Shopify ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Tailored for Shopify growth teams running Meta and Google Shopping campaigns.
          </p>
        </header>

        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Who This Page Is For</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>DTC operators managing Shopify catalog growth with paid social.</li>
            <li>Performance marketers balancing discount strategy with contribution margin.</li>
            <li>Teams deciding scale/hold/pause on weekly merchant reviews.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Shopify Benchmark Snapshot (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Channel</th>
                  <th className="text-left px-4 py-2">Typical ROAS</th>
                  <th className="text-left px-4 py-2">Strong ROAS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-t">Meta DTC</td>
                  <td className="px-4 py-2 border-t">1.8x to 3.2x</td>
                  <td className="px-4 py-2 border-t">3.5x to 5.0x+</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Google Shopping</td>
                  <td className="px-4 py-2 border-t">2.0x to 3.8x</td>
                  <td className="px-4 py-2 border-t">4.0x to 6.0x+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Shopify Example</h2>
          <p className="text-slate-700">
            Example store: ad spend $12,000, attributed revenue $42,000, COGS + fulfillment $19,000, orders 420.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>ROAS = 3.50x</li>
            <li>Net Profit = $11,000</li>
            <li>Break-even ROAS = 1.83x</li>
            <li>Decision = Scale gradually while monitoring blended MER</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for Shopify Decisions</h2>
          <p className="text-slate-700">
            Shopify ROAS should be treated as an operating control metric, not a standalone profitability verdict.
            Evaluate with <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC</Link>,
            <Link href="/ltv-calculator" className="text-blue-700 hover:underline"> LTV</Link>, and
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> to decide if higher spend is sustainable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Compare campaign ROAS against your margin-based floor in <Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline">Break-even ROAS by Margin</Link>.</li>
            <li>Validate that blended MER stays stable after promotions and discount windows.</li>
            <li>Review by product family because AOV and return rate variance can distort headline ROAS.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use, Limitations, and Common Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use this for weekly budget reviews, promo planning, and catalog-level prioritization.</li>
            <li>Do not assume attributed platform ROAS equals incremental profit after returns and discounts.</li>
            <li>Do not rely only on first-order ROAS for subscription or repeat-heavy catalogs; include cohort LTV behavior.</li>
          </ul>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/roas/google-shopping-roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Shopping ROAS Calculator
          </Link>
          <Link href="/benchmarks/roas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            View ROAS Benchmarks
          </Link>
          <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Open PPC Toolkit
          </Link>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Shopify Decision Workflow</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Calculate break-even ROAS using current margin after discounts.</li>
            <li>Compare campaign ROAS by audience and product bundle.</li>
            <li>Scale only cohorts with stable payback and repeat-purchase quality.</li>
          </ol>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            Scenario outputs use explicit arithmetic: ROAS equals attributed revenue divided by ad spend, while break-even guidance maps to contribution margin assumptions.
            Decisions should be confirmed against blended efficiency and cash recovery windows.
          </p>
        </section>

        <EmailCaptureCard
          source="persona_shopify_roas"
          title="Get Shopify RPM/ROAS Benchmark Updates"
          description="Use benchmark updates to validate break-even, discount impact, and scale readiness for Shopify campaigns."
          buttonLabel="Send Shopify Benchmarks"
          helperText="Includes DTC benchmark guardrails and weekly review prompts."
        />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
      </article>
    </main>
  );
}
