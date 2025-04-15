import { SET_PRODUCTS } from "../constants/productActionTypes";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch(setProducts(data));
  } catch (e) {
    console.error(e);
  }
};

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
