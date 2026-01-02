"use client";

import { useState, useEffect } from "react";
import { ArrowRightLeft, TrendingUp, RefreshCw, Globe, DollarSign } from "lucide-react";

// Fallback list if API fails (Top 20 traded currencies)
const POPULAR_CURRENCIES = [
  "USD", "INR", "EUR", "GBP", "CAD", "AUD", "JPY", "CNY", "AED", "SGD", 
  "CHF", "MYR", "THB", "SAR", "QAR", "KWD", "OMR", "BHD", "PKR", "BDT"
];

export default function CurrencyClient() {
  const [amount, setAmount] = useState<number | "">(""); // Start empty to fix "0" issue
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [currencyList, setCurrencyList] = useState<string[]>(POPULAR_CURRENCIES);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // 1. Fetch Live Rates & All Currencies
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        // Free API, no key required, updates daily
        const res = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const data = await res.json();

        if (data.result === "success") {
          setExchangeRate(data.rates[toCurrency]);
          setLastUpdated(data.time_last_update_utc.slice(0, 16));
          
          // Get all available currencies from the API keys
          const allCurrencies = Object.keys(data.rates);
          setCurrencyList(allCurrencies); 
        }
      } catch (error) {
        console.error("Failed to fetch rates", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [fromCurrency, toCurrency]);

  // 2. Handle Swap
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // 3. Calculation Logic
  const numericAmount = amount === "" ? 0 : amount;
  const result = (numericAmount * exchangeRate).toFixed(2);

  return (
    <div className="space-y-8">
      
      {/* --- REAL GOOGLE AD START (Top of Tool) --- */}
      <div className="flex justify-center overflow-hidden min-h-[250px]">
        <ins 
            className="adsbygoogle"
            style={{ display: "block", minWidth: "300px" }} 
            data-ad-client="ca-pub-4649521973867824"
            data-ad-slot="1463530914"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
        <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
      </div>
      {/* --- REAL GOOGLE AD END --- */}

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 max-w-3xl mx-auto">
        
        {/* HEADER */}
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <DollarSign className="text-green-400" /> Currency Converter
            </h2>
            <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
               <Globe size={14} /> Live Market Rates
            </p>
          </div>
          {loading && <RefreshCw className="animate-spin text-blue-400" />}
        </div>

        {/* MAIN CONTENT */}
        <div className="p-8">
          
          {/* INPUT SECTION */}
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-8">
            
            {/* FROM */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Amount ({fromCurrency})</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value === "" ? "" : parseFloat(e.target.value))}
                onFocus={(e) => e.target.select()} // Auto-selects text on click
                placeholder="0.00"
                className="w-full text-3xl font-bold text-slate-800 border-b-2 border-slate-200 focus:border-blue-600 outline-none py-2 bg-transparent transition-colors placeholder:text-slate-300"
              />
            </div>

            {/* SWAP BUTTON */}
            <div className="flex justify-center">
              <button 
                onClick={handleSwap}
                className="bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 p-3 rounded-full transition-all border border-slate-200 shadow-sm active:scale-95 group"
                title="Swap Currencies"
              >
                <ArrowRightLeft size={20} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
            </div>

            {/* TO (Converted) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Converted To</label>
              <div className="w-full text-3xl font-bold text-blue-600 border-b-2 border-blue-100 py-2">
                {numericAmount > 0 ? result : "0.00"} <span className="text-lg text-blue-300 ml-1">{toCurrency}</span>
              </div>
            </div>
          </div>

          {/* CURRENCY SELECTORS */}
          <div className="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500">From Currency</label>
              <select 
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full bg-white border border-slate-200 text-slate-700 font-bold text-lg rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm cursor-pointer"
              >
                {currencyList.map((curr) => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500">To Currency</label>
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full bg-white border border-slate-200 text-slate-700 font-bold text-lg rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm cursor-pointer"
              >
                {currencyList.map((curr) => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>
          </div>

          {/* INFO FOOTER */}
          <div className="mt-6 flex justify-between items-center text-xs text-slate-400 border-t pt-4">
            <div className="flex items-center gap-1">
               <TrendingUp size={14} /> 
               <span>1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}</span>
            </div>
            <div>
              Updated: {lastUpdated || "Just now"}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}