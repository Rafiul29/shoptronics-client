import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    // get all products
    getProducts: builder.query({
      query: () => `/products/private`,
    }),

    // get Single product
    getSingleProduct: builder.query({
      query: (pid) => `/products/private/${pid}`,
    }),

    // add new product
    addProduct:builder.mutation({
      query:(data)=>({
        url:"/products/private",
        method:"POST",
        body:data,
      })
    }),

    // update a product
    updateProduct:builder.mutation({
      query:({pid,data})=>({
        url:`/products/private/${pid}`,
        method:"PUT",
        body:data,
      })
    }),

    // delete product
    deleteProduct:builder.mutation({
      query:(pid)=>({
        url:`/products/private/${pid}`,
        method:"DELETE",
      })
    })
  }),
});

export const { useGetProductsQuery,useGetSingleProductQuery,useAddProductMutation,useUpdateProductMutation,useDeleteProductMutation } = productsApi;
