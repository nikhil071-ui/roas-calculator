import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "./seo";
import TrackedLink from "@/app/components/TrackedLink";
import RoasClient from "./RoasClient";
import LazyHomeSecondarySections from "@/app/components/LazyHomeSecondarySections";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";
import ExitIntentLeadCapture from "@/app/components/ExitIntentLeadCapture";

export const metadata: Metadata = {
  title: "ROAS Calculator for Paid Media Profitability",
  description:
    "Free ROAS calculator for ecommerce, SaaS, lead generation, and publishers. Model break-even thresholds and campaign profitability.",
  keywords: [
    "roas calculator",
    "return on ad spend calculator",
    "break even roas calculator",
    "google ads roas calculator",
    "facebook ads roas calculator",
    "ecommerce roas calculator",
    "saas roas calculator",
    "lead generation roas calculator",
    "ppc profit calculator",
    "marketing roi tool",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "ROAS Calculator for Paid Media Profitability",
    description:
      "Free ROAS calculator for ecommerce, SaaS, lead generation, and publishers. Model break-even thresholds and campaign profitability.",
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
    title: "ROAS Calculator for Paid Media Profitability",
    description:
      "Free ROAS calculator for ecommerce, SaaS, lead generation, and publishers. Model break-even thresholds and campaign profitability.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function Home() {
  const webApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ROAS Calculator",
    "description": "Calculates return on ad spend using standard performance metrics.",
    "url": "https://roas-calculator.tech/",
    "applicationCategory": "Business/Marketing Tool",
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
        "name": "Is a 3x ROAS profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your margins and operating costs. A 3x ROAS means $3 in revenue for each $1 spent, but profitability can disappear once COGS, fulfillment, discounts, and overhead are included. Use your break-even ROAS as the baseline before scaling."
        }
      },
      {
        "@type": "Question",
        "name": "How does ROAS differ from ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ROAS measures revenue returned per ad dollar, while ROI measures net profit relative to total investment. ROAS is faster for campaign decisions, but ROI is broader and includes more costs. Teams use ROAS for optimization and ROI for full profitability checks."
        }
      },
      {
        "@type": "Question",
        "name": "Why can ROAS alone be misleading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ROAS excludes margin, cash timing, and lifecycle value. A campaign can look efficient in-platform while still producing weak unit economics after returns, discounts, and sales costs. Pair ROAS with CAC, LTV, and margin for a complete decision view."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve my ROAS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Improve message-to-audience fit, tighten targeting, strengthen landing pages, and remove low-intent spend. Validate tracking and attribution windows so you optimize the right signals. Then scale winning segments gradually while monitoring CAC and blended efficiency."
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
            The ROAS Calculator Built for Paid Media Teams
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Model break-even ROAS, campaign efficiency, and profitability before increasing spend across ecommerce, SaaS, lead gen, and publisher models.
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
                  ROAS is most useful when it drives decisions, not just reporting. It tells you whether current media spend is producing enough revenue to justify the next budget move. Teams use it to judge ad spend efficiency across channels, prioritize creatives worth scaling, and stop campaigns that generate activity without meaningful marketing return. It also helps separate short-term noise from dependable performance trends. A campaign with a strong in-platform number can still fail if returns, discounting, or close rates erode campaign profitability after the click. That is why ROAS works best when paired with margin assumptions and payback expectations before budget increases. For operators, the practical workflow is simple: measure results, compare against break-even, and decide whether to scale, hold, or optimize. This framework improves performance evaluation because decisions are made on economics, not vanity metrics. It also supports better cross-team planning by giving finance and marketing one shared view of acceptable growth. Over time, teams that track ROAS this way usually make faster allocation decisions, waste less spend on low-intent traffic, and defend budget decisions with clearer evidence. If you need a baseline first, use the <Link href="/break-even-roas-by-margin" prefetch={false} className="text-blue-700 hover:underline">break-even ROAS calculator</Link> to define the minimum viable target. Then compare this with your customer acquisition cost in the <Link href="/cac-calculator" prefetch={false} className="text-blue-700 hover:underline">customer acquisition cost calculator</Link>. Together, these checks turn ROAS from a dashboard metric into an operating control for growth and profitability.
                </p>
              </article>
            </section>

            <section className="mt-2 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <article>
                <h2 className="text-xl font-bold text-slate-900 mb-3">ROAS Formula Explained</h2>
                <p className="text-slate-700">
                  The formula is straightforward: <strong>ROAS = Revenue / Ad Spend</strong>. Revenue is the sales value attributed to the campaigns you are evaluating, and ad spend is the media cost used to produce that same revenue. If revenue is $20,000 and spend is $5,000, ROAS is 4.0x. The math looks simple, but teams often misread it by combining mismatched variables, such as a 30-day revenue window with a 7-day spend window, or platform-attributed revenue against blended account spend. Those scope mismatches can distort performance and create poor budget decisions. Another common issue is excluding fees from spend while counting gross sales as revenue, which overstates true efficiency. Keep attribution model, channel scope, and date range aligned, then cross-check account efficiency with the <Link href="/mer-calculator" prefetch={false} className="text-blue-700 hover:underline">MER calculator</Link>.
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
                  Start with ranges, then apply your economics. A low ROAS, often under 2.0x, usually signals weak efficiency unless your margins are unusually high or you are intentionally buying early-stage demand. An average range around 2.0x to 3.5x can be workable, but it is sensitive to pricing, conversion rate, and fulfillment costs. A strong ROAS above that range often supports scaling, but only if lead quality, conversion consistency, and operational capacity remain stable. Margin is the deciding filter: the same 3.0x result can be profitable for one business and unprofitable for another after discounts, shipping, or sales overhead. Use ROAS as one lens, not the entire model. Trends also matter more than isolated daily spikes, so evaluate weekly and monthly patterns before changing budgets. It is also useful to segment results by campaign objective and audience type, because blended averages can hide underperforming pockets that need optimization before scale. Compare this with your customer acquisition cost in the <Link href="/cac-calculator" prefetch={false} className="text-blue-700 hover:underline">customer acquisition cost calculator</Link>, and estimate long-term value using the <Link href="/ltv-calculator" prefetch={false} className="text-blue-700 hover:underline">LTV calculator</Link>. When ROAS, CAC, and LTV all align above break-even expectations, scaling decisions become far more reliable.
                </p>
              </article>
            </section>

            <section className="mt-8 mb-6 bg-white border border-slate-200 rounded-2xl p-6">
              <article>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Example ROAS Scenarios</h2>
                <p className="text-slate-700 mb-4">
                  ROAS benchmarks vary by model, so these examples should be treated as directional context, not universal targets. The same ROAS multiple can lead to opposite decisions depending on margin profile, conversion lag, and sales process. This table helps you compare your current performance against realistic business types and quickly identify where your numbers may be strong, fragile, or misleading. Use it as a planning reference, then replace sample values with your own channel scope, attribution settings, and operating assumptions before adjusting budget.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Business Type</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Ad Spend</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Revenue</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">ROAS</th>
                        <th className="px-4 py-3 text-sm font-semibold text-slate-900">Interpretation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 text-sm text-slate-700">Ecommerce brand</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$10,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$40,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">4.0x</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Strong if gross margins and return rates remain stable; scale in controlled steps.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 text-sm text-slate-700">SaaS company</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$9,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$18,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">2.0x</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Average headline efficiency; validate against payback period and retention before scaling.</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-4 py-3 text-sm text-slate-700">Lead generation business</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$12,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">$30,000</td>
                        <td className="px-4 py-3 text-sm text-slate-700">2.5x</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Potentially viable, but close rate and lead quality should improve before increasing spend.</td>
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
                      A good ROAS is any result that clears your break-even target with room for volatility. Many teams use 3.0x to 5.0x as a directional range, but your true benchmark depends on gross margin, return rate, and operating costs. A business with thin margins may need a much higher number than a business with strong repeat purchase behavior.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">2. Is a 3x ROAS profitable?</h3>
                    <p>
                      Sometimes. A 3x ROAS means three dollars of revenue per dollar of ad spend, but profitability depends on what happens after revenue is recorded. If your product margins are thin, or costs like shipping, discounts, support, and sales overhead are high, 3x may still be below your profitability threshold.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">3. How does ROAS differ from ROI?</h3>
                    <p>
                      ROAS measures revenue efficiency for advertising spend only. ROI measures profit against total investment, including broader business costs. ROAS is faster for day-to-day campaign optimization, while ROI gives the full profitability picture. Most operators use ROAS for media decisions and ROI for strategic finance checks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">4. Why can ROAS alone be misleading?</h3>
                    <p>
                      ROAS does not capture margin quality, cash timing, or customer lifetime economics. A campaign can look efficient in-platform while losing money after fulfillment costs or generating low-quality customers with poor retention. That is why teams read ROAS beside CAC, LTV, and contribution margin before scaling spend.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">5. How can I improve my ROAS?</h3>
                    <p>
                      Start by fixing measurement consistency, then improve traffic and conversion quality. Tighten targeting, refresh creative angles, align landing pages with ad intent, and cut low-intent queries or placements. Run controlled tests and review changes on 7-day and 30-day windows before scaling. Small, compounding improvements typically outperform large, reactive budget shifts. Prioritize one bottleneck at a time so the impact of each change is measurable.
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
                Last Updated: February 2026. These calculations follow widely accepted digital advertising measurement practices, including consistent attribution windows, aligned spend and revenue scope, and standard revenue-to-ad-spend methodology used for performance evaluation and campaign planning.
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
                <Link href="/ppc-toolkit" prefetch={false} className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-2">
                  Open PPC Toolkit
                </Link>
                <Link href="/resources" prefetch={false} className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-2">
                  Download Templates
                </Link>
                <Link href="/comparisons/mer-vs-roas" prefetch={false} className="text-sm font-semibold text-slate-700 hover:text-slate-900 underline underline-offset-2">
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
                Built and maintained by the ROAS Tools Editorial Team.
              </p>
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

            <section className="mt-4 mb-8 bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <p className="text-sm text-slate-700">
                Last Updated: February 2026. Calculations on this page follow widely accepted digital advertising measurement practices, including consistent attribution windows, aligned ad spend and revenue scope, and standard ROAS methodology used by performance marketing teams for planning, evaluation, and ongoing budget governance.
              </p>
            </section>
        </div>

      </div>
    </main>
  );
}
