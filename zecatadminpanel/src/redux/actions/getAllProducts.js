import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get(endPoints.getAllProducts);
      const allProducts = response.data?.data?.products || [];
      return allProducts;
    } catch (error) {
      throw Error("Error fetching products: " + error.message);
    }
  }
);

const initialState = {
  allProducts: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {setProducts} = productSlice.actions;

export default productSlice.reducer;
