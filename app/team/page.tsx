import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, CheckCircle, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nikhil Chaudhary | ROAS Tools",
  description:
    "Learn about Nikhil Chaudhary, the creator and maintainer of ROAS Tools.",
  alternates: {
    canonical: "https://roas-calculator.tech/team",
  },
  openGraph: {
    title: "About Nikhil Chaudhary | ROAS Tools",
    description:
      "Learn about Nikhil Chaudhary, the creator and maintainer of ROAS Tools.",
    url: "https://roas-calculator.tech/team",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nikhil Chaudhary | ROAS Tools",
    description:
      "Learn about Nikhil Chaudhary, the creator and maintainer of ROAS Tools.",
  },
};

export default function Team() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto mb-8">
        <Link
          href="/about"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to About
        </Link>
      </div>

      <main className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nikhil Chaudhary</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Creator and maintainer of ROAS Tools.
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <section className="flex flex-col md:flex-row gap-8">
            <div className="shrink-0">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <User size={42} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Owner Profile</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                ROAS Tools is built and managed by Nikhil Chaudhary. The site focuses on
                practical ROAS, CAC, LTV, MER, and profitability calculators designed to
                help marketers and business owners make better ad spend decisions.
              </p>
              <p className="text-slate-600 leading-relaxed">
                This page exists to clearly show who is responsible for the content,
                tools, updates, and support on this website.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase size={18} className="text-blue-600" />
                <h3 className="font-bold text-slate-900">Responsibilities</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>- Builds and updates the calculators</li>
                <li>- Reviews published content and formulas</li>
                <li>- Maintains privacy, policy, and support pages</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={18} className="text-emerald-600" />
                <h3 className="font-bold text-slate-900">Site Standards</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>- Privacy-first browser-based tools</li>
                <li>- Transparent methodology and review dates</li>
                <li>- Focus on practical, original ROAS content</li>
              </ul>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Contact and Ownership</h2>
            <p className="text-slate-700 leading-relaxed">
              For corrections, support requests, or business questions about ROAS Tools,
              please use the contact page. Site ownership, maintenance, and editorial
              responsibility are handled by Nikhil Chaudhary.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="/contact" className="text-blue-700 hover:underline">
                Contact
              </Link>
              <Link href="/authors" className="text-blue-700 hover:underline">
                Authors
              </Link>
              <Link href="/methodology" className="text-blue-700 hover:underline">
                Methodology
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
