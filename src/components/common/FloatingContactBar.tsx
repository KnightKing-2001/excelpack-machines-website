import { useState, useEffect } from "react";
import { MessageCircle, Phone, FileText, X, ChevronUp } from "lucide-react";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { COMPANY, WHATSAPP_INQUIRY_URL } from "@/constants/company";

export function FloatingContactBar() {
  const { setQuoteModalOpen } = useInquiryStore();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Show after 3s or 200px scroll
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const onScroll = () => { if (window.scrollY > 200) setVisible(true); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 float-bar-enter">
      {/* Expanded action buttons */}
      {expanded && (
        <div className="flex flex-col gap-2 items-end">
          {/* WhatsApp */}
          <a
            href={WHATSAPP_INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>

          {/* Call */}
          <a
            href={`tel:${COMPANY.phone.primary}`}
            className="flex items-center gap-2.5 rounded-full bg-blue-900 px-4 py-2.5 text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>

          {/* Get Quote */}
          <button
            onClick={() => { setQuoteModalOpen(true); setExpanded(false); }}
            className="flex items-center gap-2.5 rounded-full bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform"
          >
            <FileText className="h-4 w-4" />
            Get a Quote
          </button>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label={expanded ? "Close contact options" : "Open contact options"}
        className={`
          relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl
          transition-all duration-300
          ${expanded
            ? "bg-neutral-800 rotate-0"
            : "bg-orange-600 hover:bg-orange-700"
          }
        `}
      >
        {/* Pulse ring when closed */}
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-orange-500 opacity-50 animate-ping" />
        )}
        {expanded
          ? <X className="h-6 w-6 text-white" />
          : <ChevronUp className="h-6 w-6 text-white" />
        }
      </button>
    </div>
  );
}
