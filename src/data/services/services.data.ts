export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export const services: ServiceItem[] = [
  {
    id: "installation-commissioning",
    title: "Installation & On-Site Commissioning",
    description:
      "Our factory-trained service engineers assist with complete on-site machine positioning, electrical hookups, calibration, and trial production runs.",
    icon: "Wrench",
    benefits: [
      "Precision machine leveling & alignment",
      "Trial runs under actual factory production conditions",
      "Detailed FAT (Factory Acceptance Test) signoff",
      "Operator & maintenance staff hands-on training",
    ],
  },
  {
    id: "amc-contracts",
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Protect your capital investment with scheduled preventive maintenance visits, priority emergency call-outs, and discounted spare parts.",
    icon: "ShieldCheck",
    benefits: [
      "Quarterly preventive health checkups",
      "Priority dispatch of service technicians",
      "Discounts on genuine Excelpack spare parts",
      "Extended warranty coverage options",
    ],
  },
  {
    id: "spare-parts",
    title: "Genuine Spare Parts & Change Parts",
    description:
      "We maintain a comprehensive inventory of genuine spare parts (sealing jaws, heater bands, forming collars, belts, solenoids) in Greater Noida for immediate dispatch.",
    icon: "Settings",
    benefits: [
      "100% OEM precision manufactured components",
      "Express 24-48 hour dispatch nationwide",
      "Custom forming collars for new pouch sizes",
      "Wear & tear replacement kits",
    ],
  },
  {
    id: "training-consulting",
    title: "Operator Training & Line Optimization",
    description:
      "Empower your plant personnel with thorough operational training covering HMI recipe setups, routine maintenance, troubleshooting, and safety protocols.",
    icon: "GraduationCap",
    benefits: [
      "On-site and virtual operator certification",
      "Troubleshooting quick-reference manuals",
      "Pouch seal quality optimization techniques",
      "Film wastage reduction best practices",
    ],
  },
];
