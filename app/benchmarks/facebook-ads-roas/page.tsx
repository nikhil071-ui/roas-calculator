import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Ads ROAS Benchmarks 2026",
  description:
    "Reference ranges and interpretation for Facebook Ads ROAS, including DTC scenarios and break-even alignment.",
  alternates: {
    canonical: "https://roas-calculator.tech/benchmarks/facebook-ads-roas",
  },
};

export default function FacebookAdsRoasBenchmarksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link href="/benchmarks/roas" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Benchmarks Hub
          </Link>
          <h1 className="text-3xl font-bold mt-2">Facebook Ads ROAS Benchmarks</h1>
          <p className="text-slate-600 mt-3">
            Use benchmark ranges as context, not targets. Your break-even ROAS and cash flow define the true threshold.
          </p>
        </div>
        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Quick Interpretation</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Below 2.0x often indicates margin pressure for low-AOV DTC products.</li>
            <li>3.0x to 4.5x is commonly workable for brands with stable conversion rates.</li>
            <li>Above 5.0x can justify controlled budget scaling if CAC and payback remain healthy.</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link href="/roas/facebook-ads" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Open Facebook ROAS Calculator</Link>
            <Link href="/blog/roas-benchmarks-2026" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">View 2026 Benchmark Source</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
