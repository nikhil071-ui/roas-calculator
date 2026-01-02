'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const adProcessed = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    // Prevent double-execution in React Strict Mode
    if (adProcessed.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adProcessed.current = true;
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [isMounted]);

  // Prevent Hydration Mismatch by returning a placeholder during server render
  if (!isMounted) {
    return (
      <div className="my-8 h-[90px] w-full bg-gray-100 rounded-lg animate-pulse text-center flex items-center justify-center text-gray-400 text-xs">
        Loading Ad...
      </div>
    );
  }

  return (
    <div className="my-8 text-center overflow-hidden">
      {/* Script loads only if not already loaded by another component */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4649521973867824"
        crossOrigin="anonymous"
      ></script>

      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4649521973867824"
        data-ad-slot="1463530914"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}