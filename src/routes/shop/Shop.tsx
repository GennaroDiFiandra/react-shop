import { useEffect } from "react";
import { useShop } from "@/services/";
import { ProductCard, Notification, Spinner, Search } from "@/components/";
import styles from "./Shop.module.scss";

export function Shop() {
  const {
    isSearchOpen,
    closeSearch,
    products,
    loading,
    error,
    filteredProducts,
    setFilteredProducts,
    searchTextHandler,
    getAllProductsHandler,
  } = useShop();

  useEffect( () => {
    closeSearch();
  } , [] );

  useEffect( () => {
    setFilteredProducts(products);
  } , [products] );

  useEffect( () => {
    getAllProductsHandler();
  } , [] );

  return (
    <>
      { loading && <Spinner /> }

      { error && <Notification type="failure" message={error} /> }

      {
        products.length > 0 &&
          <ul className={styles["products"]}>
            {
              filteredProducts.map( product => <ProductCard key={product.id} product={product} actions={[ "addToCart", "view" ]} context="archive" /> )
            }
          </ul>
      }

      { isSearchOpen && <Search actions={[ "closeSearch" ]} searchTextHandler={searchTextHandler} /> }
    </>
  )
}