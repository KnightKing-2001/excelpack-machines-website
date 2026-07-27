export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  model: string;
  name: string;
  series: string;
  category: "3-Servo VFFS" | "2-Servo VFFS" | "Pneumatic VFFS" | "Special Purpose Machines";
  fillerType: "Multihead Weigher" | "Volumetric Cup Filler" | "Auger Filler" | "Custom";
  tagline: string;
  description: string;
  quickOverview: string;
  speed: string;
  fillingRange: string;
  automation: string;
  image: string;
  badge?: string;
  href: string;
  servoCount?: number;
  contactParts: string;
  highlights: string[];
  specs: TechnicalSpec[];
  idealFor: string[];
  workingPrinciple?: string[];
}

export const products: Product[] = [
  {
    id: "ex-v3-mh",
    model: "EX-V3-MH",
    name: "VFFS 3 Servo with Multihead Weigher",
    series: "ExcelPack VFFS 3 Servo Series",
    category: "3-Servo VFFS",
    fillerType: "Multihead Weigher",
    tagline: "High-Speed Precision Packaging for Maximum Productivity",
    description:
      "The Excelpack EX-V3-MH is a premium three-servo Vertical Form Fill Seal (VFFS) packaging machine integrated with a high-precision Multihead Weigher. Engineered for maximum speed, accuracy, and low film wastage.",
    quickOverview:
      "Unlike conventional packaging machines, the EX-V3-MH utilizes three independent servo motors to precisely control film pulling, horizontal sealing, and vertical sealing. The integrated Multihead Weigher uses advanced combination weighing algorithms to achieve zero-giveaway accuracy.",
    speed: "Up to 120 PPM",
    fillingRange: "10g – 1500g",
    automation: "Fully Automatic",
    image: "/images/products/ex-v3-mh.webp",
    badge: "Flagship / High Speed",
    href: "/products/ex-v3-mh",
    servoCount: 3,
    contactParts: "Food Grade SS304 / SS316",
    highlights: [
      "Advanced 3-Servo Motion Control System",
      "High-Speed Combination Multihead Weigher Integration",
      "Siemens / Delta PLC with 10-inch Color Touchscreen HMI",
      "Automatic Film Centering & Register Sensor",
      "Tool-less Quick Pouch Former Changeover",
      "Industry 4.0 IoT Remote Diagnostics Ready",
    ],
    specs: [
      { label: "Pouch Type", value: "Pillow Bag, Gusseted Bag, Quad Seal" },
      { label: "Packaging Speed", value: "Up to 120 Bags/Min (PPM)" },
      { label: "Filling Accuracy", value: "± 0.1g to 0.5g" },
      { label: "Film Width Range", value: "100 mm – 460 mm" },
      { label: "Pouch Length Range", value: "80 mm – 320 mm" },
      { label: "Power Requirement", value: "415V AC, 3-Phase, 50Hz (5.5 kW)" },
      { label: "Air Consumption", value: "0.6 MPa, 350 L/min" },
      { label: "Machine Weight", value: "Approx. 950 kg" },
    ],
    idealFor: [
      "Potato Chips & Snacks",
      "Namkeen & Bhujia",
      "Dry Fruits (Almonds, Cashews, Raisins)",
      "Confectionery & Candies",
      "Popcorn & Fryums",
      "Frozen Vegetables & Snacks",
    ],
    workingPrinciple: [
      "Product Elevator feeds material into the combination multihead weigher top hopper.",
      "Multihead Weigher calculates optimal bucket combination for target weight with ±0.2g accuracy.",
      "3-Servo motion pulls film smoothly while synchronizing horizontal sealing and pouch cutting.",
      "Finished pouch is filled, sealed, and discharged to collection conveyor.",
    ],
  },
  {
    id: "ex-v3-cf",
    model: "EX-V3-CF",
    name: "VFFS 3 Servo with Volumetric Cup Filler",
    series: "ExcelPack VFFS 3 Servo Series",
    category: "3-Servo VFFS",
    fillerType: "Volumetric Cup Filler",
    tagline: "Ultra-Fast Packaging for Free-Flowing Granular Products",
    description:
      "The Excelpack EX-V3-CF combines high-speed 3-servo VFFS technology with a precision calibrated Volumetric Cup Filling system, ideal for uniform granular items like pulses, rice, sugar, and salt.",
    quickOverview:
      "Engineered for high-volume producers, the EX-V3-CF features quick-change telescoping cups to adjust fill volume on the fly without stopping production.",
    speed: "Up to 100 PPM",
    fillingRange: "20ml – 1500ml",
    automation: "Fully Automatic",
    image: "/images/products/ex-v3-cf.webp",
    badge: "High Throughput",
    href: "/products/ex-v3-cf",
    servoCount: 3,
    contactParts: "Food Grade SS304",
    highlights: [
      "Telescoping Volumetric Cup Adjustment",
      "Triple Servo Motion for Continuous Smooth Pulling",
      "Low Operational Maintenance",
      "Anti-Dust Housing & Dust Extraction Port",
      "Gas Flushing Integration Available for Extended Shelf Life",
    ],
    specs: [
      { label: "Pouch Type", value: "Pillow Pouch, Chain Pouch" },
      { label: "Packaging Speed", value: "Up to 100 PPM" },
      { label: "Filling Range", value: "20ml – 1500ml" },
      { label: "Film Material", value: "Laminated Film, PE, BOPP" },
      { label: "Control System", value: "PLC with 7-inch Color HMI Touchscreen" },
      { label: "Power Supply", value: "415V AC, 3 Phase, 50 Hz" },
    ],
    idealFor: [
      "Rice & Pulses (Lentils)",
      "Refined Sugar & Salt",
      "Tea Leaves & Coffee Beans",
      "Detergent Granules",
      "Seeds & Grains",
      "Poha & Vermicelli",
    ],
    workingPrinciple: [
      "Product enters top hopper into revolving volumetric measuring cups.",
      "Telescopic cup disc dispenses precise volume into forming tube.",
      "3-Servo motion pulls film continuously for seamless sealing.",
    ],
  },
  {
    id: "ex-v3-af",
    model: "EX-V3-AF",
    name: "VFFS 3 Servo with Auger Filler",
    series: "ExcelPack VFFS 3 Servo Series",
    category: "3-Servo VFFS",
    fillerType: "Auger Filler",
    tagline: "Precision Powder Packaging with Zero Dust Leakage",
    description:
      "The EX-V3-AF pairs a 3-servo VFFS bagger with a dedicated servo-driven Auger Dosing System, delivering pinpoint accuracy for non-free-flowing powders and fine ground spices.",
    quickOverview:
      "Fine powder handling requires dust containment and exact screw revolution control. The EX-V3-AF's dual servo auger drive ensures repeatable grammage without dusting.",
    speed: "Up to 80 PPM",
    fillingRange: "10g – 1500g",
    automation: "Fully Automatic",
    image: "/images/products/ex-v3-af.webp",
    badge: "Powder Specialist",
    href: "/products/ex-v3-af",
    servoCount: 3,
    contactParts: "SS304 / SS316 Mirror Polish",
    highlights: [
      "Servo-Driven Auger Screw Dosing",
      "Enclosed Dust-Tight Hopper with Agitator Bar",
      "Feedback Weight Sensor Auto-Correction Interface",
      "Quick-Release Hopper for Easy Washdown",
    ],
    specs: [
      { label: "Pouch Type", value: "Pillow Bag, Gusseted" },
      { label: "Speed", value: "Up to 80 PPM" },
      { label: "Accuracy", value: "± 0.5%" },
      { label: "Control", value: "Dual PLC (Auger + VFFS Synchronized)" },
      { label: "Power", value: "4.8 kW" },
    ],
    idealFor: [
      "Wheat Flour (Atta), Maida & Besan",
      "Spices (Turmeric, Chilli, Coriander Powder)",
      "Milk Powder & Whey Protein",
      "Coffee & Tea Premixes",
      "Pharmaceutical Powders",
      "Chemical & Agrochemical Powders",
    ],
    workingPrinciple: [
      "Agitator keeps fine powder aerated while precision auger screw rotates specified turns.",
      "Powder drops cleanly into pouch formed by synchronized 3-servo VFFS.",
    ],
  },
  {
    id: "ex-v2-mh",
    model: "EX-V2-MH",
    name: "VFFS 2 Servo with Multihead Weigher",
    series: "ExcelPack VFFS 2 Servo Series",
    category: "2-Servo VFFS",
    fillerType: "Multihead Weigher",
    tagline: "Cost-Effective High Performance Packaging Solution",
    description:
      "The EX-V2-MH is engineered for growing businesses demanding high-accuracy combination weighing with a dependable 2-servo VFFS platform.",
    quickOverview:
      "Provides dual servo control for film pulling and horizontal sealing, reducing mechanical linkages and maintenance costs while maintaining fast production rates.",
    speed: "Up to 90 PPM",
    fillingRange: "10g – 1500g",
    automation: "Fully Automatic",
    image: "/images/products/ex-v2-mh.webp",
    badge: "Best Value",
    href: "/products/ex-v2-mh",
    servoCount: 2,
    contactParts: "Food Grade SS304",
    highlights: [
      "Dual Servo Drive Motion",
      "Integrated 10 / 14 Head Combination Weigher",
      "Compact Footprint & User-Friendly Maintenance",
      "Pneumatic Horizontal Seal Jaw Option",
    ],
    specs: [
      { label: "Speed", value: "Up to 90 PPM" },
      { label: "Dosing Range", value: "10g – 1.5kg" },
      { label: "Power", value: "4.2 kW" },
      { label: "Air Supply", value: "0.6 MPa, 280 L/min" },
    ],
    idealFor: [
      "Namkeen & Snacks",
      "Confectionery & Gummies",
      "Nuts & Dry Fruits",
      "Extruded Snack Foods",
    ],
  },
  {
    id: "ex-v2-cf",
    model: "EX-V2-CF",
    name: "VFFS 2 Servo with Cup Filler",
    series: "ExcelPack VFFS 2 Servo Series",
    category: "2-Servo VFFS",
    fillerType: "Volumetric Cup Filler",
    tagline: "Reliable & Economical Packaging for Grains and Pulses",
    description:
      "The Excelpack EX-V2-CF integrates dual servo film drive with a sturdy volumetric cup disc, designed for continuous multi-shift production of free-flowing goods.",
    quickOverview:
      "Built for durability, simple mechanical setup, and fast changeovers. Ideal for mid-sized processing units and regional food packers.",
    speed: "Up to 80 PPM",
    fillingRange: "20ml – 1500ml",
    automation: "Fully Automatic",
    image: "/images/products/ex-v2-cf.webp",
    href: "/products/ex-v2-cf",
    servoCount: 2,
    contactParts: "SS304 Contact Parts",
    highlights: [
      "Dual Servo Motion System",
      "Calibrated Volumetric Measuring Cups",
      "Robust SS304 Frame",
      "Low Spares & Maintenance Cost",
    ],
    specs: [
      { label: "Speed", value: "Up to 80 PPM" },
      { label: "Filling Range", value: "20ml – 1500ml" },
      { label: "Pouch Width", value: "100mm – 350mm" },
    ],
    idealFor: [
      "Pulses & Lentils",
      "Sugar & Salt",
      "Whole Spices & Mustard Seeds",
      "Tea Beans & Grains",
    ],
  },
  {
    id: "ex-v2-af",
    model: "EX-V2-AF",
    name: "VFFS 2 Servo with Auger Filler",
    series: "ExcelPack VFFS 2 Servo Series",
    category: "2-Servo VFFS",
    fillerType: "Auger Filler",
    tagline: "Dependable Powder Packaging for Daily Operations",
    description:
      "Combines a reliable 2-servo VFFS platform with a precision servo-driven auger filler for accurate packaging of flour, cocoa, and ground spices.",
    quickOverview:
      "Delivers high-precision dosing screw movement with minimal operator intervention required. Features automated pouch tracking and photo-mark registration.",
    speed: "Up to 70 PPM",
    fillingRange: "10g – 1.5kg",
    automation: "Fully Automatic",
    image: "/images/products/ex-v2-af.webp",
    href: "/products/ex-v2-af",
    servoCount: 2,
    contactParts: "SS304 / SS316",
    highlights: [
      "Servo Auger Motor for Precision Grammage",
      "Dual Servo Film Traction",
      "PLC Interface with Recipe Memory",
    ],
    specs: [
      { label: "Speed", value: "Up to 70 PPM" },
      { label: "Accuracy", value: "± 0.5% - 1%" },
      { label: "Power", value: "4.5 kW" },
    ],
    idealFor: [
      "Atta, Besan, Maida",
      "Spices & Curry Powders",
      "Protein & Health Powders",
      "Chemical Powders",
    ],
  },
  {
    id: "ex-pn-mh",
    model: "EX-PN-MH",
    name: "Pneumatic VFFS with Multihead Weigher",
    series: "ExcelPack Pneumatic Series",
    category: "Pneumatic VFFS",
    fillerType: "Multihead Weigher",
    tagline: "Heavy-Duty Pneumatic Performance for Irregular Products",
    description:
      "The EX-PN-MH pairs robust pneumatic jaw sealing technology with a combination multihead weigher for rugged, non-stop packaging in harsh environments.",
    quickOverview:
      "Utilizes high-grade Festo/SMC pneumatic cylinders for jaw sealing combined with electronic combination weighing. Excellent entry-to-mid level solution.",
    speed: "Up to 70 PPM",
    fillingRange: "10g – 1.5kg",
    automation: "Semi / Fully Automatic",
    image: "/images/products/ex-pn-mh.webp",
    href: "/products/ex-pn-mh",
    contactParts: "Food Grade SS304",
    highlights: [
      "Heavy-Duty Pneumatic Sealing Jaws",
      "Multihead Weigher Integration",
      "Industrial Grade Structure",
      "Economical Capex Investment",
    ],
    specs: [
      { label: "Speed", value: "Up to 70 PPM" },
      { label: "Air Consumption", value: "0.6 MPa, 400 L/min" },
      { label: "Control", value: "PLC & HMI Touchscreen" },
    ],
    idealFor: [
      "Snack Foods & Namkeen",
      "Dry Fruits & Candies",
      "Hardware Components & Plastics",
    ],
  },
  {
    id: "ex-pn-cf",
    model: "EX-PN-CF",
    name: "Pneumatic VFFS with Cup Filler",
    series: "ExcelPack Pneumatic Series",
    category: "Pneumatic VFFS",
    fillerType: "Volumetric Cup Filler",
    tagline: "Rugged & Economical Granule Packaging Machine",
    description:
      "A workhorse machine utilizing pneumatic film pull and jaw action with a volumetric cup disk. Engineered for non-stop industrial packaging.",
    quickOverview:
      "Simple mechanics make it extremely straightforward for plant operators to adjust and maintain. High reliability with low operating expenses.",
    speed: "Up to 60 PPM",
    fillingRange: "10g – 1.5kg",
    automation: "Automatic",
    image: "/images/products/ex-pn-cf.webp",
    href: "/products/ex-pn-cf",
    contactParts: "SS304 Contact Parts",
    highlights: [
      "Pneumatic Motion Platform",
      "Volumetric Measuring Cup Disc",
      "Heavy Duty Frame",
    ],
    specs: [
      { label: "Speed", value: "Up to 60 PPM" },
      { label: "Filling Range", value: "10g – 1.5kg" },
    ],
    idealFor: [
      "Rice & Sugar",
      "Pulses & Grains",
      "Detergents & Chemical Granules",
    ],
  },
  {
    id: "ex-pn-af",
    model: "EX-PN-AF",
    name: "Pneumatic VFFS with Auger Filler",
    series: "ExcelPack Pneumatic Series",
    category: "Pneumatic VFFS",
    fillerType: "Auger Filler",
    tagline: "Economical Powder Packaging for Small to Medium Producers",
    description:
      "Combines pneumatic jaw sealing with a precision auger screw system for accurate powder packaging at an accessible price point.",
    quickOverview:
      "Designed for start-ups, regional manufacturers, and expanding units looking for reliable powder filling without servo complexity.",
    speed: "Up to 55 PPM",
    fillingRange: "10g – 1kg",
    automation: "Automatic",
    image: "/images/products/ex-pn-af.webp",
    href: "/products/ex-pn-af",
    contactParts: "SS304",
    highlights: [
      "Auger Screw Dispensing",
      "Pneumatic Sealing Mechanism",
      "Simple Operator Controls",
    ],
    specs: [
      { label: "Speed", value: "Up to 55 PPM" },
      { label: "Filling Range", value: "10g – 1kg" },
    ],
    idealFor: [
      "Spices & Turmeric Powder",
      "Flour & Bakery Mixes",
      "Chemical Powders",
    ],
  },
  {
    id: "ex-spm",
    model: "EX-SPM",
    name: "Special Purpose Machines (SPM)",
    series: "ExcelPack Custom Engineering",
    category: "Special Purpose Machines",
    fillerType: "Custom",
    tagline: "Custom Built Packaging & Automation Solutions — Built For Your Exact Requirement",
    description:
      "Every manufacturing process is unique. Excelpack designs and builds Special Purpose Machines (SPMs) engineered specifically for your product, factory footprint, and automation goals.",
    quickOverview:
      "From specialized pouch formats to integrated robotic pick-and-place, secondary cartoning, and customized conveyancing lines — if you can imagine it, we can engineer it.",
    speed: "Custom Speed & Configuration",
    fillingRange: "Custom Range",
    automation: "Semi to Fully Automatic",
    image: "/images/products/ex-spm.webp",
    badge: "Custom Engineering",
    href: "/products/ex-spm",
    contactParts: "SS304 / SS316 / Specialized Alloys",
    highlights: [
      "Custom 3D CAD Mechanical & Electrical Design",
      "Turnkey Packaging Line Integration",
      "Robotic Feeding & Checkweighing Systems",
      "Specialized Pouch Styles (Zipper, Spout, Doypack, Gusset)",
      "PLC / HMI Customized Control Logic",
    ],
    specs: [
      { label: "Automation Grade", value: "Semi-Automatic to Fully Automatic Turnkey" },
      { label: "Design Software", value: "SolidWorks 3D CAD & EPLAN Electrical" },
      { label: "Compliance", value: "CE / ISO 9001 / Food Safety Standards" },
      { label: "Warranty", value: "12 Months Comprehensive On-Site" },
    ],
    idealFor: [
      "Custom Food & Beverage Packaging",
      "Pharmaceutical Blister & Liquid Lines",
      "Agrochemical & Hazardous Chemical Filling",
      "Hardware, Fasteners & Industrial Parts",
    ],
  },
];
