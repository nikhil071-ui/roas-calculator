/**
 * Privacy-first result sharing utility
 * Encodes ROAS calculator results in URL hash for sharing without server tracking
 */

export interface ShareableResults {
  adSpend: number;
  revenue: number;
  productCost: number;
  orders: number;
  timestamp?: string;
}

/**
 * Encode results to URL-safe string (Base64)
 * Data stays in URL hash - not sent to server
 */
export function encodeResultsToUrl(results: ShareableResults): string {
  const json = JSON.stringify(results);
  // Use browser's btoa for Base64 encoding
  const encoded = btoa(unescape(encodeURIComponent(json)));
  return encoded;
}

/**
 * Decode results from URL-safe string
 */
export function decodeResultsFromUrl(encoded: string): ShareableResults | null {
  try {
    const json = decodeURIComponent(escape(atob(encoded)));
    return JSON.parse(json);
  } catch {
    return null;
  }
}

/**
 * Generate full shareable URL
 */
export function generateShareableUrl(
  results: ShareableResults,
  baseUrl: string = "https://roas-calculator.tech"
): string {
  const encoded = encodeResultsToUrl(results);
  return `${baseUrl}?share=${encoded}`;
}

/**
 * Parse share param from URL
 */
export function getResultsFromUrlParam(
  searchParams?: URLSearchParams | Record<string, string>
): ShareableResults | null {
  if (!searchParams) return null;

  let shareParam: string | null = null;

  if (searchParams instanceof URLSearchParams) {
    shareParam = searchParams.get("share");
  } else if (typeof searchParams === "object") {
    shareParam = (searchParams as Record<string, string>)["share"] || null;
  }

  if (!shareParam) return null;

  return decodeResultsFromUrl(shareParam);
}
