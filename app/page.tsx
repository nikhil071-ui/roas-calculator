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
    "description": "Calculate Return on Ad Spend (ROAS), evaluate break-even targets, and model campaign profitability using practical marketing inputs.",
    "url": "https://roas-calculator.tech/",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript enabled browser",
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
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://roas-calculator.tech/#calculator",
      "name": "Calculate ROAS"
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
      },
      {
        "@type": "Question",
        "name": "Does ROAS include profit margin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ROAS alone does not include your profit margin. It measures revenue returned for ad spend. To decide profitability, combine ROAS with gross margin, CAC, and overhead so you can see whether growth is actually creating cash."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use ROAS or MER for budget decisions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use ROAS for campaign-level optimization and creative decisions. Use MER to evaluate overall account efficiency across paid channels. Teams usually manage both so local wins do not hide account-level inefficiency."
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
            <section className="mt-2 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <article>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">What Is ROAS and Why It Matters</h2>
                <p className="text-slate-700">
                  ROAS is the speedometer for paid growth. It shows how much revenue your campaigns return for every dollar you spend, so you can decide whether to scale, hold, or cut budget before cash flow gets tight. In practical terms, ROAS helps operators answer daily questions: Is this ad set worth another $1,000 today? Which channel is efficient enough to expand? Which audience looks good in-platform but weak after fulfillment costs and refunds? A useful ROAS process is not about chasing one high number. It is about comparing expected return against your margin structure, sales cycle, and payback tolerance. An ecommerce brand with aggressive discounts may need higher ROAS than a brand with strong repeat purchase behavior. A SaaS team may accept lower first-touch ROAS if downstream retention is solid. Lead generation teams may show healthy front-end ROAS but still miss revenue goals when close rates drop. ROAS also improves team alignment because finance, marketing, and leadership can evaluate one shared efficiency signal before new budget is approved. That is why strong teams read ROAS with context, not in isolation. If you want to set the right baseline first, run your margin assumptions in the <Link href="/break-even-roas-by-margin" prefetch={false} className="text-blue-700 hover:underline">break-even ROAS calculator</Link>, then compare campaign outputs to customer economics in the <Link href="/cac-calculator" prefetch={false} className="text-blue-700 hover:underline">CAC calculator</Link>. Together, these numbers turn ROAS from a reporting metric into a decision framework.
                </p>
              </article>
            </section>

            <section className="mt-2 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <article>
                <h2 className="text-xl font-bold text-slate-900 mb-3">ROAS Formula Explained</h2>
                <p className="text-slate-700">
                  The core formula is simple: <strong>ROAS = Revenue Attributed to Ads / Ad Spend</strong>. If a campaign generates $25,000 in attributed revenue from $5,000 in spend, ROAS is 5.0x. Revenue attributed to ads means the sales value your attribution model credits to paid campaigns. Ad spend means the media investment tied to that same scope and timeframe. The revenue variable should match your attribution rule and time window, such as 7-day click or 30-day blended reporting. Ad spend should include all media costs for the same period, not partial totals. Keep variables aligned: same channel scope, same dates, and same attribution model. That consistency is what makes ROAS comparable across campaigns and prevents false confidence from mismatched reporting windows. To pressure-test results at account level, pair campaign ROAS with blended efficiency in the <Link href="/mer-calculator" prefetch={false} className="text-blue-700 hover:underline">MER calculator</Link>.
                </p>
              </article>
            </section>

            {/* THE CALCULATOR TOOL */}
            <section id="calculator">
              <RoasClient />
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <article>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">How to Interpret Your ROAS Result</h2>
                <p className="text-slate-700">
                  Treat your ROAS output as a decision signal, not a vanity score. In most businesses, a result below 2.0x usually means you are buying revenue too expensively unless margins are unusually high or you are intentionally investing in new-customer acquisition. For many operators, the 2.0x to 3.5x range is workable but fragile: campaigns may look acceptable in-platform while profitability disappears after discounting, returns, or sales team costs. This is the zone where creative improvements, landing page fixes, and audience refinement often create the biggest gains without raising spend. A sustained ROAS above 3.5x is typically a stronger operating position, especially when quality metrics stay healthy and fulfillment capacity can absorb growth. Above 5.0x, teams should validate scale potential rather than assume unlimited expansion; incremental spend can reduce efficiency quickly if audience depth is limited. Always compare ROAS by time horizon as well: daily spikes are noisy, while weekly and monthly trends are more reliable for budget decisions. If your result is near break-even, optimize first. If it remains comfortably above break-even over multiple periods, scale in controlled steps.
                </p>
              </article>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <article>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Example ROAS Scenarios</h2>
                <p className="text-slate-700 mb-4">
                  ROAS targets are context dependent, so side-by-side scenarios can clarify what a number means in practice. The examples below show how similar headline ROAS can lead to very different decisions depending on margin profile, sales process, and downstream conversion quality. Use these as directional planning references, then replace assumptions with your own channel data, attribution settings, and operating costs before changing spend. The goal is not to copy another model but to understand how each business type translates ROAS into action.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Business Type</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Sample Inputs</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">ROAS Result</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Decision</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 text-sm text-slate-700">Ecommerce</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$40,000 attributed revenue on $10,000 spend</td>
                        <td className="px-4 py-3 text-sm text-slate-700">4.0x</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Strong if margins and return rates stay stable; scale gradually.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 text-sm text-slate-700">SaaS</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$18,000 pipeline revenue on $9,000 spend</td>
                        <td className="px-4 py-3 text-sm text-slate-700">2.0x</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Potentially acceptable only if payback and retention stay within plan.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 text-sm text-slate-700">Lead Generation</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$30,000 closed revenue on $12,000 spend</td>
                        <td className="px-4 py-3 text-sm text-slate-700">2.5x</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Hold and improve lead quality before scaling volume.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <article>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">1. What is considered a good ROAS?</h3>
                    <p>
                      A good ROAS is one that clears your break-even threshold with enough buffer for execution volatility and seasonal performance swings. Many teams reference 3.0x to 5.0x, but your target depends on gross margin, fulfillment costs, and payback expectations. Use your own economics first, then benchmark second.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">2. Why can high ROAS still feel unprofitable?</h3>
                    <p>
                      ROAS tracks top-line efficiency, not net profitability. A campaign can show strong ROAS while margin is compressed by discounts, shipping, returns, sales commissions, or fixed overhead. Validate ROAS alongside contribution margin, cash conversion timing, and post-purchase costs before scaling.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">3. Should I optimize to ROAS, CAC, or both?</h3>
                    <p>
                      Most growth teams need both. ROAS is ideal for campaign and creative optimization, while CAC reflects customer acquisition economics across the funnel. If ROAS improves but CAC worsens, you may be attracting lower-value demand, weaker fit customers, or losing efficiency after click.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">4. How often should I evaluate ROAS?</h3>
                    <p>
                      Check daily for anomalies and delivery issues, but make budget decisions on multi-day windows such as 7-day and 30-day views. This reduces noise from attribution lag, weekend behavior, and short-term auction swings that can distort one-day snapshots and create reactionary decisions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">5. What should I do if ROAS is below target?</h3>
                    <p>
                      Prioritize diagnosis before cutting everything. Review tracking quality, audience intent, landing page conversion, offer clarity, and creative-message fit. Then test focused changes in sequence with clear success criteria. If ROAS remains below break-even after controlled tests, reallocate spend to stronger channels.
                    </p>
                  </div>
                </div>
              </article>
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

            <section className="mt-4 mb-8 bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <p className="text-sm text-slate-700">
                Last updated February 20, 2026. This calculator and its guidance follow standard digital advertising measurement practices, including aligned attribution windows, channel-consistent spend inputs, and revenue-to-cost ratio methods used across performance marketing teams for core planning, reporting, and budget governance decisions.
              </p>
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
