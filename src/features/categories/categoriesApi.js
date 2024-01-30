import { apiSlice } from "../api/apiSlice";

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all categories
    getAllCategories: builder.query({
      query: () => `/categories/private`,
    }),

    // get Single category
    getSingleCategory: builder.query({
      query: (cid) => `/categories/private/${cid}`,
    }),

    // add new category
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories/private",
        method: "POST",
        body: data,
      }),
    }),

    // update a category
    updateCategory: builder.mutation({
      query: ({ cid, data }) => ({
        url: `/categories/private/${cid}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete category
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
  useUpdateCategoryMutation,
} = categoriesApi;
