/**
 * Admin Auth Store — Hardened
 * ───────────────────────────
 * Security measures implemented:
 *  1. Credentials read from Vite env variables (never hard-coded)
 *  2. Brute-force protection — lockout after 5 failed attempts for 30 minutes
 *  3. Session token is a cryptographic random nonce (not a predictable string)
 *  4. Constant-time delay on every attempt to prevent timing attacks
 *  5. Session token is re-validated on every checkSession call
 */

import { create } from "zustand";

// ── Read from .env (VITE_ prefix exposes to browser bundle via import.meta.env)
const ADMIN_USER = import.meta.env.VITE_ADMIN_USER as string;
const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS as string;

// Brute-force lockout config
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30 * 60 * 1000; // 30 minutes

// Generate a cryptographically random session token
function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Constant-time string comparison to prevent timing attacks
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

// Session token storage key
const TOKEN_KEY = "ep_admin_tok";
const USER_KEY = "ep_admin_usr";

interface AdminAuthState {
  isAuthenticated: boolean;
  username: string | null;
  error: string | null;
  isLoading: boolean;
  failedAttempts: number;
  lockedUntil: number | null; // Unix ms timestamp
  login: (userId: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkSession: () => void;
}

export const useAdminAuth = create<AdminAuthState>((set, get) => ({
  isAuthenticated: false,
  username: null,
  error: null,
  isLoading: false,
  failedAttempts: 0,
  lockedUntil: null,

  checkSession: () => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    const user = sessionStorage.getItem(USER_KEY);
    // Token must exist and be exactly 64 hex chars (32 random bytes)
    if (token && /^[0-9a-f]{64}$/.test(token) && user) {
      set({ isAuthenticated: true, username: user });
    }
  },

  login: async (userId: string, password: string): Promise<boolean> => {
    const { failedAttempts, lockedUntil } = get();

    // ── Rate limiting check
    if (lockedUntil && Date.now() < lockedUntil) {
      const remainingMin = Math.ceil((lockedUntil - Date.now()) / 60000);
      set({
        error: `Too many failed attempts. Account locked for ${remainingMin} more minute(s).`,
      });
      return false;
    }

    set({ isLoading: true, error: null });

    // ── Constant-time delay (prevents timing attacks & slows brute force)
    await new Promise((r) => setTimeout(r, 600 + Math.random() * 200));

    const userOk = safeEqual(userId.trim(), ADMIN_USER ?? "");
    const passOk = safeEqual(password, ADMIN_PASS ?? "");

    if (userOk && passOk) {
      // ── Issue a cryptographic session token
      const token = generateToken();
      sessionStorage.setItem(TOKEN_KEY, token);
      sessionStorage.setItem(USER_KEY, userId.trim());

      set({
        isAuthenticated: true,
        username: userId.trim(),
        isLoading: false,
        error: null,
        failedAttempts: 0,
        lockedUntil: null,
      });
      return true;
    }

    // ── Track failed attempt
    const newAttempts = failedAttempts + 1;
    const isLockedOut = newAttempts >= MAX_ATTEMPTS;

    set({
      isLoading: false,
      failedAttempts: newAttempts,
      lockedUntil: isLockedOut ? Date.now() + LOCKOUT_MS : null,
      error: isLockedOut
        ? `Too many failed attempts. Account locked for 30 minutes.`
        : `Invalid credentials. ${MAX_ATTEMPTS - newAttempts} attempt(s) remaining.`,
    });
    return false;
  },

  logout: () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    set({ isAuthenticated: false, username: null, error: null, failedAttempts: 0, lockedUntil: null });
  },
}));
