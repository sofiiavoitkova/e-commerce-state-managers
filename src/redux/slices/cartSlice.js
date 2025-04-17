import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  itemAmount: 0,
  total: 0,
};

const updateTotals = (cart) => {
  const itemAmount = cart.reduce((sum, item) => sum + item.amount, 0);
  const total = cart.reduce((sum, item) => sum + item.amount * item.price, 0);
  return { itemAmount, total };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.cart.find((item) => item.id === product.id);

      if (existing) {
        existing.amount += 1;
      } else {
        state.cart.push({ ...product, amount: 1 });
      }

      const { itemAmount, total } = updateTotals(state.cart);
      state.itemAmount = itemAmount;
      state.total = total;
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      const { itemAmount, total } = updateTotals(state.cart);
      state.itemAmount = itemAmount;
      state.total = total;
    },

    increaseAmount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.amount += 1;
      const { itemAmount, total } = updateTotals(state.cart);
      state.itemAmount = itemAmount;
      state.total = total;
    },

    decreaseAmount(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.amount > 1) item.amount -= 1;
      const { itemAmount, total } = updateTotals(state.cart);
      state.itemAmount = itemAmount;
      state.total = total;
    },

    clearCart(state) {
      state.cart = [];
      state.itemAmount = 0;
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
