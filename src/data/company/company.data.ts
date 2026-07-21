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

  tagline: "Engineering Reliable Packaging & Automation Solutions",

  description:
    "Excelpack Machines Private Limited is an Indian manufacturer of advanced packaging machines and industrial automation solutions. We design, engineer, and manufacture reliable, high-performance equipment that helps businesses improve productivity, packaging quality, and operational efficiency across a wide range of industries.",

  vision:
    "To become a globally trusted manufacturer of innovative packaging machinery and automation solutions by delivering exceptional quality, engineering excellence, and long-term customer value.",

  mission: [
    "Design and manufacture precision-engineered packaging machinery that meets global quality standards.",
    "Deliver reliable, efficient, and cost-effective automation solutions for diverse industries.",
    "Build long-term customer relationships through dependable service and technical support.",
    "Continuously innovate by adopting modern manufacturing technologies and engineering practices.",
    "Maintain uncompromising quality, safety, and performance throughout every stage of production.",
  ],

  values: [
    "Engineering Excellence",
    "Innovation",
    "Quality First",
    "Customer Commitment",
    "Integrity",
    "Reliability",
    "Continuous Improvement",
  ],
};
