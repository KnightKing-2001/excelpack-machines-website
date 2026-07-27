/**
 * useScrollReveal
 * ---------------
 * Lightweight Intersection Observer that adds .visible to elements with
 * .reveal / .reveal-left / .reveal-right classes when they enter the viewport.
 */

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
