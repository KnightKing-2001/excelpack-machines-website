import { create } from "zustand";
import type { Product } from "@/data/products/products.data";

interface ComparisonState {
  comparedProducts: Product[];
  isOpen: boolean;
  addProduct: (product: Product) => boolean;
  removeProduct: (productId: string) => void;
  clearAll: () => void;
  setIsOpen: (isOpen: boolean) => void;
  toggleProduct: (product: Product) => void;
  isCompared: (productId: string) => boolean;
}

export const useComparisonStore = create<ComparisonState>((set, get) => ({
  comparedProducts: [],
  isOpen: false,

  addProduct: (product) => {
    const { comparedProducts } = get();
    if (comparedProducts.some((p) => p.id === product.id)) return false;
    if (comparedProducts.length >= 3) return false;
    set({ comparedProducts: [...comparedProducts, product] });
    return true;
  },

  removeProduct: (productId) => {
    set((state) => ({
      comparedProducts: state.comparedProducts.filter((p) => p.id !== productId),
    }));
  },

  clearAll: () => set({ comparedProducts: [], isOpen: false }),

  setIsOpen: (isOpen) => set({ isOpen }),

  toggleProduct: (product) => {
    const { comparedProducts, addProduct, removeProduct } = get();
    const exists = comparedProducts.some((p) => p.id === product.id);
    if (exists) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  },

  isCompared: (productId) => {
    return get().comparedProducts.some((p) => p.id === productId);
  },
}));
