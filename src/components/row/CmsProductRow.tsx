import { Product } from "@/models/";
import styles from "./CmsProductRow.module.scss";

interface CmsProductRowProps {
  product: Partial<Product>;
  editProductHandler: (product:Partial<Product>) => void;
}

export function CmsProductRow(props:CmsProductRowProps) {
  const { product, editProductHandler } = props;

  return (
    <>
      <li className={styles["cms-products-product"]}>
        <div><img className={styles["cms-products-product-image"]} src={product.image} alt={product.name} /></div>
        <div className={styles["cms-products-product-name"]}>{product.name}</div>
        <div className={styles["cms-products-product-description"]}>{product.description}</div>
        <div className={styles["cms-products-product-price"]}>€ {product.price}</div>
        <div className={styles["cms-products-product-ctas"]}>
          <button className={styles["cms-products-product-cta"]} type="button" onClick={ () => {editProductHandler(product)} }>Edit</button>
        </div>
      </li>
    </>
  )
}