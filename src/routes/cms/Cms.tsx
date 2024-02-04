import { Link } from "react-router-dom";
import styles from "./Cms.module.scss"

export function Cms() {
  return (
    <div className={styles["cms"]}>
      <div className={styles["cms-ctas"]}>
        <Link to="/cms/users" className={styles["cms-cta"]}>Users</Link>
        <Link to="/cms/products" className={styles["cms-cta"]}>Products</Link>
        <Link to="/cms/orders" className={styles["cms-cta"]}>Orders</Link>
      </div>
    </div>
  )
}