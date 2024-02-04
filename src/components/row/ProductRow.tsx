import { CartItem } from "@/models/";
import { useCartStore } from "@/services/";
import styles from "./ProductRow.module.scss";

interface ProductRowSlimProps {
  cartItem: CartItem;
}

export function ProductRow(props:ProductRowSlimProps) {
  const { cartItem } = props;

  const removeProduct = useCartStore( state => state.removeProduct );
  const decreaseProductQuantity = useCartStore( state => state.decreaseProductQuantity );
  const increaseProductQuantity = useCartStore( state => state.increaseProductQuantity );

  function decreaseQuantityHandler(productId:string, productPrice:number, productQuantiy:number) {
    decreaseProductQuantity(productId, productPrice, productQuantiy);
  }

  function increaseQuantityHandler(productId:string, productPrice:number) {
    increaseProductQuantity(productId, productPrice);
  }

  function removeFromCartHandler(productId:string, productPrice:number, productQuantiy:number) {
    removeProduct(productId, productPrice, productQuantiy);
  }

  return (
    <>
      <li className={styles["row"]}>
        <div>{cartItem.product.name}</div>
        <div>{cartItem.productQuantity}</div>
        <div>€ {cartItem.product.price * cartItem.productQuantity}</div>
        <div className={styles["row-ctas"]}>
          <button type="button" onClick={ () => {decreaseQuantityHandler(cartItem.product.id, cartItem.product.price, cartItem.productQuantity)} }>-</button>
          <button type="button" onClick={ () => {increaseQuantityHandler(cartItem.product.id, cartItem.product.price)} }>+</button>
          <button type="button" onClick={ () => {removeFromCartHandler(cartItem.product.id, cartItem.product.price, cartItem.productQuantity)} }>x</button>
        </div>
      </li>
    </>
  )
}