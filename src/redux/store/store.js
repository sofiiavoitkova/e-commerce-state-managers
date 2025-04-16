import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productReducer from "../slices/productSlice";
import sidebarReducer from "../slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    sidebar: sidebarReducer,
  },
});
