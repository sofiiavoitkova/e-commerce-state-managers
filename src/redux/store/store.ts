import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productReducer from "../slices/productSlice";
import sidebarReducer from "../slices/sidebarSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;