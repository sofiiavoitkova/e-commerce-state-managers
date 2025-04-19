import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cartReducer from "../reducers/cartReducer";
import productReducer from "../reducers/productReducer";
import sidebarReducer from "../reducers/sidebarReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  sidebar: sidebarReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
