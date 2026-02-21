'use client';

import { useEffect, useRef, useState } from 'react';

type AdSenseWindow = Window & {
  __adsenseScriptLoadingPromise?: Promise<void>;
  adsbygoogle?: unknown[];
};

const ADS_KEY = "adsense_consent";
const CONSENT_EVENT = "consent-preferences-updated";

export default function AdBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLModElement>(null);
  const [shouldLoadAd, setShouldLoadAd] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      if (typeof window === "undefined") return;
      const consent = window.localStorage.getItem(ADS_KEY);
      setHasConsent(consent === "granted");
    };

    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    if (!hasConsent || shouldLoadAd || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadAd(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [shouldLoadAd]);

  useEffect(() => {
    if (!hasConsent || !shouldLoadAd || typeof window === "undefined") {
      return;
    }

    const adsWindow = window as AdSenseWindow;
    const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-4649521973867824";

    const ensureScriptLoaded = () => {
      if (adsWindow.__adsenseScriptLoadingPromise) {
        return adsWindow.__adsenseScriptLoadingPromise;
      }

      const existingScript = document.querySelector<HTMLScriptElement>('script[src*="adsbygoogle.js"]');
      if (existingScript) {
        adsWindow.__adsenseScriptLoadingPromise = Promise.resolve();
        return adsWindow.__adsenseScriptLoadingPromise;
      }

      adsWindow.__adsenseScriptLoadingPromise = new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.async = true;
        script.crossOrigin = "anonymous";
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load AdSense script"));
        document.head.appendChild(script);
      });

      return adsWindow.__adsenseScriptLoadingPromise;
    };

    const loadAd = () => {
      void ensureScriptLoaded()
        .then(() => {
          if (!adRef.current) return;
          if (adRef.current.getAttribute("data-ad-status")) return;
          const adsbygoogle = adsWindow.adsbygoogle || [];
          adsbygoogle.push({});
        })
        .catch(() => {});
    };

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof idleWindow.requestIdleCallback === "function") {
      const idleId = idleWindow.requestIdleCallback(loadAd, { timeout: 1200 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timer = setTimeout(loadAd, 250);
    return () => clearTimeout(timer);
  }, [shouldLoadAd]);

  return (
    <div ref={containerRef} className="my-8 mx-auto text-center bg-gray-50 border border-gray-100 rounded-lg min-h-70 max-w-85 flex flex-col justify-center items-center overflow-hidden">
      <span className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Advertisement</span>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-4649521973867824"}
        data-ad-slot="1463530914"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
