import type { Metadata } from "next";
import Link from "next/link";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

export const metadata: Metadata = {
  title: "Lead Generation ROAS Calculator (Close Rate & Deal Value Model)",
  description:
    "Model true lead-gen profitability by combining CPL, sales-qualified rate, close rate, and deal value. Avoid scaling cheap low-quality leads—calculate your real CAC and break-even ROAS.",
  alternates: {
    canonical: "https://roas-calculator.tech/lead-generation-roas",
  },
};

export default function LeadGenerationRoasPage() {
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Lead Generation ROAS Calculator Guide",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: "https://roas-calculator.tech/lead-generation-roas",
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lead Generation ROAS Calculator (Close Rate & Deal Value Model)",
    description: "Model true lead-gen profitability by combining CPL, sales-qualified rate, close rate, and deal value.",
    author: {
      "@type": "Organization",
      name: "ROAS Tools Editorial Team",
      url: "https://roas-calculator.tech/about"
    },
    datePublished: "2026-01-25",
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
        name: "How is lead-generation ROAS different from eCommerce ROAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lead-gen ROAS depends on downstream close rate and deal value, not only immediate form fills or booked calls.",
        },
      },
      {
        "@type": "Question",
        name: "Why can low CPL still produce weak ROAS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Low-cost leads may convert poorly, so sales-qualified rate and close quality can reduce true revenue return.",
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
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Lead Generation ROAS Calculator</h1>
          <p className="text-slate-600 mt-3">
            Designed for lead-gen teams where CPL, close rate, and deal value determine true ROAS.
          </p>
        </header>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Lead Gen Benchmark Snapshot</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left px-4 py-2">Metric</th>
                  <th className="text-left px-4 py-2">Typical</th>
                  <th className="text-left px-4 py-2">Strong</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-t">Lead-gen ROAS</td>
                  <td className="px-4 py-2 border-t">2.5x to 5.0x</td>
                  <td className="px-4 py-2 border-t">6.0x to 10.0x+</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Close Rate</td>
                  <td className="px-4 py-2 border-t">8% to 15%</td>
                  <td className="px-4 py-2 border-t">16%+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold mb-3">Why Lead-Gen ROAS Differs from Ecommerce & Amazon</h2>
          <p className="text-slate-700 mb-4">
            Lead-gen ROAS is fundamentally different because you're paying for potential future revenue, not immediate sales. A lead today might convert to revenue in 6 months (SaaS trial), 3 years (insurance), or never at all (sales-qualified rate matters enormously).
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Key difference from eCommerce ROAS:</strong> You can't measure ROAS until you track all the way through close. A $50 lead that takes 90 days to close is invisible in a 30-day ROAS window. Use pipeline value, not just top-funnel attribution.
          </p>
          <p className="text-slate-700">
            <strong>Key difference from Amazon ROAS:</strong> Amazon's ROAS is tied to immediate sales; lead-gen ROAS requires sales team coordination. A cheap lead source can destroy profitability if sales force can't close or follow-up is slow. ROAS alone doesn't tell you if you're buying qualified leads or just volume.
          </p>
        </section>

        <section className="rounded-xl border border-purple-200 bg-purple-50 p-6">
          <h2 className="text-2xl font-bold mb-3 text-purple-900">Hidden Costs Table: Lead Gen Economics You Might Miss</h2>
          <p className="text-sm text-purple-800 mb-4">Lead-gen profitability depends on sales efficiency, not just lead volume. Here's what costs don't show up in a simple CPL calculation.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-purple-300">
              <thead className="bg-purple-100">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Cost Category</th>
                  <th className="text-left px-4 py-3 font-bold">Typical %</th>
                  <th className="text-left px-4 py-3 font-bold">Impact on $30k Spend</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="px-4 py-2 border-t border-purple-300">Cost Per Lead (CPL)</td>
                  <td className="px-4 py-2 border-t border-purple-300">$20-80</td>
                  <td className="px-4 py-2 border-t border-purple-300">375-1,500 leads</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-purple-300">Sales-Qualified Rate (SQR)</td>
                  <td className="px-4 py-2 border-t border-purple-300">20-40%</td>
                  <td className="px-4 py-2 border-t border-purple-300">75-600 qualified leads</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-purple-300">Sales Team Time (blended loaded cost)</td>
                  <td className="px-4 py-2 border-t border-purple-300">$50-150/closed deal</td>
                  <td className="px-4 py-2 border-t border-purple-300">$3k-18k total salesperson labor</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-purple-300">Lead Distribution & Follow-Up Tools (Zapier, CRM)</td>
                  <td className="px-4 py-2 border-t border-purple-300">$500-2k/month</td>
                  <td className="px-4 py-2 border-t border-purple-300">$500-2,000 per campaign</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-purple-300">Average Deal Value (closed)</td>
                  <td className="px-4 py-2 border-t border-purple-300">$500-5k+ (varies)</td>
                  <td className="px-4 py-2 border-t border-purple-300">Depends on vertical</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t border-purple-300">Close Rate (SQR → Closed)</td>
                  <td className="px-4 py-2 border-t border-purple-300">20-50%</td>
                  <td className="px-4 py-2 border-t border-purple-300">Multiplier on deal value</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-purple-800 mt-4">
            <strong>Real example:</strong> $30k spend at $40 CPL = 750 leads. If 30% SQR = 225 qualified leads. If 30% close rate and $800 avg deal = 68 closed deals × $800 = $54.4k revenue → 1.8x ROAS. But after $200 (sales labor per deal) + $1.5k (tools) = $14.6k in hidden costs, real profit margin is 60% of what ROAS suggests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Lead-Gen-Specific FAQ</h2>
          <div className="space-y-4">
            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How do I account for leads that take 3-6 months to close in ROAS?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Don't rely on 30-day ROAS windows. Instead, track cohort-based ROAS: "Leads from January 2026 eventually closed $45k in deals by June 2026." Set a lookback of 180+ days for B2B and longer for high-ticket sales. Short-window ROAS will understate true profitability.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                What's the difference between Lead ROAS and Pipeline ROAS?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Lead ROAS = Attributed Revenue / Lead Cost. Pipeline ROAS = Total Opportunity Value / Lead Cost (includes deals not yet closed). Pipeline ROAS is predictive; Lead ROAS is realized. Always track both: if Pipeline ROAS is 5x but actual conversion is 2x, you have a sales execution problem, not a lead problem.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How do I decide between cheap but low-quality leads vs. expensive but high-intent leads?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Model both with SQR and close rate. A $20 lead with 15% SQR and 20% close rate = $266 customer acquisition cost. A $60 lead with 40% SQR and 40% close rate = $37.50 CAC. Cheap volume doesn't win if your sales team can't convert. Calculate true CAC before scaling spend.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                Should I include sales team salaries in my ROAS calculation?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                For true profitability, yes. ROAS should become CAC and then LTV:CAC to see if you're sustainable. Include blended labor (salaries + benefits + tools divided by expected closes per rep). If ROAS is 4x but CAC including sales labor is 50% of deal value, you're barely profitable.
              </p>
            </details>

            <details className="rounded-lg border border-slate-200 p-4 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900 flex justify-between items-center">
                How do I optimize between quantity of leads and quality when I have a fixed budget?
                <span className="ml-2">+</span>
              </summary>
              <p className="text-slate-700 mt-3">
                Set a CAC cap based on deal value and target margin. Work backwards: if avg deal is $2k and target margin is 60%, max CAC = $800. Then test: if $30 CPL leads close at 10%, that's too high. If $60 CPL leads close at 40%, they're better despite higher CPL. Quality beats quantity at the margin.
              </p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Lead Gen Example</h2>
          <p className="text-slate-700">
            Example campaign: spend $6,000, 200 leads, CPL $30, close rate 12%, average closed value $900.
          </p>
          <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
            <li>Expected closed deals = 24</li>
            <li>Expected attributed revenue = $21,600</li>
            <li>Expected ROAS = 3.60x</li>
            <li>Decision = Hold and improve lead quality before scaling spend</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">What This Metric Means for Decision-Making</h2>
          <p className="text-slate-700">
            Lead-gen ROAS is a pipeline-quality metric as much as a media metric. Use it with
            <Link href="/cac-calculator" className="text-blue-700 hover:underline"> CAC</Link>,
            <Link href="/ltv-calculator" className="text-blue-700 hover:underline"> LTV</Link>, and
            <Link href="/mer-calculator" className="text-blue-700 hover:underline"> MER</Link> to avoid scaling low-quality leads that inflate volume but not revenue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">How to Evaluate Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Validate lead-source quality with qualified rate and close rate, not CPL alone.</li>
            <li>Check time-lag effects; short windows often understate final closed revenue.</li>
            <li>Track by funnel stage to identify whether creative, targeting, or sales follow-up is the bottleneck.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Realistic Business Scenarios</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Legal services: higher CPL leads can still outperform due to stronger case-value close rates.</li>
            <li>B2B SaaS demos: lead volume rises quickly, but weak qualification lowers booked pipeline conversion.</li>
            <li>Local services: paid social drives cheap leads, while paid search drives fewer but higher-closing opportunities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">When to Use, Limitations, and Common Misunderstandings</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Use this metric for channel allocation, qualification standards, and sales-marketing alignment reviews.</li>
            <li>Do not treat top-funnel lead counts as success without downstream conversion evidence.</li>
            <li>Do not compare two channels without adjusting for sales-cycle length and deal-size mix.</li>
          </ul>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Methodology and Calculation Logic</h2>
          <p className="text-slate-700">
            Scenario logic is explicit: leads multiplied by close rate gives expected closed deals, then multiplied by deal value gives expected revenue.
            ROAS is expected revenue divided by ad spend, and should be refreshed as real close data arrives.
          </p>
        </section>

        <section className="bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">Troubleshooting: When Lead-Gen ROAS Isn't Working</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">↓ CPL is low but ROAS is weak—why?</h3>
              <p className="text-slate-700 mb-2">Lead quality check: (1) SQR dropping—crappy targeting or weak landing page copy, (2) Close rate plummeting—sales isn't following up or leads are misqualified, (3) Deal value lower than expected—scope creep or product positioning issue, (4) Sales cycle lag—30-day ROAS window too short for your product.</p>
              <p className="text-sm"><Link href="/methodology" className="text-blue-700 hover:underline font-semibold">→ Use 180+ day cohort-based ROAS for accurate tracking</Link></p>
            </div>

            <div className="border-t border-purple-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">🎯 Channel A has $45 CPL but 35% SQR and 40% close rate. Channel B has $20 CPL and 8% SQR and 15% close rate. Which scales?</h3>
              <p className="text-slate-700 mb-2">CAC comparison: Channel A = $45 / (0.35 × 0.40) = $321 acquired cost. Channel B = $20 / (0.08 × 0.15) = $1,667 acquired cost. Channel A wins despite 2.25x higher CPL. Don't scale by CPL alone—always convert to true CAC first.</p>
              <p className="text-sm"><Link href="/cac-calculator" className="text-blue-700 hover:underline font-semibold">→ Model CAC by channel including SQR and close rate</Link></p>
            </div>

            <div className="border-t border-purple-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">💰 ROAS is 3.5x but sales says it's not profitable—what's happening?</h3>
              <p className="text-slate-700 mb-2">Hidden cost check: Include salesperson labor (blended loaded cost $50-150 per close). If your blended CAC including labor is 50%+ of deal value, margin is thin. Example: 3.5x ROAS on $6k ad spend = $21k expected revenue. At $800/close (labor + tools), actual profit is only 35% of revenue—barely sustainable.</p>
              <p className="text-sm"><Link href="/break-even-roas-by-margin" className="text-blue-700 hover:underline font-semibold">→ Include labor costs in break-even margin calculation</Link></p>
            </div>

            <div className="border-t border-purple-200 pt-4">
              <h3 className="font-bold text-slate-900 mb-2">📈 We want to double spending—what ROAS do we need to stay profitable?</h3>
              <p className="text-slate-700 mb-2">Scaling risk: Demand usually isn't infinite. As you double spend, CPL often rises 20-40% (auction competition). SQR may drop 15-25% (lower-intent volume). Model conservatively: assume CPL +30%, SQR -20%, close rate -10%. Recalculate ROAS with these adjusted assumptions. If projected ROAS stays &gt; break-even × 1.2, you can scale.</p>
              <p className="text-sm"><Link href="/blog/when-to-scale-or-pause-campaigns" className="text-blue-700 hover:underline font-semibold">→ Read: Scaling Framework—How to Scale Without Breaking Profitability</Link></p>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap gap-3">
          <Link href="/roas/lead-gen-cpl-roas" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            Open Lead Gen Calculator
          </Link>
          <Link href="/benchmarks/lead-gen-cpl-roas" className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-100 transition">
            Lead Gen Benchmarks
          </Link>
          <Link href="/comparisons/cac-vs-cpa-vs-roas" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            CAC vs CPA vs ROAS
          </Link>
        </section>

        <EmailCaptureCard
          source="persona_lead_generation_roas"
          title="Get Lead Gen RPM/ROAS Benchmark Updates"
          description="Use these benchmark updates to stress-test CPL, close-rate assumptions, and sales-quality risk."
          buttonLabel="Send Lead Gen Benchmarks"
          helperText="Includes qualification and pipeline guardrails for paid channels."
        />
        <footer className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          Reviewed by ROAS Tools Editorial Team. Last updated: February 20, 2026.
        </footer>
      </article>
    </main>
  );
}
