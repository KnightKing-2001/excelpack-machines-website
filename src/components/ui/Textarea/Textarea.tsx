import type { TextareaProps } from "./Textarea.types";

const stateStyles = {
  default: "border-neutral-300 focus:border-primary-600 focus:ring-primary-600",

  success: "border-green-500 focus:border-green-600 focus:ring-green-600",

  error: "border-red-500 focus:border-red-600 focus:ring-red-600",
};

export function Textarea({
  label,

  helperText,

  errorMessage,

  successMessage,

  state = "default",

  required,

  showCharacterCount = false,

  maxLength,

  value,

  defaultValue,

  className = "",

  id,

  ...props
}: TextareaProps) {
  const textareaId = id ?? `textarea-${crypto.randomUUID()}`;

  const message = errorMessage ?? successMessage ?? helperText;

  const currentLength = String(value ?? defaultValue ?? "").length;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={textareaId}

          className="
            text-sm
            font-medium
            text-neutral-800
          "
        >
          {label}

          {required && <span className="text-red-600"> *</span>}
        </label>
      )}

      <textarea
        id={textareaId}

        value={value}

        defaultValue={defaultValue}

        maxLength={maxLength}

        aria-invalid={state === "error"}

        aria-describedby={message ? `${textareaId}-message` : undefined}

        className={[
          "w-full",

          "rounded-md",

          "border",

          "bg-white",

          "px-3",

          "py-2",

          "text-sm",

          "outline-none",

          "transition",

          "focus:ring-2",

          "focus:ring-offset-1",

          "disabled:cursor-not-allowed",

          "disabled:bg-neutral-100",

          "resize-y",

          stateStyles[state],

          className,
        ]

          .filter(Boolean)

          .join(" ")}

        {...props}
      />

      <div
        className="
          flex
          justify-between
          items-center
        "
      >
        {message && (
          <p
            id={`${textareaId}-message`}

            className={[
              "text-xs",

              state === "error" ? "text-red-600" : "",

              state === "success" ? "text-green-600" : "",

              state === "default" ? "text-neutral-500" : "",
            ]

              .filter(Boolean)

              .join(" ")}
          >
            {message}
          </p>
        )}

        {showCharacterCount && maxLength && (
          <span
            className="
              text-xs
              text-neutral-500
              ml-auto
            "
          >
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
