import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Author | ROAS Tools",
  description:
    "Learn who writes and maintains the content on ROAS Tools.",
  alternates: {
    canonical: "https://roas-calculator.tech/authors",
  },
};

export default function AuthorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Author and Site Owner</h1>
          <p className="text-slate-600 mt-3">
            ROAS Tools is currently written, maintained, and reviewed by a single owner.
          </p>
        </div>

        <section className="rounded-xl border border-slate-200 p-6 bg-slate-50">
          <h2 className="text-xl font-bold text-slate-900">Nikhil Chaudhary</h2>
          <p className="text-sm font-semibold text-blue-600 mt-1">
            Owner, Author, and Maintainer
          </p>
          <div className="mt-3 space-y-2 text-sm text-slate-700">
            <p>
              <strong>Role:</strong> Builds the calculators, maintains the website, updates
              content, and handles methodology and support pages.
            </p>
            <p>
              <strong>Focus:</strong> Practical ROAS, CAC, LTV, MER, break-even analysis,
              and privacy-first web tools.
            </p>
            <p>
              <strong>Editorial responsibility:</strong> Published pages are reviewed by the
              site owner before updates go live.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 p-6 bg-blue-50">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Editorial Notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>There is no separate editorial team listed on this site.</li>
            <li>Content and calculator updates are handled by Nikhil Chaudhary.</li>
            <li>Methodology and source references are documented on relevant pages.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
