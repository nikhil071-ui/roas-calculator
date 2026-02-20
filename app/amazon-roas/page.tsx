import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Amazon Seller ROAS & ACoS Calculator (FBA Fees + Profitability)",
  description:
    "Calculate true Amazon PPC profitability with ACoS-to-ROAS conversion. Account for FBA fees, referral costs, returns, and storage charges in your break-even ROAS—with 2026 Sponsored Products benchmarks.",
  alternates: {
    canonical: "https://roas-calculator.tech/amazon-roas",
  },
};

export default function AmazonRoasPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Amazon ROAS Calculator Guide",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/amazon-roas",
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Amazon Seller ROAS & ACoS Calculator (FBA Fees + Profitability)",
    description: "Calculate true Amazon PPC profitability with ACoS-to-ROAS conversion. Account for FBA fees, referral costs, returns, and storage charges.",
    author: {
      "@type": "Organization",
      name: "ROAS Tools Editorial Team",
      url: "https://roas-calculator.tech/about"
    },
    datePublished: "2026-01-20",
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
        name: "How do Amazon sellers convert ACoS to ROAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Convert ACoS to ROAS by taking 1 divided by ACoS as a decimal. For example, 25% ACoS equals 4.0x ROAS.",
        },
      },
      {
        "@type": "Question",
        name: "Why can acceptable ACoS still hurt profit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FBA fees, storage charges, returns, and price pressure can shrink contribution margin even when ACoS looks controlled.",
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
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Amazon ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Built for Amazon sellers using Sponsored Products and Sponsored Brands.
          </p>
        </header>

        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Who This Page Is For</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Amazon operators managing ACoS targets and listing-level profitability.</li>
            <li>Agencies optimizing Sponsored Products/Sponsored Brands mix.</li>
            <li>Teams deciding when to raise bids versus improve conversion assets.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Amazon PPC Benchmark Snapshot</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Typical ROAS range: 2.0x to 4.0x</li>
            <li>Strong ROAS range: 4.0x to 6.0x+</li>
            <li>ACoS conversion: ROAS = 1 / ACoS (as decimal)</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">
            Example: 25% ACoS maps to 4.0x ROAS. Source: <Link href="/methodology" className="text-blue-700 hover:underline">ROAS Tools 2026 Benchmark Report & Amazon Seller Central</Link>.
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold mb-3">Why Amazon ROAS Differs from Other Platforms</h2>
          <p className="text-slate-700 mb-4">
            Amazon ROAS is directly tied to ACoS (Advertising Cost of Sale) and FBA profitability structure. Unlike Shopify (where you control pricing) or Facebook (where you control audience), Amazon's algorithm manages visibility, returns are high, and fees are mandatory—making true profit calculation more complex.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Key difference from Shopify ROAS:</strong> Amazon deducts referral fees, FBA fees, and storage fees directly from your seller account. A 3.5x ROAS looks strong, but if your ACoS is 28%, your reference fee is 15%, and FBA costs 40% of revenue, you're actually negative.
          </p>
          <p className="text-slate-700">
            <strong>Key difference from Google Ads ROAS:</strong> Amazon gives you access to customer demand data through Sponsored Products. You see intent right on the product page. Google Shopping shows ROAS but not the downstream return rate—critical for profitability modeling.
          </p>
        </section>

        <section className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold mb-3 text-red-900">Hidden Costs Table: Amazon Fees You Might Forget</h2>
          <p className="text-sm text-red-800 mb-4">Amazon sellers often focus on ACoS but miss these mandatory deductions. Here's what actually reduces profit.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-red-300">
              <thead className="bg-red-100">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Fee Type</th>
                  <th className="text-left px-4 py-3 font-bold">Cost %</th>
                  <th className="text-left px-4 py-3 font-bold">Impact on $10k Sales</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="px-4 py-2 border-t border-red-300">Referral Fee (general)</td>
                  <td className="px-4 py-2 border-t border-red-300">15%</td>
                  <td className="px-4 py-2 border-t border-red-300">$1,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-red-300">FBA Fulfillment Fee</td>
                  <td className="px-4 py-2 border-t border-red-300">$0.70-$4.50/unit (varies)</td>
                  <td className="px-4 py-2 border-t border-red-300">$1,000-2,000 (400-500 units avg)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-red-300">FBA Storage Fee</td>
                  <td className="px-4 py-2 border-t border-red-300">$0.00-0.89/unit/month</td>
                  <td className="px-4 py-2 border-t border-red-300">$300-800 (peak), lower off-season</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-red-300">Returns & Refunds</td>
                  <td className="px-4 py-2 border-t border-red-300">15-30% of orders</td>
                  <td className="px-4 py-2 border-t border-red-300">$1,500-3,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-red-300">High-Volume Brand Registry Discount (if eligible)</td>
                  <td className="px-4 py-2 border-t border-red-300">-0.5% to -2% referral fee</td>
                  <td className="px-4 py-2 border-t border-red-300">-$50 to -$200 (savings)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-red-300">Advertising Cost of Sale (ACoS)</td>
                  <td className="px-4 py-2 border-t border-red-300">25-40%</td>
                  <td className="px-4 py-2 border-t border-red-300">$2,500-4,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-red-800 mt-4">
            <strong>Real example:</strong> $10,000 in attributed sales at 4.0x ROAS ($2,500 ad spend). After referral ($1,500), FBA fulfillment ($1,500), storage ($500), and returns ($1,000), you're down to $3,500 profit—not the $7,500 ROAS suggests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Amazon-Specific FAQ</h2>
          <div className="space-y-4">
            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Should I include organic sales in my Total ROAS (TACOS)?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Use ACoS for campaign-level decisions (which keywords to bid up), but track TACOS (Total Advertising Cost of Sale = Ad Spend / Total Sales) at the ASIN level to see combined impact of organic + paid. For scaling decisions, ROAS is campaign-specific; TACOS shows your true overall marketing efficiency.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How do I model profit if my FBA storage fees spike 200% in Q4?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Use the Break-Even ROAS calculator and include your peak-season storage fee in "Product Costs." Even if ROAS stays 3.5x, higher storage can flip your contribution margin negative. Re-run the math in August ahead of Q4 to set conservative bid caps before peak season crushes margins.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How do I interpret a 25% ACoS? Is that the same as 4x ROAS?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Yes, mathematically: 25% ACoS = 1 / 0.25 = 4.0x ROAS. But ACoS is ad-specific, while ROAS includes COGS. A 4x ROAS with 25% ACoS is still low profit if your margins are thin. Always layer ACoS with contribution margin to make sure the 4x ROAS stays profitable after all fees.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                When should I pause a campaign due to high ACoS? 
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Pause if ACoS is above your break-even threshold AND stayed high for 2+ weeks despite optimization attempts. Calculate: Break-even ACoS % = 100 / (1 / Contribution Margin %). Example: 40% contribution margin = 40% break-even ACoS. If actual ACoS is consistently above this, pause and retest keywords, creatives, or bid strategy.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How do discounted returns affect my profit model?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                If you offer "customer returns 30% of orders at -10% discount," you lose revenue AND still pay referral fees on the original sale and FBA restock fees on the return. Include a 5-10% haircut to revenue for expected returns and re-entry costs when modeling break-even ROAS.
              </p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Amazon Example</h2>
          <p className="text-slate-700">
            Example listing group: ad spend $8,000, attributed sales $28,000, landed COGS + Amazon fees $14,200, orders 560.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>ROAS = 3.50x</li>
            <li>ACoS = 28.6%</li>
            <li>Net Profit = $5,800</li>
            <li>Decision = Hold and optimize creatives/keywords before doubling budget</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for Amazon Decisions</h2>
          <p className="text-slate-700">
            Amazon ROAS and ACoS help prioritize bids and SKU-level spend, but they are not complete profitability metrics.
            Validate with contribution margins, <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC</Link>-style acquisition cost controls, and blended
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> on total marketing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Compare SKU/campaign ROAS against margin-adjusted thresholds in <Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline">Break-even ROAS by Margin</Link>.</li>
            <li>Segment branded and non-branded terms before deciding to scale bids.</li>
            <li>Track fee and return trends to confirm ROAS gains translate to contribution profit.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Private-label launch: strong branded ROAS masks weak non-branded profitability, so scaling should stay selective.</li>
            <li>Seasonal spike: peak-period ROAS rises, but higher storage and return rates reduce realized margin.</li>
            <li>Catalog cleanup: pausing low-margin ASINs improves blended MER even when overall ad volume drops.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use, Limitations, and Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use this metric during bid adjustments, SKU prioritization, and daily budget allocation reviews.</li>
            <li>Do not treat Amazon-attributed ROAS as total business return without organic halo and cost checks.</li>
            <li>Do not assume a fixed ACoS target works across all categories and lifecycle stages.</li>
          </ul>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-amber-900">Troubleshooting: When Amazon ACoS / ROAS Isn't Working</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">↑ ACoS rising month-over-month despite adjusting bids</h3>
              <p className="text-slate-700 mb-2">Likely causes: (1) Keyword saturation—audience fatigue requires new keyword research, (2) Fees increasing—Q3-Q4 storage surge hits margin hard, (3) Returns rising—age of listings or product quality issue, (4) Competition driving CPC up.</p>
              <p className="text-sm"><Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline font-semibold">→ Recalculate break-even ACoS including seasonal fee impacts</Link></p>
            </div>

            <div className="border-t border-amber-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">🤔 My ROAS is 4.0x but profit is minimal—why?</h3>
              <p className="text-slate-700 mb-2">Hidden cost check: Referral fee (15%) + FBA ($1-2/unit) + Storage ($300-800/month peak) + Returns (15-30%) = 50-70% of revenue. 4.0x ROAS ÷ 65% cost = 2.46x actual profit margin. You need 5.0x+ ROAS to stay comfortable.</p>
              <p className="text-sm"><Link href="/methodology" className="text-blue-700 hover:underline font-semibold">→ See detailed FBA fee breakdown in our Methodology</Link></p>
            </div>

            <div className="border-t border-amber-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">📊 Should I raise or lower my bids on an ASIN?</h3>
              <p className="text-slate-700 mb-2">Decision: If ACoS &lt; break-even threshold AND close to breakeven, hold current bids and optimize keywords. If ACoS &gt; break-even × 1.2, reduce bids on high-frequency, low-converting keywords first. If ACoS is 50%+ below breakeven, test 20% bid increase to gain visibility.</p>
              <p className="text-sm"><Link href="/cac-calculator" className="text-blue-700 hover:underline font-semibold">→ Segment by keyword type (branded vs generic) in CAC calculator</Link></p>
            </div>

            <div className="border-t border-amber-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">📅 Q4 storage fees are 3x normal—pause or hold?</h3>
              <p className="text-slate-700 mb-2">Action: Model Q4 margins NOW (August). If break-even ROAS jumps from 2.5x to 3.5x due to storage, pause growth campaigns and focus on existing inventory turnover. Resume aggressive bidding in January when storage normalizes.</p>
              <p className="text-sm"><Link href="/methodology" className="text-blue-700 hover:underline font-semibold">→ Calculate seasonal break-even ROAS scenarios</Link></p>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/roas/amazon-ppc-acos" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Amazon ACoS Calculator
          </Link>
          <Link href="/break-even-roas-by-margin" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            Break-even by Margin
          </Link>
          <Link href="/ppc-toolkit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Open PPC Toolkit
          </Link>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Amazon Decision Workflow</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Map ACoS to ROAS and compare with break-even margin thresholds.</li>
            <li>Segment by campaign type, SKU group, and branded vs non-branded terms.</li>
            <li>Scale bids only where contribution margin remains positive after fees.</li>
          </ol>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            Core logic uses standard formulas: ROAS equals attributed sales divided by ad spend, and ACoS equals ad spend divided by attributed sales.
            Decision guidance should be validated against post-fee contribution economics.
          </p>
        </section>

        <EmailCaptureCard
          source="persona_amazon_roas"
          title="Get Amazon RPM/ROAS Benchmark Updates"
          description="Use this with ACoS and break-even targets before changing bids or daily budgets."
          buttonLabel="Send Amazon Benchmarks"
          helperText="Includes ACoS to ROAS conversion and scale/hold/pause guardrails."
        />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
      </article>
    </main>
  );
}
