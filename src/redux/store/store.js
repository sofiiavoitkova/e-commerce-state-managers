import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import productReducer from "../reducers/productReducer";
import sidebarReducer from "../reducers/sidebarReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    sidebar: sidebarReducer,
  },
});

export default store;
