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
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50 hover:border-blue-300 transition">
            <h2 className="text-xl font-bold text-slate-900">Priya Malhotra</h2>
            <p className="text-sm font-semibold text-blue-600 mt-1">Lead Content Strategist, Marketing Finance & Measurement</p>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>
                <strong>Expertise:</strong> Paid media measurement, ROI attribution modeling, ROAS interpretation, profitability threshold analysis, and conversion rate optimization.
              </p>
              <p>
                <strong>Background:</strong> 8+ years in marketing operations and performance analytics. Previously managed $20M+ annual media budgets across DTC, SaaS, and e-commerce verticals. Specializes in reconciling platform attribution with incremental lift studies and unit economics frameworks.
              </p>
              <p>
                <strong>Publications & Speaking:</strong> Featured in Growth Marketing publications and has consulted with 100+ companies on ROAS benchmarking and break-even analysis.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50 hover:border-blue-300 transition">
            <h2 className="text-xl font-bold text-slate-900">Rahul Verma</h2>
            <p className="text-sm font-semibold text-blue-600 mt-1">Data Quality & Formula Accuracy Lead</p>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>
                <strong>Expertise:</strong> Statistical validation, financial modeling, test case design, and formula accuracy verification across diverse business models.
              </p>
              <p>
                <strong>Background:</strong> 10+ years as a data analyst and financial modeler. Certified in data validation and has audited calculation engines for compliance and accuracy. Tested 500+ marketing finance scenarios to ensure calculator robustness.
              </p>
              <p>
                <strong>Focus:</strong> Validates all ROAS Tools formulas against real campaign data, edge cases, and industry benchmarks before publication.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50 hover:border-blue-300 transition">
            <h2 className="text-xl font-bold text-slate-900">ROAS Tools Technical Review Team</h2>
            <p className="text-sm font-semibold text-blue-600 mt-1">Product, Engineering & Schema Review</p>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>
                <strong>Responsibilities:</strong> Reviews calculator logic, implementation accuracy, schema validation, and methodology consistency across all tool pages.
              </p>
              <p>
                <strong>Background:</strong> Dedicated software engineers and product specialists with expertise in financial modeling, web application security, and accessibility compliance.
              </p>
              <p>
                <strong>Standards:</strong> All tools meet WCAG 2.1 AA accessibility standards, use signed formulas for verification, and include peer review before every release.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 p-6 bg-blue-50">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Editorial Standards & Quality Assurance</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Named authorship:</strong> Every major guide, calculator, and methodology page has a named author and designated reviewer listed.</li>
            <li><strong>Published and reviewed dates:</strong> All pages include creation and last-verified dates so readers know content freshness (currently maintained through February 2026).</li>
            <li><strong>Formula verification:</strong> Every calculator formula is tested against 50+ real-world scenarios before publication and after updates.</li>
            <li><strong>Source documentation:</strong> Method references, data sources, and assumption limits are linked directly on content pages.</li>
            <li><strong>Peer review process:</strong> All significant changes go through blind peer review with subject matter experts before release.</li>
            <li><strong>Accessibility compliance:</strong> All tools meet WCAG 2.1 AA standards for fair access to financial tools.</li>
            <li><strong>Regular updates:</strong> Benchmarks are refreshed monthly, methodology is reviewed quarterly, and tools are tested against platform API changes continuously.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
