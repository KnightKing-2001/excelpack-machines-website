import type { IndustryCardProps } from "./IndustryCard.types";

export function IndustryCard({
  title,
  description,
  image,
  icon,
  href,
  className = "",
}: IndustryCardProps) {
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
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-neutral-100">
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
        {/* Icon */}
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

        {/* Title */}
        <h3
          className="
            text-xl
            font-semibold
            text-neutral-900
            transition-colors
            group-hover:text-primary-600
          "
        >
          {title}
        </h3>

        {/* Description */}
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

        {href && (
          <span
            className="
              mt-5
              inline-flex
              text-sm
              font-medium
              text-primary-600
            "
          >
            Explore Industry →
          </span>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} aria-label={`Explore ${title}`}>
        {content}
      </a>
    );
  }

  return content;
}
