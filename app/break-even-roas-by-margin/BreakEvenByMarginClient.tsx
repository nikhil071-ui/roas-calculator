"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";

export default function BreakEvenByMarginClient() {
  const [margin, setMargin] = useState("");
  const [currentRoas, setCurrentRoas] = useState("");
  const [started, setStarted] = useState(false);
  const [breakEvenRoas, setBreakEvenRoas] = useState<number | null>(null);

  const trackStart = () => {
    if (started) return;
    trackEvent("calculator_start", {
      page_type: "calculator_page",
      calculator_type: "roas",
      slug: "break-even-roas-by-margin",
    });
    setStarted(true);
  };

  const calculate = () => {
    const marginValue = Number(margin);
    if (!marginValue || marginValue <= 0 || marginValue >= 100) return;
    const required = 1 / (marginValue / 100);
    setBreakEvenRoas(required);
    trackEvent("calculator_submit", {
      calculator_type: "roas",
      has_optional_costs: false,
      result_state: "na",
    });
  };

  const decision =
    breakEvenRoas !== null && Number(currentRoas) > 0
      ? Number(currentRoas) >= breakEvenRoas * 1.2
        ? "Scale"
        : Number(currentRoas) >= breakEvenRoas * 0.9
          ? "Hold"
          : "Pause"
      : null;

  return (
    <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold">Break-even ROAS by Margin Calculator</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <input
          className="border rounded-lg p-3"
          placeholder="Contribution Margin % (e.g. 35)"
          value={margin}
          onFocus={trackStart}
          onChange={(e) => setMargin(e.target.value)}
        />
        <input
          className="border rounded-lg p-3"
          placeholder="Current ROAS (optional)"
          value={currentRoas}
          onFocus={trackStart}
          onChange={(e) => setCurrentRoas(e.target.value)}
        />
      </div>
      <button onClick={calculate} className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
        Calculate Break-even ROAS
      </button>
      {breakEvenRoas !== null && (
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <p className="font-semibold">Required Break-even ROAS: {breakEvenRoas.toFixed(2)}x</p>
          {decision && <p className="text-slate-700 mt-1">Decision Module: <strong>{decision}</strong> based on current ROAS vs break-even threshold.</p>}
        </div>
      )}
    </section>
  );
}

