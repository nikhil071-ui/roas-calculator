"use client";

import { CheckCircle2, RefreshCw, Lock, BarChart3, Users, Shield } from "lucide-react";

interface TrustIndicator {
  icon: React.ReactNode;
  label: string;
  description: string;
}

export default function HomepageTrustIndicators() {
  const indicators: TrustIndicator[] = [
    {
      icon: <CheckCircle2 size={24} className="text-green-600" />,
      label: "Verified Calculations",
      description: "All formulas reviewed by marketing finance professionals",
    },
    {
      icon: <RefreshCw size={24} className="text-blue-600" />,
      label: "Monthly Updates",
      description: "Benchmarks and best practices updated Feb 2026",
    },
    {
      icon: <Lock size={24} className="text-purple-600" />,
      label: "Privacy First",
      description: "Zero signup required, no data collection, no tracking",
    },
    {
      icon: <BarChart3 size={24} className="text-orange-600" />,
      label: "Real Data",
      description: "Benchmarks from 500+ active campaigns across verticals",
    },
    {
      icon: <Users size={24} className="text-indigo-600" />,
      label: "Expert Team",
      description: "Created by marketing ops and finance specialists",
    },
    {
      icon: <Shield size={24} className="text-amber-600" />,
      label: "No Hidden Costs",
      description: "Free forever, no upsell, all tools available immediately",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {indicators.map((indicator) => (
        <div
          key={indicator.label}
          className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 transition"
        >
          <div className="flex-shrink-0 mt-1">{indicator.icon}</div>
          <div>
            <h3 className="font-semibold text-slate-900 text-sm">
              {indicator.label}
            </h3>
            <p className="text-xs text-slate-600 mt-1">{indicator.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
