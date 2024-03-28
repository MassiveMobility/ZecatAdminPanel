import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./actions/getAllProducts";
import brandSliceReducer from "./actions/getAllBrandsSlice";
import videoSliceReducer from "./actions/getAllVideosSlice";
import userSliceReducer from "./actions/getAllUsersSlice";
import enquirySliceReducer from "./actions/getAllEnquiriesSlice";
import applicationSliceReducer from "./actions/getAllApplicationsSlice";
import reviewSliceReducer from "./actions/getAllReviewsSlice";
import createProductSliceReducer from "./actions/createProductSlice";

export const store = configureStore({
  reducer: {
    allProducts: productSliceReducer,
    allBrands: brandSliceReducer,
    allVideos: videoSliceReducer,
    allUsers: userSliceReducer,
    allEnquiries: enquirySliceReducer,
    allReviews: reviewSliceReducer,
    allApplications: applicationSliceReducer,
    createProduct: createProductSliceReducer
  },
});
