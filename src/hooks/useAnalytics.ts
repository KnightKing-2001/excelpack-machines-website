/**
 * useAnalytics — Google Analytics 4 Integration
 * ──────────────────────────────────────────────
 * - Loads the gtag.js script dynamically (only once)
 * - Sends a `page_view` event on every React Router route change
 * - Respects user privacy: does nothing if GA4 ID is not configured
 * - No tracking on admin pages
 *
 * Setup:
 *   1. Go to https://analytics.google.com
 *   2. Create a GA4 property → get your Measurement ID (G-XXXXXXXXXX)
 *   3. Set VITE_GA4_ID=G-XXXXXXXXXX in your .env file
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;

// Pages we never track (admin, private routes)
const EXCLUDED_PATHS = ["/admin"];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Inject the gtag.js script tag once into <head> */
function loadGtagScript(measurementId: string): void {
  if (document.querySelector(`script[data-ga4="${measurementId}"]`)) return;

  // Main gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.setAttribute("data-ga4", measurementId);
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    // Anonymize IP for GDPR compliance
    anonymize_ip: true,
    // Don't send page_view automatically — we handle it manually per route
    send_page_view: false,
  });
}

/** Send a manual page_view hit to GA4 */
function trackPageView(path: string, title: string, measurementId: string): void {
  if (!window.gtag) return;
  window.gtag("event", "page_view", {
    page_location: `${window.location.origin}${path}`,
    page_path: path,
    page_title: title,
    send_to: measurementId,
  });
}

// Page titles matching the router
const PAGE_TITLES: Record<string, string> = {
  "/": "ExcelPack Machines — Home",
  "/products": "Packaging Machines Catalogue — ExcelPack",
  "/industries": "Industries We Serve — ExcelPack",
  "/solutions": "Turnkey Solutions — ExcelPack",
  "/services": "Service & AMC — ExcelPack",
  "/resources": "Technical Resources — ExcelPack",
  "/about": "About ExcelPack Machines",
  "/contact": "Contact Us — ExcelPack",
};

export function useAnalytics(): void {
  const location = useLocation();

  // Load GA4 script once on mount
  useEffect(() => {
    if (!GA4_ID || GA4_ID === "G-XXXXXXXXXX") return; // Not configured yet
    loadGtagScript(GA4_ID);
  }, []);

  // Track every route change
  useEffect(() => {
    if (!GA4_ID || GA4_ID === "G-XXXXXXXXXX") return;

    const path = location.pathname;

    // Skip admin and excluded paths
    if (EXCLUDED_PATHS.some((excluded) => path.startsWith(excluded))) return;

    const title =
      PAGE_TITLES[path] ??
      (path.startsWith("/products/")
        ? `Product Detail — ExcelPack`
        : `ExcelPack Machines`);

    // Small delay to allow document.title to update
    const timer = setTimeout(() => trackPageView(path, title, GA4_ID), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);
}
