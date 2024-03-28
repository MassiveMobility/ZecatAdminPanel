import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchEnquiries = createAsyncThunk("product/fetchEnquiries", async () => {
  try {
    const response = await axios.get(endPoints.getAllEnquiries);
    const AllEnquiries = response.data?.data || [];
    return AllEnquiries;
  } catch (error) {
    throw Error("Error fetching products: " + error.message);
  }
});

const initialState = {
    AllEnquiries: [],
  loading: false,
  error: null,
};

export const enquirySlice = createSlice({
  name: "AllEnquiries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEnquiries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEnquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.AllEnquiries = action.payload;
      })
      .addCase(fetchEnquiries.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = enquirySlice.actions;

export default enquirySlice.reducer;
