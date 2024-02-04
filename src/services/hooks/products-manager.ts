import { useReducer } from "react";
import { Product } from "@/models/";
import { getAllProducts, createProduct, updateProduct, productsManagerReducer, productsManagerInitialState } from "@/services/";

export function useProductsManager() {
  const [productsManagerState, dispatch] = useReducer(productsManagerReducer, productsManagerInitialState);

  async function getAllProductsHandler() {
    try {
      const queryResult = await getAllProducts();
      dispatch({ type: "setProduct", payload: queryResult });
    }
    catch {
      dispatch({ type: "setError", payload: "Something went wrong while processing your request." });
    }
  }

  function addProductHandler() {
    dispatch({ type: "setProductAction", payload: "add" });
    dispatch({ type: "setNewProduct", payload: {} });
    dispatch({ type: "setIsProductFormOpen", payload: true });
  }

  function editProductHandler(product:Partial<Product>) {
    dispatch({ type: "setProductAction", payload: "edit" });
    dispatch({ type: "setNewProduct", payload: product });
    dispatch({ type: "setIsProductFormOpen", payload: true });
  }

  function inputHandler(event:React.ChangeEvent<HTMLInputElement>) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    dispatch({ type: "setNewProduct", payload: {[name]: value} });
  }

  async function formHandler(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (productsManagerState.productAction === "add") {
      await createProduct(productsManagerState.newProduct);
      dispatch({ type: "setIsProductFormOpen", payload: false });
      getAllProductsHandler();
    }
    else {
      await updateProduct(productsManagerState.newProduct);
      dispatch({ type: "setIsProductFormOpen", payload: false });
      getAllProductsHandler();
    }
  }

  function closeFormHandler() {
    dispatch({ type: "setIsProductFormOpen", payload: false });
  }

  return {
    productsManagerState,
    getAllProductsHandler,
    addProductHandler,
    editProductHandler,
    inputHandler,
    formHandler,
    closeFormHandler,
  };
}