import { Logo, Menu, Toolbar } from "@/components/";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles["main-header"]}>
      <Logo />
      <Menu />
      <Toolbar />
    </header>
  )
}