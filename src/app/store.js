import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice"
 
import productReducer from "../features/product/productSlice"
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import usersSliceReducer from "../features/users/usersSlice";

export const store=configureStore({
    reducer:{

      [apiSlice.reducerPath]:apiSlice.reducer,
      auth:authSliceReducer,
      // users:usersSliceReducer,



      products:productsReducer,
      product:productReducer
    },
    devTools:process.env.NODE_ENV!=='production',
    middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware),
})