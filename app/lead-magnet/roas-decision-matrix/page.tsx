import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

type LeadMagnetPageProps = {
  searchParams: Promise<{ locked?: string }>;
};

export const metadata: Metadata = {
  title: "ROAS Decision Matrix (Lead Magnet)",
  description:
    "Get the ROAS Decision Matrix to standardize scale, hold, and pause decisions across paid media campaigns.",
  alternates: {
    canonical: "https://roas-calculator.tech/lead-magnet/roas-decision-matrix",
  },
};

export default async function LeadMagnetPage({ searchParams }: LeadMagnetPageProps) {
  const params = await searchParams;
  const locked = params.locked === "1";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <div>
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-blue-700">
            Back to Home
          </Link>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">ROAS Decision Matrix</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Use this worksheet to classify campaigns into scale, hold, or pause actions using break-even ROAS, CAC trend,
            and payback guardrails.
          </p>
        </div>

        {locked ? (
          <section className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Download is gated. Enter your email to access the lead magnet.
          </section>
        ) : null}

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">What You Get</h2>
          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
            <li>Scenario rows for scale, hold, and pause workflows.</li>
            <li>Break-even ROAS, CAC payback, and action note columns.</li>
            <li>A weekly review format for operators and agency reporting.</li>
          </ul>
        </section>

        <EmailCaptureCard
          source="lead_magnet_roas_decision_matrix"
          title="Unlock the ROAS Decision Matrix"
          description="Enter your email to access the gated download and get future benchmark updates."
        />
      </div>
    </main>
  );
}
