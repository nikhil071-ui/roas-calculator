import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS Education Hub: Formula, Break-Even, and Interpretation",
  description:
    "Learn ROAS from first principles: formula, break-even math, good vs bad ranges, and how to use ROAS with CAC, LTV, and MER.",
  alternates: {
    canonical: "https://roas-calculator.tech/learn/roas",
  },
};

export default function LearnRoasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">ROAS Education Hub</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            This pillar explains ROAS clearly and links to calculation, benchmark, optimization, and profitability workflows.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Core Formula and Break-Even Logic</h2>
          <p className="text-slate-700 mb-4">ROAS = Revenue / Ad Spend. Break-even ROAS = 1 / contribution margin.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/roas/break-even-roas" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">Break-even ROAS calculator</p>
              <p className="text-sm text-slate-600">Compute your minimum target before scaling spend.</p>
            </Link>
            <Link href="/break-even-roas-by-margin" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">Break-even by margin table</p>
              <p className="text-sm text-slate-600">Quick lookup by contribution margin band.</p>
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Comparison Intent Cluster</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">ROAS vs ROI vs MER vs ACoS</p>
              <p className="text-sm text-slate-600">Choose the right metric by decision type.</p>
            </Link>
            <Link href="/comparisons/cac-vs-cpa-vs-roas" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">CAC vs CPA vs ROAS</p>
              <p className="text-sm text-slate-600">Align campaign and business efficiency goals.</p>
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What to Do After You Calculate</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ppc-toolkit" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">Open PPC Toolkit</p>
              <p className="text-sm text-slate-600">Validate ROAS with CAC, LTV, MER, and payback.</p>
            </Link>
            <Link href="/benchmarks/roas" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">Check Benchmarks</p>
              <p className="text-sm text-slate-600">Compare against channel and model ranges.</p>
            </Link>
            <Link href="/optimize/roas" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">Improve ROAS</p>
              <p className="text-sm text-slate-600">Run structured optimization and testing plans.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
