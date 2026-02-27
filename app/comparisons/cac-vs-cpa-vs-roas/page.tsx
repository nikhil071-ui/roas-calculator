import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA vs ROAS vs CAC: Which Metric Should You Optimize in 2026?",
  description:
    "Practical CPA vs ROAS vs CAC comparison with formulas, use cases, and a decision framework for campaign and budget decisions.",
  keywords: [
    "cac vs cpa",
    "cpa vs roas",
    "cac vs roas",
    "paid media metrics",
    "which metric to optimize",
  ],
  alternates: {
    canonical: "https://roas-calculator.tech/comparisons/cac-vs-cpa-vs-roas",
  },
  openGraph: {
    title: "CPA vs ROAS vs CAC: Which Metric Should You Optimize in 2026?",
    description:
      "Use this framework to decide when CPA, ROAS, or CAC should drive campaign and budget decisions.",
    url: "https://roas-calculator.tech/comparisons/cac-vs-cpa-vs-roas",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPA vs ROAS vs CAC: Which Metric Should You Optimize in 2026?",
    description:
      "Use this framework to decide when CPA, ROAS, or CAC should drive campaign and budget decisions.",
  },
};

export default function CACvsCPAvsROASPage() {
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CAC vs CPA vs ROAS",
    url: "https://roas-calculator.tech/comparisons/cac-vs-cpa-vs-roas",
    about: ["CAC", "CPA", "ROAS", "Paid Media Optimization"],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }} />
      <main className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/comparisons" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Comparisons
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">CPA vs ROAS vs CAC</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            Quick answer: optimize <strong>CPA</strong> for campaign efficiency, <strong>ROAS</strong> for revenue return, and <strong>CAC</strong> for business-level acquisition economics.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Formulas</h2>
          <div className="space-y-3 text-sm">
            <p className="font-mono bg-slate-50 border border-slate-200 rounded px-4 py-2">CPA = Ad Spend / Conversions</p>
            <p className="font-mono bg-slate-50 border border-slate-200 rounded px-4 py-2">ROAS = Revenue / Ad Spend</p>
            <p className="font-mono bg-slate-50 border border-slate-200 rounded px-4 py-2">CAC = Total Acquisition Spend / New Customers</p>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">When to Use Each Metric</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Metric</th>
                  <th className="text-left px-4 py-2">Best For</th>
                  <th className="text-left px-4 py-2">Common Mistake</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">CPA</td>
                  <td className="border-t px-4 py-2">Ad-set and campaign optimization</td>
                  <td className="border-t px-4 py-2">Ignoring conversion quality and downstream value</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">ROAS</td>
                  <td className="border-t px-4 py-2">Revenue efficiency by channel or campaign</td>
                  <td className="border-t px-4 py-2">Treating revenue return as profit without margin context</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">CAC</td>
                  <td className="border-t px-4 py-2">Business-level growth and payback planning</td>
                  <td className="border-t px-4 py-2">Comparing CAC without LTV and retention context</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Decision Framework</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Use CPA to tune traffic and conversion efficiency daily.</li>
            <li>Use ROAS to prioritize channels and creatives weekly.</li>
            <li>Use CAC with LTV and payback period for scaling decisions monthly.</li>
          </ol>
        </section>

        <section className="bg-slate-900 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Next Step</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/cac-calculator" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold">Open CAC Calculator</Link>
            <Link href="/" className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold">Open ROAS Calculator</Link>
            <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 font-semibold">Open PPC Toolkit</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
