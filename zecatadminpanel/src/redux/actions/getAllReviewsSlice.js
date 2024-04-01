import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchReviews = createAsyncThunk(
  "product/fetchReviews",
  async () => {
    try {
      const response = await axios.get(endPoints.getAllReviews);
      const allReviews = response.data?.data?.comments || [];
      console.log("ds", allReviews);
      return allReviews;
    } catch (error) {
      throw Error("Error fetching products: " + error.message);
    }
  }
);

const initialState = {
  allReviews: [],
  loading: false,
  error: null,
};

export const reviewSlice = createSlice({
  name: "allReviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.allReviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = reviewSlice.actions;

export default reviewSlice.reducer;
