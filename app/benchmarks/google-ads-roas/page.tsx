import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads ROAS Benchmarks 2026",
  description:
    "Benchmark ranges for Google Ads ROAS across Search and Shopping plus break-even-based interpretation guidance.",
  alternates: {
    canonical: "https://roas-calculator.tech/benchmarks/google-ads-roas",
  },
};

export default function GoogleAdsRoasBenchmarksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link href="/benchmarks/roas" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Benchmarks Hub
          </Link>
          <h1 className="text-3xl font-bold mt-2">Google Ads ROAS Benchmarks</h1>
          <p className="text-slate-600 mt-3">
            Evaluate ROAS by query intent and feed quality. Strong numbers on branded traffic can hide weak non-brand efficiency.
          </p>
        </div>
        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Quick Interpretation</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Search campaigns often show higher ROAS than broad upper-funnel formats.</li>
            <li>Shopping ROAS depends heavily on feed quality, pricing, and conversion UX.</li>
            <li>Always compare channel ROAS against blended MER and CAC payback.</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link href="/roas/google-ads" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Open Google Ads ROAS Calculator</Link>
            <Link href="/roas/google-shopping-roas" className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Open Shopping ROAS Calculator</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
