import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useProductStore = create(
  devtools(
    (set) => ({
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
    }),
    {
      name: "product-store",
    }
  )
);
