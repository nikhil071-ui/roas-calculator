import Link from "next/link";
import type { Metadata } from "next";
import LTVCalculatorClient from "./LTVCalculatorClient";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";
import LastReviewedBadge from "@/app/components/LastReviewedBadge";

export const metadata: Metadata = {
  title: "LTV Calculator (Customer Lifetime Value)",
  description:
    "Estimate Customer Lifetime Value (LTV) using average order value, purchase frequency, and retention period.",
  keywords: ["ltv calculator", "customer lifetime value formula", "ltv cac ratio", "saas ltv"],
  alternates: {
    canonical: "https://roas-calculator.tech/ltv-calculator",
  },
  openGraph: {
    title: "LTV Calculator (Customer Lifetime Value)",
    description: "Estimate LTV and compare it to CAC before scaling paid traffic.",
    url: "https://roas-calculator.tech/ltv-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "LTV Calculator (Customer Lifetime Value)",
    description: "Estimate LTV and compare it to CAC before scaling paid traffic.",
  },
};

export default function LTVCalculatorPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LTV Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/ltv-calculator",
  };
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to estimate customer lifetime value",
    step: [
      { "@type": "HowToStep", name: "Enter order value", text: "Use your average order value for a realistic LTV baseline." },
      { "@type": "HowToStep", name: "Add frequency and retention", text: "Include expected purchase frequency and retention period." },
      { "@type": "HowToStep", name: "Compare with CAC", text: "Validate LTV:CAC ratio before increasing paid traffic." },
    ],
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I calculate LTV quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Multiply average order value by purchase frequency and retention period, then adjust by gross margin.",
        },
      },
      {
        "@type": "Question",
        name: "What LTV:CAC ratio is healthy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many growth teams use 3:1 as a baseline, but acceptable ratios vary by industry, payback tolerance, and growth stage.",
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
          <h1 className="text-3xl md:text-4xl font-bold mt-2">LTV Calculator</h1>
          <p className="text-slate-600 mt-3">
            Lifetime Value helps you avoid under-scaling profitable channels and over-scaling low-retention campaigns.
          </p>
          <p className="text-slate-700 mt-3">
            Quick answer: LTV estimates total gross profit a customer generates over their retained lifetime.
          </p>
        </header>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Formula</h2>
          <p className="font-mono bg-white border border-slate-200 rounded px-4 py-3">
            LTV = Average Order Value * Purchase Frequency * Gross Margin * Retention Period
          </p>
          <p className="text-slate-700 mt-3">Compare LTV:CAC. For many SaaS and subscription models, 3:1 is a common baseline.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Use with CAC</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>If LTV:CAC is less than 1.5, acquisition is likely too expensive.</li>
            <li>If LTV:CAC is 2 to 3, optimize retention and onboarding before aggressive scaling.</li>
            <li>If LTV:CAC exceeds 3 with stable payback, scaling is usually safer.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What LTV Means for Decision-Making</h2>
          <p className="text-slate-700">
            LTV estimates future gross profit potential per acquired customer. It helps determine how much CAC is rational today and whether
            current <Link href="/" className="text-blue-700 hover:underline">ROAS</Link> is sustainable once retention is observed.
            Use LTV with <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC</Link>,
            <Link href="/payback-period-calculator" className="text-blue-700 hover:underline"> payback</Link>, and
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> for full budget decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Your Result</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Check whether LTV assumptions are cohort-based or blended averages; cohort views are usually more reliable.</li>
            <li>Stress-test retention and margin assumptions with conservative, base, and upside cases.</li>
            <li>Recalculate monthly as pricing, churn, and product mix change.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Subscription SaaS: LTV improves after onboarding fixes reduce month-2 churn, allowing safer CAC increases.</li>
            <li>DTC brand: first-order ROAS is modest, but high repeat rate lifts true LTV and keeps blended MER healthy.</li>
            <li>Agency lead-gen: strong close value but high churn lowers realized LTV, forcing tighter acquisition caps.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use LTV and Common Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use LTV when setting CAC caps, channel mix, and acceptable payback windows.</li>
            <li>Do not use revenue-only LTV for profitability decisions; gross margin must be included.</li>
            <li>Do not assume historical retention persists during aggressive scale without monitoring cohort quality.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            This page uses a transparent multiplicative model: order value times purchase frequency times gross margin times retention period.
            It is an estimate, not a guarantee, and should be refreshed with actual cohort performance.
          </p>
        </section>

        <LastReviewedBadge date="February 20, 2026" variant="section" />

        <LTVCalculatorClient />

        <section className="flex flex-wrap gap-3">
          <Link href="/cac-calculator" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Open CAC Calculator</Link>
          <Link href="/payback-period-calculator" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">Open Payback Calculator</Link>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Related Calculators</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/mer-calculator" className="text-blue-700 hover:underline">MER Calculator</Link>
            <Link href="/roas/marketing-roi" className="text-blue-700 hover:underline">Marketing ROI</Link>
            <Link href="/roas/break-even-roas" className="text-blue-700 hover:underline">Break-even ROAS</Link>
          </div>
        </section>
        <EmailCaptureCard source="ltv_calculator" />

        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
        </article>
      </main>
    </div>
  );
}
