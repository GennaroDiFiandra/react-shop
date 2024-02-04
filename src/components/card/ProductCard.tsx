import { Link } from "react-router-dom";
import { Product } from "@/models/";
import { useCartStore } from "@/services/";
import styles from "./ProductCard.module.scss";

type ProductCardActions = "addToCart" | "view";
type ProductCardContext = "archive" | "single";

interface ProductCardProps {
  product: Product;
  actions: ProductCardActions[];
  context: ProductCardContext;
}

export function ProductCard(props:ProductCardProps) {
  const { product, actions, context } = props;

  const addProduct = useCartStore( state => state.addProduct );
  const openCart = useCartStore( state => state.openCart );

  function addToCartHandler(product:Product) {
    addProduct(product);
    openCart();
  }

  const CardWrapper = (context==="archive") ?
                        "li" :
                      (context==="single") ?
                        "div" :
                        "div"

  return (
    <>
      <CardWrapper className={styles["card"]}>
        <div><img className={styles["card-image"]} src={product.image} alt={product.name} /></div>
        <div className={styles["card-info"]}>
          <div className={styles["card-name"]}>{product.name}</div>
          <div className={styles["card-description"]}>{product.description}</div>
          <div className={styles["card-price"]}>€ {product.price}</div>
          <div className={styles["card-ctas"]}>
            {
              actions.includes("addToCart") &&
              <button className={styles["card-cta"]} type="button" onClick={ () => {addToCartHandler(product)} }>Add To Cart</button>
            }

            {
              actions.includes("view") &&
              <Link to={`/shop/product/${product.id}`} state={{product}} className={styles["card-cta"]}>View</Link>
            }
          </div>
        </div>
      </CardWrapper>
    </>
  )
}