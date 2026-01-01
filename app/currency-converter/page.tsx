import type { Metadata } from "next";
import CurrencyClient from "./CurrencyClient";

export const metadata: Metadata = {
  title: "Free Currency Converter | USD to INR, EUR, GBP Live Rates",
  description: "Convert currency instantly with live exchange rates. Free tool for USD to INR, Euro, and more. Accurate and updated daily.",
  keywords: ["currency converter", "usd to inr", "live exchange rates", "money converter", "forex calculator"],
  openGraph: {
    title: "Free Currency Converter (Live Rates)",
    description: "Convert USD, INR, EUR, GBP instantly.",
  },
};

export default function CurrencyPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-12">
      
      {/* HEADER */}
      <header className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Global Currency Converter
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Check live foreign exchange rates accurately. 
            Convert between USD, INR, EUR, GBP, and more instantly.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* LEFT COLUMN: Main Tool */}
        <div className="flex-1">
            
            {/* AD SLOT 1 */}
            <div className="w-full min-h-[90px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden mb-8">
                <span className="text-xs text-gray-400">Advertisement</span>
            </div>
            
            {/* THE TOOL */}
            <CurrencyClient />

            {/* SEO ARTICLE (Required for AdSense) */}
            <article className="prose lg:prose-xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 max-w-none text-gray-700 mt-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Understanding Exchange Rates</h2>
                <p>
                  An <strong>exchange rate</strong> represents the value of one currency compared to another. 
                  For example, if the USD/INR rate is 83.50, it means 1 US Dollar buys you 83.50 Indian Rupees.
                </p>
                <p>
                  These rates fluctuate constantly due to global market factors like inflation, interest rates, and geopolitical stability. 
                  Our tool connects to live global banking data to give you the most accurate mid-market rate available.
                </p>

                <h3 className="text-xl font-bold text-slate-900 mt-6">Why do rates differ?</h3>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li><strong>Mid-Market Rate:</strong> The "real" rate banks use between themselves. This is what our tool shows.</li>
                    <li><strong>Buy/Sell Rate:</strong> The rate you see at an airport or local bank, which usually includes a hidden fee (markup).</li>
                </ul>

                <p className="mt-4 text-sm text-gray-500">
                  Disclaimer: This tool is for informational purposes only. Always check with your bank before making large international transfers.
                </p>
            </article>
        </div>

        {/* SIDEBAR ADS */}
        <aside className="w-full lg:w-[320px] flex flex-col gap-6">
            <div className="w-full min-h-[250px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-400">Advertisement</span>
            </div>
            <div className="sticky top-24 w-full min-h-[600px] bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-xs text-gray-400">Advertisement</span>
            </div>
        </aside>

      </div>
    </main>
  );
}