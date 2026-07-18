import { useState } from "react";

import { Link } from "react-router-dom";

import { Menu, X } from "lucide-react";

import type { MobileNavbarProps } from "./MobileNavbar.types";

export function MobileNavbar({
  logo,

  items,

  ctaLabel,

  ctaHref,
}: MobileNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        border-b
        bg-white
        lg:hidden
      "
    >
      <nav
        className="
          flex
          h-16
          items-center
          justify-between
          px-4
        "

        aria-label="Mobile navigation"
      >
        {/* Logo */}

        <div>{logo}</div>

        {/* Menu Button */}

        <button
          type="button"

          onClick={() => setOpen((value) => !value)}

          aria-expanded={open}

          aria-label={open ? "Close menu" : "Open menu"}

          className="
            rounded-md
            p-2
            text-neutral-700
            hover:bg-neutral-100
          "
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
            border-t
            px-4
            py-6
          "
        >
          <ul
            className="
              flex
              flex-col
              gap-5
            "
          >
            {items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    to={item.href}

                    onClick={() => setOpen(false)}

                    className="
                      text-sm
                      font-medium
                      text-neutral-700
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="
                      text-sm
                      font-medium
                      text-neutral-700
                    "
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {ctaLabel && (
            <Link
              to={ctaHref ?? "#"}

              onClick={() => setOpen(false)}

              className="
                mt-6
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-primary-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
              "
            >
              {ctaLabel}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
