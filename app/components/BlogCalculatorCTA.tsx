"use client";

import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";

interface BlogCalculatorCTAProps {
  calculatorName: string;
  calculatorPath: string;
  description: string;
  variant?: "inline" | "boxed";
}

export default function BlogCalculatorCTA({
  calculatorName,
  calculatorPath,
  description,
  variant = "boxed",
}: BlogCalculatorCTAProps) {
  if (variant === "inline") {
    return (
      <Link
        href={calculatorPath}
        className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold underline underline-offset-2 transition"
      >
        <Calculator size={16} aria-hidden="true" />
        {calculatorName}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <div className="my-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Calculator className="text-blue-600" size={24} aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-blue-900 mb-1">
            Use the {calculatorName}
          </h3>
          <p className="text-sm text-blue-800 mb-3">{description}</p>
          <Link
            href={calculatorPath}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 hover:underline"
          >
            Open Calculator
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
