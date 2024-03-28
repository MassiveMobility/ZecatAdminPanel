import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchBrands = createAsyncThunk(
  "product/fetchBrands",
  async () => {
    try {
      const response = await axios.get(endPoints.getAllBrands);
      const allBrands = response.data?.data || [];
      return allBrands;
    } catch (error) {
      throw Error("Error fetching products: " + error.message);
    }
  }
);

const initialState = {
  allBrands: [],
  loading: false,
  error: null,
};

export const brandSlice = createSlice({
  name: "allBrands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.allBrands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = brandSlice.actions;

export default brandSlice.reducer;
