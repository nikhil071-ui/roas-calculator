import Link from "next/link";
import type { Metadata } from "next";
import CACCalculatorClient from "./CACCalculatorClient";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";
import LastReviewedBadge from "@/app/components/LastReviewedBadge";

export const metadata: Metadata = {
  title: "CAC Calculator (Customer Acquisition Cost)",
  description:
    "Calculate Customer Acquisition Cost (CAC) from ad spend and new customers. Use CAC with ROAS and LTV to decide scale vs hold.",
  keywords: ["cac calculator", "customer acquisition cost formula", "marketing cac", "saas cac benchmark"],
  alternates: {
    canonical: "https://roas-calculator.tech/cac-calculator",
  },
  openGraph: {
    title: "CAC Calculator (Customer Acquisition Cost)",
    description:
      "Use CAC with ROAS and LTV to make profitable paid growth decisions.",
    url: "https://roas-calculator.tech/cac-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAC Calculator (Customer Acquisition Cost)",
    description:
      "Use CAC with ROAS and LTV to make profitable paid growth decisions.",
  },
};

export default function CACCalculatorPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CAC Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/cac-calculator",
  };
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to calculate customer acquisition cost",
    step: [
      { "@type": "HowToStep", name: "Enter ad spend", text: "Add total paid acquisition spend for the selected period." },
      { "@type": "HowToStep", name: "Enter new customers", text: "Add the number of newly acquired customers in the same period." },
      { "@type": "HowToStep", name: "Review CAC", text: "Use CAC with LTV and payback thresholds before scaling." },
    ],
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a good CAC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good CAC depends on margin and LTV. Many teams target LTV:CAC above 3 while maintaining acceptable payback.",
        },
      },
      {
        "@type": "Question",
        name: "Should CAC be tracked weekly or monthly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Track weekly for optimization and monthly for strategic planning to smooth short-term volatility.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <main className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
        <article className="space-y-8">
        <header>
          <Link href="/ppc-toolkit" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to PPC Toolkit</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">CAC Calculator</h1>
          <p className="text-slate-600 mt-3">
            CAC shows how much you spend to acquire one paying customer. Track it weekly with ROAS and LTV:CAC.
          </p>
          <p className="text-slate-700 mt-3">
            Quick answer: CAC equals total ad spend divided by new customers acquired in the same period.
          </p>
        </header>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Formula</h2>
          <p className="font-mono bg-white border border-slate-200 rounded px-4 py-3">CAC = Total Ad Spend / New Customers</p>
          <p className="text-slate-700 mt-3">Example: $6,000 spend / 120 new customers = $50 CAC.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Decision Thresholds</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Scale when CAC is below your target threshold and payback window is acceptable.</li>
            <li>Hold when CAC drifts but still stays inside margin guardrails.</li>
            <li>Pause or rework when CAC exceeds target for 7-14 days after optimizations.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What CAC Means for Decision-Making</h2>
          <p className="text-slate-700">
            CAC is your acquisition price per customer, not your profitability outcome. A low CAC can still be unprofitable if margin is weak,
            and a high CAC can still be acceptable if <Link href="/ltv-calculator" className="text-blue-700 hover:underline">LTV</Link> and
            <Link href="/payback-period-calculator" className="text-blue-700 hover:underline"> payback</Link> are strong.
            Use CAC with <Link href="/" className="text-blue-700 hover:underline">ROAS</Link> and <Link href="/mer-calculator" className="text-blue-700 hover:underline">MER</Link> before budget changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Your Result</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Compare CAC to gross profit per customer, not only top-line revenue.</li>
            <li>Track rolling 7-day and 30-day CAC to avoid reacting to short attribution noise.</li>
            <li>Validate that CAC trends stay healthy after spend increases, not just before scaling.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>DTC eCommerce: CAC rises during promos, but repeat purchase lifts LTV and keeps scaling viable.</li>
            <li>SaaS trial funnel: paid CAC is high early, but acceptable once onboarding improves payback below 12 months.</li>
            <li>B2B lead-gen: CAC appears stable, but sales-cycle slippage reduces realized ROAS and requires tighter qualification.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use CAC and Common Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use CAC when deciding budget pacing, channel mix, and offer strategy at weekly or monthly cadence.</li>
            <li>Do not compare CAC across periods with different attribution windows without adjustment.</li>
            <li>Do not treat CAC as complete profitability; always pair with contribution margin and LTV quality.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            This calculator uses a direct unit-economics formula: total paid spend divided by new customers in the same measurement window.
            For consistent interpretation, keep spend, conversions, and attribution settings aligned to one period and one channel scope.
          </p>
        </section>

        <LastReviewedBadge date="February 20, 2026" variant="section" />

        <CACCalculatorClient />

        <section className="flex flex-wrap gap-3">
          <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Open ROAS Calculator</Link>
          <Link href="/ltv-calculator" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">Open LTV Calculator</Link>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/payback-period-calculator" className="text-blue-700 hover:underline">CAC Payback Period</Link>
            <Link href="/mer-calculator" className="text-blue-700 hover:underline">MER Calculator</Link>
            <Link href="/roas/break-even-roas" className="text-blue-700 hover:underline">Break-even ROAS</Link>
          </div>
        </section>
        <EmailCaptureCard source="cac_calculator" />

        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
        </article>
      </main>
    </div>
  );
}
