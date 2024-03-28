import TwoWheelerPage from "../pages/TwoWheelerPage/TwoWheelerPage";
import FourWheelerPage from "../pages/FourWheelerPage/FourWheelerPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import BrandsPage from "../pages/BrandsPage/BrandsPage";
import PostPage from "../pages/PostPage/PostPage";
import UserListPage from "../pages/UserListPage/UserListPage";
import EnquiryPage from "../pages/EnquiryPage/EnquiryPage";
import LoanApplicationPage from "../pages/LoanApplicationPage/LoanApplicationPage";
import LeaseApplicationPage from "../pages/LeaseApplicationPage/LeaseApplicationPage";
import Settings from "../pages/Settings/Settings";
import AddTwoWheeler from "../pages/TwoWheelerPage/AddTwoWheeler";
import AddVariant from "../pages/AddVariant/AddVariant";
import AddBrand from "../pages/AddBrand/AddBrand";
import AllPosts from "../pages/AllPosts/AllPosts";
import AllVideos from "../pages/AllVideos/AllVideos";
import AllCategories from "../pages/AllCategories/AllCategories";
import AddTags from "../pages/AddTags/AddTags";
import AllUsers from "../pages/AllUsers/AllUsers";
import AllReviews from "../pages/AllReviews/AllReviews";
import AddVideos from "../pages/AllVideos/AddVideos";
import AddPost from "../pages/AllPosts/AddPost";
import EnquiryDetail from "../pages/EnquiryPage/EnquiryDetail";
export const allRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/two_wheelers",
    element: <TwoWheelerPage />,
  },
  {
    path: "/two_wheelers/:id",
    element: <AddTwoWheeler />,
  },
  {
    path: "/two_wheelers/:id/:id",
    element: <AddVariant />,
  },
  {
    path: "/four_wheelers",
    element: <FourWheelerPage />,
  },
  {
    path: "/brands",
    element: <BrandsPage />,
  },
  {
    path: "/brands/:id",
    element: <AddBrand />,
  },
  {
    path: "/posts",
    element: <PostPage />,
  },
  {
    path: "/user_list",
    element: <UserListPage />,
  },
  {
    path: "/all_enquiries",
    element: <EnquiryPage />,
  },
  {
    path: "/all_enquiries/:id",
    element: <EnquiryDetail />,
  },
  {
    path: "/all_loans",
    element: <LoanApplicationPage />,
  },
  {
    path: "/all_leases",
    element: <LeaseApplicationPage />,
  },
  {
    path: "/setting",
    element: <Settings />,
  },
  {
    path: "/all_posts",
    element: <AllPosts />,
  },
  {
    path: "/all_posts/:id",
    element: <AddPost />,
  },
  {
    path: "/all_videos",
    element: <AllVideos />,
  },
  {
    path: "/all_videos/:id",
    element: <AddVideos />,
  },
  {
    path: "/all_categories",
    element: <AllCategories />,
  },
  {
    path: "/manage_tags",
    element: <AddTags />,
  },
  {
    path: "/all_users",
    element: <AllUsers />,
  },
  {
    path: "/all_reviews",
    element: <AllReviews />,
  },

  {
    path: "*",
    element: "not found",
  },
];
