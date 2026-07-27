import { useComparisonStore } from "@/lib/useComparisonStore";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { Modal } from "./Modal";
import { X, Layers, Check, ArrowRight } from "lucide-react";

export function ComparisonDrawer() {
  const { comparedProducts, removeProduct, clearAll, isOpen, setIsOpen } = useComparisonStore();
  const { setQuoteModalOpen } = useInquiryStore();

  if (comparedProducts.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar */}
      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-2xl border border-neutral-700">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-orange-500" />
          <span className="text-sm font-semibold">
            Compare Machines ({comparedProducts.length}/3)
          </span>
        </div>

        <div className="flex items-center gap-2 border-l border-neutral-700 pl-4">
          {comparedProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-2 rounded-lg bg-neutral-800 px-3 py-1 text-xs text-neutral-200"
            >
              <span className="font-bold text-orange-400">{product.model}</span>
              <button
                onClick={() => removeProduct(product.id)}
                className="hover:text-red-400"
                aria-label={`Remove ${product.model}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-2">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-orange-700 shadow-sm"
          >
            Compare Specs <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={clearAll}
            className="text-xs text-neutral-400 underline hover:text-neutral-200"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Comparison Modal Matrix */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)} size="full" className="max-w-6xl">
        <div className="relative p-2">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Technical Spec Comparison</span>
              <h2 className="text-2xl font-bold text-neutral-900">Side-by-Side Machine Comparison</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b bg-neutral-50">
                  <th className="p-4 text-sm font-semibold text-neutral-500 w-1/4">Specification Parameter</th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} className="p-4 text-center border-l w-1/4">
                      <span className="inline-block rounded-md bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-900 mb-1">
                        {p.model}
                      </span>
                      <h4 className="text-sm font-bold text-neutral-900 line-clamp-2">{p.name}</h4>
                      <p className="mt-1 text-xs text-orange-600 font-semibold">{p.speed}</p>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setQuoteModalOpen(true, p.id);
                        }}
                        className="mt-3 w-full rounded-md bg-blue-900 py-1.5 text-xs font-semibold text-white hover:bg-blue-950 transition"
                      >
                        Request Quote
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Series & Drive Type</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center border-l font-medium text-neutral-900">
                      {p.category}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Filling / Dosing System</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center border-l text-neutral-800">
                      {p.fillerType}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Max Packaging Speed</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center border-l font-bold text-green-700">
                      {p.speed}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Filling Weight Range</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center border-l text-neutral-800">
                      {p.fillingRange}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Automation Grade</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center border-l text-neutral-800">
                      {p.automation}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Servo Motor Count</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center border-l font-semibold text-neutral-900">
                      {p.servoCount ? `${p.servoCount} Servo Motors` : "Pneumatic Cylinders"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Contact Metallurgy</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-center border-l text-neutral-800">
                      {p.contactParts}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-neutral-700 bg-neutral-50/50">Key Engineering Features</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 border-l text-left text-xs">
                      <ul className="space-y-1">
                        {p.highlights.slice(0, 4).map((h, i) => (
                          <li key={i} className="flex items-start gap-1 text-neutral-700">
                            <Check className="h-3.5 w-3.5 text-green-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </>
  );
}
