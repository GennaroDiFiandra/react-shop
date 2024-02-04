import { Product } from "@/models/";
import styles from "./CmsProductForm.module.scss";

interface ProductFormProps {
  newProduct: Partial<Product>;
  formHandler: (event:React.FormEvent<HTMLFormElement>) => void;
  inputHandler: (event:React.ChangeEvent<HTMLInputElement>) => void;
  closeFormHandler: () => void;
}

export function CmsProductForm(props:ProductFormProps) {
  const { newProduct, formHandler, inputHandler, closeFormHandler } = props;

  return (
    <>
      <form className={styles["cms-products-form"]} onSubmit={event => formHandler(event)}>
        <button type="button" className={styles["cms-products-form-cta"]} onClick={closeFormHandler}>Close</button>
        <div>
          <label htmlFor="name" className={styles["cms-products-form-label"]}>Name</label>
          <input className={styles["cms-products-form-field"]} type="text" name="name" id="name" value={newProduct?.name || ""} required onChange={event => inputHandler(event)} />
        </div>
        <div>
          <label htmlFor="description" className={styles["cms-products-form-label"]}>Description</label>
          <input className={styles["cms-products-form-field"]} type="text" name="description" id="description" value={newProduct?.description || ""} required onChange={event => inputHandler(event)} />
        </div>
        <div>
          <label htmlFor="price" className={styles["cms-products-form-label"]}>Price</label>
          <input className={styles["cms-products-form-field"]} type="text" name="price" id="price" value={newProduct?.price || ""} required onChange={event => inputHandler(event)} />
        </div>
        <div>
          <label htmlFor="image" className={styles["cms-products-form-label"]}>Image URL</label>
          <input className={styles["cms-products-form-field"]} type="text" name="image" id="image" value={newProduct?.image || ""} required onChange={event => inputHandler(event)} />
        </div>
        <button type="submit" className={styles["cms-products-form-cta"]}>Submit</button>
      </form>
    </>
  )
}