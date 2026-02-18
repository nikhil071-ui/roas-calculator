import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Downloads and Templates | ROAS Tools",
  description: "Download free templates and checklists for ROAS tracking, image compression, PDF optimization, and currency transfers.",
  keywords: [
    "roas template",
    "ppc budget planner",
    "roas scenario planner",
    "image compression checklist",
    "pdf compression checklist",
    "currency transfer checklist",
    "marketing templates",
  ],
  openGraph: {
    title: "Free Downloads and Templates | ROAS Tools",
    description: "Download free templates and checklists for ROAS tracking, image compression, PDF optimization, and currency transfers.",
    url: "https://roas-calculator.tech/resources",
  },
      twitter: {
    card: "summary_large_image",
    title: "Free Downloads and Templates | ROAS Tools",
    description: "Download free templates and checklists for ROAS tracking, image compression, PDF optimization, and currency transfers.",
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
            Practical downloads to help you track ROAS, CAC, LTV assumptions, and budget decisions, plus compression and currency checklists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ROAS Tracking Template (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Track daily spend, revenue, ROAS, break-even thresholds, and profit in one sheet.
            </p>
            <a
              href="/resources/roas-tracking-template.csv"
              download
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Download CSV
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">ROAS Scenario Planner (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Compare base, conservative, and aggressive spend plans with break-even ROAS and scale/hold/pause decisions.
            </p>
            <a
              href="/resources/roas-scenario-planner.csv"
              download
              className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Download Planner
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">PPC Budget Planner (CSV)</h2>
            <p className="text-slate-600 mt-2">
              Allocate budgets by channel with target CPA, projected revenue, target ROAS, and guardrail actions.
            </p>
            <a
              href="/resources/ppc-budget-planner.csv"
              download
              className="inline-block mt-4 bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-700 transition"
            >
              Download Planner
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Image Compression Checklist (TXT)</h2>
            <p className="text-slate-600 mt-2">
              Step-by-step checklist to hit size limits for exam portals and web uploads.
            </p>
            <a
              href="/resources/image-compression-checklist.txt"
              download
              className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Download Checklist
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">PDF Compression Checklist (TXT)</h2>
            <p className="text-slate-600 mt-2">
              Quick guide for choosing DPI, image settings, and safe compression levels.
            </p>
            <a
              href="/resources/pdf-compression-checklist.txt"
              download
              className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Download Checklist
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Currency Transfer Checklist (TXT)</h2>
            <p className="text-slate-600 mt-2">
              Compare rates and fees to avoid hidden costs on international transfers.
            </p>
            <a
              href="/resources/currency-transfer-checklist.txt"
              download
              className="inline-block mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Download Checklist
            </a>
          </div>
        </div>

        <div className="mt-12 bg-white border border-slate-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Need More?</h3>
          <p className="text-slate-600">
            Need a full metric stack? Use our PPC Toolkit for ROAS, break-even ROAS, CAC, LTV, MER, and target CPA workflows.
          </p>
          <Link href="/ppc-toolkit" className="inline-block mt-4 text-blue-700 font-semibold hover:underline">
            Open PPC Toolkit
          </Link>
        </div>
      </div>
    </div>
  );
}
