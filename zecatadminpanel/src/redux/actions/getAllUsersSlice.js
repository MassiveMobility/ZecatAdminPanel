import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchUsers = createAsyncThunk("product/fetchUsers", async () => {
  try {
    const response = await axios.get(endPoints.getAllUsers);
    const AllUsers = response.data?.data?.users || [];
    console.log("vide", AllUsers);
    return AllUsers;
  } catch (error) {
    throw Error("Error fetching products: " + error.message);
  }
});

const initialState = {
  AllUsers: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "AllUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.AllUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
