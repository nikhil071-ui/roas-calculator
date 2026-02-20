import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "./seo";
import TrackedLink from "@/app/components/TrackedLink";
import RoasClient from "./RoasClient";
import LazyHomeSecondarySections from "@/app/components/LazyHomeSecondarySections";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";
import ExitIntentLeadCapture from "@/app/components/ExitIntentLeadCapture";

export const metadata: Metadata = {
  title: "ROAS Calculator for Ad-Supported Publishers",
  description:
    "The ROAS calculator built for ad-supported publishers. Model break-even thresholds, RPM assumptions, and campaign profitability.",
  keywords: [
    "roas calculator",
    "return on ad spend calculator",
    "break even roas calculator",
    "google ads roas calculator",
    "facebook ads roas calculator",
    "publisher ad revenue calculator",
    "ppc profit calculator",
    "marketing roi tool",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ROAS Calculator for Ad-Supported Publishers",
    description:
      "The ROAS calculator built for ad-supported publishers. Model break-even thresholds, RPM assumptions, and campaign profitability.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ROAS Calculator - Break-Even and Profit Estimator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS Calculator for Ad-Supported Publishers",
    description:
      "The ROAS calculator built for ad-supported publishers. Model break-even thresholds, RPM assumptions, and campaign profitability.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function Home() {
  const webApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ROAS Calculator - Free Tool for Digital Marketing",
    "description": "Calculate your Return on Ad Spend (ROAS), Break-Even Point, and Net Profit instantly. The best free tool for Facebook Ads, Google Ads, and dropshipping.",
    "url": "https://roas-calculator.tech/",
    "applicationCategory": "FinanceApplication",
    "author": {
      "@type": "Organization",
      "name": "ROAS Tools",
      "url": "https://roas-calculator.tech/",
      "sameAs": [
        "https://roas-calculator.tech/about",
        "https://roas-calculator.tech/contact"
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a good ROAS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good ROAS depends on your contribution margin and payback window. Many teams use 3.0x to 5.0x as a directional range, but your break-even ROAS is the only hard baseline. Always compare ROAS with CAC and margin before scaling."
        }
      },
      {
        "@type": "Question",
        "name": "Is high ROAS always profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, a high ROAS can still lose money if margins are thin. Include COGS, shipping, platform fees, and operating costs in your profitability check. Pair ROAS with CAC, LTV, and MER before raising spend."
        }
      },
      {
        "@type": "Question",
        "name": "When should I scale ad spend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scale when ROAS is consistently above break-even and conversion quality is stable. Validate that CAC payback remains healthy over multiple days, not just one spike. Increase budgets gradually and monitor blended MER during scale."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      <ExitIntentLeadCapture />

      {/* --- HERO SECTION --- */}
      <header className="bg-blue-900 text-white py-10 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            The ROAS Calculator Built for Ad-Supported Publishers
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Model RPM, CPC, CTR, and traffic mix assumptions to forecast true content ROI before increasing budget.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#calculator" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-blue-900 font-bold hover:bg-blue-50 transition">
              Start Calculator
            </a>
            <Link href="/benchmarks/roas" prefetch={false} className="inline-flex items-center px-5 py-3 rounded-lg border border-blue-200 text-white font-semibold hover:bg-blue-800 transition">
              View Benchmarks
            </Link>
          </div>
          <a href="#calculator" className="sr-only focus:not-sr-only focus:mt-4 focus:inline-flex focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-900">
            Skip to calculator
          </a>
          <EmailCaptureCard
            source="home_hero"
            variant="compact"
            title="Get Weekly RPM/ROAS Benchmarks"
            description="Receive weekly benchmark snapshots and practical optimization prompts for publisher growth."
            buttonLabel="Get Benchmark Updates"
            helperText="Delivered instantly by email. No spam."
            className="mt-6 text-left"
          />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 order-2 lg:order-1">
            {/* THE CALCULATOR TOOL */}
            <section id="calculator">
              <RoasClient />
            </section>

            <section className="mt-4 mb-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <h2 className="text-base font-bold text-emerald-900 mb-2">Trusted planning, private inputs</h2>
              <p className="text-sm text-emerald-800 mb-3">
                Last updated February 20, 2026. Reviewed by ROAS Tools Editorial Team. Inputs stay in your browser and are not sent to our server.
              </p>
              <div className="flex flex-wrap gap-2">
                <TrackedLink
                  href="/benchmarks/roas"
                  eventName="cta_click_benchmarks"
                  eventParams={{ source_page: "/", cta_module: "trust_strip", position: "below_calculator" }}
                  className="inline-flex items-center px-3 py-2 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition"
                >
                  Open Benchmarks
                </TrackedLink>
                <Link href="/methodology" prefetch={false} className="inline-flex items-center px-3 py-2 text-sm font-semibold text-emerald-900 underline underline-offset-2 hover:text-emerald-800 transition">
                  Review Methodology
                </Link>
              </div>
            </section>

            <EmailCaptureCard source="home_calculator" className="mt-8 mb-6" />

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">How this ROAS calculator helps ad optimization</h2>
              <p className="text-slate-600 mb-4">
                Use this calculator to connect campaign ROAS with contribution margin, customer acquisition cost (CAC), lifetime value (LTV), and media efficiency ratio (MER).
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <h3 className="font-semibold text-slate-900">Revenue efficiency</h3>
                  <p className="text-sm text-slate-600 mt-1">Measure how much revenue each ad dollar generates.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <h3 className="font-semibold text-slate-900">Break-even guardrail</h3>
                  <p className="text-sm text-slate-600 mt-1">Find your minimum ROAS target from margin assumptions.</p>
                </div>
                <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
                  <h3 className="font-semibold text-slate-900">Scale decisions</h3>
                  <p className="text-sm text-slate-600 mt-1">Decide when to scale, hold, or pause campaigns with confidence.</p>
                </div>
              </div>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">When to use ROAS and how to evaluate outputs</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Use ROAS for campaign-level budget decisions, creative testing cycles, and pre-scale checks.</li>
                <li>Compare calculated ROAS to margin-based break-even thresholds before increasing spend.</li>
                <li>Review 7-day and 30-day views to reduce attribution-window volatility.</li>
              </ul>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Limitations and common misunderstandings</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>High ROAS can still be unprofitable when contribution margin is thin.</li>
                <li>Platform-reported ROAS should be validated against blended <Link href="/mer-calculator" prefetch={false} className="text-blue-700 hover:underline">MER</Link> and true acquisition cost.</li>
                <li>ROAS does not measure payback timing, so cash-flow risk should be checked with <Link href="/payback-period-calculator" prefetch={false} className="text-blue-700 hover:underline">CAC payback</Link>.</li>
              </ul>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Realistic operator scenarios</h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>DTC promo week: ROAS rises, but net profit weakens after discount and shipping pressure.</li>
                <li>SaaS acquisition push: campaign ROAS looks healthy while payback extends beyond financing tolerance.</li>
                <li>Lead-gen campaigns: low CPL volume underperforms revenue targets due to lower close quality.</li>
              </ul>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Next Step After Calculation</h2>
              <p className="text-slate-600 mb-4">
                Use these follow-up tools before changing budget so decisions are tied to CAC, LTV, and blended efficiency.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/ppc-toolkit" prefetch={false} className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-2" aria-label="Open PPC toolkit for ROAS CAC LTV and MER planning">
                  Open PPC Toolkit
                </Link>
                <Link href="/resources" prefetch={false} className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-2" aria-label="Download ROAS planning templates and checklists">
                  Download Templates
                </Link>
                <Link href="/comparisons/mer-vs-roas" prefetch={false} className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-2" aria-label="Read the MER versus ROAS comparison guide">
                  Read MER vs ROAS
                </Link>
              </div>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Persona Calculators</h2>
              <p className="text-slate-600 mb-4">
                Use tailored pages with vertical benchmarks and worked examples for your business model.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <Link href="/shopify-roas-calculator" prefetch={false} className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900">Shopify ROAS Calculator</h3>
                  <p className="text-sm text-slate-600 mt-1">DTC benchmarks and break-even guidance.</p>
                </Link>
                <Link href="/amazon-roas" prefetch={false} className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900">Amazon ROAS</h3>
                  <p className="text-sm text-slate-600 mt-1">ACoS-to-ROAS mapping with seller examples.</p>
                </Link>
                <Link href="/lead-generation-roas" prefetch={false} className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900">Lead Generation ROAS</h3>
                  <p className="text-sm text-slate-600 mt-1">CPL, close-rate, and pipeline-aware interpretation.</p>
                </Link>
                <Link href="/saas-cac-payback" prefetch={false} className="rounded-lg border border-slate-200 p-4 hover:border-blue-400 transition">
                  <h3 className="font-semibold text-slate-900">SaaS CAC Payback</h3>
                  <p className="text-sm text-slate-600 mt-1">Cash-flow-safe scaling thresholds for SaaS.</p>
                </Link>
              </div>
            </section>

            <section className="mt-4 mb-8 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Why marketers trust these analytics tools</h2>
              <p className="text-slate-600 mb-4">
                We publish named authors, review dates, and methodology pages so calculator outputs can be validated and audited.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/authors" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Authors and Reviewers
                </Link>
                <Link href="/methodology" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Methodology
                </Link>
                <Link href="/data-sources" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Data Sources
                </Link>
                <Link href="/editorial-policy" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Editorial Policy
                </Link>
              </div>
            </section>

            <section className="mt-4 mb-8 bg-white border border-slate-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Who Built This and Why You Can Trust It</h2>
              <p className="text-slate-600 mb-4">
                ROAS Tools is built by Sanjay Kumar (Founder), focused on publisher economics and paid media profitability systems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Founder and Mission
                </Link>
                <Link href="/team" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition">
                  Team Credentials
                </Link>
              </div>
            </section>

            <section className="mt-4 mb-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Social proof from active users</h2>
              <p className="text-slate-700 mb-4">
                See real outcomes, implementation notes, and benchmark context before changing budget decisions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/testimonials" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Read Testimonials
                </Link>
                <Link href="/case-studies" prefetch={false} className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-blue-300 text-slate-900 font-semibold hover:bg-blue-100 transition">
                  View Case Studies
                </Link>
              </div>
            </section>

            <LazyHomeSecondarySections />
        </div>

      </div>
    </main>
  );
}
