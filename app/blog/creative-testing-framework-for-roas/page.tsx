import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Testing Framework for ROAS Improvement",
  description:
    "A practical creative testing framework to improve ROAS with hypothesis-driven iterations and structured winner promotion.",
  alternates: {
    canonical: "https://roas-calculator.tech/blog/creative-testing-framework-for-roas",
  },
};

export default function CreativeTestingFrameworkPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-6">
        <Link href="/blog" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Blog</Link>
        <h1 className="text-3xl font-bold">Creative Testing Framework for ROAS</h1>
        <p className="text-slate-700">
          Most accounts underperform because creative tests are random. Use a fixed cycle and promote winners with clear thresholds.
        </p>
        <h2 className="text-2xl font-bold">Weekly Test System</h2>
        <ol className="list-decimal pl-5 space-y-2 text-slate-700">
          <li>Define one hypothesis per test round: hook, offer, proof, or CTA angle.</li>
          <li>Keep audience and placement stable while testing creative variables.</li>
          <li>Judge tests by qualified conversion outcomes, not just CTR.</li>
          <li>Promote winners only when they beat control for multiple days.</li>
        </ol>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-semibold text-slate-900 mb-2">Connect creative wins to economics</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/optimize/roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Optimization Hub</Link>
            <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">PPC Toolkit</Link>
            <Link href="/resources/roas-planning-template" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">Planning Template</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
