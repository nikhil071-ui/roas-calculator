import type { Metadata } from "next";
import Link from "next/link";
import RoasClient from "./RoasClient";

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
    <main className="min-h-screen bg-gray-50 font-sans pb-12">
      
      {/* --- HERO SECTION --- */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Free ROAS Calculator & Profit Estimator
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Instantly calculate your Return on Ad Spend (ROAS), Break-Even Point, 
            and Net Profit for Facebook Ads and Google Ads.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 order-2 lg:order-1">
            
            {/* AD SLOT 1: TOP LEADERBOARD (Empty container for Auto Ads) */}
            <div className="w-full min-h-[90px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden mb-8">
                <span className="text-xs text-gray-400">Advertisement</span>
            </div>
            
            {/* THE CALCULATOR TOOL */}
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

                {/* Link to PDF Converter */}
                <Link href="/pdf-converter" className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-500 hover:shadow-lg transition w-full md:w-64 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300">📄</div>
                  <h3 className="font-bold text-xl mb-2 text-slate-800 group-hover:text-red-600">JPG to PDF</h3>
                  <p className="text-sm text-gray-500">Combine multiple images into a single professional PDF document.</p>
                </Link>

              </div>
            </section>

            {/* --- SEO CONTENT (Required for "Publisher Content" check) --- */}
            <article className="prose lg:prose-xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 max-w-none text-gray-700 mt-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Complete Guide to ROAS: Calculation, Formulas & Strategy (2026)</h2>
                
                <p>
                  <strong>Return on Ad Spend (ROAS)</strong> is the definitive metric for evaluating the effectiveness of digital advertising campaigns. 
                  Whether you are running Facebook Ads, Google Performance Max, or TikTok Spark Ads, knowing your ROAS is the difference between scaling a profitable business and burning cash.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">What is the ROAS Formula?</h3>
                <p>
                  The mathematical formula for calculating ROAS is straightforward but powerful. It measures the gross revenue generated for every single dollar spent on advertising.
                </p>
                <div className="bg-slate-50 border-l-4 border-blue-600 p-6 my-6">
                    <p className="font-mono text-lg font-bold text-slate-900 mb-2">ROAS = Total Conversion Value ÷ Total Ad Spend</p>
                    <p className="text-slate-600 text-sm">Example: If you spend $1,000 on ads and generate $5,000 in sales, your ROAS is 5.0 (or 500%).</p>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">ROAS vs. ROI: Why Marketers Get Confused</h3>
                <p>
                  Many beginners confuse ROAS with ROI (Return on Investment). While they are related, they serve different purposes:
                </p>
                <ul className="list-disc pl-5 space-y-4 my-4">
                    <li><strong>ROAS</strong> looks strictly at ad effectiveness. It asks: <em>"Did my ads make money?"</em> It ignores software costs, employee salaries, and shipping.</li>
                    <li><strong>ROI</strong> looks at the entire business picture. It asks: <em>"Did the company make a profit?"</em> ROI factors in COGS (Cost of Goods Sold), agency fees, and operations.</li>
                </ul>
                <p>
                  Our tool above calculates both. By entering your <strong>Product Costs</strong>, we provide a "True Profit" analysis that bridges the gap between simple ROAS and actual business ROI.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">What is a "Good" ROAS Score?</h3>
                <p>
                  There is no single "good" number because it depends heavily on your profit margins. However, here are industry benchmarks for 2025:
                </p>
                <div className="grid md:grid-cols-3 gap-6 my-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-700">Under 3.0x</h4>
                        <p className="text-sm text-red-600 mt-1">Danger Zone. Unless you have 80%+ margins (like SaaS), you are likely losing money after expenses.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                        <h4 className="font-bold text-yellow-700">3.0x - 5.0x</h4>
                        <p className="text-sm text-yellow-600 mt-1">The Sweet Spot. This is typically the target for dropshipping and e-commerce brands to remain healthy.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <h4 className="font-bold text-green-700">Over 5.0x</h4>
                        <p className="text-sm text-green-600 mt-1">Hyper Growth. Your ads are performing exceptionally well. You should increase ad spend immediately.</p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">How to Calculate Break-Even ROAS</h3>
                <p>
                  Your <strong>Break-Even ROAS</strong> is the minimum score you need to not lose money. Calculating this is crucial before launching any campaign.
                </p>
                <p className="italic my-4">Formula: 1 ÷ Profit Margin %</p>
                <p>
                  Example: If you sell a sneaker for $100 and it costs you $60 to buy and ship, your profit is $40 (40% margin). 
                  Your Break-Even ROAS is <code>1 ÷ 0.40 = 2.5</code>. If your ads get a 2.4 ROAS, you are losing money, even though it looks positive.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">3 Strategies to Improve Your ROAS</h3>
                <ol className="list-decimal pl-5 space-y-4 my-4">
                    <li><strong>Improve Creative Quality:</strong> In 2025, user-generated content (UGC) and short-form video (Reels) typically drive 40% higher conversion rates than static images.</li>
                    <li><strong>Increase Average Order Value (AOV):</strong> Use bundles or upsells. If you spend $20 to acquire a customer, selling them a $100 item yields a 5.0 ROAS, whereas selling a $50 item only yields 2.5 ROAS.</li>
                    <li><strong>Optimize Landing Pages:</strong> A slow website kills ROAS. Ensure your page loads in under 2 seconds and has a clear "Add to Cart" button above the fold.</li>
                </ol>

                <p className="mt-8 text-sm text-gray-500">
                  Disclaimer: This tool provides estimates based on your inputs. Advertising platforms fluctuate daily, and past performance does not guarantee future results. Always consult with a financial professional for business accounting.
                </p>
            </article>
        </div>

        {/* --- SIDEBAR (Sticky Ads) --- */}
        <aside className="w-full lg:w-[320px] order-1 lg:order-2 flex flex-col gap-6">
            
            {/* AD SLOT 2: SIDEBAR TOP */}
            <div className="w-full min-h-[250px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-400">Advertisement</span>
            </div>

            {/* AD SLOT 3: STICKY VERTICAL (High Visibility) */}
            <div className="sticky top-24 w-full min-h-[600px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-400">Advertisement</span>
            </div>
        </aside>

      </div>
    </main>
  );
}