
import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
   // create a new order
   createOrder: builder.mutation({
    query: (data) => ({
      url: "/stripe/create-checkout-session",
      method: "POST",
      body: data,
    }),
  }),

    // get Single product
    getAllOrders: builder.query({
      query: () => `/brands/private/`,
    }),
  }),
});

export const {useCreateOrderMutation,useGetAllOrdersQuery} = ordersApi;
