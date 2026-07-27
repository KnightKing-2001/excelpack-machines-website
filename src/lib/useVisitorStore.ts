/**
 * Visitor Intelligence Store
 * --------------------------
 * Tracks anonymous website visitors (people who never fill a form).
 * Persisted to localStorage. Displayed in the Admin Dashboard.
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface PageView {
  path: string;
  title: string;
  timestamp: string;
  timeSpentMs?: number;
}

export interface VisitorSession {
  sessionId: string;
  firstSeen: string;
  lastSeen: string;
  referrer: string;
  referrerSource: string; // "Google", "Direct", "LinkedIn", etc.
  device: "mobile" | "tablet" | "desktop";
  browser: string;
  os: string;
  screenSize: string;
  country: string;
  city: string;
  ip: string;
  pages: PageView[];
  totalTimeMs: number;
  isOnline: boolean;
  convertedToLead: boolean; // true if they submitted a form
}

interface VisitorStore {
  sessions: VisitorSession[];
  currentSessionId: string | null;
  // Actions
  initSession: () => void;
  trackPageView: (path: string, title: string) => void;
  markAsLead: (sessionId: string) => void;
  clearSessions: () => void;
  setOnlineStatus: (sessionId: string, online: boolean) => void;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function generateSessionId(): string {
  return `vis_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function detectDevice(): "mobile" | "tablet" | "desktop" {
  const ua = navigator.userAgent;
  if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
  if (/Tablet|iPad/i.test(ua)) return "tablet";
  return "desktop";
}

function detectBrowser(): string {
  const ua = navigator.userAgent;
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari")) return "Safari";
  if (ua.includes("Opera")) return "Opera";
  return "Unknown";
}

function detectOS(): string {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac OS")) return "macOS";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  if (ua.includes("Linux")) return "Linux";
  return "Unknown";
}

function parseReferrerSource(referrer: string): string {
  if (!referrer) return "Direct";
  if (referrer.includes("google")) return "Google";
  if (referrer.includes("bing")) return "Bing";
  if (referrer.includes("linkedin")) return "LinkedIn";
  if (referrer.includes("facebook")) return "Facebook";
  if (referrer.includes("twitter") || referrer.includes("x.com")) return "Twitter/X";
  if (referrer.includes("youtube")) return "YouTube";
  if (referrer.includes("indiamart")) return "IndiaMART";
  if (referrer.includes("tradeindia")) return "TradeIndia";
  return "Referral";
}

async function fetchGeoInfo(): Promise<{ country: string; city: string; ip: string }> {
  try {
    const res = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(4000) });
    if (!res.ok) throw new Error("geo failed");
    const data = await res.json();
    // Anonymize IP: mask last octet for privacy (e.g. 103.52.14.x)
    const rawIp: string = data.ip || "";
    const anonIp = rawIp.replace(/(\d+\.\d+\.\d+\.)(\d+)/, "$1x");
    return {
      country: data.country_name || "Unknown",
      city: data.city || "Unknown",
      ip: anonIp || "Unknown",
    };
  } catch {
    return { country: "Unknown", city: "Unknown", ip: "Unknown" };
  }
}

// Purge sessions older than 30 days
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
function purgeOldSessions(sessions: VisitorSession[]): VisitorSession[] {
  const cutoff = Date.now() - THIRTY_DAYS_MS;
  return sessions.filter((s) => new Date(s.firstSeen).getTime() > cutoff);
}

// ─── Store ───────────────────────────────────────────────────────────────────

export const useVisitorStore = create<VisitorStore>()(
  persist(
    (set, get) => ({
      sessions: [],
      currentSessionId: null,

      initSession: async () => {
        // Check if we already have an active session this page-load
        const existing = sessionStorage.getItem("vt_session_id");
        if (existing) {
          // Restore and mark online
          set({ currentSessionId: existing });
          get().setOnlineStatus(existing, true);
          return;
        }

        const sessionId = generateSessionId();
        sessionStorage.setItem("vt_session_id", sessionId);

        // Security: do NOT store raw referrer URL (may contain sensitive query params)
        const referrerSource = parseReferrerSource(document.referrer || "");
        const geo = await fetchGeoInfo();

        const session: VisitorSession = {
          sessionId,
          firstSeen: new Date().toISOString(),
          lastSeen: new Date().toISOString(),
          referrer: "", // raw URL intentionally not stored
          referrerSource,
          device: detectDevice(),
          browser: detectBrowser(),
          os: detectOS(),
          screenSize: `${window.screen.width}×${window.screen.height}`,
          country: geo.country,
          city: geo.city,
          ip: geo.ip, // already anonymized (last octet masked)
          pages: [],
          totalTimeMs: 0,
          isOnline: true,
          convertedToLead: false,
        };

        set((state) => ({
          // Cap at 200 sessions, purge entries older than 30 days
          sessions: purgeOldSessions([session, ...state.sessions]).slice(0, 200),
          currentSessionId: sessionId,
        }));
      },

      trackPageView: (path: string, title: string) => {
        const { currentSessionId } = get();
        if (!currentSessionId) return;

        const now = new Date().toISOString();
        const pageView: PageView = { path, title, timestamp: now };

        set((state) => ({
          sessions: state.sessions.map((s) => {
            if (s.sessionId !== currentSessionId) return s;
            return {
              ...s,
              lastSeen: now,
              pages: [...s.pages, pageView],
            };
          }),
        }));
      },

      setOnlineStatus: (sessionId: string, online: boolean) => {
        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.sessionId === sessionId ? { ...s, isOnline: online, lastSeen: new Date().toISOString() } : s
          ),
        }));
      },

      markAsLead: (sessionId: string) => {
        set((state) => ({
          sessions: state.sessions.map((s) =>
            s.sessionId === sessionId ? { ...s, convertedToLead: true } : s
          ),
        }));
      },

      clearSessions: () => set({ sessions: [] }),
    }),
    {
      name: "excelpack-visitor-intel",
      partialize: (state) => ({ sessions: state.sessions }),
    }
  )
);
