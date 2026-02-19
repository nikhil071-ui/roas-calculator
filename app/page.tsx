import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "./seo";
import TrackedLink from "@/app/components/TrackedLink";
import RoasClient from "./RoasClient";
import LazyHomeSecondarySections from "@/app/components/LazyHomeSecondarySections";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";
import FounderAuthorityBlock from "@/app/components/FounderAuthorityBlock";

export const metadata: Metadata = {
  title: "ROAS Calculator: Break-Even and Profit Estimator",
  description:
    "Calculate ROAS, break-even thresholds, and campaign profit in one free calculator for marketers and eCommerce teams.",
  keywords: [
    "roas calculator",
    "return on ad spend calculator",
    "break even roas calculator",
    "google ads roas calculator",
    "facebook ads roas calculator",
    "ecommerce profitability calculator",
    "ppc profit calculator",
    "marketing roi tool",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ROAS Calculator: Break-Even and Profit Estimator",
    description:
      "Calculate ROAS, break-even thresholds, and campaign profit in one free calculator for marketers and eCommerce teams.",
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
    title: "ROAS Calculator: Break-Even and Profit Estimator",
    description:
      "Calculate ROAS, break-even thresholds, and campaign profit in one free calculator for marketers and eCommerce teams.",
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
      
      {/* --- HERO SECTION --- */}
      <header className="bg-blue-900 text-white py-10 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            ROAS Calculator: Calculate Break-Even and Campaign Profit Fast
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Enter spend, revenue, and costs to get ROAS, net profit, CPA, AOV, and break-even guidance in one view.
          </p>
          <p className="text-sm text-blue-200 max-w-2xl mx-auto mt-3">
            Built by Sanjay Kumar, performance marketer and operator across $2M+ monthly paid media budgets.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#calculator" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-blue-900 font-bold hover:bg-blue-50 transition">
              Start Calculator
            </a>
            <Link href="/ppc-toolkit" prefetch={false} className="inline-flex items-center px-5 py-3 rounded-lg border border-blue-200 text-white font-semibold hover:bg-blue-800 transition">
              Open PPC Toolkit
            </Link>
          </div>
          <a href="#calculator" className="sr-only focus:not-sr-only focus:mt-4 focus:inline-flex focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-900">
            Skip to calculator
          </a>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 order-2 lg:order-1">
            <FounderAuthorityBlock compact className="mb-6" />
            {/* THE CALCULATOR TOOL */}
            <section id="calculator">
              <RoasClient />
            </section>

            <section className="mt-4 mb-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <h2 className="text-base font-bold text-emerald-900 mb-2">Trusted planning, private inputs</h2>
              <p className="text-sm text-emerald-800 mb-3">
                Last updated February 18, 2026. Reviewed by ROAS Tools Editorial Team. Inputs stay in your browser and are not sent to our server.
              </p>
              <div className="flex flex-wrap gap-2">
                <TrackedLink
                  href="/ppc-toolkit"
                  eventName="cta_click_ppc_toolkit"
                  eventParams={{ source_page: "/", cta_module: "trust_strip", position: "below_calculator" }}
                  className="inline-flex items-center px-3 py-2 rounded-lg bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition"
                >
                  Open Toolkit
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
