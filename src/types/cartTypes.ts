import { Product } from "./productTypes";

export interface CartProduct extends Product {
  amount: number;
}
