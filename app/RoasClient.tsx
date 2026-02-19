"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Calculator, DollarSign, TrendingUp, AlertTriangle, RefreshCcw, ShoppingBag, BarChart3, RotateCcw, Share2 } from "lucide-react";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";
import {
  appendHistoryForEmail,
  clearActiveSubscriberEmail,
  getActiveSubscriberEmail,
  getHistoryForEmail,
  type LocalHistoryEntry,
} from "@/app/lib/local-user";

type RoasResults = {
  roas: string;
  profit: string;
  profitMargin: string;
  breakEven: string;
  cpa: string;
  aov: string;
  isProfitable: boolean;
};

type ScenarioRow = {
  title: string;
  detail: string;
  action: "Scale" | "Hold" | "Pause";
  projectedRoas: number | null;
};

type IndustryKey = "dtc" | "saas" | "leadgen";

const INDUSTRY_BENCHMARKS: Record<
  IndustryKey,
  { label: string; typicalMin: number; typicalMax: number; strongMin: number }
> = {
  dtc: { label: "DTC / eCommerce", typicalMin: 1.8, typicalMax: 3.2, strongMin: 3.5 },
  saas: { label: "SaaS", typicalMin: 1.7, typicalMax: 3.0, strongMin: 3.2 },
  leadgen: { label: "Lead Gen", typicalMin: 2.5, typicalMax: 5.0, strongMin: 6.0 },
};

function getDecisionLabel(projectedRoas: number, breakEven: number | null): "Scale" | "Hold" | "Pause" {
  if (!breakEven || !Number.isFinite(breakEven)) return "Hold";
  if (projectedRoas >= breakEven * 1.2) return "Scale";
  if (projectedRoas <= breakEven * 0.9) return "Pause";
  return "Hold";
}

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
  const [historyStatus, setHistoryStatus] = useState<"idle" | "sent">("idle");
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showExampleReport, setShowExampleReport] = useState(false);
  const [industryKey, setIndustryKey] = useState<IndustryKey>("dtc");
  const [activeEmail, setActiveEmail] = useState<string | null>(null);
  const [historyEntries, setHistoryEntries] = useState<LocalHistoryEntry[]>([]);
  const calculateButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyCta(window.scrollY > 280);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const syncSubscriberState = () => {
      const email = getActiveSubscriberEmail();
      setActiveEmail(email);
      if (email) {
        setHistoryEntries(getHistoryForEmail(email));
      } else {
        setHistoryEntries([]);
      }
    };

    syncSubscriberState();
    window.addEventListener("storage", syncSubscriberState);
    window.addEventListener("subscriber-email-updated", syncSubscriberState);
    return () => {
      window.removeEventListener("storage", syncSubscriberState);
      window.removeEventListener("subscriber-email-updated", syncSubscriberState);
    };
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
    setResults(null);
    setValidationError("");
    setShowExampleReport(false);
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
    setShowExampleReport(false);
  };

  const showSampleReport = () => {
    trackCalculatorStart();

    const sample = {
      spend: 2500,
      revenueValue: 9000,
      cost: 3400,
      orderCount: 90,
    };

    const roas = sample.revenueValue / sample.spend;
    const profit = sample.revenueValue - sample.spend - sample.cost;
    const breakEvenRoas = sample.revenueValue > 0
      ? (sample.cost === 0 ? 1 : sample.revenueValue - sample.cost > 0 ? sample.revenueValue / (sample.revenueValue - sample.cost) : null)
      : null;
    const profitMargin = sample.revenueValue > 0 ? (profit / sample.revenueValue) * 100 : 0;
    const cpa = sample.orderCount > 0 ? sample.spend / sample.orderCount : 0;
    const aov = sample.orderCount > 0 ? sample.revenueValue / sample.orderCount : 0;

    setAdSpend(String(sample.spend));
    setRevenue(String(sample.revenueValue));
    setProductCost(String(sample.cost));
    setOrders(String(sample.orderCount));
    setValidationError("");
    setShareStatus("idle");
    setShowExampleReport(true);
    setResults({
      roas: roas.toFixed(2),
      profit: profit.toFixed(2),
      profitMargin: profitMargin.toFixed(1),
      breakEven: breakEvenRoas ? breakEvenRoas.toFixed(2) : "N/A",
      cpa: cpa.toFixed(2),
      aov: aov.toFixed(2),
      isProfitable: profit > 0,
    });

    void sendAnalyticsEvent("example_report_view", {
      calculator_type: "roas",
      example_type: "shopify_dtc",
      source: "roas_workspace",
    });
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
    setShowExampleReport(false);

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

    if (activeEmail) {
      const entry: LocalHistoryEntry = {
        timestamp: new Date().toISOString(),
        adSpend: spend,
        revenue: rev,
        productCost: cost,
        orders: orderCount,
        roas: roas.toFixed(2),
        profit: profit.toFixed(2),
        breakEven: breakEvenRoas ? breakEvenRoas.toFixed(2) : "N/A",
        cpa: cpa.toFixed(2),
        aov: aov.toFixed(2),
      };
      appendHistoryForEmail(activeEmail, entry);
      setHistoryEntries(getHistoryForEmail(activeEmail));
    }
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

  const downloadHistory = () => {
    if (!activeEmail || historyEntries.length === 0) return;
    const rows = [
      "timestamp,ad_spend,revenue,product_cost,orders,roas,profit,break_even,cpa,aov",
      ...historyEntries.map((item) =>
        [
          item.timestamp,
          item.adSpend,
          item.revenue,
          item.productCost,
          item.orders,
          item.roas,
          item.profit,
          item.breakEven,
          item.cpa,
          item.aov,
        ].join(",")
      ),
    ];
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `roas_history_${activeEmail.replace(/[@.]/g, "_")}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(fileUrl);
  };

  const sendHistoryToEmail = () => {
    if (!activeEmail || historyEntries.length === 0) return;
    const preview = historyEntries
      .slice(0, 10)
      .map((item) => `${item.timestamp} | ROAS ${item.roas}x | Profit $${item.profit}`)
      .join("\n");
    const subject = encodeURIComponent("Your ROAS History Export");
    const body = encodeURIComponent(
      `Hi,\n\nHere is your latest ROAS history preview:\n\n${preview}\n\nGenerated from ROAS Tools.`
    );
    window.location.href = `mailto:${activeEmail}?subject=${subject}&body=${body}`;
    setHistoryStatus("sent");
  };

  const resultsRoas = results ? Number(results.roas) : null;
  const resultsBreakEven = results && results.breakEven !== "N/A" ? Number(results.breakEven) : null;
  const benchmark = INDUSTRY_BENCHMARKS[industryKey];

  const industryComparison = (() => {
    if (!resultsRoas || !Number.isFinite(resultsRoas)) return null;

    if (resultsRoas < benchmark.typicalMin) {
      return {
        label: "Below industry typical",
        tone: "bg-red-50 border-red-200 text-red-800",
      };
    }
    if (resultsRoas <= benchmark.typicalMax) {
      return {
        label: "Within industry typical",
        tone: "bg-amber-50 border-amber-200 text-amber-800",
      };
    }
    if (resultsRoas >= benchmark.strongMin) {
      return {
        label: "Above strong industry range",
        tone: "bg-emerald-50 border-emerald-200 text-emerald-800",
      };
    }
    return {
      label: "Above typical range",
      tone: "bg-blue-50 border-blue-200 text-blue-800",
    };
  })();

  const scenarioRows: ScenarioRow[] = (() => {
    if (!resultsRoas) return [];

    const spend = Number(adSpend) || 0;
    const rev = Number(revenue) || 0;
    const cost = Number(productCost) || 0;
    const orderCount = Number(orders) || 0;
    const aov = orderCount > 0 ? rev / orderCount : 0;
    const costPerOrder = orderCount > 0 ? cost / orderCount : 0;

    const doubledSpend = spend * 2;
    const doubledRevenue = rev * 2;
    const doubledCost = cost * 2;
    const doubledRoas = doubledSpend > 0 ? doubledRevenue / doubledSpend : 0;
    const doubledProfit = doubledRevenue - doubledSpend - doubledCost;

    const roasDrop = resultsRoas * 0.9;
    const roasDropRevenue = spend * roasDrop;
    const roasDropProfit = roasDropRevenue - spend - cost;

    const cacIncreaseRow = (() => {
      if (orderCount <= 0 || aov <= 0) {
        return {
          title: "If CAC rises 15%",
          detail: "Add orders to model this scenario.",
          action: "Hold" as const,
          projectedRoas: null,
        };
      }
      const projectedOrders = orderCount / 1.15;
      const projectedRevenue = projectedOrders * aov;
      const projectedCost = projectedOrders * costPerOrder;
      const projectedRoas = spend > 0 ? projectedRevenue / spend : 0;
      const projectedProfit = projectedRevenue - spend - projectedCost;
      const action = getDecisionLabel(projectedRoas, resultsBreakEven);
      return {
        title: "If CAC rises 15%",
        detail: `ROAS ${projectedRoas.toFixed(2)}x | Profit $${projectedProfit.toFixed(0)}`,
        action,
        projectedRoas,
      };
    })();

    return [
      {
        title: "If budget doubles",
        detail: `ROAS ${doubledRoas.toFixed(2)}x | Profit $${doubledProfit.toFixed(0)}`,
        action: getDecisionLabel(doubledRoas, resultsBreakEven),
        projectedRoas: doubledRoas,
      },
      cacIncreaseRow,
      {
        title: "If ROAS drops 10%",
        detail: `ROAS ${roasDrop.toFixed(2)}x | Profit $${roasDropProfit.toFixed(0)}`,
        action: getDecisionLabel(roasDrop, resultsBreakEven),
        projectedRoas: roasDrop,
      },
    ];
  })();

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
                        <button
                            type="button"
                            onClick={showExampleReport ? resetFields : showSampleReport}
                            className="px-3 py-2 rounded-lg bg-amber-50 border border-amber-300 text-amber-900 text-sm font-semibold hover:bg-amber-100 transition"
                        >
                            {showExampleReport ? "Use Blank Inputs" : "See Example Report"}
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">
                      Loads sample inputs instantly so you can preview output before entering your own numbers.
                    </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <label htmlFor="industry-benchmark" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Benchmark Layer
                    </label>
                    <select
                      id="industry-benchmark"
                      value={industryKey}
                      onChange={(event) => setIndustryKey(event.target.value as IndustryKey)}
                      className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                    >
                      <option value="dtc">DTC / eCommerce</option>
                      <option value="saas">SaaS</option>
                      <option value="leadgen">Lead Generation</option>
                    </select>
                    <p className="text-xs text-slate-500 mt-2">
                      Compare your ROAS to {benchmark.label} ranges ({benchmark.typicalMin.toFixed(1)}x-{benchmark.typicalMax.toFixed(1)}x typical).
                    </p>
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
                        {showExampleReport ? (
                          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                            <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Example Report Mode</p>
                            <p className="text-sm text-amber-800 mt-1">These are preloaded sample inputs to preview the output format.</p>
                          </div>
                        ) : null}
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
                                {industryComparison ? (
                                  <p className={`mt-2 inline-flex rounded-full border px-2 py-1 text-[11px] font-semibold ${industryComparison.tone}`}>
                                    Compare to industry: {industryComparison.label}
                                  </p>
                                ) : null}
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

                        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                            <h4 className="text-xs font-bold text-slate-400 uppercase mb-4 border-b pb-2">Scenario Modeling</h4>
                            <div className="space-y-3">
                              {scenarioRows.map((scenario) => (
                                <div key={scenario.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                  <div className="flex items-center justify-between gap-3">
                                    <p className="text-sm font-semibold text-slate-900">{scenario.title}</p>
                                    <span
                                      className={`inline-flex rounded-full px-2 py-1 text-xs font-bold ${
                                        scenario.action === "Scale"
                                          ? "bg-emerald-100 text-emerald-800"
                                          : scenario.action === "Pause"
                                          ? "bg-red-100 text-red-800"
                                          : "bg-amber-100 text-amber-800"
                                      }`}
                                    >
                                      {scenario.action}
                                    </span>
                                  </div>
                                  <p className="text-xs text-slate-600 mt-1">{scenario.detail}</p>
                                  <details className="mt-2">
                                    <summary className="cursor-pointer text-xs font-semibold text-blue-700 hover:text-blue-800">
                                      Why this decision?
                                    </summary>
                                    <div className="mt-2 rounded-md border border-slate-200 bg-white p-2 text-xs text-slate-600 space-y-1">
                                      {scenario.projectedRoas === null ? (
                                        <p>
                                          Scenario math requires order-based inputs. Add orders to compute projected ROAS for CAC change.
                                        </p>
                                      ) : resultsBreakEven ? (
                                        <>
                                          <p>Projected ROAS: {scenario.projectedRoas.toFixed(2)}x</p>
                                          <p>Break-even ROAS: {resultsBreakEven.toFixed(2)}x</p>
                                          <p>Scale if projected ROAS &gt;= {(resultsBreakEven * 1.2).toFixed(2)}x</p>
                                          <p>Pause if projected ROAS &lt;= {(resultsBreakEven * 0.9).toFixed(2)}x</p>
                                          <p>Otherwise hold and optimize.</p>
                                        </>
                                      ) : (
                                        <p>
                                          Break-even ROAS is unavailable from current inputs, so guidance defaults to Hold until margin assumptions are clear.
                                        </p>
                                      )}
                                    </div>
                                  </details>
                                </div>
                              ))}
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
                        {activeEmail ? (
                          <div className="rounded-xl border border-slate-200 bg-white p-4">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <p className="text-sm text-slate-700">
                                Signed in as <strong>{activeEmail}</strong>. Your result history is stored locally for this email.
                              </p>
                              <button
                                type="button"
                                onClick={() => {
                                  clearActiveSubscriberEmail();
                                  setActiveEmail(null);
                                  setHistoryEntries([]);
                                  window.dispatchEvent(new Event("subscriber-email-updated"));
                                }}
                                className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                              >
                                Logout
                              </button>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={downloadHistory}
                                className="rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-900"
                              >
                                Download History CSV
                              </button>
                              <button
                                type="button"
                                onClick={sendHistoryToEmail}
                                className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-100"
                              >
                                Send to This Email
                              </button>
                            </div>
                            {historyStatus === "sent" ? (
                              <p className="mt-2 text-xs text-emerald-700">Email draft opened in your mail app.</p>
                            ) : null}
                            {historyEntries.length > 0 ? (
                              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                                {historyEntries.slice(0, 5).map((item) => (
                                  <li key={`${item.timestamp}-${item.roas}`}>
                                    {new Date(item.timestamp).toLocaleString()} | ROAS {item.roas}x | Profit ${item.profit}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="mt-2 text-xs text-slate-500">No local history yet. Run a calculation to start saving entries.</p>
                            )}
                          </div>
                        ) : null}
                        <EmailCaptureCard
                          source="roas_results"
                          variant="compact"
                          title="Get Weekly Publisher RPM/ROAS Benchmarks"
                          description="Use your results with weekly benchmark ranges to validate break-even risk and next budget move."
                          buttonLabel="Email Me Benchmarks"
                          helperText="Includes 2026 Ad Revenue Benchmark Sheet."
                          className="mt-2"
                        />
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
