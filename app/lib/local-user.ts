const ACTIVE_EMAIL_KEY = "subscriber_email";
const HISTORY_KEY = "subscriber_history_by_email";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export type LocalHistoryEntry = {
  timestamp: string;
  adSpend: number;
  revenue: number;
  productCost: number;
  orders: number;
  roas: string;
  profit: string;
  breakEven: string;
  cpa: string;
  aov: string;
};

type HistoryStore = Record<string, LocalHistoryEntry[]>;

function readHistoryStore(): HistoryStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as HistoryStore;
  } catch {
    return {};
  }
}

function writeHistoryStore(store: HistoryStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(HISTORY_KEY, JSON.stringify(store));
}

export function getActiveSubscriberEmail(): string | null {
  if (typeof window === "undefined") return null;
  const local = window.localStorage.getItem(ACTIVE_EMAIL_KEY);
  if (local) return local;
  const cookieEmail = readCookie("subscriber_email");
  if (!cookieEmail) return null;
  const normalized = cookieEmail.trim().toLowerCase();
  window.localStorage.setItem(ACTIVE_EMAIL_KEY, normalized);
  return normalized;
}

export function setActiveSubscriberEmail(email: string) {
  if (typeof window === "undefined") return;
  const normalized = email.trim().toLowerCase();
  window.localStorage.setItem(ACTIVE_EMAIL_KEY, normalized);
  document.cookie = `subscriber_email=${encodeURIComponent(normalized)}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`;
}

export function clearActiveSubscriberEmail() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ACTIVE_EMAIL_KEY);
  document.cookie = "subscriber_email=; path=/; max-age=0; samesite=lax";
}

export function getHistoryForEmail(email: string): LocalHistoryEntry[] {
  const normalized = email.trim().toLowerCase();
  const store = readHistoryStore();
  return store[normalized] ?? [];
}

export function appendHistoryForEmail(email: string, entry: LocalHistoryEntry) {
  const normalized = email.trim().toLowerCase();
  if (!normalized) return;
  const store = readHistoryStore();
  const current = store[normalized] ?? [];
  const next = [entry, ...current].slice(0, 50);
  store[normalized] = next;
  writeHistoryStore(store);
}
