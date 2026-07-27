export interface Industry {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
  keyRequirements: string[];
  recommendedModels: string[];
  productExamples: string[];
}

export const industries: Industry[] = [
  {
    id: "food-snacks",
    name: "Snacks, Namkeen & Confectionery",
    subtitle: "High-speed, zero-breakage packaging for delicate snack foods",
    description:
      "Excelpack delivers high-speed VFFS packaging systems integrated with multihead weighers designed specifically for potato chips, namkeen, fryums, extruded snacks, gummies, and candies. Our systems feature nitrogen gas flushing for maximum shelf life and nitrogen retention.",
    image: "/images/hero-01.webp",
    iconName: "Utensils",
    keyRequirements: [
      "Low product breakage during drop",
      "Precision combination weighing (±0.2g accuracy)",
      "Integrated Nitrogen Gas Flushing",
      "Hygienic SS304 food-grade contact surfaces",
    ],
    recommendedModels: ["EX-V3-MH", "EX-V2-MH", "EX-PN-MH"],
    productExamples: ["Potato Chips", "Bhujia & Namkeen", "Extruded Snacks", "Candies & Chocolates", "Popcorn"],
  },
  {
    id: "spices-powders",
    name: "Spices, Flour & Powders",
    subtitle: "Dust-tight, precise auger filling for fine ground products",
    description:
      "Powder packaging requires tight sealing, dust containment, and accurate screw revolutions. Excelpack auger filler systems prevent dusting, ensure clean seals, and deliver consistent pouch weights for wheat flour, ground spices, coffee, and protein powders.",
    image: "/images/hero-02.webp",
    iconName: "Package",
    keyRequirements: [
      "Dust-free filling with vacuum extraction",
      "Servo-driven auger screw accuracy",
      "Sanitary easy-clean hopper",
      "Gas flushing to prevent oxidation",
    ],
    recommendedModels: ["EX-V3-AF", "EX-V2-AF", "EX-PN-AF"],
    productExamples: ["Atta & Maida", "Turmeric & Chili Powder", "Milk Powder", "Coffee Premixes", "Custard Powder"],
  },
  {
    id: "grains-pulses",
    name: "Grains, Pulses, Sugar & Salt",
    subtitle: "High-volume, rapid volumetric packaging for staples",
    description:
      "For free-flowing bulk food staples like rice, lentils, refined sugar, and salt, Excelpack volumetric cup fillers provide fast, cost-effective packaging with minimal maintenance requirement.",
    image: "/images/hero-03.webp",
    iconName: "Wheat",
    keyRequirements: [
      "Continuous high-speed volumetric cup dosing",
      "Heavy-duty wear-resistant cup design",
      "Strong seal integrity for heavy pouches (1kg - 5kg)",
    ],
    recommendedModels: ["EX-V3-CF", "EX-V2-CF", "EX-PN-CF"],
    productExamples: ["Basmati Rice", "Pulses & Lentils", "Refined Sugar", "Iodized Salt", "Mustard Seeds"],
  },
  {
    id: "dry-fruits-nuts",
    name: "Dry Fruits, Nuts & Seeds",
    subtitle: "Premium packaging for high-value nuts and seeds",
    description:
      "High-value dry fruits demand exact grammage accuracy and vacuum/gas flush capabilities to maintain freshness. Our multihead combination weighers eliminate overfilling and safeguard profit margins.",
    image: "/images/hero-04.webp",
    iconName: "Apple",
    keyRequirements: [
      "Gentle product handling to prevent scarring",
      "Multi-head combination weighing precision",
      "Vacuum and MAP (Modified Atmosphere Packaging) option",
    ],
    recommendedModels: ["EX-V3-MH", "EX-V2-MH"],
    productExamples: ["Almonds & Cashews", "Pistachios", "Raisins & Makhana", "Chia & Sunflower Seeds"],
  },
  {
    id: "pharma-chemicals",
    name: "Pharmaceuticals & Agrochemicals",
    subtitle: "Compliant, hermetically sealed packaging for critical items",
    description:
      "Engineered to meet stringent pharmaceutical and chemical safety standards. Includes SS316 contact parts, validation documentation, and anti-static powder handling.",
    image: "/images/hero-05.webp",
    iconName: "ShieldAlert",
    keyRequirements: [
      "cGMP / FDA SS316 contact parts compliance",
      "Full batch coding, barcode printing & vision inspection",
      "Hermetic anti-leak seal guarantee",
    ],
    recommendedModels: ["EX-V3-AF", "EX-SPM"],
    productExamples: ["Pharma Powders & Granules", "Agrochemical Powders", "Pesticide Granules", "Veterinary Feed"],
  },
  {
    id: "custom-automation",
    name: "Custom Engineering & SPM",
    subtitle: "Tailor-made packaging machines built to your specification",
    description:
      "When standard catalogue machines don't fit your layout or unique product shape, Excelpack's R&D team designs custom Special Purpose Machines (SPM) with custom tooling, feeding automation, and secondary packaging.",
    image: "/images/hero-01.webp",
    iconName: "Cpu",
    keyRequirements: [
      "Custom 3D CAD engineering & prototype development",
      "Integration with existing factory conveyors & ERP",
      "Special pouch formats (zipper, spout, handle)",
    ],
    recommendedModels: ["EX-SPM"],
    productExamples: ["Hardware Items", "Dehydrated Vegetables", "Liquid Spouts", "Turnkey Lines"],
  },
];
