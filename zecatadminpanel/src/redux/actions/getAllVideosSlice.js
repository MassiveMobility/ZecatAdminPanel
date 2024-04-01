import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchVideos = createAsyncThunk("product/fetchVideos", async () => {
  try {
    const response = await axios.get(endPoints.getAllVideos);
    const allVideos = response.data?.data || [];
    return allVideos;
  } catch (error) {
    throw Error("Error fetching products: " + error.message);
  }
});

const initialState = {
  allVideos: [],
  loading: false,
  error: null,
};

export const videoSlice = createSlice({
  name: "allVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.allVideos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = videoSlice.actions;

export default videoSlice.reducer;
