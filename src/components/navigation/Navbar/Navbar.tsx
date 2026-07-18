import { Link } from "react-router-dom";

import type { NavbarProps } from "./Navbar.types";

export function Navbar({
  logo,

  items,

  ctaLabel,

  ctaHref,
}: NavbarProps) {
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
          max-w-7xl
          items-center
          justify-between
          px-6
        "
        aria-label="Main navigation"
      >
        {/* Logo */}

        <div>{logo}</div>

        {/* Navigation Links */}

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

        {/* CTA */}

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
      </nav>
    </header>
  );
}
