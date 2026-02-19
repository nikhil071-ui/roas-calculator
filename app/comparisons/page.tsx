import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tool Comparisons | ROAS, CAC, CPA and More",
  description: "Compare ROAS, CAC, CPA, ROI, MER, and ACoS frameworks with practical guides plus side-by-side tool comparisons.",
  keywords: [
    "tool comparisons",
    "roas calculator comparison",
    "cac vs cpa vs roas",
    "mer vs roas",
    "roas vs roi",
  ],
  openGraph: {
    title: "Tool Comparisons | ROAS, CAC, CPA and More",
    description: "Compare ROAS, CAC, CPA, ROI, MER, and ACoS frameworks with practical guides plus side-by-side tool comparisons.",
    url: "https://roas-calculator.tech/comparisons",
  },
      twitter: {
    card: "summary_large_image",
    title: "Tool Comparisons | ROAS, CAC, CPA and More",
    description: "Compare ROAS, CAC, CPA, ROI, MER, and ACoS frameworks with practical guides plus side-by-side tool comparisons.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/comparisons",
  },
};

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-slate-500 hover:text-blue-600 transition text-sm">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Tool Comparisons</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Honest comparisons that highlight speed, privacy, accuracy, and ease of use.
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Metrics Comparison: MER vs ROAS</h2>
            <p className="text-slate-700 mt-2">
              Clarify when to use blended MER for executive reporting and when to use ROAS for campaign optimization.
            </p>
            <Link
              href="/comparisons/mer-vs-roas"
              className="inline-block mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Open Comparison Guide
            </Link>
          </section>

          <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Metrics Comparison: CAC vs CPA vs ROAS</h2>
            <p className="text-slate-700 mt-2">
              Decide whether to optimize campaign CPA, channel-level ROAS, or business-level CAC based on your growth stage.
            </p>
            <Link
              href="/comparisons/cac-vs-cpa-vs-roas"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Open Comparison Guide
            </Link>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Metrics Comparison: ROAS vs ROI vs MER vs ACoS</h2>
            <p className="text-slate-700 mt-2">
              Understand which metric to use for campaign optimization, executive reporting, and profitability decisions.
            </p>
            <Link
              href="/comparisons/roas-vs-roi-vs-mer-vs-acos"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Open Comparison Guide
            </Link>
          </section>

          <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ROAS Calculator: ROAS Tools vs Alternatives</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-3 py-2">Feature</th>
                    <th className="text-left px-3 py-2">ROAS Tools</th>
                    <th className="text-left px-3 py-2">Typical Calculators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-t">Break-even ROAS</td>
                    <td className="px-3 py-2 border-t">Included</td>
                    <td className="px-3 py-2 border-t">Often missing</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Profit modeling</td>
                    <td className="px-3 py-2 border-t">Included</td>
                    <td className="px-3 py-2 border-t">Basic ROAS only</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-t">Privacy</td>
                    <td className="px-3 py-2 border-t">No account required</td>
                    <td className="px-3 py-2 border-t">Often email gated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Cluster Hubs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <Link href="/learn/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">ROAS Education</p>
            </Link>
            <Link href="/benchmarks/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">ROAS Benchmarks</p>
            </Link>
            <Link href="/optimize/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">Ad Optimization</p>
            </Link>
            <Link href="/profitability/ads" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">Profitability</p>
            </Link>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Want a Head-to-Head Feature?</h3>
          <p className="text-slate-600">
            Tell us which tool you want compared and we will add it with transparent criteria and testing.
          </p>
          <Link href="/contact" className="inline-block mt-4 text-blue-700 font-semibold hover:underline">
            Request a comparison
          </Link>
        </div>
      </div>
    </div>
  );
}
