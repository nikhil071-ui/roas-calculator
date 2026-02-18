import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad Profitability Hub: CAC, LTV, MER, and Payback",
  description:
    "Profitability hub for paid growth teams. Combine ROAS with CAC, LTV, MER, and CAC payback period before scaling spend.",
  alternates: {
    canonical: "https://roas-calculator.tech/profitability/ads",
  },
};

export default function ProfitabilityAdsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Ad Profitability Hub</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            This pillar helps you move from top-line ROAS to full-funnel unit economics and cash flow protection.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Core Unit Economics Stack</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/cac-calculator" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">CAC Calculator</p>
              <p className="text-sm text-slate-600">Track acquisition cost by channel and period.</p>
            </Link>
            <Link href="/ltv-calculator" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">LTV Calculator</p>
              <p className="text-sm text-slate-600">Estimate value created by retention and margin.</p>
            </Link>
            <Link href="/mer-calculator" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">MER Calculator</p>
              <p className="text-sm text-slate-600">Monitor blended marketing efficiency.</p>
            </Link>
            <Link href="/payback-period-calculator" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">CAC Payback Calculator</p>
              <p className="text-sm text-slate-600">Quantify cash flow recovery speed in months.</p>
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Decision Frameworks</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ppc-toolkit" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Use PPC Toolkit</p>
              <p className="text-sm text-slate-600">Consolidate all metrics in one planning flow.</p>
            </Link>
            <Link href="/blog/payback-period-cash-flow-saas" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Read Payback Guide</p>
              <p className="text-sm text-slate-600">SaaS-specific cash flow and hiring implications.</p>
            </Link>
            <Link href="/resources/roas-planning-template" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Download Templates</p>
              <p className="text-sm text-slate-600">Run scenario planning in weekly reviews.</p>
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Internal Cluster Loop</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/learn/roas" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">ROAS Education</p>
              <p className="text-sm text-slate-600">Recheck formula and break-even assumptions.</p>
            </Link>
            <Link href="/benchmarks/roas" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">ROAS Benchmarks</p>
              <p className="text-sm text-slate-600">Use channel ranges to frame expectations.</p>
            </Link>
            <Link href="/optimize/roas" className="rounded-lg border border-slate-200 p-4 hover:border-emerald-500 transition">
              <p className="font-semibold">ROAS Optimization</p>
              <p className="text-sm text-slate-600">Apply actions after profitability validation.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
