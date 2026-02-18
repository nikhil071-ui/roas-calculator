import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS Optimization Hub: Scale, Hold, or Pause Frameworks",
  description:
    "Actionable ROAS optimization frameworks across creative, funnel, bidding, and budget scaling decisions.",
  alternates: {
    canonical: "https://roas-calculator.tech/optimize/roas",
  },
};

export default function OptimizeRoasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">ROAS Optimization Hub</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            Use these playbooks when ROAS is below target, at break-even, or ready to scale.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Optimization Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-to-improve-roas-without-raising-budget" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">Improve ROAS Without Raising Budget</p>
              <p className="text-sm text-slate-600">Focus on conversion and AOV levers first.</p>
            </Link>
            <Link href="/blog/roas-audit-checklist" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">ROAS Audit Checklist</p>
              <p className="text-sm text-slate-600">Run diagnostics across tracking, funnel, and media.</p>
            </Link>
            <Link href="/blog/when-to-scale-or-pause-campaigns" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">When to Scale or Pause Campaigns</p>
              <p className="text-sm text-slate-600">Use threshold-based budget decisions.</p>
            </Link>
            <Link href="/blog/creative-testing-framework-for-roas" className="rounded-lg border border-slate-200 p-4 hover:border-blue-500 transition">
              <p className="font-semibold">Creative Testing Framework for ROAS</p>
              <p className="text-sm text-slate-600">Structure test cycles that improve return quality.</p>
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Decision Support Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ppc-toolkit" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">PPC Toolkit</p>
              <p className="text-sm text-slate-600">Tie ROAS to CAC, LTV, MER, and payback.</p>
            </Link>
            <Link href="/roas/target-cpa" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Target CPA Model</p>
              <p className="text-sm text-slate-600">Set guardrails before raising spend.</p>
            </Link>
            <Link href="/profitability/ads" className="rounded-lg border border-slate-200 p-4 hover:border-indigo-500 transition">
              <p className="font-semibold">Profitability Hub</p>
              <p className="text-sm text-slate-600">Validate if improved ROAS is actually profitable.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
