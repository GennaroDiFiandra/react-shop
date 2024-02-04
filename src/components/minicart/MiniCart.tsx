import { Link } from "react-router-dom";
import { useCartStore } from "@/services/";
import { ProductRow } from "@/components/";
import styles from "./MiniCart.module.scss"

export function MiniCart() {
  const cartItems = useCartStore( state => state.cartItems );
  const cartProductsTotal = useCartStore( state => state.cartProductsTotal );
  const emptyCart = useCartStore( state => state.emptyCart );
  const closeCart = useCartStore( state => state.closeCart );

  function emptyCartHandler() {
    emptyCart();
  }

  function closeCartHandler () {
    closeCart();
  }

  return (
    <>
    {
      cartItems.length > 0 &&
      <aside className={styles["mini-cart"]}>
        <div className={styles["mini-cart-ctas"]}>
          <button className={styles["mini-cart-cta"]} type="button" onClick={emptyCartHandler}>Empty</button>
          <button className={styles["mini-cart-cta"]} type="button" onClick={closeCartHandler}>Close</button>
        </div>

        <p>MiniCart</p>

        <ul className={styles["mini-cart-products"]}>
          {
            cartItems.map( item => <ProductRow key={item.product.id} cartItem={item} /> )
          }
        </ul>

        <p>Total € {cartProductsTotal}</p>

        <div className={styles["mini-cart-ctas"]}>
          <Link to="/checkout" className={styles["mini-cart-cta"]}>Go To Checkout</Link>
        </div>
      </aside>
    }
    </>
  )
}