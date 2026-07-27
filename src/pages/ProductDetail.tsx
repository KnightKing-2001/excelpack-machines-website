import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products/products.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { useComparisonStore } from "@/lib/useComparisonStore";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Send,
  Layers,
  FileText,
  Check,
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const { setQuoteModalOpen, setBrochureModalOpen } = useInquiryStore();
  const { isCompared, toggleProduct } = useComparisonStore();

  const product = products.find((p) => p.id === id || p.model.toLowerCase() === id?.toLowerCase());

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold text-neutral-900">Machine Model Not Found</h2>
        <p className="mt-2 text-neutral-600">The requested packaging machine could not be located in our catalogue.</p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-2.5 text-sm font-bold text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Link>
      </div>
    );
  }

  const compared = isCompared(product.id);

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 hover:text-blue-900"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Machinery List
          </Link>
          <span className="text-xs font-semibold text-neutral-400">
            {product.series} • Model {product.model}
          </span>
        </div>

        {/* Top Product Header Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column Image & Visual Card */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900 p-8 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30">
                {product.series}
              </span>
              <span className="text-xs font-bold text-green-400">⚡ {product.speed}</span>
            </div>

            <div className="my-8 flex h-64 w-full flex-col items-center justify-center rounded-xl bg-neutral-800 p-6 text-center border border-neutral-700">
              <span className="text-5xl font-black tracking-widest text-neutral-300">
                {product.model}
              </span>
              <span className="mt-3 text-xs uppercase tracking-widest text-orange-400 font-bold">
                {product.category}
              </span>
            </div>

            <div className="rounded-lg bg-neutral-800 p-4 text-xs text-neutral-300 space-y-2 border border-neutral-700">
              <div className="flex justify-between">
                <span className="text-neutral-400">Automation Grade:</span>
                <span className="font-bold text-white">{product.automation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Filling Range:</span>
                <span className="font-bold text-white">{product.fillingRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Contact Metallurgy:</span>
                <span className="font-bold text-white">{product.contactParts}</span>
              </div>
            </div>
          </div>

          {/* Right Column Title & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-blue-100 px-3 py-1 text-xs font-black text-blue-900">
                  Model: {product.model}
                </span>
                <span className="text-xs font-semibold text-neutral-500">{product.category}</span>
              </div>

              <h1 className="mt-3 text-3xl font-black text-neutral-900 md:text-4xl">
                {product.name}
              </h1>

              <p className="mt-2 text-base font-bold text-orange-600">{product.tagline}</p>

              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">{product.description}</p>

              <div className="mt-6 rounded-xl bg-white p-5 border border-neutral-200 shadow-sm">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-500">
                  Engineering Overview
                </h3>
                <p className="mt-2 text-xs text-neutral-700 leading-relaxed">{product.quickOverview}</p>
              </div>

              {/* Key Highlights */}
              <div className="mt-6">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-500">
                  Key System Highlights
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 text-xs text-neutral-700">
                  {product.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-neutral-200">
                      <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="font-semibold">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap gap-4">
              <button
                onClick={() => setQuoteModalOpen(true, product.id)}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700 shadow-md"
              >
                <Send className="h-4 w-4" /> Request Commercial Quote
              </button>

              <button
                onClick={() => setBrochureModalOpen(true, product.id)}
                className="flex items-center gap-2 rounded-xl bg-blue-950 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-900 transition shadow-md"
              >
                <Download className="h-4 w-4" /> PDF Datasheet
              </button>

              <button
                onClick={() => toggleProduct(product)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3.5 text-xs font-bold transition border ${
                  compared
                    ? "bg-green-100 text-green-900 border-green-300"
                    : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                <Layers className="h-4 w-4" /> {compared ? "Comparing ✓" : "+ Add to Compare"}
              </button>
            </div>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="mt-16 rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <FileText className="h-6 w-6 text-orange-600" />
            <div>
              <h2 className="text-xl font-bold text-neutral-900">Technical Specification Matrix</h2>
              <p className="text-xs text-neutral-500">Official engineering parameters for Model {product.model}</p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b bg-neutral-50 text-xs uppercase font-extrabold text-neutral-500">
                  <th className="p-3 w-1/3">Parameter</th>
                  <th className="p-3">Specification Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {product.specs.map((spec, index) => (
                  <tr key={index} className="hover:bg-neutral-50/50">
                    <td className="p-3.5 font-bold text-neutral-700">{spec.label}</td>
                    <td className="p-3.5 font-semibold text-neutral-900">{spec.value}</td>
                  </tr>
                ))}
                <tr>
                  <td className="p-3.5 font-bold text-neutral-700">Contact Metallurgy</td>
                  <td className="p-3.5 font-semibold text-neutral-900">{product.contactParts}</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-neutral-700">Control System</td>
                  <td className="p-3.5 font-semibold text-neutral-900">PLC with Color HMI Touchscreen & Recipe Storage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Working Principle Timeline (If Available) */}
        {product.workingPrinciple && (
          <div className="mt-12 rounded-2xl bg-neutral-900 text-white p-8 shadow-xl">
            <h2 className="text-xl font-bold">Operational Working Principle</h2>
            <p className="mt-1 text-xs text-neutral-400">Step-by-step automated pouch formation and filling sequence</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.workingPrinciple.map((step, index) => (
                <div key={index} className="rounded-xl bg-neutral-800 p-5 border border-neutral-700">
                  <span className="text-2xl font-black text-orange-500">0{index + 1}</span>
                  <p className="mt-2 text-xs text-neutral-200 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ideal Applications */}
        <div className="mt-12 rounded-2xl bg-white p-8 border border-neutral-200 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-900">Recommended Product Applications</h2>
          <p className="mt-1 text-xs text-neutral-500">Ideal materials and items suitable for Model {product.model}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {product.idealFor.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-xl bg-neutral-100 px-4 py-2 text-xs font-bold text-neutral-800 border border-neutral-200"
              >
                <Check className="h-4 w-4 text-green-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
