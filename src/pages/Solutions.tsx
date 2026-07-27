import { solutions } from "@/data/solutions/solutions.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { Workflow, Cpu, Activity, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  const { setQuoteModalOpen } = useInquiryStore();

  const getIcon = (name: string) => {
    switch (name) {
      case "Workflow": return Workflow;
      case "Cpu": return Cpu;
      case "Activity": return Activity;
      default: return Zap;
    }
  };

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Banner */}
        <div className="rounded-2xl bg-neutral-900 p-8 md:p-12 text-white shadow-xl">
          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-widest">
            Engineering & Automation Capabilities
          </span>
          <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Custom Engineering & Turnkey Solutions
          </h1>
          <p className="mt-3 text-neutral-300 text-sm md:text-base max-w-3xl leading-relaxed">
            Beyond standalone VFFS machinery, Excelpack provides complete packaging line engineering, custom Special Purpose Machines (SPMs), Industry 4.0 IoT factory integration, and legacy control retrofits.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {solutions.map((sol) => {
            const Icon = getIcon(sol.icon);
            return (
              <div
                key={sol.id}
                id={sol.id}
                className="rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-neutral-900">{sol.title}</h2>
                      <span className="text-xs font-semibold text-orange-600">{sol.subtitle}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <h4 className="text-xs font-extrabold uppercase text-neutral-500 mb-2">Capabilities & Features:</h4>
                    <ul className="space-y-2 text-xs text-neutral-700">
                      {sol.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="font-semibold">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100">
                  <button
                    onClick={() => setQuoteModalOpen(true, "EX-SPM")}
                    className="w-full rounded-xl bg-blue-950 py-3 text-xs font-bold text-white hover:bg-blue-900 transition text-center flex items-center justify-center gap-2"
                  >
                    Discuss Solution with Engineering Lead <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
