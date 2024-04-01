import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoints } from "../../api/endpoint";
import axiosInstance from "../../api/axiosInstance";

export const createBrand = createAsyncThunk(
  "brand/createBrands",
  async (details = {}) => {
    console.log("payload", details);
    try {
      const response = await axiosInstance.post(endPoints.createBrand, details);
      const brand = response.data?.data?.brand || {};

      return brand;
    } catch (error) {
      throw Error("Error fetching products: " + error.message);
    }
  }
);

const initialState = {
  productDetails: {},
  loading: false,
  error: null,
};

export const createBrandSlice = createSlice({
  name: "createBrand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBrand.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = createBrandSlice.actions;

export default createBrandSlice.reducer;
