import Link from "next/link";
import { ArrowLeft, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Guide to Currency Conversion & Exchange Rates | 2026 Forex Explained",
  description: "Expert guide to currency conversion. Learn how exchange rates work, real-time forex, conversion fees, and international money transfers for travel and business.",
  keywords: [
    "currency conversion guide",
    "how exchange rates work",
    "forex trading",
    "currency exchange rates",
    "international money transfer",
    "best exchange rates",
    "currency converter",
  ],
  openGraph: {
    title: "Complete Guide to Currency Conversion & Exchange Rates | 2026 Forex Explained",
    description: "Expert guide to currency conversion. Learn how exchange rates work, real-time forex, conversion fees, and international money transfers for travel and business.",
    url: "https://roas-calculator.tech/currency-converter/guide",
  },
      twitter: {
    card: "summary_large_image",
    title: "Complete Guide to Currency Conversion & Exchange Rates | 2026 Forex Explained",
    description: "Expert guide to currency conversion. Learn how exchange rates work, real-time forex, conversion fees, and international money transfers for travel and business.",
  },
  alternates: {
    canonical: "https://roas-calculator.tech/currency-converter/guide",
  },
};

export default function CurrencyConverterGuide() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          href="/currency-converter"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Currency Converter Tool
        </Link>
      </div>

      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-emerald-900 to-green-800 p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign size={28} />
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-200">Complete Guide</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            The Complete Guide to Currency Conversion (2026)
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl">
            Understand exchange rates, forex markets, international transfers, and avoid hidden fees when converting currencies.
          </p>
        </div>

        <article className="p-8 md:p-12 prose lg:prose-lg max-w-none text-slate-700 space-y-8">
          
          <nav className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <h2 className="text-lg font-bold text-slate-900 mb-4"> Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <a href="#what-is-forex" className="text-emerald-600 hover:underline">1. How Exchange Rates Work</a>
              <a href="#fx-market" className="text-emerald-600 hover:underline">2. The Forex Market</a>
              <a href="#conversion" className="text-emerald-600 hover:underline">3. How to Convert Currency</a>
              <a href="#fees" className="text-emerald-600 hover:underline">4. Hidden Fees & Spreads</a>
              <a href="#transfers" className="text-emerald-600 hover:underline">5. International Transfers</a>
              <a href="#getting-best-rate" className="text-emerald-600 hover:underline">6. Getting Best Rates</a>
              <a href="#rates-live" className="text-emerald-600 hover:underline">7. Real-Time vs Mid-Market Rates</a>
              <a href="#tools" className="text-emerald-600 hover:underline">8. Conversion Tools</a>
            </div>
          </nav>

          <section id="what-is-forex">
            <h2 className="text-3xl font-bold text-slate-900">1. How Exchange Rates Work</h2>
            
            <p>
              An <strong>exchange rate</strong> is the price of one currency expressed in terms of another. 
              For example: 1 USD = 84 INR means one US dollar can be exchanged for 84 Indian Rupees.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded my-4">
              <p className="font-bold text-blue-900"> Key Concept:</p>
              <p className="text-blue-800 text-sm mt-2">
                Exchange rates fluctuate constantly (multiple times per second) based on supply and demand. 
                When we say "USD/INR is 84," that's the rate at that precise moment. A second later, it might be 83.98 or 84.02.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Quoting Convention</h3>
            
            <p className="mt-4">
              When you see "USD/INR = 84":
            </p>

            <ul className="space-y-2 mt-3">
              <li>
                <strong>Base Currency (first):</strong> USD (US Dollar). This is always "1 unit"
              </li>
              <li>
                <strong>Quote Currency (second):</strong> INR (Indian Rupee). This is the amount you get
              </li>
              <li>
                <strong>Meaning:</strong> 1 USD = 84 INR
              </li>
            </ul>

            <p className="text-sm text-slate-600 italic mt-4">
              Note: The inverse (INR/USD) would be 1/84 = 0.0119 USD per rupee (confusing, which is why we usually quote USD/INR instead).
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">What Causes Exchange Rates to Change?</h3>
            
            <ul className="space-y-3 mt-4">
              <li>
                <strong>Interest Rates:</strong> Higher interest rates in a country make its currency more attractive (investors want higher returns)
              </li>
              <li>
                <strong>Inflation:</strong> Higher inflation weakens a currency (less purchasing power)
              </li>
              <li>
                <strong>Economic Data:</strong> GDP growth, unemployment, trade reports can cause fluctuations
              </li>
              <li>
                <strong>Geopolitical Events:</strong> Wars, elections, policy changes affect investor confidence
              </li>
              <li>
                <strong>Supply & Demand:</strong> More buyers = currency strengthens. More sellers = currency weakens
              </li>
            </ul>
          </section>

          <section id="fx-market">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">2. The Forex (Currency) Market</h2>
            
            <p>
              The <strong>Forex Market</strong> (FX) is where currencies are traded globally. It's the largest financial market in the world.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Market Facts</h3>
            
            <ul className="space-y-3 mt-4">
              <li>
                <strong>Daily Trading Volume:</strong> ~$7.5 trillion per day (as of 2024)
              </li>
              <li>
                <strong>Operating Hours:</strong> 24/5 (opens Monday Asia, closes Friday US)
              </li>
              <li>
                <strong>Participants:</strong> Central banks, investment firms, currency traders, businesses, individuals
              </li>
              <li>
                <strong>Decentralized:</strong> No single physical location. Trading happens globally via electronic communication networks
              </li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Major Currency Pairs (Global Trading)</h3>
            
            <div className="space-y-2 mt-4">
              <p><strong>EUR/USD</strong> - Euro vs US Dollar (most traded)</p>
              <p><strong>GBP/USD</strong> - British Pound vs US Dollar</p>
              <p><strong>USD/JPY</strong> - US Dollar vs Japanese Yen</p>
              <p><strong>USD/CHF</strong> - US Dollar vs Swiss Frank</p>
              <p><strong>USD/INR</strong> - US Dollar vs Indian Rupee</p>
              <p><strong>AUD/USD</strong> - Australian Dollar vs US Dollar</p>
            </div>

            <p className="text-sm text-slate-600 italic mt-4">
              USD appears in ~90% of forex trades. This is why exchange rates are often quoted as "USD/XXX" (USD against other currencies).
            </p>
          </section>

          <section id="conversion">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">3. How to Convert Currency</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">Simple Mathematics</h3>
            
            <p className="mt-4">
              If you want to convert USD to INR:
            </p>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 my-4">
              <p className="font-mono text-center text-lg mb-4">
                INR Amount = USD Amount x Exchange Rate
              </p>
              <p className="text-sm text-slate-600">
                Example: Convert $100 USD to INR at rate 84
                <br />
                100 x 84 = 8,400 INR
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Reverse Conversion (INR to USD)</h3>
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-4">
              <p className="font-mono text-center text-lg mb-4">
                USD Amount = INR Amount / Exchange Rate
              </p>
              <p className="text-sm text-slate-600">
                Example: Convert 8,400 INR to USD at rate 84
                <br />
                8,400 / 84 = $100 USD
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Three-Currency Conversion</h3>
            
            <p className="mt-4">
              Want to convert EUR to INR? Use USD as intermediary currency:
            </p>

            <div className="space-y-3 mt-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p><strong>Step 1:</strong> Convert EUR to USD using EUR/USD rate</p>
              <p><strong>Step 2:</strong> Convert USD to INR using USD/INR rate</p>
              <p className="text-sm text-blue-700 italic mt-3">
                Most converters do this automatically in the background.
              </p>
            </div>
          </section>

          <section id="fees">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">4. Hidden Fees, Spreads & Markups</h2>
            
            <p>
              This is where currency converters make money. They don't charge you directly; they profit by giving you a worse exchange rate.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-6">Mid-Market Rate vs Offered Rate</h3>
            
            <div className="space-y-4 mt-4">
              <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded">
                <p className="font-bold text-blue-900">Mid-Market Rate (Real Rate)</p>
                <p className="text-blue-800 text-sm mt-1">The true exchange rate between two currencies. Used by Reuters, XE.com. NOT what you get as a customer.</p>
                <p className="text-sm text-blue-700 font-mono mt-2">Example: USD/INR mid-market = 84.00</p>
              </div>

              <div className="border-l-4 border-green-600 bg-green-50 p-4 rounded">
                <p className="font-bold text-green-900">Offered Rate (Your Rate)</p>
                <p className="text-green-800 text-sm mt-1">What banks, payment apps, and currency services give you. Always worse than mid-market (they need to profit).</p>
                <p className="text-sm text-green-700 font-mono mt-2">Example: Bank offers USD/INR = 83.50 (they keep 0.50)</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-6">The Spread (Markup)</h3>
            
            <p className="mt-4">
              <strong>Spread</strong> = Difference between mid-market rate and offered rate.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border border-slate-300 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Provider</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Mid-Market</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Offered</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-bold">Spread</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">XE.com (Reference)</td>
                    <td className="border border-slate-300 px-4 py-2">84.00</td>
                    <td className="border border-slate-300 px-4 py-2">84.00</td>
                    <td className="border border-slate-300 px-4 py-2">0% (reference only)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Wise (Best online)</td>
                    <td className="border border-slate-300 px-4 py-2">84.00</td>
                    <td className="border border-slate-300 px-4 py-2">83.90</td>
                    <td className="border border-slate-300 px-4 py-2">0.12% (excellent)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2 font-semibold">PayPal</td>
                    <td className="border border-slate-300 px-4 py-2">84.00</td>
                    <td className="border border-slate-300 px-4 py-2">81.50</td>
                    <td className="border border-slate-300 px-4 py-2">2.97% (poor)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2 font-semibold">Banks (HDFC, ICICI)</td>
                    <td className="border border-slate-300 px-4 py-2">84.00</td>
                    <td className="border border-slate-300 px-4 py-2">81.20</td>
                    <td className="border border-slate-300 px-4 py-2">3.33% (expensive)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 italic mt-4">
              <strong>Translation:</strong> Converting $1,000 USD to INR
              <br />
              Bank (3.33% spread): 80,800 INR<br />
              Wise (0.12% spread): 83,900 INR<br />
              <strong>Difference: Bank costs you 3,100 INR extra!</strong>
            </p>
          </section>

          <section id="transfers">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">5. International Money Transfers</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">Options Comparison</h3>
            
            <div className="space-y-4 mt-4">
              <div className="border border-green-300 bg-green-50 p-4 rounded">
                <p className="font-bold text-green-900">OK Wise (Best for most people)</p>
                <ul className="text-sm text-green-800 mt-2 space-y-1">
                  <li>- Mid-market rates (0.3-1% spread)</li>
                  <li>- Fast (1-2 days to India)</li>
                  <li>- Small amounts OK</li>
                  <li>- $4.12 fee typical</li>
                </ul>
              </div>

              <div className="border border-blue-300 bg-blue-50 p-4 rounded">
                <p className="font-bold text-blue-900">OK SWIFT Banks</p>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>- Traditional & secure</li>
                  <li>- Slow (3-5 days)</li>
                  <li>- High fees ($15-50)</li>
                  <li>- Poor exchange rates</li>
                </ul>
              </div>

              <div className="border border-orange-300 bg-orange-50 p-4 rounded">
                <p className="font-bold text-orange-900">X Remittance Services (MoneyGram, Western Union)</p>
                <ul className="text-sm text-orange-800 mt-2 space-y-1">
                  <li>- Expensive (3-5% spread)</li>
                  <li>- High fees ($5-20)</li>
                  <li>- Useful for cash pickup only</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="getting-best-rate">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">6. How to Get the Best Exchange Rates</h2>
            
            <h3 className="text-xl font-bold text-slate-900 mt-6">Pro Tips</h3>
            
            <ol className="list-decimal pl-5 space-y-4 mt-4">
              <li>
                <strong>Use Wise or OFX for transfers:</strong> Smallest spreads (0.3-1%) vs banks (2-4%)
              </li>
              <li>
                <strong>Compare before transferring:</strong> Mid-market rates vary slightly between providers
              </li>
              <li>
                <strong>Avoid Airport Exchanges:</strong> Worst rates (5-10% spread). Use ATMs instead.
              </li>
              <li>
                <strong>Large amounts = better rates:</strong> Transferring $50,000? Negotiate with banks.
              </li>
              <li>
                <strong>Check transfer time:</strong> Sometimes slow = better rate. Choose your priority.
              </li>
              <li>
                <strong>Avoid PayPal/Google Pay for currency:</strong> Spreads are terrible (2-4%)
              </li>
              <li>
                <strong>Use credit card (when possible):</strong> Better rates than bank transfers, plus points
              </li>
            </ol>
          </section>

          <section id="rates-live">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">7. Real-Time vs Delayed Rates</h2>
            
            <div className="space-y-4 mt-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <p className="font-bold text-green-900">OK Real-Time Rates</p>
                <p className="text-green-800 text-sm mt-1">Updated multiple times per second. Used by banks and professional traders. Most accurate.</p>
                <p className="text-sm text-green-700 mt-2">Our currency converter uses real-time rates from live forex feeds.</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                <p className="font-bold text-orange-900">! Delayed Rates (15-20 minute lag)</p>
                <p className="text-orange-800 text-sm mt-1">Older rates from 15-20 minutes ago. Free providers use these to save on data costs.</p>
                <p className="text-sm text-orange-700 mt-2">At volatile times (economic news), delays can cause 0.5-2% differences.</p>
              </div>
            </div>
          </section>

          <section id="tools">
            <h2 className="text-3xl font-bold text-slate-900 mt-12">8. Currency Converter Tools Comparison</h2>
            
            <div className="overflow-x-auto my-6 text-xs md:text-sm">
              <table className="w-full border border-slate-300">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Tool</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Real-Time?</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Free?</th>
                    <th className="border border-slate-300 px-3 py-2 text-left font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">ROAS Converter</td>
                    <td className="border border-slate-300 px-3 py-2">OK Yes</td>
                    <td className="border border-slate-300 px-3 py-2">OK 100% Free</td>
                    <td className="border border-slate-300 px-3 py-2">Quick conversions (Recommended)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">XE.com</td>
                    <td className="border border-slate-300 px-3 py-2">OK Yes</td>
                    <td className="border border-slate-300 px-3 py-2">OK Free</td>
                    <td className="border border-slate-300 px-3 py-2">Reference rates, learning</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Google Finance</td>
                    <td className="border border-slate-300 px-3 py-2">OK Yes</td>
                    <td className="border border-slate-300 px-3 py-2">OK Free</td>
                    <td className="border border-slate-300 px-3 py-2">Simple conversions</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Wise</td>
                    <td className="border border-slate-300 px-3 py-2">OK Yes</td>
                    <td className="border border-slate-300 px-3 py-2">OK Free converter</td>
                    <td className="border border-slate-300 px-3 py-2">Actual transfers (small fee)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200 mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to convert currencies?</h3>
            <p className="text-slate-700 mb-4">
              Use our free real-time currency converter to check exchange rates instantly. No fees, no delays, and 100% accurate.
            </p>
            <Link 
              href="/currency-converter"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Go to Currency Converter Tool
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
