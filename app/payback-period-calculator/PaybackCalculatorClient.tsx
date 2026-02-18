"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

export default function PaybackCalculatorClient() {
  const [cac, setCac] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [margin, setMargin] = useState("");
  const [started, setStarted] = useState(false);
  const [payback, setPayback] = useState<number | null>(null);

  const trackStart = () => {
    if (started) return;
    trackEvent("calculator_start", {
      page_type: "calculator_page",
      calculator_type: "payback",
      slug: "payback-period-calculator",
    });
    setStarted(true);
  };

  const calculate = () => {
    const value = Number(cac) / (Number(monthlyRevenue) * (Number(margin) / 100));
    if (!value || !Number.isFinite(value)) return;
    setPayback(value);
    trackEvent("calculator_submit", {
      calculator_type: "payback",
      has_optional_costs: false,
      result_state: "na",
    });
  };

  const decision =
    payback === null ? null : payback <= 12 ? "Scale" : payback <= 18 ? "Hold" : "Pause";

  return (
    <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold">Payback Calculator Module</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <input className="border rounded-lg p-3" placeholder="CAC" value={cac} onFocus={trackStart} onChange={(e) => setCac(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Monthly Revenue / Customer" value={monthlyRevenue} onFocus={trackStart} onChange={(e) => setMonthlyRevenue(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Gross Margin %" value={margin} onFocus={trackStart} onChange={(e) => setMargin(e.target.value)} />
      </div>
      <button onClick={calculate} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Calculate Payback</button>
      {payback !== null && (
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="font-semibold">Calculated Payback: {payback.toFixed(2)} months</p>
          <p className="text-slate-700 mt-1">Decision Module: <strong>{decision}</strong> based on payback window.</p>
        </div>
      )}
    </section>
  );
}

