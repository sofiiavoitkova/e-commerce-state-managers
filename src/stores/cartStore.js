import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      itemAmount: 0,
      total: 0,

      setItemAmount: (cart) => {
        let amount = 0;
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
          amount += cart[i].amount;
          total += cart[i].amount * cart[i].price;
        }

        set({ itemAmount: amount, total: total });
      },

      addToCart: (product, id) => {
        const cart = get().cart;
        const newCart = [];
        let found = false;

        for (let i = 0; i < cart.length; i++) {
          const item = cart[i];

          if (item.id === id) {
            found = true;
            const updatedItem = {};

            for (let key in item) {
              updatedItem[key] = item[key];
            }

            updatedItem.amount = item.amount + 1;

            newCart.push(updatedItem);
          } else {
            newCart.push(item);
          }
        }

        if (!found) {
          const newItem = {};
          for (let key in product) {
            newItem[key] = product[key];
          }
          newItem.amount = 1;

          newCart.push(newItem);
        }

        set({ cart: newCart });
        get().setItemAmount(newCart);
      },

      removeFromCart: (id) => {
        const cart = get().cart;
        const newCart = cart.filter((item) => item.id !== id);
        set({ cart: newCart });
        get().setItemAmount(newCart);
      },

      clearCart: () => {
        set({ cart: [], itemAmount: 0, total: 0 });
      },

      increaseAmount: (id) => {
        const cart = get().cart;
        const newCart = [];

        for (let i = 0; i < cart.length; i++) {
          const item = cart[i];

          if (item.id === id) {
            const updatedItem = {};
            for (let key in item) {
              updatedItem[key] = item[key];
            }
            updatedItem.amount = item.amount + 1;
            newCart.push(updatedItem);
          } else {
            newCart.push(item);
          }
        }

        set({ cart: newCart });
        get().setItemAmount(newCart);
      },

      decreaseAmount: (id) => {
        const cart = get().cart;
        const newCart = [];

        for (let i = 0; i < cart.length; i++) {
          const item = cart[i];

          if (item.id === id && item.amount > 1) {
            const updatedItem = {};
            for (let key in item) {
              updatedItem[key] = item[key];
            }
            updatedItem.amount = item.amount - 1;
            newCart.push(updatedItem);
          } else if (item.id !== id) {
            newCart.push(item);
          }
        }

        set({ cart: newCart });
        get().setItemAmount(newCart);
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);
