import { Outlet } from "react-router-dom";
import { Aside, Footer, Header } from "@/components/";

export function Wrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <Aside />
      <Footer />
    </>
  )
}