import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsApi";

// initialState
const initialState = {
  products: [],
  isloading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProducts();
    console.log(products)
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.isError = false;
      state.isloading = true;
    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
      state.isloading=false;
      state.products=action.payload;
    })
    .addCase(fetchProducts.rejected,(state,action)=>{
      state.isloading = false;
      state.products=[];
      state.isError=true;
      state.error=action.error?.message;
    })
  },
});

export default productsSlice.reducer;