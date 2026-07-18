import { Link } from "react-router-dom";

import { ChevronRight, Home } from "lucide-react";

import type { BreadcrumbsProps } from "./Breadcrumbs.types";

export function Breadcrumbs({
  items,

  separator = <ChevronRight size={16} />,

  homeLabel = "Home",

  homeHref = "/",
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"

      className="
        w-full
      "
    >
      <ol
        className="
          flex
          flex-wrap
          items-center
          gap-2
          text-sm
        "
      >
        {/* Home */}

        <li
          className="
            flex
            items-center
            gap-2
          "
        >
          <Link
            to={homeHref}

            className="
              flex
              items-center
              gap-1
              text-neutral-500
              transition
              hover:text-primary-600
            "
          >
            <Home size={15} />

            <span>{homeLabel}</span>
          </Link>

          {items.length > 0 && separator}
        </li>

        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}

            className="
              flex
              items-center
              gap-2
            "
          >
            {index !== items.length - 1 ? (
              <Link
                to={item.href ?? "#"}

                className="
                  text-neutral-500
                  transition
                  hover:text-primary-600
                "
              >
                {item.icon}

                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"

                className="
                  font-medium
                  text-neutral-900
                "
              >
                {item.icon}

                {item.label}
              </span>
            )}

            {index !== items.length - 1 && separator}
          </li>
        ))}
      </ol>
    </nav>
  );
}
