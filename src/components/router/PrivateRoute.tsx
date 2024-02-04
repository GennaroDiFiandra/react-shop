import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/services/";

export function PrivateRoute(props:PropsWithChildren) {
  const isLoggedIn = useAuthStore( state => state.isLoggedIn );

  return (
    <>
      { isLoggedIn ? props.children : <Navigate to="/login" /> }
    </>
  )
}