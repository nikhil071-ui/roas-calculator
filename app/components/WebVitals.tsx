"use client";

import { useReportWebVitals } from "next/web-vitals";

type GtagFn = (command: "event", name: string, params: Record<string, unknown>) => void;

export default function WebVitals() {
  useReportWebVitals((metric) => {
    const gtag = (window as Window & { gtag?: GtagFn }).gtag;
    if (typeof gtag === "function") {
      gtag("event", metric.name, {
        metric_id: metric.id,
        metric_name: metric.name,
        metric_value: metric.value,
        metric_delta: metric.delta,
        metric_rating: metric.rating,
        path: window.location.pathname,
      });
    }

    if (process.env.NODE_ENV !== "production") {
      console.info("[web-vitals]", metric.name, metric.value);
    }
  });

  return null;
}
