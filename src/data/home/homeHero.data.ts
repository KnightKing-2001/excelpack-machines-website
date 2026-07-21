export interface HomeHeroData {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
  backgroundImage: string;
}

export const homeHeroData: HomeHeroData = {
  title: "Complete Packaging Automation Solutions",

  subtitle: "Excelpack Machines Private Limited",

  description:
    "Manufacturing high-performance packaging machines engineered for speed, precision, reliability, and long-term industrial performance.",

  primaryButton: {
    label: "Explore Machines",
    href: "/products",
  },

  secondaryButton: {
    label: "Request a Quote",
    href: "/contact",
  },

  backgroundImage: "/images/home/hero-banner.webp",
};
