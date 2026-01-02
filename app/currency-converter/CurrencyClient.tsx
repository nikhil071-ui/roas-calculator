"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRightLeft, TrendingUp, RefreshCw, Globe, Wallet, Zap } from "lucide-react";

// --- CONFIGURATION ---
const API_URL = "https://api.exchangerate-api.com/v4/latest/"; 
const COMMON_AMOUNTS = [1, 5, 10, 20, 50, 100, 500, 1000]; 

export default function CurrencyClient() {
  const [amount, setAmount] = useState<number | "">("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // 1. Optimized Fetch
  const fetchRates = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}${fromCurrency}`);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      
      setRates(data.rates);
      setLastUpdated(new Date(data.time_last_updated * 1000).toLocaleTimeString());
    } catch (error) {
      console.error("Rate fetch failed:", error);
    } finally {
      setTimeout(() => setLoading(false), 500); 
    }
  }, [fromCurrency]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  // 2. Calculation Logic
  const rate = rates[toCurrency] || 0;
  const numericAmount = amount === "" ? 0 : amount;
  const result = (numericAmount * rate).toFixed(2);

  const handleSwap = () => {
    setLoading(true);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 ring-4 ring-slate-50/50">
        
        {/* HEADER */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-sm">
                <Wallet className="text-blue-400" size={28} />
              </div>
              Currency Converter
            </h2>
            <p className="text-slate-400 text-sm mt-2 flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
               Live Global Market Rates
            </p>
          </div>
          
          <button 
            onClick={fetchRates} 
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            {loading ? "Updating..." : "Refresh Rates"}
          </button>
        </div>

        {/* TOOL BODY */}
        <div className="p-6 md:p-10 space-y-8">
          
          {/* INPUTS */}
          <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center">
            
            {/* FROM */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group focus-within:ring-2 focus-within:ring-blue-100">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">You Send</label>
              <div className="flex gap-2">
                <span className="text-2xl font-bold text-slate-400 self-center">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value === "" ? "" : parseFloat(e.target.value))}
                  placeholder="1000"
                  className="w-full bg-transparent text-3xl font-bold text-slate-900 outline-none placeholder:text-slate-300"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                 <select 
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full bg-transparent font-semibold text-slate-600 outline-none cursor-pointer hover:text-blue-600 transition-colors"
                 >
                    {Object.keys(rates).map((c) => <option key={c} value={c}>{c}</option>)}
                 </select>
              </div>
            </div>

            {/* SWAP */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 z-10">
              <button 
                onClick={handleSwap}
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all active:scale-90 border-4 border-white"
                title="Swap Currencies"
              >
                <ArrowRightLeft size={24} />
              </button>
            </div>

            {/* TO */}
            <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 hover:border-blue-200 transition-colors group">
              <label className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 block">They Get</label>
              <div className="flex gap-2 items-center h-[40px]">
                {loading ? (
                   <div className="h-8 w-32 bg-slate-200 animate-pulse rounded"></div>
                ) : (
                   <span className="text-4xl font-bold text-blue-600 break-all">
                      {numericAmount > 0 ? result : (0).toFixed(2)}
                   </span>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200/50">
                 <select 
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full bg-transparent font-semibold text-blue-800 outline-none cursor-pointer hover:text-blue-600 transition-colors"
                 >
                    {Object.keys(rates).map((c) => <option key={c} value={c}>{c}</option>)}
                 </select>
              </div>
            </div>
          </div>

          {/* RATES INFO */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 bg-slate-50 p-4 rounded-xl">
             <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-green-500" />
                <span className="font-medium">
                   1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
                </span>
             </div>
             <div className="mt-2 md:mt-0 flex items-center gap-2 opacity-75">
                <Zap size={14} /> 
                Updated: {lastUpdated || "Just now"}
             </div>
          </div>
        </div>
      </div>

      {/* --- GIFT: CHEAT SHEET (Pure UI, No Ads) --- */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Globe size={18} className="text-blue-500"/> 
                Quick Conversion Table
            </h3>
            <p className="text-xs text-slate-500">Popular {fromCurrency} to {toCurrency} conversions</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {COMMON_AMOUNTS.map((amt) => (
                <div key={amt} className="flex justify-between p-4 hover:bg-slate-50 transition-colors text-sm border-b md:border-b-0 border-slate-100">
                    <span className="font-medium text-slate-600">{amt} {fromCurrency}</span>
                    <span className="font-bold text-slate-900">{(amt * rate).toFixed(2)} {toCurrency}</span>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
}