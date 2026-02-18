import Link from "next/link";
import type { Metadata } from "next";
import { platformPages } from "@/app/lib/pseo";

export const metadata: Metadata = {
  title: "Platform ROAS Calculators",
  description: "Browse platform-specific ROAS calculator pages for Google Ads, Meta, TikTok, LinkedIn, and more.",
  alternates: {
    canonical: "https://roas-calculator.tech/platform",
  },
};

export default function PlatformIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Platform ROAS Calculators</h1>
          <p className="text-slate-600 mt-3">
            Compare channel-level ROAS assumptions and align media spend to profitability targets.
          </p>
        </div>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platformPages.map((item) => (
            <Link
              key={item.slug}
              href={`/platform/${item.slug}/roas-calculator`}
              className="rounded-xl border border-slate-200 bg-white p-4 hover:border-blue-500 hover:shadow-sm transition"
            >
              <h2 className="font-bold text-slate-900">{item.name}</h2>
              <p className="text-sm text-slate-600 mt-1">{item.primaryKeyword}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
