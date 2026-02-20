"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, TrendingDown, CheckCircle2 } from "lucide-react";

interface NextStepsProps {
  roas: number;
  breakEven: number | null;
  profit: number;
  isProfitable: boolean;
  cpa: number;
  aov: number;
}

export default function NextStepsRecommendation({
  roas,
  breakEven,
  profit,
  isProfitable,
  cpa,
  aov,
}: NextStepsProps) {
  const recommendations: Array<{
    priority: "high" | "medium" | "low";
    title: string;
    description: string;
    href: string;
    condition: boolean;
  }> = [
    // HIGH PRIORITY
    {
      priority: "high",
      title: "Calculate Your Break-Even ROAS",
      description:
        "Haven't entered product costs? Use the break-even calculator to find your exact profitability threshold.",
      href: "/break-even-roas-by-margin",
      condition: breakEven === null && !isProfitable,
    },
    {
      priority: "high",
      title: "Analyze CAC vs LTV Ratio",
      description:
        "Now that you know your ROAS, compare your Customer Acquisition Cost (CAC) with LTV to ensure sustainable growth.",
      href: "/ltv-calculator",
      condition: isProfitable && roas > 2.0,
    },
    {
      priority: "high",
      title: "Calculate Your CAC Payback Period",
      description:
        "See how long it takes to recover your customer acquisition costs and when customers become profitable.",
      href: "/saas-cac-payback",
      condition: isProfitable && aov > 0 && cpa > 0,
    },
    // MEDIUM PRIORITY
    {
      priority: "medium",
      title: "Compare Your ROAS Against 2026 Benchmarks",
      description:
        "See how your performance compares to hundreds of campaigns in your industry vertical.",
      href: "/benchmarks/roas",
      condition: true, // Always relevant
    },
    {
      priority: "medium",
      title: "Model Your Lead Generation Economics",
      description:
        "If you run lead gen campaigns, calculate cost-per-lead and see lead value vs CAC tradeoffs.",
      href: "/lead-generation-roas",
      condition: cpa > 0,
    },
    {
      priority: "medium",
      title: "Use the MER Calculator for Facebook Ads",
      description:
        "Marketing Efficiency Ratio (MER) is Facebook's preferred metric. See how your ROAS translates to MER.",
      href: "/mer-calculator",
      condition: roas > 0,
    },
    {
      priority: "medium",
      title: "Check Shopify-Specific Benchmarks",
      description:
        "If you run Shopify stores, get industry-specific ROAS ranges and profitability metrics.",
      href: "/shopify-roas-calculator",
      condition: aov > 0,
    },
    // LOW PRIORITY - Educational
    {
      priority: "low",
      title: "Read: How to Improve ROAS Without Raising Budget",
      description:
        "Get 5 proven strategies to lift ROAS by optimizing targeting, creative, and offers.",
      href: "/blog/how-to-improve-roas-without-raising-budget",
      condition: roas < 3.0,
    },
    {
      priority: "low",
      title: "Explore ROAS Benchmarks by Vertical",
      description:
        "Deep dive into DTC, SaaS, and lead gen benchmarks with real campaign data.",
      href: "/benchmarks/roas-benchmarks",
      condition: true,
    },
    {
      priority: "low",
      title: "Learn the ROAS Audit Checklist",
      description:
        "47-point audit framework to ensure your campaigns are truly profitable.",
      href: "/blog/roas-audit-checklist",
      condition: profit < 100,
    },
  ];

  const highPriority = recommendations.filter(
    (r) => r.priority === "high" && r.condition
  );
  const mediumPriority = recommendations.filter(
    (r) => r.priority === "medium" && r.condition
  );
  const lowPriority = recommendations.filter(
    (r) => r.priority === "low" && r.condition
  );

  const displayedHigh = highPriority.slice(0, 2);
  const displayedMedium = mediumPriority.slice(0, 1);
  const displayedLow = lowPriority.slice(0, 1);

  return (
    <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="text-blue-600" size={24} aria-hidden="true" />
        <div>
          <h3 className="font-bold text-blue-900">What to Do Next</h3>
          <p className="text-sm text-blue-800">
            {displayedHigh.length + displayedMedium.length + displayedLow.length}{" "}
            personalized next steps based on your results
          </p>
        </div>
      </div>

      {/* HIGH PRIORITY */}
      {displayedHigh.length > 0 && (
        <div className="space-y-2 border-t border-blue-200 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
            ⚡ Do This First
          </p>
          <div className="space-y-2">
            {displayedHigh.map((rec) => (
              <Link
                key={rec.href}
                href={rec.href}
                className="flex items-start gap-3 rounded-lg bg-white p-3 transition hover:shadow-md"
              >
                <TrendingUp
                  className="mt-0.5 flex-shrink-0 text-blue-600"
                  size={18}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{rec.title}</p>
                  <p className="text-xs text-slate-600">{rec.description}</p>
                </div>
                <ArrowRight
                  className="mt-1 flex-shrink-0 text-slate-400"
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* MEDIUM PRIORITY */}
      {displayedMedium.length > 0 && (
        <div className="space-y-2 border-t border-blue-200 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
            📊 Then Explore
          </p>
          <div className="space-y-2">
            {displayedMedium.map((rec) => (
              <Link
                key={rec.href}
                href={rec.href}
                className="flex items-start gap-3 rounded-lg bg-white p-3 transition hover:shadow-md"
              >
                <TrendingUp
                  className="mt-0.5 flex-shrink-0 text-purple-600"
                  size={18}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{rec.title}</p>
                  <p className="text-xs text-slate-600">{rec.description}</p>
                </div>
                <ArrowRight
                  className="mt-1 flex-shrink-0 text-slate-400"
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* LOW PRIORITY */}
      {displayedLow.length > 0 && (
        <div className="space-y-2 border-t border-blue-200 pt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
            📚 Learn More
          </p>
          <div className="space-y-2">
            {displayedLow.map((rec) => (
              <Link
                key={rec.href}
                href={rec.href}
                className="flex items-start gap-3 rounded-lg bg-white p-3 transition hover:shadow-md"
              >
                <TrendingDown
                  className="mt-0.5 flex-shrink-0 text-amber-600"
                  size={18}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{rec.title}</p>
                  <p className="text-xs text-slate-600">{rec.description}</p>
                </div>
                <ArrowRight
                  className="mt-1 flex-shrink-0 text-slate-400"
                  size={18}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA to see all tools */}
      <div className="border-t border-blue-200 pt-4">
        <Link
          href="/ppc-toolkit"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2"
        >
          View All Marketing Tools <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
