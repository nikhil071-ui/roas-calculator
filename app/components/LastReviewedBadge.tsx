"use client";

import { RefreshCw } from "lucide-react";

interface LastReviewedProps {
  date?: string;
  variant?: "badge" | "section";
}

export default function LastReviewedBadge({
  date = "February 20, 2026",
  variant = "badge",
}: LastReviewedProps) {
  if (variant === "section") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="flex items-start gap-3">
          <RefreshCw className="flex-shrink-0 mt-1 text-emerald-600" size={18} />
          <div>
            <p className="font-semibold text-emerald-900 text-sm">
              Accuracy Verified
            </p>
            <p className="text-xs text-emerald-800 mt-1">
              Last reviewed on <strong>{date}</strong> against industry data,
              platform changes, and user feedback. This calculator's formulas and
              benchmarks remain current.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-xs text-slate-600">
      <RefreshCw size={14} aria-hidden="true" className="flex-shrink-0" />
      <span>Last verified: {date}</span>
    </div>
  );
}
