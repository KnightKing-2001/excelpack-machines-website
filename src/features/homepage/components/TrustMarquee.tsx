import { ShieldCheck, Award, CheckCircle, Cpu, Globe } from "lucide-react";

export function TrustMarquee() {
  const trustPoints = [
    { icon: ShieldCheck, label: "ISO 9001:2015 Certified" },
    { icon: Award, label: "CE Compliant Engineering" },
    { icon: CheckCircle, label: "SS304 Food Grade Contact" },
    { icon: Cpu, label: "Siemens & Delta Automation" },
    { icon: Globe, label: "Global Installation & Support" },
  ];

  return (
    <section className="bg-neutral-900 py-6 border-y border-neutral-800 text-neutral-300 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Industrial Excellence & Standards:
          </p>
          <div className="flex flex-wrap items-center gap-8 text-sm font-semibold">
            {trustPoints.map((tp, index) => {
              const Icon = tp.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-neutral-200">
                  <Icon className="h-5 w-5 text-orange-500 shrink-0" />
                  <span>{tp.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
