"use client";

import { useEffect, useState, type ComponentType } from "react";

export default function LazyHomeSecondarySections() {
  const [HomeSecondarySections, setHomeSecondarySections] = useState<null | ComponentType>(null);

  useEffect(() => {
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const loadSections = () => {
      void import("./HomeSecondarySections").then((module) => {
        setHomeSecondarySections(() => module.default);
      });
    };

    if (typeof idleWindow.requestIdleCallback === "function") {
      const idleId = idleWindow.requestIdleCallback(loadSections, { timeout: 1200 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timer = setTimeout(loadSections, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!HomeSecondarySections) {
    return (
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">Continue with ROAS Planning</h2>
        <p className="mt-2 text-sm text-slate-600">
          Loading guides, FAQs, and resources...
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a href="/learn/roas" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">
            ROAS Education
          </a>
          <a href="/benchmarks/roas" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">
            ROAS Benchmarks
          </a>
          <a href="/optimize/roas" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">
            Ad Optimization
          </a>
          <a href="/profitability/ads" className="text-blue-700 underline underline-offset-2 hover:text-blue-800">
            Profitability Hub
          </a>
        </div>
      </section>
    );
  }

  return <HomeSecondarySections />;
}
