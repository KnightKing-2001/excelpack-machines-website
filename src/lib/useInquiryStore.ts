import { create } from "zustand";

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
  status: "New" | "Contacted" | "Quoted" | "Closed";
  createdAt: string;
  type: "Quote Request" | "Brochure Download" | "General Contact" | "Spare Parts";
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
    status: "Contacted",
    createdAt: "2026-07-26T14:15:00Z",
    type: "Brochure Download",
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
  },
];

interface InquiryStore {
  inquiries: Inquiry[];
  quoteModalOpen: boolean;
  brochureModalOpen: boolean;
  selectedMachineId?: string;
  setQuoteModalOpen: (open: boolean, machineId?: string) => void;
  setBrochureModalOpen: (open: boolean, machineId?: string) => void;
  addInquiry: (inquiry: Omit<Inquiry, "id" | "status" | "createdAt">) => void;
  updateStatus: (id: string, status: Inquiry["status"]) => void;
  deleteInquiry: (id: string) => void;
}

export const useInquiryStore = create<InquiryStore>((set) => ({
  inquiries: INITIAL_INQUIRIES,
  quoteModalOpen: false,
  brochureModalOpen: false,
  selectedMachineId: undefined,

  setQuoteModalOpen: (open, machineId) =>
    set({ quoteModalOpen: open, selectedMachineId: machineId }),

  setBrochureModalOpen: (open, machineId) =>
    set({ brochureModalOpen: open, selectedMachineId: machineId }),

  addInquiry: (newInquiry) =>
    set((state) => ({
      inquiries: [
        {
          ...newInquiry,
          id: `inq-${Date.now().toString().slice(-4)}`,
          status: "New",
          createdAt: new Date().toISOString(),
        },
        ...state.inquiries,
      ],
    })),

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
}));
