import { SET_PRODUCTS } from "../constants/productActionTypes";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
};
