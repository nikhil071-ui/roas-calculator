"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import { Download, Calculator, DollarSign, TrendingUp, AlertTriangle, RefreshCcw, ShoppingBag, BarChart3, RotateCcw } from "lucide-react";

type RoasResults = {
  roas: string;
  profit: string;
  profitMargin: string;
  breakEven: string;
  cpa: string;
  aov: string;
  isProfitable: boolean;
};

export default function RoasClient() {
  // Inputs
  const [adSpend, setAdSpend] = useState<number | string>("");
  const [revenue, setRevenue] = useState<number | string>("");
  const [productCost, setProductCost] = useState<number | string>("");
  const [orders, setOrders] = useState<number | string>("");

  const [results, setResults] = useState<RoasResults | null>(null);

  // --- CLEAR FUNCTION ---
  const resetFields = () => {
    setAdSpend("");
    setRevenue("");
    setProductCost("");
    setOrders("");
    setResults(null);
  };

  const calculateROAS = () => {
    const spend = Number(adSpend) || 0;
    const rev = Number(revenue) || 0;
    const cost = Number(productCost) || 0;
    const orderCount = Number(orders) || 0;

    if (spend === 0) return;

    const roas = rev / spend;
    const profit = rev - spend - cost;
    const breakEvenRoas = cost > 0 && rev - cost > 0 ? rev / (rev - cost) : null;
    const profitMargin = rev > 0 ? (profit / rev) * 100 : 0;
    
    const cpa = orderCount > 0 ? spend / orderCount : 0; 
    const aov = orderCount > 0 ? rev / orderCount : 0;   

    setResults({
      roas: roas.toFixed(2),
      profit: profit.toFixed(2),
      profitMargin: profitMargin.toFixed(1),
      breakEven: breakEvenRoas ? breakEvenRoas.toFixed(2) : "N/A",
      cpa: cpa.toFixed(2),
      aov: aov.toFixed(2),
      isProfitable: profit > 0
    });
  };

  // --- PDF GENERATOR ---
  const downloadReport = () => {
    if (!results) {
        alert("Please calculate your ROAS first!");
        return;
    }

    const doc = new jsPDF();
    const date = new Date().toLocaleDateString();
    const width = doc.internal.pageSize.getWidth();

    // 1. BRANDED HEADER
    doc.setFillColor(30, 58, 138); 
    doc.rect(0, 0, width, 40, 'F'); 
    
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255); 
    doc.setFont("helvetica", "bold");
    doc.text("ROAS Performance Report", 20, 20);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Generated on: ${date}`, 20, 30);
    doc.text("via ROAS Tools", width - 40, 30, { align: 'right' });

    // 2. SUMMARY BOX
    doc.setDrawColor(200, 200, 200);
    doc.setFillColor(248, 250, 252); 
    doc.roundedRect(15, 50, width - 30, 45, 3, 3, 'FD'); 

    // ROAS Score
    doc.setTextColor(100);
    doc.setFontSize(10);
    doc.text("ROAS SCORE", 30, 65);
    doc.setTextColor(30, 58, 138); 
    doc.setFontSize(28);
    doc.setFont("helvetica", "bold");
    doc.text(`${results.roas}x`, 30, 80);

    // Net Profit
    doc.setTextColor(100);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("NET PROFIT", 110, 65);
    
    doc.setFontSize(28);
    doc.setFont("helvetica", "bold");
    if(results.isProfitable) {
        doc.setTextColor(22, 163, 74); 
        doc.text(`+$${results.profit}`, 110, 80);
    } else {
        doc.setTextColor(220, 38, 38); 
        doc.text(`$${results.profit}`, 110, 80);
    }

    // 3. METRICS
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Key Metrics Breakdown", 20, 115);
    doc.setLineWidth(0.5);
    doc.line(20, 118, width - 20, 118); 

    let y = 135;
    const col1 = 30;
    const col2 = 110;

    // Row 1
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text("CPA (Cost Per Acquisition)", col1, y);
    doc.text("Average Order Value (AOV)", col2, y);
    y += 8;
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.text(`$${results.cpa}`, col1, y);
    doc.text(`$${results.aov}`, col2, y);

    y += 20; 

    // Row 2
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.setFont("helvetica", "normal");
    doc.text("Profit Margin", col1, y);
    doc.text("Break-Even ROAS", col2, y);
    y += 8;
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.setFont("helvetica", "bold");
    doc.text(`${results.profitMargin}%`, col1, y);
    doc.text(results.breakEven === "N/A" ? results.breakEven : `${results.breakEven}x`, col2, y);

    // 4. INPUTS
    y += 30;
    doc.setFillColor(241, 245, 249); 
    doc.rect(0, y, width, 40, 'F');
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("CAMPAIGN INPUTS:", 20, y + 15);
    
    doc.setTextColor(50);
    doc.text(`Ad Spend: $${adSpend}`, 60, y + 15);
    doc.text(`Revenue: $${revenue}`, 120, y + 15);
    
    doc.text(`Product Cost: $${productCost || 0}`, 60, y + 25);
    doc.text(`Total Orders: ${orders || 0}`, 120, y + 25);

    // 5. FOOTER
    doc.setFontSize(9);
    doc.setTextColor(150);
    doc.text("This report was generated using the Free ROAS Calculator.", width / 2, 280, { align: 'center' });
    doc.text("https://roas-calculator.tech", width / 2, 285, { align: 'center' });

    doc.save("ROAS_Professional_Report.pdf");
  };

  return (
    <div className="space-y-8">
      
      {/* --- AD REMOVED FROM HERE FOR SAFETY --- */}

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Modern Header */}
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Calculator size={120} />
            </div>
            <h1 className="text-3xl font-extrabold flex items-center gap-3 relative z-10">
                <Calculator className="text-blue-400" /> 
                ROAS Calculator <span className="text-sm bg-blue-600 px-2 py-1 rounded text-white font-normal">PRO</span>
            </h1>
            <p className="text-slate-300 text-sm mt-2 relative z-10 max-w-lg">
                Enter your campaign numbers below. We will calculate your true profit, CPA, AOV, and Break-Even point instantly.
            </p>
        </div>

        <div className="p-6 md:p-10 grid lg:grid-cols-2 gap-12">
            
            {/* LEFT: INPUTS */}
            <div className="space-y-6">
                
                {/* ROW 1 */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Ad Spend</label>
                        <div className="relative group">
                            <DollarSign className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition" size={20} />
                            <input 
                                type="number" 
                                value={adSpend}
                                onChange={(e) => setAdSpend(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Revenue</label>
                        <div className="relative group">
                            <TrendingUp className="absolute left-4 top-4 text-slate-400 group-focus-within:text-green-600 transition" size={20} />
                            <input 
                                type="number" 
                                value={revenue}
                                onChange={(e) => setRevenue(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product Costs</label>
                        <div className="relative group">
                            <AlertTriangle className="absolute left-4 top-4 text-slate-400 group-focus-within:text-orange-500 transition" size={20} />
                            <input 
                                type="number" 
                                value={productCost}
                                onChange={(e) => setProductCost(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Orders</label>
                        <div className="relative group">
                            <ShoppingBag className="absolute left-4 top-4 text-slate-400 group-focus-within:text-purple-500 transition" size={20} />
                            <input 
                                type="number" 
                                value={orders}
                                onChange={(e) => setOrders(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0"
                            />
                        </div>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 pt-4">
                    <button 
                        onClick={resetFields}
                        className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition border border-transparent hover:border-slate-200 flex items-center gap-2"
                        title="Clear all fields"
                    >
                        <RotateCcw size={20} />
                    </button>
                    <button 
                        onClick={calculateROAS}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                    >
                        <RefreshCcw size={22} /> Calculate Results
                    </button>
                </div>
            </div>

            {/* RIGHT: DASHBOARD RESULTS */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center min-h-[400px]">
                {!results ? (
                    <div className="text-center text-slate-400">
                        <BarChart3 size={64} className="mx-auto mb-6 opacity-20" />
                        <h3 className="text-xl font-bold text-slate-500 mb-2">Ready to Analyze</h3>
                        <p className="text-sm">Enter your campaign data on the left to generate your profit report.</p>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                        
                        {/* HERO METRICS */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center transform transition hover:scale-105">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">ROAS Score</p>
                                <p className="text-4xl font-black text-blue-600">{results.roas}x</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center transform transition hover:scale-105">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Net Profit</p>
                                <p className={`text-4xl font-black ${results.isProfitable ? "text-green-500" : "text-red-500"}`}>
                                    ${results.profit}
                                </p>
                            </div>
                        </div>

                        {/* DETAILED METRICS GRID */}
                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                            <h4 className="text-xs font-bold text-slate-400 uppercase mb-4 border-b pb-2">Campaign Health</h4>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 text-sm font-medium">CPA</span>
                                    <span className="font-bold text-slate-900">${results.cpa}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 text-sm font-medium">Order Value</span>
                                    <span className="font-bold text-slate-900">${results.aov}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 text-sm font-medium">Margin</span>
                                    <span className={`font-bold ${results.isProfitable ? "text-green-600" : "text-red-500"}`}>
                                        {results.profitMargin}%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-600 text-sm font-medium">Break-Even</span>
                                    <span className="font-bold text-orange-600">
                                      {results.breakEven === "N/A" ? results.breakEven : `${results.breakEven}x`}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* PDF BUTTON */}
                        <button 
                            onClick={downloadReport}
                            className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-lg hover:shadow-slate-500/20"
                        >
                            <Download size={20} /> Download PDF Report
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
