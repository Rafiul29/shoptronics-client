import { apiSlice } from "../api/apiSlice";

export const brandsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getAllBrands: builder.query({
      query: () => `/products/private`,
    }),

    // get Single product
    getSigleBrand: builder.query({
      query: (pid) => `/products/private/${pid}`,
    }),

    // add new product
    addBrand: builder.mutation({
      query: (data) => ({
        url: "/products/private",
        method: "POST",
        body: data,
      }),
    }),

    // update a product
    updateBrand: builder.mutation({
      query: ({ pid, data }) => ({
        url: `/products/private/${pid}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete product
    deleteBrand: builder.mutation({
      query: (pid) => ({
        url: `/products/private/${pid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {} = brandsApi;
