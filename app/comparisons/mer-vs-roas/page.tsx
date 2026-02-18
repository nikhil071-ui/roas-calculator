import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MER vs ROAS: Executive Reporting vs Channel Optimization",
  description:
    "Understand MER vs ROAS with formulas, decision use-cases, and a practical framework for founders, CMOs, and performance teams.",
  keywords: [
    "mer vs roas",
    "marketing efficiency ratio",
    "blended roas",
    "executive marketing metrics",
    "channel optimization metrics",
  ],
  alternates: {
    canonical: "https://roas-calculator.tech/comparisons/mer-vs-roas",
  },
  openGraph: {
    title: "MER vs ROAS: Executive Reporting vs Channel Optimization",
    description:
      "Use this guide to decide when MER should drive executive decisions and when ROAS should drive campaign decisions.",
    url: "https://roas-calculator.tech/comparisons/mer-vs-roas",
  },
  twitter: {
    card: "summary_large_image",
    title: "MER vs ROAS: Executive Reporting vs Channel Optimization",
    description:
      "Use this guide to decide when MER should drive executive decisions and when ROAS should drive campaign decisions.",
  },
};

export default function MERvsROASPage() {
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MER vs ROAS",
    url: "https://roas-calculator.tech/comparisons/mer-vs-roas",
    about: ["MER", "ROAS", "Executive Reporting", "Paid Media"],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }} />
      <main className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/comparisons" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Comparisons
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">MER vs ROAS</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            Short answer: use <strong>ROAS</strong> for campaign-level optimization and <strong>MER</strong> for blended, business-level efficiency tracking.
          </p>
          <p className="text-slate-700 mt-3 max-w-3xl">
            Quick answer: if you need to decide where to move spend this week, use ROAS. If you need to report total marketing efficiency to leadership, use MER.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Core Formulas</h2>
          <div className="space-y-3 text-sm">
            <p className="font-mono bg-slate-50 border border-slate-200 rounded px-4 py-2">ROAS = Attributed Revenue / Ad Spend</p>
            <p className="font-mono bg-slate-50 border border-slate-200 rounded px-4 py-2">MER = Total Revenue / Total Marketing Spend</p>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Executive vs Operator Lens</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Question</th>
                  <th className="text-left px-4 py-2">Use ROAS</th>
                  <th className="text-left px-4 py-2">Use MER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-2">Which campaign should get more budget this week?</td>
                  <td className="border-t px-4 py-2">Yes</td>
                  <td className="border-t px-4 py-2">No</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2">Is total marketing spend improving business efficiency?</td>
                  <td className="border-t px-4 py-2">Partially</td>
                  <td className="border-t px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2">Are strong channels hiding weak channels?</td>
                  <td className="border-t px-4 py-2">No</td>
                  <td className="border-t px-4 py-2">Can happen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Practical Decision Rule</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Set channel-level guardrails with ROAS and break-even thresholds.</li>
            <li>Review blended MER weekly in leadership reporting.</li>
            <li>If MER is falling while ROAS is stable, inspect non-media costs and funnel leakage.</li>
          </ol>
        </section>

        <section className="bg-slate-900 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Run Your Blended Model</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/mer-calculator" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold">Open MER Calculator</Link>
            <Link href="/" className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold">Open ROAS Calculator</Link>
            <Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold">
              Compare More Metrics
            </Link>
          </div>
        </section>
        <section className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Updated February 18, 2026.
        </section>
        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Sources and References</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><a href="https://support.google.com/google-ads/answer/6268637" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Google Ads documentation for value-based bidding</a></li>
            <li><a href="https://www.shopify.com/blog/roas" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Shopify ROAS guidance for eCommerce teams</a></li>
            <li><a href="https://www.thinkwithgoogle.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Think with Google research and strategy resources</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
