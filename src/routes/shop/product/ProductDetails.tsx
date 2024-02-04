import { useLocation } from "react-router-dom";
import { Product } from "@/models/";
import { ProductCard } from "../../../components/card/ProductCard";

export function ProductDetails() {
  const { state } = useLocation();
  const { product }:{product:Product} = state;

  return (
    <>
      <ProductCard key={product.id} product={product} actions={[ "addToCart" ]} context="single" />
    </>
  )
}