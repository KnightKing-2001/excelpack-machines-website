import { useState } from "react";
import { ShieldCheck, X } from "lucide-react";

export function CookieConsent() {
  const [accepted, setAccepted] = useState(() => {
    if (typeof window === "undefined") return true;
    return Boolean(localStorage.getItem("excelpack_cookie_consent"));
  });

  const handleAccept = () => {
    localStorage.setItem("excelpack_cookie_consent", "accepted");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-neutral-900/95 text-white p-4 backdrop-blur-md border-t border-neutral-800 shadow-2xl">
      <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-orange-500 shrink-0" />
          <p className="text-neutral-300">
            We use cookies to optimize your browsing experience, analyze site traffic, and deliver personalized commercial proposals. By continuing, you consent to our privacy policy and industrial terms.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="rounded-lg bg-orange-600 px-5 py-2 text-xs font-bold text-white transition hover:bg-orange-700 shadow-sm"
          >
            Accept Cookies
          </button>
          <button
            onClick={handleAccept}
            className="text-neutral-400 hover:text-white p-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
