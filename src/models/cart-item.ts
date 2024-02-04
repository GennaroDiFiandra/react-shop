import { Product } from "@/models/";

export interface CartItem {
  product: Pick<Product, "id"|"name"|"description"|"price"|"image">;
  productQuantity: number;
}