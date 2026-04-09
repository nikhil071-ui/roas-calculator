import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getScenarioBySlug, scenarioPages } from "@/app/lib/pseo";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateStaticParams() {
  return scenarioPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getScenarioBySlug(slug);
  if (!data) {
    return {
      title: "ROAS Scenario Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  return {
    title: data.title,
    description: data.description,
    keywords: [data.primaryKeyword, ...data.relatedKeywords],
    robots: {
      index: false,
      follow: false,
    },
    alternates: { canonical: `https://roas-calculator.tech/roas-scenarios/${slug}` },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://roas-calculator.tech/roas-scenarios/${slug}`,
    },
  };
}

export default async function ScenarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getScenarioBySlug(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/roas-scenarios" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to ROAS Scenarios
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{data.h1}</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">{data.intro}</p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Scenario benchmark range</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Lower Band</p>
              <p className="text-xl font-bold text-slate-900">{data.benchmark.low}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Mid Band</p>
              <p className="text-xl font-bold text-slate-900">{data.benchmark.mid}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Strong Band</p>
              <p className="text-xl font-bold text-slate-900">{data.benchmark.high}</p>
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Execution checklist</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {data.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link href={data.recommendedCalculatorPath} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Open Recommended Tool
            </Link>
            <Link href="/learn/roas" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              ROAS Education Hub
            </Link>
            <Link href="/profitability/ads" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
              Profitability Hub
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Scenario Interpretation</h2>
          <p className="text-slate-700">
            Use this scenario page to pressure-test assumptions before changing spend. A scenario is valid only when input assumptions
            (margin, close rate, AOV, retention, or attribution window) match your current operating reality.
          </p>
          <p className="text-slate-700 mt-3">
            If the projected result is close to break-even, prioritize optimization and measurement quality before scaling budget.
          </p>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Method and Data Notes</h2>
          <p className="text-slate-700">
            Benchmark ranges are directional references. Final decisions should be verified against your own contribution economics
            and updated platform conditions.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/methodology" className="text-blue-700 hover:underline">Methodology</Link>
            <Link href="/data-sources" className="text-blue-700 hover:underline">Data Sources</Link>
            <Link href="/resources/roas-planning-template" className="text-blue-700 hover:underline">ROAS Planning Template</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
