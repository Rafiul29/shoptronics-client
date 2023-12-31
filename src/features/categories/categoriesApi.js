import { apiSlice } from "../api/apiSlice";

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    // get all products
    getAllCategories: builder.query({
      query: () => `/products/private`,
    }),

    // get Single product
    getSingleCategories: builder.query({
      query: (pid) => `/products/private/${pid}`,
    }),

    // add new product
    addCategories:builder.mutation({
      query:(data)=>({
        url:"/products/private",
        method:"POST",
        body:data,
      })
    }),

    // update a product
    updatecategories:builder.mutation({
      query:({pid,data})=>({
        url:`/products/private/${pid}`,
        method:"PUT",
        body:data,
      })
    }),

    // delete product
    deleteCategories:builder.mutation({
      query:(pid)=>({
        url:`/products/private/${pid}`,
        method:"DELETE",
      })
    })
  }),
});

export const {  } = categoriesApi;
