import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS vs ROI vs MER vs ACoS: Full Comparison",
  description:
    "Understand the difference between ROAS, ROI, MER, and ACoS with formulas, use-cases, and when each metric should drive decisions.",
  keywords: [
    "roas vs roi",
    "mer vs roas",
    "acos vs roas",
    "marketing efficiency ratio",
    "ppc metrics comparison",
  ],
  alternates: {
    canonical: "https://roas-calculator.tech/comparisons/roas-vs-roi-vs-mer-vs-acos",
  },
  openGraph: {
    title: "ROAS vs ROI vs MER vs ACoS: Full Comparison",
    description:
      "A practical comparison guide with formulas and decision rules for ROAS, ROI, MER, and ACoS.",
    url: "https://roas-calculator.tech/comparisons/roas-vs-roi-vs-mer-vs-acos",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS vs ROI vs MER vs ACoS: Full Comparison",
    description:
      "A practical comparison guide with formulas and decision rules for ROAS, ROI, MER, and ACoS.",
  },
};

export default function MetricComparisonPage() {
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ROAS vs ROI vs MER vs ACoS",
    url: "https://roas-calculator.tech/comparisons/roas-vs-roi-vs-mer-vs-acos",
    about: ["ROAS", "ROI", "MER", "ACoS", "Paid Media Metrics"],
    isPartOf: {
      "@type": "WebSite",
      name: "ROAS Tools",
      url: "https://roas-calculator.tech/",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }} />
      <main className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/comparisons" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Comparisons
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">ROAS vs ROI vs MER vs ACoS</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            Teams confuse these metrics and optimize the wrong lever. Use this page to pick the right KPI for each decision layer.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Metric Definitions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Metric</th>
                  <th className="text-left px-4 py-2">Formula</th>
                  <th className="text-left px-4 py-2">Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">ROAS</td>
                  <td className="border-t px-4 py-2 font-mono">Revenue / Ad Spend</td>
                  <td className="border-t px-4 py-2">Channel-level performance optimization</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">ROI</td>
                  <td className="border-t px-4 py-2 font-mono">(Profit - Cost) / Cost</td>
                  <td className="border-t px-4 py-2">Business-level profitability analysis</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">MER</td>
                  <td className="border-t px-4 py-2 font-mono">Total Revenue / Total Marketing Spend</td>
                  <td className="border-t px-4 py-2">Blended performance across all channels</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">ACoS</td>
                  <td className="border-t px-4 py-2 font-mono">Ad Spend / Ad Revenue</td>
                  <td className="border-t px-4 py-2">Amazon-focused efficiency tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Quick Conversion Rules</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>ROAS = 1 / ACoS (if ACoS is in decimal form).</li>
            <li>ACoS = 1 / ROAS.</li>
            <li>High ROAS can still mean poor ROI if margins are low.</li>
            <li>MER can hide weak channels because it blends winners and losers.</li>
          </ul>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Decision Framework</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Use ROAS for campaign-level bid and budget adjustments.</li>
            <li>Use ACoS when managing Amazon Sponsored Products.</li>
            <li>Use MER for weekly executive reporting across channels.</li>
            <li>Use ROI when deciding whether a program should continue at all.</li>
          </ol>
        </section>

        <section className="bg-slate-900 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Run the Numbers</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold">
              Open ROAS Calculator
            </Link>
            <Link href="/roas/amazon-ppc-acos" className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold">
              Open ACoS Calculator
            </Link>
            <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold">
              Open PPC Toolkit
            </Link>
            <Link href="/comparisons/mer-vs-roas" className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 font-semibold">
              Read MER vs ROAS
            </Link>
          </div>
        </section>

        <section className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Updated February 18, 2026.
        </section>
      </main>
    </div>
  );
}
