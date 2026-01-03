'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // 1. Check if we are in the browser
      if (typeof window !== 'undefined') {
        const adsbygoogle = (window as any).adsbygoogle || [];
        
        // 2. SAFETY CHECK: Only push if the ad slot is NOT already filled.
        // Google adds 'data-ad-status' attribute when an ad loads.
        if (adRef.current && !adRef.current.getAttribute('data-ad-status')) {
          adsbygoogle.push({});
        }
      }
    } catch (err) {
      // This ignores the "benign" error if it happens
      console.log('AdSense loaded.');
    }
  }, []);

  return (
    <div className="my-8 mx-auto text-center bg-gray-50 border border-gray-100 rounded-lg min-h-[280px] max-w-[340px] flex flex-col justify-center items-center overflow-hidden">
      <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Advertisement</span>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-4649521973867824"
        data-ad-slot="1463530914"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}