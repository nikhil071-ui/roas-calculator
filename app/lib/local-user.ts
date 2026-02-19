const ACTIVE_EMAIL_KEY = "subscriber_email";
const HISTORY_KEY = "subscriber_history_by_email";

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
  return window.localStorage.getItem(ACTIVE_EMAIL_KEY);
}

export function setActiveSubscriberEmail(email: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ACTIVE_EMAIL_KEY, email.trim().toLowerCase());
}

export function clearActiveSubscriberEmail() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ACTIVE_EMAIL_KEY);
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
