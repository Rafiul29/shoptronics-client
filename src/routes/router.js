import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import DashBoardLayout from "../Layout/DashboardLayout";

import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import PublicRoute from "./PublicRoute";

import AllCategories from "../components/Dashboard/ManageCategories/AllCategories/AllCategories";
import AddCategory from "../components/Dashboard/ManageCategories/AddCategory/AddCategory";
import AllBarands from "../components/Dashboard/ManageBrands/AllBrands/AllBarands";
import AddBrand from "../components/Dashboard/ManageBrands/AddBrand/AddBrand";
import AllProducts from "../components/Dashboard/ManageProducts/AllProducts/AllProducts";
import AddProduct from "../components/Dashboard/ManageProducts/AddProduct/AddProduct";
import UpdateProduct from "../components/Dashboard/ManageProducts/UpdateProduct/UpdateProduct";
import UpdateCategory from "../components/Dashboard/ManageCategories/UpdateCategory/UpdateCategory";
import UpdateBrand from "../components/Dashboard/ManageBrands/UpdateBarand/UpdateBrand";
import ProductPages from "../pages/Products/ProductPages";
import ProductItem from "../components/Products/ProductItem";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from './PrivateRoute';
import CheckoutSuccess from "../pages/CheckoutSuccess/CheckoutSuccess";
import Orders from "../pages/Orders/Orders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductPages />,
      },
      {
        path: "/product/:pid",
        element: <ProductItem />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/sign-up",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "/sign-in",
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout/>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout-success",
        element: (
          <PrivateRoute>
            <CheckoutSuccess/>
          </PrivateRoute>
        ),
      },
      {
        path: "/user/orders",
        element: (
          <PrivateRoute>
            <Orders/>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard/manage-products",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/update-product/:pid",
        element: <UpdateProduct />,
      },
      {
        path: "/dashboard/manage-categories",
        element: <AllCategories />,
      },
      {
        path: "/dashboard/add-category",
        element: <AddCategory />,
      },
      {
        path: "/dashboard/update-category/:cid",
        element: <UpdateCategory />,
      },
      {
        path: "/dashboard/manage-brands",
        element: <AllBarands />,
      },
      {
        path: "/dashboard/add-brand",
        element: <AddBrand />,
      },
      {
        path: "/dashboard/update-brand/:bid",
        element: <UpdateBrand />,
      },
    ],
  },
]);
