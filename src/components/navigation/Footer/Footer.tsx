import { Link } from "react-router-dom";

import type { FooterProps } from "./Footer.types";

export function Footer({
  logo,

  description,

  columns,

  socialLinks = [],

  copyright,
}: FooterProps) {
  return (
    <footer
      className="
        border-t
        bg-neutral-950
        text-neutral-300
      "
    >
      <div
        className="
          mx-auto
          max-w-screen-2xl
          px-6
          py-14
        "
      >
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* Company */}

          <div
            className="
              lg:col-span-2
            "
          >
            <div>{logo}</div>

            {description && (
              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-6
                  text-neutral-400
                "
              >
                {description}
              </p>
            )}
          </div>

          {/* Columns */}

          {columns.map((column) => (
            <div key={column.title}>
              <h3
                className="
                  mb-4
                  text-sm
                  font-semibold
                  text-white
                "
              >
                {column.title}
              </h3>

              <ul
                className="
                  space-y-3
                "
              >
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}

                      className="
                        text-sm
                        text-neutral-400
                        transition
                        hover:text-white
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}

        {socialLinks.length > 0 && (
          <div
            className="
              mt-10
              flex
              gap-4
            "
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}

                href={social.href}

                target="_blank"

                rel="noopener noreferrer"

                aria-label={social.label}

                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-700
                  transition
                  hover:bg-neutral-800
                "
              >
                {social.icon ?? social.label}
              </a>
            ))}
          </div>
        )}

        {/* Bottom */}

        <div
          className="
            mt-12
            border-t
            border-neutral-800
            pt-6
            text-sm
            text-neutral-500
          "
        >
          {copyright}
        </div>
      </div>
    </footer>
  );
}
