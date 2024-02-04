import { useEffect } from "react";
import { useProductsManager } from "@/services/";
import { CmsProductForm, CmsProductRow, Notification } from "@/components/";
import styles from "./ProductsManager.module.scss";

export function ProductsManager() {
  const {
    productsManagerState,
    getAllProductsHandler,
    addProductHandler,
    editProductHandler,
    inputHandler,
    formHandler,
    closeFormHandler,
  } = useProductsManager();

  useEffect(
    () => {
      getAllProductsHandler();
    } , []
  );

  return (
    <div className={styles["cms-products"]}>
      { productsManagerState.error && <Notification type="failure" message={productsManagerState.error} /> }

      {
        productsManagerState.products.length > 0 &&
        <ul className={styles["cms-products-table"]}>
          { productsManagerState.products.map( product => <CmsProductRow key={product.id} product={product} editProductHandler={editProductHandler} /> ) }
        </ul>
      }

      { productsManagerState.isProductFormOpen && <CmsProductForm newProduct={productsManagerState.newProduct} formHandler={formHandler} inputHandler={inputHandler} closeFormHandler={closeFormHandler} /> }

      <div className={styles["cms-products-ctas"]}>
        <button className={styles["cms-products-cta"]} type="button" onClick={addProductHandler}>Add new product</button>
      </div>
    </div>
  )
}