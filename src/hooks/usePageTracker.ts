/**
 * usePageTracker
 * --------------
 * Hook that fires on every route change to:
 * 1. Init a visitor session on first load
 * 2. Track each page visit
 * 3. Mark session offline when tab closes
 */

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useVisitorStore } from "@/lib/useVisitorStore";

const PAGE_TITLES: Record<string, string> = {
  "/": "Homepage",
  "/products": "Products Catalogue",
  "/industries": "Industries",
  "/solutions": "Solutions",
  "/services": "Services",
  "/resources": "Resources",
  "/about": "About Us",
  "/contact": "Contact",
  "/admin": "Admin Dashboard",
};

export function usePageTracker() {
  const location = useLocation();
  const { initSession, trackPageView, setOnlineStatus, currentSessionId } = useVisitorStore();
  const initialized = useRef(false);

  // Init session once
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      initSession();
    }

    // Mark offline on tab close
    const handleUnload = () => {
      const sid = useVisitorStore.getState().currentSessionId;
      if (sid) setOnlineStatus(sid, false);
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [initSession, setOnlineStatus]);

  // Track every route change
  useEffect(() => {
    const sid = useVisitorStore.getState().currentSessionId;
    if (!sid) return; // session not ready yet — short delay then retry

    const path = location.pathname;
    const title =
      PAGE_TITLES[path] ??
      (path.startsWith("/products/") ? "Product Detail" : path);

    trackPageView(path, title);
  }, [location.pathname, trackPageView, currentSessionId]);
}
