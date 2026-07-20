import type { TestimonialCardProps } from "./TestimonialCard.types";

export function TestimonialCard({
  quote,
  name,
  company,
  designation,
  avatar,
  rating = 0,
  className = "",
}: TestimonialCardProps) {
  return (
    <article
      className={[
        "rounded-xl",
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
      {/* Quote */}
      <div
        className="
          mb-5
          text-4xl
          font-bold
          text-primary-600
        "
      >
        "
      </div>

      <p
        className="
          text-base
          leading-relaxed
          text-neutral-700
        "
      >
        {quote}
      </p>

      {/* Rating */}
      {rating > 0 && (
        <div
          className="
            mt-5
            flex
            gap-1
            text-accent-500
          "
          aria-label={`${rating} star rating`}
        >
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
      )}

      {/* Customer */}
      <div
        className="
          mt-6
          flex
          items-center
          gap-4
        "
      >
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="
              h-12
              w-12
              rounded-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-primary-100
              font-semibold
              text-primary-700
            "
          >
            {name.charAt(0)}
          </div>
        )}

        <div>
          <h3
            className="
              font-semibold
              text-neutral-900
            "
          >
            {name}
          </h3>

          <p
            className="
              text-sm
              text-neutral-600
            "
          >
            {designation && `${designation}, `}
            {company}
          </p>
        </div>
      </div>
    </article>
  );
}
