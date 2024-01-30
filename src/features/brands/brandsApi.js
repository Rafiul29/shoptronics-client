import { apiSlice } from "../api/apiSlice";

export const brandsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getAllBrands: builder.query({
      query: () => "/brands/private",
    }),

    // get Single product
    getSigleBrand: builder.query({
      query: (bid) => `/brands/private/${bid}`,
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
      query: ({ bid, data }) => ({
        url: `/brands/private/${bid}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete product
    deleteBrand: builder.mutation({
      query: (bid) => ({
        url: `brands/private//${bid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {useCreateBrandMutation,useGetAllBrandsQuery,useDeleteBrandMutation,useGetSigleBrandQuery,useUpdateBrandMutation} = brandsApi;
