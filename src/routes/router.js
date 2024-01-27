import { createBrowserRouter } from "react-router-dom";
import MainLayout  from "../Layout/MainLayout";
import DashBoardLayout from "../Layout/DashBoardLayout";

import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import NotFound from "../pages/NotFound/NotFound";
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

import PublicRoute from "./PublicRoute";
import Products from "../pages/Products/Products";

import AllCategories from "../components/DashBoard/ManageCategories/AllCategories/AllCategories";
import AddCategory from "../components/DashBoard/ManageCategories/AddCategory/AddCategory";
import AllBarands from "../components/DashBoard/ManageBrands/AllBrands/AllBarands";
import AddBrand from '../components/DashBoard/ManageBrands/AddBrand/AddBrand';
import AllProducts from "../components/DashBoard/ManageProducts/AllProducts/AllProducts";
import AddProduct from "../components/DashBoard/ManageProducts/AddProduct/AddProduct";



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
        element: <Products />,
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
        path: "/dashboard/manage-categories",
        element: <AllCategories />,
      },
      {
        path: "/dashboard/add-category",
        element: <AddCategory />,
      },
      {
        path: "/dashboard/manage-brands",
        element: <AllBarands />,
      },
      {
        path: "/dashboard/add-brand",
        element: <AddBrand />,
      },
    ]
  },
]);
