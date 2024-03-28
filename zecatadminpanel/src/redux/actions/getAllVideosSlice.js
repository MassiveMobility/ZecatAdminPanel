import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchVideos = createAsyncThunk("product/fetchVideos", async () => {
  try {
    const response = await axios.get(endPoints.getAllVideos);
    const AllVideos = response.data?.data || [];
    return AllVideos;
  } catch (error) {
    throw Error("Error fetching products: " + error.message);
  }
});

const initialState = {
  AllVideos: [],
  loading: false,
  error: null,
};

export const videoSlice = createSlice({
  name: "AllVideos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.AllVideos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = videoSlice.actions;

export default videoSlice.reducer;
