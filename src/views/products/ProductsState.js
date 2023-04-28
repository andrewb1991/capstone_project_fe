import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  "products/getProducts/",
  async (id) => {
    try {
      const data = await fetch(process.env.REACT_APP_PRODUCTS_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await data.json();
    } catch (error) {
      if (error) throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "allProducts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "Error loading products";
      });
  },
});

export const productsState = (state) => state.productsStore.products;
export const productsStateLoading = (state) => state.productsStore.isLoading;
export const productsStateError = (state) => state.productsStore.error;

export default productsSlice.reducer;
