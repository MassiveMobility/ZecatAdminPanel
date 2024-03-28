import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";
import axiosInstance from "../../api/axiosInstance";

export const createProduct = createAsyncThunk(
  "product/createProducts",
  async (details = {}) => {
    try {
      const response = await axiosInstance.post(endPoints.createProduct, details);
      const product = response.data?.data?.product || {};

      return product;
    } catch (error) {
      throw Error("Error fetching products: " + error.message);
    }
  }
);

const initialState = {
  product: {},
  loading: false,
  error: null,
};

export const createProductSlice = createSlice({
  name: "createProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = createProductSlice.actions;

export default createProductSlice.reducer;
