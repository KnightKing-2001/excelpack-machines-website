import type { TeamMemberCardProps } from "./TeamMemberCard.types";

export function TeamMemberCard({
  name,
  role,
  image,
  description,
  socialLinks,
  className = "",
}: TeamMemberCardProps) {
  return (
    <article
      className={[
        "overflow-hidden",
        "rounded-xl",
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

      <div className="aspect-square overflow-hidden bg-neutral-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              text-5xl
              font-bold
              text-primary-600
            "
          >
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-6">
        <h3
          className="
            text-xl
            font-semibold
            text-neutral-900
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-1
            text-sm
            font-medium
            text-primary-600
          "
        >
          {role}
        </p>

        {description && (
          <p
            className="
              mt-4
              text-sm
              leading-relaxed
              text-neutral-600
            "
          >
            {description}
          </p>
        )}

        {/* Social */}

        {socialLinks && (
          <div
            className="
              mt-5
              flex
              gap-4
              text-sm
            "
          >
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-primary-600
                  hover:underline
                "
              >
                LinkedIn
              </a>
            )}

            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-primary-600
                  hover:underline
                "
              >
                Twitter
              </a>
            )}

            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                className="
                  text-primary-600
                  hover:underline
                "
              >
                Email
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
