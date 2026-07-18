import { Link } from "react-router-dom";

import { X } from "lucide-react";

import type { MobileDrawerProps } from "./MobileDrawer.types";

export function MobileDrawer({
  open,

  onClose,

  items,

  logo,

  footerContent,
}: MobileDrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
      "

      role="dialog"

      aria-modal="true"

      aria-label="Mobile navigation"
    >
      {/* Overlay */}

      <button
        type="button"

        onClick={onClose}

        aria-label="Close menu"

        className="
          absolute
          inset-0
          bg-black/40
        "
      />

      {/* Drawer */}

      <aside
        className="
          relative
          flex
          h-full
          w-[85%]
          max-w-sm
          flex-col
          bg-white
          shadow-xl
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            px-5
            py-4
          "
        >
          {logo}

          <button
            type="button"

            onClick={onClose}

            aria-label="Close navigation"

            className="
              rounded-md
              p-2
              text-neutral-700
              hover:bg-neutral-100
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}

        <nav
          className="
            flex-1
            overflow-y-auto
            px-5
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

                    onClick={onClose}

                    className="
                      block
                      text-base
                      font-medium
                      text-neutral-800
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="
                      block
                      text-base
                      font-medium
                      text-neutral-800
                    "
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}

        {footerContent && (
          <div
            className="
              border-t
              px-5
              py-5
            "
          >
            {footerContent}
          </div>
        )}
      </aside>
    </div>
  );
}
