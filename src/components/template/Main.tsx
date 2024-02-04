import { Outlet } from "react-router-dom";
import styles from "./Main.module.scss";

export function Main() {
  return (
    <main className={styles["main-content"]}>
      <Outlet />
    </main>
  )
}