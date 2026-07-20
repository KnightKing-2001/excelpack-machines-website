import type { ProductCardProps } from "./ProductCard.types";

export function ProductCard({
  title,
  description,
  image,
  icon,
  category,
  specifications = [],
  href,
  className = "",
}: ProductCardProps) {
  const content = (
    <article
      className={[
        "group",
        "overflow-hidden",
        "rounded-lg",
        "border",
        "border-neutral-200",
        "bg-white",
        "shadow-sm",
        "transition-all",
        "duration-300",
        "hover:-translate-y-1",
        "hover:shadow-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {image && (
        <div
          className="
            h-52
            overflow-hidden
            bg-neutral-100
          "
        >
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </div>
      )}

      <div className="p-6">
        {icon && (
          <div
            className="
              mb-4
              text-primary-600
            "
          >
            {icon}
          </div>
        )}

        {category && (
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-wide
              text-accent-600
            "
          >
            {category}
          </span>
        )}

        <h3
          className="
            mt-2
            text-xl
            font-semibold
            text-neutral-900
            group-hover:text-primary-600
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            text-neutral-600
          "
        >
          {description}
        </p>

        {specifications.length > 0 && (
          <ul
            className="
              mt-4
              space-y-1
              text-sm
              text-neutral-600
            "
          >
            {specifications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        )}

        {href && (
          <span
            className="
              mt-5
              inline-flex
              text-sm
              font-semibold
              text-primary-600
            "
          >
            View Product →
          </span>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} aria-label={`View ${title}`}>
        {content}
      </a>
    );
  }

  return content;
}
