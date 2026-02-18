import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authors and Reviewers | ROAS Tools",
  description: "Meet the authors and reviewers behind ROAS Tools marketing analytics content and calculators.",
  alternates: {
    canonical: "https://roas-calculator.tech/authors",
  },
};

export default function AuthorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Authors and Reviewers</h1>
          <p className="text-slate-600 mt-3">
            We publish marketing analytics content with named authors, reviewer oversight, and documented update dates.
          </p>
        </div>

        <section className="space-y-4">
          <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Priya Malhotra</h2>
            <p className="text-sm text-slate-600">Lead Content Strategist and Author</p>
            <p className="text-slate-700 mt-2">
              Focuses on paid media measurement, ROAS interpretation, and conversion strategy education.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Sanjay Kumar</h2>
            <p className="text-sm text-slate-600">Founder, Product Owner, and Technical Reviewer</p>
            <p className="text-slate-700 mt-2">
              Reviews calculator logic, schema implementation, and methodology consistency across tool pages.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Rahul Verma</h2>
            <p className="text-sm text-slate-600">Data Quality and Formula QA Reviewer</p>
            <p className="text-slate-700 mt-2">
              Validates formula accuracy, test cases, and benchmark table consistency before updates are published.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-2">How author oversight works</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Every major ROAS guide has a named author and reviewer.</li>
            <li>Pages include published and last-reviewed dates.</li>
            <li>Method and source references are linked on content pages.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
