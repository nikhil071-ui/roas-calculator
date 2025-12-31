"use client";

import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingUp, Activity, Download } from "lucide-react";

export default function RoasCalculator() {
  // --- 1. State Management ---
  const [isMounted, setIsMounted] = useState(false);
  const [currency, setCurrency] = useState("$");
  
  const [adSpend, setAdSpend] = useState(1000);
  const [revenue, setRevenue] = useState(5000);
  const [cogs, setCogs] = useState(1500); // Cost of Goods Sold

  // --- 2. Derived Metrics ---
  const [metrics, setMetrics] = useState({
    roas: 0,
    profit: 0,
    margin: 0,
    breakEvenRoas: 0,
  });

  // --- 3. The Business Logic ---
  useEffect(() => {
    setIsMounted(true);

    const calculatedRoas = adSpend > 0 ? revenue / adSpend : 0;
    const calculatedProfit = revenue - adSpend - cogs;
    const profitMargin = revenue > 0 ? (calculatedProfit / revenue) * 100 : 0;
    const marginPreAd = revenue > 0 ? (revenue - cogs) / revenue : 0;
    const breakEven = marginPreAd > 0 ? 1 / marginPreAd : 0;

    setMetrics({
      roas: parseFloat(calculatedRoas.toFixed(2)),
      profit: parseFloat(calculatedProfit.toFixed(2)),
      margin: parseFloat(profitMargin.toFixed(1)),
      breakEvenRoas: parseFloat(breakEven.toFixed(2)),
    });
  }, [adSpend, revenue, cogs]);

  // --- 4. Chart Data ---
  const data = [
    { name: "Ad Spend", value: adSpend },
    { name: "Product Cost", value: cogs },
    { name: "Net Profit", value: metrics.profit > 0 ? metrics.profit : 0 },
  ];

  const COLORS = ["#6366f1", "#f59e0b", "#10b981"]; // Indigo, Amber, Emerald

  if (!isMounted) return <div className="p-12 text-center text-gray-500">Loading Calculator...</div>;

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      
      {/* HEADER BAR */}
      <div className="bg-slate-900 p-6 flex flex-col md:flex-row justify-between items-center text-white gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">ROAS & Profit Engine</h2>
            <p className="text-xs text-slate-400">Real-time Financial Analysis</p>
          </div>
        </div>

        {/* Currency Toggle */}
        <div className="flex bg-slate-800 rounded-lg p-1">
          {["$", "₹", "€", "£"].map((sym) => (
            <button
              key={sym}
              onClick={() => setCurrency(sym)}
              className={`px-4 py-1 rounded-md text-sm font-bold transition ${
                currency === sym ? "bg-blue-500 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {sym}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-10">
        
        {/* LEFT COLUMN: INPUTS */}
        <div className="space-y-8">
          
          {/* Input 1: Ad Spend */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-semibold text-gray-700">
              <label>Total Ad Spend</label>
              <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded font-bold">
                {currency} {adSpend.toLocaleString()}
              </span>
            </div>
            {/* Slider */}
            <input
              type="range" min="0" max="50000" step="100"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            {/* Number Box */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500 font-bold">{currency}</span>
              <input
                type="number"
                placeholder="0" 
                value={adSpend === 0 ? "" : adSpend} 
                onFocus={(e) => e.target.select()}   
                onChange={(e) => setAdSpend(e.target.value === "" ? 0 : Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 font-bold"
              />
            </div>
          </div>

          {/* Input 2: Revenue */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-semibold text-gray-700">
              <label>Total Revenue</label>
              <span className="text-green-600 bg-green-50 px-2 py-1 rounded font-bold">
                {currency} {revenue.toLocaleString()}
              </span>
            </div>
            <input
              type="range" min="0" max="100000" step="100"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500 font-bold">{currency}</span>
              <input
                type="number"
                placeholder="0"
                value={revenue === 0 ? "" : revenue}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setRevenue(e.target.value === "" ? 0 : Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-900 font-bold"
              />
            </div>
          </div>

          {/* Input 3: COGS */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-semibold text-gray-700">
              <label>Cost of Goods (COGS)</label>
              <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded font-bold">
                {currency} {cogs.toLocaleString()}
              </span>
            </div>
            <input
              type="range" min="0" max="50000" step="100"
              value={cogs}
              onChange={(e) => setCogs(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500 font-bold">{currency}</span>
              <input
                type="number"
                placeholder="0"
                value={cogs === 0 ? "" : cogs}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setCogs(e.target.value === "" ? 0 : Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 font-bold"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: RESULTS */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
            
            {/* Top Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-xl border-l-4 shadow-sm bg-white ${metrics.roas >= 3 ? 'border-green-500' : 'border-yellow-500'}`}>
                    <p className="text-xs text-gray-500 uppercase font-bold">Your ROAS</p>
                    <p className="text-3xl font-bold text-gray-800">{metrics.roas}x</p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-blue-500 shadow-sm bg-white">
                    <p className="text-xs text-gray-500 uppercase font-bold">Net Profit</p>
                    <p className={`text-2xl font-bold ${metrics.profit > 0 ? 'text-gray-800' : 'text-red-500'}`}>
                        {currency}{metrics.profit.toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Donut Chart */}
            <div className="h-48 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%" cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${currency}${value}`} />
                        <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Text in Donut */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
                   <div className="text-center">
                        <p className="text-xs text-gray-400 font-bold">MARGIN</p>
                        <p className="text-xl font-bold text-gray-700">{metrics.margin}%</p>
                   </div>
                </div>
            </div>

            {/* Break Even Insight */}
            <div className="mt-4 p-3 bg-blue-100 rounded-lg text-blue-800 text-sm flex items-start gap-2">
                <TrendingUp className="w-5 h-5 flex-shrink-0" />
                <p>
                    To break even, your ROAS needs to be at least <strong>{metrics.breakEvenRoas}x</strong> based on your product costs.
                </p>
            </div>
            
            {/* Action Button */}
            <button className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition">
                <Download className="w-4 h-4" /> Download Report
            </button>

        </div>
      </div>
    </div>
  );
}