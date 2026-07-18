import type { TextFieldProps } from "./TextField.types";

const stateStyles = {
  default: "border-neutral-300 focus:border-primary-600 focus:ring-primary-600",

  success: "border-green-500 focus:border-green-600 focus:ring-green-600",

  error: "border-red-500 focus:border-red-600 focus:ring-red-600",
};

export function TextField({
  label,
  helperText,
  errorMessage,
  successMessage,

  state = "default",

  leftIcon,
  rightIcon,

  required,

  className = "",

  id,

  ...props
}: TextFieldProps) {
  const inputId = id ?? `textfield-${crypto.randomUUID()}`;

  const message = errorMessage ?? successMessage ?? helperText;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
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

      <div className="relative">
        {leftIcon && (
          <div
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-neutral-500
            "
          >
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}

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

            leftIcon ? "pl-10" : "",

            rightIcon ? "pr-10" : "",

            stateStyles[state],

            className,
          ]
            .filter(Boolean)
            .join(" ")}

          aria-invalid={state === "error"}

          aria-describedby={message ? `${inputId}-message` : undefined}

          {...props}
        />

        {rightIcon && (
          <div
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-neutral-500
            "
          >
            {rightIcon}
          </div>
        )}
      </div>

      {message && (
        <p
          id={`${inputId}-message`}

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
    </div>
  );
}
