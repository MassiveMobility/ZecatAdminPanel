import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../api/endpoint";
import axiosInstance from "../../api/axiosInstance";

export const createProduct = createAsyncThunk(
  "product/createProducts",
  async (details = {}) => {
    console.log("payload", details);
    try {
      const response = await axiosInstance.post(
        endPoints.createProduct,
        details
      );
      const product = response.data?.data?.product || {};

      return product;
    } catch (error) {
      throw Error("Error fetching products: " + error.message);
    }
  }
);

const initialState = {
  productDetails: {
    variants: [],
    product: {
      brand: "",
      model: "",
      price: "",
      lower_price_range: 0,
      high_price_range: 0,
      stand_out_features: [],
      vechicle_type: 2,
      public: true,
      status: "published",
      tags: [],
    },
    overview_image: [],
    exterior_image: [],
    interior_image: [],
    steering_image: [],
    standout_image: [],
    images: [],
  },
  loading: false,
  error: null,
};

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      Object.entries(action.payload).forEach(([field, value]) => {
        state.productDetails.product[field] = value;
      });
    },
    setImageDetails: (state, action) => {
      Object.entries(action.payload).forEach(([field, value]) => {
        state.productDetails[field] = value;
      });
    },
    setVariants: (state, action) => {
      state.productDetails.variants.push(action.payload);
    },
    removeVariants: (state, action) => {
      const updates = state.productDetails.variants.filter(
        (item) => item.name !== action.payload
      );
      state.productDetails.variants = updates;
    },
    // this is for edited product
    addProductVariants: (state, action) => {
      state.productDetails.variants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {
  setProductDetails,
  setImageDetails,
  setVariants,
  removeVariants,
  addProductVariants,
} = createProductSlice.actions;

export default createProductSlice.reducer;
