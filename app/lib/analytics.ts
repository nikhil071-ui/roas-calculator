type GAParamValue = string | number | boolean;
type GAParams = Record<string, GAParamValue | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function sanitizeParams(params: GAParams): Record<string, GAParamValue> {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]): value is GAParamValue => value !== null && value !== undefined)
  );
}

export function trackEvent(eventName: string, params: GAParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, sanitizeParams(params));
}

