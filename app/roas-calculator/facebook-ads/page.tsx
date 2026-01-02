import type { Metadata } from "next";
// Go up 2 levels to find the components in the 'app' folder
import RoasClient from "../../RoasClient"; 
import AdBanner from "../../AdBanner"; 

export const metadata: Metadata = {
  title: "Facebook Ads ROAS Calculator & Break-Even Tool (2026)",
  description: "Calculate your Break-Even ROAS for Facebook Ads instantly. Stop losing money on dropshipping. Accurate profit margin estimator for Meta Advertisers.",
  keywords: ["facebook ads roas calculator", "break even roas facebook", "dropshipping profit calculator", "meta ads roas formula", "facebook cpa calculator"],
};

export default function FacebookRoasPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* SPECIFIC HEADER FOR FACEBOOK USERS */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Facebook Ads <span className="text-blue-600">Break-Even ROAS</span> Calculator
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stop guessing. Know exactly what ROAS (Return on Ad Spend) you need to make a profit on your Facebook & Instagram campaigns.
          </p>

          {/* --- AD SLOT 1: TOP (Safe Component) --- */}
          <div className="w-full flex justify-center mt-6">
            <AdBanner />
          </div>

        </div>

        {/* REUSING YOUR EXISTING CALCULATOR */}
        <RoasClient />

        {/* --- AD SLOT 2: MIDDLE (Optional but Recommended) --- */}
        <div className="w-full flex justify-center mt-6">
           <AdBanner />
        </div>

        {/* SEO CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-xl mb-3 text-slate-800">Why Calculate Break-Even ROAS?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    If your product costs $20 and you sell it for $50, your break-even ROAS is <strong>1.67</strong>. 
                    If your Facebook Ads Manager shows a ROAS of 1.5, <strong>you are losing money</strong> even if you see sales. 
                </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-xl mb-3 text-slate-800">How to use for Dropshipping</h3>
                <ul className="text-slate-600 text-sm space-y-2 list-disc pl-5">
                    <li>Enter your <strong>Product Selling Price</strong>.</li>
                    <li>Enter your <strong>COGS</strong> (Supplier cost + Shipping).</li>
                    <li>Enter your <strong>Ad Spend</strong> from Facebook Manager.</li>
                    <li>The tool will show your <strong>Net Profit</strong> instantly.</li>
                </ul>
            </div>
        </div>

      </div>
    </main>
  );
}