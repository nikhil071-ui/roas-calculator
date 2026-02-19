import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industryPages } from "@/app/lib/pseo";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function generateStaticParams() {
  return industryPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);
  if (!data) {
    return {
      title: "Industry ROAS Page Not Found",
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
      index: true,
      follow: true,
    },
    alternates: { canonical: `https://roas-calculator.tech/industry/${slug}/roas-calculator` },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://roas-calculator.tech/industry/${slug}/roas-calculator`,
    },
  };
}

export default async function IndustryRoasPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/industry" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Industry Pages
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{data.h1}</h1>
          <p className="text-slate-600 mt-3 max-w-3xl">{data.intro}</p>
        </div>

        <section className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">{data.name} ROAS benchmark range</h2>
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
          <h2 className="text-2xl font-bold mb-3">Applied guidance</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {data.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-5">
            <Link href={data.recommendedCalculatorPath} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Open Recommended Calculator
            </Link>
            <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Open PPC Toolkit
            </Link>
            <Link href="/benchmarks/roas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
              View ROAS Benchmarks
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
