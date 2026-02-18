import Link from "next/link";
import type { Metadata } from "next";
import TrackedDownloadLink from "@/app/components/TrackedDownloadLink";
import TrackedLink from "@/app/components/TrackedLink";

export const metadata: Metadata = {
  title: "Backlink Outreach Playbook for Marketing Calculator SaaS",
  description:
    "Download outreach trackers, topic banks, and pitch templates to earn backlinks for a marketing calculator SaaS.",
  alternates: {
    canonical: "https://roas-calculator.tech/resources/backlink-outreach-playbook",
  },
  openGraph: {
    title: "Backlink Outreach Playbook for Marketing Calculator SaaS",
    description:
      "Practical outreach assets: target site tracker, guest post topic bank, and email templates.",
    url: "https://roas-calculator.tech/resources/backlink-outreach-playbook",
  },
};

export default function BacklinkOutreachPlaybookPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <main className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
        <div>
          <Link href="/resources" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Resources</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Backlink Outreach Playbook</h1>
          <p className="text-slate-600 mt-3">
            This pack is built for marketing calculator SaaS teams to run consistent outreach and earn authority links.
          </p>
        </div>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Downloads Included</h2>
          <div className="flex flex-wrap gap-3">
            <TrackedDownloadLink
              href="/resources/backlink-outreach-tracker.csv"
              templateName="backlink_outreach_tracker"
              fileType="csv"
              sourcePage="/resources/backlink-outreach-playbook"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Outreach Tracker CSV
            </TrackedDownloadLink>
            <TrackedDownloadLink
              href="/resources/guest-post-topic-bank.csv"
              templateName="guest_post_topic_bank"
              fileType="csv"
              sourcePage="/resources/backlink-outreach-playbook"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Guest Post Topic Bank CSV
            </TrackedDownloadLink>
            <TrackedDownloadLink
              href="/resources/outreach-email-templates.txt"
              templateName="outreach_email_templates"
              fileType="txt"
              sourcePage="/resources/backlink-outreach-playbook"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition"
            >
              Outreach Email Templates TXT
            </TrackedDownloadLink>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Execution Workflow</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Prioritize sites by editorial quality and audience relevance.</li>
            <li>Pitch 2 to 3 topic options with one proof asset link.</li>
            <li>Send two follow-ups at day 4 and day 9.</li>
            <li>Track status, acceptance, publication URL, and anchor used.</li>
          </ol>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Internal Destination Pages for Link Equity</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/ppc-toolkit" className="text-blue-700 hover:underline">PPC Toolkit</Link>
            <Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="text-blue-700 hover:underline">ROAS vs ROI vs MER vs ACoS</Link>
            <Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline">Break-even ROAS by Margin</Link>
            <Link href="/blog/roas-benchmarks-2026" className="text-blue-700 hover:underline">ROAS Benchmarks 2026</Link>
          </div>
        </section>

        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">Next Step</h2>
          <p className="text-slate-700">
            After outreach goes live, align links with your content cluster and update internal links from benchmark posts to priority calculator pages.
          </p>
          <TrackedLink
            href="/blog/roas-benchmarks-2026"
            eventName="cta_click_blog_benchmarks_2026"
            eventParams={{ source_page: "/resources/backlink-outreach-playbook", cta_module: "next_step", position: "footer" }}
            className="inline-block mt-4 text-emerald-700 font-semibold hover:underline"
          >
            Open ROAS Benchmarks 2026
          </TrackedLink>
        </section>
      </main>
    </div>
  );
}
