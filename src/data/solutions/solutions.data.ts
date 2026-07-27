export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
}

export const solutions: Solution[] = [
  {
    id: "turnkey-lines",
    title: "Turnkey Packaging Lines",
    subtitle: "End-to-End Packaging Line Automation",
    description:
      "We design, fabricate, install, and commission complete automated packaging lines from raw material bulk feeding to final carton sealing.",
    icon: "Workflow",
    features: [
      "Z-Bucket & Screw Elevators for Automated Infeed",
      "VFFS Form-Fill-Seal Packaging Machines",
      "Online Checkweighers & Metal Detectors",
      "Collection Tables & Conveyor Networks",
      "Secondary Case Packers & Tape Sealers",
    ],
  },
  {
    id: "spm-engineering",
    title: "Special Purpose Machines (SPM)",
    subtitle: "Custom Engineered Automation",
    description:
      "When standard packaging machines fall short of unique product requirements or space constraints, Excelpack engineers custom packaging machinery from scratch.",
    icon: "Cpu",
    features: [
      "Custom 3D CAD Design in SolidWorks",
      "Specialized Pouch Styles (Zipper, Spout, Doypack)",
      "Multi-Component Dosing & Layering Systems",
      "Hazardous Environment Explosion-Proof Options",
    ],
  },
  {
    id: "industry-4-0",
    title: "Smart Factory & Industry 4.0",
    subtitle: "IoT Connected Packaging Systems",
    description:
      "Transform your production floor with connected Excelpack machinery featuring cloud analytics, real-time OEE tracking, and remote technician diagnostics.",
    icon: "Activity",
    features: [
      "Real-time Overall Equipment Effectiveness (OEE) Dashboard",
      "Remote PLC Diagnostics & Software Updates",
      "Automated Production Reports via Email / Cloud",
      "Predictive Maintenance Wear Sensor Alerts",
    ],
  },
  {
    id: "retrofit-upgrade",
    title: "Retrofitting & Control Upgrades",
    subtitle: "Upgrade Legacy Packaging Machinery",
    description:
      "Give old packaging equipment new life by replacing obsolete mechanical cam drives with modern Servo motors, PLC controls, and touchscreens.",
    icon: "Zap",
    features: [
      "Servo Drive Retrofitting for Precision Motion",
      "Modern PLC & Color HMI Touchscreen Upgrades",
      "Safety Light Curtains & Interlocks Retrofit",
      "Energy Efficient Motor Drives Replacement",
    ],
  },
];
