import { Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Login, Shop, Checkout, ProductDetails, Cms, ProductsManager, UsersManager, OrdersManager } from "@/routes/";
import { Main, PrivateRoute, Wrapper } from "@/components/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Wrapper />} >
      <Route index element={<Navigate to="/shop" />} />

      <Route path="shop" element={<Main />} >
        <Route index element={<Shop />} />
        <Route path="product">
          <Route index element={<Navigate to="/shop" />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
      </Route>

      <Route path="checkout" element={<Main />} >
        <Route index element={<Checkout />} />
      </Route>

      <Route path="login" element={<Main />} >
        <Route index element={<Login />} />
      </Route>

      <Route path="cms" element={<Main />} >
        <Route index element={<PrivateRoute><Cms /></PrivateRoute>} />
        <Route path="products" element={<PrivateRoute><ProductsManager /></PrivateRoute>} />
        <Route path="users" element={<PrivateRoute><UsersManager /></PrivateRoute>} />
        <Route path="orders" element={<PrivateRoute><OrdersManager /></PrivateRoute>} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

export default function App() { return <RouterProvider router={router} /> }