"use client";

import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import Script from "next/script";

const GA_ID = "G-QQF9NJDQSZ";
const readConsent = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((item) => item === "analytics_consent=granted");
};

export default function AnalyticsScripts() {
  const [enabled] = useState(() => readConsent());

  if (!enabled) {
    return null;
  }

  return (
    <>
      {process.env.NODE_ENV === "production" ? <Analytics /> : null}
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
