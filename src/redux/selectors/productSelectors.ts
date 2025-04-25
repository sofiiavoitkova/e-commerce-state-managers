import { RootState } from "../store/store";

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectProductStatus = (state: RootState) => state.products.status;