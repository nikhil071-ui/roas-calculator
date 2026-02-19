import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Target, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "ROAS Case Studies | ROAS Tools",
  description:
    "Publisher and paid-media case studies showing how ROAS, CAC, and break-even workflows improve profitability decisions.",
  alternates: {
    canonical: "https://roas-calculator.tech/case-studies",
  },
  openGraph: {
    title: "ROAS Case Studies | ROAS Tools",
    description:
      "Publisher and paid-media case studies showing how ROAS, CAC, and break-even workflows improve profitability decisions.",
    url: "https://roas-calculator.tech/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS Case Studies | ROAS Tools",
    description:
      "Publisher and paid-media case studies showing how ROAS, CAC, and break-even workflows improve profitability decisions.",
  },
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      <main className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Publisher Revenue Case Studies</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Real scenarios focused on ad-supported publishing and paid media profitability.
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          <section className="border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="text-blue-600" size={22} />
              <h2 className="text-2xl font-bold text-slate-900">Content Publisher: Break-Even Clarity</h2>
            </div>
            <p className="text-slate-600">
              A niche content publisher was scaling campaigns at 2.4x ROAS without checking contribution margin. After applying break-even logic,
              they paused low-quality traffic sources and shifted spend to high-retention audiences.
            </p>
            <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-3"><strong>ROAS:</strong> 2.4x to 3.8x</div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3"><strong>Payback:</strong> 68 days to 39 days</div>
              <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3"><strong>Decision:</strong> Scale profitable cohorts only</div>
            </div>
          </section>

          <section className="border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-emerald-600" size={22} />
              <h2 className="text-2xl font-bold text-slate-900">Lead-Gen Operator: CAC Discipline</h2>
            </div>
            <p className="text-slate-600">
              A lead-gen team used the calculator stack to connect ROAS with close-rate assumptions and true CAC. They removed channels with weak
              lead quality and improved downstream conversion.
            </p>
            <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-3"><strong>CAC:</strong> $142 to $91</div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3"><strong>Close Rate:</strong> 9% to 14%</div>
              <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3"><strong>Decision:</strong> Hold spend, improve funnel first</div>
            </div>
          </section>

          <section className="border border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="text-amber-600" size={22} />
              <h2 className="text-2xl font-bold text-slate-900">SaaS Publisher Blend: MER Monitoring</h2>
            </div>
            <p className="text-slate-600">
              A SaaS media brand tied ROAS campaigns to blended MER and payback. Weekly reviews with benchmark ranges prevented over-scaling during
              volatile auction periods.
            </p>
            <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-3"><strong>MER:</strong> 2.1x to 2.9x</div>
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3"><strong>ROAS Volatility:</strong> -31%</div>
              <div className="rounded-lg bg-indigo-50 border border-indigo-200 p-3"><strong>Decision:</strong> Gradual budget ramps</div>
            </div>
          </section>
        </div>

        <div className="bg-slate-900 p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want Your Team Featured?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Share your ROAS workflow outcomes and benchmark insights.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Share Your Case
          </Link>
        </div>
      </main>
    </div>
  );
}
