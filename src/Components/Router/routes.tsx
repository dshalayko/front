import React from "react";
// import ProductPage from "../../Pages/ProductPage";
// import AuthPage from "../../Pages/AuthPage";
// import CartPage from "../../Pages/CartPage";
// import CheckoutProduct from "../../Pages/CheckoutProduct";
// import Catalog from "../../Pages/Сatalog";
// import AdminPage from "../../Pages/AdminPage";

const ProductPage = React.lazy(() => import("../../Pages/ProductPage/index"));
const AuthPage = React.lazy(() => import("../../Pages/AuthPage/index"));
const CartPage = React.lazy(() => import("../../Pages/CartPage/index"));
const CheckoutProduct = React.lazy(
  () => import("../../Pages/CheckoutProduct/index")
);
// const Catalog = React.lazy(() => import("../../Pages/Сatalog/index"));
const Category = React.lazy(() => import("../../Pages/CategoryPage/index"));
const AdminPage = React.lazy(() => import("../../Pages/AdminPage/index"));

interface IRoute {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
}

export const publicRoutes: IRoute[] = [
  {
    path: "/",
    Component: AuthPage,
  },
];

export const authRoutes: IRoute[] = [
  {
    path: "/product",
    Component: ProductPage,
  },
  {
    path: "/cart",
    Component: CartPage,
  },
  {
    path: "/checkout",
    Component: CheckoutProduct,
  },
  // {
  //   path: "/catalog",
  //   Component: Catalog,
  // },
  {
    path: "/category",
    Component: Category,
  },
  {
    path: "/admin",
    Component: AdminPage,
  },
];
