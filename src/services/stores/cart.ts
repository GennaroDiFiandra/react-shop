import { create } from 'zustand';
import { CartItem, Product } from '@/models/';

interface CartStore {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartProductsQuantity: number;
  cartProductsTotal: number;
  addProduct: (product:Pick<Product, "id"|"name"|"description"|"price"|"image">) => void;
  removeProduct: (productId:string, productPrice:number, productQuantity:number) => void;
  decreaseProductQuantity: (productId:string, productPrice:number, productQuantity:number) => void;
  increaseProductQuantity: (productId:string, productPrice:number) => void;
  emptyCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>()((set, get) => ({
  isCartOpen: false,
  cartItems: [],
  cartProductsQuantity: 0,
  cartProductsTotal: 0,
  addProduct: (product) => {
    const cartItemInTheCart = get().cartItems.find( cartItem => cartItem.product.id === product.id );

    if (cartItemInTheCart === undefined) {
      set(state => ({
        cartItems: [...state.cartItems, { product, productQuantity: 1 }],
      }));
    }
    else {
      cartItemInTheCart.productQuantity++;
      set(state => ({
        cartItems: state.cartItems.map( cartItem => cartItem.product.id === cartItemInTheCart.product.id ? cartItemInTheCart : cartItem ),
      }));
    }

    set({
      cartProductsQuantity: get().cartProductsQuantity + 1,
      cartProductsTotal: get().cartProductsTotal + product.price,
    });
  },
  removeProduct: (productId, productPrice, productQuantity) => {
    set(state => ({
      cartItems: state.cartItems.filter( cartItem => cartItem.product.id !== productId && cartItem ),
      cartProductsQuantity: state.cartProductsQuantity - productQuantity,
      cartProductsTotal: state.cartProductsTotal - (productPrice * productQuantity),
    }));
  },
  decreaseProductQuantity: (productId, productPrice, productQuantity) => {
    if (productQuantity === 1)
      get().removeProduct(productId, productPrice, productQuantity);
    else
      set(state => ({
        cartItems: state.cartItems.map( cartItem => cartItem.product.id !== productId ? cartItem : { product: cartItem.product, productQuantity: cartItem.productQuantity - 1 } ),
        cartProductsQuantity: state.cartProductsQuantity - 1,
        cartProductsTotal: state.cartProductsTotal - productPrice,
      }));
  },
  increaseProductQuantity: (productId, productPrice) => {
    set(state => ({
      cartItems: state.cartItems.map( cartItem => cartItem.product.id !== productId ? cartItem : { product: cartItem.product, productQuantity: cartItem.productQuantity + 1 } ),
      cartProductsQuantity: state.cartProductsQuantity + 1,
      cartProductsTotal: state.cartProductsTotal + productPrice,
    }));
  },
  emptyCart: () => set({ isCartOpen: false, cartItems: [], cartProductsQuantity: 0, cartProductsTotal: 0 }),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));