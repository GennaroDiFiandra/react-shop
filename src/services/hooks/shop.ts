import { useState } from "react";
import { Product } from "@/models/";
import { getAllProducts, useSearchStore } from "@/services/";

export function useShop() {
  const isSearchOpen = useSearchStore( state => state.isSearchOpen );
  const closeSearch = useSearchStore( state => state.closeSearch );

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  function searchTextHandler(event:React.ChangeEvent<HTMLInputElement>) {
    setFilteredProducts(products.filter( product => product.name.toLowerCase().includes(event.currentTarget.value.toLowerCase().trim()) ));
  }

  async function getAllProductsHandler() {
    try {
      setLoading(true);
      const queryResult = await getAllProducts();
      setProducts(queryResult);
      setLoading(false);
    }
    catch {
      setError("Unable to display the products. Sorry!");
    }
  }

  return {
    isSearchOpen,
    closeSearch,
    products,
    loading,
    error,
    filteredProducts,
    setFilteredProducts,
    searchTextHandler,
    getAllProductsHandler,
  }
}