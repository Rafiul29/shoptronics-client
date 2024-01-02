import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./productApi";


// initialState
const initialState = {
  product: {},
  isloading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const product = await getProduct(id);
    console.log(id)
    return product;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchProduct.pending, (state) => {
      state.isError = false;
      state.isloading = true;
    })
    .addCase(fetchProduct.fulfilled,(state,action)=>{
      state.isloading=false;
      state.product=action.payload;
    })
    .addCase(fetchProduct.rejected,(state,action)=>{
      state.isloading = false;
      state.product={};
      state.isError=true;
      state.error=action.error?.message;
    })
  },
});

export default productSlice.reducer;