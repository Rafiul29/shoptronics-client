import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to="/sign-in"></Navigate>;
};

export default PrivateRoute;
