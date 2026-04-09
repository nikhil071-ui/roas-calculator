import type { Metadata } from "next";
import CurrencyClient from "./CurrencyClient";
import Link from "next/link";
// FIXED IMPORT: Go up two levels to find the shared AdBanner
import AdBanner from "../AdBanner";

export const metadata: Metadata = {
  title: "Free Currency Converter | USD to INR, EUR, GBP Live Rates",
  description: "Convert currency instantly with live exchange rates. Free tool for USD to INR, Euro, and more. Accurate and updated daily.",
  keywords: ["currency converter", "usd to inr", "live exchange rates", "money converter", "forex calculator"],
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: {
    canonical: "https://roas-calculator.tech/currency-converter",
  },
  openGraph: {
    title: "Free Currency Converter (Live Rates)",
    description: "Convert USD, INR, EUR, GBP instantly.",
        url: "https://roas-calculator.tech/currency-converter",
  },
      twitter: {
    card: "summary_large_image",
    title: "Free Currency Converter | USD to INR, EUR, GBP Live Rates",
    description: "Convert currency instantly with live exchange rates. Free tool for USD to INR, Euro, and more. Accurate and updated daily.",
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
            
            {/* AD SLOT 1: TOP */}
            <div className="w-full mb-8">
                <AdBanner />
            </div>
            
            {/* THE TOOL */}
            <CurrencyClient />

            {/* EXPERT GUIDE CTA */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-300 p-8 mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2"> Master Currency Conversion & Forex</h3>
              <p className="text-slate-700 mb-4">
                Read our expert guide on exchange rates, spread costs, international transfers, and how to get the best conversion rates.
              </p>
              <Link
                href="/currency-converter/guide"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Read Complete Currency Guide &rarr;
              </Link>
            </div>

            {/* QUICK HELP */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Need quick answers?</h3>
                <p className="text-slate-600">See spreads, fees, and transfer tips.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/currency-converter/faq" className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition">Currency FAQ</Link>
                <Link href="/resources" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Free Resources</Link>
                <Link href="/comparisons" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">Tool Comparisons</Link>
              </div>
            </div>

            {/* SEO ARTICLE */}
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

                <h3 className="text-2xl font-bold text-slate-900 mt-10">How Currency Exchange Rates Work</h3>
                <p>
                  Currency values are determined by supply and demand in the global foreign exchange market (Forex), 
                  which trades over <strong>$7.5 trillion daily</strong>-making it the largest financial market in the world. 
                  Unlike stock markets, Forex operates 24/5 across different time zones (Sydney, Tokyo, London, New York).
                </p>
                <p className="mt-4">
                  Major factors influencing exchange rates include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li><strong>Interest Rates:</strong> Higher interest rates attract foreign investment, strengthening the currency. 
                    For example, when the US Federal Reserve raises rates, the USD typically appreciates against other currencies.</li>
                    <li><strong>Inflation:</strong> Countries with lower inflation rates see their currency value increase relative to countries with higher inflation.</li>
                    <li><strong>Economic Stability:</strong> Political stability and strong economic performance make a country's currency more attractive to investors.</li>
                    <li><strong>Trade Balance:</strong> Countries with trade surpluses (exporting more than importing) often have stronger currencies.</li>
                    <li><strong>Central Bank Intervention:</strong> Governments can buy or sell their own currency to influence its value.</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-10">Popular Currency Pairs Explained</h3>
                
                <div className="space-y-6 mt-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-lg text-slate-900 mb-2">USD/INR (US Dollar to Indian Rupee)</h4>
                        <p className="text-slate-700 mb-3">
                            The most-searched currency pair by Indians. The USD/INR rate is crucial for:
                        </p>
                        <ul className="text-sm text-slate-600 space-y-1 ml-5 list-disc">
                            <li>Students paying tuition fees for US universities</li>
                            <li>IT professionals receiving salaries from US companies</li>
                            <li>Businesses importing goods from America</li>
                            <li>Families sending remittances to India</li>
                        </ul>
                        <p className="text-sm text-slate-500 mt-3">
                            <strong>2026 Range:</strong> INR82-86 per 1 USD (historically volatile due to oil prices and RBI policy)
                        </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-lg text-slate-900 mb-2">EUR/USD (Euro to US Dollar)</h4>
                        <p className="text-slate-700 mb-3">
                            The world's most-traded currency pair, accounting for nearly 30% of all Forex transactions. 
                            The EUR/USD is watched closely as a barometer of global economic health.
                        </p>
                        <p className="text-sm text-slate-500 mt-3">
                            <strong>2026 Range:</strong> Approximately 1.05-1.12 USD per 1 EUR
                        </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-lg text-slate-900 mb-2">GBP/USD (British Pound to US Dollar)</h4>
                        <p className="text-slate-700 mb-3">
                            Known as "Cable" in trading circles (a reference to the transatlantic telegraph cable used for communication). 
                            The GBP has historically been one of the strongest global currencies.
                        </p>
                        <p className="text-sm text-slate-500 mt-3">
                            <strong>2026 Range:</strong> Approximately 1.25-1.35 USD per 1 GBP
                        </p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-10">Best Practices for International Money Transfers</h3>
                <p>
                  If you're sending money abroad, understanding exchange rates can save you hundreds or thousands of dollars. 
                  Here's what you need to know:
                </p>

                <h4 className="text-xl font-semibold text-slate-800 mt-6">Hidden Fees to Watch For</h4>
                <ol className="list-decimal pl-5 space-y-3 mt-4">
                    <li>
                        <strong>Exchange Rate Markup:</strong> Banks and services like Western Union often add 3-5% to the mid-market rate. 
                        If the real rate is 83.00 INR per USD, they might charge you 85.50-pocketing the difference.
                    </li>
                    <li>
                        <strong>Transfer Fees:</strong> Flat fees ranging from $15-50 per transaction, depending on the service.
                    </li>
                    <li>
                        <strong>Receiving Bank Charges:</strong> The recipient's bank may deduct $10-30 for processing international transfers.
                    </li>
                    <li>
                        <strong>Intermediary Bank Fees:</strong> If the money passes through multiple banks, each may take a cut.
                    </li>
                </ol>

                <h4 className="text-xl font-semibold text-slate-800 mt-6">Recommended Transfer Services (2026)</h4>
                <div className="overflow-x-auto my-6">
                    <table className="w-full border border-slate-200 bg-white text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">Service</th>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">Exchange Rate</th>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">Transfer Fee</th>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">Speed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-200 px-4 py-2 font-semibold">Wise (TransferWise)</td>
                                <td className="border border-slate-200 px-4 py-2 text-green-600">Mid-Market (0% markup)</td>
                                <td className="border border-slate-200 px-4 py-2">0.5% - 1%</td>
                                <td className="border border-slate-200 px-4 py-2">1-2 days</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-200 px-4 py-2 font-semibold">Remitly</td>
                                <td className="border border-slate-200 px-4 py-2 text-yellow-600">Fair (0.5-2% markup)</td>
                                <td className="border border-slate-200 px-4 py-2">$0-5</td>
                                <td className="border border-slate-200 px-4 py-2">Minutes - 3 days</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-200 px-4 py-2 font-semibold">PayPal</td>
                                <td className="border border-slate-200 px-4 py-2 text-red-600">Poor (3-4% markup)</td>
                                <td className="border border-slate-200 px-4 py-2">$0.99-4.99</td>
                                <td className="border border-slate-200 px-4 py-2">Instant</td>
                            </tr>
                            <tr className="bg-slate-50">
                                <td className="border border-slate-200 px-4 py-2 font-semibold">Traditional Banks</td>
                                <td className="border border-slate-200 px-4 py-2 text-red-600">Very Poor (4-6% markup)</td>
                                <td className="border border-slate-200 px-4 py-2">$25-45</td>
                                <td className="border border-slate-200 px-4 py-2">3-5 days</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-10">Currency Trading Basics for Beginners</h3>
                <p>
                  While our tool is designed for personal and business use (conversions, payments, travel), many users ask about 
                  currency trading (Forex trading) as an investment. Here's a beginner-friendly overview:
                </p>

                <h4 className="text-xl font-semibold text-slate-800 mt-6">What is Forex Trading?</h4>
                <p className="mt-3">
                  Forex trading involves buying one currency while simultaneously selling another, speculating on exchange rate movements. 
                  For example, if you believe the Euro will strengthen against the Dollar, you buy EUR/USD. If it rises from 1.10 to 1.12, 
                  you profit from the 2-cent difference.
                </p>

                <h4 className="text-xl font-semibold text-slate-800 mt-6">Risks of Currency Trading</h4>
                <div className="bg-red-50 p-6 rounded-xl border border-red-200 my-6">
                    <p className="text-red-900 font-bold mb-3">! High Risk Warning</p>
                    <ul className="text-sm text-red-800 space-y-2 list-disc pl-5">
                        <li><strong>Leverage Losses:</strong> Forex brokers offer 50:1 or 100:1 leverage, meaning a 1% adverse move can wipe out your entire investment.</li>
                        <li><strong>24/5 Volatility:</strong> Currencies can gap dramatically overnight due to geopolitical events (wars, elections, central bank announcements).</li>
                        <li><strong>Complexity:</strong> Successful Forex trading requires deep knowledge of macroeconomics, technical analysis, and risk management.</li>
                        <li><strong>Scams:</strong> Many "Forex signal" services and "guaranteed profit" schemes are fraudulent. Only trade through regulated brokers.</li>
                    </ul>
                    <p className="text-sm text-red-700 mt-4">
                        <strong>Recommendation:</strong> If you're new to investing, consider low-cost index funds instead of Forex trading. 
                        Over 80% of retail Forex traders lose money.
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-10">Frequently Asked Questions</h3>

                <div className="space-y-6 my-8">
                    <div>
                        <h5 className="font-bold text-slate-900 mb-2">Q: Why does Google show a different exchange rate than your tool?</h5>
                        <p className="text-slate-700">
                            Google's rates update every few hours, while our tool uses real-time API data from financial institutions. 
                            Minor discrepancies (0.1-0.5%) are normal due to timing differences. Always check with your bank before large transactions.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-2">Q: What's the best time to exchange currency?</h5>
                        <p className="text-slate-700">
                            Forex markets are most active (and volatile) during overlapping trading hours: 
                            <strong>8 AM - 12 PM EST</strong> when both London and New York markets are open. 
                            However, timing the market is nearly impossible. For large transfers, consider splitting the transaction across multiple days to average out the rate.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-2">Q: Can I trust online currency converters?</h5>
                        <p className="text-slate-700">
                            Reputable converters (like ours, XE.com, OANDA) use official financial data and are accurate for estimation. 
                            However, the rate you actually receive will depend on your bank or transfer service. 
                            Always ask for a quote before confirming a transaction.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-2">Q: How much money can I transfer internationally?</h5>
                        <p className="text-slate-700">
                            Legal limits vary by country. In the US, you must report transfers over $10,000 to the IRS (not illegal, just reported). 
                            India limits outbound remittances to $250,000 per year under the Liberalized Remittance Scheme (LRS). 
                            Consult your bank and a tax professional for compliance.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-2">Q: What are "exotic" currency pairs?</h5>
                        <p className="text-slate-700">
                            Major pairs (EUR/USD, USD/JPY) trade heavily with tight spreads. 
                            Exotic pairs involve smaller economies (e.g., USD/THB for Thai Baht or EUR/TRY for Turkish Lira) and have wider spreads, 
                            higher volatility, and less liquidity.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-2">Q: Should I exchange money at the airport?</h5>
                        <p className="text-slate-700">
                            <strong>No.</strong> Airport currency exchanges are notoriously expensive, often charging 10-15% above the mid-market rate. 
                            Better options: withdraw cash from an ATM abroad (check your bank's foreign transaction fees), 
                            use a travel credit card with no foreign fees, or exchange money at a local bank.
                        </p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-10">Currency Symbols & ISO Codes Reference</h3>
                <p>
                  Every currency has a 3-letter ISO code used in banking and finance. Here are the most common:
                </p>

                <div className="overflow-x-auto my-6">
                    <table className="w-full border border-slate-200 bg-white text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">Currency</th>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">Symbol</th>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">ISO Code</th>
                                <th className="border border-slate-200 px-4 py-3 text-left font-bold">Country/Region</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td className="border border-slate-200 px-4 py-2">US Dollar</td><td className="border border-slate-200 px-4 py-2">$</td><td className="border border-slate-200 px-4 py-2 font-mono">USD</td><td className="border border-slate-200 px-4 py-2">United States</td></tr>
                            <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-2">Euro</td><td className="border border-slate-200 px-4 py-2">EUR</td><td className="border border-slate-200 px-4 py-2 font-mono">EUR</td><td className="border border-slate-200 px-4 py-2">Eurozone (19 countries)</td></tr>
                            <tr><td className="border border-slate-200 px-4 py-2">British Pound</td><td className="border border-slate-200 px-4 py-2">GBP</td><td className="border border-slate-200 px-4 py-2 font-mono">GBP</td><td className="border border-slate-200 px-4 py-2">United Kingdom</td></tr>
                            <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-2">Indian Rupee</td><td className="border border-slate-200 px-4 py-2">INR</td><td className="border border-slate-200 px-4 py-2 font-mono">INR</td><td className="border border-slate-200 px-4 py-2">India</td></tr>
                            <tr><td className="border border-slate-200 px-4 py-2">Japanese Yen</td><td className="border border-slate-200 px-4 py-2">JPY</td><td className="border border-slate-200 px-4 py-2 font-mono">JPY</td><td className="border border-slate-200 px-4 py-2">Japan</td></tr>
                            <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-2">Canadian Dollar</td><td className="border border-slate-200 px-4 py-2">C$</td><td className="border border-slate-200 px-4 py-2 font-mono">CAD</td><td className="border border-slate-200 px-4 py-2">Canada</td></tr>
                            <tr><td className="border border-slate-200 px-4 py-2">Australian Dollar</td><td className="border border-slate-200 px-4 py-2">A$</td><td className="border border-slate-200 px-4 py-2 font-mono">AUD</td><td className="border border-slate-200 px-4 py-2">Australia</td></tr>
                            <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-2">Swiss Franc</td><td className="border border-slate-200 px-4 py-2">CHF</td><td className="border border-slate-200 px-4 py-2 font-mono">CHF</td><td className="border border-slate-200 px-4 py-2">Switzerland</td></tr>
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Disclaimer: This tool is for informational purposes only. Always check with your bank before making large international transfers.
                </p>
            </article>
        </div>

        {/* SIDEBAR ADS */}
        <aside className="w-full lg:w-[320px] flex flex-col gap-6">
            
            {/* AD SLOT 2: SIDEBAR TOP */}
            <div className="w-full">
                <AdBanner />
            </div>

            {/* AD SLOT 3: SIDEBAR BOTTOM/STICKY */}
            <div className="sticky top-24 w-full">
                <AdBanner />
            </div>
        </aside>

      </div>
    </main>
  );
}
