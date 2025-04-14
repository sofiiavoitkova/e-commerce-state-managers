import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
