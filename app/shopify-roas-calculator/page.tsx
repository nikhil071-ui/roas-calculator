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
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Shopify ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Tailored for Shopify growth teams running Meta and Google Shopping campaigns.
          </p>
        </div>

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

        <EmailCaptureCard
          source="persona_shopify_roas"
          title="Get the Shopify ROAS Profitability Checklist (free PDF)"
          description="Use this checklist to validate break-even, discount impact, and scale readiness for Shopify campaigns."
          buttonLabel="Send Shopify Checklist"
          helperText="Includes DTC benchmark guardrails and weekly review prompts."
        />
      </div>
    </main>
  );
}
