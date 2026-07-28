import { create } from "zustand";
import { persist } from "zustand/middleware";

// ── Inquiry Status Pipeline ───────────────────────────────────────────────
export type InquiryStatus = "New" | "In Review" | "Quoted" | "Converted" | "Closed";

export interface EmailLog {
  sentAt: string;       // ISO timestamp
  sentBy: string;       // admin username
  templateType: "quotation" | "followup";
  toEmail: string;
}

export interface Inquiry {
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
  status: InquiryStatus;
  createdAt: string;
  type: "Quote Request" | "Brochure Download" | "General Contact" | "Spare Parts";
  // New tracking fields
  isRead: boolean;
  notes: string;          // internal admin notes
  emailLog: EmailLog[];   // history of sent emails
}

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "inq-101",
    name: "Rajesh Kumar",
    email: "rajesh@haldiramssnacks.com",
    phone: "+91 98765 43210",
    company: "Haldiram Snacks Pvt Ltd",
    machineInterest: "EX-V3-MH",
    industry: "Snacks, Namkeen & Confectionery",
    pouchType: "Pillow Bag (100g Namkeen)",
    targetSpeed: "110-120 PPM",
    message: "We need 2 lines of high-speed 3-servo VFFS with multihead weighers for our Noida unit.",
    status: "New",
    createdAt: "2026-07-27T10:30:00Z",
    type: "Quote Request",
    isRead: false,
    notes: "",
    emailLog: [],
  },
  {
    id: "inq-102",
    name: "Elena Rostova",
    email: "erostova@agropol.eu",
    phone: "+44 20 7946 0912",
    company: "AgroPol International",
    machineInterest: "EX-V3-AF",
    industry: "Pharmaceuticals & Agrochemicals",
    pouchType: "Gusset Pouch 1kg",
    targetSpeed: "70 PPM",
    message: "Requesting detailed technical brochure and export pricing to Hamburg.",
    status: "In Review",
    createdAt: "2026-07-26T14:15:00Z",
    type: "Brochure Download",
    isRead: true,
    notes: "Export client — prepare CIF Hamburg pricing",
    emailLog: [],
  },
  {
    id: "inq-103",
    name: "Sunil Verma",
    email: "sunil@shreeraamspices.in",
    phone: "+91 99123 88765",
    company: "Shree Raam Spices Industries",
    machineInterest: "EX-V2-AF",
    industry: "Spices, Flour & Powders",
    pouchType: "Pillow Pouch 50g / 100g",
    targetSpeed: "60-70 PPM",
    message: "Urgent quote required for Turmeric and Chili powder auger packaging machine.",
    status: "Quoted",
    createdAt: "2026-07-25T11:00:00Z",
    type: "Quote Request",
    isRead: true,
    notes: "",
    emailLog: [
      {
        sentAt: "2026-07-25T14:30:00Z",
        sentBy: "Abhishek",
        templateType: "quotation",
        toEmail: "sunil@shreeraamspices.in",
      },
    ],
  },
];

// ── Store Interface ───────────────────────────────────────────────────────

interface InquiryStore {
  inquiries: Inquiry[];
  quoteModalOpen: boolean;
  brochureModalOpen: boolean;
  selectedMachineId?: string;

  // Modal controls
  setQuoteModalOpen: (open: boolean, machineId?: string) => void;
  setBrochureModalOpen: (open: boolean, machineId?: string) => void;

  // Inquiry CRUD
  addInquiry: (inquiry: Omit<Inquiry, "id" | "status" | "createdAt" | "isRead" | "notes" | "emailLog">) => string;
  updateStatus: (id: string, status: InquiryStatus) => void;
  deleteInquiry: (id: string) => void;

  // New actions
  markRead: (id: string) => void;
  markAllRead: () => void;
  updateNotes: (id: string, notes: string) => void;
  logEmailSent: (id: string, log: EmailLog) => void;

  // Computed
  unreadCount: () => number;
}

export const useInquiryStore = create<InquiryStore>()(
  persist(
    (set, get) => ({
      inquiries: INITIAL_INQUIRIES,
      quoteModalOpen: false,
      brochureModalOpen: false,
      selectedMachineId: undefined,

      setQuoteModalOpen: (open, machineId) =>
        set({ quoteModalOpen: open, selectedMachineId: machineId }),

      setBrochureModalOpen: (open, machineId) =>
        set({ brochureModalOpen: open, selectedMachineId: machineId }),

      // Returns the new inquiry's ID so it can be used for email sending
      addInquiry: (newInquiry) => {
        const id = `inq-${Date.now().toString().slice(-6)}`;
        set((state) => ({
          inquiries: [
            {
              ...newInquiry,
              id,
              status: "New" as InquiryStatus,
              createdAt: new Date().toISOString(),
              isRead: false,
              notes: "",
              emailLog: [],
            },
            ...state.inquiries,
          ],
        }));
        return id;
      },

      updateStatus: (id, status) =>
        set((state) => ({
          inquiries: state.inquiries.map((inq) =>
            inq.id === id ? { ...inq, status } : inq
          ),
        })),

      deleteInquiry: (id) =>
        set((state) => ({
          inquiries: state.inquiries.filter((inq) => inq.id !== id),
        })),

      markRead: (id) =>
        set((state) => ({
          inquiries: state.inquiries.map((inq) =>
            inq.id === id ? { ...inq, isRead: true } : inq
          ),
        })),

      markAllRead: () =>
        set((state) => ({
          inquiries: state.inquiries.map((inq) => ({ ...inq, isRead: true })),
        })),

      updateNotes: (id, notes) =>
        set((state) => ({
          inquiries: state.inquiries.map((inq) =>
            inq.id === id ? { ...inq, notes } : inq
          ),
        })),

      logEmailSent: (id, log) =>
        set((state) => ({
          inquiries: state.inquiries.map((inq) =>
            inq.id === id
              ? { ...inq, emailLog: [log, ...inq.emailLog], status: "Quoted" }
              : inq
          ),
        })),

      unreadCount: () => get().inquiries.filter((inq) => !inq.isRead).length,
    }),
    {
      name: "ep-inquiries-v2",
      // Only persist inquiries, not modal state
      partialize: (state) => ({ inquiries: state.inquiries }),
    }
  )
);
