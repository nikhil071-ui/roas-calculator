"use client";

import dynamic from "next/dynamic";

const AdBanner = dynamic(() => import("../AdBanner"), {
  ssr: false,
  loading: () => <div className="min-h-[280px]" aria-hidden="true" />,
});

export default function DeferredAdBanner() {
  return <AdBanner />;
}
