import Link from "next/link";
import type { Metadata } from "next";
import TrackedDownloadLink from "@/app/components/TrackedDownloadLink";

export const metadata: Metadata = {
  title: "SEO 9/10 Gap Checklist",
  description:
    "Strict pass/fail checklist for backlinks, CTR tests, benchmark refresh cadence, GSC index pruning, and GA4 conversion funnel quality.",
  alternates: {
    canonical: "https://roas-calculator.tech/resources/seo-9of10-checklist",
  },
};

export default function SeoNineOfTenChecklistPage() {
  const checklist = [
    { item: "Programmatic SEO templates live", status: "PASS", evidence: "/industry/*, /platform/*, /roas-scenarios/*" },
    { item: "EEAT trust pages live", status: "PASS", evidence: "/authors, /methodology, /data-sources" },
    { item: "Internal link modules across blog", status: "PASS", evidence: "BlogInternalLinks component" },
    { item: "Monthly backlink execution tracking", status: "PARTIAL", evidence: "Logs created, placements pending" },
    { item: "CTR title/meta testing framework", status: "PASS", evidence: "ctr-title-meta-test-matrix.csv" },
    { item: "Quarterly benchmark refresh cadence", status: "PASS", evidence: "quarterly-benchmark-refresh-log.csv" },
    { item: "GSC index prune workflow", status: "PASS", evidence: "gsc-index-prune-log.csv" },
    { item: "GA4 conversion funnel map", status: "PASS", evidence: "/resources/ga4-conversion-mapping" },
    { item: "Calculator completion optimization", status: "PASS", evidence: "P0 conversion upgrades in RoasClient" },
    { item: "Authority backlinks from high-relevance domains", status: "PARTIAL", evidence: "Outreach resources shipped, execution required" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <main className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-8">
        <div>
          <Link href="/resources" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Resources</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">SEO 9/10 Gap Checklist</h1>
          <p className="text-slate-600 mt-3">
            Use this strict pass/fail operating sheet to close the remaining SEO gap from strong foundation to top-tier competitiveness.
          </p>
        </div>

        <section className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-4 py-2">Checklist Item</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {checklist.map((row) => (
                <tr key={row.item}>
                  <td className="border-t px-4 py-2">{row.item}</td>
                  <td className="border-t px-4 py-2 font-semibold">
                    <span className={row.status === "PASS" ? "text-emerald-600" : "text-amber-600"}>{row.status}</span>
                  </td>
                  <td className="border-t px-4 py-2">{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Execution Assets</h2>
          <div className="flex flex-wrap gap-3">
            <TrackedDownloadLink
              href="/resources/backlink-monthly-placement-log.csv"
              templateName="backlink_monthly_placement_log"
              fileType="csv"
              sourcePage="/resources/seo-9of10-checklist"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Backlink Placement Log
            </TrackedDownloadLink>
            <TrackedDownloadLink
              href="/resources/ctr-title-meta-test-matrix.csv"
              templateName="ctr_title_meta_test_matrix"
              fileType="csv"
              sourcePage="/resources/seo-9of10-checklist"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              CTR Test Matrix
            </TrackedDownloadLink>
            <TrackedDownloadLink
              href="/resources/quarterly-benchmark-refresh-log.csv"
              templateName="quarterly_benchmark_refresh_log"
              fileType="csv"
              sourcePage="/resources/seo-9of10-checklist"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              Benchmark Refresh Log
            </TrackedDownloadLink>
            <TrackedDownloadLink
              href="/resources/gsc-index-prune-log.csv"
              templateName="gsc_index_prune_log"
              fileType="csv"
              sourcePage="/resources/seo-9of10-checklist"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition"
            >
              GSC Index Prune Log
            </TrackedDownloadLink>
          </div>
        </section>
      </main>
    </div>
  );
}
