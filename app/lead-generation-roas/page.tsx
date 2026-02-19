import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Lead Generation ROAS Calculator (CPL to Revenue)",
  description:
    "Lead-gen ROAS page with CPL benchmarks, close-rate assumptions, and worked examples for pipeline-aware budget decisions.",
  alternates: {
    canonical: "https://roas-calculator.tech/lead-generation-roas",
  },
};

export default function LeadGenerationRoasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Lead Generation ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Designed for lead-gen teams where CPL, close rate, and deal value determine true ROAS.
          </p>
        </div>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Lead Gen Benchmark Snapshot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Metric</th>
                  <th className="text-left px-4 py-2">Typical</th>
                  <th className="text-left px-4 py-2">Strong</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-t">Lead-gen ROAS</td>
                  <td className="px-4 py-2 border-t">2.5x to 5.0x</td>
                  <td className="px-4 py-2 border-t">6.0x to 10.0x+</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Close Rate</td>
                  <td className="px-4 py-2 border-t">8% to 15%</td>
                  <td className="px-4 py-2 border-t">16%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Lead Gen Example</h2>
          <p className="text-slate-700">
            Example campaign: spend $6,000, 200 leads, CPL $30, close rate 12%, average closed value $900.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>Expected closed deals = 24</li>
            <li>Expected attributed revenue = $21,600</li>
            <li>Expected ROAS = 3.60x</li>
            <li>Decision = Hold and improve lead quality before scaling spend</li>
          </ul>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/roas/lead-gen-cpl-roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Lead Gen Calculator
          </Link>
          <Link href="/benchmarks/lead-gen-cpl-roas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            Lead Gen Benchmarks
          </Link>
          <Link href="/comparisons/cac-vs-cpa-vs-roas" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            CAC vs CPA vs ROAS
          </Link>
        </section>

        <EmailCaptureCard
          source="persona_lead_generation_roas"
          title="Get Lead Gen RPM/ROAS Benchmark Updates"
          description="Use these benchmark updates to stress-test CPL, close-rate assumptions, and sales-quality risk."
          buttonLabel="Send Lead Gen Benchmarks"
          helperText="Includes qualification and pipeline guardrails for paid channels."
        />
      </div>
    </main>
  );
}
