import { Modal } from "./Modal";
import type { Product } from "@/data/products/products.data";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { setQuoteModalOpen, setBrochureModalOpen } = useInquiryStore();

  if (!product) return null;

  return (
    <Modal open={Boolean(product)} onClose={onClose} size="xl" title={product.name}>
      <div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column Image */}
          <div className="flex flex-col items-center justify-center rounded-xl bg-neutral-900 p-6 text-white text-center">
            <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30">
              {product.series}
            </span>
            <div className="my-6 flex h-48 w-full items-center justify-center rounded-lg bg-neutral-800 border border-neutral-700 p-4">
              <span className="text-4xl font-extrabold tracking-wider text-neutral-400">
                {product.model}
              </span>
            </div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
              {product.category}
            </p>
          </div>

          {/* Right Column Details */}
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-900">
                {product.model}
              </span>
              <span className="text-xs font-semibold text-green-700">
                ⚡ {product.speed}
              </span>
            </div>

            <h3 className="mt-2 text-xl font-bold text-neutral-900">{product.name}</h3>
            <p className="mt-1 text-xs font-semibold text-orange-600">{product.tagline}</p>
            <p className="mt-3 text-xs leading-relaxed text-neutral-600 line-clamp-3">
              {product.quickOverview}
            </p>

            <div className="mt-4 rounded-lg bg-neutral-50 p-3 text-xs space-y-1.5">
              <div className="flex justify-between border-b border-neutral-200 pb-1">
                <span className="text-neutral-500 font-medium">Filling Range:</span>
                <span className="font-semibold text-neutral-900">{product.fillingRange}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-1">
                <span className="text-neutral-500 font-medium">Automation Grade:</span>
                <span className="font-semibold text-neutral-900">{product.automation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Contact Parts:</span>
                <span className="font-semibold text-neutral-900">{product.contactParts}</span>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-xs font-bold uppercase text-neutral-700">Top Highlights:</span>
              <ul className="mt-1.5 space-y-1 text-xs text-neutral-600">
                {product.highlights.slice(0, 3).map((h, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onClose();
                    setQuoteModalOpen(true, product.id);
                  }}
                  className="flex-1 rounded-lg bg-orange-600 py-2.5 text-xs font-bold text-white transition hover:bg-orange-700 shadow-md text-center"
                >
                  Request Quotation
                </button>
                <button
                  onClick={() => {
                    onClose();
                    setBrochureModalOpen(true, product.id);
                  }}
                  className="rounded-lg border border-neutral-300 px-3 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
                >
                  Brochure
                </button>
              </div>

              <Link
                to={`/products/${product.id}`}
                onClick={onClose}
                className="flex items-center justify-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 py-1"
              >
                View Complete Engineering Specs <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
