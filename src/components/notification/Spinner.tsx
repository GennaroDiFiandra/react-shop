import styles from "./Spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles["lds-facebook"]}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}