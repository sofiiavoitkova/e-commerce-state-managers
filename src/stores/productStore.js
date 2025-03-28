import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    fetchProducts: async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        set({ products: data });
      } catch (e) {
        console.error(e);
      }
    },
  }));
