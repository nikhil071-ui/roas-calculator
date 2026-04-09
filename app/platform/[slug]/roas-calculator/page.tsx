import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlatformBySlug, platformPages } from "@/app/lib/pseo";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateStaticParams() {
  return platformPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getPlatformBySlug(slug);
  if (!data) {
    return {
      title: "Platform ROAS Page Not Found",
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
    alternates: { canonical: `https://roas-calculator.tech/platform/${slug}/roas-calculator` },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://roas-calculator.tech/platform/${slug}/roas-calculator`,
    },
  };
}

export default async function PlatformRoasPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPlatformBySlug(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/platform" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Platform Pages
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{data.h1}</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">{data.intro}</p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">{data.name} benchmark interpretation</h2>
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
          <h2 className="text-2xl font-bold mb-3">Platform-specific notes</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {data.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link href={data.recommendedCalculatorPath} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Open Recommended Calculator
            </Link>
            <Link href="/comparisons/roas-vs-roi-vs-mer-vs-acos" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Compare ROAS vs Other Metrics
            </Link>
            <Link href="/resources/roas-planning-template" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
              Download ROAS Template
            </Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">How to Apply This to Live Campaigns</h2>
          <p className="text-slate-700">
            Treat platform ROAS as a decision signal, then pressure-test with break-even math and blended efficiency.
            Scale only where ROAS remains sustainably above break-even with stable conversion quality.
          </p>
          <p className="text-slate-700 mt-3">
            If results are near break-even, hold spend and prioritize creative-message fit, landing page conversion, and segment cleanup.
          </p>
        </section>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Source and Validation Path</h2>
          <p className="text-slate-700">
            Use benchmark ranges directionally and validate final decisions with your own margin structure, attribution model, and payback tolerance.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/methodology" className="text-blue-700 hover:underline">Methodology</Link>
            <Link href="/data-sources" className="text-blue-700 hover:underline">Data Sources</Link>
            <Link href="/benchmarks/roas" className="text-blue-700 hover:underline">ROAS Benchmarks Hub</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
