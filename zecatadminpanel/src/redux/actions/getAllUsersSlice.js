import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";

export const fetchUsers = createAsyncThunk("product/fetchUsers", async () => {
  try {
    const response = await axios.get(endPoints.getAllUsers);
    const allUsers = response.data?.data?.users || [];
    console.log("vide", allUsers);
    return allUsers;
  } catch (error) {
    throw Error("Error fetching products: " + error.message);
  }
});

const initialState = {
  allUsers: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
