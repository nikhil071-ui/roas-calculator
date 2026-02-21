"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ADS_KEY = "adsense_consent";
const ANALYTICS_KEY = "analytics_consent";
const CONSENT_EVENT = "consent-preferences-updated";

type ConsentValue = "granted" | "denied" | null;

type ConsentState = {
  ads: boolean;
  analytics: boolean;
};

const readConsent = (key: string): ConsentValue => {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(key);
  if (value === "granted" || value === "denied") return value;
  return null;
};

const writeConsent = (value: ConsentState) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ADS_KEY, value.ads ? "granted" : "denied");
  window.localStorage.setItem(ANALYTICS_KEY, value.analytics ? "granted" : "denied");
  window.dispatchEvent(new Event(CONSENT_EVENT));
};

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({ ads: false, analytics: false });

  useEffect(() => {
    const ads = readConsent(ADS_KEY);
    const analytics = readConsent(ANALYTICS_KEY);

    if (ads && analytics) {
      setIsVisible(false);
      setConsent({ ads: ads === "granted", analytics: analytics === "granted" });
      return;
    }

    setConsent({ ads: ads === "granted", analytics: analytics === "granted" });
    setIsVisible(true);
  }, []);

  const acceptAll = () => {
    writeConsent({ ads: true, analytics: true });
    setIsVisible(false);
  };

  const rejectNonEssential = () => {
    writeConsent({ ads: false, analytics: false });
    setIsVisible(false);
  };

  const savePreferences = () => {
    writeConsent(consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and privacy preferences"
    >
      <div className="container mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-700 max-w-3xl">
          <p className="font-semibold text-slate-900">We respect your privacy.</p>
          <p>
            We use cookies for ads and analytics. You can accept all, reject non-essential,
            or manage your preferences. Read our <Link href="/privacy-policy" className="text-blue-700 underline">Privacy Policy</Link>.
          </p>
          {showSettings ? (
            <div className="mt-3 flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={consent.ads}
                  onChange={(event) => setConsent((prev) => ({ ...prev, ads: event.target.checked }))}
                />
                Allow ads (Google AdSense)
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(event) => setConsent((prev) => ({ ...prev, analytics: event.target.checked }))}
                />
                Allow analytics (Google Analytics, Vercel Analytics)
              </label>
            </div>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {showSettings ? (
            <button
              type="button"
              onClick={savePreferences}
              className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
            >
              Save preferences
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
              >
                Manage preferences
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
              >
                Accept all
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
