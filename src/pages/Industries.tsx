import { industries } from "@/data/industries/industries.data";
import { products } from "@/data/products/products.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { CheckCircle2, ArrowRight, Package, Utensils, Wheat, Apple, ShieldAlert, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustriesPage() {
  const { setQuoteModalOpen } = useInquiryStore();

  const getIcon = (name: string) => {
    switch (name) {
      case "Utensils": return Utensils;
      case "Package": return Package;
      case "Wheat": return Wheat;
      case "Apple": return Apple;
      case "ShieldAlert": return ShieldAlert;
      default: return Cpu;
    }
  };

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Banner Header */}
        <div className="rounded-2xl bg-neutral-900 p-8 md:p-12 text-white shadow-xl">
          <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-widest">
            Sector Solutions
          </span>
          <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Engineered For Your Industry
          </h1>
          <p className="mt-3 text-neutral-300 text-sm md:text-base max-w-3xl leading-relaxed">
            From fragile potato chips requiring gentle handling and gas flushing to fine powders requiring vacuum dust collection, Excelpack provides tailored packaging machinery for diverse industrial sectors.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="mt-12 space-y-12">
          {industries.map((ind) => {
            const Icon = getIcon(ind.iconName);
            const matchedMachines = products.filter((p) => ind.recommendedModels.includes(p.model));

            return (
              <div
                key={ind.id}
                id={ind.id}
                className="rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm scroll-mt-24"
              >
                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-neutral-900">{ind.name}</h2>
                        <p className="text-xs font-semibold text-orange-600">{ind.subtitle}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-xs font-extrabold uppercase text-neutral-500">Key Technical Requirements:</h4>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs">
                        {ind.keyRequirements.map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-neutral-700 font-medium">
                            <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-xs font-extrabold uppercase text-neutral-500">Typical Packaged Items:</h4>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {ind.productExamples.map((ex, idx) => (
                          <span key={idx} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 border border-neutral-200">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Recommended Models */}
                  <div className="lg:col-span-5 rounded-xl bg-neutral-900 p-6 text-white border border-neutral-800">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-orange-400">
                      Recommended Packaging Machines
                    </h3>

                    <div className="mt-4 space-y-3">
                      {matchedMachines.map((m) => (
                        <div key={m.id} className="rounded-lg bg-neutral-800 p-3.5 border border-neutral-700 flex items-center justify-between">
                          <div>
                            <span className="rounded bg-blue-900 px-2 py-0.5 text-[10px] font-bold text-blue-200">
                              {m.model}
                            </span>
                            <h4 className="text-xs font-bold text-white mt-1">{m.name}</h4>
                            <span className="text-[11px] text-green-400 font-medium">{m.speed}</span>
                          </div>
                          <Link
                            to={`/products/${m.id}`}
                            className="rounded bg-orange-600 px-3 py-1 text-[11px] font-bold text-white hover:bg-orange-700"
                          >
                            View Specs
                          </Link>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="mt-6 w-full rounded-lg bg-blue-900 py-2.5 text-xs font-bold text-white hover:bg-blue-950 transition text-center flex items-center justify-center gap-2"
                    >
                      Consult Industry Packaging Specialist <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
