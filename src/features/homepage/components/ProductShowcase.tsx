import { useState } from "react";
import { products, type Product } from "@/data/products/products.data";
import { useComparisonStore } from "@/lib/useComparisonStore";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { QuickViewModal } from "@/components/overlays/QuickViewModal";
import { Eye, ArrowRight, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

// Gradient palettes per category for visual variety
const categoryGradients: Record<string, string> = {
  "3-Servo VFFS": "from-blue-950 to-blue-800",
  "2-Servo VFFS": "from-slate-900 to-slate-700",
  "Pneumatic VFFS": "from-indigo-950 to-indigo-800",
  "Special Purpose Machines": "from-emerald-950 to-emerald-800",
};

function ProductCard({ product }: { product: Product }) {
  const { isCompared, toggleProduct } = useComparisonStore();
  const { setQuoteModalOpen } = useInquiryStore();
  const [hovered, setHovered] = useState(false);

  const gradient = categoryGradients[product.category] ?? "from-neutral-900 to-neutral-700";
  const compared = isCompared(product.id);

  return (
    <div
      className="group relative flex flex-col rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 card-glow overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Visual Header — gradient machine card */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Decorative rings */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/5" />
        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-white/5" />

        {/* Speed badge top-left */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1 border border-orange-400/30">
          <Zap className="h-3 w-3 text-orange-400" />
          <span className="text-xs font-bold text-orange-300">{product.speed}</span>
        </div>

        {/* Badge top-right */}
        {product.badge && (
          <div className="absolute right-4 top-4 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
            {product.badge}
          </div>
        )}

        {/* Center model display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`text-4xl font-black tracking-widest transition-all duration-300 ${
              hovered ? "text-orange-400 scale-110" : "text-white/20"
            }`}
          >
            {product.model}
          </span>
          <span className="mt-2 text-xs font-medium text-white/40 uppercase tracking-wider">
            {product.category}
          </span>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Model chip */}
        <span className="inline-block w-fit rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-extrabold text-blue-900 border border-blue-100">
          {product.model}
        </span>

        <h3 className="mt-2 text-base font-bold text-neutral-900 group-hover:text-blue-900 transition leading-snug">
          {product.name}
        </h3>
        <p className="text-xs font-semibold text-orange-600 mt-0.5">{product.tagline}</p>

        <p className="mt-2.5 text-xs leading-relaxed text-neutral-500 line-clamp-2">
          {product.description}
        </p>

        {/* Specs grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-neutral-50 p-3 border border-neutral-100">
          <div>
            <p className="text-[10px] font-semibold uppercase text-neutral-400">Filling System</p>
            <p className="text-xs font-bold text-neutral-800 mt-0.5">{product.fillerType}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase text-neutral-400">Fill Range</p>
            <p className="text-xs font-bold text-neutral-800 mt-0.5">{product.fillingRange}</p>
          </div>
        </div>

        {/* Key highlights */}
        {product.highlights?.slice(0, 2).map((h) => (
          <div key={h} className="mt-2 flex items-center gap-1.5 text-[11px] text-neutral-500">
            <CheckCircle className="h-3 w-3 text-green-500 shrink-0" />
            <span>{h}</span>
          </div>
        ))}

        {/* Actions */}
        <div className="mt-4 space-y-3 pt-3 border-t border-neutral-100">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs font-semibold text-neutral-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={compared}
                onChange={() => toggleProduct(product)}
                className="h-3.5 w-3.5 rounded border-neutral-300 text-orange-600 focus:ring-orange-500"
              />
              <span>Compare Specs</span>
            </label>
            <button
              onClick={() => {/* quickview handled below */}}
              className="flex items-center gap-1 text-xs font-bold text-neutral-400 hover:text-blue-900 transition"
            >
              <Eye className="h-3.5 w-3.5" />
              Quick View
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setQuoteModalOpen(true, product.id)}
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:from-orange-700 hover:to-orange-600 transition-all"
            >
              Request Quote
            </button>
            <Link
              to={`/products/${product.id}`}
              className="flex items-center justify-center rounded-xl border border-neutral-200 px-3 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const categories = ["All", "3-Servo VFFS", "2-Servo VFFS", "Pneumatic VFFS", "Special Purpose Machines"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-orange-600">
              Our Machinery Portfolio
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
              High-Performance Packaging Machinery
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-500 text-sm">
              Engineered for maximum operational speed, precision dosing, low maintenance, and continuous multi-shift production.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-bold text-blue-900 hover:text-orange-600 text-sm group transition"
          >
            View All {products.length} Machine Models
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-neutral-200 pb-4 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-blue-950 text-white shadow-lg shadow-blue-950/20 scale-105"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200 hover:border-neutral-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-stagger">
          {filteredProducts.slice(0, 6).map((product) => (
            <div key={product.id} className="reveal">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center reveal">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-950 px-8 py-3.5 text-sm font-bold text-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-200"
          >
            View Full Product Catalogue
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
