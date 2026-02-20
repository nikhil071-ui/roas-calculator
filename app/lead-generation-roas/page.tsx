import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Lead Generation ROAS Calculator (CPL to Revenue)",
  description:
    "Lead-gen ROAS page with CPL benchmarks, close-rate assumptions, and worked examples for pipeline-aware budget decisions.",
  alternates: {
    canonical: "https://roas-calculator.tech/lead-generation-roas",
  },
};

export default function LeadGenerationRoasPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Lead Generation ROAS Calculator Guide",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/lead-generation-roas",
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is lead-generation ROAS different from eCommerce ROAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lead-gen ROAS depends on downstream close rate and deal value, not only immediate form fills or booked calls.",
        },
      },
      {
        "@type": "Question",
        name: "Why can low CPL still produce weak ROAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Low-cost leads may convert poorly, so sales-qualified rate and close quality can reduce true revenue return.",
        },
      },
    ],
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-8">
        <header>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Lead Generation ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Designed for lead-gen teams where CPL, close rate, and deal value determine true ROAS.
          </p>
        </header>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Lead Gen Benchmark Snapshot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Metric</th>
                  <th className="text-left px-4 py-2">Typical</th>
                  <th className="text-left px-4 py-2">Strong</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-t">Lead-gen ROAS</td>
                  <td className="px-4 py-2 border-t">2.5x to 5.0x</td>
                  <td className="px-4 py-2 border-t">6.0x to 10.0x+</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Close Rate</td>
                  <td className="px-4 py-2 border-t">8% to 15%</td>
                  <td className="px-4 py-2 border-t">16%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Lead Gen Example</h2>
          <p className="text-slate-700">
            Example campaign: spend $6,000, 200 leads, CPL $30, close rate 12%, average closed value $900.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>Expected closed deals = 24</li>
            <li>Expected attributed revenue = $21,600</li>
            <li>Expected ROAS = 3.60x</li>
            <li>Decision = Hold and improve lead quality before scaling spend</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for Decision-Making</h2>
          <p className="text-slate-700">
            Lead-gen ROAS is a pipeline-quality metric as much as a media metric. Use it with
            <Link href="/cac-calculator" className="text-blue-700 hover:underline"> CAC</Link>,
            <Link href="/ltv-calculator" className="text-blue-700 hover:underline"> LTV</Link>, and
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> to avoid scaling low-quality leads that inflate volume but not revenue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Validate lead-source quality with qualified rate and close rate, not CPL alone.</li>
            <li>Check time-lag effects; short windows often understate final closed revenue.</li>
            <li>Track by funnel stage to identify whether creative, targeting, or sales follow-up is the bottleneck.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Legal services: higher CPL leads can still outperform due to stronger case-value close rates.</li>
            <li>B2B SaaS demos: lead volume rises quickly, but weak qualification lowers booked pipeline conversion.</li>
            <li>Local services: paid social drives cheap leads, while paid search drives fewer but higher-closing opportunities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use, Limitations, and Common Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use this metric for channel allocation, qualification standards, and sales-marketing alignment reviews.</li>
            <li>Do not treat top-funnel lead counts as success without downstream conversion evidence.</li>
            <li>Do not compare two channels without adjusting for sales-cycle length and deal-size mix.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            Scenario logic is explicit: leads multiplied by close rate gives expected closed deals, then multiplied by deal value gives expected revenue.
            ROAS is expected revenue divided by ad spend, and should be refreshed as real close data arrives.
          </p>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/roas/lead-gen-cpl-roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Lead Gen Calculator
          </Link>
          <Link href="/benchmarks/lead-gen-cpl-roas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            Lead Gen Benchmarks
          </Link>
          <Link href="/comparisons/cac-vs-cpa-vs-roas" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            CAC vs CPA vs ROAS
          </Link>
        </section>

        <EmailCaptureCard
          source="persona_lead_generation_roas"
          title="Get Lead Gen RPM/ROAS Benchmark Updates"
          description="Use these benchmark updates to stress-test CPL, close-rate assumptions, and sales-quality risk."
          buttonLabel="Send Lead Gen Benchmarks"
          helperText="Includes qualification and pipeline guardrails for paid channels."
        />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
      </article>
    </main>
  );
}
