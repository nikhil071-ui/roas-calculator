import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology | ROAS Tools",
  description: "Methodology for ROAS formulas, benchmarks, QA checks, and content review cadence.",
  alternates: {
    canonical: "https://roas-calculator.tech/methodology",
  },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Methodology</h1>
          <p className="text-slate-600 mt-3">
            This page explains how we calculate ROAS metrics and maintain quality for marketing analytics tools.
          </p>
        </div>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Core formulas</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>ROAS = Revenue / Ad Spend</li>
            <li>Break-even ROAS = 1 / Contribution Margin</li>
            <li>CAC = Ad Spend / New Customers</li>
            <li>LTV:CAC = Lifetime Value / CAC</li>
            <li>MER = Total Revenue / Total Marketing Spend</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Benchmark framework</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Benchmarks are directional ranges, not universal targets.</li>
            <li>We adjust interpretation by business model, margin, and objective.</li>
            <li>Scenario pages provide channel and industry context for planning.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Quality and review cadence</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Major guides are reviewed quarterly or after major platform updates.</li>
            <li>Formula changes require reviewer sign-off before publishing.</li>
            <li>Corrections are logged with updated review timestamps.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
