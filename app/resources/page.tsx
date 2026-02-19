import Link from "next/link";
import type { Metadata } from "next";
import TrackedDownloadLink from "@/app/components/TrackedDownloadLink";
import TrackedLink from "@/app/components/TrackedLink";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Free Downloads and Templates | ROAS Tools",
  description: "Download free templates and checklists for ROAS tracking, CAC/LTV modeling, MER reporting, and paid media operations.",
  keywords: [
    "roas template",
    "ppc budget planner",
    "roas scenario planner",
    "ga4 conversion mapping",
    "mer tracker template",
    "cac ltv model template",
    "budget pacing template",
    "backlink outreach tracker",
    "guest post topic ideas",
    "outreach email templates",
    "seo checklist",
    "gsc index prune log",
    "ctr title test matrix",
    "weekly seo scoreboard",
    "marketing templates",
  ],
  openGraph: {
    title: "Free Downloads and Templates | ROAS Tools",
    description: "Download free templates and checklists for ROAS tracking, CAC/LTV modeling, MER reporting, and paid media operations.",
    url: "https://roas-calculator.tech/resources",
  },
      twitter: {
    card: "summary_large_image",
    title: "Free Downloads and Templates | ROAS Tools",
    description: "Download free templates and checklists for ROAS tracking, CAC/LTV modeling, MER reporting, and paid media operations.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/resources",
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-slate-500 hover:text-blue-600 transition text-sm">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Free Resources</h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Practical downloads to help you track ROAS, CAC, LTV assumptions, MER trends, and budget decisions.
          </p>
        </div>

        <EmailCaptureCard
          source="resources_page_top"
          title="Get the 2026 Ad Revenue Benchmark Sheet by Email"
          description="Direct signup form: join once and receive weekly RPM/ROAS benchmark updates plus planning templates."
          buttonLabel="Send Me the Benchmark Sheet"
          helperText="Email capture enabled here. You will be redirected to the resource access page after signup."
          className="mb-8"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Weekly SEO Scoreboard (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Track the 5 core growth levers in one sheet: backlinks, CTR tests, benchmark refreshes, index tuning, and GA4 funnel performance.
            </p>
            <TrackedDownloadLink
              href="/resources/weekly-seo-scoreboard.csv"
              templateName="weekly_seo_scoreboard"
              fileType="csv"
              sourcePage="/resources"
              className="inline-block mt-4 bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Download Scoreboard
            </TrackedDownloadLink>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">SEO 9/10 Gap Checklist (Ops Pack)</h2>
            <p className="text-slate-600 mt-2">
              Strict pass/fail checklist and execution logs for backlinks, CTR testing, benchmark refreshes, and GSC pruning.
            </p>
            <Link
              href="/resources/seo-9of10-checklist"
              className="inline-block mt-4 bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Open SEO Checklist
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Backlink Outreach Playbook (CSV + TXT)</h2>
            <p className="text-slate-600 mt-2">
              Complete outreach pack for marketing calculator SaaS: target websites, topic bank, and pitch templates.
            </p>
            <Link
              href="/resources/backlink-outreach-playbook"
              className="inline-block mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Open Outreach Playbook
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ROAS Tracking Template (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Track daily spend, revenue, ROAS, break-even thresholds, and profit in one sheet.
            </p>
            <TrackedDownloadLink
              href="/resources/roas-tracking-template.csv"
              templateName="roas_tracking_template"
              fileType="csv"
              sourcePage="/resources"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Download CSV
            </TrackedDownloadLink>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ROAS Scenario Planner (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Compare base, conservative, and aggressive spend plans with break-even ROAS and scale/hold/pause decisions.
            </p>
            <TrackedDownloadLink
              href="/resources/roas-scenario-planner.csv"
              templateName="roas_scenario_planner"
              fileType="csv"
              sourcePage="/resources"
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Download Planner
            </TrackedDownloadLink>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">PPC Budget Planner (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Allocate budgets by channel with target CPA, projected revenue, target ROAS, and guardrail actions.
            </p>
            <TrackedDownloadLink
              href="/resources/ppc-budget-planner.csv"
              templateName="ppc_budget_planner"
              fileType="csv"
              sourcePage="/resources"
              className="inline-block mt-4 bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
            >
              Download Planner
            </TrackedDownloadLink>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">CAC vs LTV Model Template (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Model CAC, LTV ratio, and payback windows by channel to decide scale, hold, or pause.
            </p>
            <TrackedDownloadLink
              href="/resources/cac-ltv-model-template.csv"
              templateName="cac_ltv_model_template"
              fileType="csv"
              sourcePage="/resources"
              className="inline-block mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Download Model
            </TrackedDownloadLink>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">MER Weekly Tracker (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Track blended MER weekly with target variance and action notes for leadership reporting.
            </p>
            <TrackedDownloadLink
              href="/resources/mer-weekly-tracker.csv"
              templateName="mer_weekly_tracker"
              fileType="csv"
              sourcePage="/resources"
              className="inline-block mt-4 bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-violet-700 transition"
            >
              Download Tracker
            </TrackedDownloadLink>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Budget Pacing Template (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Monitor daily spend pace vs target budget and expected ROAS to prevent overspend.
            </p>
            <TrackedDownloadLink
              href="/resources/budget-pacing-template.csv"
              templateName="budget_pacing_template"
              fileType="csv"
              sourcePage="/resources"
              className="inline-block mt-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition"
            >
              Download Template
            </TrackedDownloadLink>
          </div>

        </div>

        <div className="mt-10 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Measurement Setup</h3>
          <p className="text-slate-700">
            Need clean attribution and conversion reporting? Use our GA4 implementation map for calculator events and template downloads.
          </p>
          <Link href="/resources/ga4-conversion-mapping" className="inline-block mt-4 text-indigo-700 font-semibold hover:underline">
            Open GA4 Conversion Mapping
          </Link>
        </div>

        <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">ROAS Planning Pack</h3>
          <p className="text-slate-700">
            Need a guided scenario workbook? Use the dedicated planning page with workflow links from benchmark to calculator to toolkit.
          </p>
          <Link href="/resources/roas-planning-template" className="inline-block mt-4 text-emerald-700 font-semibold hover:underline">
            Open ROAS Planning Template Page
          </Link>
        </div>

        <EmailCaptureCard
          source="resources_page_bottom"
          variant="compact"
          title="Want Benchmark Updates Instead of One-Off Downloads?"
          description="Get weekly publisher benchmark emails so templates stay current and actionable."
          buttonLabel="Subscribe for Weekly Benchmarks"
          helperText="Includes ROAS, CAC payback, MER ranges, and decision prompts."
          className="mt-10"
        />

        <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Recommended Workflow</h3>
          <p className="text-slate-600 mb-4">
            Start with the calculators, then use templates to operationalize decisions across weekly reporting.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="text-blue-700 font-semibold hover:underline">ROAS Calculator</Link>
            <Link href="/cac-calculator" className="text-blue-700 font-semibold hover:underline">CAC Calculator</Link>
            <Link href="/ltv-calculator" className="text-blue-700 font-semibold hover:underline">LTV Calculator</Link>
            <Link href="/mer-calculator" className="text-blue-700 font-semibold hover:underline">MER Calculator</Link>
            <Link href="/payback-period-calculator" className="text-blue-700 font-semibold hover:underline">Payback Calculator</Link>
            <Link href="/comparisons/mer-vs-roas" className="text-blue-700 font-semibold hover:underline">MER vs ROAS</Link>
          </div>
        </div>

        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Need More?</h3>
          <p className="text-slate-600">
            Need a full metric stack? Use our PPC Toolkit for ROAS, break-even ROAS, CAC, LTV, MER, and target CPA workflows.
          </p>
          <TrackedLink
            href="/ppc-toolkit"
            eventName="cta_click_ppc_toolkit"
            eventParams={{ source_page: "/resources", cta_module: "need_more", position: "footer" }}
            className="inline-block mt-4 text-blue-700 font-semibold hover:underline"
          >
            Open PPC Toolkit
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
