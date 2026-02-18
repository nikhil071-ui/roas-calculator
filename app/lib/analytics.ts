type GAParamValue = string | number | boolean;
type GAParams = Record<string, GAParamValue | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function sanitizeParams(params: GAParams): Record<string, GAParamValue> {
  const sanitized: Record<string, GAParamValue> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== undefined) {
      sanitized[key] = value;
    }
  }
  return sanitized;
}

export function trackEvent(eventName: string, params: GAParams = {}): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, sanitizeParams(params));
}
