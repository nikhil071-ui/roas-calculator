import type { Metadata } from "next";
import Link from "next/link";
import RoasClient from "./RoasClient"; // <--- Using the working Client Component

export const metadata: Metadata = {
  title: "Free ROAS Calculator | Calculate Profit & Break-Even 2025",
  description: "Calculate your Return on Ad Spend (ROAS), Break-Even Point, and Net Profit instantly. The best free tool for Facebook Ads, Google Ads, and dropshipping.",
  keywords: ["roas calculator", "facebook ads profit calculator", "break even roas formula", "dropshipping calculator", "marketing roi tool"],
  alternates: {
    canonical: "https://roas-calculator-brown.vercel.app/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* --- HERO SECTION (Targeting High CPC Keywords) --- */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Free ROAS Calculator & Profit Estimator
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Instantly calculate your Return on Ad Spend (ROAS), Break-Even Point, 
            and Net Profit for Facebook Ads, Google Ads.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 order-2 lg:order-1">
            
            {/* AD SLOT 1: TOP LEADERBOARD (High Earnings) */}
            <div className="w-full h-[90px] bg-gray-200 mb-8 rounded-lg flex items-center justify-center text-gray-500 text-sm border border-gray-300">
                [Google AdSense Leaderboard 728x90]
            </div>
            
            {/* THE CALCULATOR TOOL (Client Component) */}
            <RoasClient />

            {/* --- MORE TOOLS SECTION --- */}
            <section className="mt-12 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">More Free Tools</h2>
              <div className="flex justify-center gap-6 flex-wrap">
                
                {/* Link to Image Compressor */}
                <Link href="/image-compressor" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 hover:shadow-lg transition w-full md:w-64 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300">🖼️</div>
                  <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-blue-600">Image Compressor</h3>
                  <p className="text-sm text-gray-500">Reduce image size by up to 80% without losing quality.</p>
                </Link>

                {/* PDF Converter Card */}
                <Link href="/pdf-converter" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-500 hover:shadow-lg transition w-full md:w-64 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300">📄</div>
                  <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-red-600">JPG to PDF</h3>
                  <p className="text-sm text-gray-500">Combine multiple images into a single professional PDF document.</p>
                </Link>

              </div>
            </section>

            {/* SEO CONTENT (Essential for Ranking & AdSense Approval) */}
            <article className="prose lg:prose-xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-slate-900">How to Calculate ROAS (Return on Ad Spend)</h2>
                <p>
                  <strong>ROAS (Return on Ad Spend)</strong> is the most critical metric for any digital marketer or business owner. 
                  Unlike ROI (Return on Investment), which looks at the big picture, ROAS focuses strictly on the effectiveness of your specific ad campaigns.
                </p>
                <p>
                  The formula is simple but powerful: 
                  <span className="block my-4 p-4 bg-slate-50 border-l-4 border-blue-500 font-mono text-slate-900 font-bold">
                    ROAS = Total Conversion Revenue / Total Ad Spend
                  </span>
                  For example, if you spend <strong>$1,000</strong> on Facebook Ads and generate <strong>$5,000</strong> in revenue, your ROAS is <strong>5.0x</strong> (or 500%).
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-8">What is a "Good" ROAS Score in 2026?</h3>
                <p>
                  A common question we get is "What ROAS should I aim for?" The answer depends on your profit margins, but here are the industry benchmarks:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Below 2.0x:</strong> Warning Zone. Unless you have very high margins (like software), you might be losing money.</li>
                    <li><strong>3.0x:</strong> The "Gold Standard" for eCommerce. This usually ensures you cover product costs and shipping while making a profit.</li>
                    <li><strong>4.0x+:</strong> High Profitability. This allows you to scale your ad budget aggressively.</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">ROAS vs. ROI: What's the Difference?</h3>
                <p>
                  While ROAS tells you if your <em>ads</em> are working, ROI tells you if your <em>business</em> is working. 
                  Our calculator above includes a field for <strong>COGS (Cost of Goods Sold)</strong> to help you estimate your true Net Profit, bridging the gap between ROAS and ROI.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl mt-8">
                  <h4 className="font-bold text-blue-900 text-lg mb-2">💡 Pro Tip for AdSense Users</h4>
                  <p className="text-blue-800 text-sm mb-0">
                    Always calculate your <strong>Break-Even ROAS</strong> before launching a campaign. 
                    If your profit margin is 50%, your Break-Even ROAS is 2.0x. Anything below that, and you are paying to lose money.
                  </p>
                </div>
            </article>
        </div>

        {/* --- SIDEBAR (Sticky Ads) --- */}
        <aside className="w-full lg:w-[320px] order-1 lg:order-2 flex flex-col gap-6">
            
            {/* AD SLOT 2: SIDEBAR TOP */}
            <div className="w-full h-[250px] bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-500 text-sm border border-gray-200">
                [AdSense Square 300x250]
            </div>

            {/* AD SLOT 3: STICKY VERTICAL (High Visibility) */}
            <div className="sticky top-8 w-full h-[600px] bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-500 text-sm border border-gray-200">
                [AdSense Vertical 300x600]
            </div>
        </aside>

      </div>
    </main>
  );
}