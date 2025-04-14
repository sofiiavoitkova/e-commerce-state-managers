import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART,
} from "../constants/actionTypes";

export const addToCart = (product, id) => ({
  type: ADD_TO_CART,
  payload: { product, id },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const increaseAmount = (id) => ({
  type: INCREASE_AMOUNT,
  payload: id,
});

export const decreaseAmount = (id) => ({
  type: DECREASE_AMOUNT,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
