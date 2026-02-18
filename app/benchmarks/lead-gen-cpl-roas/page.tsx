import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Gen CPL to ROAS Benchmarks 2026",
  description:
    "Lead generation benchmark guide for translating CPL, close rate, and customer value into practical ROAS expectations.",
  alternates: {
    canonical: "https://roas-calculator.tech/benchmarks/lead-gen-cpl-roas",
  },
};

export default function LeadGenBenchmarksPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link href="/benchmarks/roas" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Benchmarks Hub
          </Link>
          <h1 className="text-3xl font-bold mt-2">Lead Gen CPL to ROAS Benchmarks</h1>
          <p className="text-slate-600 mt-3">
            For lead-gen models, ROAS quality depends on lead quality and close-rate consistency, not CPL alone.
          </p>
        </div>
        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Quick Interpretation</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Low CPL can still produce poor ROAS if lead qualification is weak.</li>
            <li>Small close-rate gains can materially increase expected ROAS.</li>
            <li>Track ROAS with CAC and payback for full-funnel visibility.</li>
          </ul>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link href="/roas/lead-gen-cpl-roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Open Lead Gen Calculator</Link>
            <Link href="/comparisons/cac-vs-cpa-vs-roas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">Compare CAC vs CPA vs ROAS</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
