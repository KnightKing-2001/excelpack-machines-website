/**
 * Security Utilities
 * ──────────────────
 * Client-side input sanitization helpers.
 * These are a defence-in-depth layer — never a replacement for server-side validation.
 */

/** Strip all HTML tags and script injection patterns from a string */
export function sanitizeText(value: string): string {
  return value
    .replace(/<[^>]*>/g, "")           // strip HTML tags
    .replace(/javascript:/gi, "")       // remove JS URIs
    .replace(/on\w+\s*=/gi, "")         // remove inline event handlers
    .replace(/[<>'"`;]/g, "")           // strip dangerous chars
    .trim();
}

/** Sanitize and enforce max length */
export function sanitizeField(value: string, maxLength = 200): string {
  return sanitizeText(value).slice(0, maxLength);
}

/** Validate email format */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

/** Validate phone — allows +, digits, spaces, dashes, parens */
export function isValidPhone(phone: string): boolean {
  return /^[+\d][\d\s\-().]{6,19}$/.test(phone.trim());
}

/** Validate that a string is non-empty after sanitization */
export function isNonEmpty(value: string): boolean {
  return sanitizeText(value).length > 0;
}

/** Sanitize an entire form data object */
export function sanitizeFormData<T extends Record<string, string>>(
  data: T,
  maxLengths: Partial<Record<keyof T, number>> = {}
): T {
  const result = { ...data };
  for (const key in result) {
    const max = (maxLengths[key] as number) ?? 500;
    result[key] = sanitizeField(result[key], max) as T[typeof key];
  }
  return result;
}
