import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endPoints } from "../../api/endpoint";
import axios from "axios";

export const createVideo = createAsyncThunk(
  "video/createVideos",
  async (details = {}) => {
    console.log("payload", details);
    try {
      const response = await axios.post(endPoints.createVideo, details);
      const video = response.data?.data?.video || {};
      return video;
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

export const createVideoSlice = createSlice({
  name: "createVideo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(createVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(createVideo.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = createVideoSlice.actions;

export default createVideoSlice.reducer;
