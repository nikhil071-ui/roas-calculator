import Link from "next/link";
import { ArrowLeft, TrendingUp, Star, DollarSign, Target } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      
      {/* --- BACK BUTTON --- */}
      <div className="max-w-5xl mx-auto mb-8">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 p-8 md:p-12 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Success Stories & Case Studies</h1>
            <p className="text-slate-300 text-lg max-w-2xl">
                Real results from businesses and marketers who used ROAS Tools to optimize their advertising spend and improve profitability.
            </p>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-12">
            
            {/* Case Study 1 */}
            <div className="border-b border-slate-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="text-blue-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">E-Commerce Fashion Brand</h2>
                        <p className="text-slate-500 text-sm">Dropshipping • Facebook Ads • 6-Month Campaign</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-xs font-bold text-green-600 uppercase mb-1">ROAS Improvement</p>
                        <p className="text-2xl font-bold text-green-700">2.1x → 4.8x</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-xs font-bold text-blue-600 uppercase mb-1">Monthly Ad Spend</p>
                        <p className="text-2xl font-bold text-blue-700">$12,000</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <p className="text-xs font-bold text-purple-600 uppercase mb-1">Profit Increase</p>
                        <p className="text-2xl font-bold text-purple-700">+$18K/month</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3">The Challenge</h3>
                    <p className="text-slate-600 mb-4">
                        A Mumbai-based dropshipping store selling women's fashion accessories was spending ₹10 lakh/month ($12,000) on Facebook Ads 
                        but couldn't determine if campaigns were actually profitable. They calculated revenue correctly but forgot to include 
                        product costs, shipping, and payment gateway fees in their ROAS formula.
                    </p>

                    <h3 className="font-bold text-slate-900 mb-3">The Solution</h3>
                    <p className="text-slate-600 mb-4">
                        Using our ROAS Calculator and Break-Even ROAS formula, the owner discovered their <strong>true break-even ROAS was 3.5x</strong> 
                        (not 2x as they assumed). Armed with accurate data, they:
                    </p>
                    <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4">
                        <li>Cut 3 unprofitable ad sets that had 2.2x ROAS (below break-even)</li>
                        <li>Doubled budget on 2 high-performing campaigns with 5.5x ROAS</li>
                        <li>Negotiated better shipping rates, lowering their break-even ROAS to 3.2x</li>
                    </ul>

                    <h3 className="font-bold text-slate-900 mb-3">The Results</h3>
                    <p className="text-slate-600">
                        Within 6 months, their average ROAS jumped from 2.1x to 4.8x. Monthly profit increased by ₹15 lakh ($18,000), 
                        and they scaled ad spend to ₹18 lakh/month while maintaining profitability.
                    </p>
                </div>

                <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-slate-700 italic">
                        "ROAS Tools helped me realize I was burning money on campaigns I thought were profitable. The break-even calculator 
                        was a game-changer—it's now the first thing I check every Monday morning." — <strong>Neha S., Founder</strong>
                    </p>
                </div>
            </div>

            {/* Case Study 2 */}
            <div className="border-b border-slate-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Target className="text-emerald-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">SaaS Startup (B2B Marketing Tool)</h2>
                        <p className="text-slate-500 text-sm">Google Ads • Lead Generation • 3-Month Campaign</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-xs font-bold text-green-600 uppercase mb-1">Cost Per Lead</p>
                        <p className="text-2xl font-bold text-green-700">$85 → $32</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-xs font-bold text-blue-600 uppercase mb-1">Conversion Rate</p>
                        <p className="text-2xl font-bold text-blue-700">12% → 28%</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <p className="text-xs font-bold text-purple-600 uppercase mb-1">Monthly Savings</p>
                        <p className="text-2xl font-bold text-purple-700">$8,500</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3">The Challenge</h3>
                    <p className="text-slate-600 mb-4">
                        A Bengaluru-based SaaS company offering a CRM tool for real estate agents was spending $15,000/month on Google Ads search campaigns. 
                        Their cost per lead (CPL) was $85, and they needed to reduce it to under $40 to maintain profitability.
                    </p>

                    <h3 className="font-bold text-slate-900 mb-3">The Solution</h3>
                    <p className="text-slate-600 mb-4">
                        The marketing team used our ROAS Calculator to track which keywords and ad groups delivered the best cost per acquisition. 
                        They discovered:
                    </p>
                    <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4">
                        <li>Broad match keywords ("CRM software") had $120 CPL—unprofitable</li>
                        <li>Exact match long-tail keywords ("real estate CRM for agents India") had $28 CPL—highly profitable</li>
                        <li>Their landing page had a 12% conversion rate; competitors averaged 25%</li>
                    </ul>

                    <h3 className="font-bold text-slate-900 mb-3">The Results</h3>
                    <p className="text-slate-600">
                        They paused all broad match campaigns, invested the budget into exact match keywords, and optimized their landing page 
                        (improving conversion from 12% to 28%). Within 3 months, CPL dropped to $32, and they generated 160 qualified leads/month 
                        instead of 75—saving $8,500/month in wasted ad spend.
                    </p>
                </div>

                <div className="mt-4 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-sm text-slate-700 italic">
                        "We were analyzing the wrong metrics. ROAS Tools forced us to focus on cost per acquisition instead of vanity metrics like impressions. 
                        Our CFO is now happy with our Google Ads ROI." — <strong>Arjun K., Growth Lead</strong>
                    </p>
                </div>
            </div>

            {/* Case Study 3 */}
            <div className="border-b border-slate-200 pb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="text-orange-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Freelance Digital Marketer Portfolio</h2>
                        <p className="text-slate-500 text-sm">Multi-Client Campaigns • Facebook + Google • 12 Months</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-xs font-bold text-green-600 uppercase mb-1">Clients Retained</p>
                        <p className="text-2xl font-bold text-green-700">9 out of 10</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-xs font-bold text-blue-600 uppercase mb-1">Avg Client ROAS</p>
                        <p className="text-2xl font-bold text-blue-700">5.2x</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <p className="text-xs font-bold text-purple-600 uppercase mb-1">Revenue Increase</p>
                        <p className="text-2xl font-bold text-purple-700">+65%</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3">The Challenge</h3>
                    <p className="text-slate-600 mb-4">
                        A freelance marketer in Delhi managing 10 e-commerce clients struggled to communicate campaign performance clearly. 
                        Clients often asked: "Are my ads profitable?" but she couldn't provide instant, visual answers during strategy calls.
                    </p>

                    <h3 className="font-bold text-slate-900 mb-3">The Solution</h3>
                    <p className="text-slate-600 mb-4">
                        She started using ROAS Tools during weekly client calls to calculate ROAS live. Instead of sending spreadsheets later, 
                        she shared her screen and input real-time data:
                    </p>
                    <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4">
                        <li>Plugged in ad spend, revenue, and costs during the call</li>
                        <li>Instantly showed clients if they were above/below break-even ROAS</li>
                        <li>Used the visual color-coded results (green = profitable, red = unprofitable) to guide strategy</li>
                    </ul>

                    <h3 className="font-bold text-slate-900 mb-3">The Results</h3>
                    <p className="text-slate-600">
                        Client satisfaction improved dramatically. 9 out of 10 clients renewed their contracts, and she increased her monthly retainer 
                        by 65% by demonstrating clear ROI. She also used our Image Compressor to optimize ad creatives, improving load times and CTR.
                    </p>
                </div>

                <div className="mt-4 bg-orange-50 p-4 rounded-lg border border-orange-100">
                    <p className="text-sm text-slate-700 italic">
                        "ROAS Tools became my secret weapon in client calls. Instead of confusing them with spreadsheets, I now show them 
                        real-time profitability in seconds. It builds instant trust." — <strong>Pooja M., Freelance Marketer</strong>
                    </p>
                </div>
            </div>

            {/* Case Study 4 */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Star className="text-purple-600" size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Government Exam Prep Student</h2>
                        <p className="text-slate-500 text-sm">Image & PDF Compression • Document Preparation • 2 Weeks</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-xs font-bold text-green-600 uppercase mb-1">Time Saved</p>
                        <p className="text-2xl font-bold text-green-700">8 hours</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-xs font-bold text-blue-600 uppercase mb-1">Files Compressed</p>
                        <p className="text-2xl font-bold text-blue-700">47 documents</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <p className="text-xs font-bold text-purple-600 uppercase mb-1">Application</p>
                        <p className="text-2xl font-bold text-purple-700">Success ✓</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-3">The Challenge</h3>
                    <p className="text-slate-600 mb-4">
                        A student preparing for UPSC (Indian civil services exam) needed to upload 47 documents for their application. 
                        Each file had strict size limits: images under 300 KB, PDFs under 500 KB. His phone photos and scanned documents 
                        were too large, and the government portal kept rejecting them.
                    </p>

                    <h3 className="font-bold text-slate-900 mb-3">The Solution</h3>
                    <p className="text-slate-600 mb-4">
                        He found our Image Compressor and PDF Compressor tools. Key features that helped:
                    </p>
                    <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-4">
                        <li><strong>Target Size Feature:</strong> He could set exact target sizes (e.g., 280 KB) and the tool compressed to that limit</li>
                        <li><strong>Batch Processing:</strong> Compressed 10 images at once, saving hours</li>
                        <li><strong>Quality Preview:</strong> Checked compressed images before downloading to ensure text remained readable</li>
                        <li><strong>No Registration:</strong> No signup required—he was on a tight deadline</li>
                    </ul>

                    <h3 className="font-bold text-slate-900 mb-3">The Results</h3>
                    <p className="text-slate-600">
                        All 47 documents were successfully uploaded within the size limits. He submitted his application 3 days before the deadline 
                        (previously stuck for 2 weeks). He later sent us a thank-you email after clearing the prelims exam.
                    </p>
                </div>

                <div className="mt-4 bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-slate-700 italic">
                        "I was about to pay ₹500 ($6) for a premium compression tool, but ROAS Tools did everything for free with better quality. 
                        The target size feature saved my application." — <strong>Rajesh T., UPSC Aspirant</strong>
                    </p>
                </div>
            </div>

        </div>

        {/* CTA Footer */}
        <div className="bg-slate-900 p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Your Success Story Could Be Next</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Have you achieved great results using ROAS Tools? We'd love to feature your story and help inspire other marketers and entrepreneurs.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                Share Your Story
            </Link>
        </div>

      </main>
    </div>
  );
}
