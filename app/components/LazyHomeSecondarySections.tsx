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
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        Loading guides, FAQs, and resources...
      </div>
    );
  }

  return <HomeSecondarySections />;
}
