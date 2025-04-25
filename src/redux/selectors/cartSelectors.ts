import { RootState } from "../store/store";
import { CartProduct } from "../../types/cartTypes";

export const selectCartItems = (state: RootState): CartProduct[] =>
  state.cart.cart;
export const selectItemAmount = (state: RootState) => state.cart.itemAmount;
export const selectCartTotal = (state: RootState) => state.cart.total;
