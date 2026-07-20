import type { ServiceCardProps } from "./ServiceCard.types";

export function ServiceCard({
  title,
  description,
  icon,
  image,
  href,
  className = "",
}: ServiceCardProps) {
  const card = (
    <article
      className={[
        "group",
        "rounded-lg",
        "border",
        "border-neutral-200",
        "bg-white",
        "p-6",
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
        <div
          className="
          mb-5
          h-40
          overflow-hidden
          rounded-md
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
          Learn More →
        </span>
      )}
    </article>
  );

  if (href) {
    return (
      <a href={href} aria-label={`Learn more about ${title}`}>
        {card}
      </a>
    );
  }

  return card;
}
