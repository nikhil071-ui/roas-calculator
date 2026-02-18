"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

export default function MERCalculatorClient() {
  const [revenue, setRevenue] = useState("");
  const [marketingSpend, setMarketingSpend] = useState("");
  const [targetMer, setTargetMer] = useState("");
  const [started, setStarted] = useState(false);
  const [mer, setMer] = useState<number | null>(null);

  const trackStart = () => {
    if (started) return;
    trackEvent("calculator_start", {
      page_type: "calculator_page",
      calculator_type: "mer",
      slug: "mer-calculator",
    });
    setStarted(true);
  };

  const calculate = () => {
    const rev = Number(revenue);
    const spend = Number(marketingSpend);
    if (!rev || !spend) return;
    setMer(rev / spend);
    trackEvent("calculator_submit", {
      calculator_type: "mer",
      has_optional_costs: false,
      result_state: "na",
    });
  };

  const decision =
    mer === null || !targetMer
      ? null
      : mer >= Number(targetMer)
        ? "Scale"
        : mer >= Number(targetMer) * 0.9
          ? "Hold"
          : "Pause";

  return (
    <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold">MER Calculator Module</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <input className="border rounded-lg p-3" placeholder="Total Revenue" value={revenue} onFocus={trackStart} onChange={(e) => setRevenue(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Total Marketing Spend" value={marketingSpend} onFocus={trackStart} onChange={(e) => setMarketingSpend(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Target MER (optional)" value={targetMer} onFocus={trackStart} onChange={(e) => setTargetMer(e.target.value)} />
      </div>
      <button onClick={calculate} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Calculate MER</button>
      {mer !== null && (
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="font-semibold">Calculated MER: {mer.toFixed(2)}x</p>
          {decision && <p className="text-slate-700 mt-1">Decision Module: <strong>{decision}</strong> versus target MER.</p>}
        </div>
      )}
    </section>
  );
}

