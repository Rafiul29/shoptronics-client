import { apiSlice } from "../api/apiSlice";

export const brandsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getAllBrands: builder.query({
      query: () => "/brands/private",
    }),

    // get Single product
    getSigleBrand: builder.query({
      query: (pid) => `/brands/private/${pid}`,
    }),

    // add new product
    createBrand: builder.mutation({
      query: (data) => ({
        url: "/brands/private",
        method: "POST",
        body: data,
      }),
    }),

    // update a product
    updateBrand: builder.mutation({
      query: ({ pid, data }) => ({
        url: `/brands/private/${pid}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete product
    deleteBrand: builder.mutation({
      query: (pid) => ({
        url: `brands/private//${pid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {useCreateBrandMutation,useGetAllBrandsQuery,useDeleteBrandMutation,useGetSigleBrandQuery} = brandsApi;
