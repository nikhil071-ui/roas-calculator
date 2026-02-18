"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

export default function CACCalculatorClient() {
  const [adSpend, setAdSpend] = useState("");
  const [newCustomers, setNewCustomers] = useState("");
  const [targetCac, setTargetCac] = useState("");
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const trackStart = () => {
    if (started) return;
    trackEvent("calculator_start", {
      page_type: "calculator_page",
      calculator_type: "cac",
      slug: "cac-calculator",
    });
    setStarted(true);
  };

  const calculate = () => {
    const spend = Number(adSpend);
    const customers = Number(newCustomers);
    if (!spend || !customers) return;
    const cac = spend / customers;
    setResult(cac);
    trackEvent("calculator_submit", {
      calculator_type: "cac",
      has_optional_costs: false,
      result_state: "na",
    });
  };

  const decision =
    result === null || !targetCac
      ? null
      : result <= Number(targetCac)
        ? "Scale"
        : result <= Number(targetCac) * 1.15
          ? "Hold"
          : "Pause";

  return (
    <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold">CAC Calculator Module</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <input className="border rounded-lg p-3" placeholder="Ad Spend" value={adSpend} onFocus={trackStart} onChange={(e) => setAdSpend(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="New Customers" value={newCustomers} onFocus={trackStart} onChange={(e) => setNewCustomers(e.target.value)} />
        <input className="border rounded-lg p-3" placeholder="Target CAC (optional)" value={targetCac} onFocus={trackStart} onChange={(e) => setTargetCac(e.target.value)} />
      </div>
      <button onClick={calculate} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Calculate CAC</button>
      {result !== null && (
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="font-semibold">Calculated CAC: ${result.toFixed(2)}</p>
          {decision && <p className="text-slate-700 mt-1">Decision Module: <strong>{decision}</strong> based on target CAC guardrail.</p>}
        </div>
      )}
    </section>
  );
}

