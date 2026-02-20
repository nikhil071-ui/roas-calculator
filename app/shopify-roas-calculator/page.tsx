import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Shopify ROAS Calculator for DTC Stores (2026 Benchmarks + Discount Math)",
  description:
    "Free Shopify ROAS calculator for DTC brands. Learn how to calculate profitable ROAS accounting for Shopify fees, shipping, and discount codes—plus benchmark ranges for Meta and Google Shopping campaigns.",
  alternates: {
    canonical: "https://roas-calculator.tech/shopify-roas-calculator",
  },
};

export default function ShopifyRoasCalculatorPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Shopify ROAS Calculator Guide",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/shopify-roas-calculator",
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Shopify ROAS Calculator for DTC Stores (2026 Benchmarks + Discount Math)",
    description: "Free Shopify ROAS calculator for DTC brands. Learn how to calculate profitable ROAS accounting for Shopify fees, shipping, and discount codes.",
    author: {
      "@type": "Organization",
      name: "ROAS Tools Editorial Team",
      url: "https://roas-calculator.tech/about"
    },
    datePublished: "2026-01-15",
    dateModified: "2026-02-20",
    publisher: {
      "@type": "Organization",
      name: "ROAS Tools",
      logo: {
        "@type": "ImageObject",
        url: "https://roas-calculator.tech/logo.png",
        width: 250,
        height: 60
      }
    }
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should a Shopify team trust ROAS enough to scale?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Scale when campaign ROAS is consistently above break-even, CAC payback remains acceptable, and blended MER is stable.",
        },
      },
      {
        "@type": "Question",
        name: "Why can high Shopify ROAS still be unprofitable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discounting, shipping, returns, and platform fees can reduce contribution margin, so ROAS alone may overstate true profitability.",
        },
      },
    ],
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-10 space-y-8">
        <header>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Shopify ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Tailored for Shopify growth teams running Meta and Google Shopping campaigns.
          </p>
        </header>

        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Who This Page Is For</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>DTC operators managing Shopify catalog growth with paid social.</li>
            <li>Performance marketers balancing discount strategy with contribution margin.</li>
            <li>Teams deciding scale/hold/pause on weekly merchant reviews.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Shopify Benchmark Snapshot (2026)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <caption className="text-sm text-slate-600 mb-2">2026 typical and strong ROAS ranges for Shopify campaigns by channel</caption>
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Channel</th>
                  <th className="text-left px-4 py-2">Typical ROAS</th>
                  <th className="text-left px-4 py-2">Strong ROAS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-t">Meta DTC</td>
                  <td className="px-4 py-2 border-t">1.8x to 3.2x</td>
                  <td className="px-4 py-2 border-t">3.5x to 5.0x+</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Google Shopping</td>
                  <td className="px-4 py-2 border-t">2.0x to 3.8x</td>
                  <td className="px-4 py-2 border-t">4.0x to 6.0x+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold mb-3">Why Shopify ROAS Differs from Other Platforms</h2>
          <p className="text-slate-700 mb-4">
            Shopify ROAS is unique because it bridges platform analytics (Meta, Google Ads) with your own storefront data. Unlike pure ad platform metrics, Shopify ROAS must account for attribution windows, discount code stacking, and real fulfillment costs—not just theoretical COGS.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Key difference from GA4 ROAS:</strong> Your Shopify store directly captures order data, returns, and refunds. GA4 misses returns unless manually configured. A 3.5x Shopify ROAS can become 2.1x after you factor in a 15% return rate.
          </p>
          <p className="text-slate-700">
            <strong>Key difference from Amazon ROAS:</strong> Shopify gives you margin control (you set pricing and promotion strategy), but it also hands you fulfillment complexity and customer service costs. Amazon takes a fixed-fee cut; Shopify lets you scale efficiently once you understand your unit economics.
          </p>
        </section>

        <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold mb-3 text-amber-900">Hidden Costs Table: What's Eating Your Margin</h2>
          <p className="text-sm text-amber-800 mb-4">Most teams forget to include these when calculating true profit. Enter your numbers below to see the real impact.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-amber-300">
              <thead className="bg-amber-100">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Cost Category</th>
                  <th className="text-left px-4 py-3 font-bold">Example %</th>
                  <th className="text-left px-4 py-3 font-bold">Impact on $10k Revenue</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="px-4 py-2 border-t border-amber-300">Shopify Platform Fees</td>
                  <td className="px-4 py-2 border-t border-amber-300">2.0-2.9% of revenue</td>
                  <td className="px-4 py-2 border-t border-amber-300">$200-290</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-amber-300">Payment Processing (Shopify Payments)</td>
                  <td className="px-4 py-2 border-t border-amber-300">2.2% + 30¢</td>
                  <td className="px-4 py-2 border-t border-amber-300">$250-300</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-amber-300">Shipping Costs (avg)</td>
                  <td className="px-4 py-2 border-t border-amber-300">8-15% of revenue</td>
                  <td className="px-4 py-2 border-t border-amber-300">$800-1,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-amber-300">Returns & Refunds</td>
                  <td className="px-4 py-2 border-t border-amber-300">10-20% of orders</td>
                  <td className="px-4 py-2 border-t border-amber-300">$1,000+ (revenue loss)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-amber-300">Discounts & Coupons</td>
                  <td className="px-4 py-2 border-t border-amber-300">5-15% avg discount</td>
                  <td className="px-4 py-2 border-t border-amber-300">$500-1,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-amber-300">Chargeback & Fraud Prevention</td>
                  <td className="px-4 py-2 border-t border-amber-300">0.5-1.5%</td>
                  <td className="px-4 py-2 border-t border-amber-300">$50-150</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-amber-800 mt-4">
            <strong>Real example:</strong> You make $10,000 in attributed revenue at 3.5x ROAS ($2,857 ad spend), but after Shopify fees ($230), processing ($230), shipping ($1,200), and returns ($1,000), your net is only $4,540 profit—not the $7,143 ROAS suggests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Shopify-Specific FAQ</h2>
          <div className="space-y-4">
            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How do I account for discount codes in my ROAS?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Include the discounted revenue (not pre-discount). If you ran a "15% off" promo and it generated $8,500 in discounted revenue, use $8,500 in your ROAS calculation, not the theoretical full price. The discount is part of your margin math.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Should I include organic traffic when calculating ROAS for paid campaigns?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                No. ROAS must only count revenue attributed to the campaign you're analyzing. Organic traffic helps your store, but it shouldn't inflate your paid campaign ROAS. Use GA4 or your Shopify app's attribution window (30-day default) to match attributed revenue with ad spend.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Why does Shopify analytics show higher revenue than my ad platform?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Different attribution windows. Meta defaults to 28-day click attribution; Google uses 30-day. Shopify might use a different window. Always align: set both to the same lookback period (typically 30 days) before comparing numbers.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How much of my shipping cost should I include in COGS for break-even calculation?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Include all fulfillment costs you directly control: warehouse labor, packaging, and carrier fees. If you use Shopify Fulfillment Network or Printful, add those per-unit costs. If customers cover shipping in checkout, subtract that from your cost base. Accuracy here is critical for real break-even ROAS.
              </p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Shopify Example</h2>
          <p className="text-slate-700">
            Example store: ad spend $12,000, attributed revenue $42,000, COGS + fulfillment $19,000, orders 420.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>ROAS = 3.50x</li>
            <li>Net Profit = $11,000</li>
            <li>Break-even ROAS = 1.83x</li>
            <li>Decision = Scale gradually while monitoring blended MER</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for Shopify Decisions</h2>
          <p className="text-slate-700">
            Shopify ROAS should be treated as an operating control metric, not a standalone profitability verdict.
            Evaluate with <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC</Link>,
            <Link href="/ltv-calculator" className="text-blue-700 hover:underline"> LTV</Link>, and
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> to decide if higher spend is sustainable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Compare campaign ROAS against your margin-based floor in <Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline">Break-even ROAS by Margin</Link>.</li>
            <li>Validate that blended MER stays stable after promotions and discount windows.</li>
            <li>Review by product family because AOV and return rate variance can distort headline ROAS.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use, Limitations, and Common Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use this for weekly budget reviews, promo planning, and catalog-level prioritization.</li>
            <li>Do not assume attributed platform ROAS equals incremental profit after returns and discounts.</li>
            <li>Do not rely only on first-order ROAS for subscription or repeat-heavy catalogs; include cohort LTV behavior.</li>
          </ul>
        </section>

        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Troubleshooting: When Your Shopify ROAS Isn't Working</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">↓ ROAS is dropping month-over-month despite stable spend</h3>
              <p className="text-slate-700 mb-2">Likely causes: (1) Audience fatigue—creative freshness required, (2) Seasonal dip—validate against last year, (3) Attribution window mismatch—check 30-day vs 28-day, (4) Hidden costs increasing—track Shopify fees, returns, discounts.</p>
              <p className="text-sm"><Link href="/blog/how-to-improve-roas-without-raising-budget" className="text-blue-700 hover:underline font-semibold">→ Read: 5 Ways to Lower Your CPA When ROAS is Below Break-Even</Link></p>
            </div>

            <div className="border-t border-blue-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">↑ ROAS is 3.5x+ but you're not profitable</h3>
              <p className="text-slate-700 mb-2">Likely causes: (1) COGS higher than modeled—verify landed cost with supplier, (2) Shipping/returns underestimated—track actual fulfillment costs, (3) Discount codes more aggressive than planned, (4) Repeat rate lower than LTV assumes.</p>
              <p className="text-sm"><Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline font-semibold">→ Calculate your true break-even ROAS including all costs</Link></p>
            </div>

            <div className="border-t border-blue-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">❓ Should I scale this campaign or pause it?</h3>
              <p className="text-slate-700 mb-2">Decision framework: (1) Compare ROAS vs. break-even ROAS. If &gt; break-even × 1.2, scale in 15-20% increments. (2) Monitor CAC payback month-over-month. If rising, audience quality is declining. (3) Track blended MER across all channels. If scaling this one drops blended MER below threshold, pause.</p>
              <p className="text-sm"><Link href="/blog/when-to-scale-or-pause-campaigns" className="text-blue-700 hover:underline font-semibold">→ Read: Scaling Framework - How to Increase Budget Without Breaking Your ROAS</Link></p>
            </div>

            <div className="border-t border-blue-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">🎯 Test a new audience or creative—what ROAS do I need to keep it?</h3>
              <p className="text-slate-700 mb-2">Minimum acceptable ROAS = break-even threshold + 20% buffer. Example: If break-even is 2.5x, you need 3.0x ROAS minimum to scale. If test achieves 2.8x, hold and optimize before scaling.</p>
              <p className="text-sm"><Link href="/cac-calculator" className="text-blue-700 hover:underline font-semibold">→ Use the CAC Calculator to isolate unit economics by audience</Link></p>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/roas/google-shopping-roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Shopping ROAS Calculator
          </Link>
          <Link href="/benchmarks/roas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            View ROAS Benchmarks
          </Link>
          <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Open PPC Toolkit
          </Link>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Shopify Decision Workflow</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Calculate break-even ROAS using current margin after discounts.</li>
            <li>Compare campaign ROAS by audience and product bundle.</li>
            <li>Scale only cohorts with stable payback and repeat-purchase quality.</li>
          </ol>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            Scenario outputs use explicit arithmetic: ROAS equals attributed revenue divided by ad spend, while break-even guidance maps to contribution margin assumptions.
            Decisions should be confirmed against blended efficiency and cash recovery windows.
          </p>
        </section>

        <EmailCaptureCard
          source="persona_shopify_roas"
          title="Get Shopify RPM/ROAS Benchmark Updates"
          description="Use benchmark updates to validate break-even, discount impact, and scale readiness for Shopify campaigns."
          buttonLabel="Send Shopify Benchmarks"
          helperText="Includes DTC benchmark guardrails and weekly review prompts."
        />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
      </article>
    </main>
  );
}
