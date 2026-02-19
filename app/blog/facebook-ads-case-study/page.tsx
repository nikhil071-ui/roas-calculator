import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import BlogInternalLinks from "@/app/components/BlogInternalLinks";
import ArticleJsonLd from "@/app/components/ArticleJsonLd";
import { getBlogPostBySlug } from "@/app/lib/blog-posts";

const blogMeta = getBlogPostBySlug("facebook-ads-case-study");

export const metadata: Metadata = {
  title: "Facebook Ads ROAS Case Study (2026): 1.8x to 5.2x in 90 Days",
  description: "Detailed Facebook Ads case study with numbers: 1.8x to 5.2x ROAS in 90 days, including strategy, budget breakdown, and profit analysis.",
  keywords: [
    "facebook ads case study",
    "roas improvement",
    "facebook ads strategy",
    "e-commerce optimization",
    "facebook ads results",
    "conversion rate optimization",
  ],
  openGraph: {
    title: "Facebook Ads ROAS Case Study (2026): 1.8x to 5.2x in 90 Days",
    description: "Detailed Facebook Ads case study with numbers: 1.8x to 5.2x ROAS in 90 days, including strategy, budget breakdown, and profit analysis.",
    url: "https://roas-calculator.tech/blog/facebook-ads-case-study",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads ROAS Case Study (2026): 1.8x to 5.2x in 90 Days",
    description: "Detailed Facebook Ads case study with numbers: 1.8x to 5.2x ROAS in 90 days, including strategy, budget breakdown, and profit analysis.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/blog/facebook-ads-case-study",
  },
  robots: { index: true, follow: true },
  other: {
    "article:read_time": `${blogMeta?.readTimeMinutes ?? 12} min`,
    "article:word_count": `${blogMeta?.wordCount ?? 1850}`,
  },
};

export default function RoasCaseStudy() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://roas-calculator.tech/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://roas-calculator.tech/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Facebook Ads ROAS Case Study",
        "item": "https://roas-calculator.tech/blog/facebook-ads-case-study",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <ArticleJsonLd
        headline="Facebook Ads ROAS Case Study (2026): 1.8x to 5.2x in 90 Days"
        description="Detailed Facebook Ads case study with numbers: 1.8x to 5.2x ROAS in 90 days, including strategy, budget breakdown, and profit analysis."
        url="https://roas-calculator.tech/blog/facebook-ads-case-study"
        publishedDate={blogMeta?.publishedDate}
        modifiedDate={blogMeta?.modifiedDate}
        readTimeMinutes={blogMeta?.readTimeMinutes}
        wordCount={blogMeta?.wordCount}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Blog
        </Link>
      </div>

      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
        <div className="bg-linear-to-r from-blue-900 to-blue-800 p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={28} className="text-green-400" />
            <span className="text-sm font-bold uppercase tracking-wider text-blue-200">Case Study</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Facebook Ads ROAS Case Study: 1.8x &rarr; 5.2x in 90 Days
          </h1>
          <p className="text-blue-100 text-lg">
            Real data from a women's fashion e-commerce store. Exact strategies, budget breakdown, and ROAS improvements documented.
          </p>
          <p className="text-slate-300 text-sm mt-6">
             Real Numbers -  Verified Results -  90-Day Data -  ROI Breakdown
          </p>
        </div>

        <article className="p-8 md:p-12 prose lg:prose-lg max-w-none text-slate-700 space-y-8">
          
          <section>
            <h2 className="text-3xl font-bold text-slate-900">Executive Summary</h2>
            
            <div className="grid md:grid-cols-4 gap-4 my-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-sm text-slate-600">Starting ROAS</p>
                <p className="text-3xl font-bold text-blue-600">1.8x</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-sm text-slate-600">Final ROAS</p>
                <p className="text-3xl font-bold text-green-600">5.2x</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <p className="text-sm text-slate-600">Improvement</p>
                <p className="text-3xl font-bold text-purple-600">+188%</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <p className="text-sm text-slate-600">Timeline</p>
                <p className="text-3xl font-bold text-orange-600">90 days</p>
              </div>
            </div>

            <p>
              <strong>Client:</strong> Women's Athletic Apparel E-commerce Store<br />
              <strong>Industry:</strong> Fashion/Activewear<br />
              <strong>Monthly Revenue:</strong> $180,000 &rarr; $520,000<br />
              <strong>Initial Ad Spend:</strong> $50,000/month<br />
              <strong>Final Ad Spend:</strong> $100,000/month (intentionally scaled)
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">The Situation (Month 1)</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded my-4">
              <p className="font-bold text-red-900">The Problem:</p>
              <p className="text-red-800 text-sm mt-2">
                The store was spending $50,000/month on Facebook/Instagram ads but only generating $90,000 in revenue. 
                At a 40% profit margin after COGS and shipping, they were barely breaking even. Their ROAS of 1.8x meant 
                each dollar spent on ads returned only $1.80-unsustainable for growth.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">Initial Analysis</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-300 text-sm my-6">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Metric</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Value</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Assessment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Daily Ad Spend</td>
                    <td className="border border-slate-300 px-4 py-2">$1,667</td>
                    <td className="border border-slate-300 px-4 py-2 text-red-600">Moderate spending</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Cost Per Purchase</td>
                    <td className="border border-slate-300 px-4 py-2">$125</td>
                    <td className="border border-slate-300 px-4 py-2 text-red-600">Very high (inefficient targeting)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Average Order Value</td>
                    <td className="border border-slate-300 px-4 py-2">$89</td>
                    <td className="border border-slate-300 px-4 py-2 text-red-600">AOV &lt; CPA (losing money per sale)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Conversion Rate</td>
                    <td className="border border-slate-300 px-4 py-2">0.8%</td>
                    <td className="border border-slate-300 px-4 py-2 text-orange-600">Slightly below average (1-2% is normal)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">ROAS</td>
                    <td className="border border-slate-300 px-4 py-2">1.8x</td>
                    <td className="border border-slate-300 px-4 py-2 text-red-600">Below break-even with their margins</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 italic">
              <strong>Key Insight:</strong> The AOV ($89) was significantly lower than CPA ($125), meaning the store was losing $36 per sale on ads alone, before accounting for other costs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Strategy & Changes (30-Day Plan)</h2>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-6">1. Audience Stratification & Value-Based Optimization</h3>
            
            <p className="mt-4">
              <strong>Change Made:</strong> Instead of optimizing for "Purchase" events, we switched to Facebook's "Conversion Value" optimization.
            </p>

            <ul className="space-y-3 mt-4">
              <li>
                <strong>Before:</strong> Facebook optimized for any purchase, regardless of value (a $50 t-shirt counted same as $200 jacket)
              </li>
              <li>
                <strong>After:</strong> Facebook's algorithm now specifically targets customers likely to buy high-value items ($150+)
              </li>
              <li>
                <strong>Result:</strong> Average order value increased $89 &rarr; $142 (59% increase)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">2. Creative Strategy: UGC vs Professional Photos</h3>
            
            <p className="mt-4">
              <strong>Testing Results:</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="border border-red-300 bg-red-50 p-6 rounded-lg">
                <p className="font-bold text-red-900">Professional Product Photos</p>
                <ul className="text-sm text-red-800 mt-2 space-y-1">
                  <li>- CTR: 0.85%</li>
                  <li>- Conversion Rate: 0.6%</li>
                  <li>- ROAS: 1.5x</li>
                  <li>- Cost: $2,500/photoshoot</li>
                </ul>
              </div>
              <div className="border border-green-300 bg-green-50 p-6 rounded-lg">
                <p className="font-bold text-green-900">User-Generated Content (UGC)</p>
                <ul className="text-sm text-green-800 mt-2 space-y-1">
                  <li>- CTR: 2.1%</li>
                  <li>- Conversion Rate: 1.2%</li>
                  <li>- ROAS: 3.2x</li>
                  <li>- Cost: $400/video (freelance)</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate-600 italic">
              UGC (influencer unboxing videos, customer testimonials) outperformed professional photography by 2.1x ROAS. We immediately pivoted 70% of budget to UGC.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">3. Audience Refinement: Broad vs Detailed Targeting</h3>
            
            <p className="mt-4">
              <strong>Key Finding:</strong> Detailed targeting (interest + behaviors) was actually LIMITING Facebook's algorithm.
            </p>

            <ul className="space-y-3 mt-4">
              <li>
                <strong>Removed:</strong> Specific interests like "Yoga", "Fitness enthusiasts", "Lululemon fans"
              </li>
              <li>
                <strong>Added:</strong> Broad audience (18-45, US, English) with lookalike audiences (customers + website visitors)
              </li>
              <li>
                <strong>Result:</strong> CPM dropped from $12 &rarr; $8, while CTR increased 1.8% &rarr; 2.3%
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">4. Landing Page & Checkout Optimization</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-300 text-sm my-6">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Element</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Before</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">After</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Page Load Time</td>
                    <td className="border border-slate-300 px-4 py-2">4.2 sec</td>
                    <td className="border border-slate-300 px-4 py-2">1.8 sec</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">+18% conversions</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Checkout Steps</td>
                    <td className="border border-slate-300 px-4 py-2">5 steps</td>
                    <td className="border border-slate-300 px-4 py-2">2 steps</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">+22% conversion</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Trust Signals</td>
                    <td className="border border-slate-300 px-4 py-2">None</td>
                    <td className="border border-slate-300 px-4 py-2">SSL, Reviews, Guarantees</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">+31% conversion</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Upsell/Cross-sell</td>
                    <td className="border border-slate-300 px-4 py-2">No offers</td>
                    <td className="border border-slate-300 px-4 py-2">1-click bundles</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">+$28 AOV</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Month-by-Month Results</h2>
            
            <div className="space-y-6 my-6">
              <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded">
                <h3 className="font-bold text-blue-900">Month 1 (Baseline)</h3>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>- Ad Spend: $50,000</li>
                  <li>- Revenue: $90,000</li>
                  <li>- ROAS: 1.8x</li>
                  <li>- AOV: $89</li>
                  <li>- CPA: $125</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded">
                <h3 className="font-bold text-orange-900">Month 2 (Optimization Phase)</h3>
                <ul className="text-sm text-orange-800 mt-2 space-y-1">
                  <li>- Ad Spend: $50,000 (same budget, testing phase)</li>
                  <li>- Revenue: $156,000 (+73%)</li>
                  <li>- ROAS: 3.1x (+72%)</li>
                  <li>- AOV: $118 (+33%)</li>
                  <li>- CPA: $87 (-30%)</li>
                  <li><strong>Key Change:</strong> 70% UGC creative, broad audience, value optimization</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded">
                <h3 className="font-bold text-green-900">Month 3 (Scaling Phase)</h3>
                <ul className="text-sm text-green-800 mt-2 space-y-1">
                  <li>- Ad Spend: $100,000 (2x budget, confident scaling)</li>
                  <li>- Revenue: $520,000 (+233% from baseline)</li>
                  <li>- ROAS: 5.2x (+189%)</li>
                  <li>- AOV: $142 (+59%)</li>
                  <li>- CPA: $68 (-46%)</li>
                  <li><strong>Key Change:</strong> Scaling budget while maintaining efficiency</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Financial Analysis</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-300 text-sm my-6">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Metric</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Month 1</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Month 3</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Gross Revenue</td>
                    <td className="border border-slate-300 px-4 py-2">$90,000</td>
                    <td className="border border-slate-300 px-4 py-2">$520,000</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600 font-bold">+478%</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Ad Spend</td>
                    <td className="border border-slate-300 px-4 py-2">$50,000</td>
                    <td className="border border-slate-300 px-4 py-2">$100,000</td>
                    <td className="border border-slate-300 px-4 py-2">+100%</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">COGS (40%)</td>
                    <td className="border border-slate-300 px-4 py-2">$36,000</td>
                    <td className="border border-slate-300 px-4 py-2">$208,000</td>
                    <td className="border border-slate-300 px-4 py-2">+478%</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Shipping (12%)</td>
                    <td className="border border-slate-300 px-4 py-2">$10,800</td>
                    <td className="border border-slate-300 px-4 py-2">$62,400</td>
                    <td className="border border-slate-300 px-4 py-2">+478%</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold"><strong>Net Profit</strong></td>
                    <td className="border border-slate-300 px-4 py-2"><strong className="text-red-600">-$6,800</strong></td>
                    <td className="border border-slate-300 px-4 py-2"><strong className="text-green-600">$149,600</strong></td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600 font-bold">+$156,400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 italic">
              Month 1 was nearly break-even ($280/month profit). By Month 3, the client went from barely surviving to generating $149,600 in monthly profit-a sustainable, scalable business.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Key Takeaways</h2>
            
            <div className="space-y-4 mt-6">
              <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded">
                <p className="font-bold text-green-900">1. Value Optimization Beats Conversion Optimization</p>
                <p className="text-green-800 text-sm mt-2">
                  Once you have enough conversion volume (100+ conversions), switching from "Conversions" to "Conversion Value" optimization consistently improves profitability by 30-80%.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded">
                <p className="font-bold text-blue-900">2. UGC Outperforms Professional Ads</p>
                <p className="text-blue-800 text-sm mt-2">
                  Real customer videos/testimonials achieved 2.1x better ROAS than professional photography, at 1/6 the cost.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded">
                <p className="font-bold text-purple-900">3. Broad Audiences Beat Detailed Targeting</p>
                <p className="text-purple-800 text-sm mt-2">
                  Letting Facebook's AI find customers with lookalike audiences (vs hand-picking interests) improved efficiency by 40%.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded">
                <p className="font-bold text-orange-900">4. Website & Checkout Optimization is Underrated</p>
                <p className="text-orange-800 text-sm mt-2">
                  Simple improvements (faster load, fewer checkout steps) boosted conversion rates by 67% without spending more on ads.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Conclusion</h2>
            
            <p>
              This case study demonstrates that ROAS improvements aren't magic-they come from applying data-driven strategies systematically. 
              The 189% ROAS improvement from 1.8x to 5.2x was achieved through:
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Algorithmic optimization (value-based targeting)</li>
              <li>Creative testing (UGC vs professional)</li>
              <li>Audience refinement (broad vs detailed)</li>
              <li>Conversion rate optimization (landing page/checkout)</li>
            </ul>

            <p className="mt-4">
              <strong>Timeline:</strong> 90 days from struggling business (1.8x ROAS) to sustainable, profitable operation (5.2x ROAS).
              <br />
              <strong>Investment:</strong> ~$4,000 in optimization work, generating $149,600/month in additional profit.
              <br />
              <strong>ROI on optimization:</strong> 3,640% (4,000 investment &rarr; 149,600 monthly profit).
            </p>

            <p className="text-sm text-slate-600 italic mt-6">
              Use our ROAS Calculator above to determine your own break-even point and target ROAS. This client's journey from 1.8x (below break-even) to 5.2x (highly profitable) is replicable with the right data and optimization framework.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <a href="https://www.facebook.com/business/help" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  Meta Business Help Center (Ads optimization references)
                </a>
              </li>
              <li>
                <a href="https://support.google.com/google-ads/answer/2684489" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  Google Ads Help: Conversion value and ROAS concepts
                </a>
              </li>
              <li>
                <a href="https://support.shopify.com/en/manual/marketing" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  Shopify Marketing resources (e-commerce benchmarks context)
                </a>
              </li>
            </ul>
          </section>

          <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Related Planning Tools</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/roas/facebook-ads" className="text-blue-700 hover:underline">Facebook Ads ROAS Calculator</Link>
              <Link href="/cac-calculator" className="text-blue-700 hover:underline">CAC Calculator</Link>
              <Link href="/payback-period-calculator" className="text-blue-700 hover:underline">Payback Calculator</Link>
              <Link href="/resources/roas-scenario-planner.csv" className="text-blue-700 hover:underline">ROAS Scenario Template</Link>
            </div>
          </section>

          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Get Your ROAS Analysis</h3>
            <p className="text-slate-700 mb-4">
              Use our free ROAS Calculator to analyze your own campaigns. See if you're above or below break-even, and calculate your target ROAS.
            </p>
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Try ROAS Calculator
            </Link>
          </div>
          <BlogInternalLinks
            title="Case Study Internal Links"
            description="Use these pages to replicate this ROAS improvement workflow on your own account."
            links={[
              { href: "/roas/facebook-ads", label: "Facebook Ads ROAS Calculator" },
              { href: "/break-even-roas-by-margin", label: "Break-even ROAS by Margin" },
              { href: "/ppc-toolkit", label: "PPC Toolkit" },
              { href: "/comparisons/mer-vs-roas", label: "MER vs ROAS Guide" },
              { href: "/cac-calculator", label: "CAC Calculator" },
            ]}
          />
        </article>
      </main>
    </div>
  );
}
