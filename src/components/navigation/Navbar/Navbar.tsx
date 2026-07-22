import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { MobileDrawer } from "@/components/navigation/MobileDrawer";

import type { NavbarProps } from "./Navbar.types";

export function Navbar({ logo, items, ctaLabel, ctaHref }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-40
        border-b
        bg-white
      "
    >
      <nav
        className="
          mx-auto
          flex
          h-20
          max-w-360
          items-center
          justify-between
          px-4
        "
        aria-label="Main navigation"
      >
        {/* Logo */}

        <div>{logo}</div>

        {/* Desktop Navigation Links */}

        <ul
          className="
            hidden
            items-center
            gap-8
            lg:flex
          "
        >
          {items.map((item) => (
            <li key={item.label} className="relative">
              {item.href ? (
                <Link
                  to={item.href}
                  className="
                    text-sm
                    font-medium
                    text-neutral-700
                    transition
                    hover:text-primary-600
                  "
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="
                    cursor-pointer
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

        {/* Desktop CTA */}

        {ctaLabel && (
          <Link
            to={ctaHref ?? "#"}
            className="
              hidden
              rounded-md
              bg-primary-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-primary-700
              lg:inline-flex
            "
          >
            {ctaLabel}
          </Link>
        )}

        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          className="
            rounded-md
            p-2
            text-neutral-700
            hover:bg-neutral-100
            lg:hidden
          "
        >
          <Menu size={28} />
        </button>

        {/* Mobile Drawer */}

        <MobileDrawer
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          items={items}
          logo={logo}
        />
      </nav>
    </header>
  );
}
