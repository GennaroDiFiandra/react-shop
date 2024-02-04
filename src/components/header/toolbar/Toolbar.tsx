import { useLocation } from "react-router-dom";
import { useCartStore, useSearchStore } from "@/services/";
import { CartIcon, SearchIcon } from "@/components/";
import styles from "./Toolbar.module.scss";

export function Toolbar() {
  const location = useLocation();

  const isSearchOpen = useSearchStore( state => state.isSearchOpen );
  const openSearch = useSearchStore( state => state.openSearch );
  const closeSearch = useSearchStore( state => state.closeSearch );

  const cartItems = useCartStore( state => state.cartItems );
  const cartProductsQuantity = useCartStore( state => state.cartProductsQuantity );
  const isCartOpen = useCartStore( state => state.isCartOpen );
  const openCart = useCartStore( state => state.openCart );
  const closeCart = useCartStore( state => state.closeCart );

  function searchHandler() {
    isSearchOpen ? closeSearch() : openSearch();
    isCartOpen && closeCart();
  }

  function basketHandler() {
    isCartOpen ? closeCart() : openCart();
    isSearchOpen && closeSearch();
  }

  return (
    <div className={styles["main-toolbar"]}>
      {
        location.pathname === "/shop" &&
        <div className={styles["search"]} onClick={searchHandler}>
          <SearchIcon />
        </div>
      }

      {
        cartItems.length > 0 &&
        <div className={styles["basket"]} onClick={basketHandler}>
          <CartIcon />
          <span>{cartProductsQuantity}</span>
        </div>
      }
    </div>
  )
}