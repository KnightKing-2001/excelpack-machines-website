export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  vision: string;
  mission: string[];
  values: string[];
}

export const companyInfo: CompanyInfo = {
  name: "Excelpack Machines Private Limited",

  tagline: "Engineering Reliable Packaging Solutions",

  description:
    "Excelpack Machines Private Limited designs and manufactures advanced packaging machinery delivering precision, reliability, and productivity across diverse industries.",

  vision:
    "To become a trusted global manufacturer of innovative packaging machinery by delivering reliable automation solutions that enhance productivity, quality, and customer success.",

  mission: [
    "Deliver precision-engineered packaging machinery.",
    "Build long-term partnerships through dependable service.",
    "Continuously innovate to meet evolving industry needs.",
    "Ensure quality at every stage of manufacturing.",
    "Provide responsive after-sales support and technical expertise.",
  ],

  values: [
    "Engineering Excellence",
    "Innovation",
    "Reliability",
    "Customer Commitment",
    "Quality First",
    "Integrity",
    "Continuous Improvement",
  ],
};
