import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS Industry Benchmarks 2026: Channel Averages and Targets",
  description:
    "Compare ROAS industry benchmarks for 2026 by channel and business model, then map ranges to your break-even target.",
  alternates: {
    canonical: "https://roas-calculator.tech/benchmarks/roas",
  },
};

export default function BenchmarksRoasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">ROAS Industry Benchmarks 2026</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            Benchmark ROAS by industry, channel, and objective, then interpret performance against your own break-even point.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Primary Benchmark Reference</h2>
          <Link href="/blog/roas-benchmarks-2026" className="block rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
            <p className="font-semibold">ROAS Benchmarks 2026</p>
            <p className="text-sm text-slate-600">Updated ranges, formulas, and interpretation guide.</p>
          </Link>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Benchmark Spokes by Channel</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/benchmarks/facebook-ads-roas" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Facebook Ads ROAS</p>
              <p className="text-sm text-slate-600">DTC ranges and scale thresholds.</p>
            </Link>
            <Link href="/benchmarks/google-ads-roas" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Google Ads ROAS</p>
              <p className="text-sm text-slate-600">Search and Shopping interpretation.</p>
            </Link>
            <Link href="/benchmarks/lead-gen-cpl-roas" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Lead Gen CPL to ROAS</p>
              <p className="text-sm text-slate-600">Map CPL, close rate, and value to ROAS.</p>
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Cluster Loop</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/roas/google-shopping-roas" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">Open Channel Calculator</p>
              <p className="text-sm text-slate-600">Run your own numbers against benchmark ranges.</p>
            </Link>
            <Link href="/resources/roas-planning-template" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">Download Planning Template</p>
              <p className="text-sm text-slate-600">Use benchmark assumptions in weekly planning.</p>
            </Link>
            <Link href="/profitability/ads" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">Go to Profitability Hub</p>
              <p className="text-sm text-slate-600">Convert benchmark wins into cash-flow-safe scale.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
