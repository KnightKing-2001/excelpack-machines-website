import { useState } from "react";
import { products, type Product } from "@/data/products/products.data";
import { useComparisonStore } from "@/lib/useComparisonStore";
import { useInquiryStore } from "@/lib/useInquiryStore";
import { QuickViewModal } from "@/components/overlays/QuickViewModal";
import { Search, Eye, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFiller, setSelectedFiller] = useState("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const { isCompared, toggleProduct } = useComparisonStore();
  const { setQuoteModalOpen } = useInquiryStore();

  const categories = ["All", "3-Servo VFFS", "2-Servo VFFS", "Pneumatic VFFS", "Special Purpose Machines"];
  const fillers = ["All", "Multihead Weigher", "Volumetric Cup Filler", "Auger Filler", "Custom"];

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.idealFor.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesFiller = selectedFiller === "All" || p.fillerType === selectedFiller;

    return matchesSearch && matchesCategory && matchesFiller;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedFiller("All");
  };

  return (
    <div className="py-12 bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-8">
        {/* Page Banner Header */}
        <div className="rounded-2xl bg-neutral-900 p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30 uppercase tracking-widest">
              Complete Machinery Catalogue
            </span>
            <h1 className="mt-3 text-3xl font-black text-white md:text-5xl">
              Industrial Packaging Machines
            </h1>
            <p className="mt-3 text-neutral-300 text-sm md:text-base leading-relaxed">
              Explore Excelpack’s comprehensive range of Vertical Form Fill Seal (VFFS) baggers, combination multihead weighers, volumetric cup dispensers, auger fillers, and custom Special Purpose Machines (SPMs).
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm border border-neutral-200">
          <div className="grid gap-4 md:grid-cols-4">
            {/* Search Box */}
            <div className="md:col-span-2 relative">
              <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">
                Search Machinery or Product
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. EX-V3-MH, Chips, Spices, Atta, Multihead..."
                  className="w-full rounded-lg border border-neutral-300 pl-9 pr-4 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">
                Machine Series
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Filler Type Filter */}
            <div>
              <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">
                Dosing / Filler Type
              </label>
              <select
                value={selectedFiller}
                onChange={(e) => setSelectedFiller(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-hidden"
              >
                {fillers.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-xs text-neutral-500">
            <span>
              Showing <strong className="text-neutral-900">{filteredProducts.length}</strong> of {products.length} machines
            </span>
            {(searchTerm || selectedCategory !== "All" || selectedFiller !== "All") && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-orange-600 font-bold hover:underline"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Listing Grid */}
        {filteredProducts.length === 0 ? (
          <div className="mt-12 rounded-xl bg-white p-12 text-center border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-800">No packaging machines matched your filter</h3>
            <p className="mt-2 text-sm text-neutral-500">
              Try adjusting your search query or reset the filter selections.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-2 text-xs font-bold text-white hover:bg-orange-700"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const compared = isCompared(product.id);
              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between rounded-2xl bg-white p-6 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-blue-100 px-3 py-1 text-xs font-extrabold text-blue-950">
                        {product.model}
                      </span>
                      <span className="text-xs font-bold text-green-700">
                        ⚡ {product.speed}
                      </span>
                    </div>

                    <div className="my-5 flex h-48 w-full flex-col items-center justify-center rounded-xl bg-neutral-900 p-4 text-center text-white transition group-hover:bg-neutral-950">
                      <span className="text-3xl font-black tracking-wider text-neutral-300">
                        {product.model}
                      </span>
                      <span className="mt-2 text-xs uppercase tracking-widest text-orange-400 font-bold">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-900 transition">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-orange-600">
                      {product.tagline}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-neutral-600 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="mt-4 rounded-lg bg-neutral-50 p-3 text-xs space-y-1 border border-neutral-100">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Filler Type:</span>
                        <span className="font-bold text-neutral-900">{product.fillerType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Range:</span>
                        <span className="font-semibold text-neutral-900">{product.fillingRange}</span>
                      </div>
                    </div>

                    {/* Suitable Applications tags */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {product.idealFor.slice(0, 3).map((item, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-semibold text-neutral-600 border border-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-xs font-semibold text-neutral-600 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={compared}
                          onChange={() => toggleProduct(product)}
                          className="h-4 w-4 rounded border-neutral-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span>Compare Specs</span>
                      </label>

                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="flex items-center gap-1 text-xs font-bold text-neutral-500 hover:text-blue-900"
                      >
                        <Eye className="h-3.5 w-3.5" /> Quick View
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setQuoteModalOpen(true, product.id)}
                        className="flex-1 rounded-lg bg-orange-600 py-2.5 text-xs font-bold text-white transition hover:bg-orange-700 shadow-sm text-center"
                      >
                        Request Quote
                      </button>
                      <Link
                        to={`/products/${product.id}`}
                        className="flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2.5 text-xs font-bold text-neutral-700 hover:bg-neutral-50"
                      >
                        Full Specs
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
