import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "SaaS CAC Payback Calculator Guide (Benchmarks + Example)",
  description:
    "SaaS CAC payback page with benchmark windows, worked examples, and practical scaling thresholds tied to cash flow risk.",
  alternates: {
    canonical: "https://roas-calculator.tech/saas-cac-payback",
  },
};

export default function SaasCacPaybackPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SaaS CAC Payback Calculator Guide",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/saas-cac-payback",
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a healthy SaaS CAC payback range?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many SaaS teams target under 12 months, while 12 to 18 months can be workable with strong retention and cash discipline.",
        },
      },
      {
        "@type": "Question",
        name: "Why can strong ROAS still produce risky payback?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If churn is high or gross margin is weak, revenue efficiency can look strong while cash recovery remains slow.",
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
          <h1 className="text-3xl md:text-4xl font-bold mt-2">SaaS CAC Payback</h1>
          <p className="text-slate-600 mt-3">
            Purpose-built for SaaS operators balancing paid growth speed against runway and cash recovery.
          </p>
        </header>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">SaaS Payback Benchmark Snapshot</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Under 12 months: healthy for many SaaS growth models</li>
            <li>12 to 18 months: workable with strong retention and margin control</li>
            <li>Over 18 months: cash-flow pressure, improve CAC or monetization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">SaaS Example</h2>
          <p className="text-slate-700">
            Example: CAC $900, ARPU $150/month, gross margin 80%.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>Monthly gross profit per customer = $120</li>
            <li>Payback period = 7.5 months</li>
            <li>Decision = Scale in controlled increments while tracking retention cohort quality</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for SaaS Decisions</h2>
          <p className="text-slate-700">
            CAC payback translates acquisition efficiency into cash-flow risk. It should be used with
            <Link href="/cac-calculator" className="text-blue-700 hover:underline"> CAC</Link>,
            <Link href="/ltv-calculator" className="text-blue-700 hover:underline"> LTV</Link>, and
            <Link href="/" className="text-blue-700 hover:underline"> ROAS</Link> to decide whether growth rate is financeable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Review payback by cohort and channel; blended averages can hide expensive segments.</li>
            <li>Cross-check with net retention trends because churn can lengthen effective recovery.</li>
            <li>Use scenario bands for ARPU and margin rather than single-point assumptions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Early-stage SaaS: higher CAC accepted if onboarding and retention improvements are already validated.</li>
            <li>Scale-up motion: payback worsens after expanding to colder audiences, requiring tighter qualification and pricing tests.</li>
            <li>Enterprise mix shift: larger ACV improves LTV, but longer sales cycles delay cash recovery timelines.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use, Limitations, and Common Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use this metric before hiring ramps, budget increases, and board-level growth planning.</li>
            <li>Do not assume one payback target works across all segments or go-to-market motions.</li>
            <li>Do not ignore billing cadence and collections timing when interpreting payback health.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            The guide uses payback months equals CAC divided by monthly gross profit per customer. Outputs assume stable ARPU and margin, so
            teams should update scenarios as retention and monetization data changes.
          </p>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/payback-period-calculator" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Payback Calculator
          </Link>
          <Link href="/blog/payback-period-cash-flow-saas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            SaaS Payback Guide
          </Link>
          <Link href="/ltv-calculator" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Open LTV Calculator
          </Link>
        </section>

        <EmailCaptureCard
          source="persona_saas_cac_payback"
          title="Get SaaS CAC/ROAS Benchmark Updates"
          description="Use this to review CAC, payback, retention quality, and safe scaling triggers each week."
          buttonLabel="Send SaaS Benchmarks"
          helperText="Includes payback guardrails and cash-flow risk prompts."
        />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
      </article>
    </main>
  );
}
