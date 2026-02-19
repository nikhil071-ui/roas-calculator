import type { Metadata } from "next";
import Link from "next/link";
import SignupSuccessTracker from "@/app/components/SignupSuccessTracker";

type ThankYouPageProps = {
  searchParams: Promise<{ source?: string }>;
};

export const metadata: Metadata = {
  title: "Thank You | ROAS Tools",
  description:
    "Download your ROAS Decision Matrix and continue with CAC, LTV, MER, and payback planning.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://roas-calculator.tech/thank-you",
  },
};

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const params = await searchParams;
  const source = params.source ?? "unknown";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <SignupSuccessTracker source={source} />
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
        <p className="text-sm font-semibold text-emerald-700">Signup Confirmed</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Your ROAS Decision Matrix Is Ready</h1>
        <p className="mt-3 text-slate-600">
          Download the lead magnet and use it with your weekly media review workflow.
        </p>

        <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="text-lg font-bold text-emerald-900">Lead Magnet Download</h2>
          <p className="mt-2 text-sm text-emerald-800">
            ROAS Decision Matrix (CSV): scale, hold, or pause based on break-even ROAS, CAC, and payback thresholds.
          </p>
          <Link
            href="/api/lead-magnet/roas-decision-matrix"
            className="mt-4 inline-flex items-center rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800"
          >
            Download ROAS Decision Matrix
          </Link>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">Next Recommended Step</h2>
          <p className="mt-2 text-slate-600">
            Run your current campaign numbers through the calculator stack before your next budget change.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Open ROAS Calculator
            </Link>
            <Link
              href="/ppc-toolkit"
              className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-900 hover:bg-slate-100"
            >
              Open PPC Toolkit
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
