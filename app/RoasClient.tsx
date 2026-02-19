"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Calculator, DollarSign, TrendingUp, AlertTriangle, RefreshCcw, ShoppingBag, BarChart3, RotateCcw, Share2 } from "lucide-react";

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
  const [validationError, setValidationError] = useState("");
  const [hasTrackedStart, setHasTrackedStart] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [shareStatus, setShareStatus] = useState<"idle" | "done" | "error">("idle");
  const [showStickyCta, setShowStickyCta] = useState(false);
  const calculateButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyCta(window.scrollY > 280);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sendAnalyticsEvent = async (
    eventName: string,
    params: Record<string, string | number | boolean | null | undefined>,
  ) => {
    const { trackEvent } = await import("@/app/lib/analytics");
    trackEvent(eventName, params);
  };

  const sendServerCompletionLog = (payload: {
    calculator_type: string;
    result_state: string;
    roas_value: number;
    break_even_value: number | null;
  }) => {
    if (typeof window === "undefined") return;
    const consent = window.localStorage.getItem("analytics_consent");
    if (consent !== "granted") return;

    const body = JSON.stringify({
      ...payload,
      event_time: new Date().toISOString(),
    });

    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/analytics/calculator-complete", blob);
      return;
    }

    void fetch("/api/analytics/calculator-complete", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
    });
  };

  const applyPreset = (preset: "ecommerce" | "saas" | "leadgen") => {
    trackCalculatorStart();
    if (preset === "ecommerce") {
      setAdSpend("1000");
      setRevenue("3500");
      setProductCost("1700");
      setOrders("70");
    } else if (preset === "saas") {
      setAdSpend("3000");
      setRevenue("9000");
      setProductCost("1200");
      setOrders("45");
    } else {
      setAdSpend("1500");
      setRevenue("6000");
      setProductCost("900");
      setOrders("30");
    }
    void sendAnalyticsEvent("calculator_preset_selected", {
      calculator_type: "roas",
      preset,
    });
  };

  const scrollToCalculate = () => {
    calculateButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    void sendAnalyticsEvent("cta_click_calculate_sticky", {
      calculator_type: "roas",
      page_type: "home_or_slug",
    });
  };

  // --- CLEAR FUNCTION ---
  const resetFields = () => {
    setAdSpend("");
    setRevenue("");
    setProductCost("");
    setOrders("");
    setResults(null);
    setValidationError("");
  };

  const calculateROAS = () => {
    const spend = Number(adSpend) || 0;
    const rev = Number(revenue) || 0;
    const cost = Number(productCost) || 0;
    const orderCount = Number(orders) || 0;

    if (spend === 0) {
      setValidationError("Add ad spend greater than 0 to calculate ROAS.");
      return;
    }
    setValidationError("");

    const roas = rev / spend;
    const profit = rev - spend - cost;
    const breakEvenRoas = rev > 0 ? (cost === 0 ? 1 : rev - cost > 0 ? rev / (rev - cost) : null) : null;
    const profitMargin = rev > 0 ? (profit / rev) * 100 : 0;
    
    const cpa = orderCount > 0 ? spend / orderCount : 0; 
    const aov = orderCount > 0 ? rev / orderCount : 0;   

    const resultState =
      profit > 0 ? "profitable" : profit < 0 ? "unprofitable" : "break_even";
    void sendAnalyticsEvent("calculator_submit", {
      calculator_type: "roas",
      has_optional_costs: cost > 0,
      result_state: resultState,
    });
    void sendAnalyticsEvent("calculator_complete", {
      calculator_type: "roas",
      result_state: resultState,
      roas_value: Number(roas.toFixed(2)),
      break_even_value: breakEvenRoas ? Number(breakEvenRoas.toFixed(2)) : null,
    });
    sendServerCompletionLog({
      calculator_type: "roas",
      result_state: resultState,
      roas_value: Number(roas.toFixed(2)),
      break_even_value: breakEvenRoas ? Number(breakEvenRoas.toFixed(2)) : null,
    });

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

  const trackCalculatorStart = () => {
    if (hasTrackedStart) return;
    const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
    const isRoasSlug = pathname.startsWith("/roas/");
    const slug = isRoasSlug ? pathname.replace("/roas/", "") : "home";
    void sendAnalyticsEvent("calculator_start", {
      page_type: isRoasSlug ? "roas_slug" : "home",
      calculator_type: "roas",
      slug,
    });
    setHasTrackedStart(true);
  };

  // --- REPORT DOWNLOAD ---
  const downloadReport = async () => {
    if (!results) {
        alert("Please calculate your ROAS first!");
        return;
    }
    void sendAnalyticsEvent("result_export_click", {
      calculator_type: "roas",
      export_type: "txt",
    });
    setExporting(true);
    try {
      const generatedAt = new Date().toISOString();
      const rows = [
        "ROAS Performance Report",
        `Generated at: ${generatedAt}`,
        "Source: https://roas-calculator.tech/",
        "",
        "RESULTS",
        `ROAS: ${results.roas}x`,
        `Net Profit: $${results.profit}`,
        `Profit Margin: ${results.profitMargin}%`,
        `Break-even ROAS: ${results.breakEven === "N/A" ? "N/A" : `${results.breakEven}x`}`,
        `CPA: $${results.cpa}`,
        `AOV: $${results.aov}`,
        `Decision State: ${results.isProfitable ? "profitable" : "not_profitable"}`,
        "",
        "INPUTS",
        `Ad Spend: ${adSpend || 0}`,
        `Revenue: ${revenue || 0}`,
        `Product Cost: ${productCost || 0}`,
        `Orders: ${orders || 0}`,
      ];

      const blob = new Blob([rows.join("\n")], { type: "text/plain;charset=utf-8" });
      const fileUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "roas_report.txt";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(fileUrl);
    } finally {
      setExporting(false);
    }
  };

  const copyShareSummary = async () => {
    if (!results) return;

    const shareText = [
      `ROAS: ${results.roas}x`,
      `Net Profit: $${results.profit}`,
      `Break-even: ${results.breakEven === "N/A" ? "N/A" : `${results.breakEven}x`}`,
      `Calculated with ROAS Tools: https://roas-calculator.tech/`,
    ].join(" | ");

    try {
      await navigator.clipboard.writeText(shareText);
      setShareStatus("done");
      void sendAnalyticsEvent("result_share_click", {
        calculator_type: "roas",
        share_type: "clipboard",
      });
    } catch {
      setShareStatus("error");
    }
  };

  return (
    <div className="space-y-8">
      
      {/* --- AD REMOVED FROM HERE FOR SAFETY --- */}

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Modern Header */}
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Calculator size={120} aria-hidden="true" focusable="false" />
            </div>
            <h2 className="text-3xl font-extrabold flex items-center gap-3 relative z-10">
                <Calculator className="text-blue-400" aria-hidden="true" focusable="false" /> 
                ROAS Calculator <span className="text-sm bg-blue-600 px-2 py-1 rounded text-white font-normal">Workspace</span>
            </h2>
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
                        <label htmlFor="ad-spend" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Ad Spend</label>
                        <div className="relative group">
                            <DollarSign className="absolute left-4 top-4 text-slate-400 group-focus-within:text-blue-600 transition" size={20} aria-hidden="true" focusable="false" />
                            <input 
                                id="ad-spend"
                                type="number" 
                                step="any"
                                value={adSpend}
                                onChange={(e) => setAdSpend(e.target.value)}
                                onFocus={trackCalculatorStart}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0.00"
                                aria-describedby="ad-spend-help"
                            />
                        </div>
                        <p id="ad-spend-help" className="text-xs text-slate-500">Total platform spend for the selected date range.</p>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="total-revenue" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Revenue</label>
                        <div className="relative group">
                            <TrendingUp className="absolute left-4 top-4 text-slate-400 group-focus-within:text-green-600 transition" size={20} aria-hidden="true" focusable="false" />
                            <input 
                                id="total-revenue"
                                type="number" 
                                step="any"
                                value={revenue}
                                onChange={(e) => setRevenue(e.target.value)}
                                onFocus={trackCalculatorStart}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0.00"
                                aria-describedby="total-revenue-help"
                            />
                        </div>
                        <p id="total-revenue-help" className="text-xs text-slate-500">Attributed revenue from campaigns in the same period.</p>
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="product-costs" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Product Costs</label>
                        <div className="relative group">
                            <AlertTriangle className="absolute left-4 top-4 text-slate-400 group-focus-within:text-orange-500 transition" size={20} aria-hidden="true" focusable="false" />
                            <input 
                                id="product-costs"
                                type="number" 
                                step="any"
                                value={productCost}
                                onChange={(e) => setProductCost(e.target.value)}
                                onFocus={trackCalculatorStart}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0.00"
                                aria-describedby="product-costs-help"
                            />
                        </div>
                        <p id="product-costs-help" className="text-xs text-slate-500">Optional COGS and fulfillment cost for net profit checks.</p>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="total-orders" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Orders</label>
                        <div className="relative group">
                            <ShoppingBag className="absolute left-4 top-4 text-slate-400 group-focus-within:text-purple-500 transition" size={20} aria-hidden="true" focusable="false" />
                            <input 
                                id="total-orders"
                                type="number" 
                                step="1"
                                value={orders}
                                onChange={(e) => setOrders(e.target.value)}
                                onFocus={trackCalculatorStart}
                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 outline-none transition-all font-extrabold text-xl text-gray-900 placeholder-gray-300"
                                placeholder="0"
                                aria-describedby="total-orders-help"
                            />
                        </div>
                        <p id="total-orders-help" className="text-xs text-slate-500">Optional. Used to calculate CPA and average order value.</p>
                    </div>
              </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Quick Presets</p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => applyPreset("ecommerce")}
                            className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm font-semibold hover:bg-slate-100 transition"
                        >
                            eCom
                        </button>
                        <button
                            type="button"
                            onClick={() => applyPreset("saas")}
                            className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm font-semibold hover:bg-slate-100 transition"
                        >
                            SaaS
                        </button>
                        <button
                            type="button"
                            onClick={() => applyPreset("leadgen")}
                            className="px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm font-semibold hover:bg-slate-100 transition"
                        >
                            Lead Gen
                        </button>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 pt-4">
                    <button 
                        onClick={resetFields}
                        className="px-4 py-4 rounded-xl font-bold text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition border border-transparent hover:border-slate-200 flex items-center gap-2"
                        title="Clear all fields"
                        aria-label="Clear all calculator fields"
                    >
                        <RotateCcw size={20} aria-hidden="true" focusable="false" />
                        <span className="text-sm">Reset</span>
                    </button>
                    <button 
                        ref={calculateButtonRef}
                        onClick={calculateROAS}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                        aria-label="Calculate ROAS results and profitability metrics"
                    >
                        <RefreshCcw size={22} aria-hidden="true" focusable="false" /> Calculate Results
                    </button>
                </div>
                {validationError ? (
                  <p className="text-xs text-red-600" role="alert">{validationError}</p>
                ) : null}
                <p className="text-xs text-slate-500">
                  No signup required. Your inputs stay in your browser and are not sent to our server.
                </p>
            </div>

            {/* RIGHT: DASHBOARD RESULTS */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center min-h-[400px]">
                {!results ? (
                    <div className="text-center text-slate-400">
                        <BarChart3 size={64} className="mx-auto mb-6 opacity-20" aria-hidden="true" focusable="false" />
                        <h3 className="text-xl font-bold text-slate-500 mb-2">Ready to Analyze</h3>
                        <p className="text-sm">Enter your campaign data on the left to generate your profit report.</p>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Decision Summary</p>
                            <p className="text-sm text-slate-700">
                              {results.breakEven !== "N/A" && Number(results.roas) >= Number(results.breakEven) * 1.2
                                ? "Scale gradually: ROAS is materially above break-even."
                                : results.breakEven !== "N/A" && Number(results.roas) <= Number(results.breakEven) * 0.9
                                ? "Pause or cap spend: ROAS is below break-even threshold."
                                : "Hold and optimize: ROAS is near break-even, improve conversion and AOV first."}
                            </p>
                        </div>
                        
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

                        <div className="grid sm:grid-cols-2 gap-3">
                          <button
                              onClick={downloadReport}
                              disabled={exporting}
                              className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-lg hover:shadow-slate-500/20"
                              aria-label="Download campaign results as a text report"
                          >
                              <Download size={20} aria-hidden="true" focusable="false" /> {exporting ? "Preparing Report..." : "Download Report"}
                          </button>
                          <button
                              onClick={copyShareSummary}
                              className="w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition"
                              aria-label="Copy result summary for sharing"
                          >
                              <Share2 size={20} aria-hidden="true" focusable="false" /> Copy Summary
                          </button>
                        </div>
                        {shareStatus === "done" ? <p className="text-xs text-green-700">Summary copied to clipboard.</p> : null}
                        {shareStatus === "error" ? <p className="text-xs text-red-600">Could not copy summary. Please try again.</p> : null}
                    </div>
                )}
            </div>
        </div>
      </div>
      {showStickyCta ? (
        <>
          <button
            type="button"
            onClick={scrollToCalculate}
            className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
            aria-label="Scroll to calculator action button"
          >
            Calculate ROAS
          </button>
          <button
            type="button"
            onClick={scrollToCalculate}
            className="hidden md:inline-flex fixed bottom-6 right-6 z-40 bg-blue-600 text-white font-bold px-5 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
            aria-label="Scroll to calculator action button"
          >
            Calculate ROAS
          </button>
        </>
      ) : null}
    </div>
  );
}
