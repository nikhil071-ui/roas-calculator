import Link from "next/link";
import { ArrowLeft, BookOpen, Search } from "lucide-react";

export default function Glossary() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <BookOpen size={120} />
            </div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50">
                    <BookOpen className="text-white" size={28} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Marketing & Advertising Glossary</h1>
                <p className="text-slate-300 text-lg max-w-2xl">
                    Essential digital marketing terms, metrics, and concepts explained in plain English.
                </p>
            </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-8">
            
            {/* Search Tip */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                <Search size={20} className="text-blue-600 shrink-0 mt-1" />
                <p className="text-sm text-slate-700">
                    <strong>Tip:</strong> Use Ctrl+F (Windows) or Cmd+F (Mac) to quickly search for specific terms on this page.
                </p>
            </div>

            {/* A-C Terms */}
            <section>
                <div className="bg-blue-600 text-white font-bold text-lg px-4 py-2 rounded-lg mb-4">A - C</div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Ad Spend</h3>
                        <p className="text-slate-600">
                            The total amount of money spent on advertising campaigns during a specific period. Includes costs for display ads, 
                            search ads, social media ads, and any other paid promotional activities.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Break-Even ROAS</h3>
                        <p className="text-slate-600">
                            The minimum Return on Ad Spend required for a campaign to be profitable (neither making nor losing money). 
                            Calculated as: <span className="font-mono bg-slate-100 px-2 py-1 rounded">1 / Profit Margin</span>. 
                            For example, if your profit margin is 25% (0.25), your break-even ROAS is 4.0x.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">CPA (Cost Per Acquisition)</h3>
                        <p className="text-slate-600">
                            The average cost to acquire one customer or conversion. Calculated as: 
                            <span className="font-mono bg-slate-100 px-2 py-1 rounded ml-1">Total Ad Spend ÷ Number of Conversions</span>. 
                            Lower CPA is generally better, but must be evaluated alongside customer lifetime value (CLV).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">CPC (Cost Per Click)</h3>
                        <p className="text-slate-600">
                            The amount you pay each time someone clicks on your ad. Common in Google Ads and Facebook Ads. 
                            Calculated as: <span className="font-mono bg-slate-100 px-2 py-1 rounded">Total Cost ÷ Total Clicks</span>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">CPM (Cost Per Mille / Cost Per Thousand Impressions)</h3>
                        <p className="text-slate-600">
                            The cost to show your ad 1,000 times. Used primarily for brand awareness campaigns. 
                            Formula: <span className="font-mono bg-slate-100 px-2 py-1 rounded">(Total Cost ÷ Impressions) × 1000</span>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">CTR (Click-Through Rate)</h3>
                        <p className="text-slate-600">
                            The percentage of people who click your ad after seeing it. Calculated as: 
                            <span className="font-mono bg-slate-100 px-2 py-1 rounded">(Clicks ÷ Impressions) × 100</span>. 
                            A CTR above 2% is generally good, but varies by industry.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Conversion Rate</h3>
                        <p className="text-slate-600">
                            The percentage of visitors who complete a desired action (purchase, signup, download). 
                            Formula: <span className="font-mono bg-slate-100 px-2 py-1 rounded">(Conversions ÷ Total Visitors) × 100</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* D-I Terms */}
            <section>
                <div className="bg-emerald-600 text-white font-bold text-lg px-4 py-2 rounded-lg mb-4">D - I</div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Dropshipping</h3>
                        <p className="text-slate-600">
                            A business model where you sell products without holding inventory. When a customer orders, you purchase from a 
                            third-party supplier who ships directly to the customer. Requires careful ROAS tracking due to variable supplier costs.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Gross Profit</h3>
                        <p className="text-slate-600">
                            Revenue minus Cost of Goods Sold (COGS). Does not include operating expenses like ad spend. 
                            Formula: <span className="font-mono bg-slate-100 px-2 py-1 rounded">Revenue - COGS</span>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Impression</h3>
                        <p className="text-slate-600">
                            A single instance of an ad being displayed on a screen, regardless of whether it was clicked. 
                            High impressions with low clicks indicate poor ad relevance or creative.
                        </p>
                    </div>
                </div>
            </section>

            {/* L-P Terms */}
            <section>
                <div className="bg-purple-600 text-white font-bold text-lg px-4 py-2 rounded-lg mb-4">L - P</div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Landing Page</h3>
                        <p className="text-slate-600">
                            The web page where visitors arrive after clicking your ad. A well-optimized landing page should have a clear headline, 
                            compelling copy, and a single call-to-action (CTA). Good landing pages have 20-30% conversion rates.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">LTV (Lifetime Value) / CLV (Customer Lifetime Value)</h3>
                        <p className="text-slate-600">
                            The total revenue a customer generates over their entire relationship with your business. 
                            Example: If a customer buys $50/month for 12 months, their LTV is $600. Critical for determining acceptable CPA.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Net Profit</h3>
                        <p className="text-slate-600">
                            Total profit after deducting ALL expenses including COGS, ad spend, shipping, taxes, and overhead. 
                            Formula: <span className="font-mono bg-slate-100 px-2 py-1 rounded">Revenue - (COGS + Ad Spend + Other Costs)</span>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Pixel (Facebook Pixel / Meta Pixel)</h3>
                        <p className="text-slate-600">
                            A piece of tracking code placed on your website that records visitor actions (views, cart adds, purchases). 
                            Enables accurate conversion tracking and retargeting campaigns. Required for reliable ROAS measurement.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Profit Margin</h3>
                        <p className="text-slate-600">
                            The percentage of revenue remaining after COGS. Used to calculate break-even ROAS. 
                            Formula: <span className="font-mono bg-slate-100 px-2 py-1 rounded">((Revenue - COGS) ÷ Revenue) × 100</span>. 
                            A 30% profit margin means you keep $30 for every $100 in sales.
                        </p>
                    </div>
                </div>
            </section>

            {/* R-S Terms */}
            <section>
                <div className="bg-orange-600 text-white font-bold text-lg px-4 py-2 rounded-lg mb-4">R - S</div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Retargeting / Remarketing</h3>
                        <p className="text-slate-600">
                            Showing ads to people who previously visited your website but didn't convert. Retargeting campaigns typically have 
                            higher ROAS (5-10x) compared to cold traffic (2-4x) because the audience is already familiar with your brand.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">ROAS (Return on Ad Spend)</h3>
                        <p className="text-slate-600">
                            The primary metric for measuring advertising profitability. Calculated as: 
                            <span className="font-mono bg-slate-100 px-2 py-1 rounded">Revenue ÷ Ad Spend</span>. 
                            A ROAS of 4.0x means you earn $4 for every $1 spent on ads. Must exceed break-even ROAS to be profitable.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">ROI (Return on Investment)</h3>
                        <p className="text-slate-600">
                            Broader profitability metric that includes all costs (not just ad spend). 
                            Formula: <span className="font-mono bg-slate-100 px-2 py-1 rounded">((Revenue - Total Costs) ÷ Total Costs) × 100</span>. 
                            A 100% ROI means you doubled your money.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Scaling</h3>
                        <p className="text-slate-600">
                            Increasing ad spend to reach more customers while maintaining or improving profitability. Successful scaling requires 
                            maintaining ROAS above break-even. Common mistake: scaling unprofitable campaigns hoping they'll improve (they usually don't).
                        </p>
                    </div>
                </div>
            </section>

            {/* T-Z Terms */}
            <section>
                <div className="bg-red-600 text-white font-bold text-lg px-4 py-2 rounded-lg mb-4">T - Z</div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Target Audience</h3>
                        <p className="text-slate-600">
                            The specific group of people you want to reach with your ads, defined by demographics (age, gender, location), 
                            interests, behaviors, and pain points. Narrow targeting usually improves ROAS but limits scale.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Traffic (Cold vs. Warm vs. Hot)</h3>
                        <p className="text-slate-600">
                            <strong>Cold Traffic:</strong> People who've never heard of your brand (lowest conversion rate, highest CPA).<br />
                            <strong>Warm Traffic:</strong> People who've interacted with your content but haven't purchased (medium conversion).<br />
                            <strong>Hot Traffic:</strong> Past customers or highly engaged prospects (highest conversion, lowest CPA).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">UTM Parameters</h3>
                        <p className="text-slate-600">
                            Tags added to URLs to track campaign performance in Google Analytics. 
                            Example: <span className="font-mono text-xs bg-slate-100 px-2 py-1 rounded">?utm_source=facebook&utm_campaign=spring_sale</span>. 
                            Essential for accurate attribution and ROAS tracking.
                        </p>
                    </div>
                </div>
            </section>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-8 border-t border-slate-200">
            <div className="text-center">
                <p className="text-slate-600 mb-4">
                    Don't see a term you're looking for? <Link href="/contact" className="text-blue-600 underline">Contact us</Link> and we'll add it.
                </p>
                <p className="text-sm text-slate-500">
                    Last updated: February 10, 2026 • Next review: August 10, 2026
                </p>
            </div>
        </div>

      </main>
    </div>
  );
}
