"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-QQF9NJDQSZ";

export default function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(() =>
    typeof window !== "undefined" && window.localStorage.getItem("analytics_consent") === "granted"
  );

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === "analytics_consent") {
        setEnabled(event.newValue === "granted");
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-src"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
