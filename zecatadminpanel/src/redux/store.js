import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./actions/getAllProducts";
import createProductSliceReducer from "./actions/createProductSlice";

export const store = configureStore({
  reducer: {
    allProducts: productSliceReducer,
    createProduct: createProductSliceReducer
  },
});
