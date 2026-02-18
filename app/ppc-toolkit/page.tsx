import Link from "next/link";
import type { Metadata } from "next";
import TrackedDownloadLink from "@/app/components/TrackedDownloadLink";

export const metadata: Metadata = {
  title: "PPC Toolkit: ROAS, CAC, LTV, MER, Target CPA",
  description:
    "Use one toolkit for ROAS, break-even ROAS, CAC, LTV:CAC ratio, MER, and target CPA planning. Built for paid growth teams.",
  keywords: [
    "ppc toolkit",
    "cac calculator",
    "ltv calculator",
    "mer calculator",
    "target cpa formula",
    "break-even roas",
  ],
  alternates: {
    canonical: "https://roas-calculator.tech/ppc-toolkit",
  },
  openGraph: {
    title: "PPC Toolkit: ROAS, CAC, LTV, MER, Target CPA",
    description:
      "A practical planning hub for ROAS, CAC, LTV, MER, and budget decisions before you scale paid traffic.",
    url: "https://roas-calculator.tech/ppc-toolkit",
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Toolkit: ROAS, CAC, LTV, MER, Target CPA",
    description:
      "A practical planning hub for ROAS, CAC, LTV, MER, and budget decisions before you scale paid traffic.",
  },
};

export default function PPCToolkitPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PPC Profitability Toolkit",
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: "https://roas-calculator.tech/ppc-toolkit",
    publisher: {
      "@type": "Organization",
      name: "ROAS Tools",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }} />
      <main className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">PPC Profitability Toolkit</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">
            Competitor calculators usually stop at ROAS. This toolkit combines ROAS with CAC, LTV, MER, and target CPA so decisions are based on unit economics.
          </p>
          <p className="text-slate-700 mt-3 max-w-3xl">
            Quick definition: this page is a central planning hub for paid media unit economics, including acquisition cost, lifetime value, blended efficiency, and payback speed.
          </p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Core Metrics in One View</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Metric</th>
                  <th className="text-left px-4 py-2">Formula</th>
                  <th className="text-left px-4 py-2">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">ROAS</td>
                  <td className="border-t px-4 py-2 font-mono">Revenue / Ad Spend</td>
                  <td className="border-t px-4 py-2">Revenue efficiency of media spend</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">Break-even ROAS</td>
                  <td className="border-t px-4 py-2 font-mono">1 / Contribution Margin</td>
                  <td className="border-t px-4 py-2">Minimum ROAS required to avoid losses</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">CAC</td>
                  <td className="border-t px-4 py-2 font-mono">Ad Spend / New Customers</td>
                  <td className="border-t px-4 py-2">Cost to acquire one paying customer</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">LTV:CAC</td>
                  <td className="border-t px-4 py-2 font-mono">Lifetime Value / CAC</td>
                  <td className="border-t px-4 py-2">3:1+ is generally healthy for scale</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">MER</td>
                  <td className="border-t px-4 py-2 font-mono">Total Revenue / Total Marketing Spend</td>
                  <td className="border-t px-4 py-2">Measures blended channel efficiency</td>
                </tr>
                <tr>
                  <td className="border-t px-4 py-2 font-semibold">Target CPA</td>
                  <td className="border-t px-4 py-2 font-mono">AOV * Margin * Target Conversion Rate</td>
                  <td className="border-t px-4 py-2">Max CPA to hit profit target</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Decision Support Playbook</h2>
          <p className="text-slate-600 mb-4">
            Use this sequence before increasing spend: validate break-even ROAS, confirm CAC payback window, then check blended MER.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Scale when ROAS is 20%+ above break-even and LTV:CAC is greater than 3.</li>
            <li>Hold when ROAS is near break-even and conversion rate is unstable.</li>
            <li>Pause when ROAS is below break-even for 7-14 days despite creative and landing page iteration.</li>
          </ol>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Use-Case Calculators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/cac-calculator" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">CAC Calculator</p>
              <p className="text-sm text-slate-600">Track acquisition cost per new customer.</p>
            </Link>
            <Link href="/ltv-calculator" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">LTV Calculator</p>
              <p className="text-sm text-slate-600">Estimate customer value across retention windows.</p>
            </Link>
            <Link href="/mer-calculator" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">MER Calculator</p>
              <p className="text-sm text-slate-600">Monitor blended channel efficiency.</p>
            </Link>
            <Link href="/payback-period-calculator" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">CAC Payback Calculator</p>
              <p className="text-sm text-slate-600">See how fast acquisition spend returns.</p>
            </Link>
            <Link href="/roas/break-even-roas" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">Break-even ROAS</p>
              <p className="text-sm text-slate-600">Find minimum return required before scaling.</p>
            </Link>
            <Link href="/roas/target-cpa" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">Target CPA</p>
              <p className="text-sm text-slate-600">Set cost-per-acquisition guardrails for paid channels.</p>
            </Link>
            <Link href="/roas/google-shopping-roas" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">Google Shopping ROAS</p>
              <p className="text-sm text-slate-600">Plan feed-based campaign profitability.</p>
            </Link>
            <Link href="/roas/lead-gen-cpl-roas" className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-sm transition">
              <p className="font-semibold">Lead Gen CPL ROAS</p>
              <p className="text-sm text-slate-600">Convert CPL assumptions into revenue outcomes.</p>
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Cluster Navigation</h2>
          <p className="text-slate-600 mb-4">
            Use this loop for weekly planning: learn the metric, benchmark it, optimize execution, then validate profitability.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/learn/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">ROAS Education</p>
            </Link>
            <Link href="/benchmarks/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">ROAS Benchmarks</p>
            </Link>
            <Link href="/optimize/roas" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">ROAS Optimization</p>
            </Link>
            <Link href="/profitability/ads" className="rounded-lg border border-slate-200 p-3 hover:border-blue-500 transition">
              <p className="font-semibold">Profitability Hub</p>
            </Link>
          </div>
        </section>

        <section className="bg-slate-900 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Templates for Practitioners</h2>
          <p className="text-slate-300 mb-4">
            Download scenario planners and budget models for weekly performance reviews and stakeholder reporting.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrackedDownloadLink
              href="/resources/roas-scenario-planner.csv"
              templateName="roas_scenario_planner"
              fileType="csv"
              sourcePage="/ppc-toolkit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold"
            >
              Download Scenario Planner
            </TrackedDownloadLink>
            <TrackedDownloadLink
              href="/resources/ppc-budget-planner.csv"
              templateName="ppc_budget_planner"
              fileType="csv"
              sourcePage="/ppc-toolkit"
              className="px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-semibold"
            >
              Download Budget Planner
            </TrackedDownloadLink>
          </div>
        </section>
      </main>
    </div>
  );
}
