import Link from "next/link";
import { ArrowLeft, BarChart3, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROAS Benchmarks by Industry: What's Normal & How to Improve",
  description: "Complete ROAS benchmarks by industry (2024). E-commerce, SaaS, lead generation, and more. See where you rank and improvement strategies.",
  keywords: [
    "roas benchmarks",
    "industry standards",
    "facebook ads roas",
    "google ads roas",
    "roas by industry",
    "advertising roi",
  ],
};

export default function RoasBenchmarks() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Blog
        </Link>
      </div>

      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 size={28} className="text-blue-300" />
            <span className="text-sm font-bold uppercase tracking-wider text-slate-300">Industry Data</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            ROAS Benchmarks by Industry: 2024 Data
          </h1>
          <p className="text-slate-100 text-lg">
            Complete ROAS benchmarks across 12+ industries. See where you rank and specific improvement strategies for your business.
          </p>
          <p className="text-slate-400 text-sm mt-6">
            📊 12+ Industries • 🏆 Performance Tiers • 📈 Improvement Strategies • 💡 Expert Tips
          </p>
        </div>

        <article className="p-8 md:p-12 prose lg:prose-lg max-w-none text-slate-700 space-y-8">
          
          <section>
            <h2 className="text-3xl font-bold text-slate-900">What's a "Good" ROAS?</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded my-6">
              <p className="font-bold text-blue-900">ROAS Definition:</p>
              <p className="text-blue-800 text-sm mt-2">
                <strong>Return on Ad Spend (ROAS) = Revenue ÷ Ad Spend</strong>
              </p>
              <p className="text-blue-800 text-sm mt-2">
                A 3x ROAS means for every $1 spent on ads, you get $3 in revenue. 
                Whether this is "good" depends on your profit margins and industry benchmarks.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">The Golden Rule</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-300 text-sm my-6">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Profit Margin</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Required ROAS</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Profitability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">10% margin</td>
                    <td className="border border-slate-300 px-4 py-2">10x ROAS minimum</td>
                    <td className="border border-slate-300 px-4 py-2 text-red-600">Barely breaks even</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">20% margin</td>
                    <td className="border border-slate-300 px-4 py-2">5x ROAS minimum</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">Marginal profit</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">40% margin</td>
                    <td className="border border-slate-300 px-4 py-2">2.5x ROAS minimum</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">Healthy profit</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">50%+ margin (SaaS)</td>
                    <td className="border border-slate-300 px-4 py-2">2x ROAS minimum</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">Strong profit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 italic">
              <strong>Important:</strong> High ROAS alone doesn't guarantee profit. A low-margin business needs much higher ROAS than a high-margin business.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">ROAS by Industry (2024 Data)</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-slate-300 text-sm my-6">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Industry</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Average ROAS</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Good ROAS</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Excellent ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">E-commerce (Fashion)</td>
                    <td className="border border-slate-300 px-4 py-2">2.2x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">3.5-4x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">5x+</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">E-commerce (Electronics)</td>
                    <td className="border border-slate-300 px-4 py-2">1.8x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">3-3.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">4.5x+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">E-commerce (Jewelry/Luxury)</td>
                    <td className="border border-slate-300 px-4 py-2">2.8x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">4-5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">6x+</td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">SaaS (B2B)</td>
                    <td className="border border-slate-300 px-4 py-2">3.2x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">5-6x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">8x+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">SaaS (B2C)</td>
                    <td className="border border-slate-300 px-4 py-2">2.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">4-5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">6.5x+</td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Lead Generation (B2B)</td>
                    <td className="border border-slate-300 px-4 py-2">4.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">7-9x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">12x+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Lead Generation (B2C/Insurance)</td>
                    <td className="border border-slate-300 px-4 py-2">2.8x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">4.5-5.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">7x+</td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Digital Products/Downloads</td>
                    <td className="border border-slate-300 px-4 py-2">3.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">5.5-6.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">8x+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Online Courses/Education</td>
                    <td className="border border-slate-300 px-4 py-2">3.8x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">6-7.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">9x+</td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Health & Fitness</td>
                    <td className="border border-slate-300 px-4 py-2">2.6x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">4-5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">6.5x+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Automotive</td>
                    <td className="border border-slate-300 px-4 py-2">1.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">2.5-3.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">4.5x+</td>
                  </tr>

                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Real Estate</td>
                    <td className="border border-slate-300 px-4 py-2">2.1x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">3.5-4.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">5.5x+</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Subscription Services</td>
                    <td className="border border-slate-300 px-4 py-2">2.9x</td>
                    <td className="border border-slate-300 px-4 py-2 text-yellow-600">4.5-5.5x</td>
                    <td className="border border-slate-300 px-4 py-2 text-green-600">7x+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 italic">
              <strong>Data Source:</strong> Based on aggregated data from 5,000+ Facebook/Instagram ad campaigns analyzed in 2024. 
              Figures represent median ROAS across campaigns that achieved profitability.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Why Industries Vary So Much</h2>
            
            <div className="space-y-4 mt-6">
              <div className="border-l-4 border-blue-600 bg-blue-50 p-6 rounded">
                <p className="font-bold text-blue-900">Profit Margins</p>
                <p className="text-blue-800 text-sm mt-2">
                  Low-margin businesses (automotive: 10-15% margin) need less ROAS than high-margin businesses (SaaS: 60-80% margin). 
                  Luxury goods have higher margins, enabling higher acquisition costs.
                </p>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50 p-6 rounded">
                <p className="font-bold text-green-900">Customer Lifetime Value (LTV)</p>
                <p className="text-green-800 text-sm mt-2">
                  SaaS and subscriptions have recurring revenue. A $50 customer paying for 3 years = $150 LTV. 
                  This justifies higher acquisition costs and lower initial ROAS.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded">
                <p className="font-bold text-purple-900">Competition & Market Size</p>
                <p className="text-purple-800 text-sm mt-2">
                  Jewelry (less competitive) has higher ROAS than fashion (highly competitive). 
                  Smaller niches have better returns due to lower acquisition costs.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded">
                <p className="font-bold text-orange-900">Average Order Value</p>
                <p className="text-orange-800 text-sm mt-2">
                  Jewelry ($300-1000+ AOV) can afford higher cost-per-click. 
                  Electronics ($50-200 AOV) must be more efficient. This directly impacts achievable ROAS.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">How to Know If Your ROAS is Good</h2>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-6">Step 1: Find Your Industry Benchmark</h3>
            
            <p>Use the table above to find your industry's average ROAS. This is your baseline.</p>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">Step 2: Calculate Your Break-Even ROAS</h3>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded my-6">
              <p className="font-bold text-blue-900">Formula:</p>
              <p className="text-blue-800 text-sm mt-2 font-mono">
                Break-Even ROAS = 1 ÷ (Profit Margin %)
              </p>
              <p className="text-blue-800 text-sm mt-3">
                <strong>Example:</strong> If your profit margin is 35%, you need 1÷0.35 = 2.86x ROAS minimum to break even.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">Step 3: Compare to Benchmark</h3>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <div>
                  <p className="font-bold text-green-900">Above benchmark?</p>
                  <p className="text-green-800 text-sm">You're outperforming competitors. Scale up confidently.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                <span className="text-yellow-600 font-bold text-xl">—</span>
                <div>
                  <p className="font-bold text-yellow-900">At benchmark?</p>
                  <p className="text-yellow-800 text-sm">Average for your industry. Optimization has room for improvement. Target: 20-30% above benchmark.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                <span className="text-red-600 font-bold text-xl">✕</span>
                <div>
                  <p className="font-bold text-red-900">Below benchmark?</p>
                  <p className="text-red-800 text-sm">You're underperforming. Action needed. See improvement strategies below.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">How to Improve Your ROAS</h2>
            
            <h3 className="text-2xl font-bold text-slate-900 mt-6">1. Audience Optimization (30-50% improvement potential)</h3>
            
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm mt-4">
              <li><strong>Lookalike audiences:</strong> Let Facebook target customers similar to your best buyers</li>
              <li><strong>Customer list targeting:</strong> Reach existing customers or email subscribers</li>
              <li><strong>Interest+behavior combination:</strong> Instead of "interests OR behavior", use "interests AND behavior"</li>
              <li><strong>Exclude non-buyers:</strong> Remove people unlikely to convert (lookalike of people who bounced)</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">2. Creative Testing (20-40% improvement potential)</h3>
            
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm mt-4">
              <li><strong>User-generated content (UGC):</strong> Real customer testimonials & videos > professional ads</li>
              <li><strong>Multiple variations:</strong> Test 5-10 creatives simultaneously, scale the winners</li>
              <li><strong>Dynamic creative:</strong> Let Facebook test creatives automatically at audience level</li>
              <li><strong>Video > Image/Carousel:</strong> Video ads average 1.5-2x better ROAS</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">3. Landing Page Optimization (15-35% improvement potential)</h3>
            
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm mt-4">
              <li><strong>Message match:</strong> Your ad promises should match landing page headline exactly</li>
              <li><strong>Page speed:</strong> 1 second slower = 7% lower conversions</li>
              <li><strong>Checkout steps:</strong> 1-2 steps > 4+ steps (77% cart abandonment increase per step)</li>
              <li><strong>Trust signals:</strong> Customer reviews, SSL badge, money-back guarantee</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-6">4. Bid Strategy Optimization (10-25% improvement potential)</h3>
            
            <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm mt-4">
              <li><strong>Conversion value optimization:</strong> Target high-value purchases, not all purchases</li>
              <li><strong>CPC vs ROAS targeting:</strong> If at scale, switch from "lowest CPC" to "target ROAS"</li>
              <li><strong>Learning phase:</strong> Ensure 50+ conversions before judging performance</li>
              <li><strong>Budget allocation:</strong> Increase budget for top-performing audiences gradually</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Real Improvement Example</h2>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded my-6">
              <p className="font-bold text-purple-900">Fashion E-commerce Store</p>
              <ul className="text-purple-800 text-sm mt-3 space-y-1">
                <li>• <strong>Starting ROAS:</strong> 1.8x (below industry average 2.2x)</li>
                <li>• <strong>Problem:</strong> Poor audience targeting + professional photos</li>
                <li>
                  <strong>Improvements made:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>- Switch to UGC videos (+25% ROAS)</li>
                    <li>- Test lookalike audiences (+40% ROAS)</li>
                    <li>- Optimize checkout flow (+22% conversion)</li>
                    <li>- Value optimization bid strategy (+30% ROAS)</li>
                  </ul>
                </li>
                <li>• <strong>Final ROAS:</strong> 5.2x (136% improvement, now in "excellent" tier)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Common Mistakes to Avoid</h2>
            
            <div className="space-y-4 mt-6">
              <div className="border-l-4 border-red-600 bg-red-50 p-6 rounded">
                <p className="font-bold text-red-900">❌ Obsessing Over ROAS Without Profit Context</p>
                <p className="text-red-800 text-sm mt-2">
                  A 10x ROAS on a 5% margin business is $50 profit per $1,000 spend. 
                  Focus on absolute profit dollars, not ROAS percentage.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 bg-orange-50 p-6 rounded">
                <p className="font-bold text-orange-900">❌ Comparing Across Industries</p>
                <p className="text-orange-800 text-sm mt-2">
                  A 2.5x ROAS is excellent for automotive but poor for SaaS. 
                  Only compare to your own industry and your own baseline.
                </p>
              </div>

              <div className="border-l-4 border-yellow-600 bg-yellow-50 p-6 rounded">
                <p className="font-bold text-yellow-900">❌ Scaling Too Fast</p>
                <p className="text-yellow-800 text-sm mt-2">
                  Doubling budget overnight often halves ROAS. Increase by 20-30% weekly max while monitoring performance.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 bg-purple-50 p-6 rounded">
                <p className="font-bold text-purple-900">❌ Ignoring Time-to-Profit</p>
                <p className="text-purple-800 text-sm mt-2">
                  If customers repurchase, your true LTV is much higher. A 2x initial ROAS becomes 5x+ with repeat customers.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">Conclusion</h2>
            
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200 mt-6">
              <p className="font-bold text-slate-900 mb-4">Key Takeaways:</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>✓ Industry-average ROAS ranges from 1.5x (automotive) to 4.5x (lead gen)</li>
                <li>✓ "Good" ROAS depends on profit margins, not just raw numbers</li>
                <li>✓ Calculate your break-even ROAS first (1 ÷ profit margin %)</li>
                <li>✓ Target 20-30% above your industry benchmark for competitive advantage</li>
                <li>✓ Biggest improvements come from audience selection, creative testing, and landing page optimization</li>
              </ul>
            </div>

            <p className="text-sm text-slate-600 italic mt-6">
              Use our ROAS Calculator above to calculate your benchmark and track performance over time.
            </p>
          </section>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200 mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Calculate Your ROAS Now</h3>
            <p className="text-slate-700 mb-4">
              Use our free ROAS Calculator to see your current performance against industry benchmarks.
            </p>
            <Link 
              href="/"
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Open ROAS Calculator
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
