/**
 * Company Contact Constants
 * ─────────────────────────
 * Single source of truth for all contact details.
 * Values read from .env — never hard-coded in components.
 */

export const COMPANY = {
  name: "Excelpack Machines Private Limited",
  shortName: "ExcelPack Machines",
  phone: {
    primary: import.meta.env.VITE_COMPANY_PHONE_PRIMARY ?? "+91-9810123456",
    secondary: import.meta.env.VITE_COMPANY_PHONE_SECONDARY ?? "+91-9810123457",
  },
  email: import.meta.env.VITE_COMPANY_EMAIL ?? "info@excelpackmachine.com",
  whatsapp: import.meta.env.VITE_COMPANY_WHATSAPP ?? "919810123456",
  address: "A-12, Industrial Area, Greater Noida, Uttar Pradesh – 201306, India",
  location: "Greater Noida, U.P., India",
  website: "https://www.excelpackmachine.com",
  social: {
    linkedin: "https://linkedin.com/company/excelpack-machines",
    youtube: "https://youtube.com/@excelpacks",
    indiamart: "https://excelpacks.indiamart.com",
  },
} as const;

export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_INQUIRY_URL = WHATSAPP_URL(
  "Hello ExcelPack, I am interested in your packaging machines. Please share more details."
);
