import { createStore, combineReducers } from "redux";
import cartReducer from "../reducers/cartReducer";
import productReducer from "../reducers/productReducer";
import sidebarReducer from "../reducers/sidebarReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  sidebar: sidebarReducer,
});

const store = createStore(rootReducer);

export default store;
