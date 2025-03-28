import { create } from "zustand";
import { createSelectors } from "../utils/createSelectors";

const baseProductStore = create((set) => ({
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

export const useProductStore = createSelectors(baseProductStore);
