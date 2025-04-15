import { SET_PRODUCTS } from "../constants/productActionTypes";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
