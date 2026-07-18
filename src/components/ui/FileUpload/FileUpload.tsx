import { useRef, useState } from "react";

import type { FileUploadProps } from "./FileUpload.types";

const stateStyles = {
  default: "border-neutral-300 hover:border-primary-600",

  success: "border-green-500",

  error: "border-red-500",
};

export function FileUpload({
  label,

  description,

  errorMessage,

  successMessage,

  state = "default",

  required,

  multiple = false,

  accept,

  maxSize,

  onFilesSelected,

  id,

  disabled,

  className = "",

  ...props
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);

  const uploadId = id ?? `file-upload-${crypto.randomUUID()}`;

  const message = errorMessage ?? successMessage;

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);

    const validFiles = maxSize ? fileArray.filter((file) => file.size <= maxSize) : fileArray;

    setFiles(validFiles);

    onFilesSelected?.(validFiles);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={uploadId}

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

      <div
        onClick={() => inputRef.current?.click()}

        className={[
          "flex",

          "cursor-pointer",

          "flex-col",

          "items-center",

          "justify-center",

          "rounded-md",

          "border-2",

          "border-dashed",

          "p-8",

          "text-center",

          "transition",

          disabled ? "cursor-not-allowed bg-neutral-100" : "",

          stateStyles[state],

          className,
        ]

          .filter(Boolean)

          .join(" ")}
      >
        <p
          className="
          text-sm
          text-neutral-700
        "
        >
          Click to upload files
        </p>

        <p
          className="
          mt-1
          text-xs
          text-neutral-500
        "
        >
          Drag and drop supported
        </p>

        <input
          ref={inputRef}

          id={uploadId}

          type="file"

          accept={accept}

          multiple={multiple}

          disabled={disabled}

          className="hidden"

          onChange={(event) => handleFiles(event.target.files)}

          {...props}
        />
      </div>

      {files.length > 0 && (
        <ul
          className="
          space-y-1
          text-xs
          text-neutral-600
        "
        >
          {files.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      )}

      {description && (
        <p
          className="
          text-xs
          text-neutral-500
        "
        >
          {description}
        </p>
      )}

      {message && (
        <p
          className={[
            "text-xs",

            state === "error" ? "text-red-600" : "",

            state === "success" ? "text-green-600" : "",
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
