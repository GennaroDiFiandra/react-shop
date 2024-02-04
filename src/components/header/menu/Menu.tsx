import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore, useCartStore } from "@/services/";
import styles from "./Menu.module.scss";

export function Menu() {
  const navigator = useNavigate();

  const logout = useAuthStore( state => state.logout );
  const isLoggedIn = useAuthStore( state => state.isLoggedIn );

  const cartItems = useCartStore( state => state.cartItems );

  function logoutHandler(event:React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    logout();
    navigator("/login");
  }

  return (
    <nav className={styles["main-menu"]}>
      <NavLink to="/shop">Products</NavLink>
      { cartItems.length > 0 && <NavLink to="/checkout">Checkout</NavLink> }
      { !isLoggedIn && <NavLink to="/login">Login</NavLink> }
      { isLoggedIn &&  <Link to="/logout" onClick={logoutHandler}>Logout</Link> }
      { isLoggedIn &&  <NavLink to="/cms">CMS</NavLink> }
    </nav>
  )
}