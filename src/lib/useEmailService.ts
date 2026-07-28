/**
 * Email Service — EmailJS Integration
 * ─────────────────────────────────────
 * Sends emails via EmailJS (no backend required).
 *
 * Setup (one-time, takes ~10 min):
 *  1. Go to https://www.emailjs.com → Sign up free
 *  2. Add Email Service → Connect Gmail/Outlook (info@excelpackmachine.com)
 *  3. Create Template 1 (admin notification) — copy template vars from below
 *  4. Create Template 2 (client quotation) — copy template vars from below
 *  5. Copy Service ID, Template IDs, Public Key → paste in .env
 */

import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const ADMIN_TMPL  = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE as string;
const QUOTE_TMPL  = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const isConfigured = () =>
  SERVICE_ID && ADMIN_TMPL && QUOTE_TMPL && PUBLIC_KEY &&
  SERVICE_ID !== "YOUR_SERVICE_ID";

// ── Types ──────────────────────────────────────────────────────────────────

export interface AdminNotificationParams {
  from_name: string;
  from_email: string;
  from_phone: string;
  from_company: string;
  machine_interest: string;
  industry: string;
  pouch_type?: string;
  target_speed?: string;
  message: string;
  inquiry_type: string;
  inquiry_id: string;
  submitted_at: string;
  whatsapp_link: string;
}

export interface QuotationEmailParams {
  to_name: string;
  to_email: string;
  to_company: string;
  machine_name: string;
  machine_model: string;
  machine_speed: string;
  custom_message: string;
  inquiry_id: string;
  sender_name: string;    // admin name
}

export type EmailResult =
  | { success: true }
  | { success: false; error: string };

// ── Admin Notification ─────────────────────────────────────────────────────
/**
 * Sends an email to info@excelpackmachine.com whenever a user submits a form.
 *
 * EmailJS Admin Template Variables to use:
 *   {{from_name}}, {{from_email}}, {{from_phone}}, {{from_company}},
 *   {{machine_interest}}, {{industry}}, {{pouch_type}}, {{target_speed}},
 *   {{message}}, {{inquiry_type}}, {{inquiry_id}}, {{submitted_at}},
 *   {{whatsapp_link}}
 */
export async function sendAdminNotification(
  params: AdminNotificationParams
): Promise<EmailResult> {
  if (!isConfigured()) {
    console.warn("[EmailJS] Not configured — skipping admin notification. Add VITE_EMAILJS_* to .env");
    return { success: false, error: "EmailJS not configured" };
  }
  try {
    await emailjs.send(SERVICE_ID, ADMIN_TMPL, params as Record<string, unknown>, PUBLIC_KEY);
    return { success: true };
  } catch (err) {
    console.error("[EmailJS] Admin notification failed:", err);
    return { success: false, error: String(err) };
  }
}

// ── Client Quotation Email ─────────────────────────────────────────────────
/**
 * Sends a professional quotation email to the client.
 * Called from Admin Dashboard "Send Quotation" button.
 *
 * EmailJS Quotation Template Variables to use:
 *   {{to_name}}, {{to_email}}, {{to_company}},
 *   {{machine_name}}, {{machine_model}}, {{machine_speed}},
 *   {{custom_message}}, {{inquiry_id}}, {{sender_name}}
 */
export async function sendClientQuotation(
  params: QuotationEmailParams
): Promise<EmailResult> {
  if (!isConfigured()) {
    return { success: false, error: "EmailJS not configured. Add VITE_EMAILJS_* keys to .env" };
  }
  try {
    await emailjs.send(SERVICE_ID, QUOTE_TMPL, params as Record<string, unknown>, PUBLIC_KEY);
    return { success: true };
  } catch (err) {
    console.error("[EmailJS] Quotation email failed:", err);
    return { success: false, error: String(err) };
  }
}

// ── Helper: Build notification params from an Inquiry ─────────────────────
export function buildAdminNotificationParams(inquiry: {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  machineInterest: string;
  industry: string;
  pouchType?: string;
  targetSpeed?: string;
  message: string;
  type: string;
}): AdminNotificationParams {
  return {
    from_name: inquiry.name,
    from_email: inquiry.email,
    from_phone: inquiry.phone,
    from_company: inquiry.company,
    machine_interest: inquiry.machineInterest,
    industry: inquiry.industry,
    pouch_type: inquiry.pouchType ?? "Not specified",
    target_speed: inquiry.targetSpeed ?? "Not specified",
    message: inquiry.message || "No additional message",
    inquiry_type: inquiry.type,
    inquiry_id: inquiry.id,
    submitted_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    whatsapp_link: `https://wa.me/${inquiry.phone.replace(/\D/g, "")}`,
  };
}
