export interface ResourceItem {
  id: string;
  title: string;
  category: "Catalogue" | "Case Study" | "Technical Datasheet" | "Video Guide";
  description: string;
  fileSize?: string;
  downloadUrl?: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const resources: ResourceItem[] = [
  {
    id: "cat-2026",
    title: "Excelpack Industrial Packaging Solutions Catalogue 2026",
    category: "Catalogue",
    description:
      "Comprehensive product catalogue featuring full technical specifications for VFFS 3 Servo, 2 Servo, Pneumatic, and Special Purpose Machines.",
    fileSize: "4.5 MB PDF",
    downloadUrl: "#",
    date: "2026",
  },
  {
    id: "ds-ex-v3-mh",
    title: "EX-V3-MH High-Speed VFFS Multihead Datasheet",
    category: "Technical Datasheet",
    description:
      "Detailed engineering dimensions, electrical ratings, air consumption, and floor plan layout for EX-V3-MH.",
    fileSize: "1.2 MB PDF",
    downloadUrl: "#",
    date: "2026",
  },
  {
    id: "ds-ex-spm",
    title: "Special Purpose Machine (SPM) Capabilities & Case Studies",
    category: "Case Study",
    description:
      "Overview of custom automation projects delivered for snack food leaders and agricultural seed processors.",
    fileSize: "2.8 MB PDF",
    downloadUrl: "#",
    date: "2026",
  },
  {
    id: "vffs-maintenance-guide",
    title: "VFFS Machine Daily & Weekly Preventive Maintenance Checklist",
    category: "Technical Datasheet",
    description:
      "Essential maintenance steps for plant engineers to maximize uptime and sealing jaw longevity.",
    fileSize: "850 KB PDF",
    downloadUrl: "#",
    date: "2026",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What types of packaging machines does Excelpack manufacture?",
    answer:
      "Excelpack specializes in Vertical Form Fill Seal (VFFS) packaging machines in 3-Servo, 2-Servo, and Pneumatic drive configurations, combined with Multihead Weighers, Volumetric Cup Fillers, and Auger Fillers, as well as custom Special Purpose Machines (SPMs).",
    category: "General",
  },
  {
    question: "What is the difference between 3-Servo, 2-Servo, and Pneumatic VFFS machines?",
    answer:
      "3-Servo machines offer independent precision control over film pulling, horizontal sealing, and vertical sealing for maximum speeds (up to 120 PPM) and zero film waste. 2-Servo machines control film pull and horizontal seal with high efficiency and lower cost. Pneumatic machines utilize heavy-duty pneumatic cylinders for rugged, reliable entry-to-mid level packaging.",
    category: "Technology",
  },
  {
    question: "Where is Excelpack's manufacturing facility located?",
    answer:
      "Our main engineering and manufacturing facility is located in Greater Noida, Uttar Pradesh, India. Clients are welcome to visit for Factory Acceptance Testing (FAT) and machine demonstrations.",
    category: "Company",
  },
  {
    question: "Can Excelpack machines handle bio-degradable or recyclable packaging films?",
    answer:
      "Yes, our 3-Servo and 2-Servo machines feature programmable sealing temperature curves and specialized jaw profiles engineered to handle recyclable PE, mono-material films, and bio-degradable barrier films.",
    category: "Technology",
  },
  {
    question: "What warranty and after-sales support do you provide?",
    answer:
      "All Excelpack machines come with a standard 12-month comprehensive warranty. We provide on-site installation, operator training, quarterly AMC services, and express dispatch of genuine spare parts.",
    category: "Support",
  },
];
