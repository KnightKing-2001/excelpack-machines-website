import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { Link } from "react-router-dom";

import type { MegaMenuProps } from "./MegaMenu.types";

export function MegaMenu({
  sections,

  triggerLabel = "Products",
}: MegaMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        relative
      "

      onMouseEnter={() => setOpen(true)}

      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}

      <button
        type="button"

        aria-expanded={open}

        onClick={() => setOpen((value) => !value)}

        className="
          flex
          items-center
          gap-1
          text-sm
          font-medium
          text-neutral-700
          hover:text-primary-600
        "
      >
        {triggerLabel}

        <ChevronDown size={16} />
      </button>

      {/* Menu */}

      {open && (
        <div
          className="
            absolute
            left-1/2
            top-full
            z-50
            mt-4
            w-180 
            -translate-x-1/2
            rounded-lg
            border
            bg-white
            p-6
            shadow-lg
          "

          role="menu"
        >
          <div
            className="
              grid
              grid-cols-3
              gap-6
            "
          >
            {sections.map((section) => (
              <div key={section.label}>
                <h3
                  className="
                    mb-3
                    text-sm
                    font-semibold
                    text-neutral-900
                  "
                >
                  {section.label}
                </h3>

                <ul
                  className="
                    space-y-3
                  "
                >
                  {section.items.map((item) => (
                    <li key={item.title}>
                      {item.href ? (
                        <Link
                          to={item.href}

                          className="
                            flex
                            gap-3
                            rounded-md
                            p-2
                            transition
                            hover:bg-neutral-100
                          "
                        >
                          {item.icon && <span>{item.icon}</span>}

                          <div>
                            <p
                              className="
                                text-sm
                                font-medium
                                text-neutral-800
                              "
                            >
                              {item.title}
                            </p>

                            {item.description && (
                              <p
                                className="
                                  text-xs
                                  text-neutral-500
                                "
                              >
                                {item.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
