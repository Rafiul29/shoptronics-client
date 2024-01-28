import { apiSlice } from "../api/apiSlice";

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getAllCategories: builder.query({
      query: () => `/categories/private`,
    }),

    // get Single product
    getSingleCategory: builder.query({
      query: (pid) => `/products/private/${pid}`,
    }),

    // add new product
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories/private",
        method: "POST",
        body: data,
      }),
    }),

    // update a product
    updatecategory: builder.mutation({
      query: ({ pid, data }) => ({
        url: `/products/private/${pid}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete product
    deleteCategory: builder.mutation({
      query: (cid) => ({
        url: `/categories/private/${cid}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetSingleCategoryQuery,
  useUpdatecategoryMutation,
} = categoriesApi;
