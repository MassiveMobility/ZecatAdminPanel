import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchApplications = createAsyncThunk("product/fetchApplications", async () => {
  try {
    const response = await axios.get(endPoints.getAllApplications);
    const AllApplications = response.data?.data || [];
    return AllApplications;
  } catch (error) {
    throw Error("Error fetching products: " + error.message);
  }
});

const initialState = {
    AllApplications: [],
  loading: false,
  error: null,
};

export const applicationSlice = createSlice({
  name: "AllApplications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.AllApplications = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = applicationSlice.actions;

export default applicationSlice.reducer;
