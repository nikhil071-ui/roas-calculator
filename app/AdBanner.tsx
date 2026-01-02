'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner() {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // 1. Check if we are in the browser (client-side)
      if (typeof window !== 'undefined') {
        const adsbygoogle = (window as any).adsbygoogle || [];
        
        // 2. Only push the ad if the slot is empty (Prevents React double-load error)
        if (adRef.current && adRef.current.innerHTML === "") {
          adsbygoogle.push({});
        }
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    // IMPROVEMENT: Added min-h-[280px] to prevent the page from jumping when ad loads
    <div className="my-8 mx-auto text-center bg-gray-50 border border-gray-100 rounded-lg min-h-[280px] max-w-[340px] flex flex-col justify-center items-center overflow-hidden">
      
      {/* PRO TIP: This label keeps you safe from "Accidental Click" policy violations */}
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