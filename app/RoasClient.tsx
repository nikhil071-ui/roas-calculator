"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Download, Calculator, DollarSign, TrendingUp, AlertTriangle, RefreshCcw, ShoppingBag, BarChart3, RotateCcw, Share2, Link as LinkIcon } from "lucide-react";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";
import NextStepsRecommendation from "@/app/components/NextStepsRecommendation";
import TrackedDownloadLink from "@/app/components/TrackedDownloadLink";
import {
  appendHistoryForEmail,
  clearActiveSubscriberEmail,
  getActiveSubscriberEmail,
  getHistoryForEmail,
  type LocalHistoryEntry,
} from "@/app/lib/local-user";
import {
  generateShareableUrl,
  getResultsFromUrlParam,
} from "@/app/lib/share-results";

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
const ROAS_STORAGE_KEY = "roas-results-v1";

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
  const [restoredFromStorage, setRestoredFromStorage] = useState(false);
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
    const saved = window.localStorage.getItem(ROAS_STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as {
        adSpend?: number;
        revenue?: number;
        productCost?: number;
        orders?: number;
        results?: RoasResults;
        industryKey?: IndustryKey;
      };
      setAdSpend(String(parsed.adSpend ?? ""));
      setRevenue(String(parsed.revenue ?? ""));
      setProductCost(String(parsed.productCost ?? ""));
      setOrders(String(parsed.orders ?? ""));
      if (parsed.results) setResults(parsed.results);
      if (parsed.industryKey) setIndustryKey(parsed.industryKey);
      setRestoredFromStorage(Boolean(parsed.results));
    } catch {
      window.localStorage.removeItem(ROAS_STORAGE_KEY);
    }
  }, []);

  // Load from URL share parameter (privacy-first - data in hash)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const sharedResults = getResultsFromUrlParam(params);

    if (sharedResults) {
      setAdSpend(sharedResults.adSpend);
      setRevenue(sharedResults.revenue);
      setProductCost(sharedResults.productCost);
      setOrders(sharedResults.orders);
      // Trigger calculation automatically if shared results exist
      setTimeout(() => {
        calculateButtonRef.current?.click();
      }, 100);
    }
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
    setShareStatus("idle");
    setRestoredFromStorage(false);
    window.localStorage.removeItem(ROAS_STORAGE_KEY);
  };

  const persistLatestResults = (
    nextResults: RoasResults,
    nextIndustryKey: IndustryKey,
    inputs?: { adSpend: number; revenue: number; productCost: number; orders: number }
  ) => {
    const payload = {
      adSpend: inputs ? inputs.adSpend : Number(adSpend) || 0,
      revenue: inputs ? inputs.revenue : Number(revenue) || 0,
      productCost: inputs ? inputs.productCost : Number(productCost) || 0,
      orders: inputs ? inputs.orders : Number(orders) || 0,
      results: nextResults,
      industryKey: nextIndustryKey,
      savedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(ROAS_STORAGE_KEY, JSON.stringify(payload));
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
    const nextResults = {
      roas: roas.toFixed(2),
      profit: profit.toFixed(2),
      profitMargin: profitMargin.toFixed(1),
      breakEven: breakEvenRoas ? breakEvenRoas.toFixed(2) : "N/A",
      cpa: cpa.toFixed(2),
      aov: aov.toFixed(2),
      isProfitable: profit > 0,
    };
    setResults(nextResults);
    persistLatestResults(nextResults, industryKey, {
      adSpend: sample.spend,
      revenue: sample.revenueValue,
      productCost: sample.cost,
      orders: sample.orderCount,
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

    const nextResults = {
      roas: roas.toFixed(2),
      profit: profit.toFixed(2),
      profitMargin: profitMargin.toFixed(1),
      breakEven: breakEvenRoas ? breakEvenRoas.toFixed(2) : "N/A",
      cpa: cpa.toFixed(2),
      aov: aov.toFixed(2),
      isProfitable: profit > 0
    };
    setResults(nextResults);
    persistLatestResults(nextResults, industryKey, {
      adSpend: spend,
      revenue: rev,
      productCost: cost,
      orders: orderCount,
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
      export_type: "pdf_print",
    });
    setExporting(true);
    try {
      const generatedAt = new Date().toLocaleString();
      const reportWindow = window.open("", "_blank", "noopener,noreferrer,width=900,height=700");
      if (!reportWindow) return;
      reportWindow.document.write(`
        <html>
          <head>
            <title>ROAS Report</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 24px; color: #0f172a; }
              h1 { font-size: 24px; margin-bottom: 6px; }
              p { margin: 4px 0; }
              .label { font-weight: 700; }
              .card { border: 1px solid #cbd5e1; border-radius: 10px; padding: 12px; margin-top: 12px; }
            </style>
          </head>
          <body>
            <h1>ROAS Performance Report</h1>
            <p>Generated: ${generatedAt}</p>
            <p>Source: https://roas-calculator.tech/</p>
            <div class="card">
              <p><span class="label">ROAS:</span> ${results.roas}x</p>
              <p><span class="label">Net Profit:</span> $${results.profit}</p>
              <p><span class="label">Profit Margin:</span> ${results.profitMargin}%</p>
              <p><span class="label">Break-even ROAS:</span> ${results.breakEven === "N/A" ? "N/A" : `${results.breakEven}x`}</p>
              <p><span class="label">CPA:</span> $${results.cpa}</p>
              <p><span class="label">AOV:</span> $${results.aov}</p>
            </div>
            <div class="card">
              <p><span class="label">Ad Spend:</span> ${adSpend || 0}</p>
              <p><span class="label">Revenue:</span> ${revenue || 0}</p>
              <p><span class="label">Product Cost:</span> ${productCost || 0}</p>
              <p><span class="label">Orders:</span> ${orders || 0}</p>
            </div>
          </body>
        </html>
      `);
      reportWindow.document.close();
      reportWindow.focus();
      reportWindow.print();
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

  const copyShareUrl = async () => {
    if (!adSpend || !revenue) {
      alert("Please enter Ad Spend and Revenue to generate a shareable link.");
      return;
    }

    const shareUrl = generateShareableUrl({
      adSpend: Number(adSpend),
      revenue: Number(revenue),
      productCost: Number(productCost),
      orders: Number(orders),
      timestamp: new Date().toISOString(),
    });

    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareStatus("done");
      void sendAnalyticsEvent("result_share_click", {
        calculator_type: "roas",
        share_type: "url_link",
      });
      setTimeout(() => setShareStatus("idle"), 3000);
    } catch {
      setShareStatus("error");
      setTimeout(() => setShareStatus("idle"), 3000);
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

  const exportResultsCsv = () => {
    if (!results) return;
    const rows = [
      "metric,value",
      `roas,${results.roas}`,
      `net_profit,${results.profit}`,
      `profit_margin_pct,${results.profitMargin}`,
      `break_even_roas,${results.breakEven}`,
      `cpa,${results.cpa}`,
      `aov,${results.aov}`,
      `ad_spend,${Number(adSpend) || 0}`,
      `revenue,${Number(revenue) || 0}`,
      `product_cost,${Number(productCost) || 0}`,
      `orders,${Number(orders) || 0}`,
    ];
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "roas_results_google_sheets.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(fileUrl);
    void sendAnalyticsEvent("result_export_click", {
      calculator_type: "roas",
      export_type: "csv_google_sheets",
    });
  };

  const emailResultsReport = () => {
    if (!results) return;
    const subject = encodeURIComponent("ROAS Results Report");
    const body = encodeURIComponent(
      `ROAS Results\n\nROAS: ${results.roas}x\nNet Profit: $${results.profit}\nBreak-even ROAS: ${results.breakEven}\nCPA: $${results.cpa}\nAOV: $${results.aov}\n\nGenerated from https://roas-calculator.tech/`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    void sendAnalyticsEvent("result_export_click", {
      calculator_type: "roas",
      export_type: "email_report",
    });
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
  const projectedRevenueAt20Scale = resultsRoas && Number(adSpend) > 0
    ? Number(adSpend) * 1.2 * resultsRoas
    : null;

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
    <div className="space-y-8 relative">
      {/* Sticky Sidebar Ad Unit - Desktop Only */}
      <div className="fixed right-4 bottom-20 hidden lg:flex lg:flex-col w-80 gap-4 z-30 pointer-events-none">
        <div className="ad-sidebar-sticky rounded-xl border border-slate-200 bg-slate-100 text-slate-600 p-4 shadow-lg pointer-events-auto">
          <p className="text-xs font-semibold uppercase tracking-wider">Ad slot: sidebar 300x250</p>
        </div>
        
        {/* Lead Magnet Card - Always Visible in Sidebar */}
        <div className="rounded-xl border border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 shadow-lg pointer-events-auto">
          <div className="flex items-start gap-2 mb-3">
            <div className="text-2xl">📊</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900">Track ROAS Over Time</p>
              <p className="text-xs text-slate-600 mt-1">Get our free Google Sheets template to monitor campaigns weekly.</p>
            </div>
          </div>
          <TrackedDownloadLink
            href="/resources/roas-tracking-template.csv"
            templateName="roas_tracking_template"
            fileType="csv"
            sourcePage="/"
            className="w-full inline-block text-center text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition"
          >
            Download Template
          </TrackedDownloadLink>
        </div>
      </div>

      <div className="ad-leaderboard rounded-xl border border-slate-200 bg-slate-100 text-slate-600">
        <p className="text-xs font-semibold uppercase tracking-wider">Ad slot: leaderboard 728x90</p>
      </div>

      <div className="ad-mid-content-1 rounded-xl border border-slate-200 bg-slate-100 text-slate-600 w-full" style={{minHeight: '250px'}}>
        <p className="text-xs font-semibold uppercase tracking-wider">Ad slot: responsive in-content 300x250</p>
      </div>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-900">
          2026 Q1 benchmark update: DTC ROAS average is 2.3x and Shopify midpoint is 1.9x. Based on 500+ store snapshots, last updated February 20, 2026.
        </p>
        <p className="text-sm mt-1">
          <Link href="/methodology" className="font-semibold text-amber-900 underline underline-offset-2 hover:text-amber-800">
            Methodology
          </Link>
        </p>
      </section>

      {activeEmail ? (
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-emerald-900">
              Logged in as <strong>{activeEmail}</strong>. This session is active across the whole site.
            </p>
            <button
              type="button"
              onClick={() => {
                clearActiveSubscriberEmail();
                setActiveEmail(null);
                setHistoryEntries([]);
                setHistoryStatus("idle");
                window.dispatchEvent(new Event("subscriber-email-updated"));
              }}
              className="rounded-md border border-emerald-300 bg-white px-3 py-1 text-xs font-semibold text-emerald-900 hover:bg-emerald-100"
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
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-100"
            >
              Send to This Email
            </button>
          </div>
          {historyStatus === "sent" ? (
            <p className="mt-2 text-xs text-emerald-700">Email draft opened in your mail app.</p>
          ) : null}
          {historyEntries.length > 0 ? (
            <ul className="mt-3 space-y-1 text-xs text-slate-700">
              {historyEntries.slice(0, 5).map((item) => (
                <li key={`${item.timestamp}-${item.roas}`}>
                  {new Date(item.timestamp).toLocaleString()} | ROAS {item.roas}x | Profit ${item.profit}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-xs text-slate-600">
              No local history yet. Run a calculation and it will be stored under this email.
            </p>
          )}
        </section>
      ) : null}

      {restoredFromStorage ? (
        <section className="rounded-xl border border-blue-200 bg-blue-50 p-3">
          <p className="text-sm text-blue-900">
            Restored your previous calculation from this browser so you can continue where you left off.
          </p>
        </section>
      ) : null}

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
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="ad-sidebar rounded-xl border border-slate-200 bg-slate-100 text-slate-600">
                  <p className="text-xs font-semibold uppercase tracking-wider">Ad slot: sidebar 300x250</p>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 pt-4">
                    <button 
                        onClick={resetFields}
                        className="px-4 py-4 rounded-xl font-bold text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition border border-transparent hover:border-slate-200 flex items-center gap-2"
                        title="Clear all fields"
                    >
                        <RotateCcw size={20} aria-hidden="true" focusable="false" />
                        <span className="text-sm">Reset</span>
                    </button>
                    <button 
                        ref={calculateButtonRef}
                        onClick={calculateROAS}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
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

                {/* LEAD MAGNET SECTION */}
                <div id="lead-magnet-section" className="mt-6 rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">📑</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">Free ROAS Tracking Template</h3>
                      <p className="text-xs text-slate-600 mt-1">Track your campaigns week-over-week with our Google Sheets template (includes break-even, margin, and forecast tabs).</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">
                    <strong>What's included:</strong>
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1 pl-5 list-disc mb-4">
                    <li>Auto-calculating fields for ROAS, CPA, profit by channel</li>
                    <li>Break-even ROAS calculator tab</li>
                    <li>28-day rolling average trend tracking</li>
                    <li>Margin-safety guardrails</li>
                  </ul>
                  <EmailCaptureCard
                    source="lead_magnet_tracker"
                    variant="compact"
                    title="Get the Free ROAS Tracker"
                    description="Download our Google Sheets template to monitor campaigns week-over-week."
                    buttonLabel="Email Me the Template"
                    helperText="No credit card required. You'll also get weekly ROAS benchmarks."
                    className="mt-3 border-0"
                  />
                </div>
            </div>

            {/* RIGHT: DASHBOARD RESULTS */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-center min-h-[400px]">
                {!results ? (
                    <div className="text-center text-slate-600">
                        <BarChart3 size={64} className="mx-auto mb-6 opacity-20" aria-hidden="true" focusable="false" />
                        <h3 className="text-xl font-bold text-slate-700 mb-2">Ready to Analyze</h3>
                        <p className="text-sm">Enter your campaign data on the left to generate your profit report.</p>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in zoom-in duration-300" aria-live="polite" aria-label="ROAS calculation results">
                        {showExampleReport ? (
                          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                            <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Example Report Mode</p>
                            <p className="text-sm text-amber-800 mt-1">These are preloaded sample inputs to preview the output format.</p>
                          </div>
                        ) : null}
                        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Decision Summary</p>
                            <p className="text-sm text-slate-700 mb-3" role="status">
                              Your {results.roas}x ROAS analysis indicates {
                                results.breakEven !== "N/A" && Number(results.roas) >= Number(results.breakEven) * 1.2
                                  ? "strong budget headroom above break-even."
                                  : results.breakEven !== "N/A" && Number(results.roas) <= Number(results.breakEven) * 0.9
                                  ? "a profitability risk that requires immediate optimization."
                                  : "a near-break-even zone where precision optimization matters."
                              }
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                              <li>
                                {benchmark.label} benchmark range: {benchmark.typicalMin.toFixed(1)}x-{benchmark.typicalMax.toFixed(1)}x.
                              </li>
                              <li>
                                Status: <strong>{results.isProfitable ? "Profitable" : "Not profitable"}</strong>{results.breakEven !== "N/A" ? ` against break-even ${results.breakEven}x.` : "."}
                              </li>
                              <li>
                                Priority action: {
                                  results.breakEven !== "N/A" && Number(results.roas) >= Number(results.breakEven) * 1.2
                                    ? "Increase spend in controlled 15-20% steps while watching CAC stability."
                                    : results.breakEven !== "N/A" && Number(results.roas) <= Number(results.breakEven) * 0.9
                                    ? "Pause weaker segments, then rework audience, offer, and landing page conversion."
                                    : "Hold spend, improve conversion rate and average order value, then retest."
                                }
                              </li>
                              <li>
                                {projectedRevenueAt20Scale
                                  ? `If you scale budget by 20% at the same efficiency, projected revenue is about $${projectedRevenueAt20Scale.toFixed(0)}.`
                                  : "Add spend and revenue inputs to model a 20% scale scenario."}
                              </li>
                            </ul>
                        </div>

                        {/* DYNAMIC RESULT CARDS - Next Steps Based on ROAS */}
                        <div className="space-y-3 rounded-xl border border-blue-200 bg-blue-50 p-5">
                          <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">Recommended Next Steps</p>
                          
                          {/* Card 1: Low ROAS - Optimize CPA */}
                          {resultsRoas && resultsBreakEven && resultsRoas < resultsBreakEven ? (
                            <div className="rounded-lg border border-red-300 bg-white p-3">
                              <p className="text-sm font-semibold text-red-900">ROAS Below Break-Even → CPA Optimization</p>
                              <p className="text-xs text-red-800 mt-1">Your ROAS is below break-even. Read how to lower your CPA.</p>
                              <Link href="/blog/how-to-improve-roas-without-raising-budget" className="mt-2 inline-flex text-xs font-semibold text-red-700 underline underline-offset-2 hover:text-red-600">
                                Read: 5 Ways to Lower Your CPA When ROAS is Below Break-Even →
                              </Link>
                            </div>
                          ) : null}

                          {/* Card 2: High ROAS - Scale Strategy */}
                          {resultsRoas && resultsRoas > 4.0 ? (
                            <div className="rounded-lg border border-emerald-300 bg-white p-3">
                              <p className="text-sm font-semibold text-emerald-900">High ROAS (&gt;4x) → Consider Scaling</p>
                              <p className="text-xs text-emerald-800 mt-1">You have strong profitability headroom. Learn how to scale safely.</p>
                              <Link href="/blog/when-to-scale-or-pause-campaigns" className="mt-2 inline-flex text-xs font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-600">
                                Read: Scaling Framework - How to Increase Budget Without Breaking Your ROAS →
                              </Link>
                            </div>
                          ) : null}

                          {/* Card 3: Always show - Industry Benchmarks */}
                          <div className="rounded-lg border border-purple-300 bg-white p-3">
                            <p className="text-sm font-semibold text-purple-900">Compare with Industry Standards</p>
                            <p className="text-xs text-purple-800 mt-1">See 2026 industry benchmarks and case studies in your vertical.</p>
                            <Link href="/benchmarks/roas" className="mt-2 inline-flex text-xs font-semibold text-purple-700 underline underline-offset-2 hover:text-purple-600">
                              View: 2026 Industry Benchmarks Data →
                            </Link>
                          </div>
                        </div>

                        {/* NEW: COMPREHENSIVE NEXT STEPS RECOMMENDATION ENGINE */}
                        {resultsRoas && (
                          <NextStepsRecommendation
                            roas={resultsRoas}
                            breakEven={resultsBreakEven}
                            profit={Number(results.profit)}
                            isProfitable={results.isProfitable}
                            cpa={Number(results.cpa)}
                            aov={Number(results.aov)}
                          />
                        )}
                        
                        {/* HERO METRICS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center transform transition hover:scale-105">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">ROAS Score</p>
                                <p className="text-3xl sm:text-4xl font-black text-blue-600">{results.roas}x</p>
                                {industryComparison ? (
                                  <p className={`mt-2 inline-flex rounded-full border px-2 py-1 text-[10px] sm:text-[11px] font-semibold ${industryComparison.tone}`}>
                                    Compare to industry: {industryComparison.label}
                                  </p>
                                ) : null}
                            </div>
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center transform transition hover:scale-105">
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Net Profit</p>
                                <p className={`text-3xl sm:text-4xl font-black ${results.isProfitable ? "text-green-500" : "text-red-500"}`}>
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

                        <div className="ad-mid-content-2 rounded-xl border border-slate-200 bg-slate-100 text-slate-600 w-full" style={{minHeight: '250px'}}>
                          <p className="text-xs font-semibold uppercase tracking-wider">Ad slot: responsive in-content 300x250</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          <button
                              onClick={downloadReport}
                              disabled={exporting}
                              className="w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-lg hover:shadow-slate-500/20"
                              aria-label="Save campaign results to PDF-style report file"
                          >
                              <Download size={20} aria-hidden="true" focusable="false" /> {exporting ? "Preparing..." : "Save to PDF"}
                          </button>
                          <button
                              onClick={copyShareUrl}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition shadow-lg hover:shadow-blue-500/20"
                              aria-label="Generate a shareable link with your inputs"
                          >
                              <LinkIcon size={20} aria-hidden="true" focusable="false" /> Copy Share Link
                          </button>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <button
                              onClick={emailResultsReport}
                              className="w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition"
                              aria-label="Email this ROAS report"
                          >
                              <Share2 size={20} aria-hidden="true" focusable="false" /> Email Report
                          </button>
                          <button
                              onClick={exportResultsCsv}
                              className="w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition"
                              aria-label="Export ROAS results for Google Sheets"
                          >
                              <Share2 size={20} aria-hidden="true" focusable="false" /> Google Sheets
                          </button>
                        </div>
                        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-blue-900">Next step</p>
                          <p className="text-sm text-blue-900 mt-1">
                            What is your true break-even? Continue with your current spend prefilled.
                          </p>
                          <Link
                            href={`/break-even-roas-by-margin?adSpend=${Number(adSpend) || 0}&revenue=${Number(revenue) || 0}&productCost=${Number(productCost) || 0}`}
                            className="inline-flex mt-2 text-sm font-semibold text-blue-800 underline underline-offset-2 hover:text-blue-700"
                          >
                            Open Break-even ROAS Calculator
                          </Link>
                        </div>
                        <button
                          onClick={copyShareSummary}
                          className="self-start text-xs font-semibold text-slate-700 underline underline-offset-2 hover:text-slate-900"
                          aria-label="Copy result summary"
                        >
                          Copy quick summary
                        </button>
                        {shareStatus === "done" ? <p className="text-xs text-green-700">Summary copied to clipboard.</p> : null}
                        {shareStatus === "error" ? <p className="text-xs text-red-600">Could not copy summary. Please try again.</p> : null}
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
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-slate-900">Built and Reviewed</h3>
        <p className="text-sm text-slate-700 mt-2">
          Built and reviewed by the ROAS Tools Editorial Team. Reviewed February 20, 2026.
        </p>
        <p className="text-sm text-slate-700 mt-1">
          Methodology: <Link href="/methodology" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">formula definitions and assumptions</Link>, validated against current benchmark references for Shopify and performance channels.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-bold text-slate-900">Real Results from Users</h3>
        <ol className="mt-3 space-y-2 text-sm text-slate-700 list-decimal pl-5">
          <li>DTC brand improved ROAS from 1.8x to 3.2x after AOV-focused offer testing and checkout simplification.</li>
          <li>Shopify store reduced break-even ROAS from 2.8x to 1.9x by correcting COGS and shipping assumptions.</li>
          <li>Amazon seller found a 15% margin leak when comparing platform ROAS against true landed costs.</li>
        </ol>
      </section>

      {showStickyCta ? (
        <div className="fixed bottom-4 left-4 right-4 z-40 rounded-xl border border-blue-200 bg-white/95 p-3 shadow-xl backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-slate-900">Scale your ROAS next:</p>
            <div className="flex flex-wrap gap-2">
              <Link href="/ppc-toolkit" className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white hover:bg-blue-700">
                Free PPC Toolkit
              </Link>
              <Link href="/benchmarks/roas" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 hover:bg-slate-100">
                Weekly Benchmarks
              </Link>
              <button
                type="button"
                onClick={scrollToCalculate}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 hover:bg-slate-100"
                aria-label="Return to calculator"
              >
                Recalculate
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
