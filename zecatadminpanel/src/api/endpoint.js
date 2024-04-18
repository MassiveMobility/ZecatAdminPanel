const BASE_URL_V1 = "http://13.127.86.204:5000/api/v1/";
const BASE_URL_V2 = "http://13.127.86.204:5000/api/v2/";

const PRODUCT_ROUTE = BASE_URL_V2 + "product/";
const BRAND_ROUTE = BASE_URL_V2 + "brand/";
const VIDEO_ROUTE = BASE_URL_V2 + "video/";
const ENQUIRY_ROUTE = BASE_URL_V2 + "enquiry/";
const EXPLORE_ROUTE = BASE_URL_V2 + "explore/";
const USER_ROUTE = BASE_URL_V1 + "auth/";
const COMMENT_ROUTE = BASE_URL_V1 + "comments/";

export const endPoints = {
  createProduct: PRODUCT_ROUTE,
  createBrand: BRAND_ROUTE,
  createVideo: VIDEO_ROUTE,
  getAllProducts: PRODUCT_ROUTE + "all/",
  getAllBrands: BRAND_ROUTE,
  getAllVideos: VIDEO_ROUTE,
  getAllUsers: USER_ROUTE,
  getAllEnquiries: ENQUIRY_ROUTE,
  getAllApplications: EXPLORE_ROUTE,
  getAllReviews: COMMENT_ROUTE,
  deleteProduct: PRODUCT_ROUTE + "delete/"
};
