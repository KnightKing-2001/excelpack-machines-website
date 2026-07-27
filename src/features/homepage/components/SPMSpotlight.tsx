import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useInquiryStore } from "@/lib/useInquiryStore";

export function SPMSpotlight() {
  const { setQuoteModalOpen } = useInquiryStore();

  return (
    <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-neutral-900 text-white relative overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30">
                Special Purpose Machines (EX-SPM)
              </span>
              <span className="text-xs text-neutral-300">Custom Engineering Division</span>
            </div>

            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              "If You Can Imagine It — We Can Engineer It."
            </h2>

            <p className="mt-3 text-sm text-neutral-200 max-w-2xl leading-relaxed">
              Standard machines don't fit every manufacturing line. Our dedicated SPM engineering division designs custom VFFS pouch formats, multi-dosing systems, robotic handling, and turnkey packaging lines tailored to your exact factory footprint.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-neutral-200">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-orange-400" />
                <span>Custom Zipper & Spout Pouches</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-orange-400" />
                <span>Turnkey Line Automation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-orange-400" />
                <span>Hazardous Chemical & Explosive Grade</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 justify-center">
            <button
              onClick={() => setQuoteModalOpen(true, "EX-SPM")}
              className="w-full rounded-xl bg-orange-600 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700 shadow-xl text-center flex items-center justify-center gap-2"
            >
              Request SPM Custom Proposal <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/solutions"
              className="w-full rounded-xl border border-white/20 py-3 text-sm font-semibold text-white hover:bg-white/10 transition text-center"
            >
              Explore Turnkey Engineering Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
