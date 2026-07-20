import type { BlogCardProps } from "./BlogCard.types";

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  author,
  publishedAt,
  readingTime,
  href = "#",
  className = "",
}: BlogCardProps) {
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
      <a href={href}>
        <div className="aspect-video overflow-hidden bg-neutral-100">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-neutral-400">No Image</div>
          )}
        </div>

        <div className="p-6">
          {category && (
            <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
              {category}
            </span>
          )}

          <h3 className="mt-4 text-xl font-semibold text-neutral-900">{title}</h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-600">{excerpt}</p>

          {(author || publishedAt || readingTime) && (
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-neutral-500">
              {author && <span>{author}</span>}
              {publishedAt && <span>{publishedAt}</span>}
              {readingTime && <span>{readingTime}</span>}
            </div>
          )}
        </div>
      </a>
    </article>
  );
}
