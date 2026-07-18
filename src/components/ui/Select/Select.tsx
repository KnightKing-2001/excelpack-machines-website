import type { SelectProps } from "./Select.types";

const stateStyles = {
  default: "border-neutral-300 focus:border-primary-600 focus:ring-primary-600",

  success: "border-green-500 focus:border-green-600 focus:ring-green-600",

  error: "border-red-500 focus:border-red-600 focus:ring-red-600",
};

export function Select({
  label,

  helperText,

  errorMessage,

  successMessage,

  state = "default",

  options,

  placeholder,

  required,

  className = "",

  id,

  ...props
}: SelectProps) {
  const selectId = id ?? `select-${crypto.randomUUID()}`;

  const message = errorMessage ?? successMessage ?? helperText;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={selectId}

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

      <select
        id={selectId}

        aria-invalid={state === "error"}

        aria-describedby={message ? `${selectId}-message` : undefined}

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

          stateStyles[state],

          className,
        ]

          .filter(Boolean)

          .join(" ")}

        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}

        {options.map((option) => (
          <option
            key={option.value}

            value={option.value}

            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {message && (
        <p
          id={`${selectId}-message`}

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
