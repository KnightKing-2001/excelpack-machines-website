export interface Product {
  id: string;

  model: string;

  name: string;

  category: string;

  description: string;

  speed?: string;

  automation?: string;

  image: string;

  href: string;
}

export const products: Product[] = [
  {
    id: "ex-v3-mh",

    model: "EX-V3-MH",

    name: "VFFS 3 Servo with Multihead Weigher",

    category: "Vertical Form Fill Seal Packaging Machine",

    description:
      "High-speed servo-driven VFFS packaging machine with precision Multihead Weigher integration for accurate and efficient packaging.",

    speed: "Up to 120 PPM",

    automation: "Fully Automatic",

    image: "/images/products/ex-v3-mh.webp",

    href: "/products/vffs-3-servo-multihead",
  },

  {
    id: "ex-spm",

    model: "EX-SPM",

    name: "Special Purpose Machines",

    category: "Custom Built Packaging Machines",

    description:
      "Custom engineered automation solutions designed around specific production requirements.",

    automation: "Semi Automatic to Fully Automatic",

    image: "/images/products/ex-spm.webp",

    href: "/products/special-purpose-machines",
  },
];
