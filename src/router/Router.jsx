import { createBrowserRouter } from "react-router";

import Guides from "../components/guides/Guides";

import Layouts from "../layouts/Layouts";

import Menu_Layout from "../layouts/menu-layout/Menu-Layout";
import Menu from "../pages/menu/Menu";
import Product from "../pages/product/Product";

import Main_Layout from "../layouts/main-layout/Main-Layout";
import Cart from "../pages/cart/Cart";
import Contacts from "../pages/contacts/Contacts";
import Receipt from "../pages/receipt/Receipt";
import Reviews from "../pages/reviews/Reviews";
import Search from "../pages/search/Search";
import Vacancies from "../pages/vacancies/Vacancies";

const router = createBrowserRouter([
  {
    path: "guides",
    element: <Guides />,
  },
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Menu_Layout />,
        children: [
          {
            path: "/",
            element: <Menu />,
          },
          {
            path: "menu",
            element: <Menu />,
          },
          {
            path: "menu/:category",
            element: <Menu />,
          },
          {
            path: "menu/:category/:subcategory",
            element: <Menu />,
          },
        ],
      },
      {
        path: "/",
        element: <Main_Layout />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "contacts",
            element: <Contacts />,
          },
          {
            path: "receipt",
            element: <Receipt />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
          {
            path: "search",
            element: <Search />,
          },
          {
            path: "vacancies",
            element: <Vacancies />,
          },
        ],
      },
    ],
  },
  {
    path: "/:product",
    element: <Product />,
  },
  {
    path: "menu/:product",
    element: <Product />,
  },
  {
    path: "search/:product",
    element: <Product />,
  },
  {
    path: "menu/:category/:product",
    element: <Product />,
  },
  {
    path: "menu/:category/:subcategory/:product",
    element: <Product />,
  },
]);

export default router;
