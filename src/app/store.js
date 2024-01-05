import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";

import usersSliceReducer from "../features/users/usersSlice";
import productsSliceReducer from "../features/products/productsSlice";

export const store=configureStore({
    reducer:{

      [apiSlice.reducerPath]:apiSlice.reducer,
      auth:authSliceReducer,
      users:usersSliceReducer,
      products:productsSliceReducer,

    },
    devTools:process.env.NODE_ENV!=='production',
    middleware:(getDefaultMiddlewares)=>getDefaultMiddlewares().concat(apiSlice.middleware),
})