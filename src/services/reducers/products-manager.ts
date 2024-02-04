import { Product } from "@/models/";

type ProductsManagerState = {
  products: Partial<Product>[];
  newProduct: Partial<Product>;
  productAction: "add"|"edit";
  isProductFormOpen: boolean;
  error: string;
}

type ProductsManagerActionSetProduct = { type: "setProduct", payload: Partial<Product>[] }
type ProductsManagerActionSetNewProduct = { type: "setNewProduct", payload: Partial<Product>  }
type ProductsManagerActionSetProductAction = { type: "setProductAction", payload: "add"|"edit"  }
type ProductsManagerActionSetIsProductFormOpen = { type: "setIsProductFormOpen", payload: boolean  }
type ProductsManagerActionSetError = { type: "setError", payload: string }
type ProductsManagerAction = ProductsManagerActionSetProduct | ProductsManagerActionSetNewProduct | ProductsManagerActionSetProductAction | ProductsManagerActionSetIsProductFormOpen | ProductsManagerActionSetError;

export const productsManagerInitialState:ProductsManagerState = {
  products: [],
  newProduct: {},
  productAction: "add",
  isProductFormOpen: false,
  error: "",
}

export function productsManagerReducer(state:ProductsManagerState, action:ProductsManagerAction) {
  switch (action.type) {
    case "setProduct":
      return { ...state, products: action.payload };
    case "setNewProduct":
      const {newProduct} = state;
      if (Object.keys(action.payload).length > 0)
        return { ...state, newProduct: { ...newProduct, ...action.payload } };
      else
        return { ...state, newProduct: {  } };
    case "setProductAction":
      return { ...state, productAction: action.payload };
    case "setIsProductFormOpen":
      return { ...state, isProductFormOpen: action.payload };
    case "setError":
      return { ...state, error: action.payload };
  }

  return state;
}