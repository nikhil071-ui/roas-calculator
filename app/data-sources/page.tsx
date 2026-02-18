import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Sources | ROAS Tools",
  description: "Primary sources used for ROAS formulas, benchmark interpretation, and marketing analytics content.",
  alternates: {
    canonical: "https://roas-calculator.tech/data-sources",
  },
};

export default function DataSourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Data Sources</h1>
          <p className="text-slate-600 mt-3">
            We prioritize primary and official references when publishing formulas, benchmarks, and interpretation guidance.
          </p>
        </div>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Primary documentation sources</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Google Ads Help and product documentation</li>
            <li>Meta Business Help Center and advertiser documentation</li>
            <li>Platform-specific ad policy and bidding references</li>
            <li>Accounting and margin modeling standards for profitability logic</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Benchmark and market context</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Industry benchmark roundups from recognized performance marketing publishers</li>
            <li>Public market trend datasets used for directional calibration</li>
            <li>Internal scenario ranges for educational planning workflows</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Source quality policy</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Prefer primary sources when available.</li>
            <li>Cross-check secondary references before publishing benchmarks.</li>
            <li>Replace stale citations during quarterly reviews.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
