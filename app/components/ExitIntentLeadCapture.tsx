"use client";

import { useEffect, useState } from "react";
import EmailCaptureCard from "@/app/components/EmailCaptureCard";

const STORAGE_KEY = "exit_intent_capture_seen";

export default function ExitIntentLeadCapture() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return;

    const onMouseOut = (event: MouseEvent) => {
      const target = event.relatedTarget as Node | null;
      if (target) return;
      if (event.clientY > 12) return;
      setIsOpen(true);
      window.localStorage.setItem(STORAGE_KEY, "1");
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-slate-950 p-2 shadow-2xl">
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-3 py-1 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
            aria-label="Close benchmark signup modal"
          >
            Close
          </button>
        </div>
        <EmailCaptureCard
          source="exit_intent_modal"
          variant="compact"
          title="Before You Go: Get Weekly Publisher Benchmarks"
          description="Receive weekly RPM/ROAS ranges and one-page optimization prompts."
          buttonLabel="Send Benchmarks"
          helperText="Includes 2026 Ad Revenue Benchmark Sheet (Google Sheets)."
        />
      </div>
    </div>
  );
}
