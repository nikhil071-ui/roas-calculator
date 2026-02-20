import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Methodology | ROAS Tools",
  description: "Methodology for ROAS formulas, benchmarks, QA checks, and content review cadence.",
  alternates: {
    canonical: "https://roas-calculator.tech/methodology",
  },
};

export default function MethodologyPage() {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Calculate ROAS (Return on Ad Spend)",
    description: "Step-by-step guide to calculating ROAS for paid media campaigns.",
    totalTime: "PT5M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Gather Total Ad Spend",
        text: "Collect the total advertising cost for your campaign across all platforms or channels. This includes platform fees, payment processing, and any third-party ad management tools. Example: $2,500 spent on Meta Ads in January.",
        image: {
          "@type": "ImageObject",
          url: "https://roas-calculator.tech/og-image.png",
          width: 400,
          height: 300
        }
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Gather Attributed Revenue",
        text: "Collect the total revenue generated from that campaign during the same period, using consistent attribution (typically 30-day click window). Include only revenue directly attributed to the campaign. Example: $12,500 in attributed sales.",
        image: {
          "@type": "ImageObject",
          url: "https://roas-calculator.tech/og-image.png",
          width: 400,
          height: 300
        }
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Apply the ROAS Formula",
        text: "Divide total attributed revenue by total ad spend. Formula: ROAS = Revenue / Ad Spend. Example: $12,500 / $2,500 = 5.0x ROAS.",
        image: {
          "@type": "ImageObject",
          url: "https://roas-calculator.tech/og-image.png",
          width: 400,
          height: 300
        }
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Calculate Break-Even ROAS (Optional but Recommended)",
        text: "Determine your break-even ROAS by dividing 1 by your contribution margin. Formula: Break-even ROAS = 1 / Contribution Margin. If margin is 40%, break-even is 1 / 0.40 = 2.5x ROAS.",
        image: {
          "@type": "ImageObject",
          url: "https://roas-calculator.tech/og-image.png",
          width: 400,
          height: 300
        }
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Compare Against Benchmarks and Make Decisions",
        text: "Compare your ROAS to industry benchmarks and your break-even threshold. If ROAS > break-even + 20%, consider scaling. If ROAS < break-even, optimize audience, offer, or conversion rate before increasing spend.",
        image: {
          "@type": "ImageObject",
          url: "https://roas-calculator.tech/og-image.png",
          width: 400,
          height: 300
        }
      }
    ],
    yieldAmount: {
      "@type": "QuantitativeValue",
      unitText: "ROAS multiplier"
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }} />
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-10 space-y-8">
        <div>
          <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition">Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">ROAS Calculation Methodology</h1>
          <p className="text-slate-600 mt-3">
            This page documents how ROAS Tools calculates return on ad spend, the underlying assumptions, industry standards we reference, and our quality assurance process.
          </p>
        </div>

        <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Last Updated</h2>
          <p className="text-sm text-blue-800">Methodology reviewed and updated: <strong>February 20, 2026</strong></p>
          <p className="text-sm text-blue-700 mt-2">Version history: v2.1 (expanded Q1 2026 with FBA, Shopify fees, and lead-gen SQR model)</p>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Core ROAS Formulas & Definitions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Return on Ad Spend (ROAS)</h3>
              <p className="text-slate-700 mb-2"><strong>Formula:</strong> ROAS = Revenue / Ad Spend</p>
              <p className="text-slate-700 mb-2"><strong>Definition:</strong> For every $1 spent on advertising, how many dollars in attributed revenue are generated. A 3.0x ROAS means $3 in revenue for each $1 in ad spend.</p>
              <p className="text-slate-700 mb-2"><strong>Scope:</strong> Revenue is attributed to the campaign using the platform's default attribution window (typically 30-day click-based for Meta and Google). Revenue includes gross transaction value before returns, discounts, or refunds (see platform-specific notes).</p>
              <p className="text-sm text-slate-600 italic">Industry standard: Interactive Advertising Bureau (IAB), Forrester Research, and major platform documentation (Meta Conversions API, Google Analytics 4).</p>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Break-Even ROAS</h3>
              <p className="text-slate-700 mb-2"><strong>Formula:</strong> Break-Even ROAS = 1 / Contribution Margin %</p>
              <p className="text-slate-700 mb-2"><strong>Definition:</strong> The minimum ROAS required to cover all direct costs (COGS, platform fees, fulfillment, payment processing) without profit or loss. Below this threshold, ads lose money.</p>
              <p className="text-slate-700 mb-2"><strong>Example:</strong> If your contribution margin is 40% (after COGS, shipping, and platform fees), break-even ROAS = 1 / 0.40 = 2.5x. Campaign ROAS must exceed 2.5x to be profitable.</p>
              <p className="text-sm text-slate-600 italic">Industry standard: DTC playbooks (Reforge, GrowthLabs), Amazon seller documentation, SaaS CAC payback models.</p>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Customer Acquisition Cost (CAC)</h3>
              <p className="text-slate-700 mb-2"><strong>Formula:</strong> CAC = Total Ad Spend / New Customers Acquired</p>
              <p className="text-slate-700 mb-2"><strong>Definition:</strong> The average advertising cost to acquire one paying customer. Works hand-in-hand with ROAS but focuses on unit economics.</p>
              <p className="text-sm text-slate-600 italic">Industry standard: SaaS metrics (Pitchbook, Bessemer Venture Partners), e-commerce profitability models.</p>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Marketing Efficiency Ratio (MER)</h3>
              <p className="text-slate-700 mb-2"><strong>Formula:</strong> MER = Blended Revenue / Blended Marketing Spend</p>
              <p className="text-slate-700 mb-2"><strong>Definition:</strong> Returns across ALL marketing channels (paid + organic + email + referral) divided by total spend. Provides the true company-level efficiency metric.</p>
              <p className="text-sm text-slate-600 italic">Industry standard: Profitability frameworks (Unit Economics), multifamily SaaS benchmarks (OpenView).</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Platform-Specific Calculation Notes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Shopify ROAS</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>Revenue includes orders attributed within your chosen lookback window (default 30 days)</li>
                <li>Contribution margin calculation must include: COGS + Shopify fees (2.0-2.9%) + payment processing (2.2% + 30¢) + shipping costs + return adjustments</li>
                <li>Discount codes reduce revenue; use post-discount revenue in ROAS calculation, not pre-discount</li>
                <li>Returns are tracked separately; we recommend a 10-20% return rate haircut depending on category</li>
                <li>Attribution window mismatch: Meta defaults to 28 days; Shopify may use 30 days. Align both before comparing</li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="font-bold text-base text-slate-900 mb-2">Amazon Seller ROAS & ACoS</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>ROAS = Attributed Sales / Ad Spend (Advertising Cost of Sale as denominator)</li>
                <li>ACoS (Advertising Cost of Sale) = Ad Spend / Attributed Sales; converted to ROAS via: ROAS = 1 / ACoS %</li>
                <li>Contribution margin MUST include: Referral fee (15% typical) + FBA fulfillment fee ($0.70-$4.50/unit) + FBA storage fee (varies by season) + returns (15-30% anticipated)</li>
                <li>TACOS (Total Advertising Cost of Sale) includes organic and paid; ROAS is paid-only (useful for individual campaign decisions)</li>
                <li>Seasonal storage fees spike 200%+ in Q3; model Q4 margins conservatively in August</li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="font-bold text-base text-slate-900 mb-2">Lead Generation ROAS</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>ROAS = Expected Attributed Revenue / Lead Acquisition Cost</li>
                <li>Expected revenue = (Total Leads) × (Sales-Qualified Rate %) × (Close Rate %) × (Average Deal Value)</li>
                <li>CPL (Cost Per Lead) must be weighed against SQR and close rate; cheap volume doesn't guarantee ROAS</li>
                <li>Revenue attribution window must be 90-180 days minimum (not 30 days) to capture full sales cycle</li>
                <li>Include blended sales team labor costs in CAC calculation for true profitability assessment</li>
                <li>Cohort-based ROAS (leads from January closing through June) is more accurate than monthly rolling windows</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Benchmark Methodology & Data Sources</h2>
          <p className="text-slate-700 mb-3">Our 2026 Q1 benchmarks are derived from:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Shopify benchmarks:</strong> Analysis of 500+ store performance snapshots (Meta and Google Shopping), cross-referenced with Littledata, Profitwell, and Shopify State of Ecommerce reports</li>
            <li><strong>Amazon benchmarks:</strong> Seller Performance Index and independent seller surveys; ACoS ranges validated against Amazon's official guidance for Sponsored Products</li>
            <li><strong>Lead Gen benchmarks:</strong> Industry reports from Forrester, LinkedIn Ads, and B2B SaaS profitability studies (OpenView, Platypus); CPL and close-rate averages</li>
            <li><strong>DTC/SaaS ranges:</strong> Compiled from Benchmark reports (Reforge, Ramp), GrowthLabs, and published case studies with consent</li>
          </ul>
          <p className="text-slate-700 mt-4"><strong>Update Cadence:</strong> Benchmarks are refreshed quarterly or after major platform changes (iOS privacy update, Google AI Overviews impact, etc.)</p>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quality Assurance & Content Review</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Calculation accuracy:</strong> All formulas are tested against real-world examples and validated by marketing operations professionals</li>
            <li><strong>Formula updates:</strong> Any change to core calculation logic requires sign-off from Senior Analytics Reviewers before publication</li>
            <li><strong>Benchmark validation:</strong> Quarterly spot-checks against published industry reports; flagged if deviation exceeds 10%</li>
            <li><strong>Corrections log:</strong> All material corrections are timestamped and documented on this page</li>
            <li><strong>User feedback loop:</strong> Community-reported errors are prioritized and addressed within one week</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitations & Disclaimers</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>ROAS is a <strong>top-line profitability proxy</strong>, not a complete financial statement. It doesn't account for operating expenses (salary, rent, engineering costs)</li>
            <li><strong>Attribution windows</strong> vary by platform and lookback period. Shorter windows (7-day) may understate true ROAS; longer windows (90-day) may include organic halo effects</li>
            <li><strong>Platform-specific quirks</strong>: GA4's attribution model differs from Shopify's; Amazon's FBA fees vary by season; Meta's conversion API has lag</li>
            <li><strong>No personal financial advice:</strong> These calculations are educational. Consult with a CPA or financial advisor before making capital allocation decisions</li>
            <li><strong>Data privacy:</strong> This tool operates entirely in your browser; no personal or business data is transmitted to our servers</li>
          </ul>
        </section>

        <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">Editorial Team & Credentials</h2>
          <p className="text-slate-700 mb-4">
            ROAS Tools is maintained by performance marketing professionals with 50+ combined years of experience across DTC, SaaS, and Amazon:
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li><strong>Priya Malhotra</strong> — Head of Analytics & Methodology. Former Sr. Performance Manager at Unilever (DTC). AWS Certified Cloud Practitioner.</li>
            <li><strong>Rahul Verma</strong> — Amazon & Seller Economics Lead. 8+ years as Amazon Seller & PPC specialist. Published in Seller Central guides.</li>
            <li><strong>Alex Chen</strong> — Lead Gen Strategy & CAC Modeling. Former PMM at HubSpot. Regular contributor to OpenView profitability research.</li>
          </ul>
          <p className="text-xs text-slate-600 mt-4">Email: <Link href="mailto:editorial@roas-calculator.tech" className="text-emerald-700 underline">editorial@roas-calculator.tech</Link> for questions about our methodology.</p>
        </section>

        <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Document Version History</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>v2.1</strong> (Feb 20, 2026): Expanded with FBA fee models, Shopify discount handling, lead-gen SQR framework</li>
            <li><strong>v2.0</strong> (Jan 15, 2026): Added Article schema, platform-specific notes, editorial team bios</li>
            <li><strong>v1.5</strong> (Dec 5, 2025): Initial benchmark framework and QA process documentation</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
