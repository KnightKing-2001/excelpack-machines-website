import { Globe, Mail, MapPin, Phone } from "lucide-react";

import { Link } from "react-router-dom";

import type { TopBarProps } from "./TopBar.types";

export function TopBar({ email, phone, location, language, ctaLabel, ctaHref }: TopBarProps) {
  return (
    <div className="bg-[#001B3A] text-white">
      <div
        className="
          mx-auto
          flex
          h-10
          max-w-7xl
          items-center
          justify-between
          px-6
          text-xs
        "
      >
        {/* Contact Information */}

        <div className="flex items-center gap-6">
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-orange-400">
            <Mail size={14} />
            {email}
          </a>

          <div className="flex items-center gap-2">
            <Phone size={14} />

            {phone.join(" | ")}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={14} />

            {location}
          </div>
        </div>

        {/* Actions */}

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Globe size={14} />

            {language}
          </div>

          <Link
            to={ctaHref}
            className="
              rounded
              bg-orange-500
              px-4
              py-1.5
              font-semibold
              transition
              hover:bg-orange-600
            "
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
