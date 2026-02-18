import Link from "next/link";
import type { Metadata } from "next";
import TrackedDownloadLink from "@/app/components/TrackedDownloadLink";
import TrackedLink from "@/app/components/TrackedLink";

export const metadata: Metadata = {
  title: "ROAS Planning Template (Scenario + Budget Guardrails)",
  description:
    "Download and use a ROAS planning template to model scenario outcomes, break-even thresholds, and scale/hold/pause actions.",
  alternates: {
    canonical: "https://roas-calculator.tech/resources/roas-planning-template",
  },
  openGraph: {
    title: "ROAS Planning Template (Scenario + Budget Guardrails)",
    description:
      "Plan ROAS scenarios with break-even and decision thresholds before moving ad budgets.",
    url: "https://roas-calculator.tech/resources/roas-planning-template",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS Planning Template (Scenario + Budget Guardrails)",
    description:
      "Plan ROAS scenarios with break-even and decision thresholds before moving ad budgets.",
  },
};

export default function RoasPlanningTemplatePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <main className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
        <div>
          <Link href="/resources" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Resources</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">ROAS Planning Template</h1>
          <p className="text-slate-600 mt-3">
            This template helps teams model base, conservative, and aggressive ROAS outcomes with built-in break-even and decision guardrails.
          </p>
        </div>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What the Template Includes</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Scenario rows for base, conservative, aggressive assumptions.</li>
            <li>Break-even ROAS and actual ROAS comparisons.</li>
            <li>Scale/hold/pause recommendation column.</li>
            <li>Net contribution estimates for budget review meetings.</li>
          </ul>
        </section>

        <section className="flex flex-wrap gap-3">
          <TrackedDownloadLink
            href="/resources/roas-scenario-planner.csv"
            templateName="roas_scenario_planner"
            fileType="csv"
            sourcePage="/resources/roas-planning-template"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Download ROAS Scenario Planner
          </TrackedDownloadLink>
          <TrackedDownloadLink
            href="/resources/ppc-budget-planner.csv"
            templateName="ppc_budget_planner"
            fileType="csv"
            sourcePage="/resources/roas-planning-template"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition"
          >
            Download Budget Planner
          </TrackedDownloadLink>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Cluster Workflow</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog/roas-benchmarks-2026" className="text-blue-700 hover:underline">Benchmark Context</Link>
            <Link href="/" className="text-blue-700 hover:underline">ROAS Calculator</Link>
            <Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline">Break-even by Margin</Link>
            <TrackedLink
              href="/ppc-toolkit"
              eventName="cta_click_ppc_toolkit"
              eventParams={{ source_page: "/resources/roas-planning-template", cta_module: "cluster_workflow", position: "mid_content" }}
              className="text-blue-700 hover:underline"
            >
              PPC Toolkit
            </TrackedLink>
          </div>
        </section>
      </main>
    </div>
  );
}

