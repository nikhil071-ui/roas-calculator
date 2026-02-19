'use client';

import { useEffect, useRef } from 'react';

type AdSenseWindow = Window & {
  adsbygoogle?: unknown[];
};

export default function AdBanner() {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const hasScript = Boolean(document.querySelector('script[src*="adsbygoogle.js"]'));
        const adsbygoogle = (window as AdSenseWindow).adsbygoogle || [];

        if (hasScript && adRef.current && !adRef.current.getAttribute("data-ad-status")) {
          adsbygoogle.push({});
        }
      }
    } catch {}
  }, []);

  return (
    <div className="my-8 mx-auto text-center bg-gray-50 border border-gray-100 rounded-lg min-h-[280px] max-w-[340px] flex flex-col justify-center items-center overflow-hidden">
      <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Advertisement</span>
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
