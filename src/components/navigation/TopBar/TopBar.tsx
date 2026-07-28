import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import type { TopBarProps } from "./TopBar.types";

export function TopBar({ email, phone, location, language, ctaLabel, ctaHref }: TopBarProps) {
  return (
    <div className="bg-[#001B3A] text-white overflow-hidden">
      <div className="mx-auto flex h-10 max-w-screen-2xl items-center justify-between px-4 text-xs">

        {/* Contact Information — hide details progressively on smaller screens */}
        <div className="flex items-center gap-3 min-w-0 overflow-hidden">
          {/* Email — hidden below md */}
          <a
            href={`mailto:${email}`}
            className="hidden md:flex items-center gap-1.5 hover:text-orange-400 transition shrink-0"
          >
            <Mail size={13} />
            <span className="truncate max-w-[180px]">{email}</span>
          </a>

          {/* Phone — always visible */}
          <a
            href={`tel:${phone[0]?.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-orange-400 transition shrink-0"
          >
            <Phone size={13} />
            <span>{phone[0]}</span>
          </a>

          {/* Location — hidden below lg */}
          <div className="hidden lg:flex items-center gap-1.5 shrink-0">
            <MapPin size={13} />
            <span>{location}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language — hidden below sm */}
          <div className="hidden sm:flex items-center gap-1 text-neutral-300">
            <Globe size={13} />
            <span>{language}</span>
          </div>

          <Link
            to={ctaHref}
            className="rounded bg-orange-500 px-3 py-1 font-semibold transition hover:bg-orange-600 text-[11px] whitespace-nowrap"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
