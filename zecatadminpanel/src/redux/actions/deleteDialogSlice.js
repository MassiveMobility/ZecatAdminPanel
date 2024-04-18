import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    open: false
};

export const deleteDialogSlice = createSlice({
  name: "createVideo",
  initialState,
  reducers: {
    setOpen: (state, action) => {
        state.open = action.payload
    }
  },
});

export const { setOpen } = deleteDialogSlice.actions;

export default deleteDialogSlice.reducer;
