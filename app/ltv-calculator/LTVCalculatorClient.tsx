"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

export default function LTVCalculatorClient() {
  const [aov, setAov] = useState("");
  const [frequency, setFrequency] = useState("");
  const [months, setMonths] = useState("");
  const [margin, setMargin] = useState("");
  const [cac, setCac] = useState("");
  const [started, setStarted] = useState(false);
  const [ltv, setLtv] = useState<number | null>(null);

  const trackStart = () => {
    if (started) return;
    trackEvent("calculator_start", {
      page_type: "calculator_page",
      calculator_type: "ltv",
      slug: "ltv-calculator",
    });
    setStarted(true);
  };

  const calculate = () => {
    const ltvValue = Number(aov) * Number(frequency) * Number(months) * (Number(margin) / 100);
    if (!ltvValue) return;
    setLtv(ltvValue);
    trackEvent("calculator_submit", {
      calculator_type: "ltv",
      has_optional_costs: Boolean(cac),
      result_state: "na",
    });
  };

  const ratio = ltv && cac ? ltv / Number(cac) : null;
  const decision =
    ratio === null ? null : ratio >= 3 ? "Scale" : ratio >= 2 ? "Hold" : "Pause";

  return (
    <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold">LTV Calculator Module</h2>
      <div className="grid md:grid-cols-5 gap-3">
        <input className="border rounded-lg p-3" placeholder="AOV" value={aov} onFocus={trackStart} onChange={(e) => setAov(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Frequency / month" value={frequency} onFocus={trackStart} onChange={(e) => setFrequency(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Retention months" value={months} onFocus={trackStart} onChange={(e) => setMonths(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Margin %" value={margin} onFocus={trackStart} onChange={(e) => setMargin(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="CAC (optional)" value={cac} onFocus={trackStart} onChange={(e) => setCac(e.target.value)} />
      </div>
      <button onClick={calculate} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Calculate LTV</button>
      {ltv !== null && (
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="font-semibold">Calculated LTV: ${ltv.toFixed(2)}</p>
          {ratio !== null && (
            <p className="text-slate-700 mt-1">LTV:CAC = {ratio.toFixed(2)}. Decision Module: <strong>{decision}</strong>.</p>
          )}
        </div>
      )}
    </section>
  );
}

